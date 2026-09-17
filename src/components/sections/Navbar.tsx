import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

import { useAudio } from '../../context/AudioContext';
import { LiveClock } from '../ui/LiveClock';
import { BrandLogo } from '../ui/BrandLogo';
import confetti from 'canvas-confetti';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { playHover, playClick, playSuccess } = useAudio();
  const navLinks = [
    { name: 'Home', target: '#hero' },
    { name: 'About', target: '#about' },
    { name: 'Skills', target: '#skills' },
    { name: 'Projects', target: '#projects' },
    { name: 'Team', target: '#team' },
    { name: 'Services', target: '#services' },
    { name: 'Experience', target: '#experience' },
    { name: 'Education', target: '#education' },
    { name: 'Testimonials', target: '#testimonials' },
    { name: 'Contact', target: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    playClick();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };


  const handleResumeDownload = () => {
    playSuccess();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.2 }
    });

    const a = document.createElement('a');
    a.href = '/Adithya_Sri_Krishna_Resume.docx';
    a.download = 'Adithya_Sri_Krishna_Resume.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${scrolled
            ? 'glass-panel border border-white/10 shadow-glass-glow bg-black/70 backdrop-blur-xl'
            : 'bg-transparent'
            }`}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            onMouseEnter={playHover}
            className="flex min-w-0 items-center gap-2 sm:gap-3 group"
          >
            <BrandLogo size={42} />
            <div className="flex min-w-0 flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-display font-black text-xs sm:text-base text-white group-hover:text-neon-cyan transition-colors tracking-tight truncate">
                  Adithya's
                </span>
                <span className="px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30 uppercase tracking-wider">
                  PRO
                </span>
              </div>
              <div className="text-[8px] sm:text-[10px] font-mono text-slate-400 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                <span>Creative Technologist</span>
              </div>
            </div>
          </a>


          {/* Right Action Icons & Badges */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            {/* Live Status Clock - Desktop */}
            <div className="hidden xl:block">
              <LiveClock />
            </div>



            {/* Quick Resume Download */}
            <button
              onClick={handleResumeDownload}
              onMouseEnter={playHover}
              className="flex items-center gap-1 px-2.5 sm:gap-1.5 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-neon-cyan to-blue-600 text-black font-semibold text-[10px] sm:text-xs hover:brightness-110 shadow-neon-cyan transition-all whitespace-nowrap"
            >
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Resume</span>
            </button>


          </div>
        </div>

        <nav className="mt-2 overflow-x-auto" aria-label="Primary navigation">
          <div className="flex min-w-max items-center justify-center gap-1 px-1 sm:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={link.target}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.target);
                }}
                onMouseEnter={playHover}
                className="rounded-lg px-2.5 py-1.5 text-[11px] sm:text-xs font-medium text-slate-400 hover:bg-white/10 hover:text-neon-cyan transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </div>


    </header>
  );
};
