import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types';
import { TiltCard } from '../3d/TiltCard';
import { ProjectModal } from '../ui/ProjectModal';
import { useAudio } from '../../context/AudioContext';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { playHover, playClick } = useAudio();

  const categories = ['All', 'Frontend', 'Full Stack', 'Video & Motion'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-white/10 text-xs font-mono text-neon-cyan mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Curated Creations &amp; <span className="gradient-text-purple">Engineering Labs</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Explore a collection of high-performance web applications, custom design systems, and cinematic video productions built with modern technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setActiveFilter(cat);
                }}
                onMouseEnter={playHover}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-neon-cyan to-blue-600 text-black font-semibold shadow-neon-cyan scale-105'
                    : 'glass-button text-slate-300 hover:text-white border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <TiltCard maxTilt={10} glare={true} className="h-full">
                  <div className="glass-panel rounded-3xl border border-white/15 overflow-hidden h-full flex flex-col justify-between group hover:border-neon-cyan/50 hover:shadow-2xl transition-all duration-300">
                    
                    {/* Project Preview Image with Overlay */}
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-[#0e0e16]/40 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-black/70 backdrop-blur-md text-neon-cyan border border-neon-cyan/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Inspect Trigger Button */}
                      <button
                        onClick={() => {
                          playClick();
                          setSelectedProject(project);
                        }}
                        onMouseEnter={playHover}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/20 hover:border-neon-cyan hover:text-neon-cyan"
                        title="Quick Inspect"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {/* Featured Star */}
                      {project.featured && (
                        <div className="absolute bottom-3 left-4 flex items-center gap-1 text-[11px] font-mono text-amber-300 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                          <Sparkles className="w-3 h-3" />
                          <span>Featured Build</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display font-bold text-xl text-white group-hover:text-neon-cyan transition-colors flex items-center justify-between">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-neon-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </h3>
                        
                        <p className="text-slate-300 text-sm mt-2 leading-relaxed line-clamp-3">
                          {project.shortDesc}
                        </p>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.8 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="px-2 py-0.8 rounded-md text-[11px] font-mono bg-white/5 text-slate-400">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card Action Buttons: GitHub & Live Demo */}
                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={playClick}
                          onMouseEnter={playHover}
                          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-neon-cyan to-blue-600 text-black font-semibold text-xs flex items-center justify-center gap-1.5 hover:brightness-110 shadow-neon-cyan transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={playClick}
                            onMouseEnter={playHover}
                            className="py-2.5 px-3 rounded-xl glass-button text-white font-medium text-xs flex items-center justify-center gap-1.5 border border-white/10 hover:border-white/30 transition-all"
                            title="View GitHub Repository"
                          >
                            <FaGithub className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}

                        <button
                          onClick={() => {
                            playClick();
                            setSelectedProject(project);
                          }}
                          onMouseEnter={playHover}
                          className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white border border-white/10 hover:border-white/30"
                          title="View Full Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Project Detail Inspection */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
