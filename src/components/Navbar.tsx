import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenTerminal,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil', id: 'accueil' },
    { name: 'Compétences & Expériences', href: '#competences', id: 'competences' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-[#050505]/70 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#accueil"
          onClick={(e) => handleLinkClick(e, '#accueil')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-cyan-400 rounded-lg rotate-12 flex items-center justify-center font-black text-black text-sm shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:rotate-0 transition-transform shrink-0">
            {personalInfo.studentName.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="font-['Geist'] text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-tight">
              {personalInfo.studentName}
            </span>
            <span className="text-[10px] font-mono text-cyan-400/90 tracking-tight sm:tracking-wide">
              Étudiant en Informatique à l'IAI-Togo
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`transition-all relative py-1 hover:text-white ${
                  isActive ? 'text-cyan-400 font-bold' : 'text-white/60'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-wider text-white/60 font-mono">
              Disponible
            </span>
          </div>

          <button
            onClick={onOpenTerminal}
            title="Ouvrir le terminal (Ctrl+K)"
            className="p-2 rounded-lg border border-white/10 text-cyan-400 bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-400/40 active:scale-95 transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span className="hidden lg:inline text-[11px] text-white/70">Terminal</span>
          </button>

          <button
            onClick={onOpenResume}
            className="bg-cyan-400 text-black font-bold px-4 py-2 rounded-lg text-xs hover:bg-cyan-300 transition-all duration-300 active:scale-95 shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <FileText className="w-3.5 h-3.5" />
            CV
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg border border-white/10 text-[#00f0ff] bg-white/5 active:scale-95"
            aria-label="Terminal"
          >
            <Terminal className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white hover:text-[#00f0ff] hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1b2e] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-base font-['JetBrains_Mono'] py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30'
                    : 'text-[#d4e4fa] hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full justify-center bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00dbe9] py-3 rounded-lg font-['JetBrains_Mono'] text-sm hover:bg-[#00f0ff]/20 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Consulter le CV (Resume)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
