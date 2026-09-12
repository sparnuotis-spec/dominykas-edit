import { afterEach, describe, expect, it, vi } from 'vitest';
import { appRouter } from './routers';
import type { TrpcContext } from './_core/context';

describe('contact.submit', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('sends the requested inquiry format to Markas with client reply-to', async () => {
    process.env.RESEND_API_KEY = 'test-resend-key';
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: 'email_123' }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      }),
    );
    vi.stubGlobal('fetch', fetchMock);

    const ctx: TrpcContext = {
      user: null,
      req: {} as TrpcContext['req'],
      res: {} as TrpcContext['res'],
    };

    const result = await appRouter.createCaller(ctx).contact.submit({
      projectType: 'Renginiai',
      duration: 'Kelios valandos',
      editingNeeds: 'Reels video editing',
      clientName: 'Testinė įmonė',
      clientPhone: '+37060000000',
      email: 'client@example.com',
      location: '',
      notes: 'Trumpa projekto idėja',
    });

    expect(result.success).toBe(true);
    expect(result.messageId).toBe('email_123');
    expect(fetchMock).toHaveBeenCalledOnce();

    const request = fetchMock.mock.calls[0]?.[1] as RequestInit;
    const payload = JSON.parse(String(request.body));
    expect(payload.from).toBe('Sparnuotis website <website@send.sparnuotis.lt>');
    expect(payload.to).toEqual(['markas@sparnuotis.lt']);
    expect(payload.reply_to).toBe('client@example.com');
    expect(payload.subject).toMatch(/^Užkl #\d{4} \(Testinė įmonė\)$/);
    expect(payload.text).toContain('Ko ieškote: Renginiai');
    expect(payload.text).toContain('Darbo trukmė: Kelios valandos');
    expect(payload.text).toContain('Montažas: Reels video editing');
    expect(payload.text).toContain('Kliento info');
    expect(payload.text).toContain('Miestas: Nenurodyta');
    expect(payload.text).toContain('___________________');
    expect(payload.text).toContain('Trumpai apie idėją:\nTrumpa projekto idėja');
  });
});
