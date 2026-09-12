import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure, router } from '../_core/trpc';

const clean = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

const inquirySchema = z.object({
  projectType: z.string().min(1).max(120),
  duration: z.string().min(1).max(120),
  editingNeeds: z.string().min(1).max(160),
  clientName: z.string().min(1).max(160),
  clientPhone: z.string().min(3).max(80),
  email: z.string().email().max(320),
  location: z.string().max(160).optional(),
  notes: z.string().max(5000).optional(),
});

export const contactRouter = router({
  submit: publicProcedure.input(inquirySchema).mutation(async ({ input }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'El. pašto paslauga nesukonfigūruota.' });
    }

    const requestNumber = String(Date.now()).slice(-4);
    const clientName = clean(input.clientName);
    const subject = `Užkl #${requestNumber} (${clientName})`;
    const body = [
      `Ko ieškote: ${clean(input.projectType)}`,
      `Darbo trukmė: ${clean(input.duration)}`,
      `Montažas: ${clean(input.editingNeeds)}`,
      '',
      'Kliento info',
      `Vardas / įmonė: ${clientName}`,
      `Telefonas: ${clean(input.clientPhone)}`,
      `El. paštas: ${clean(input.email)}`,
      `Miestas: ${clean(input.location || '') || 'Nenurodyta'}`,
      '___________________',
      '',
      'Trumpai apie idėją:',
      clean(input.notes || '') || 'Nenurodyta',
    ].join('\n');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Sparnuotis website <website@send.sparnuotis.lt>',
        to: ['markas@sparnuotis.lt'],
        reply_to: input.email,
        subject,
        text: body,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Resend] Inquiry email failed:', response.status, errorText.slice(0, 500));
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Nepavyko išsiųsti užklausos. Bandykite dar kartą arba skambinkite mums.' });
    }

    const result = await response.json() as { id?: string };
    return { success: true as const, requestNumber, messageId: result.id ?? null };
  }),
});
