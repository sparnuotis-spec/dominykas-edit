import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, MapPin, Play, ShieldCheck } from 'lucide-react';
import { useRoute } from 'wouter';
import { PORTFOLIO_CATEGORIES, PortfolioCategory } from '@/data';
import { Navigation, Footer } from '@/components/Navigation';
import PortfolioTypeSelector from '@/components/PortfolioTypeSelector';
import Seo from '@/components/Seo';

const caseStudies: Record<PortfolioCategory, {
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
  action: {
    category: 'action',
    eyebrow: 'Atvejo analizė · Veiksmas',
    title: 'Kaip sekame greitį iš arčiausiai įmanomo kampo',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Šis pavyzdys parodo, kaip planuojame dinamišką FPV skrydį šalia greitai judančio objekto.',
    image: '/manus-storage/sports-action-fpv_6397dda8.jpg',
    location: 'Nemuno žiedas · Kačerginė',
    duration: '1 filmavimo diena',
    details: ['Greitas 5 colių FPV dronas', 'Trajektorijos repeticija su komanda', 'Dinamiški kadrai reklamai ir socialiniams tinklams'],
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reikėjo išlaikyti automobilį kadre dideliu greičiu ir saugiai kartoti trajektoriją skirtinguose trasos posūkiuose.',
    approach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suderinome piloto ir vairuotojo signalus, susiplanavome atsitraukimo zonas ir nufilmavome kelias skirtingo tempo versijas.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gavome energingą medžiagą, kuri perteikia greitį, artumą ir vairuotojo trajektoriją.',
  },
  events: {
    category: 'events',
    eyebrow: 'Atvejo analizė · Renginiai',
    title: 'Kaip renginio atmosferą perkeliame į vieną skrydį',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Šis pavyzdys parodo, kaip ruošiame FPV filmavimą renginyje, kuriame svarbūs žmonės, energija ir momentas.',
    image: '/manus-storage/event-livestream-fpv_4273f4e1.jpg',
    location: 'Kaunas · renginio erdvė',
    duration: 'Renginio diena',
    details: ['Skrydžio zonų ir žmonių srautų planas', 'Keli saugūs pakilimo taškai', 'Kinematografiniai renginio kadrai'],
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Renginyje viskas vyksta vienu metu, todėl reikėjo suderinti skrydžius su programa, publika ir technine komanda.',
    approach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prieš renginį apžiūrėjome vietą, pažymėjome saugias zonas ir susitarėme dėl aiškių signalų su organizatoriais.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sukūrėme gyvą renginio pasakojimą, kuris veikia tiek kaip ilgesnis filmas, tiek kaip trumpi socialinių tinklų klipai.',
  },
  'auto-events': {
    category: 'auto-events',
    eyebrow: 'Atvejo analizė · AutoRenginiai',
    title: 'Kaip automobilį paverčiame pagrindiniu istorijos veikėju',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Šis pavyzdys parodo, kaip planuojame automobilių renginio kadrus, kad technika ir emocija veiktų kartu.',
    image: '/images/autotoja.webp',
    location: 'Kaunas · auto renginys',
    duration: '1 filmavimo diena',
    details: ['Dinamiškos pravažiavimo trajektorijos', 'Automobilio ir aplinkos koordinavimas', '4K medžiaga reklamai ir renginio komunikacijai'],
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Klientui reikėjo parodyti automobilį ne statiškai, o per judesį, mastelį ir tikrą renginio atmosferą.',
    approach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sudėliojome pravažiavimų seką, kameros aukščius ir saugius atstumus, kad kiekvienas kadras turėtų aiškią funkciją.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Galutinis filmas sujungė automobilio charakterį, renginio energiją ir sklandų FPV judėjimą.',
  },
  interior: {
    category: 'interior',
    eyebrow: 'Filmavimas viduje',
    title: 'Kaip saugiai skraidome vidaus patalpose',
    intro: 'Paprastos foto/video nebeįdomūs? Šis pavyzdys parodo, kaip filmuojame interjerą su mažu, apsaugotu Cinewhoop dronu.',
    image: '/manus-storage/real-estate-fpv_775b2002.jpg',
    location: 'Dirbame visoje Lietuvoje',
    duration: 'Kelios filmavimo valandos',
    details: ['Apsaugoti propeleriai', 'Skrydis per duris ir koridorius', 'One-shot video'],
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reikėjo parodyti interjero ryšį su aplinka, išlaikant saugų atstumą nuo baldų, sienų ir žmonių.',
    approach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pradėjome nuo lėto bandymo, susiplanavome įėjimo ir išėjimo taškus bei suderinome erdvę su klientu.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gavome vientisą, ramų ir erdvę pajusti leidžiantį video be statinių kameros pozicijų.',
  },
  commercials: {
    category: 'commercials',
    eyebrow: 'Atvejo analizė · Reklaminiai klipai',
    title: 'Kaip verslo erdvę paverčiame įsimintinu reklaminiu klipu',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Šis pavyzdys parodo, kaip FPV skrydis padeda verslui aiškiai parodyti vietą, procesą ir mastą.',
    image: '/manus-storage/commercial-factory-fpv_f410793a.jpg',
    location: 'Kauno LEZ',
    duration: '1 filmavimo diena',
    details: ['Vieno kadro skrydžio planas', 'Filmavimas veikiančioje erdvėje', 'Medžiaga reklamai ir B2B komunikacijai'],
    challenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reikėjo sudėtingą gamybos procesą parodyti aiškiai, dinamiškai ir taip, kad žiūrovas suprastų erdvės mastą.',
    approach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iš anksto susidėliojome trajektoriją, suderinome darbą su objekto komanda ir numatėme saugų vieno kadro ritmą.',
    result: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sukūrėme vientisą reklaminį klipą, kuris parodo procesą, technologiją ir žmones vienu įsimenančiu judesiu.',
  },
};

