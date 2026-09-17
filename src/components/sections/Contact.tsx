import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  Navigation, 
  Radio
} from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, SERVICES } from '../../data/portfolioData';
import { useAudio } from '../../context/AudioContext';
import { TiltCard } from '../3d/TiltCard';

export const Contact: React.FC = () => {
  const { playHover, playClick, playSuccess } = useAudio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Frontend Web Development',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Listen to 'select-service' event from Services section
  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({ ...prev, service: customEvent.detail }));
      }
    };
    window.addEventListener('select-service', handleServiceSelect);
    return () => window.removeEventListener('select-service', handleServiceSelect);
  }, []);

  const copyInfo = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    playSuccess();
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);

    const subject = formData.subject || `${formData.service} inquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Interested Service: ${formData.service}`,
      '',
      'Message:',
      formData.message
    ].join('\n');

    window.location.href = `mailto:editncode@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
    setSubmitted(true);
    playSuccess();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/50">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-neon-cyan mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Let’s Build Something <span className="gradient-text-purple">Extraordinary</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind, need cinematic video editing, or want to collaborate on high-performance frontend engineering? Send a dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Futuristic Radar Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-neon-cyan/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-neon-cyan transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyInfo(PERSONAL_INFO.email, 'email')}
                  onMouseEnter={playHover}
                  className="p-2 rounded-lg glass-button text-slate-400 hover:text-white"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-neon-purple/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/10 border border-neon-purple/30 flex items-center justify-center text-neon-purple">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone / WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm font-semibold text-white hover:text-neon-purple transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyInfo(PERSONAL_INFO.phone, 'phone')}
                  onMouseEnter={playHover}
                  className="p-2 rounded-lg glass-button text-slate-400 hover:text-white"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-blue-500/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-white truncate max-w-[200px]">
                      adithyasrikrishna
                    </div>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHover}
                  className="p-2 rounded-lg glass-button text-slate-400 hover:text-white"
                  title="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Futuristic Radar Map Card (Bhimavaram, Andhra Pradesh) */}
            <TiltCard maxTilt={8} glare={true}>
              <div className="glass-panel p-6 rounded-3xl border border-white/15 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan">
                    <Radio className="w-4 h-4 animate-pulse" />
                    <span>GEO COORDINATES // RADAR</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">16.54° N, 81.52° E</span>
                </div>

                {/* Radar Display Visualizer */}
                <div className="relative h-44 w-full rounded-2xl bg-[#09090e] border border-white/10 overflow-hidden flex items-center justify-center">
                  {/* Circular Grid Rings */}
                  <div className="absolute w-36 h-36 rounded-full border border-neon-cyan/20 pointer-events-none" />
                  <div className="absolute w-24 h-24 rounded-full border border-neon-cyan/30 pointer-events-none" />
                  <div className="absolute w-12 h-12 rounded-full border border-neon-cyan/40 pointer-events-none" />

                  {/* Crosshairs */}
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-neon-cyan/20 pointer-events-none" />
                  <div className="absolute inset-y-0 left-1/2 w-[1px] bg-neon-cyan/20 pointer-events-none" />

                  {/* Sweeping Radar Scanner Needle */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                    className="absolute inset-0 origin-center pointer-events-none"
                    style={{
                      background: 'conic-gradient(from 0deg, rgba(0, 240, 255, 0.25) 0deg, transparent 60deg, transparent 360deg)'
                    }}
                  />

                  {/* Location Pin Core */}
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-neon-cyan shadow-[0_0_12px_#00F0FF]" />
                    </span>
                    <div className="mt-2 px-2.5 py-0.5 rounded-full bg-black/80 border border-white/20 text-[11px] font-mono text-white whitespace-nowrap shadow-lg">
                      Bhimavaram, AP
                    </div>
                  </div>
                </div>

                {/* Address Text */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                    <MapPin className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{PERSONAL_INFO.location}</p>
                      <p className="text-slate-400 text-[11px] mt-0.5">{PERSONAL_INFO.address}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Bhimavaram+Andhra+Pradesh"
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={playHover}
                      className="w-full py-2 px-3 rounded-xl glass-button text-xs font-mono text-slate-300 hover:text-white flex items-center justify-center gap-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5 text-neon-cyan" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-1 text-slate-500" />
                    </a>
                  </div>
                </div>

              </div>
            </TiltCard>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Transmit a Message
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-8">
                Typical response latency: &lt; 4 hours. Available worldwide.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">
                    Transmission Dispatched!
                  </h4>
                  <p className="text-slate-300 text-sm mt-2 max-w-sm mx-auto font-mono">
                    Thank you, {formData.name}. Your message has been logged. I will reply to {formData.email} promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl glass-input text-white placeholder-slate-500 text-sm font-sans"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul.sharma@gmail.com"
                        className="w-full px-4 py-3 rounded-xl glass-input text-white placeholder-slate-500 text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Interested Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm font-sans bg-[#0e0e16]"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#0d0d14] text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="General Inquiry" className="bg-[#0d0d14] text-white">
                          General Inquiry / Collab
                        </option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Website for a Bengaluru startup"
                        className="w-full px-4 py-3 rounded-xl glass-input text-white placeholder-slate-500 text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Project Details &amp; Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, deliverables, and vision... For example: We need a responsive website for our Hyderabad business."
                      className="w-full px-4 py-3 rounded-xl glass-input text-white placeholder-slate-500 text-sm font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={playHover}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-cyan via-blue-500 to-neon-purple text-black font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-neon-cyan transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 font-mono">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Transmission</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
