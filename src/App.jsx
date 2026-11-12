import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Process from './components/Process';
import ShowcaseTransition from './components/ShowcaseTransition';
import BrandShowcase from './components/BrandShowcase';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#141414] text-[#FFF4E8] selection:bg-[#E5372A] selection:text-[#FFF4E8]">
      {/* Navigation Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Fullscreen Mobile/Desktop Overlay Menu */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Sections */}
      <main id="top">
        <Hero />
        <Introduction />
        <Process />
        <ShowcaseTransition />
        <BrandShowcase />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

