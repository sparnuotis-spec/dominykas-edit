import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';

const navLinks = [
  { label: 'Filosofija', href: '#filosofija' },
  { label: 'Darbai', href: '#portfolio' },
  { label: 'Ką darome', href: '#paslaugos' },
  { label: 'Technika', href: '#technika' },
  { label: 'Komanda', href: '#komanda' },
  { label: 'Atsiliepimai', href: '#atsiliepimai' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f4f1e9]/95 backdrop-blur-md border-b border-[#d9d4c8] py-3' : 'bg-[#27251f]/35 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <span className="w-10 h-10 rounded-full bg-[#efc400] text-[#27251f] grid place-items-center text-xl font-bold">✦</span>
          <span className="leading-none"><span className={`block font-display font-bold tracking-tight ${scrolled ? 'text-[#27251f]' : 'text-white'}`}>GELTONA KINEMA</span><span className={`block text-[10px] tracking-[.17em] mt-1 ${scrolled ? 'text-[#6d6a61]' : 'text-white/65'}`}>FPV • KAUNAS</span></span>
        </a>
        <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold">{navLinks.map(link => <a key={link.href} href={link.href} className={`${scrolled ? 'text-[#27251f]/75 hover:text-[#27251f]' : 'text-white/85 hover:text-[#efc400]'} transition-colors`}>{link.label}</a>)}</nav>
        <div className="hidden md:flex items-center gap-3"><a href="tel:+37060012345" className={`text-sm font-semibold ${scrolled ? 'text-[#27251f]' : 'text-white'}`}><Phone className="inline w-4 h-4 mr-1.5 text-[#efc400]" />+370 600 12345</a><a href="#poreikiu-vedlys" className="rounded-full bg-[#efc400] text-[#27251f] px-4 py-2.5 text-sm font-bold hover:bg-[#ffd72f] transition-colors">Gauti pasiūlymą <ArrowUpRight className="inline w-4 h-4 ml-1" /></a></div>
        <button className={`md:hidden p-2 ${scrolled ? 'text-[#27251f]' : 'text-white'}`} onClick={() => setOpen(!open)} aria-label="Meniu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="md:hidden mt-4 bg-[#f4f1e9] border-y border-[#d9d4c8] px-5 py-5 space-y-4 shadow-xl">{navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block font-semibold text-[#27251f]">{link.label}</a>)}<a href="#poreikiu-vedlys" onClick={() => setOpen(false)} className="block text-center rounded-full bg-[#efc400] px-4 py-3 font-bold">Gauti pasiūlymą</a></div>}
    </header>
  );
}

export function Footer() {
  return <footer className="bg-[#27251f] text-[#f4f1e9] py-12"><div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-8"><div className="md:col-span-2"><div className="font-display text-xl font-bold">GELTONA KINEMA</div><p className="text-sm text-white/60 mt-2 max-w-sm">FPV kino ir emocijų studija Kaune. Skraidome saugiai, filmuojame gyvai, pasakojame aiškiai.</p></div><div><div className="text-xs uppercase tracking-wider text-[#efc400] font-bold mb-3">Kontaktai</div><a href="mailto:info@geltonakinema.lt" className="block text-sm text-white/75 hover:text-[#efc400]">info@geltonakinema.lt</a><a href="tel:+37060012345" className="block text-sm text-white/75 hover:text-[#efc400] mt-1">+370 600 12345</a></div><div><div className="text-xs uppercase tracking-wider text-[#efc400] font-bold mb-3">Dirbame</div><p className="text-sm text-white/75">Kaunas • visa Lietuva</p><p className="text-sm text-white/50 mt-1">CAA procedūros ir komercinis draudimas</p></div></div><div className="max-w-7xl mx-auto px-5 lg:px-8 pt-8 mt-8 border-t border-white/10 text-xs text-white/45">© {new Date().getFullYear()} GELTONA KINEMA. Mes parduodame emociją.</div></footer>;
}
