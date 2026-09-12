import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Filosofija', href: '#filosofija' },
    { label: 'Darbų portfolio', href: '#portfolio' },
    { label: 'Ką darome', href: '#paslaugos' },
    { label: 'Technika ir dronai', href: '#technika' },
    { label: 'Komanda', href: '#komanda' },
    { label: 'Kainodara', href: '#kainodara' },
    { label: 'DUK', href: '#duk' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-3 shadow-xl' 
        : 'bg-zinc-950/40 backdrop-blur-sm border-b border-white/5 py-4'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center font-black text-black text-xl shadow-lg shadow-amber-400/20 group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
                GELTONA <span className="text-amber-400">KINEMA</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-amber-400 border border-amber-400/30">
                KAUNAS
              </span>
            </div>
            <div className="text-[11px] text-zinc-400 font-medium tracking-wide">
              FPV KINO IR EMOCIJŲ STUDIJA
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="hover:text-amber-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Call CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+37060012345"
            className="flex items-center gap-2 text-xs font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-3.5 py-2 rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            +370 600 12345
          </a>
          <a
            href="#poreikiu-vedlys"
            className="flex items-center gap-1.5 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-lg shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Poreikių skaičiuoklė
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg"
          aria-label="Meniu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-200 hover:text-amber-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 space-y-3">
            <a
              href="tel:+37060012345"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 py-2.5 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Skambinti: +370 600 12345
            </a>
            <a
              href="#poreikiu-vedlys"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 py-2.5 rounded-lg"
            >
              Atidaryti poreikių vedlį
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center font-bold text-black text-sm">
                ⚡
              </div>
              <span className="font-display font-bold text-lg text-white">
                GELTONA <span className="text-amber-400">KINEMA</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Parduodame ne kameros pikselius, o tikrą šiurpulį ir skrydžio emociją. FPV dronų kinematografija Kaune ir visoje Lietuvoje.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Priimame užsakymus 2026 m. sezonui
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Paslaugų kryptys</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#portfolio" className="hover:text-amber-400">Nekilnojamojo turto turai (Cinewhoop)</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400">Motorsportas ir veiksmo sekimas (160 km/h)</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400">Renginiai ir festivalių transliacijos</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400">Gamyklų ir industriniai vieno kadro skrydžiai</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400">TV reklamos ir kino gamyba su RED / BMPCC</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Skaidri kainodara</h4>
            <div className="space-y-3 text-xs leading-relaxed text-zinc-400">
              <div>
                <strong className="text-zinc-200 block">Trumpas filmavimas:</strong>
                Kelios valandos – lankstus valandinis tarifas be permokos.
              </div>
              <div>
                <strong className="text-zinc-200 block">Pilna diena / Pamaina:</strong>
                Fiksuota projekto kaina su visa įranga ir baterijų stotimi.
              </div>
              <div className="pt-2 text-amber-400 font-medium">
                Pritaikyta ir tradiciniams, ir moderniems verslams.
              </div>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Kontaktai Kaune</h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p className="text-zinc-200 font-semibold">GELTONA KINEMA FPV DIRBTUVĖS</p>
              <p>Savanorių pr., Kaunas, Lietuva</p>
              <p>El. paštas: <a href="mailto:info@geltonakinema.lt" className="text-amber-400 hover:underline">info@geltonakinema.lt</a></p>
              <p>Telefonas: <a href="tel:+37060012345" className="text-amber-400 hover:underline font-bold">+370 600 12345</a></p>
              <p className="text-[11px] text-zinc-500 pt-2">Skambinti drąsiai: atsakome lietuviškai, aiškiai ir be sudėtingų techninių terminų.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} GELTONA KINEMA. Visos teisės saugomos. Kaunas, Lietuva.</p>
          <div className="flex items-center gap-4">
            <span>CAA sertifikuoti pilotai</span>
            <span>•</span>
            <span>Komercinis aviacinis draudimas</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Mes parduodame emociją</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
