import React from 'react';
import { Award, CheckCircle2, Shield, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section className="py-12 px-6 max-w-[1200px] mx-auto space-y-10">
      <div className="text-center space-y-3">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold flex items-center justify-center gap-2">
          <Award className="w-4 h-4 text-cyan-400" />
          <span>ACCRÉDITATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-['Geist'] text-white uppercase tracking-tight">
          Certifications<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
          Examens officiels et validations de compétences validés par les éditeurs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((cert, index) => {
          const isCyan = index % 2 === 0;
          return (
            <div
              key={index}
              className="glass-panel p-5 sm:p-6 rounded-2xl flex items-center gap-5 border border-white/10 hover:border-cyan-400/40 transition-all min-w-[280px] max-w-[360px] flex-1"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  isCyan
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                }`}
              >
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold font-['Geist'] text-white uppercase tracking-tight leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400">{cert.level}</p>
                <div className="flex items-center gap-2 text-[11px] font-mono text-white/40 uppercase tracking-wider pt-0.5">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
