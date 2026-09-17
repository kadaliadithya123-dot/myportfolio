import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink origin-left"
        style={{ scaleX }}
      />
      <motion.div
        className="absolute top-0 right-0 h-full w-20 bg-neon-cyan/50 blur-sm pointer-events-none"
        style={{ scaleX }}
      />
    </div>
  );
};
