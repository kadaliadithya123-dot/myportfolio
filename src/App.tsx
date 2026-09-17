import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { AudioProvider } from './context/AudioContext';
import { CommandPaletteProvider } from './context/CommandPaletteContext';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { BackToTop } from './components/ui/BackToTop';
import { FloatingDock } from './components/ui/FloatingDock';
import { CommandPalette } from './components/ui/CommandPalette';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-x-hidden">
      {/* Loading Sequence */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Global Interactive Elements */}
      <CustomCursor />
      <ScrollProgressBar />
      <CommandPalette />
      <FloatingDock />
      <BackToTop />

      {/* Main Layout */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export function App() {
  return (
    <AudioProvider>
      <CommandPaletteProvider>
        <AppContent />
      </CommandPaletteProvider>
    </AudioProvider>
  );
}

export default App;
