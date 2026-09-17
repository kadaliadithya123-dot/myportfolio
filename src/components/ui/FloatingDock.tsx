import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Users,
  Cpu, 
  FolderGit2, 
  Sparkles, 
  Mail, 
  Terminal, 
  Volume2, 
  VolumeX 
} from 'lucide-react';
import { useCommandPalette } from '../../context/CommandPaletteContext';
import { useAudio } from '../../context/AudioContext';

interface DockItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  active?: boolean;
}

export const FloatingDock: React.FC = () => {
  const { openPalette } = useCommandPalette();
  const { isMuted, toggleMute, playHover, playClick } = useAudio();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems: DockItem[] = [
    { id: 'hero', label: 'Home', icon: Home, action: () => scrollTo('hero') },
    { id: 'about', label: 'About', icon: User, action: () => scrollTo('about') },
    { id: 'skills', label: 'Skills', icon: Cpu, action: () => scrollTo('skills') },
    { id: 'projects', label: 'Projects', icon: FolderGit2, action: () => scrollTo('projects') },
    { id: 'team', label: 'Team', icon: Users, action: () => scrollTo('team') },
    { id: 'services', label: 'Services', icon: Sparkles, action: () => scrollTo('services') },
    { id: 'contact', label: 'Contact', icon: Mail, action: () => scrollTo('contact') },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 300, damping: 25 }}
        className="glass-panel px-3 py-2 rounded-2xl border border-white/15 flex items-center gap-1.5 shadow-2xl backdrop-blur-xl bg-black/60"
      >
        {dockItems.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = hoveredIndex === idx;

          return (
            <div key={item.id} className="relative">
              {/* Tooltip */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.9 }}
                  animate={{ opacity: 1, y: -8, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/90 text-white border border-white/15 whitespace-nowrap shadow-lg pointer-events-none"
                >
                  {item.label}
                </motion.div>
              )}

              <motion.button
                onClick={item.action}
                onMouseEnter={() => {
                  playHover();
                  setHoveredIndex(idx);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.25, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            </div>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-6 bg-white/15 mx-1" />

        {/* Command Palette Trigger */}
        <div className="relative">
          {hoveredIndex === 99 && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 px-2.5 py-1 mb-2 rounded-md text-[11px] font-mono bg-black/90 text-white border border-white/15 whitespace-nowrap shadow-lg pointer-events-none">
              Command Palette (Ctrl+K)
            </div>
          )}
          <motion.button
            onClick={() => {
              playClick();
              openPalette();
            }}
            onMouseEnter={() => {
              playHover();
              setHoveredIndex(99);
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.25, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/15 transition-colors border border-neon-cyan/30"
            aria-label="Open Command Palette"
          >
            <Terminal className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Sound Synthesizer Toggle */}
        <div className="relative">
          {hoveredIndex === 100 && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 px-2.5 py-1 mb-2 rounded-md text-[11px] font-mono bg-black/90 text-white border border-white/15 whitespace-nowrap shadow-lg pointer-events-none">
              {isMuted ? 'Unmute Audio' : 'Mute Audio'}
            </div>
          )}
          <motion.button
            onClick={toggleMute}
            onMouseEnter={() => {
              playHover();
              setHoveredIndex(100);
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.25, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              !isMuted 
                ? 'text-neon-pink bg-neon-pink/15 border border-neon-pink/30' 
                : 'text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            aria-label="Toggle Sound"
          >
            {!isMuted ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
