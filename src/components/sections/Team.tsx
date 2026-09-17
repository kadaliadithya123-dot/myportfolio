import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users } from 'lucide-react';
import { TEAM_MEMBERS } from '../../data/portfolioData';
import { useAudio } from '../../context/AudioContext';
import { TiltCard } from '../3d/TiltCard';

export const Team: React.FC = () => {
  const { playHover } = useAudio();

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-black/30">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-neon-cyan mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>NEXTGEN DEVS // TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            The People Behind <span className="gradient-text-cyan">The Pixels</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A small, focused team combining engineering, product design, and brand thinking to build websites that feel unmistakably yours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <TiltCard maxTilt={8} glare={true} className="h-full">
                <article className="glass-panel rounded-3xl border border-white/10 overflow-hidden h-full group hover:border-neon-cyan/40 transition-all">
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-neon-cyan transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-neon-cyan mt-1">{member.role}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mt-3">{member.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {member.specialties.map((specialty) => (
                        <span key={specialty} className="px-2 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    {(member.linkedIn || member.github) && (
                      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
                        {member.linkedIn && (
                          <a href={member.linkedIn} target="_blank" rel="noreferrer" onMouseEnter={playHover} className="text-xs text-slate-400 hover:text-neon-cyan inline-flex items-center gap-1 transition-colors">
                            LinkedIn <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noreferrer" onMouseEnter={playHover} className="text-xs text-slate-400 hover:text-neon-cyan inline-flex items-center gap-1 transition-colors">
                            GitHub <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://nextgendevs.kadaliadithya123.workers.dev/" target="_blank" rel="noreferrer" onMouseEnter={playHover} className="inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan hover:text-white transition-colors">
            Visit the NextGen Devs studio <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};