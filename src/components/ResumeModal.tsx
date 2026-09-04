import React from 'react';
import { X, Download, Printer, GraduationCap, Code2, Mail, MapPin, Phone, Github, Linkedin, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo, skillCategories, educationTimeline, projects, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/10 p-6 sm:p-10 space-y-8 shadow-2xl bg-[#0a0a0f] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 print:hidden">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold">
            <Briefcase className="w-4 h-4" />
            <span>Curriculum Vitae (CV)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg glass-panel text-xs font-mono uppercase tracking-wider text-white hover:text-cyan-400 hover:border-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Imprimer / PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full glass-panel text-white/60 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Paper Preview */}
        <div className="bg-[#050505] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-8 text-sm">
          {/* Header Identity */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black font-['Geist'] text-white uppercase tracking-tight">
                {personalInfo.studentName}<span className="text-cyan-400">.</span>
              </h1>
              <p className="text-cyan-400 font-mono font-medium text-xs uppercase tracking-wider mt-1">
                {personalInfo.title}
              </p>
              <p className="text-xs text-white/60 mt-1">{personalInfo.subtitle}</p>
            </div>
            <div className="space-y-1.5 text-xs font-mono text-white/40 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5 text-white">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {personalInfo.location}
              </div>
              <div className="text-[11px] text-cyan-400">{personalInfo.github}</div>
            </div>
          </div>

          {/* Profile / Goal */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              Profil & Objectif
            </h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              {personalInfo.bioShort} Recherche activement un stage ou contrat en ingénierie logicielle et développement full-stack / cloud.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              Formation Académique
            </h2>
            <div className="space-y-4">
              {educationTimeline.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between gap-1 text-xs">
                  <div>
                    <span className="font-bold text-white uppercase tracking-tight text-sm">{item.degree}</span>
                    <p className="text-white/40">{item.institution}</p>
                    <p className="text-white/60 mt-1">{item.description}</p>
                  </div>
                  <span className="font-mono text-cyan-400 shrink-0 font-bold">{item.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Certifications & Accréditations
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-3 glass-panel rounded-xl border border-white/10 space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-bold font-['Geist'] text-white uppercase tracking-tight">
                        {cert.title}
                      </span>
                      {cert.year && (
                        <span className="font-mono text-cyan-400 shrink-0 text-[11px] font-bold">
                          {cert.year}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-white/50 text-[11px] font-mono">
                      <span>{cert.issuer}</span>
                      {cert.level && (
                        <>
                          <span>•</span>
                          <span className="text-indigo-300">{cert.level}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              Compétences Techniques
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3 glass-panel rounded-xl border border-white/10 space-y-1">
                  <span className="font-bold font-['Geist'] text-white uppercase tracking-tight">{cat.title} :</span>
                  <div className="text-white/60 font-mono">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              Projets Notables
            </h2>
            <div className="space-y-3 text-xs">
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="p-3 glass-panel rounded-xl border border-white/10 space-y-1">
                  <div className="flex justify-between font-bold text-white uppercase tracking-tight">
                    <span>{proj.title}</span>
                    {proj.category && (
                      <span className="text-indigo-300 font-mono font-normal text-[10px]">{proj.category}</span>
                    )}
                  </div>
                  <p className="text-white/60 text-[11px]">{proj.description || proj.shortDescription}</p>
                  {proj.participation && (
                    <p className="text-cyan-400 font-mono text-[10px]">
                      Rôle : {proj.participation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
