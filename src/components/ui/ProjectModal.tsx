import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '../../types';
import { useAudio } from '../../context/AudioContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { playClick, playHover } = useAudio();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          data-lenis-prevent
          className="relative w-full max-w-3xl max-h-[calc(100vh-3rem)] glass-panel rounded-3xl border border-white/15 overflow-y-auto overscroll-contain shadow-2xl z-10"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            onMouseEnter={playHover}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-button flex items-center justify-center text-slate-300 hover:text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Preview Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-[#0e0e16]/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/40 mb-2">
                {project.category}
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                {project.title}
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                {project.shortDesc}
              </p>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Project Overview
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-neon-cyan" />
                  Performance Benchmarks
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="glass-card p-3 rounded-xl border border-white/5 text-center">
                      <div className="font-display font-bold text-lg text-neon-cyan">
                        {metric.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                  Key Technical Features
                </h3>
                <div className="space-y-2">
                  {project.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex-1 min-w-[160px] py-3 px-5 rounded-xl bg-gradient-to-r from-neon-cyan to-blue-600 text-black font-semibold text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-neon-cyan transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Demo</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex-1 min-w-[160px] py-3 px-5 rounded-xl glass-button text-white font-medium text-sm flex items-center justify-center gap-2 border border-white/15 hover:border-white/30"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