export default function CaseStudyPage() {
  const [, params] = useRoute('/portfolio/:category');
  const study = params?.category ? caseStudies[params.category as keyof typeof caseStudies] : undefined;
  if (!study) return null;

  const categoryLabel = PORTFOLIO_CATEGORIES.find(item => item.id === study.category)?.label ?? study.category;

  return (
    <div className="min-h-screen bg-[#f4f1e9] text-[#27251f]">
      <Seo title={`${study.title} | Sparnuotis`} description={study.intro} path={`/portfolio/${study.category}`} />
      <Navigation dark />
      <main className="pt-0 pb-20 bg-[#27251f]">
        <section className="bg-[#27251f] text-white pt-20 pb-16 md:pt-20 md:pb-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <a href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-[#efc400] hover:text-[#ffd72f]"><ArrowLeft className="w-4 h-4" />Visas portfolio</a>
            <div className="mt-10"><PortfolioTypeSelector activeCategory={study.category} /></div>
            <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-12 items-end mt-10">
              <div><div className="text-xs uppercase tracking-[.16em] font-bold text-[#efc400] mb-5">{study.eyebrow}</div><h1 className="font-display text-5xl sm:text-7xl font-bold leading-[.96] tracking-tight">{study.title}</h1><p className="mt-7 text-lg text-white/70 leading-relaxed">{study.intro}</p></div>
              <div className="rounded-3xl overflow-hidden border border-white/10">{study.category === 'interior' ? <video className="w-full aspect-[16/10] object-cover" autoPlay muted loop playsInline preload="metadata" poster={study.image} aria-label={`${study.title} — FPV filmavimo video`}><source src="/images/hero2-1.mp4" type="video/mp4" /></video> : <img src={study.image} alt={`${study.title} — FPV filmavimo kadras`} className="w-full aspect-[16/10] object-cover" />}</div>
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
            {study.category === 'interior' && <section className="mt-16"><div className="mb-7"><div className="text-xs uppercase tracking-[.16em] font-bold text-[#9b7b00]">Daugiau darbų</div><h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">Vidaus skrydžių galerija</h2><p className="text-[#6d6a61] mt-3 max-w-2xl">Kelios skirtingos skrydžio perspektyvos, parodančios, kaip Cinewhoop kamera juda arti erdvės detalių.</p></div><div className="grid md:grid-cols-3 gap-5"><article className="rounded-2xl overflow-hidden bg-[#fcfbf7] border border-[#d9d4c8]"><video className="w-full aspect-video object-cover bg-[#27251f]" controls preload="metadata" poster={study.image} aria-label="FPV interjero skrydis"><source src="/images/hero2-1.mp4" type="video/mp4" /></video><div className="p-4"><h3 className="font-display font-bold">Interjero turas</h3><p className="text-sm text-[#6d6a61] mt-1">Skrydis per erdves ir natūralius perėjimus.</p></div></article><article className="rounded-2xl overflow-hidden bg-[#fcfbf7] border border-[#d9d4c8]"><video className="w-full aspect-video object-cover bg-[#27251f]" controls preload="metadata" aria-label="FPV skrydžio kadras"><source src="/images/comparison-fpv.mp4" type="video/mp4" /></video><div className="p-4"><h3 className="font-display font-bold">FPV perspektyva</h3><p className="text-sm text-[#6d6a61] mt-1">Artimas, dinamiškas kameros judėjimas.</p></div></article><article className="rounded-2xl overflow-hidden bg-[#fcfbf7] border border-[#d9d4c8]"><video className="w-full aspect-video object-cover bg-[#27251f]" controls preload="metadata" aria-label="Stabilus filmavimo kadras"><source src="/images/comparison-dji.mp4" type="video/mp4" /></video><div className="p-4"><h3 className="font-display font-bold">Sklandus pravažiavimas</h3><p className="text-sm text-[#6d6a61] mt-1">Platus kadras, skirtas erdvei ir architektūrai.</p></div></article></div></section>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
