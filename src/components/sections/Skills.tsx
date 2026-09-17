import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Sparkles, 
  Flame, 
  Terminal, 
  CheckCircle2, 
  Wrench, 
  Palette, 
  Users, 
  Cloud, 
  Code2 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { TiltCard } from '../3d/TiltCard';
import { useAudio } from '../../context/AudioContext';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend');
  const { playHover, playClick } = useAudio();

  const activeCat = SKILL_CATEGORIES.find((c) => c.id === selectedCategory) || SKILL_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend': return Code2;
      case 'backend': return Terminal;
      case 'cloud': return Cloud;
      case 'programming': return Cpu;
      case 'creative': return Palette;
      case 'tools': return Wrench;
      case 'soft': return Users;
      default: return Layers;
    }
  };

  // Ticker items for infinite marquee
  const marqueeItems = [
    "React.js", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Express.js",
    "MongoDB", "Premiere Pro", "After Effects", "Color Grading", "Figma",
    "Cloudinary", "Vercel", "Git", "REST APIs", "Glassmorphism UI", "Java", "Python"
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-neon-cyan mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Tools &amp; Technologies That <span className="gradient-text-cyan">Power My Work</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A meticulous blend of frontend engineering, backend architectures, digital media production, and human-centric design.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = cat.id === selectedCategory;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={playHover}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-neon-cyan to-blue-600 text-black font-semibold shadow-neon-cyan scale-105'
                    : 'glass-button text-slate-300 hover:text-white border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Showcase Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-16"
          >
            {/* Category Description Banner */}
            <div className="max-w-xl mx-auto text-center mb-8">
              <h3 className="font-display font-bold text-xl text-white">
                {activeCat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                {activeCat.description}
              </p>
            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {activeCat.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                >
                  <TiltCard maxTilt={8} glare={true} className="h-full">
                    <div className="glass-card p-5 rounded-2xl border border-white/10 h-full flex flex-col justify-between group hover:border-neon-cyan/50 hover:shadow-glass-glow transition-all">
                      
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-neon-cyan group-hover:animate-ping" />
                            <h4 className="font-display font-bold text-base text-white group-hover:text-neon-cyan transition-colors">
                              {skill.name}
                            </h4>
                          </div>

                          {skill.tag && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400">
                              {skill.tag}
                            </span>
                          )}
                        </div>

                        {/* Proficiency Level Bar */}
                        <div className="mt-4">
                          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                            <span className="text-slate-400">Proficiency</span>
                            <span className="text-neon-cyan font-semibold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5 p-[1px]">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, delay: idx * 0.05, ease: 'easeOut' }}
                              className="h-full rounded-full bg-gradient-to-r from-neon-cyan via-blue-500 to-neon-purple"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Production Ready</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>

                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Infinite Tech Stack Marquee */}
        <div className="relative pt-6 border-t border-white/10 overflow-hidden">
          <div className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
            // Continuously evolving workflow & tech ecosystem
          </div>

          <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex items-center gap-4 py-2 animate-marquee shrink-0">
              {marqueeItems.concat(marqueeItems).map((tech, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-xl glass-panel border border-white/10 text-xs sm:text-sm font-mono text-slate-300 flex items-center gap-2 whitespace-nowrap hover:border-neon-cyan/50 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
