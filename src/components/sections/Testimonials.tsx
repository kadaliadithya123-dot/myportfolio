import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareQuote, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/portfolioData';
import { useAudio } from '../../context/AudioContext';
import { TiltCard } from '../3d/TiltCard';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { playHover, playClick } = useAudio();

  const handlePrev = () => {
    playClick();
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    playClick();
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-neon-cyan mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS &amp; FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Client &amp; Collaborator <span className="gradient-text-purple">Reviews</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            What designers, creators, and engineering leads say about working with Adithya Sri Krishna.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <TiltCard maxTilt={6} glare={true}>
                <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl backdrop-blur-2xl">
                  
                  {/* Watermark Quote Icon */}
                  <Quote className="absolute top-6 right-8 w-24 h-24 text-white/5 pointer-events-none" />

                  {/* Stars */}
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote Content */}
                  <blockquote className="text-lg sm:text-2xl font-display text-white font-normal leading-relaxed mb-8 relative z-10">
                    "{current.content}"
                  </blockquote>

                  {/* Author Profile */}
                  <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <img
                        src={current.avatar}
                        alt={current.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-neon-cyan/50 p-0.5"
                      />
                      <div>
                        <div className="font-display font-bold text-lg text-white">
                          {current.name}
                        </div>
                        <div className="text-xs font-mono text-neon-cyan">
                          {current.role} • {current.company}
                        </div>
                        <div className="text-[11px] text-slate-500 font-sans mt-0.5">
                          {current.relationship}
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        onMouseEnter={playHover}
                        className="w-11 h-11 rounded-xl glass-button flex items-center justify-center text-white hover:text-neon-cyan border border-white/15"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        onMouseEnter={playHover}
                        className="w-11 h-11 rounded-xl glass-button flex items-center justify-center text-white hover:text-neon-cyan border border-white/15"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => {
                  playClick();
                  setCurrentIndex(idx);
                }}
                onMouseEnter={playHover}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-8 bg-neon-cyan shadow-neon-cyan'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
