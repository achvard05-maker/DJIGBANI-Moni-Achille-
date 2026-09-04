import React from 'react';
import {
  FolderGit2,
  UserCheck,
  Github
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject?: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projets" className="py-16 px-6 max-w-[1200px] mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold flex items-center justify-center gap-2">
          <FolderGit2 className="w-4 h-4 text-cyan-400" />
          <span>RÉALISATIONS & CODE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-['Geist'] text-white uppercase tracking-tight">
          Projets Phares<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
          Présentation de mes projets avec le détail de ma participation et de mon rôle sur chacun d'eux.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject && onSelectProject(project)}
            className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl bg-[#08080d]"
          >
            {/* Top: Nom du projet & Description */}
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/70 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/70 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-green-500/70 inline-block" />
                  </div>
                  <span className="font-mono text-[11px] text-white/40 ml-1">
                    projet://{project.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-['Geist'] text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-white/70 leading-relaxed">
                {project.description || project.fullDescription || project.shortDescription}
              </p>
            </div>

            {/* Bottom: Partie Participation */}
            <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4 text-cyan-400" />
                <span>Participation & Rôle</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 border-l-2 border-l-cyan-400">
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-mono">
                  {project.participation}
                </p>
              </div>

              {/* Discreet GitHub Link if available */}
              {project.githubUrl && (
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-mono text-white/50 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Dépôt GitHub</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
