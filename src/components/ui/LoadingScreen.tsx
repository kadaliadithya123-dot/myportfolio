import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "SYSTEM_BOOT_INITIALIZED",
  "LOADING_THREE_JS_ENGINE",
  "COMPILING_GLSL_SHADERS",
  "INITIALIZING_REACT_19_CORE",
  "ESTABLISHING_AUDIO_SYNTHESIZER",
  "PORTFOLIO_READY // ADITHYA_SRI_KRISHNA"
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        // Accelerate near the end
        const increment = prev > 70 ? 4 : prev > 40 ? 3 : 2;
        return Math.min(100, prev + increment);
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const index = Math.min(
      BOOT_LOGS.length - 1,
      Math.floor((progress / 100) * BOOT_LOGS.length)
    );
    setLogIndex(index);
  }, [progress]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Cyber ambient background */}
          <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full bg-neon-cyan/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 w-full max-w-md flex flex-col items-center">
            {/* Professional Brand Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <BrandLogo size={76} withGlow={true} />
            </motion.div>

            {/* Title & Tagline */}
            <h1 className="font-display font-bold text-xl text-white tracking-wide mb-1 flex items-center gap-2">
              <span>Adithya Sri Krishna</span>
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
            </h1>
            <p className="text-xs font-mono text-slate-400 mb-8 uppercase tracking-widest">
              Video Editor • Full Stack Developer
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-white/5 border border-white/10 rounded-full h-2 overflow-hidden mb-4 p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px]" />
              </motion.div>
            </div>

            {/* Counter and Terminal Status */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-neon-cyan">
                <Terminal className="w-3.5 h-3.5 animate-pulse" />
                <span className="truncate max-w-[260px]">{BOOT_LOGS[logIndex]}</span>
              </div>
              <span className="text-white font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
