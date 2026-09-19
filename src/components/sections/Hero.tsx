import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileDown, 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Play, 
  Code, 
  Film, 
  Layers, 
  CheckCircle,
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HeroCanvas } from '../3d/HeroCanvas';
import { TiltCard } from '../3d/TiltCard';
import { useAudio } from '../../context/AudioContext';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { BrandLogo } from '../ui/BrandLogo';

const ROLES = [
  "Video Editor",
  "Full Stack Developer",
  "React Developer",
  "Creative Technologist",
  "UI/UX Specialist"
];

export const Hero: React.FC = () => {
  const { playClick, playHover, playSuccess } = useAudio();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const handleResumeDownload = () => {
    playSuccess();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });

    const a = document.createElement('a');
    a.href = '/Adithya_Sri_Krishna_Resume.docx';
    a.download = 'Adithya_Sri_Krishna_Resume.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const scrollTo = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* 3D Three.js Canvas Background */}
      <HeroCanvas />

      {/* Cyber Grid Overlay & Ambient Glowing Orbs */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-neon-cyan/15 via-neon-purple/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-pink/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/15 text-xs font-mono text-slate-300 mb-6 shadow-glass-glow"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-cyan" />
              </span>
              <span className="text-white font-medium">Available for New Projects</span>
              <span className="text-white/30">•</span>
              <span className="text-neon-cyan">Open to Opportunities</span>
            </motion.div>

            {/* Name Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white leading-none mb-3">
                <span className="block text-slate-400 font-sans text-lg sm:text-2xl font-light tracking-wide uppercase mb-2">
                  Hello, I'm
                </span>
                <span className="gradient-text-purple">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </motion.div>

            {/* Animated Role Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-12 sm:h-14 flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <span className="text-xl sm:text-3xl font-display font-bold text-white/90">
                I am a
              </span>
              <span className="text-xl sm:text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple border-b-2 border-neon-cyan pb-0.5 min-w-[180px] sm:min-w-[280px]">
                {displayedText}
                <span className="animate-pulse text-neon-cyan font-normal ml-0.5">|</span>
              </span>
            </motion.div>

            {/* Tagline & Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-4 mx-auto lg:mx-0"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0"
            >
              I help brands, creators, and businesses with video editing, full stack development, and premium website design—combining creative storytelling with clean, high-performing digital experiences.
            </motion.p>

            {/* 3 Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              {/* 1. Download Resume */}
              <button
                onClick={handleResumeDownload}
                onMouseEnter={playHover}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-neon-cyan via-blue-500 to-indigo-600 text-black font-bold text-sm flex items-center gap-2 hover:brightness-110 shadow-neon-cyan transition-all transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-black" />
                <span>Download Resume</span>
              </button>

              {/* 2. View Projects */}
              <button
                onClick={() => scrollTo('projects')}
                onMouseEnter={playHover}
                className="px-6 py-3.5 rounded-2xl glass-button text-white font-semibold text-sm flex items-center gap-2 border border-white/20 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* 3. Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                onMouseEnter={playHover}
                className="px-6 py-3.5 rounded-2xl glass-card text-slate-300 hover:text-white font-medium text-sm flex items-center gap-2 border border-white/10 hover:border-white/25 transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-neon-purple" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div>
                <div className="font-display font-black text-2xl text-white">25+</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Projects Built</div>
              </div>
              <div>
                <div className="font-display font-black text-2xl text-neon-cyan">50+</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Video Edits</div>
              </div>
              <div>
                <div className="font-display font-black text-2xl text-neon-purple">1,500+</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Hours Coded</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Holographic Photo & Interactive 3D Card Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              <TiltCard maxTilt={15} glare={true} className="w-full">
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 relative overflow-hidden shadow-2xl backdrop-blur-2xl">
                  
                  {/* Decorative corner glows */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-cyan/30 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon-purple/30 rounded-full blur-2xl pointer-events-none" />

                  {/* Photo / Avatar Placeholder with Holographic Rings */}
                  <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-6">
                    {/* Pulsing orbital rings */}
                    <div className="absolute -inset-2 rounded-full border border-neon-cyan/40 animate-spin-slow pointer-events-none" />
                    <div className="absolute -inset-4 rounded-full border border-dashed border-neon-purple/30 animate-reverse pointer-events-none" />
                    
                    {/* Avatar Container */}
                    <div className="w-full h-full rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-neon-cyan via-white/20 to-neon-purple shadow-neon-cyan relative">
                      <div className="w-full h-full rounded-full bg-[#0d0d14] flex flex-col items-center justify-center relative overflow-hidden group">
                        {/* High-fidelity futuristic avatar graphic */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-cyan/30 via-slate-900 to-black" />
                        
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="mb-2 group-hover:scale-110 transition-transform">
                            <BrandLogo size={64} withGlow={true} />
                          </div>
                          <span className="font-display font-bold text-white text-base">
                            Adithya's
                          </span>
                          <span className="text-[11px] font-mono text-neon-cyan">
                            Creative Technologist
                          </span>
                        </div>

                        {/* Scanner sweep line */}
                        <motion.div
                          animate={{ y: ['-100%', '200%'] }}
                          transition={{ repeat: Infinity, duration: 3.5, ease: 'linear' }}
                          className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-75"
                        />
                      </div>
                    </div>

                    {/* Floating mini badge: Video */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                      className="absolute -top-2 -right-2 px-3 py-1.5 rounded-xl glass-panel border border-neon-pink/50 text-white text-[11px] font-mono flex items-center gap-1.5 shadow-lg bg-black/80"
                    >
                      <Film className="w-3.5 h-3.5 text-neon-pink" />
                      <span>4K Video</span>
                    </motion.div>

                    {/* Floating mini badge: React */}
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
                      className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-xl glass-panel border border-neon-cyan/50 text-white text-[11px] font-mono flex items-center gap-1.5 shadow-lg bg-black/80"
                    >
                      <Code className="w-3.5 h-3.5 text-neon-cyan" />
                      <span>React 19</span>
                    </motion.div>
                  </div>

                  {/* Card Details */}
                  <div className="text-center">
                    <h3 className="text-lg font-display font-bold text-white">
                      Adithya's
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">
                      Bhimavaram, Andhra Pradesh, India
                    </p>

                    {/* Tech Badges Grid */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4">
                      {["React", "TypeScript", "Tailwind", "Premiere", "After Effects", "Node.js"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Verified Card Footer */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span className="font-mono">Open for Hire</span>
                      </div>
                      <a
                        href={PERSONAL_INFO.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neon-cyan hover:underline flex items-center gap-1"
                      >
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
