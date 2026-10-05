import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, MapPin, Play, ShieldCheck } from 'lucide-react';
import { useRoute } from 'wouter';
import { PORTFOLIO_CATEGORIES, PortfolioCategory } from '@/data';
import { Navigation, Footer } from '@/components/Navigation';
import Seo from '@/components/Seo';

const caseStudies: Record<'real-estate' | 'live-streams', {
  category: PortfolioCategory;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  location: string;
  duration: string;
  details: string[];
  challenge: string;
  approach: string;
  result: string;
}> = {
  'real-estate': {
    category: 'real-estate',
    eyebrow: 'Atvejo analizė · Nekilnojamasis turtas',
    title: 'Kaip parodome erdvę taip, kad joje norisi būti',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Šis pavyzdys parodo, kaip planuojame ir įgyvendiname nekilnojamojo turto filmavimo projektą nuo pirmo pokalbio iki galutinio video.',
    image: '/manus-storage/real-estate-fpv_775b2002.jpg',
    location: 'Kauno r. · Kulautuva',
    duration: '1 filmavimo diena',
    details: ['Cinewhoop dronas su apsaugotais propeleriais', 'Skrydis iš terasos į interjerą', '4K medžiaga socialiniams tinklams ir svetainei'],
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Klientui reikėjo parodyti ne tik pastato fasadą, bet ir natūralų perėjimą iš pušyno terasos į pagrindines gyvenamąsias erdves.',
    approach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pradėjome nuo lokacijos apžiūros, saugumo plano ir skrydžio trajektorijos. Tada suplanavome vieną sklandų skrydį per vitriną, virtuvę, svetainę ir terasą.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gavome plastišką, vientisą pristatymą, kuris leidžia žiūrovui pajusti erdvės mastelį, šviesą ir judėjimą joje.',
  },
  'live-streams': {
    category: 'live-streams',
    eyebrow: 'Atvejo analizė · Tiesioginės transliacijos',
    title: 'Kaip FPV skrydį paverčiame tiesioginės transliacijos dalimi',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Šis pavyzdys parodo, kaip integruojame FPV signalą į renginio režisūrą ir perduodame jį auditorijai realiu laiku.',
    image: '/manus-storage/event-livestream-fpv_4273f4e1.jpg',
    location: 'Kauno marių pakrantė',
    duration: '1 renginio diena',
    details: ['HD SDI signalas į režisūrinį pultą', 'Mažos delsos vaizdo perdavimas', 'Skrydžio planas virš renginio zonos'],
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Organizatoriams reikėjo dinamiško vaizdo iš renginio erdvės, kuris galėtų būti naudojamas tiesioginėje programoje be trikdančios delsos.',
    approach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suderinome skrydžio zonas, ryšio kanalus ir atsarginius scenarijus su režisieriumi. Prieš renginį atlikome techninį testą ir repetavome svarbiausius momentus.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. FPV kadrai tapo gyva renginio pasakojimo dalimi: auditorija matė sceną, minią ir atmosferą iš kampų, kurių įprasta kamera nepasiektų.',
  },
};

export default function CaseStudyPage() {
  const [, params] = useRoute('/portfolio/:category/case-study');
  const study = params?.category ? caseStudies[params.category as keyof typeof caseStudies] : undefined;
  if (!study) return null;

  const categoryLabel = PORTFOLIO_CATEGORIES.find(item => item.id === study.category)?.label ?? study.category;

  return (
    <div className="min-h-screen bg-[#f4f1e9] text-[#27251f]">
      <Seo title={`${study.title} | Sparnuotis`} description={study.intro} path={`/portfolio/${study.category}/case-study`} />
      <Navigation />
      <main className="pt-36 pb-20">
        <section className="bg-[#27251f] text-white pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <a href={`/portfolio/${study.category}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#efc400] hover:text-[#ffd72f]"><ArrowLeft className="w-4 h-4" />{categoryLabel}</a>
            <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-12 items-end mt-10">
              <div><div className="text-xs uppercase tracking-[.16em] font-bold text-[#efc400] mb-5">{study.eyebrow}</div><h1 className="font-display text-5xl sm:text-7xl font-bold leading-[.96] tracking-tight">{study.title}</h1><p className="mt-7 text-lg text-white/70 leading-relaxed">{study.intro}</p></div>
              <div className="rounded-3xl overflow-hidden border border-white/10"><img src={study.image} alt={`${study.title} — FPV filmavimo kadras`} className="w-full aspect-[16/10] object-cover" /></div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 paper-grid">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-[#fcfbf7] border border-[#d9d4c8] p-5"><MapPin className="w-5 h-5 text-[#9b7b00] mb-5" /><div className="text-[10px] uppercase tracking-wider font-bold text-[#9b7b00]">Lokacija</div><div className="font-bold mt-2">{study.location}</div></div>
              <div className="rounded-2xl bg-[#fcfbf7] border border-[#d9d4c8] p-5"><Clock3 className="w-5 h-5 text-[#9b7b00] mb-5" /><div className="text-[10px] uppercase tracking-wider font-bold text-[#9b7b00]">Trukmė</div><div className="font-bold mt-2">{study.duration}</div></div>
              <div className="rounded-2xl bg-[#fcfbf7] border border-[#d9d4c8] p-5"><ShieldCheck className="w-5 h-5 text-[#9b7b00] mb-5" /><div className="text-[10px] uppercase tracking-wider font-bold text-[#9b7b00]">Saugumas</div><div className="font-bold mt-2">Aiškus skrydžio planas</div></div>
              <div className="rounded-2xl bg-[#fcfbf7] border border-[#d9d4c8] p-5"><Play className="w-5 h-5 text-[#9b7b00] mb-5" /><div className="text-[10px] uppercase tracking-wider font-bold text-[#9b7b00]">Kategorija</div><div className="font-bold mt-2">{categoryLabel}</div></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mt-14">
              <article className="rounded-2xl bg-[#fcfbf7] border border-[#d9d4c8] p-7"><div className="text-xs uppercase tracking-[.16em] font-bold text-[#9b7b00]">01 · Iššūkis</div><p className="text-[#6d6a61] leading-relaxed mt-5">{study.challenge}</p></article>
              <article className="rounded-2xl bg-[#fcfbf7] border border-[#d9d4c8] p-7"><div className="text-xs uppercase tracking-[.16em] font-bold text-[#9b7b00]">02 · Mūsų sprendimas</div><p className="text-[#6d6a61] leading-relaxed mt-5">{study.approach}</p></article>
              <article className="rounded-2xl bg-[#27251f] text-white border border-[#27251f] p-7"><div className="text-xs uppercase tracking-[.16em] font-bold text-[#efc400]">03 · Rezultatas</div><p className="text-white/70 leading-relaxed mt-5">{study.result}</p></article>
            </div>

            <div className="mt-14 rounded-3xl bg-[#efc400] p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7"><div><div className="text-xs uppercase tracking-[.16em] font-bold text-[#27251f]/65">Kas buvo svarbu projekte</div><ul className="mt-4 space-y-2">{study.details.map(detail => <li key={detail} className="flex items-start gap-2 font-bold"><CheckCircle2 className="w-5 h-5 shrink-0" />{detail}</li>)}</ul></div><a href="/kontaktai#poreikiu-vedlys" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#27251f] text-white px-6 py-3.5 font-bold hover:bg-[#3a382f]">Papasakoti apie savo projektą <ArrowRight className="w-4 h-4" /></a></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
