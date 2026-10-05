import { PORTFOLIO_CATEGORIES, PortfolioCategory } from '@/data';

interface PortfolioTypeSelectorProps {
  activeCategory: 'all' | PortfolioCategory;
}

export default function PortfolioTypeSelector({ activeCategory }: PortfolioTypeSelectorProps) {
  return (
    <div className="rounded-2xl bg-[#efc400] text-[#27251f] p-6 sm:p-8 shadow-2xl">
      <div className="text-[10px] uppercase tracking-[.16em] font-bold text-[#9b7b00] mb-2">Portfolio pasirinkimas</div>
      <div className="font-display text-2xl font-bold mb-5">Pasirinkite portfolio tipą</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {PORTFOLIO_CATEGORIES.map(tab => (
          <a
            key={tab.id}
            href={tab.id === 'all' ? '/portfolio' : `/portfolio/${tab.id}`}
            className={`rounded-xl border px-4 py-4 text-left font-bold transition-colors ${tab.id === activeCategory ? 'border-[#efc400] bg-[#efc400] text-[#27251f]' : 'border-[#d9d4c8] hover:border-[#9b7b00] hover:bg-[#fff8d7]'}`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
