import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, CornerDownLeft } from 'lucide-react';
import { personalInfo, skillCategories, projects, educationTimeline } from '../data/portfolioData';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-white/70">
          <p className="text-cyan-400 font-bold">
            CS Portfolio Interactive Terminal v1.0.4
          </p>
          <p>
            Bienvenue ! Tapez <span className="text-cyan-400 font-bold">help</span> pour
            afficher la liste des commandes disponibles.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-400 font-bold mb-1">Commandes supportées :</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-w-md text-white/70">
              <div>
                <span className="text-cyan-400 font-bold">about</span> : Présentation & bio
              </div>
              <div>
                <span className="text-cyan-400 font-bold">skills</span> : Compétences techniques
              </div>
              <div>
                <span className="text-cyan-400 font-bold">projects</span> : Liste des projets
              </div>
              <div>
                <span className="text-cyan-400 font-bold">education</span> : Parcours académique
              </div>
              <div>
                <span className="text-cyan-400 font-bold">contact</span> : Infos de contact
              </div>
              <div>
                <span className="text-cyan-400 font-bold">clear</span> : Effacer l'écran
              </div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-2 text-xs font-mono text-white/70">
            <p className="text-white font-bold">{personalInfo.studentName} - {personalInfo.title}</p>
            <p>{personalInfo.bioShort}</p>
            <p className="text-cyan-400">Statut : {personalInfo.statusBadge}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            {skillCategories.map((cat, idx) => (
              <div key={idx}>
                <span className="text-cyan-400 font-bold uppercase">{cat.title}:</span>{' '}
                <span className="text-white/70">
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-cyan-400 font-bold">Projets phares :</p>
            {projects.map((p) => (
              <div key={p.id} className="pl-2 border-l-2 border-cyan-400/40 space-y-0.5">
                <span className="text-white font-bold">{p.title}</span>
                <p className="text-white/70">{p.description || p.shortDescription}</p>
                {p.participation && (
                  <p className="text-cyan-400/90 text-[11px]">↳ Participation : {p.participation}</p>
                )}
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            {educationTimeline.map((e, idx) => (
              <div key={idx}>
                <span className="text-indigo-300 font-bold">{e.period}</span> :{' '}
                <span className="text-white">{e.degree}</span> ({e.institution})
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-white/70">
            <p>
              Email : <span className="text-white">{personalInfo.email}</span>
            </p>
            <p>
              GitHub : <span className="text-cyan-400">{personalInfo.github}</span>
            </p>
            <p>
              LinkedIn : <span className="text-indigo-300">{personalInfo.linkedin}</span>
            </p>
            <p>Localisation : {personalInfo.location}</p>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      case 'sudo':
        outputNode = (
          <p className="text-red-400 font-mono text-xs">
            [ACCESS DENIED] Vous n'avez pas les droits super-utilisateur sur le terminal d'Alexandre !
          </p>
        );
        break;

      case 'date':
        outputNode = (
          <p className="text-cyan-400 font-mono text-xs">
            {new Date().toLocaleString('fr-FR')}
          </p>
        );
        break;

      default:
        outputNode = (
          <p className="text-red-400 font-mono text-xs">
            Commande inconnue: '{trimmed}'. Tapez 'help' pour la liste des commandes.
          </p>
        );
        break;
    }

    setLogs((prev) => [...prev, { command: cmd, output: outputNode }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl h-[500px] glass-panel rounded-2xl border border-white/10 p-4 flex flex-col bg-[#050505] text-white shadow-2xl font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-white/60 font-bold ml-2 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-cyan-400" />
              achille@portfolio:~
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {logs.map((log, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <span>achille@portfolio:~$</span>
                <span className="text-white font-bold">{log.command}</span>
              </div>
              <div className="pl-4">{log.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <div className="pt-2 border-t border-white/10 flex items-center gap-2">
          <span className="text-cyan-400">achille@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tapez 'help'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder-white/30"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1 rounded text-cyan-400 hover:bg-white/5"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
