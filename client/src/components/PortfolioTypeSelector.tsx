import { PORTFOLIO_CATEGORIES, PortfolioCategory } from '@/data';

interface PortfolioTypeSelectorProps {
  activeCategory: 'all' | PortfolioCategory;
}

export default function PortfolioTypeSelector({ activeCategory }: PortfolioTypeSelectorProps) {
  return (
    <div className="rounded-2xl bg-[#211f1a] text-white p-4 sm:p-5 shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {PORTFOLIO_CATEGORIES.map(tab => (
          <a
            key={tab.id}
            href={tab.id === 'all' ? '/portfolio' : `/portfolio/${tab.id}`}
            className={`rounded-xl border px-4 py-3 text-left font-bold transition-colors ${tab.id === activeCategory ? 'border-white bg-[#efc400] text-[#27251f]' : 'border-white bg-white text-[#27251f] hover:border-white hover:bg-[#efc400]'}`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
