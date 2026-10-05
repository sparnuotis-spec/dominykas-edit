import { PORTFOLIO_CATEGORIES, PortfolioCategory } from '@/data';

interface PortfolioTypeSelectorProps {
  activeCategory: 'all' | PortfolioCategory;
  vertical?: boolean;
}

export default function PortfolioTypeSelector({ activeCategory, vertical = false }: PortfolioTypeSelectorProps) {
  return (
    <div className={`rounded-2xl bg-[#211f1a] text-white p-4 sm:p-5 shadow-xl ${vertical ? 'w-full' : ''}`}>
      <div className={`grid grid-cols-1 gap-2.5 ${vertical ? '' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
        {PORTFOLIO_CATEGORIES.map(tab => (
          <a
            key={tab.id}
            href={tab.id === 'all' ? '/portfolio' : `/portfolio/${tab.id}`}
            className={`rounded-full border px-4 py-3 text-left font-semibold transition-colors ${tab.id === activeCategory ? 'border-[#efc400] bg-[#efc400]/20 text-[#efc400]' : 'border-white/35 bg-white/10 text-white hover:border-white/50 hover:bg-white/15'}`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
