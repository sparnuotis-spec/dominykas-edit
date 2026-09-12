import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building2, 
  Flame, 
  CalendarDays, 
  Radio, 
  Film, 
  Sparkles, 
  Clock, 
  Calendar, 
  Scissors, 
  HardDrive, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  PhoneCall,
  Send,
  HelpCircle,
  MapPin
} from 'lucide-react';
import { toast } from 'sonner';

interface WalkthroughState {
  projectType: string;
  duration: 'hours' | 'full-day' | 'multi-day' | '';
  editingNeeds: 'raw' | 'edited' | 'full-cinematic' | '';
  location: string;
  clientName: string;
  clientPhone: string;
  clientNotes: string;
}

export default function ClientNeedsWalkthrough() {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [state, setState] = useState<WalkthroughState>({
    projectType: '',
    duration: '',
    editingNeeds: '',
    location: 'Kaunas',
    clientName: '',
    clientPhone: '',
    clientNotes: '',
  });

  const projectTypes = [
    {
      id: 'real-estate',
      title: 'Nekilnojamasis turtas',
      subtitle: 'Vilos, apartamentai, statybos, biurai',
      icon: Building2,
      recommendation: 'Cinewhoop su apsaugotais propeleriais, lėtas plastiškas skrydis.',
      suggestedDuration: 'Kelios valandos (2–4 val.)',
    },
    {
      id: 'sports',
      title: 'Sportas ir motorsportas',
      subtitle: 'Driftas, motociklai, dviračiai, bėgimai',
      icon: Flame,
      recommendation: 'Greitaeigis 5 colių dronas iki 160 km/h, dinamiškas artimas sekimas.',
      suggestedDuration: 'Pusė dienos arba visa diena',
    },
    {
      id: 'events',
      title: 'Renginiai ir festivaliai',
      subtitle: 'Koncertai, festivaliai, miesto šventės',
      icon: CalendarDays,
      recommendation: 'Skrydžiai pagal saugumo reglamentus, emociniai minios ir scenos planai.',
      suggestedDuration: 'Visa pamaina / vakaras',
    },
    {
      id: 'livestream',
      title: 'Tiesioginis eteris (Live stream)',
      subtitle: 'HD SDI / HDMI signalas režisūriniam pultui',
      icon: Radio,
      recommendation: 'Realaus laiko nulinio vėlavimo video išvestis renginių transliacijoms.',
      suggestedDuration: 'Pagal renginio trukmę',
    },
    {
      id: 'commercials',
      title: 'Reklama ir kino projektai',
      subtitle: 'TV reklamos, prekių ženklų įvaizdiniai klipai',
      icon: Film,
      recommendation: '6K/5.3K 10-bit D-Log medžiaga, profesionalus pasiruošimas.',
      suggestedDuration: 'Visa diena (projekto kaina)',
    },
    {
      id: 'other',
      title: 'Kita / Individuali idėja',
      subtitle: 'Eksperimentiniai skrydžiai, meniniai projektai',
      icon: Sparkles,
      recommendation: 'Individualus maršruto ir technikos suderinimas.',
      suggestedDuration: 'Pagal susitarimą',
    },
  ];

  const durations = [
    {
      id: 'hours',
      title: 'Kelios valandos (2–4 val.)',
      pricingModel: 'Valandinis įkainis',
      description: 'Idealus pasirinkimas nedideliam objektui, vienam butui, trumpam pasirodymui ar konkrečiam kadrui.',
      badge: 'Lankstus valandinis',
      icon: Clock,
    },
    {
      id: 'full-day',
      title: 'Visa darbo diena (iki 8–10 val.)',
      pricingModel: 'Fiksuotas projekto tarifas',
      description: 'Pilna pamaina lokacijoje su keliais skrydžių etapais, baterijų krovimo stotimi ir maksimaliu kadrų skaičiumi.',
      badge: 'Populiariausias pasirinkimas',
      icon: Calendar,
    },
    {
      id: 'multi-day',
      title: 'Kelių dienų projektas',
      pricingModel: 'Individualus projekto biudžetas',
      description: 'Didelės apimties filmavimai keliose lokacijose, festivaliai arba ilgesnė kino gamyba.',
      badge: 'Individuali sąmata',
      icon: CalendarDays,
    },
  ];

  const editingOptions = [
    {
      id: 'raw',
      title: 'Tik neapdorota medžiaga (Raw Footage)',
      description: 'Atiduodame visus 4K/5.3K D-Log vaizdo įrašus bei giroskopo duomenis (Gyroflow) jūsų vidinei komandai.',
      icon: HardDrive,
      badge: 'Greičiausias atidavimas',
    },
    {
      id: 'edited',
      title: 'Pilnas montažas + muzika + spalvos',
      description: 'Paruoštas dinamiškas klipas, pritaikytas socialiniams tinklams (Instagram Reels / YouTube) su licencijuota muzika.',
      icon: Scissors,
      badge: 'Viskas įskaičiuota',
    },
    {
      id: 'full-cinematic',
      title: 'Kino lygio post-produkcija su garso dizainu (SFX)',
      description: 'Kino lygio spalvų korekcija, individualus garso dizainas (vėjo, variklių gausmas, perėjimai) ir keli formatai (16:9 ir 9:16).',
      icon: Sparkles,
      badge: 'Maksimali emocija',
    },
  ];

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.clientName || !state.clientPhone) {
      toast.error('Prašome nurodyti savo vardą ir telefono numerį, kad galėtume susisiekti.');
      return;
    }
    setSubmitted(true);
    toast.success('Ačiū! Gavome jūsų poreikių užklausą. Susisieksime per 1–2 valandas.');
  };

  const getPriceEstimateSummary = () => {
    let priceType = '';
    let explanation = '';
    if (state.duration === 'hours') {
      priceType = 'Valandinis tarifas';
      explanation = 'Kadangi planuojamas kelių valandų filmavimas, siūlome lankstų valandinį įkainį. Jūs mokate tik už realų buvimą ir skrydžius aikštelėje.';
    } else if (state.duration === 'full-day') {
      priceType = 'Fiksuotas projekto tarifas (Visos dienos pamaina)';
      explanation = 'Visos dienos filmavimui taikome fiksuotą projekto kainą. Tai apsaugo jus nuo netikėtų papildomų mokesčių ir leidžia atlikti maksimaliai daug skrydžių.';
    } else {
      priceType = 'Individuali projekto sąmata';
      explanation = 'Kelių dienų ar nestandartiniam projektui parengiame išsamią sąmatą su technikos ir pilotų poreikiu.';
    }

    return { priceType, explanation };
  };

  const estimate = getPriceEstimateSummary();

  return (
    <section id="poreikiu-vedlys" className="py-20 bg-zinc-900/60 border-y border-zinc-800 relative">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interaktyvus projekto vedlys
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Atsakykite į 3 klausimus – gaukite aiškų pasiūlymą
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Mes nesiūlome šablonų. Mūsų kainodara skaidri: jei filmavimas trunka kelias valandas – skaičiuojame valandinį tarifą; jei visą dieną – taikome projekto kainą.
          </p>
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div className="mb-10 max-w-xl mx-auto">
            <div className="flex justify-between items-center text-xs font-medium text-zinc-400 mb-2">
              <span className={step >= 1 ? 'text-amber-400 font-bold' : ''}>1. Ko ieškote?</span>
              <span className={step >= 2 ? 'text-amber-400 font-bold' : ''}>2. Trukmė ir kaina</span>
              <span className={step >= 3 ? 'text-amber-400 font-bold' : ''}>3. Montažas</span>
              <span className={step >= 4 ? 'text-amber-400 font-bold' : ''}>4. Santrauka</span>
            </div>
            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-amber-400 h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* STEP 1: PROJECT TYPE */}
          {step === 1 && !submitted && (
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">1 žingsnis iš 4</span>
                <h3 className="text-2xl font-bold text-white mt-1">Kokio tipo filmavimo ieškote?</h3>
                <p className="text-zinc-400 text-sm mt-1">Pasirinkite sritį, kad parinktume tinkamiausią FPV drono tipą ir saugumo protokolą.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {projectTypes.map((item) => {
                  const Icon = item.icon;
                  const isSelected = state.projectType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setState({ ...state, projectType: item.id })}
                      className={`text-left p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between group ${
                        isSelected 
                          ? 'border-amber-400 bg-amber-400/10 ring-1 ring-amber-400' 
                          : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900'
                      }`}
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                          isSelected ? 'bg-amber-400 text-black' : 'bg-zinc-800 text-amber-400 group-hover:bg-zinc-700'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-semibold text-white text-base mb-1">{item.title}</h4>
                        <p className="text-xs text-zinc-400">{item.subtitle}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-800/80 text-[11px] text-zinc-500">
                        {item.recommendation}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end">
                <Button
                  size="lg"
                  disabled={!state.projectType}
                  onClick={() => setStep(2)}
                  className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8"
                >
                  Toliau: Trukmė ir kaina
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: DURATION & PRICING LOGIC */}
          {step === 2 && !submitted && (
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">2 žingsnis iš 4</span>
                <h3 className="text-2xl font-bold text-white mt-1">Kiek laiko planuojate filmavimui?</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Mūsų principas paprastas: <strong className="text-zinc-200">kelios valandos – valandinis tarifas</strong>, o <strong className="text-zinc-200">visa diena – fiksuota projekto kaina</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {durations.map((dur) => {
                  const Icon = dur.icon;
                  const isSelected = state.duration === dur.id;
                  return (
                    <button
                      key={dur.id}
                      type="button"
                      onClick={() => setState({ ...state, duration: dur.id as any })}
                      className={`text-left p-6 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                        isSelected 
                          ? 'border-amber-400 bg-amber-400/10 ring-1 ring-amber-400' 
                          : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-amber-400 text-black' : 'bg-zinc-800 text-amber-400'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700">
                            {dur.badge}
                          </span>
                        </div>
                        <h4 className="font-semibold text-white text-base mb-1">{dur.title}</h4>
                        <div className="text-xs font-medium text-amber-400 mb-2">{dur.pricingModel}</div>
                        <p className="text-xs text-zinc-400 leading-relaxed">{dur.description}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center text-xs text-zinc-400">
                        <CheckCircle2 className={`w-4 h-4 mr-2 ${isSelected ? 'text-amber-400' : 'text-zinc-600'}`} />
                        {isSelected ? 'Pasirinkta' : 'Spustelėkite pasirinkti'}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Atgal
                </Button>
                <Button
                  size="lg"
                  disabled={!state.duration}
                  onClick={() => setStep(3)}
                  className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8"
                >
                  Toliau: Montažas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: EDITING OR RAW FOOTAGE */}
          {step === 3 && !submitted && (
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">3 žingsnis iš 4</span>
                <h3 className="text-2xl font-bold text-white mt-1">Ar reikalingas vaizdo montažas?</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Dalis mūsų klientų turi savo montuotojus ir nori tik žaliavos, kita dalis pageidauja pilno galutinio klipo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {editingOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = state.editingNeeds === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setState({ ...state, editingNeeds: opt.id as any })}
                      className={`text-left p-6 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                        isSelected 
                          ? 'border-amber-400 bg-amber-400/10 ring-1 ring-amber-400' 
                          : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-amber-400 text-black' : 'bg-zinc-800 text-amber-400'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                            {opt.badge}
                          </span>
                        </div>
                        <h4 className="font-semibold text-white text-base mb-2">{opt.title}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">{opt.description}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center text-xs text-zinc-400">
                        <CheckCircle2 className={`w-4 h-4 mr-2 ${isSelected ? 'text-amber-400' : 'text-zinc-600'}`} />
                        {isSelected ? 'Pasirinkta' : 'Spustelėkite pasirinkti'}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Atgal
                </Button>
                <Button
                  size="lg"
                  disabled={!state.editingNeeds}
                  onClick={() => setStep(4)}
                  className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8"
                >
                  Toliau: Pasiūlymo santrauka
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4: SUMMARY & CONTACT */}
          {step === 4 && !submitted && (
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">4 žingsnis iš 4</span>
                <h3 className="text-2xl font-bold text-white mt-1">Jūsų poreikių santrauka ir kontaktai</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Patikrinkite parinktį ir nurodykite, kaip su jumis susisiekti. Paskambinsime arba parašysime su konkrečiu laiku ir sąmata.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Summary Box */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Parinkta konfigūracija
                  </h4>

                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-zinc-500 block text-xs">Filmavimo kryptis:</span>
                      <span className="text-white font-medium capitalize">
                        {projectTypes.find(p => p.id === state.projectType)?.title || 'Nenurodyta'}
                      </span>
                    </div>

                    <div>
                      <span className="text-zinc-500 block text-xs">Numatoma trukmė ir kainodara:</span>
                      <div className="text-amber-400 font-semibold">{estimate.priceType}</div>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{estimate.explanation}</p>
                    </div>

                    <div>
                      <span className="text-zinc-500 block text-xs">Montažo paslauga:</span>
                      <span className="text-white font-medium">
                        {editingOptions.find(e => e.id === state.editingNeeds)?.title || 'Nenurodyta'}
                      </span>
                    </div>

                    <div className="pt-3 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-400">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Bazė: Kaunas (vykstame į bet kurį Lietuvos miestą)</span>
                    </div>
                  </div>
                </div>

                {/* Contact Inputs */}
                <form onSubmit={handleFinish} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Jūsų vardas arba įmonė *</label>
                    <input
                      type="text"
                      required
                      placeholder="pvz., Jonas / UAB „Statybų projektai“"
                      value={state.clientName}
                      onChange={(e) => setState({ ...state, clientName: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Telefono numeris *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+370 600 00000"
                      value={state.clientPhone}
                      onChange={(e) => setState({ ...state, clientPhone: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Lokacija / Miestas</label>
                    <input
                      type="text"
                      placeholder="pvz., Kaunas (arba Vilnius, Klaipėda...)"
                      value={state.location}
                      onChange={(e) => setState({ ...state, location: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Trumpas komentaras ar pageidavimai (nebūtina)</label>
                    <textarea
                      rows={2}
                      placeholder="pvz., filmuosime naujai įrengtą kavinę Laisvės alėjoje, reikės ir lauko, ir vidaus skrydžio."
                      value={state.clientNotes}
                      onChange={(e) => setState({ ...state, clientNotes: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(3)}
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Atgal
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 shadow-lg shadow-amber-400/20"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Siųsti užklausą
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* SUBMITTED SUCCESS STATE */}
          {submitted && (
            <div className="text-center py-12 px-4 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-display">Užklausa sėkmingai gauta!</h3>
              <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                Ačiū, <strong className="text-amber-400">{state.clientName}</strong>! Lukas arba Gabija peržiūrės jūsų pasirinktą formatą (<strong className="text-white">{estimate.priceType}</strong>) ir paskambins numeriu <strong className="text-white">{state.clientPhone}</strong> artimiausiu metu.
              </p>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-xs text-zinc-400 mb-6 text-left space-y-2">
                <div className="font-semibold text-zinc-200">Ką daryti dabar?</div>
                <div>• Jei skubus reikalas – galite skambinti tiesiogiai: <a href="tel:+37060012345" className="text-amber-400 font-semibold hover:underline">+370 600 12345</a></div>
                <div>• Dirbtuvių adresas pasikalbėjimui prie kavos: <span className="text-zinc-300 font-medium">Savanorių pr., Kaunas</span></div>
              </div>

              <Button
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setState({
                    projectType: '',
                    duration: '',
                    editingNeeds: '',
                    location: 'Kaunas',
                    clientName: '',
                    clientPhone: '',
                    clientNotes: '',
                  });
                }}
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
              >
                Pradėti naują užklausą
              </Button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
