import React, { useState } from 'react';
import { Code2, Layers, Wrench, Terminal, Cpu, Check, BarChart2, ShieldCheck } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [showLevelBars, setShowLevelBars] = useState(false);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'construction':
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      case 'terminal':
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="competences" className="pt-20 pb-12 px-6 max-w-[1200px] mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>STACK TECHNIQUE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-['Geist'] text-white uppercase tracking-tight">
          Compétences Techniques<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
          Mon arsenal technologique éprouvé au cours de mes études et projets informatiques.
        </p>

        {/* Level Toggle Button */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setShowLevelBars(!showLevelBars)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/10 text-xs font-mono text-white/70 hover:text-cyan-400 hover:border-cyan-400/40 transition-all cursor-pointer"
          >
            <BarChart2 className="w-3.5 h-3.5 text-cyan-400" />
            {showLevelBars ? 'Vue par badges' : 'Afficher les niveaux (%)'}
          </button>
        </div>
      </div>

      {/* 4 Category Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, idx) => {
          const isCyan = cat.colorTheme === 'cyan';
          return (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl space-y-5 border border-white/10 hover:border-cyan-400/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg ${
                      isCyan ? 'bg-cyan-500/10 text-cyan-400' : 'bg-indigo-500/20 text-indigo-300'
                    }`}
                  >
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-['Geist'] font-bold text-base text-white uppercase tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                {showLevelBars ? (
                  /* Progress Bar View */
                  <div className="space-y-3.5 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-white/80 font-medium">{skill.name}</span>
                          <span className="text-cyan-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#050505] rounded-full overflow-hidden border border-white/10">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${
                              isCyan
                                ? 'bg-gradient-to-r from-cyan-500/60 to-cyan-400'
                                : 'bg-gradient-to-r from-indigo-600 to-indigo-400'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Badge Pill View */
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-default flex items-center gap-1.5 glass-panel ${
                          isCyan
                            ? 'text-cyan-400 border-white/10 hover:border-cyan-400/40'
                            : 'text-indigo-300 border-white/10 hover:border-indigo-400/40'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/40 flex items-center justify-between">
                <span>{cat.skills.length} modules</span>
                <span className="text-cyan-400">Pratique active</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
