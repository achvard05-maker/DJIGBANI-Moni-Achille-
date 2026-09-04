import React from 'react';
import { GraduationCap, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section className="py-12 px-6 max-w-[1200px] mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold flex items-center justify-center gap-2">
          <GraduationCap className="w-4 h-4 text-indigo-400" />
          <span>FORMATION & DIPLÔMES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-['Geist'] text-white uppercase tracking-tight">
          Parcours Académique<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
          Mon cheminement académique et les fondations théoriques de mon ingénierie.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-white/10 -translate-x-1/2 rounded-full" />

        <div className="space-y-12">
          {educationTimeline.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Content Box */}
                <div
                  className={`flex-1 pl-10 sm:pl-0 ${
                    isEven ? 'sm:text-left sm:pl-12' : 'sm:text-right sm:pr-12'
                  }`}
                >
                  <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all space-y-3 inline-block w-full text-left">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                          item.highlight
                            ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                            : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-white/40 font-semibold uppercase tracking-wider">
                        {item.institution}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-['Geist'] text-white uppercase tracking-tight">
                      {item.degree}
                    </h3>

                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.description}
                    </p>

                    {item.details && item.details.length > 0 && (
                      <ul className="pt-2 space-y-1 text-xs font-mono text-cyan-400">
                        {item.details.map((d, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Node Dot on Center Line */}
                <div
                  className={`absolute left-6 sm:left-1/2 w-8 h-8 rounded-full -translate-x-1/2 z-10 flex items-center justify-center border-2 ${
                    item.highlight
                      ? 'bg-[#050505] border-cyan-400 pulse-node'
                      : 'bg-[#050505] border-indigo-400'
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item.highlight ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-indigo-400'
                    }`}
                  />
                </div>

                {/* Empty Spacer Column for Desktop Staggering */}
                <div className="hidden sm:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
