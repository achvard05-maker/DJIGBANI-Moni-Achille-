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
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 print:static print:p-0 print:m-0 print:bg-white print:backdrop-blur-none print:w-full print:block"
    >
      <div
        id="resume-modal-dialog"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-white/10 p-3 sm:p-6 space-y-4 shadow-2xl bg-[#0d1117] text-white print:p-0 print:m-0 print:border-none print:shadow-none print:max-h-none print:bg-white print:text-black print:overflow-visible print:rounded-none print:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-2 py-1 print:hidden">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold">
            <Briefcase className="w-4 h-4" />
            <span>Curriculum Vitae (CV)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-cyan-400 hover:text-black text-xs font-mono uppercase tracking-wider text-white transition-all flex items-center gap-1.5 cursor-pointer font-medium"
            >
              <Printer className="w-3.5 h-3.5" />
              Imprimer / PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Paper Preview - Fond Blanc */}
        <div
          id="cv-paper"
          className="bg-white text-slate-900 p-6 sm:p-10 rounded-xl sm:rounded-2xl border border-slate-200 shadow-xl space-y-7 text-sm print:border-none print:shadow-none print:p-0 print:m-0 print:rounded-none print:w-full"
        >
          {/* Header Identity */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-200">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black font-['Geist'] text-slate-950 uppercase tracking-tight">
                {personalInfo.studentName}<span className="text-cyan-600">.</span>
              </h1>
              <p className="text-cyan-700 font-mono font-bold text-xs uppercase tracking-wider mt-1">
                {personalInfo.title}
              </p>
              <p className="text-xs text-slate-600 mt-1 font-medium">{personalInfo.subtitle}</p>
            </div>
            <div className="space-y-1.5 text-xs font-mono text-slate-600 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5 text-slate-800 font-medium">
                <Mail className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              {personalInfo.github && (
                <div className="flex items-center sm:justify-end gap-1.5 text-slate-700">
                  <Github className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  <span>{personalInfo.github}</span>
                </div>
              )}
            </div>
          </div>

          {/* Profile / Goal */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-cyan-800 uppercase tracking-widest font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
              Profil & Objectif
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personalInfo.bioShort} Recherche activement un stage ou contrat en ingénierie logicielle et développement full-stack / cloud.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-cyan-800 uppercase tracking-widest font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
              Formation Académique
            </h2>
            <div className="space-y-3">
              {educationTimeline.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1 text-xs">
                    <span className="font-bold text-slate-950 uppercase tracking-tight text-sm">
                      {item.degree}
                    </span>
                    <span className="font-mono text-cyan-700 shrink-0 font-bold text-xs">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs font-medium">{item.institution}</p>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-mono text-cyan-800 uppercase tracking-widest font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
                <Award className="w-3.5 h-3.5 text-cyan-600" />
                Certifications & Accréditations
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-bold font-['Geist'] text-slate-950 uppercase tracking-tight">
                        {cert.title}
                      </span>
                      {cert.year && (
                        <span className="font-mono text-cyan-700 shrink-0 text-[11px] font-bold">
                          {cert.year}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 text-[11px] font-mono">
                      <span>{cert.issuer}</span>
                      {cert.level && (
                        <>
                          <span>•</span>
                          <span className="text-cyan-800 font-semibold">{cert.level}</span>
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
            <h2 className="text-xs font-mono text-cyan-800 uppercase tracking-widest font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <Code2 className="w-3.5 h-3.5 text-cyan-600" />
              Compétences Techniques
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 space-y-1">
                  <span className="font-bold font-['Geist'] text-slate-950 uppercase tracking-tight">
                    {cat.title} :
                  </span>
                  <div className="text-slate-700 font-mono text-xs">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-cyan-800 uppercase tracking-widest font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
              Projets Notables
            </h2>
            <div className="space-y-3 text-xs">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="flex justify-between font-bold text-slate-950 uppercase tracking-tight">
                    <span>{proj.title}</span>
                    {proj.category && (
                      <span className="text-cyan-800 font-mono font-semibold text-[10px] uppercase">
                        {proj.category}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {proj.description || proj.shortDescription}
                  </p>
                  {proj.participation && (
                    <p className="text-cyan-700 font-mono text-[10px] font-medium">
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
