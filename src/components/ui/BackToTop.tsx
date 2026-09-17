import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const { playClick, playHover } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollPercent(percent);
      setVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          onMouseEnter={playHover}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/15 text-white hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-neon-cyan transition-colors"
        >
          {/* Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="2.5"
              strokeDasharray={2 * Math.PI * 19}
              strokeDashoffset={2 * Math.PI * 19 * (1 - scrollPercent / 100)}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>
          <ChevronUp className="w-5 h-5 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
