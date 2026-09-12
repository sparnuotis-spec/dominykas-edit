import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Clock3, MapPin, Play, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { PORTFOLIO_ITEMS, DRONE_SPECS, TEAM_MEMBERS, PortfolioItem } from '@/data';
import { Navigation, Footer } from '@/components/Navigation';
import ClientNeedsWalkthrough from '@/components/ClientNeedsWalkthrough';
import { VideoModal } from '@/components/VideoModal';

const services = [
  { title: 'NT ir interjerai', text: 'Sklandūs skrydžiai per erdves, kurie leidžia žiūrovui pajusti vietą.', number: '01' },
  { title: 'Sportas ir veiksmas', text: 'Artimi, greiti kadrai su tikru greičio pojūčiu.', number: '02' },
  { title: 'Renginiai ir reklamos', text: 'Įsimintinas vaizdas jūsų auditorijai, prekės ženklui ar scenai.', number: '03' },
];

export default function Home() {
  const [filter, setFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
  const [droneId, setDroneId] = useState(DRONE_SPECS[0].id);
  const works = filter === 'all' ? PORTFOLIO_ITEMS.slice(0, 4) : PORTFOLIO_ITEMS.filter(item => item.category === filter);
  const drone = DRONE_SPECS.find(item => item.id === droneId) || DRONE_SPECS[0];

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#111d3a]">
      <Navigation />

      <section className="relative min-h-[690px] flex items-end overflow-hidden bg-[#111d3a] text-white">
        <img src="/manus-storage/hero-fpv_aaf565b5.jpg" alt="FPV skrydis virš Kauno" className="absolute inset-0 w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 hero-shade" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-8 pb-20 pt-36">
          <div className="max-w-3xl">
            <div className="eyebrow text-[#f4c400] mb-5">FPV filmavimo studija • Kaunas</div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[.95] tracking-[-.05em] font-bold mb-7">Matyti kitaip.<br /><span className="text-[#f4c400]">Pajusti arčiau.</span></h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed mb-9">Filmuojame taip, kad žiūrovas ne tik matytų jūsų erdvę, renginį ar veiksmą — jis norėtų ten būti.</p>
            <div className="flex flex-wrap gap-3"><a href="#portfolio" className="rounded-full bg-[#f4c400] text-[#111d3a] px-6 py-3.5 font-bold hover:bg-[#ffd52e] transition-colors">Žiūrėti darbus <ArrowRight className="inline w-4 h-4 ml-1" /></a><a href="#poreikiu-vedlys" className="rounded-full border border-white/35 bg-white/10 px-6 py-3.5 font-semibold hover:bg-white/15 transition-colors">Papasakoti apie projektą</a></div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 text-sm text-white/75"><span><ShieldCheck className="inline w-4 h-4 text-[#f4c400] mr-2" />Saugūs skrydžiai patalpose</span><span><MapPin className="inline w-4 h-4 text-[#f4c400] mr-2" />Kaunas, dirbame visoje Lietuvoje</span></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 paper-grid">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[.8fr_1.2fr] gap-14 items-start">
          <div><div className="eyebrow text-[#a07a00] mb-4">Mūsų požiūris</div><h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.02]">Mažiau triukšmo.<br />Daugiau jausmo.</h2></div>
          <div className="max-w-2xl"><p className="text-xl leading-relaxed text-[#111d3a]/80">FPV nėra tik kamera ant drono. Tai gyvas judesys, ritmas ir perspektyva, kurios neįmanoma gauti stovint vietoje.</p><p className="mt-5 text-[#647089] leading-relaxed">Mes dirbame paprastai: išklausome idėją, suplanuojame skrydį, saugiai nufilmuojame ir atiduodame žaliavą arba paruoštą filmą. Be perteklinių pažadų ir sudėtingų terminų.</p><a href="#komanda" className="inline-flex items-center gap-2 mt-7 font-bold hover:text-[#a07a00]">Susipažinti su komanda <ArrowRight className="w-4 h-4" /></a></div>
        </div>
      </section>

      <section id="portfolio" className="py-20 md:py-28 bg-white border-y border-[#ddd7c9]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8"><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"><div><div className="eyebrow text-[#a07a00] mb-4">Darbai</div><h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Trumpi kadrai.<br />Ilgas įspūdis.</h2></div><div className="flex flex-wrap gap-2">{[{id:'all',label:'Visi'},{id:'real-estate',label:'NT'},{id:'sports',label:'Sportas'},{id:'events',label:'Renginiai'},{id:'commercials',label:'Reklamos'}].map(tab => <button key={tab.id} onClick={() => setFilter(tab.id)} className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${filter === tab.id ? 'bg-[#f4c400] text-[#111d3a]' : 'bg-[#f7f4ed] text-[#647089] hover:text-[#111d3a]'}`}>{tab.label}</button>)}</div></div>
          <div className="grid md:grid-cols-2 gap-6">{works.map((item, index) => <article key={item.id} onClick={() => setSelectedVideo(item)} className={`group cursor-pointer rounded-2xl overflow-hidden bg-[#f7f4ed] border border-[#ddd7c9] ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[1.35fr_.65fr]' : ''}`}><div className={`${index === 0 ? 'aspect-[16/8]' : 'aspect-[16/10]'} relative overflow-hidden`}><img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-[#111d3a]/75 via-transparent to-transparent" /><div className="absolute bottom-4 left-4 text-white"><span className="text-xs font-bold text-[#f4c400] uppercase tracking-wider">{item.categoryLabel}</span><h3 className="font-display text-xl font-bold mt-1 max-w-md">{item.title}</h3></div><span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#f4c400] text-[#111d3a] grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"><Play className="w-4 h-4 fill-current" /></span></div>{index === 0 && <div className="p-7 flex flex-col justify-between"><div><div className="text-sm text-[#647089] mb-5">{item.location} • {item.year}</div><p className="text-[#647089] leading-relaxed">{item.description}</p></div><div className="mt-8 text-sm font-bold flex items-center gap-2">Peržiūrėti projektą <ArrowUpRight className="w-4 h-4" /></div></div>}</article>)}</div></div>
      </section>

      <section id="paslaugos" className="py-20 md:py-28"><div className="max-w-7xl mx-auto px-5 lg:px-8"><div className="grid lg:grid-cols-[.7fr_1.3fr] gap-14"><div><div className="eyebrow text-[#a07a00] mb-4">Ką darome</div><h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.02]">Vaizdas, kuris juda su jumis.</h2></div><div className="divide-y divide-[#ddd7c9]">{services.map(item => <div key={item.number} className="py-6 first:pt-0 last:pb-0 grid grid-cols-[52px_1fr] gap-5"><div className="font-display text-2xl font-bold text-[#a07a00]">{item.number}</div><div><h3 className="font-display text-2xl font-bold">{item.title}</h3><p className="mt-2 text-[#647089] max-w-lg">{item.text}</p></div></div>)}</div></div></div></section>

      <ClientNeedsWalkthrough />

      <section id="technika" className="py-20 md:py-28 bg-[#111d3a] text-white"><div className="max-w-7xl mx-auto px-5 lg:px-8"><div className="grid lg:grid-cols-[.8fr_1.2fr] gap-14 items-start"><div><div className="eyebrow text-[#f4c400] mb-4">Technika</div><h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Tinkamas įrankis tinkamam kadrui.</h2><p className="mt-5 text-white/65 leading-relaxed max-w-md">Nuo saugaus Cinewhoop viduje iki greitaeigio 5 colių drono veiksmo scenoms.</p></div><div><div className="flex flex-wrap gap-2 mb-8">{DRONE_SPECS.map(item => <button key={item.id} onClick={() => setDroneId(item.id)} className={`px-4 py-2 rounded-full text-sm font-bold ${droneId === item.id ? 'bg-[#f4c400] text-[#111d3a]' : 'bg-white/10 text-white/70 hover:bg-white/15'}`}>{item.name.split(' ').slice(1,3).join(' ')}</button>)}</div><div className="border-t border-white/15 pt-7"><div className="flex items-center gap-3 mb-4"><span className="rounded-full bg-[#f4c400] text-[#111d3a] text-xs font-bold px-3 py-1">{drone.highlightBadge}</span><span className="text-white/50 text-sm">{drone.class}</span></div><h3 className="font-display text-3xl font-bold">{drone.name}</h3><p className="text-white/70 leading-relaxed mt-4 max-w-xl">{drone.description}</p><div className="grid sm:grid-cols-2 gap-4 mt-8"><div><div className="text-xs text-white/45 uppercase tracking-wider">Greitis</div><div className="font-bold mt-1">{drone.speed}</div></div><div><div className="text-xs text-white/45 uppercase tracking-wider">Skrydžio laikas</div><div className="font-bold mt-1">{drone.flightTime}</div></div><div className="sm:col-span-2"><div className="text-xs text-white/45 uppercase tracking-wider">Kamera</div><div className="font-bold mt-1 text-[#f4c400]">{drone.camera}</div></div></div></div></div></div></div></section>

      <section id="komanda" className="py-20 md:py-28 bg-white border-y border-[#ddd7c9]"><div className="max-w-7xl mx-auto px-5 lg:px-8"><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"><div><div className="eyebrow text-[#a07a00] mb-4">Apie mus</div><h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Žmonės už pulto.</h2></div><p className="text-[#647089] max-w-sm leading-relaxed">Maža komanda iš Kauno, kuriai rūpi geras skrydis, aiškus procesas ir filmas, kurį norisi rodyti.</p></div><div className="grid md:grid-cols-2 gap-6 max-w-4xl">{TEAM_MEMBERS.map(person => <div key={person.name} className="grid grid-cols-[120px_1fr] sm:grid-cols-[180px_1fr] gap-5 items-center"><img src={person.image} alt={person.name} className="w-full aspect-square object-cover rounded-2xl" /><div><h3 className="font-display text-2xl font-bold">{person.name}</h3><div className="text-sm text-[#a07a00] font-semibold mt-1">{person.role}</div><p className="text-sm text-[#647089] mt-3 leading-relaxed">{person.bio}</p></div></div>)}</div></div></section>

      <section id="kainodara" className="py-20 bg-[#f4c400]"><div className="max-w-4xl mx-auto px-5 text-center"><div className="eyebrow text-[#111d3a]/70 mb-4">Kainodara</div><h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight">Kaina priklauso nuo istorijos.</h2><p className="mt-5 text-lg text-[#111d3a]/75 max-w-2xl mx-auto">Kelios valandos – valandinis tarifas. Visa darbo diena – fiksuota projekto kaina. Montažą ir poreikius susidėliojame kartu.</p><a href="#poreikiu-vedlys" className="inline-flex items-center gap-2 mt-8 rounded-full bg-[#111d3a] text-white px-7 py-3.5 font-bold hover:bg-[#1b2b50] transition-colors">Gauti aiškų pasiūlymą <ArrowRight className="w-4 h-4" /></a></div></section>

      <Footer />
      <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
