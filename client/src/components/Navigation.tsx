import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Instagram, Menu, Phone, X, Youtube } from 'lucide-react';

const navLinks = [
  { label: 'Filosofija', href: '#filosofija' },
  { label: 'Darbai', href: '#portfolio' },
  { label: 'Ką darome', href: '#paslaugos' },
  { label: 'Technika', href: '#technika' },
  { label: 'Komanda', href: '#komanda' },
  { label: 'Atsiliepimai', href: '#atsiliepimai' },
];
const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/sparnuotisfpv/', icon: Instagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/@sparnuotislt', icon: null },
  { label: 'YouTube', href: 'https://youtube.com/channel/UCWTB2v7oCzXqE2qiZ2LSpyw/', icon: Youtube },
];

function Brand({ light = false }: { light?: boolean }) {
  return <a href="/" className="flex items-center shrink-0"><img src="/manus-storage/Sparnuotis-black_99e4bcd7.svg" alt="Sparnuotis FPV logotipas" className={`w-36 h-12 object-fill ${light ? 'invert' : ''}`} /></a>;
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f4f1e9]/95 backdrop-blur-md border-b border-[#d9d4c8] py-3' : 'bg-[#27251f]/35 backdrop-blur-sm py-4'}`}>
    <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between gap-5"><Brand light={!scrolled} /><nav className="hidden xl:flex items-center gap-5 text-sm font-semibold">{navLinks.map(link => <a key={link.href} href={link.href} className={`${scrolled ? 'text-[#27251f]/75 hover:text-[#27251f]' : 'text-white/85 hover:text-[#efc400]'} transition-colors`}>{link.label}</a>)}<a href="/portfolio" className={`${scrolled ? 'text-[#27251f]/75 hover:text-[#27251f]' : 'text-white/85 hover:text-[#efc400]'} transition-colors`}>Visas portfolio</a></nav><div className="hidden md:flex items-center gap-4"><div className="flex flex-col items-end leading-tight"><a href="tel:+37068575900" className={`text-sm font-semibold ${scrolled ? 'text-[#27251f]' : 'text-white'}`}><Phone className="inline w-4 h-4 mr-1.5 text-[#efc400]" />+370 685 75900</a><a href="mailto:markas@sparnuotis.lt" className={`text-[11px] mt-1 ${scrolled ? 'text-[#6d6a61]' : 'text-white/70'}`}>markas@sparnuotis.lt</a></div><a href="#poreikiu-vedlys" className="rounded-full bg-[#efc400] text-[#27251f] px-4 py-2.5 text-sm font-bold hover:bg-[#ffd72f] transition-colors">Gauti pasiūlymą <ArrowUpRight className="inline w-4 h-4 ml-1" /></a></div><button className={`md:hidden p-2 ${scrolled ? 'text-[#27251f]' : 'text-white'}`} onClick={() => setOpen(!open)} aria-label="Meniu">{open ? <X /> : <Menu />}</button></div>
    {open && <div className="md:hidden mt-4 bg-[#f4f1e9] border-y border-[#d9d4c8] px-5 py-5 space-y-4 shadow-xl">{navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block font-semibold text-[#27251f]">{link.label}</a>)}<a href="/portfolio" onClick={() => setOpen(false)} className="block font-semibold text-[#27251f]">Visas portfolio</a><a href="#poreikiu-vedlys" onClick={() => setOpen(false)} className="block text-center rounded-full bg-[#efc400] px-4 py-3 font-bold">Gauti pasiūlymą</a></div>}
  </header>;
}

export function Footer() {
  return <footer className="bg-[#27251f] text-[#f4f1e9] py-12"><div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-8"><div className="md:col-span-2"><Brand light /><p className="text-sm text-white/60 mt-5 max-w-sm">FPV kino ir emocijų studija Kaune. Skraidome Lietuvoje ir Europoje, filmuojame gyvai, pasakojame aiškiai.</p><div className="flex flex-wrap gap-3 mt-5">{socials.map(item => <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="text-sm text-white/65 hover:text-[#efc400]">{item.label}</a>)}</div></div><div><div className="text-xs uppercase tracking-wider text-[#efc400] font-bold mb-3">Kontaktai</div><a href="tel:+37068575900" className="block text-sm text-white/75 hover:text-[#efc400]">+370 685 75900</a><a href="mailto:markas@sparnuotis.lt" className="block text-sm text-white/75 hover:text-[#efc400] mt-1">markas@sparnuotis.lt</a><p className="text-sm text-white/50 mt-3">Kaunas, dirbame visoje Lietuvoje ir Europoje</p></div><div><div className="text-xs uppercase tracking-wider text-[#efc400] font-bold mb-3">Bendruomenė</div><p className="text-sm text-white/65 leading-relaxed">Palaikome vietinę FPV pilotų bendruomenę.</p><a href="https://fpvsports.lt" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-3 text-sm text-[#efc400] hover:underline">fpvsports.lt <ArrowUpRight className="w-3 h-3" /></a></div></div><div className="max-w-7xl mx-auto px-5 lg:px-8 pt-8 mt-8 border-t border-white/10 text-xs text-white/45">© {new Date().getFullYear()} SPARNUOTIS. FPV filmavimo paslaugos Lietuvoje ir Europoje.</div></footer>;
}
