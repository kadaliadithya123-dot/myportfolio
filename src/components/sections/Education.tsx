import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { EDUCATION } from '../../data/portfolioData';
import { TiltCard } from '../3d/TiltCard';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-neon-cyan mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Education &amp; <span className="gradient-text-cyan">Qualifications</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous training in computer science, software engineering principles, algorithms, and analytical problem-solving.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Checkpoint Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-neon-purple flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neon-purple animate-ping" />
              </div>

              {/* Education Card */}
              <TiltCard maxTilt={6} glare={true}>
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 group hover:border-neon-purple/40 transition-all">
                  
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-400/10 text-emerald-400 border border-emerald-400/30">
                      <Award className="w-3.5 h-3.5" />
                      <span>{edu.grade}</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neon-purple" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-neon-purple transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-mono text-slate-300 mt-1">
                    {edu.institution}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Coursework Modules */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-neon-cyan" />
                      <span>Core Coursework &amp; Domains</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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
