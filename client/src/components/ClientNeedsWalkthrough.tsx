import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Building2, CalendarDays, CheckCircle2, Film, Flame, MapPin, Radio, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type FormState = {
  projectType: string;
  duration: string;
  editingNeeds: string;
  location: string;
  clientName: string;
  clientPhone: string;
  notes: string;
};

const projectTypes = [
  { id: 'real-estate', label: 'NT / interjeras', icon: Building2 },
  { id: 'sports', label: 'Sportas / veiksmas', icon: Flame },
  { id: 'events', label: 'Renginys', icon: CalendarDays },
  { id: 'livestream', label: 'Tiesioginis eteris', icon: Radio },
  { id: 'commercials', label: 'Reklama / kinas', icon: Film },
  { id: 'other', label: 'Kita idėja', icon: Sparkles },
];

const durations = [
  { id: 'hours', label: 'Kelios valandos', hint: 'Valandinis tarifas' },
  { id: 'full-day', label: 'Visa darbo diena', hint: 'Projekto kaina' },
  { id: 'multi-day', label: 'Kelių dienų projektas', hint: 'Individuali sąmata' },
];

const edits = [
  { id: 'raw', label: 'Tik žaliava' },
  { id: 'edited', label: 'Montažas ir spalvos' },
  { id: 'full-cinematic', label: 'Pilnas kino klipas' },
];

