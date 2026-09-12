import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

const links = [
  { label: 'Darbai', href: '#portfolio' },
  { label: 'Paslaugos', href: '#paslaugos' },
  { label: 'Technika', href: '#technika' },
  { label: 'Apie mus', href: '#komanda' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-[#f7f4ed]/95 backdrop-blur-md border-b border-[#ddd7c9] py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="w-10 h-10 rounded-full bg-[#f4c400] text-[#111d3a] grid place-items-center text-xl shadow-sm">✦</span>
          <div className="leading-none">
            <div className={`font-display font-bold tracking-tight ${scrolled ? 'text-[#111d3a]' : 'text-white'}`}>GELTONA KINEMA</div>
            <div className={`text-[10px] tracking-[.18em] mt-1 ${scrolled ? 'text-[#647089]' : 'text-white/65'}`}>FPV • KAUNAS</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
          {links.map((link) => <a key={link.href} href={link.href} className={`${scrolled ? 'text-[#111d3a]/75 hover:text-[#111d3a]' : 'text-white/90 hover:text-[#f4c400]'} transition-colors`}>{link.label}</a>)}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <a href="tel:+37060012345" className={`text-sm font-semibold ${scrolled ? 'text-[#111d3a]' : 'text-white'}`}><Phone className="inline w-4 h-4 mr-1.5 text-[#f4c400]" />+370 600 12345</a>
          <a href="#poreikiu-vedlys" className="bg-[#f4c400] text-[#111d3a] rounded-full px-4 py-2.5 text-sm font-bold hover:bg-[#ffd52e] transition-colors">Gauti pasiūlymą <ArrowUpRight className="inline w-4 h-4 ml-1" /></a>
        </div>
        <button className={`md:hidden p-2 rounded-full ${scrolled ? 'text-[#111d3a]' : 'text-white'}`} onClick={() => setOpen(!open)} aria-label="Meniu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="md:hidden mt-4 bg-[#f7f4ed] border-y border-[#ddd7c9] px-5 py-5 space-y-4 shadow-xl">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block font-semibold text-[#111d3a]">{link.label}</a>)}<a href="#poreikiu-vedlys" onClick={() => setOpen(false)} className="block rounded-full bg-[#f4c400] px-4 py-3 font-bold text-center">Gauti pasiūlymą</a></div>}
    </header>
  );
}

export function Footer() {
  return <footer className="bg-[#111d3a] text-white py-10"><div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row justify-between gap-6"><div><div className="font-display font-bold text-lg">GELTONA KINEMA</div><div className="text-white/60 text-sm mt-1">FPV filmavimo studija Kaune</div></div><div className="text-sm text-white/70 md:text-right"><a className="hover:text-[#f4c400]" href="mailto:info@geltonakinema.lt">info@geltonakinema.lt</a><br /><a className="hover:text-[#f4c400]" href="tel:+37060012345">+370 600 12345</a></div></div></footer>;
}
