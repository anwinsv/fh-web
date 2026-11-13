import React, { useState, useEffect, useRef } from 'react';
import { useKochiClock } from '../hooks/useKochiClock';
import mascotSvg from '../assets/images/fh_mascot.svg';

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const kochiTime = useKochiClock();

  // barState: 'expanded' | 'hiding' | 'hidden' | 'circle'
  const [barState, setBarState] = useState('expanded');
  const prevScrollY = useRef(0);
  const expandTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - prevScrollY.current;

      // Always show expanded when near top of the page
      if (currentScrollY <= 40) {
        if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        setBarState('expanded');
        prevScrollY.current = currentScrollY;
        return;
      }

      // Scrolling down -> disappears (slides up out of view)
      if (diff > 8 && currentScrollY > 80) {
        if (!isMenuOpen) {
          if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
          setBarState((prev) => {
            if (prev === 'expanded') {
              if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
              hideTimerRef.current = setTimeout(() => {
                setBarState('hidden');
              }, 360);
              return 'hiding';
            }
            if (prev === 'circle') {
              return 'hidden';
            }
            return prev;
          });
        }
      }
      // Scrolling up -> circle drops from left corner, then seamlessly expands to pill
      else if (diff < -8) {
        setBarState((prev) => {
          if (prev === 'hidden' || prev === 'hiding') {
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
            if (expandTimerRef.current) clearTimeout(expandTimerRef.current);

            // Seamless fluid handoff: expand starts right as circle touches down
            expandTimerRef.current = setTimeout(() => {
              setBarState('expanded');
            }, 260);

            return 'circle';
          }
          return prev;
        });
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [isMenuOpen]);

  const isCircle = barState === 'circle' || barState === 'hidden';
  const isOffScreen = barState === 'hidden' || barState === 'hiding';
  const isDropping = barState === 'circle';
  const isHiding = barState === 'hiding';
  const isExpanded = barState === 'expanded';

  return (
    <header
      id="top"
      className="fixed top-3.5 sm:top-4 z-50 pointer-events-none"
      style={{
        left: 'max(var(--px), calc((100vw - 1440px) / 2))',
        width: isCircle ? '54px' : 'min(calc(100vw - (var(--px) * 2)), 1380px)',
        maxWidth: isCircle ? '54px' : '1380px',
        transition: isExpanded
          ? 'width 0.48s cubic-bezier(0.16, 1, 0.3, 1), max-width 0.48s cubic-bezier(0.16, 1, 0.3, 1)'
          : 'none',
      }}
    >
      <div
        className="pill-bar pointer-events-auto select-none flex items-center justify-between overflow-hidden shadow-2xl"
        style={{
          height: '54px',
          width: '100%',
          transform: isOffScreen ? 'translateY(-90px)' : 'translateY(0)',
          opacity: isOffScreen ? 0 : 1,
          transition: isDropping
            ? 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease'
            : isHiding
              ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease'
              : isExpanded
                ? 'padding 0.35s ease, transform 0.25s ease, opacity 0.2s ease'
                : 'none',
          padding: isCircle ? '0' : '0 12px 0 6px',
        }}
      >
        {/* Logo Group (Mascot Icon + Brand Text) */}
        <a
          className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 focus:outline-none"
          href="#top"
          aria-label="Flame Head Home"
        >
          {/* Mascot in circle container */}
          <div className="w-[52px] h-[52px] flex items-center justify-center flex-shrink-0">
            <img
              src={mascotSvg}
              alt="Flame Head Mascot"
              width="32"
              height="39"
              className="w-[28px] sm:w-[32px] h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Brand text: unfolds as pill expands */}
          <span
            className={`font-bold tracking-tight text-[#FFF4E8] text-base sm:text-[19px] whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isExpanded
                ? 'opacity-100 max-w-[200px] ml-1'
                : 'opacity-0 max-w-0 pointer-events-none ml-0'
            }`}
            style={{ fontFamily: '"LT Wave", sans-serif', fontWeight: 700 }}
          >
            FLAME HEAD
          </span>
        </a>

        {/* Right Controls: Clock, CTA button, Burger menu */}
        <div
          className={`hr flex items-center gap-3 sm:gap-4 flex-shrink-0 transition-all duration-300 ${
            isExpanded
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-6 pointer-events-none'
          }`}
        >
          {/* Kochi Clock */}
          <div
            className="clock text-right text-[12px] sm:text-[13px] leading-tight text-[#C2B8AD] hidden md:block"
            style={{ fontFamily: 'var(--label)' }}
          >
            {kochiTime}
            <br />
            <span className="text-[#827970] text-[11px]">Kochi</span>
          </div>

          {/* Start a Project Button */}
          <a
            className="btn btn-p rounded-full !h-[38px] !px-4 sm:!px-5 text-xs sm:text-[13.5px] font-medium tracking-wide shadow-md hover:scale-[1.02] transition-transform hidden sm:inline-flex"
            href="#contact"
          >
            Start a Project →
          </a>

          {/* Hamburger Button with visible icon */}
          <button
            className={`burger ${isMenuOpen ? 'on' : ''} !w-[38px] !h-[38px] flex flex-col items-center justify-center gap-[5px] focus:outline-none`}
            id="bg"
            aria-label="menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`block h-[2px] w-[18px] sm:w-[20px] bg-[#FFF4E8] rounded-full transition-all duration-300 origin-center ${
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-[18px] sm:w-[20px] bg-[#FFF4E8] rounded-full transition-all duration-200 ${
                isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[2px] w-[18px] sm:w-[20px] bg-[#FFF4E8] rounded-full transition-all duration-300 origin-center ${
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
