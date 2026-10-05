import { ArrowDown, Instagram, Mail, MapPin, Phone, Video, Youtube } from 'lucide-react';
import { Navigation, Footer } from '@/components/Navigation';
import ClientNeedsWalkthrough from '@/components/ClientNeedsWalkthrough';
import Seo, { SITE } from '@/components/Seo';

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontaktai | Sparnuotis FPV',
  description: 'Susisiekite su Sparnuotis FPV dėl filmavimo, montažo ir FPV dronų projektų.',
  url: `${SITE}/kontaktai`,
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'Sparnuotis FPV',
    telephone: '+37068575900',
    email: 'markas@sparnuotis.lt',
    address: { '@type': 'PostalAddress', addressLocality: 'Kaunas', addressCountry: 'LT' },
  },
};

const contactDetails = [
  { label: 'Telefonas', value: '+370 685 75900', href: 'tel:+37068575900', icon: Phone },
  { label: 'El. paštas', value: 'markas@sparnuotis.lt', href: 'mailto:markas@sparnuotis.lt', icon: Mail },
  { label: 'Lokacija', value: 'Kaunas, dirbame visoje Lietuvoje ir Europoje', href: null, icon: MapPin },
];

export default function Contacts() {
  return (
    <div className="min-h-screen bg-[#f4f1e9] text-[#27251f]">
      <Seo
        title="Kontaktai | Sparnuotis FPV"
        description="Susisiekite su Sparnuotis FPV dėl FPV dronų filmavimo, video montažo ir tiesioginių transliacijų Lietuvoje bei Europoje."
        path="/kontaktai"
        jsonLd={contactJsonLd}
      />
      <Navigation />

      <main>
        <section className="relative overflow-hidden bg-[#27251f] pt-36 pb-20 md:pt-44 md:pb-28 text-white">
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border-[60px] border-[#efc400]/10" />
          <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[.16em] font-bold text-[#efc400] mb-5">Kontaktai</div>
              <h1 className="font-display text-5xl sm:text-7xl font-bold leading-[.96] tracking-tight">Papasakokite apie<br /><span className="text-[#efc400]">savo skrydį.</span></h1>
              <p className="mt-7 max-w-2xl text-lg text-white/70 leading-relaxed">Trumpai papasakokite, ką norite nufilmuoti. Parinksime tinkamą droną, komandą ir pasiūlysime aiškiausią kelią iki gero rezultato.</p>
              <a href="#poreikiu-vedlys" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#efc400] px-6 py-3.5 font-bold text-[#27251f] hover:bg-[#ffd72f] transition-colors">Užpildyti poreikių vedlį <ArrowDown className="w-4 h-4" /></a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 paper-grid">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-start">
              <div>
                <div className="text-xs uppercase tracking-[.16em] font-bold text-[#9b7b00] mb-4">Susisiekime tiesiogiai</div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.02]">Esame čia, kai reikia gero kadro.</h2>
                <p className="text-[#6d6a61] leading-relaxed mt-5 max-w-md">Jei jau žinote, ko reikia, skambinkite arba parašykite. Jei dar tik dėliojate idėją, užpildykite vedlį — atsakysime su konkrečiais klausimais ir pasiūlymu.</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {contactDetails.map(({ label, value, href, icon: Icon }) => {
                  const content = <><Icon className="w-5 h-5 text-[#9b7b00] mb-5" /><div className="text-[10px] uppercase tracking-[.16em] font-bold text-[#9b7b00]">{label}</div><div className="font-display font-bold mt-2 leading-snug">{value}</div></>;
                  return href ? <a key={label} href={href} className="rounded-2xl border border-[#d9d4c8] bg-[#fcfbf7] p-5 hover:-translate-y-1 transition-transform">{content}</a> : <div key={label} className="rounded-2xl border border-[#d9d4c8] bg-[#fcfbf7] p-5">{content}</div>;
                })}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-[#d9d4c8] bg-[#fcfbf7] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div><div className="font-display text-2xl font-bold">Sekite mūsų darbus</div><p className="text-sm text-[#6d6a61] mt-1">Nauji skrydžiai, užkulisiai ir Reels.</p></div>
              <div className="flex flex-wrap gap-3"><a href="https://www.instagram.com/sparnuotisfpv/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d9d4c8] px-4 py-2.5 text-sm font-bold hover:border-[#9b7b00]"><Instagram className="w-4 h-4" />Instagram</a><a href="https://youtube.com/channel/UCWTB2v7oCzXqE2qiZ2LSpyw/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#d9d4c8] px-4 py-2.5 text-sm font-bold hover:border-[#9b7b00]"><Youtube className="w-4 h-4" />YouTube</a><a href="mailto:markas@sparnuotis.lt" className="inline-flex items-center gap-2 rounded-full border border-[#d9d4c8] px-4 py-2.5 text-sm font-bold hover:border-[#9b7b00]"><Video className="w-4 h-4" />Projektas</a></div>
            </div>
          </div>
        </section>

        <ClientNeedsWalkthrough />
      </main>

      <Footer />
    </div>
  );
}
