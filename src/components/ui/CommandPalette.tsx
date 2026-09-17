import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  CornerDownLeft, 
  Terminal, 
  FileDown, 
  Mail, 
  Phone, 
  Volume2, 
  VolumeX, 
  Compass, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import { useCommandPalette } from '../../context/CommandPaletteContext';
import { useAudio } from '../../context/AudioContext';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Navigation' | 'Actions' | 'Social';
  icon: React.ComponentType<{ className?: string }>;
  perform: () => void;
}

export const CommandPalette: React.FC = () => {
  const { isOpen, closePalette } = useCommandPalette();
  const { isMuted, toggleMute, playClick, playHover, playSuccess } = useAudio();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    closePalette();
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    playSuccess();
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const triggerResumeDownload = () => {
    closePalette();
    playSuccess();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const a = document.createElement('a');
    a.href = '/Adithya_Sri_Krishna_Resume.docx';
    a.download = 'Adithya_Sri_Krishna_Resume.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const commands: CommandItem[] = useMemo(() => [
    // Navigation
    {
      id: 'nav-hero',
      title: 'Back to Top / Hero',
      subtitle: 'Introduction and 3D space',
      category: 'Navigation',
      icon: Compass,
      perform: () => scrollTo('hero')
    },
    {
      id: 'nav-about',
      title: 'About Me',
      subtitle: 'Personal bio, stats & creative journey',
      category: 'Navigation',
      icon: Sparkles,
      perform: () => scrollTo('about')
    },
    {
      id: 'nav-skills',
      title: 'Skills & Tech Stack',
      subtitle: 'Frontend, Backend, Tools & Creative',
      category: 'Navigation',
      icon: Layers,
      perform: () => scrollTo('skills')
    },
    {
      id: 'nav-projects',
      title: 'Projects Showcase',
      subtitle: 'Featured web apps & video productions',
      category: 'Navigation',
      icon: Briefcase,
      perform: () => scrollTo('projects')
    },
    {
      id: 'nav-services',
      title: 'Services & Offerings',
      subtitle: 'Web dev, video editing, UI design',
      category: 'Navigation',
      icon: Terminal,
      perform: () => scrollTo('services')
    },
    {
      id: 'nav-experience',
      title: 'Work Experience',
      subtitle: 'Career timeline & achievements',
      category: 'Navigation',
      icon: Briefcase,
      perform: () => scrollTo('experience')
    },
    {
      id: 'nav-education',
      title: 'Education',
      subtitle: 'Academic background & certifications',
      category: 'Navigation',
      icon: GraduationCap,
      perform: () => scrollTo('education')
    },
    {
      id: 'nav-contact',
      title: 'Contact Form',
      subtitle: 'Send message & location details',
      category: 'Navigation',
      icon: Mail,
      perform: () => scrollTo('contact')
    },

    // Actions
    {
      id: 'act-resume',
      title: 'Download Resume',
      subtitle: 'Download CV with celebratory confetti',
      category: 'Actions',
      icon: FileDown,
      perform: triggerResumeDownload
    },
    {
      id: 'act-email',
      title: copiedKey === 'email' ? 'Email Copied!' : 'Copy Email Address',
      subtitle: PERSONAL_INFO.email,
      category: 'Actions',
      icon: copiedKey === 'email' ? Check : Mail,
      perform: () => copyToClipboard(PERSONAL_INFO.email, 'email')
    },
    {
      id: 'act-phone',
      title: copiedKey === 'phone' ? 'Phone Copied!' : 'Copy Phone Number',
      subtitle: PERSONAL_INFO.phone,
      category: 'Actions',
      icon: copiedKey === 'phone' ? Check : Phone,
      perform: () => copyToClipboard(PERSONAL_INFO.phone, 'phone')
    },
    {
      id: 'act-sound',
      title: isMuted ? 'Unmute Ambient Sound' : 'Mute Ambient Sound',
      subtitle: isMuted ? 'Turn on Web Audio synthesizer' : 'Silence soundscape and SFX',
      category: 'Actions',
      icon: isMuted ? Volume2 : VolumeX,
      perform: () => {
        toggleMute();
      }
    },

    // Social
    {
      id: 'soc-linkedin',
      title: 'Visit LinkedIn Profile',
      subtitle: 'Connect with Adithya on LinkedIn',
      category: 'Social',
      icon: FaLinkedin,
      perform: () => {
        closePalette();
        window.open(PERSONAL_INFO.linkedIn, '_blank');
      }
    },
    {
      id: 'soc-github',
      title: 'Visit GitHub Profile',
      subtitle: 'Explore open source code repositories',
      category: 'Social',
      icon: FaGithub,
      perform: () => {
        closePalette();
        window.open(PERSONAL_INFO.github, '_blank');
      }
    }
  ], [isMuted, copiedKey]);

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands;
    const lower = query.toLowerCase();
    return commands.filter(
      (cmd) =>
        cmd.title.toLowerCase().includes(lower) ||
        cmd.subtitle.toLowerCase().includes(lower) ||
        cmd.category.toLowerCase().includes(lower)
    );
  }, [commands, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredCommands]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      playHover();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      playHover();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].perform();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-28 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePalette}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl glass-panel rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-10"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
            <Search className="w-5 h-5 text-neon-cyan shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command or jump to section..."
              className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none font-sans"
            />
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-400 border border-white/10 shrink-0">
              ESC
            </span>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
            {filteredCommands.length === 0 ? (
              <div className="py-8 text-center text-sm text-slate-500 font-mono">
                No matching commands found.
              </div>
            ) : (
              filteredCommands.map((cmd, idx) => {
                const isSelected = idx === selectedIndex;
                const Icon = cmd.icon;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      playClick();
                      cmd.perform();
                    }}
                    onMouseEnter={() => {
                      playHover();
                      setSelectedIndex(idx);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-neon-cyan/15 text-white border border-neon-cyan/30'
                        : 'text-slate-300 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-neon-cyan text-black' : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium leading-none">{cmd.title}</div>
                        <div className="text-xs text-slate-400 mt-1">{cmd.subtitle}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 uppercase">
                        {cmd.category}
                      </span>
                      {isSelected && (
                        <CornerDownLeft className="w-3.5 h-3.5 text-neon-cyan" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer bar */}
          <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>↵ to select</span>
            </div>
            <span>Ctrl + K</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