export default function ClientNeedsWalkthrough() {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({ projectType: '', duration: '', editingNeeds: '', location: 'Kaunas', clientName: '', clientPhone: '', notes: '' });
  const set = (key: keyof FormState, value: string) => setForm(current => ({ ...current, [key]: value }));

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.clientName || !form.clientPhone) {
      toast.error('Įrašykite vardą ir telefono numerį.');
      return;
    }
    setSent(true);
    toast.success('Užklausa gauta. Susisieksime netrukus.');
  };

  if (sent) return (
    <section id="poreikiu-vedlys" className="py-20 bg-[#111d3a] text-white">
      <div className="max-w-xl mx-auto px-5 text-center"><div className="w-14 h-14 rounded-full bg-[#f4c400] text-[#111d3a] grid place-items-center mx-auto mb-5"><CheckCircle2 /></div><div className="eyebrow text-[#f4c400] mb-3">Užklausa gauta</div><h2 className="font-display text-4xl font-bold">Ačiū, {form.clientName}.</h2><p className="text-white/70 mt-4 leading-relaxed">Peržiūrėsime jūsų projektą ir susisieksime numeriu <strong className="text-white">{form.clientPhone}</strong>. Jei norite greičiau — skambinkite <a className="text-[#f4c400]" href="tel:+37060012345">+370 600 12345</a>.</p><button onClick={() => { setSent(false); setStep(1); }} className="mt-7 text-sm font-bold text-[#f4c400] hover:underline">Pradėti naują užklausą</button></div>
    </section>
  );

  return (
    <section id="poreikiu-vedlys" className="py-20 md:py-24 bg-[#111d3a] text-white">
      <div className="max-w-5xl mx-auto px-5 lg:px-8"><div className="grid lg:grid-cols-[.7fr_1.3fr] gap-12 items-start"><div><div className="eyebrow text-[#f4c400] mb-4">Poreikių vedlys</div><h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.03]">Papasakokite apie projektą. Mes parinksime kitą žingsnį.</h2><p className="text-white/65 mt-5 leading-relaxed">Trys trumpi klausimai. Be įsipareigojimų ir be sudėtingos formos.</p><div className="flex gap-2 mt-8">{[1, 2, 3].map(number => <span key={number} className={`w-8 h-1 rounded-full ${step >= number ? 'bg-[#f4c400]' : 'bg-white/20'}`} />)}</div></div>
        <div className="rounded-2xl bg-white text-[#111d3a] p-6 sm:p-8 shadow-2xl"><div className="flex items-center justify-between mb-7"><div><div className="eyebrow text-[#a07a00] mb-2">0{step} / 03</div><h3 className="font-display text-2xl font-bold">{step === 1 ? 'Ką filmuojame?' : step === 2 ? 'Kiek laiko ir ko reikės?' : 'Kaip su jumis susisiekti?'}</h3></div><MapPin className="w-5 h-5 text-[#a07a00]" /></div>
          {step === 1 && <><div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{projectTypes.map(item => { const Icon = item.icon; const active = form.projectType === item.id; return <button key={item.id} onClick={() => set('projectType', item.id)} className={`p-4 rounded-xl border text-left transition-colors ${active ? 'bg-[#f4c400] border-[#f4c400]' : 'border-[#ddd7c9] hover:border-[#a07a00]'}`}><Icon className="w-5 h-5 mb-5" /><span className="text-sm font-bold leading-tight">{item.label}</span></button>; })}</div><div className="flex justify-end mt-7"><Button disabled={!form.projectType} onClick={() => setStep(2)} className="rounded-full bg-[#111d3a] hover:bg-[#1b2b50] text-white">Toliau <ArrowRight className="w-4 h-4 ml-2" /></Button></div></>}
          {step === 2 && <><div className="space-y-3">{durations.map(item => <button key={item.id} onClick={() => set('duration', item.id)} className={`w-full flex items-center justify-between text-left rounded-xl border px-4 py-4 transition-colors ${form.duration === item.id ? 'border-[#f4c400] bg-[#fff8d7]' : 'border-[#ddd7c9] hover:border-[#a07a00]'}`}><span className="font-bold text-sm">{item.label}</span><span className="text-xs text-[#a07a00] font-bold">{item.hint}</span></button>)}</div><div className="mt-6"><div className="text-sm font-bold mb-3">Montažas</div><div className="flex flex-wrap gap-2">{edits.map(item => <button key={item.id} onClick={() => set('editingNeeds', item.id)} className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${form.editingNeeds === item.id ? 'bg-[#111d3a] text-white border-[#111d3a]' : 'border-[#ddd7c9] hover:border-[#a07a00]'}`}>{item.label}</button>)}</div></div><div className="flex justify-between mt-7"><Button variant="outline" onClick={() => setStep(1)} className="rounded-full border-[#ddd7c9]"><ArrowLeft className="w-4 h-4 mr-2" />Atgal</Button><Button disabled={!form.duration || !form.editingNeeds} onClick={() => setStep(3)} className="rounded-full bg-[#111d3a] hover:bg-[#1b2b50] text-white">Toliau <ArrowRight className="w-4 h-4 ml-2" /></Button></div></>}
          {step === 3 && <form onSubmit={submit}><div className="space-y-4"><input required value={form.clientName} onChange={event => set('clientName', event.target.value)} placeholder="Vardas arba įmonė *" className="w-full rounded-xl border border-[#ddd7c9] bg-[#f7f4ed] px-4 py-3 outline-none focus:border-[#a07a00]" /><input required value={form.clientPhone} onChange={event => set('clientPhone', event.target.value)} placeholder="Telefono numeris *" className="w-full rounded-xl border border-[#ddd7c9] bg-[#f7f4ed] px-4 py-3 outline-none focus:border-[#a07a00]" /><input value={form.location} onChange={event => set('location', event.target.value)} placeholder="Lokacija / miestas" className="w-full rounded-xl border border-[#ddd7c9] bg-[#f7f4ed] px-4 py-3 outline-none focus:border-[#a07a00]" /><textarea value={form.notes} onChange={event => set('notes', event.target.value)} placeholder="Trumpai apie idėją (nebūtina)" rows={3} className="w-full rounded-xl border border-[#ddd7c9] bg-[#f7f4ed] px-4 py-3 outline-none focus:border-[#a07a00] resize-none" /></div><div className="flex justify-between mt-7"><Button type="button" variant="outline" onClick={() => setStep(2)} className="rounded-full border-[#ddd7c9]"><ArrowLeft className="w-4 h-4 mr-2" />Atgal</Button><Button type="submit" className="rounded-full bg-[#f4c400] hover:bg-[#ffd52e] text-[#111d3a] font-bold">Siųsti užklausą <Send className="w-4 h-4 ml-2" /></Button></div></form>}
        </div></div></div>
    </section>
  );
}
