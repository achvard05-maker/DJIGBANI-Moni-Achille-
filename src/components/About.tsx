import React from 'react';
import { UserCheck, Sparkles, Award, Code, Cpu, HeartHandshake } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-[1200px] mx-auto">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-white/10">
        {/* Subtle accent backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12 items-center">
          {/* Narrative Column */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-2 flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>PRÉSENTATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-['Geist'] text-white uppercase tracking-tight">
                À propos de moi<span className="text-cyan-400">.</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-white/60 leading-relaxed">
              {personalInfo.aboutLong.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="px-3.5 py-1.5 rounded-lg glass-panel text-xs text-white/80 font-mono flex items-center gap-2">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                Architectures Propres & Microservices
              </div>
              <div className="px-3.5 py-1.5 rounded-lg glass-panel text-xs text-white/80 font-mono flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                Algorithmique & Optimisation
              </div>
              <div className="px-3.5 py-1.5 rounded-lg glass-panel text-xs text-white/80 font-mono flex items-center gap-2">
                <HeartHandshake className="w-3.5 h-3.5 text-cyan-400" />
                Projets Collaboratifs Open-Source
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, index) => {
              const isCyan = stat.highlightColor === 'cyan';
              return (
                <div
                  key={index}
                  className="p-5 glass-panel rounded-2xl text-center border border-white/10 hover:border-cyan-400/40 transition-all group"
                >
                  <div
                    className={`text-3xl sm:text-4xl font-black font-['Geist'] mb-1 transition-transform group-hover:scale-110 ${
                      isCyan ? 'text-cyan-400 accent-glow' : 'text-indigo-400'
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/50">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
