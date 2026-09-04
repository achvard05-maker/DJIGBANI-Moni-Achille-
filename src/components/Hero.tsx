import React from 'react';
import { ArrowRight, Terminal, Sparkles, FolderGit2, CheckCircle2, Server, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative pt-32 md:pt-40 pb-20 px-6 max-w-[1200px] mx-auto">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-[-5%] w-[450px] h-[450px] ambient-light-cyan rounded-full -z-10" />
      <div className="absolute top-40 right-[-5%] w-[400px] h-[400px] ambient-light-violet rounded-full -z-10" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Text Content */}
        <div className="flex-1 space-y-6 text-left">
          {/* Nom complet tout en haut */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-white uppercase font-['Geist']">
              {personalInfo.studentName}
            </h1>

            {/* Badges: Institution + Disponibilité */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Institution Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Étudiant en Informatique à l'IAI-Togo</span>
              </div>

              {/* Status Badge */}
              <div className="inline-block px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs uppercase tracking-widest font-mono backdrop-blur-md">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  {personalInfo.statusBadge}
                </span>
              </div>
            </div>
          </div>

          {/* Slogan / Editorial Motto */}
          <div className="pt-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white/90 uppercase font-['Geist'] leading-tight">
              CONSTRUIRE LE <span className="text-cyan-400 accent-glow">FUTUR</span> DU NUMÉRIQUE<span className="text-cyan-400">.</span>
            </h2>
          </div>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-white/60 max-w-xl font-normal leading-relaxed">
            {personalInfo.bioShort}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection('competences')}
              className="group px-7 py-3.5 bg-cyan-400 text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center gap-2 cursor-pointer"
            >
              Me découvrir
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('projets')}
              className="px-7 py-3.5 glass-panel text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:border-cyan-400/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4 text-cyan-400" />
              Projets
            </button>

            <button
              onClick={onOpenTerminal}
              className="px-4 py-3.5 glass-panel text-cyan-400 hover:bg-cyan-500/10 rounded-xl font-mono text-xs transition-all flex items-center gap-2"
              title="Lancer le terminal interactif"
            >
              <Terminal className="w-4 h-4" />
              <span className="hidden sm:inline">Ctrl+K</span>
            </button>
          </div>

          {/* Quick Key-Points Pills */}
          <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-white/40">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full-Stack & Cloud</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Architecture Systèmes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open Source</span>
            </div>
          </div>
        </div>

        {/* Right Column: Systems & Network Console Card (No illustrative images) */}
        <div className="relative w-72 h-80 sm:w-80 sm:h-88 lg:w-96 lg:h-96 shrink-0">
          {/* Animated Ambient Glow Behind Frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-3xl opacity-20 blur-3xl" />

          {/* Editorial Glass Card */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel p-2 border border-white/10 shadow-2xl group transition-transform duration-500 hover:scale-[1.02]">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#07070b] border border-white/5 p-5 flex flex-col justify-between">
              {/* Terminal Window Header */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
                    <span className="font-mono text-[11px] text-white/40 ml-2">sysadmin@iai-togo</span>
                  </div>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ONLINE
                  </span>
                </div>

                {/* Console System Specs */}
                <div className="mt-4 space-y-2.5 font-mono text-xs">
                  <div className="text-white/40 text-[11px]">
                    <span className="text-cyan-400">$</span> uname -a
                  </div>
                  <div className="text-white/80 text-[11px] pl-2 border-l border-cyan-500/30">
                    Linux iai-togo 6.8.0-net #1 SMP
                  </div>

                  <div className="pt-2 text-white/40 text-[11px]">
                    <span className="text-cyan-400">$</span> whoami --details
                  </div>
                  <div className="pl-2 border-l border-indigo-500/30 space-y-1 text-[11px]">
                    <div className="text-white font-bold">{personalInfo.studentName}</div>
                    <div className="text-cyan-300/80">{personalInfo.subtitle}</div>
                    <div className="text-white/50">{personalInfo.location}</div>
                  </div>

                  <div className="pt-2 text-white/40 text-[11px]">
                    <span className="text-cyan-400">$</span> active-focus
                  </div>
                  <div className="pl-2 border-l border-emerald-500/30 text-[11px] text-emerald-400/90 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    <span>Cisco • VLSM • Linux • Réseaux</span>
                  </div>
                </div>
              </div>

              {/* Bottom Tag Overlay */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-mono text-cyan-400 font-bold">{personalInfo.studentName}</span>
                <span className="font-mono text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/10 truncate max-w-[140px]" title={personalInfo.subtitle}>
                  {personalInfo.subtitle}
                </span>
              </div>
            </div>
          </div>

          {/* Floating Editorial Code Snippet */}
          <div className="absolute -bottom-4 -left-4 glass-panel px-4 py-2 rounded-lg text-xs font-mono text-cyan-400 shadow-xl border border-white/10 backdrop-blur-md flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>sysctl -p /etc/network.conf</span>
          </div>
        </div>
      </div>
    </section>
  );
};
