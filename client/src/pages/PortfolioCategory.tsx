import { ArrowUpRight, Play } from 'lucide-react';
import { useRoute } from 'wouter';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS, PortfolioCategory, PortfolioItem } from '@/data';
import { Navigation, Footer } from '@/components/Navigation';
import { VideoModal } from '@/components/VideoModal';
import Seo from '@/components/Seo';
import { useState } from 'react';

export default function PortfolioCategoryPage() {
  const [, params] = useRoute('/portfolio/:category');
  const category = params?.category as PortfolioCategory | undefined;
  const categoryDetails = PORTFOLIO_CATEGORIES.find(item => item.id === category);
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const items = category ? PORTFOLIO_ITEMS.filter(item => item.categories.includes(category)) : [];

  if (!categoryDetails) return null;

  return (
    <div className="min-h-screen bg-[#f4f1e9] text-[#27251f]">
      <Seo title={`${categoryDetails.label} | Sparnuotis portfolio`} description={`Sparnuotis FPV ${categoryDetails.label.toLowerCase()} darbai Lietuvoje ir Europoje.`} path={`/portfolio/${categoryDetails.id}`} />
      <Navigation />
      <main className="pt-36 pb-20">
        <section className="relative -mt-36 pt-36 pb-14 bg-[#27251f] text-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="max-w-4xl">
              <a href="/portfolio" className="text-xs uppercase tracking-[.16em] font-bold text-[#efc400] hover:text-[#ffd72f]">← Visas portfolio</a>
              <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight leading-[.95] mt-5">{categoryDetails.label}</h1>
              <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">Peržiūrėkite mūsų {categoryDetails.label.toLowerCase()} FPV filmavimo darbus.</p>
              <a href={`/portfolio/${category}/case-study`} className="mt-7 inline-flex items-center rounded-full bg-[#efc400] px-5 py-3 font-bold text-[#27251f] hover:bg-[#ffd72f]">Skaityti atvejo analizę <ArrowUpRight className="w-4 h-4 ml-2" /></a>
            </div>
            <div className="flex flex-wrap gap-3 mt-10">
              {PORTFOLIO_CATEGORIES.map(tab => (
                <a
                  key={tab.id}
                  href={tab.id === 'all' ? '/portfolio' : `/portfolio/${tab.id}`}
                  className={`rounded-full px-4 py-2.5 text-sm font-bold border transition-colors ${tab.id === category ? 'bg-[#efc400] border-[#efc400] text-[#27251f]' : 'border-white/25 bg-white/10 text-white hover:bg-white/20'}`}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 lg:px-8">
          {items.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {items.map(item => (
                <article key={item.id} className="group cursor-pointer rounded-2xl overflow-hidden bg-[#fcfbf7] border border-[#d9d4c8]" onClick={() => setSelected(item)}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={item.image} alt={`${item.title} — FPV filmavimo kadras`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#27251f]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white"><div className="text-[10px] uppercase tracking-wider font-bold text-[#efc400]">{item.categoryLabel}</div><h2 className="font-display text-xl font-bold mt-1">{item.title}</h2></div>
                    <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#efc400] text-[#27251f] grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"><Play className="w-4 h-4 fill-current" /></span>
                  </div>
                  <div className="p-5"><div className="text-sm text-[#6d6a61]">{item.location} • {item.year}</div><p className="text-sm text-[#6d6a61] leading-relaxed mt-3 line-clamp-3">{item.description}</p><div className="mt-5 inline-flex items-center gap-1 text-sm font-bold">Peržiūrėti <ArrowUpRight className="w-4 h-4" /></div></div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-[#d9d4c8] bg-[#fcfbf7] p-10 text-center"><h2 className="font-display text-3xl font-bold">Šiai kategorijai darbai ruošiami</h2><p className="text-[#6d6a61] mt-3">Susisiekite ir papasakokite apie savo projektą.</p><a href="/kontaktai#poreikiu-vedlys" className="inline-flex mt-6 rounded-full bg-[#efc400] px-5 py-3 font-bold">Gauti pasiūlymą</a></div>
          )}
        </section>
      </main>
      <Footer />
      <VideoModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
