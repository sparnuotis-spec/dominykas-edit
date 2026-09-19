import { useMemo, useState } from 'react';
import { ArrowLeft, Check, ChevronDown, ClipboardCheck, Users } from 'lucide-react';
import { Link } from 'wouter';
import { DASHBOARD_SCENARIOS, PILOT_DASHBOARD } from '@/dashboardData';
import { Navigation, Footer } from '@/components/Navigation';
import Seo from '@/components/Seo';

const scenarioIds = Object.keys(DASHBOARD_SCENARIOS) as Array<keyof typeof DASHBOARD_SCENARIOS>;
const modes = ['CALM', 'DYN'] as const;

export default function Dashboard() {
  const [selectedPilotId, setSelectedPilotId] = useState<string>(PILOT_DASHBOARD[0]?.id ?? '');
  const pilot = useMemo(
    () => PILOT_DASHBOARD.find(item => item.id === selectedPilotId) ?? PILOT_DASHBOARD[0],
    [selectedPilotId],
  );

  if (!pilot) return null;

  return (
    <div className="min-h-screen bg-[#f4f1e9] text-[#27251f]">
      <Seo
        title="Pilotų dashboard — Sparnuotis"
        description="Pilotų skrydžių progreso dashboard: W1 ir W2 savaitės, scenarijai, CALM ir DYN skrydžiai."
        path="/dashboard"
      />
      <Navigation />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#6d6a61] hover:text-[#27251f] mb-8">
            <ArrowLeft className="w-4 h-4" /> Grįžti į pradžią
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-7 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[.16em] font-bold text-[#9b7b00] mb-4">Pilotų progresas</div>
              <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight leading-[.98]">Dashboard</h1>
              <p className="text-[#6d6a61] max-w-2xl mt-5 leading-relaxed">
                Kiekvieno piloto atlikti scenarijai pagal savaites, ramų (CALM) ir dinamišką (DYN) skrydžio režimą.
              </p>
            </div>
            <div className="rounded-2xl bg-[#efc400] px-5 py-4 min-w-[190px]">
              <div className="text-xs uppercase tracking-wider font-bold text-[#27251f]/65">Geri skrydžiai</div>
              <div className="font-display text-3xl font-bold mt-1">{pilot.totalGood}</div>
              <div className="text-sm text-[#27251f]/70">iš {pilot.totalFlights} įrašų</div>
            </div>
          </div>

          <section className="rounded-3xl border border-[#d9d4c8] bg-[#fcfbf7] p-5 sm:p-7 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#efc400] grid place-items-center"><Users className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#9b7b00] font-bold">Pasirinktas pilotas</div>
                  <h2 className="font-display text-2xl font-bold">{pilot.name}</h2>
                </div>
              </div>
              <label className="relative inline-flex items-center">
                <span className="sr-only">Pasirinkite pilotą</span>
                <select
                  value={selectedPilotId}
                  onChange={event => setSelectedPilotId(event.target.value)}
                  className="appearance-none rounded-full border border-[#d9d4c8] bg-[#f4f1e9] py-3 pl-5 pr-11 text-sm font-bold outline-none focus:border-[#9b7b00]"
                >
                  {PILOT_DASHBOARD.map(item => <option key={item.id} value={item.id}>{item.name} · {item.id}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 w-4 h-4 text-[#6d6a61]" />
              </label>
            </div>

            <div className="overflow-x-auto -mx-2 px-2 pb-3">
              <table className="w-full min-w-[980px] border-separate border-spacing-0 text-center">
                <thead>
                  <tr>
                    <th rowSpan={2} className="sticky left-0 z-10 bg-[#fcfbf7] border-b border-[#d9d4c8] px-4 py-4 text-left text-xs uppercase tracking-wider text-[#6d6a61]">Savaitė</th>
                    {scenarioIds.map(scenario => <th key={scenario} colSpan={2} className="border-b border-[#d9d4c8] px-3 py-3 font-display text-lg font-bold">{scenario}<span className="block text-[10px] font-sans font-normal text-[#9b7b00] mt-1">{DASHBOARD_SCENARIOS[scenario]}</span></th>)}
                  </tr>
                  <tr>
                    {scenarioIds.flatMap(scenario => modes.map(mode => <th key={`${scenario}-${mode}`} className="border-b border-[#d9d4c8] px-3 py-2 text-[10px] uppercase tracking-wider text-[#6d6a61]">{mode}</th>))}
                  </tr>
                </thead>
                <tbody>
                  {(['W1', 'W2'] as const).map(week => <tr key={week}>
                    <th className="sticky left-0 z-10 bg-[#fcfbf7] border-b border-[#d9d4c8] px-4 py-5 text-left font-display text-2xl">{week}</th>
                    {scenarioIds.flatMap(scenario => modes.map(mode => {
                      const count = pilot.weeks[week][scenario][mode] as number;
                      return <td key={`${week}-${scenario}-${mode}`} className="border-b border-[#d9d4c8] px-3 py-5">
                        <span className={`inline-flex min-w-10 h-10 items-center justify-center rounded-full text-sm font-bold ${count > 0 ? 'bg-[#e8f1d8] text-[#356126]' : 'bg-[#ebe7de] text-[#aaa59a]'}`}>
                          {count > 0 ? <><Check className="w-4 h-4 mr-1" />{count}</> : '—'}
                        </span>
                      </td>;
                    }))}
                  </tr>)}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="rounded-2xl bg-[#fcfbf7] border border-[#d9d4c8] p-5 md:col-span-2">
              <div className="flex items-center gap-2 font-bold"><ClipboardCheck className="w-5 h-5 text-[#9b7b00]" /> Kaip skaičiuojama</div>
              <p className="text-sm text-[#6d6a61] leading-relaxed mt-3">Skrydis skaičiuojamas kaip geras tik tada, kai tame FL įraše nėra <strong>True</strong> reikšmės stulpelyje „Ar reikes kartoti“, yra <strong>check</strong> stulpelyje „BB?“ ir yra <strong>vcheck</strong> stulpelyje „Video?“.</p>
            </div>
            <div className="rounded-2xl bg-[#27251f] text-white p-5">
              <div className="text-xs uppercase tracking-wider text-[#efc400] font-bold">Legenda</div>
              <p className="text-sm text-white/70 mt-3"><span className="text-[#efc400] font-bold">✓ 4</span> — 4 geri skrydžiai</p>
              <p className="text-sm text-white/70 mt-1"><span className="text-white/40 font-bold">—</span> — nėra gero skrydžio</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
