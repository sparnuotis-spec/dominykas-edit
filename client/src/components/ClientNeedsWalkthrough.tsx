import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Building2, CalendarDays, CheckCircle2, Clapperboard, Film, Flame, MapPin, Radio, Send, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

type FormState = { projectType: string; duration: string; editingNeeds: string; location: string; clientName: string; clientPhone: string; email: string; notes: string };

const projectTypes = [
  { id: 'real-estate', label: 'Nekilnojamasis turtas', description: 'Butai, namai, biurai, viešbučiai ir NT projektai.', icon: Building2 },
  { id: 'sports', label: 'Sportas / veiksmas', description: 'Driftas, motociklai, lenktynės ir kitas greitis.', icon: Flame },
  { id: 'events', label: 'Renginiai', description: 'Festivaliai, koncertai, įmonių ir privatūs renginiai.', icon: CalendarDays },
  { id: 'livestream', label: 'Tiesioginė transliacija', description: 'Per HDMI arba SMTP serverį.', icon: Radio },
  { id: 'commercials', label: 'Reklama / kino gamyba', description: 'Komerciniai klipai, filmai ir kampanijų turinys.', icon: Clapperboard },
  { id: 'reels', label: 'Reels / socialiniai tinklai', description: 'Vienas arba keli vertikalūs klipai Instagram ir TikTok.', icon: Film },
  { id: 'other', label: 'Kita idėja', description: 'Jei dar nežinote, ko reikia — padėsime išsigryninti.', icon: Sparkles },
];
const durations = [
  { id: 'hours', label: 'Kelios valandos', description: 'Trumpas filmavimas vienoje lokacijoje. Kaina skaičiuojama valandiniu tarifu.' },
  { id: 'full-day', label: 'Visa darbo diena', description: 'Pamaina, renginys ar didesnė gamyba. Kaina skaičiuojama kaip projektas.' },
  { id: 'multi-day', label: 'Kelios filmavimo dienos', description: 'Didesnė gamyba Lietuvoje arba Europoje. Paruošiame individualią sąmatą.' },
];
const editingOptions = [
  { id: 'raw', label: 'Tik RAW/žalia medžiaga', description: 'Perduodame originalią medžiagą jūsų montuotojui. RAW galime išsiųsti, jei to reikia.' },
  { id: 'long-form', label: 'Ilgo formato video montažas', description: 'Kelių minučių video su muzika, geromis spalvomis.' },
  { id: 'reels-editing', label: 'Reels video montažas', description: 'Vienas arba keli vertikalūs Reels klipai Instagram, TikTok ar Shorts.' },
  { id: 'raw-and-editing', label: 'RAW/žalia medžiaga + montažas', description: 'Gaunate ir visą RAW/žalią medžiagą, ir mūsų paruoštą galutinį video.' },
];

