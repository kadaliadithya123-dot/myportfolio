import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Code2, 
  Video, 
  Layers, 
  Palette, 
  Cpu, 
  CheckCircle, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { SERVICES } from '../../data/portfolioData';
import { TiltCard } from '../3d/TiltCard';
import { useAudio } from '../../context/AudioContext';

export const Services: React.FC = () => {
  const { playHover, playClick } = useAudio();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Video': return Video;
      case 'Layers': return Layers;
      case 'Palette': return Palette;
      case 'Cpu': return Cpu;
      default: return Sparkles;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    playClick();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to notify Contact form of selected service
      window.dispatchEvent(new CustomEvent('select-service', { detail: serviceTitle }));
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-neon-cyan mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS &amp; EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Comprehensive <span className="gradient-text-cyan">Creative &amp; Technical</span> Services
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            From initial wireframes and frontend architectures to cinematic pacing and high-retention video cuts, discover how I can elevate your next project.
          </p>
        </div>

        {/* Services 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = getServiceIcon(service.icon);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <TiltCard maxTilt={8} glare={true} className="h-full">
                  <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 h-full flex flex-col justify-between group hover:border-neon-cyan/50 hover:shadow-glass-glow transition-all duration-300">
                    
                    <div>
                      {/* Top Bar: Icon + Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>

                        {service.badge && (
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-neon-cyan transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="mt-6 space-y-2">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer: Tech Chips + Inquire CTA */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Inquire Button */}
                      <button
                        onClick={() => handleInquire(service.title)}
                        onMouseEnter={playHover}
                        className="w-full py-2.5 px-4 rounded-xl glass-button text-white group-hover:text-black group-hover:bg-neon-cyan font-semibold text-xs flex items-center justify-center gap-2 border border-white/15 transition-all"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
