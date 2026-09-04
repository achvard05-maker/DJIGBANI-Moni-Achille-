import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Check,
  Copy,
  Terminal,
  MessageSquare,
  AtSign,
  Github,
  Linkedin,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-[1200px] mx-auto">
      <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 grid lg:grid-cols-2 relative shadow-2xl">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="p-8 sm:p-12 space-y-8 bg-[#0a0a0f]/80 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>CONTACT DIRECT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black font-['Geist'] text-white uppercase tracking-tight">
              On discute de votre projet ?<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              Que ce soit pour une opportunité de stage, un projet open-source, une alternance ou
              simplement échanger sur la tech, n'hésitez pas à me transmettre un message.
            </p>

            <div className="space-y-5 pt-4">
              {/* Email Block */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">Email</div>
                  <div className="text-sm font-mono text-white truncate font-medium">
                    {personalInfo.email}
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg border border-white/10 text-white/60 hover:text-cyan-400 hover:bg-white/5 transition-colors cursor-pointer"
                  title="Copier l'adresse email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Block */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl glass-panel border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 shrink-0 border border-indigo-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">Localisation</div>
                  <div className="text-sm font-mono text-white font-medium">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-8 border-t border-white/10 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">Réseaux & Plateformes :</div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-white/80 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                  title={`${social.name}: ${social.username}`}
                >
                  {social.name === 'GitHub' && <Github className="w-5 h-5" />}
                  {social.name === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
                  {social.name === 'Discord' && <MessageCircle className="w-5 h-5" />}
                  {social.name === 'Email' && <AtSign className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          {status === 'success' ? (
            <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-cyan-400 text-black flex items-center justify-center mx-auto font-bold">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-['Geist'] text-white uppercase tracking-tight">
                Message envoyé avec succès !
              </h3>
              <p className="text-sm text-white/60 font-mono leading-relaxed">
                Merci pour votre message. Je vous répondrai dans les plus brefs délais à l'adresse renseignée.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 px-6 py-2.5 bg-cyan-400 text-black rounded-xl text-xs font-mono font-bold uppercase tracking-wider hover:bg-cyan-300 transition-all"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/70 flex items-center justify-between uppercase tracking-wider">
                  <span>Nom complet</span>
                  <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jean Dupont"
                  className="w-full glass-panel border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-white/70 flex items-center justify-between uppercase tracking-wider">
                  <span>Adresse Email</span>
                  <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jean.dupont@exemple.com"
                  className="w-full glass-panel border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-white/70 flex items-center justify-between uppercase tracking-wider">
                  <span>Message</span>
                  <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Comment puis-je vous aider ? (Stage, alternance, mission, projet...)"
                  className="w-full glass-panel border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-cyan-400 text-black font-['Geist'] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span className="inline-flex items-center gap-2 font-mono text-xs">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
