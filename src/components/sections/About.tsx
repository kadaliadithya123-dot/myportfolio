import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Code2, 
  Film, 
  Terminal, 
  Copy, 
  Check, 
  Zap, 
  Sparkles, 
  Cpu, 
  Heart,
  Laptop
} from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../../data/portfolioData';
import { useAudio } from '../../context/AudioContext';
import { TiltCard } from '../3d/TiltCard';

export const About: React.FC = () => {
  const { playHover, playClick, playSuccess } = useAudio();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'config' | 'philosophy'>('config');

  const configSnippet = `// adithya.config.ts
export const developerProfile = {
  name: "${PERSONAL_INFO.name}",
  roles: ["Video Editor", "Full Stack Developer"],
  location: "${PERSONAL_INFO.location}",
  primaryStack: {
    frontend: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
    creative: ["Premiere Pro", "After Effects", "Color Grading"],
    backend: ["Node.js", "Express", "MongoDB", "REST"]
  },
  mindset: {
    focus: "Fluid UI + High Retention Cinema",
    philosophy: "Where Code Meets Kinetic Motion",
    coffeeRate: "High",
    openToWork: true
  }
};`;

  const copyConfig = () => {
    navigator.clipboard.writeText(configSnippet);
    setCopied(true);
    playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-neon-cyan mb-4">
            <User className="w-3.5 h-3.5" />
            <span>DISCOVER THE STORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Bridging Code with <span className="gradient-text-purple">Visual Storytelling</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            I craft digital products that don't just function flawlessly—they capture attention, evoke emotion, and leave a lasting impression.
          </p>
        </div>

        {/* 4 Stat Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard maxTilt={10} glare={true} className="h-full">
                <div className="glass-card p-6 rounded-2xl border border-white/10 h-full flex flex-col justify-between group hover:border-neon-cyan/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400">0{idx + 1} // STAT</span>
                    <Sparkles className="w-4 h-4 text-neon-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <div className="font-display font-black text-4xl sm:text-5xl text-white group-hover:text-neon-cyan transition-colors flex items-baseline">
                      <span>{stat.value}</span>
                      <span className="text-2xl sm:text-3xl text-neon-purple ml-1">{stat.suffix}</span>
                    </div>
                    <div className="font-display font-bold text-base text-slate-200 mt-2">
                      {stat.label}
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid: Narrative + Interactive Animated Code IDE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Bento: Personal Narrative & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-neon-cyan/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-neon-cyan to-blue-600 flex items-center justify-center text-black font-bold">
                  <Heart className="w-6 h-6 fill-black" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Passionate Craftsmanship
                  </h3>
                  <p className="text-xs font-mono text-neon-cyan">
                    Web Development + Cinematic Editing
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {PERSONAL_INFO.bio}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Based in <strong className="text-white">Bhimavaram, Andhra Pradesh</strong>, I operate at the intersection of technical precision and creative direction. Whether orchestrating smooth component lifecycles in React or color grading commercial footage in Premiere Pro, my goal is always the same: effortless beauty and peak performance.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-neon-cyan text-xs font-mono mb-1">
                    <Code2 className="w-4 h-4" />
                    <span>ENGINEERING</span>
                  </div>
                  <div className="text-xs text-slate-300">Clean architecture, modular components & robust state.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 text-neon-pink text-xs font-mono mb-1">
                    <Film className="w-4 h-4" />
                    <span>CINEMA & MOTION</span>
                  </div>
                  <div className="text-xs text-slate-300">Pacing, auditory impact & frame-by-frame rhythm.</div>
                </div>
              </div>
            </div>

            {/* Quick Quote Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-neon-purple/20 border border-neon-purple/40 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-neon-purple" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  "Motion is not decoration; it is communication."
                </div>
                <div className="text-xs font-mono text-slate-400 mt-0.5">
                  The Design Philosophy of Adithya Sri Krishna
                </div>
              </div>
            </div>
          </div>

          {/* Right Bento: Interactive Code IDE Terminal */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl border border-white/15 overflow-hidden h-full flex flex-col shadow-2xl">
              
              {/* Terminal Window Chrome */}
              <div className="px-4 py-3 bg-black/60 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    adithya-workspace ~ zsh
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyConfig}
                    onMouseEnter={playHover}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg glass-button text-xs font-mono text-slate-300 hover:text-white"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* IDE Tabs */}
              <div className="flex items-center px-4 bg-black/40 border-b border-white/5 text-xs font-mono">
                <button
                  onClick={() => {
                    playClick();
                    setActiveTab('config');
                  }}
                  className={`py-2 px-3 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'config'
                      ? 'border-neon-cyan text-white bg-white/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
                  <span>adithya.config.ts</span>
                </button>
                <button
                  onClick={() => {
                    playClick();
                    setActiveTab('philosophy');
                  }}
                  className={`py-2 px-3 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'philosophy'
                      ? 'border-neon-purple text-white bg-white/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5 text-neon-purple" />
                  <span>workflow.sh</span>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto flex-1 bg-[#09090f]/90">
                {activeTab === 'config' ? (
                  <pre className="space-y-1">
                    <span className="text-slate-500">// adithya.config.ts</span>
                    {'\n'}
                    <span className="text-neon-purple">export const</span> <span className="text-neon-cyan">developerProfile</span> = {'{'}
                    {'\n'}  <span className="text-slate-400">name:</span> <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                    {'\n'}  <span className="text-slate-400">headline:</span> <span className="text-emerald-300">"{PERSONAL_INFO.headline}"</span>,
                    {'\n'}  <span className="text-slate-400">location:</span> <span className="text-emerald-300">"Bhimavaram, AP, India"</span>,
                    {'\n'}  <span className="text-slate-400">specialties:</span> [
                    {'\n'}    <span className="text-amber-300">"Modern Frontend (React 19, TS, Vite)"</span>,
                    {'\n'}    <span className="text-amber-300">"Professional Video Editing & Motion"</span>,
                    {'\n'}    <span className="text-amber-300">"Glassmorphism & 3D Interactive Web"</span>
                    {'\n'}  ],
                    {'\n'}  <span className="text-slate-400">status:</span> <span className="text-emerald-400">"{PERSONAL_INFO.status}"</span>,
                    {'\n'}  <span className="text-slate-400">contact:</span> {'{'}
                    {'\n'}    <span className="text-slate-400">email:</span> <span className="text-neon-cyan">"{PERSONAL_INFO.email}"</span>,
                    {'\n'}    <span className="text-slate-400">phone:</span> <span className="text-neon-cyan">"{PERSONAL_INFO.phone}"</span>
                    {'\n'}  {'}'}
                    {'\n'}{'}'};
                  </pre>
                ) : (
                  <pre className="space-y-1">
                    <span className="text-slate-500">#!/bin/bash</span>
                    {'\n'}<span className="text-slate-500"># Continuous Delivery of Excellence</span>
                    {'\n'}<span className="text-neon-cyan">git checkout</span> -b feature/futuristic-ui
                    {'\n'}<span className="text-neon-purple">npm run</span> dev <span className="text-slate-500"># Launch Vite HMR</span>
                    {'\n'}<span className="text-slate-400">render_timeline</span> --resolution 4k --fps 60
                    {'\n'}<span className="text-emerald-400">echo</span> "Exported cinema-grade cut with color LUT"
                    {'\n'}<span className="text-neon-cyan">git push</span> origin main
                    {'\n'}<span className="text-emerald-300">status: SUCCESS (Lighthouse: 99/100)</span>
                  </pre>
                )}
              </div>

              {/* Terminal Status Footer */}
              <div className="px-4 py-2 bg-black/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>TypeScript 6.0 • UTF-8</span>
                </div>
                <span>Ln 18, Col 1</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
