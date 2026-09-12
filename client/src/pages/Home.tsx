import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  PORTFOLIO_ITEMS, 
  DRONE_SPECS, 
  TEAM_MEMBERS, 
  FAQ_ITEMS, 
  PortfolioItem 
} from '@/data';
import { Navigation, Footer } from '@/components/Navigation';
import ClientNeedsWalkthrough from '@/components/ClientNeedsWalkthrough';
import { VideoModal } from '@/components/VideoModal';
import { 
  Play, 
  Flame, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  MapPin, 
  Check, 
  ChevronRight, 
  Zap, 
  Award, 
  Sliders, 
  Radio, 
  Layers, 
  Eye, 
  PhoneCall, 
  Send,
  HelpCircle,
  Video,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
  const [selectedDrone, setSelectedDrone] = useState<string>(DRONE_SPECS[0].id);

  const filteredPortfolio = activeCategory === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-amber-400 selection:text-black">
      <Navigation />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-zinc-900">
        {/* Background Image with Dark Vignette Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/manus-storage/hero-fpv_aaf565b5.jpg" 
            alt="FPV dronas virš Kauno Nemuno santakos" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 transform motion-safe:animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
          <div className="absolute inset-0 bg-radial from-amber-400/10 via-transparent to-transparent opacity-60" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              FPV Kinematografija Kaune ir visoje Lietuvoje
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08] mb-6">
              Mes filmuojame ne pikselius. <br />
              <span className="text-amber-400 underline decoration-amber-400/30 decoration-wavy underline-offset-8">
                Mes parduodame emociją.
              </span>
            </h1>

            {/* Subtitle - human, friendly, grounded */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Nuo greitaeigių posūkių 160 km/h greičiu paskui slystantį automobilį Nemuno žiede iki itin ramaus, saugaus praskridimo pro kavinės duris tiesiai į svečių šypsenas. Jokių robotinių šablonų – tik gyvas kino ritmas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a 
                href="#poreikiu-vedlys"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-base shadow-xl shadow-amber-400/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Sužinoti savo projekto kainą
                <ArrowRight className="w-5 h-5" />
              </a>

              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-semibold text-base border border-zinc-700 transition-colors"
              >
                <Play className="w-4 h-4 fill-amber-400 text-amber-400" />
                Peržiūrėti mūsų darbus
              </a>
            </div>

            {/* Quick highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% apsaugoti propeleriai interjere</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Valandinis arba projekto tarifas</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Kaunas • Dirbame visoje Lietuvoje</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR MINDSET & PHILOSOPHY (Story & Human touch) */}
      <section id="filosofija" className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Mūsų mąstymas ir požiūris
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white leading-tight">
                Kodėl tradicinio drono nebeužtenka ir ką reiškia „parduoti emociją“?
              </h2>

              <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
                <p>
                  Dauguma žmonių įpratę matyti įprastus dronus: jie pakyla aukštai, sustingsta vietoje tarsi nematomas trikojis ir nufilmuoja gražų, bet statiška vaizdą. Tai tinka žemėlapiams, bet ne širdžiai suvirpinti.
                </p>
                <p>
                  <strong>FPV (First Person View) filmavimas – tai visiškai kita lyga.</strong> Mes užsidedame virtualius akinius ir tampame pačiu paukščiu. Kiekvienas posūkis, kiekvienas prasilenkimas su medžio šaka, automobilio kėbulu ar vitrininiais langais yra rankomis valdomas gyvas potyris.
                </p>
                <p className="border-l-2 border-amber-400 pl-4 italic text-zinc-200">
                  „Kai žmogus žiūri mūsų nufilmuotą klipą, jo smegenys jaučia greitį ir aukštį. Žiūrovas ne tik mato jūsų nekilnojamąjį turtą, renginį ar automobilį – jis nori ten būti.“
                </p>
              </div>

              {/* 3 Core pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                  <div className="text-amber-400 font-bold text-lg mb-1">01. Istorija</div>
                  <div className="text-xs text-zinc-400 leading-snug">
                    Kiekvienas skrydis turi pradžią, kulminaciją ir tikslą. Tai nėra atsitiktinis skraidymas.
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                  <div className="text-amber-400 font-bold text-lg mb-1">02. Paprastumas</div>
                  <div className="text-xs text-zinc-400 leading-snug">
                    Pusė mūsų klientų – senosios mokyklos verslai. Kalbame aiškia lietuvių kalba be IT žargono.
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
                  <div className="text-amber-400 font-bold text-lg mb-1">03. Saugumas</div>
                  <div className="text-xs text-zinc-400 leading-snug">
                    Sertifikuoti pilotai, draudimas ir minkštos propelerių apsaugos patalpų viduje.
                  </div>
                </div>
              </div>

            </div>

            {/* Visual Box with team and drone in action */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
                <img 
                  src="/manus-storage/gear-drone_d25d5c2f.jpg" 
                  alt="FPV drono paruošimas filmavimui Kauno dirbtuvėse" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/90 backdrop-blur-md p-4 rounded-xl border border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-400 flex items-center justify-center font-bold text-black text-xl shrink-0">
                      ⚡
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Dirbtuvės ir pilotavimo bazė Kaune</div>
                      <div className="text-xs text-zinc-400">Patys konstruojame ir testuojame kiekvieną orlaivį konkrečiai užduočiai</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-20 md:py-28 bg-zinc-900/40 border-b border-zinc-900">
        <div className="container max-w-7xl mx-auto px-4">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Mūsų atlikti darbai
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Pamatykite, kaip atrodo FPV kino emocija
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                Paspauskite ant bet kurio projekto, kad pamatytumėte skrydžio detales, naudotą techniką ir telemetriją.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Visi darbai' },
                { id: 'real-estate', label: 'Nekilnojamasis turtas' },
                { id: 'sports', label: 'Sportas / Veiksmas' },
                { id: 'events', label: 'Renginiai' },
                { id: 'commercials', label: 'Reklamos / Kinas' }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveCategory(btn.id)}
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                    activeCategory === btn.id
                      ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                      : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedVideo(item)}
                className="group cursor-pointer bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Thumbnail container */}
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-sm border border-amber-400/40 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded">
                      {item.categoryLabel}
                    </div>

                    {/* Play Button hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-black translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Body text */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                      <span>{item.location}</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors leading-snug mb-2 font-display">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer tags */}
                <div className="p-5 pt-0 border-t border-zinc-900 mt-2 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded text-[11px]">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="text-amber-400 font-medium group-hover:underline flex items-center gap-1 text-[11px]">
                    Peržiūrėti <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHAT WE DO (EXPLANATORY, JARGON-FREE) */}
      <section id="paslaugos" className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Aišku, paprasta ir patikima
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Ką tiksliai darome ir kaip vyksta procesas?
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg">
              Mes suprantame, kad daugelis užsakovų su FPV dronais susiduria pirmą kartą. Štai kaip paprastai viskas vyksta nuo pirmo skambučio iki gatavo video.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Pokalbis ir planas',
                description: 'Paskambiname arba susitinkame Kaune prie kavos. Jūs pasakote savo tikslą, mes pasiūlome skrydžio maršrutą ir reikalingą drono tipą.',
                icon: HelpCircle
              },
              {
                step: '02',
                title: 'Saugus skrydis lokacijoje',
                description: 'Atvykstame su paruošta technika ir baterijų stotimi. Patalpose naudojame apsaugotus gaubtus, lauke – greitaeigius kino dronus.',
                icon: ShieldCheck
              },
              {
                step: '03',
                title: 'Žaliava arba montažas',
                description: 'Jei turite savo montuotoją – tą pačią dieną perduodame RAW failus. Jei norite paruošto produkto – sumontuojame, pridedame garsus ir spalvas.',
                icon: Layers
              },
              {
                step: '04',
                title: 'Rezultatas ir emocija',
                description: 'Gaunate video, kuris prikausto dėmesį socialiniuose tinkluose, reprezentuoja jūsų NT objektą ar sukelia ovacijas pristatyme.',
                icon: Zap
              }
            ].map((stepItem, idx) => {
              const Icon = stepItem.icon;
              return (
                <div key={idx} className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl relative hover:border-zinc-700 transition-colors">
                  <div className="text-3xl font-extrabold font-display text-amber-400/30 mb-4">
                    {stepItem.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 font-display">{stepItem.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{stepItem.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE CLIENT NEEDS WALKTHROUGH FEATURE */}
      <ClientNeedsWalkthrough />

      {/* 6. DRONE FLEET & GEAR SPECS */}
      <section id="technika" className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Karinis ir kino standartas
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Mūsų technika: nuo 245 g iki kino RED orlaivių
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
                Kiekvienam tikslui – griežtai atitinkantis drono korpusas, kamera ir propeleriai.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {DRONE_SPECS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDrone(d.id)}
                  className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
                    selectedDrone === d.id
                      ? 'bg-amber-400 text-black shadow-md'
                      : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {d.name.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Drone Detail Box */}
          {(() => {
            const current = DRONE_SPECS.find(d => d.id === selectedDrone) || DRONE_SPECS[0];
            return (
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Specs details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-amber-400 text-black font-extrabold text-xs">
                        {current.highlightBadge}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">Klasė: {current.class}</span>
                    </div>

                    <h3 className="text-3xl font-extrabold text-white font-display">
                      {current.name}
                    </h3>

                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {current.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                        <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">Maksimalus greitis</span>
                        <span className="text-white font-bold text-base text-amber-400">{current.speed}</span>
                      </div>

                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                        <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">Skrydžio laikas</span>
                        <span className="text-white font-bold text-base text-amber-400">{current.flightTime}</span>
                      </div>

                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                        <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">Kamera ir raiška</span>
                        <span className="text-white font-bold text-xs">{current.camera}</span>
                      </div>

                      <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                        <span className="text-[11px] text-zinc-500 uppercase tracking-wider block">Pagrindinis pritaikymas</span>
                        <span className="text-white font-bold text-xs">{current.usage}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-300 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong>Saugumo specifikacija:</strong> {current.safety}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Photo */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-black">
                      <img 
                        src="/manus-storage/gear-drone_d25d5c2f.jpg" 
                        alt="FPV drono rėmas ir technika" 
                        className="w-full h-auto object-cover"
                      />
                      <div className="p-4 bg-zinc-950 border-t border-zinc-800 text-center">
                        <p className="text-xs text-zinc-400">
                          Dirbtuvėse Kaune surenkami ir kalibruojami orlaiviai
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* 7. MEET OUR TEAM */}
      <section id="komanda" className="py-20 md:py-28 bg-zinc-900/40 border-b border-zinc-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Žmonės už pulto
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Susipažinkite su komanda
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg">
              Jokių dirbtinio intelekto fantazijų – tai mes, gyvi žmonės iš Kauno, kurie gyvena aviacija, lituokliais ir kinematografija.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={idx}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-zinc-900">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white font-display">{member.name}</h3>
                        <p className="text-xs text-amber-400 font-medium">{member.role}</p>
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-zinc-900/90 text-amber-400 border border-zinc-800">
                        {member.callsign}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-zinc-300 text-xs leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-zinc-900 text-xs">
                      <div>
                        <span className="text-zinc-500">Patirtis:</span>{' '}
                        <span className="text-zinc-200 font-medium">{member.experience}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">Mėgstamiausia įranga:</span>{' '}
                        <span className="text-amber-400 font-medium">{member.gearPreference}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800/80 text-[11px] text-zinc-400">
                    <div className="font-semibold text-zinc-300 mb-1">Kvalifikacija ir saugumas:</div>
                    <ul className="space-y-0.5 list-disc list-inside">
                      {member.certifications.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. TRANSPARENT PRICING PHILOSOPHY */}
      <section id="kainodara" className="py-20 md:py-28 bg-zinc-950 border-b border-zinc-900">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Sąžininga ir suprantama kainodara
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Kiek kainuoja FPV filmavimas?
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg">
              Kaina priklauso nuo jūsų projekto tipo ir laiko apimties. Mes nieko neslepiame ir netaikome „žvaigždžių tarifų“.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Option A: Hourly */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-400/40 transition-colors">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  Trumpesnės užduotys
                </span>
                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  Valandinis tarifas
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Kai reikia nufilmuoti vieną konkretų objektą – butą, namą, trumpą renginio epizodą ar automobilio važiavimą.
                </p>

                <ul className="space-y-3 text-xs text-zinc-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Mokate tik už realiai praleistas valandas lokacijoje</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Tinkama NT brokeriams ir privatiems savininkams</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Greitas žaliavos atidavimas per 24 valandas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Galimybė užsakyti papildomą greitą montažą</span>
                  </li>
                </ul>
              </div>

              <a
                href="#poreikiu-vedlys"
                className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-center text-xs transition-colors"
              >
                Skaičiuoti valandinį projektą
              </a>
            </div>

            {/* Option B: Project / Full-day */}
            <div className="bg-zinc-900 border-2 border-amber-400 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl shadow-amber-400/10">
              <div className="absolute -top-3.5 right-8 bg-amber-400 text-black text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Rekomenduojama verslui
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  Pilna diena / Pamaina
                </span>
                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  Fiksuota projekto kaina
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Kai filmavimas trunka visą darbo dieną: gamyklos turas, sporto renginys, festivalis, reklaminis kino klipas.
                </p>

                <ul className="space-y-3 text-xs text-zinc-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Fiksuota sąmata – jokių netikėtų viršvalandžių sąskaitų</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Pilna įrangos bazė: 4+ dronai, baterijų krovimo stotis</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Piloto ir techniko/inžinieriaus darbas aikštelėje</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Pilnas kino spalvų apdirbimas ir garso dizainas (SFX)</span>
                  </li>
                </ul>
              </div>

              <a
                href="#poreikiu-vedlys"
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-center text-xs shadow-lg transition-all"
              >
                Gauti projekto sąmatą
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (ESPECIALLY FOR TRADITIONAL CLIENTS) */}
      <section id="duk" className="py-20 md:py-28 bg-zinc-900/40 border-b border-zinc-900">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Dažniausi klausimai
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
              Atsakymai be sudėtingų žodžių
            </h2>
            <p className="text-zinc-400 text-base">
              Atsakome į klausimus, kuriuos dažniausiai užduoda mūsų užsakovai Kaune ir visoje Lietuvoje.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
              >
                <h3 className="font-bold text-white text-base mb-2 font-display flex items-start gap-3">
                  <span className="text-amber-400 font-mono text-sm shrink-0 mt-0.5">Q.</span>
                  {item.question}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-6">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. FINAL CONTACT & CALL TO ACTION BANNER */}
      <section className="py-20 bg-amber-400 text-black relative overflow-hidden">
        <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded bg-black/10 inline-block mb-4">
            Kauno studija • Skrendame visur
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-tight mb-6">
            Turite idėją ar objektą? Pakalbėkime gyvai.
          </h2>
          <p className="text-base sm:text-lg text-black/85 max-w-2xl mx-auto mb-8 font-medium">
            Mielai atsakysime į visus klausimus telefonu arba pakviesime į dirbtuves Kaune pasidomėti FPV akiniais ir technika.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+37060012345"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-black hover:bg-zinc-900 text-white font-extrabold text-base shadow-2xl transition-all"
            >
              <PhoneCall className="w-5 h-5 text-amber-400" />
              Skambinti: +370 600 12345
            </a>
            <a
              href="#poreikiu-vedlys"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-300 hover:bg-amber-200 text-black font-extrabold text-base border-2 border-black transition-all"
            >
              Užpildyti poreikių vedlį
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Video Modal Popup */}
      <VideoModal 
        item={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </div>
  );
}
