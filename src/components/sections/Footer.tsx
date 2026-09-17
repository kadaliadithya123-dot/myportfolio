import React from 'react';
import { 
  Heart, 
  ArrowUp, 
  Mail, 
  Phone, 
  Radio, 
  Sparkles,
  MapPin 
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useAudio } from '../../context/AudioContext';
import { BrandLogo } from '../ui/BrandLogo';

export const Footer: React.FC = () => {
  const { playHover, playClick } = useAudio();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative pt-20 pb-28 sm:pb-20 border-t border-white/10 bg-[#050508] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-gradient-to-b from-neon-cyan/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier: Brand, Bio, Quick Links, Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <BrandLogo size={46} />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-lg text-white">
                    Adithya's
                  </h3>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30 uppercase">
                    PRO
                  </span>
                </div>
                <p className="text-xs font-mono text-neon-cyan">
                  Creative Technologist • Video &amp; Frontend
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {PERSONAL_INFO.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-neon-cyan" />
              <span>Bhimavaram, Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Quick Links Matrix */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
              <span>Sitemap &amp; Navigation</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    playClick();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={playHover}
                  className="text-slate-400 hover:text-neon-cyan transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Channels & Contact Hooks */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 text-neon-cyan animate-pulse" />
              <span>Channels</span>
            </h4>

            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                className="w-10 h-10 rounded-xl glass-button flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                className="w-10 h-10 rounded-xl glass-button flex items-center justify-center text-slate-300 hover:text-white hover:border-neon-cyan transition-colors"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onMouseEnter={playHover}
                className="w-10 h-10 rounded-xl glass-button flex items-center justify-center text-slate-300 hover:text-white hover:border-neon-purple transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                onMouseEnter={playHover}
                className="w-10 h-10 rounded-xl glass-button flex items-center justify-center text-slate-300 hover:text-white hover:border-emerald-400 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono text-slate-400">
              <span className="text-emerald-400 font-bold">● ONLINE</span> • Open for freelance projects and high-impact engineering roles.
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Adithya Sri Krishna. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-neon-pink fill-neon-pink inline mx-1 animate-pulse" />
            <span>in Bhimavaram, AP</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={playHover}
            className="flex items-center gap-1.5 text-slate-400 hover:text-neon-cyan transition-colors glass-card px-3 py-1.5 rounded-lg border border-white/10"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