export default function ClientNeedsWalkthrough() {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({ projectType: '', duration: '', editingNeeds: '', location: '', clientName: '', clientPhone: '', email: '', notes: '' });
  const update = (key: keyof FormState, value: string) => setForm(prev => ({ ...prev, [key]: value }));
  const submitInquiry = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSent(true);
      toast.success('Užklausa išsiųsta. Susisieksime netrukus.');
    },
    onError: error => toast.error(error.message || 'Nepavyko išsiųsti užklausos.'),
  });
  const selectedProject = projectTypes.find(item => item.id === form.projectType);
  const selectedDuration = durations.find(item => item.id === form.duration);
  const selectedEditing = editingOptions.find(item => item.id === form.editingNeeds);
  const summary = useMemo(() => [selectedProject?.label, selectedDuration?.label, selectedEditing?.label].filter(Boolean).join(' • '), [selectedProject, selectedDuration, selectedEditing]);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.clientName || !form.clientPhone || !form.email) { toast.error('Įrašykite vardą arba įmonę, telefono numerį ir el. paštą.'); return; }
    submitInquiry.mutate({
      projectType: selectedProject?.label ?? form.projectType,
      duration: selectedDuration?.label ?? form.duration,
      editingNeeds: selectedEditing?.label ?? form.editingNeeds,
      clientName: form.clientName,
      clientPhone: form.clientPhone,
      email: form.email,
      location: form.location,
      notes: form.notes,
    });
  };

  if (sent) return <section id="poreikiu-vedlys" className="py-20 bg-[#27251f] text-white"><div className="max-w-xl mx-auto px-5 text-center"><div className="w-14 h-14 rounded-full bg-[#efc400] text-[#27251f] grid place-items-center mx-auto mb-5"><CheckCircle2 /></div><div className="text-xs uppercase tracking-[.16em] font-bold text-[#efc400] mb-3">Užklausa gauta</div><h2 className="font-display text-4xl font-bold">Ačiū, {form.clientName}.</h2><p className="text-white/70 mt-4 leading-relaxed">Jūsų užklausa išsiųsta adresu <strong className="text-white">markas@sparnuotis.lt</strong>. Susisieksime netrukus. Jei reikia greičiau, skambinkite <a className="text-[#efc400]" href="tel:+37068575900">+370 685 75900</a>.</p><button onClick={() => { setSent(false); setStep(1); }} className="mt-7 text-sm font-bold text-[#efc400] hover:underline">Pradėti naują užklausą</button></div></section>;

  return <section id="poreikiu-vedlys" className="py-20 md:py-24 bg-[#27251f] text-white"><div className="max-w-6xl mx-auto px-5 lg:px-8"><div className="grid lg:grid-cols-[.7fr_1.3fr] gap-12 items-start"><div><div className="text-xs uppercase tracking-[.16em] font-bold text-[#efc400] mb-4">Poreikių vedlys</div><h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.03]">Atsakykite į keturis klausimus. Mes paruošime tinkamą kryptį.</h2><p className="text-white/65 mt-5 leading-relaxed">Kuo daugiau žinosime, tuo tiksliau galėsime parinkti droną, komandą, laiką ir sąmatą.</p><div className="flex gap-2 mt-8">{[1, 2, 3, 4].map(number => <span key={number} className={`w-10 h-1 rounded-full ${step >= number ? 'bg-[#efc400]' : 'bg-white/20'}`} />)}</div></div>
      <div className="rounded-2xl bg-[#fcfbf7] text-[#27251f] p-6 sm:p-8 shadow-2xl"><div className="flex items-center justify-between mb-7"><div><div className="text-[10px] uppercase tracking-[.16em] font-bold text-[#9b7b00] mb-2">0{step} / 04</div><h3 className="font-display text-2xl font-bold">{step === 1 ? 'Ko ieškote?' : step === 2 ? 'Darbo trukmė' : step === 3 ? 'Montažas' : 'Santrauka'}</h3></div><MapPin className="w-5 h-5 text-[#9b7b00]" /></div>
        {step === 1 && <><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{projectTypes.map(item => { const Icon = item.icon; const active = form.projectType === item.id; return <button key={item.id} onClick={() => update('projectType', item.id)} className={`p-4 rounded-xl border text-left transition-colors ${active ? 'bg-[#efc400] border-[#efc400]' : 'border-[#d9d4c8] hover:border-[#9b7b00]'}`}><Icon className="w-5 h-5 mb-4" /><span className="block text-sm font-bold">{item.label}</span><span className="block text-xs text-[#6d6a61] mt-1 leading-relaxed">{item.description}</span></button>; })}</div><div className="flex justify-end mt-7"><Button disabled={!form.projectType} onClick={() => setStep(2)} className="rounded-full bg-[#27251f] hover:bg-[#3a382f] text-white">Toliau <ArrowRight className="w-4 h-4 ml-2" /></Button></div></>}
        {step === 2 && <><div className="space-y-3">{durations.map(item => <button key={item.id} onClick={() => update('duration', item.id)} className={`w-full text-left rounded-xl border px-4 py-4 transition-colors ${form.duration === item.id ? 'border-[#efc400] bg-[#fff8d7]' : 'border-[#d9d4c8] hover:border-[#9b7b00]'}`}><span className="block font-bold text-sm">{item.label}</span><span className="block text-xs text-[#6d6a61] mt-1 leading-relaxed">{item.description}</span></button>)}</div><div className="mt-6 rounded-xl bg-[#ebe7de] p-4 text-sm text-[#6d6a61]"><strong className="text-[#27251f]">Kainodara:</strong> filmavimo kaina skaičiuojama valandiniu tarifu arba kaip projektas, prie kainos pridedant kuro išlaidas.</div><div className="flex justify-between mt-7"><Button variant="outline" onClick={() => setStep(1)} className="rounded-full border-[#d9d4c8]"><ArrowLeft className="w-4 h-4 mr-2" />Atgal</Button><Button disabled={!form.duration} onClick={() => setStep(3)} className="rounded-full bg-[#27251f] hover:bg-[#3a382f] text-white">Toliau <ArrowRight className="w-4 h-4 ml-2" /></Button></div></>}
        {step === 3 && <><div className="space-y-3">{editingOptions.map(item => <button key={item.id} onClick={() => update('editingNeeds', item.id)} className={`w-full text-left rounded-xl border px-4 py-4 transition-colors ${form.editingNeeds === item.id ? 'border-[#efc400] bg-[#fff8d7]' : 'border-[#d9d4c8] hover:border-[#9b7b00]'}`}><span className="block font-bold text-sm">{item.label}</span><span className="block text-xs text-[#6d6a61] mt-1 leading-relaxed">{item.description}</span></button>)}</div><div className="flex justify-between mt-7"><Button variant="outline" onClick={() => setStep(2)} className="rounded-full border-[#d9d4c8]"><ArrowLeft className="w-4 h-4 mr-2" />Atgal</Button><Button disabled={!form.editingNeeds} onClick={() => setStep(4)} className="rounded-full bg-[#27251f] hover:bg-[#3a382f] text-white">Santrauka <ArrowRight className="w-4 h-4 ml-2" /></Button></div></>}
        {step === 4 && <form onSubmit={submit}><div className="rounded-xl bg-[#ebe7de] p-4 mb-5"><div className="text-[10px] uppercase tracking-[.16em] font-bold text-[#9b7b00]">Jūsų pasirinkimai</div><div className="font-display text-lg font-bold mt-2">{summary}</div><div className="text-sm text-[#6d6a61] mt-2">Miestas: {form.location || 'Nenurodyta'}</div></div><div className="space-y-4"><input required value={form.clientName} onChange={event => update('clientName', event.target.value)} placeholder="Vardas arba įmonė *" className="w-full rounded-xl border border-[#d9d4c8] bg-[#f4f1e9] px-4 py-3 outline-none focus:border-[#9b7b00]" /><input required value={form.clientPhone} onChange={event => update('clientPhone', event.target.value)} placeholder="Telefono numeris *" className="w-full rounded-xl border border-[#d9d4c8] bg-[#f4f1e9] px-4 py-3 outline-none focus:border-[#9b7b00]" /><input required type="email" value={form.email} onChange={event => update('email', event.target.value)} placeholder="El. paštas *" className="w-full rounded-xl border border-[#d9d4c8] bg-[#f4f1e9] px-4 py-3 outline-none focus:border-[#9b7b00]" /><input value={form.location} onChange={event => update('location', event.target.value)} placeholder="Lokacija / miestas" className="w-full rounded-xl border border-[#d9d4c8] bg-[#f4f1e9] px-4 py-3 outline-none focus:border-[#9b7b00]" /><textarea value={form.notes} onChange={event => update('notes', event.target.value)} placeholder="Trumpai apie idėją (rekomenduojama)" rows={3} className="w-full rounded-xl border border-[#d9d4c8] bg-[#f4f1e9] px-4 py-3 outline-none focus:border-[#9b7b00] resize-none" /></div><div className="flex justify-between mt-7"><Button type="button" variant="outline" onClick={() => setStep(3)} className="rounded-full border-[#d9d4c8]"><ArrowLeft className="w-4 h-4 mr-2" />Atgal</Button><Button type="submit" disabled={submitInquiry.isPending} className="rounded-full bg-[#efc400] hover:bg-[#ffd72f] text-[#27251f] font-bold">{submitInquiry.isPending ? 'Siunčiama…' : 'Siųsti užklausą'} <Send className="w-4 h-4 ml-2" /></Button></div></form>}
      </div></div></div></section>;
}
