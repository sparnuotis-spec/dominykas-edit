import { ArrowRight, Check, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'wouter';
import { Navigation, Footer } from '@/components/Navigation';
import ClientNeedsWalkthrough from '@/components/ClientNeedsWalkthrough';
import Seo, { SITE } from '@/components/Seo';

type Service = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  audience: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Record<string, Service> = {
  'nt-filmavimas': {
    slug: 'nt-filmavimas',
    title: 'FPV dronų filmavimas nekilnojamajam turtui',
    metaTitle: 'FPV dronų filmavimas NT | Sparnuotis Kaune ir Lietuvoje',
    description: 'Kinematografiškas FPV dronų filmavimas namams, butams, viešbučiams ir NT projektams Kaune, Lietuvoje bei Europoje.',
    intro: 'Parodome ne tik kvadratinius metrus, o jausmą, kaip erdvėje būti.',
    audience: 'Namų pardavėjams, NT vystytojams, brokeriams, architektams, viešbučiams ir interjero projektams.',
    bullets: ['Saugus Cinewhoop filmavimas patalpose', 'Sklandus skrydis per duris, koridorius ir erdves', '4K/5.3K medžiaga socialiniams tinklams ir reklamai', 'RAW medžiaga arba pilnai sumontuotas video'],
    faqs: [{ q: 'Ar FPV dronas saugus patalpose?', a: 'Taip. Patalpoms naudojame apsaugotus Cinewhoop dronus ir prieš filmavimą suplanuojame saugią trajektoriją.' }, { q: 'Ar filmuojate už Kauno ribų?', a: 'Taip, dirbame visoje Lietuvoje ir Europoje. Kuro išlaidos skaičiuojamos papildomai pagal lokaciją.' }],
  },
  'reklaminis-video': {
    slug: 'reklaminis-video',
    title: 'FPV dronų filmavimas reklamai ir prekės ženklams',
    metaTitle: 'FPV reklaminis video | Dronų filmavimas Lietuvoje ir Europoje',
    description: 'FPV reklaminio video gamyba prekės ženklams, produktams ir kampanijoms. Dinamiški kino kadrai nuo idėjos iki galutinio filmo.',
    intro: 'Kai įprasto kadro neužtenka, sukuriame judesį, kurį žiūrovas prisimena.',
    audience: 'Reklamos agentūroms, prodiuseriams, prekės ženklams ir gamybos komandoms.',
    bullets: ['Kūrybinis skrydžio planas pagal scenarijų', 'Skirtingi dronai pagal greitį, kamerą ir lokaciją', 'Galime dirbti kaip atskira FPV komanda filmavimo aikštelėje', 'RAW medžiaga, montavimas, spalvos ir socialinių tinklų formatai'],
    faqs: [{ q: 'Ar galite dirbti su didesne filmavimo komanda?', a: 'Taip. Prireikus turime daugiau nei vieną pilotą, atsarginį pilotą ir techninę pagalbą.' }, { q: 'Ar galite skraidinti kino kamerą?', a: 'Pagal projektą parenkame tinkamą lifterį ir kameros konfigūraciją. Galimybės aptariamos prieš filmavimą.' }],
  },
  'renginiu-filmavimas': {
    slug: 'renginiu-filmavimas',
    title: 'FPV dronų filmavimas renginiams ir tiesioginėms transliacijoms',
    metaTitle: 'FPV renginių filmavimas ir livestream | Sparnuotis',
    description: 'FPV dronų filmavimas festivaliams, sporto renginiams, koncertams ir tiesioginėms transliacijoms Kaune, Lietuvoje bei Europoje.',
    intro: 'Renginio energiją perteikiame iš vidaus – arti veiksmo, bet su aiškiu saugos planu.',
    audience: 'Renginių organizatoriams, festivaliams, koncertų prodiuseriams, sporto varžyboms ir transliacijų komandoms.',
    bullets: ['Skrydžiai renginių erdvėse ir lauke', 'Gyvas signalas režisūriniam pultui pagal techninį poreikį', 'Daugiau nei vienas pilotas sudėtingesnėms lokacijoms', 'Filmavimas, žaliava, Reels ir greitas socialinis turinys'],
    faqs: [{ q: 'Ar dirbate su renginio saugos ir režisūros komanda?', a: 'Taip. Iš anksto suderiname skrydžio zoną, laiką, signalą ir komunikaciją su renginio komanda.' }, { q: 'Ar galite filmuoti didelę minią?', a: 'Galime, jei lokacija, leidimai ir saugos procedūros leidžia. Kiekvieną renginį vertiname individualiai.' }],
  },
  'sporto-filmavimas': {
    slug: 'sporto-filmavimas',
    title: 'FPV dronų filmavimas sportui ir automobilių sportui',
    metaTitle: 'FPV sporto ir drift filmavimas | Sparnuotis',
    description: 'Greitas FPV dronų filmavimas driftui, lenktynėms, motociklams, dviračiams ir kitam veiksmui Lietuvoje bei Europoje.',
    intro: 'Sekame veiksmą ten, kur įprasta kamera tiesiog nespėja.',
    audience: 'Autosporto organizatoriams, komandoms, sportininkams, renginių prodiuseriams ir prekių ženklams.',
    bullets: ['Greitaeigiai pursuit FPV dronai', 'Trajektorijos planavimas kartu su sporto komanda', 'Keli bandymai ir atsarginis planas svarbioms scenoms', 'Cinematic 4K/5.3K medžiaga kampanijoms ir socialiniams tinklams'],
    faqs: [{ q: 'Ar galite sekti automobilį ar motociklą?', a: 'Taip, tam naudojame greitus, sportui paruoštus FPV dronus ir iš anksto suderiname trasą bei saugos zonas.' }, { q: 'Ar kaina priklauso nuo filmavimo trukmės?', a: 'Kelios valandos dažniausiai skaičiuojamos valandiniu tarifu, o visa darbo diena – kaip projektas. Kuro išlaidos pridedamos atskirai.' }],
  },
};

export default function ServicePage({ service }: { service: Service }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/paslaugos/${service.slug}#service`,
    name: service.title,
    description: service.description,
    provider: { '@type': 'ProfessionalService', name: 'Sparnuotis FPV', url: SITE },
    areaServed: ['Kaunas', 'Lithuania', 'Europe'],
    url: `${SITE}/paslaugos/${service.slug}`,
  };

  return <div className="min-h-screen bg-[#f4f1e9] text-[#27251f]">
    <Seo title={service.metaTitle} description={service.description} path={`/paslaugos/${service.slug}`} jsonLd={jsonLd} />
    <Navigation />
    <main className="pt-36">
      <section className="py-20 md:py-28 bg-[#27251f] text-white"><div className="max-w-7xl mx-auto px-5 lg:px-8"><div className="max-w-4xl"><div className="text-xs uppercase tracking-[.16em] font-bold text-[#efc400] mb-5">Sparnuotis FPV paslauga</div><h1 className="font-display text-5xl sm:text-7xl font-bold leading-[.96] tracking-tight">{service.title}</h1><p className="text-xl text-white/75 leading-relaxed mt-7 max-w-2xl">{service.intro}</p><div className="flex flex-wrap gap-3 mt-8"><a href="#uzklausa" className="rounded-full bg-[#efc400] text-[#27251f] px-6 py-3.5 font-bold">Gauti pasiūlymą <ArrowRight className="inline w-4 h-4 ml-1" /></a><Link href="/portfolio" className="rounded-full border border-white/25 px-6 py-3.5 font-semibold">Peržiūrėti portfolio</Link></div></div></div></section>
      <section className="py-20 md:py-24"><div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[.8fr_1.2fr] gap-14"><div><div className="text-xs uppercase tracking-[.16em] font-bold text-[#9b7b00] mb-4">Kam tai skirta</div><h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">Vaizdas, kuris turi tikslą.</h2><p className="text-[#6d6a61] leading-relaxed mt-6">{service.audience}</p><div className="flex items-center gap-2 mt-6 text-sm font-bold"><MapPin className="w-4 h-4 text-[#9b7b00]" />Kaunas · Lietuva · Europa</div></div><div className="rounded-3xl bg-[#fcfbf7] border border-[#d9d4c8] p-7 sm:p-10"><h2 className="font-display text-2xl font-bold">Ką gaunate</h2><ul className="mt-6 space-y-4">{service.bullets.map(item => <li key={item} className="flex gap-3 text-[#6d6a61] leading-relaxed"><Check className="w-5 h-5 text-[#9b7b00] shrink-0 mt-0.5" />{item}</li>)}</ul><div className="mt-8 pt-7 border-t border-[#d9d4c8] flex gap-3 text-sm text-[#6d6a61]"><ShieldCheck className="w-5 h-5 text-[#9b7b00] shrink-0" /><span>Filmavimo planą ir saugos sprendimus pritaikome konkrečiai lokacijai.</span></div></div></div></section>
      <section className="py-20 bg-[#ebe7de]"><div className="max-w-4xl mx-auto px-5"><h2 className="font-display text-4xl font-bold">Dažniausi klausimai</h2><div className="mt-8 space-y-3">{service.faqs.map(faq => <details key={faq.q} className="rounded-2xl bg-[#fcfbf7] border border-[#d9d4c8] p-5"><summary className="font-bold cursor-pointer">{faq.q}</summary><p className="text-[#6d6a61] leading-relaxed mt-3">{faq.a}</p></details>)}</div></div></section>
      <div id="uzklausa"><ClientNeedsWalkthrough /></div>
    </main>
    <Footer />
  </div>;
}
