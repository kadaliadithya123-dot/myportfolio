import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';
import { TiltCard } from '../3d/TiltCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-neon-cyan mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Work Experience &amp; <span className="gradient-text-purple">Milestones</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Professional timeline showcasing continuous growth, client satisfaction, and hands-on digital production.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Pulsing Node Checkpoint */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-neon-cyan flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
              </div>

              {/* Timeline Card */}
              <TiltCard maxTilt={6} glare={true}>
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 group hover:border-neon-cyan/40 transition-all">
                  
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                      {exp.type}
                    </span>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neon-purple" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neon-cyan" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-mono text-slate-400 mt-1">
                    {exp.company}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/10">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
