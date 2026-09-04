import React from 'react';
import { X, Github, UserCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl bg-[#0a0a0f] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-panel text-white/60 hover:text-cyan-400 hover:border-cyan-400 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Panel */}
        <div className="p-6 rounded-2xl bg-[#050505] border border-white/10 relative overflow-hidden space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
            </div>
            <span className="font-mono text-xs text-white/50 ml-1.5">
              projet://{project.id}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Geist'] text-white uppercase tracking-tight">
            {project.title}<span className="text-cyan-400">.</span>
          </h2>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
            Description du Projet
          </h3>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            {project.description || project.fullDescription || project.shortDescription}
          </p>
        </div>

        {/* Participation / Mon Rôle */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <span>Ma Participation & Mon Rôle</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 border-l-2 border-l-cyan-400">
            <p className="text-sm text-white/85 leading-relaxed font-mono">
              {project.participation}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        {project.githubUrl && (
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-5 glass-panel text-white rounded-xl text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:border-cyan-400/50"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              Voir le code source (GitHub)
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
