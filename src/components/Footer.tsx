import React from 'react';
import { ArrowUp, Code2, Heart, Terminal } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 px-6 mt-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand & Copyright */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-['Geist'] text-lg font-black text-white uppercase tracking-wider">
              CS Portfolio<span className="text-cyan-400">.</span>
            </span>
          </div>
          <p className="text-xs font-mono text-white/40">
            © {new Date().getFullYear()} {personalInfo.studentName}. Tous droits réservés.
          </p>
          <p className="text-[11px] font-mono text-white/60">
            Conçu avec React, Tailwind CSS & Passion pour le Code.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono uppercase tracking-wider">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyan-400 transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl glass-panel text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all cursor-pointer flex items-center gap-2 text-xs font-mono uppercase tracking-wider"
          title="Retourner en haut de page"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="hidden sm:inline">Haut</span>
        </button>
      </div>
    </footer>
  );
};
