import { PORTFOLIO_CATEGORIES, PortfolioCategory } from '@/data';
import { Link } from 'wouter';

interface PortfolioTypeSelectorProps {
  activeCategory: 'all' | PortfolioCategory;
}

export default function PortfolioTypeSelector({ activeCategory }: PortfolioTypeSelectorProps) {
  return (
    <div className="text-white">
      <div className="flex flex-wrap items-center gap-2">
        {PORTFOLIO_CATEGORIES.map(tab => (
          <Link
            key={tab.id}
            href={tab.id === 'all' ? '/portfolio' : `/portfolio/${tab.id}`}
            className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs text-left font-semibold transition-colors ${tab.id === activeCategory ? 'border-[#efc400] bg-[#efc400]/20 text-[#efc400]' : 'border-white/35 bg-white/10 text-white hover:border-white/50 hover:bg-white/15'}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
