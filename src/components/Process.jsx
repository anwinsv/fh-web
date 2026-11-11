import React, { useState, useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    name: '/Discover',
    words: ['Listen', 'Understand', 'Define'],
    desc: "Every project begins somewhere. We start by understanding the idea, the people behind it and what you're hoping to achieve.",
    accent: '#FDA83A',
  },
  {
    num: '02',
    name: '/Explore',
    words: ['Imagine', 'Experiment', 'Explore'],
    desc: 'This is where curiosity takes over. We explore possibilities, play with directions and see which ideas have something worth pursuing.',
    accent: '#FDA83A',
  },
  {
    num: '03',
    name: '/Create',
    words: ['Draw', 'Design', 'Craft'],
    desc: 'Good ideas need good execution. We bring the chosen direction to life through thoughtful design, experimentation and attention to detail.',
    accent: '#E5372A',
  },
  {
    num: '04',
    name: '/Refine',
    words: ['Tweak', 'Polish', 'Deliver'],
    desc: 'The finishing touches make all the difference. We refine, polish and prepare the final work to make its way into the world.',
    accent: '#FDA83A',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  // Scroll listener to update activeStep and scrollProgress as the user scrolls through the 320vh container
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const totalScrollable = rect.height - window.innerHeight;
            if (totalScrollable > 0) {
              const scrolled = -rect.top;
              const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
              setScrollProgress(progress);
              const stepIndex = Math.min(3, Math.floor(progress * 4));
              setActiveStep(stepIndex);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Jump to specific phase on click
  const handleStepClick = (index) => {
    setActiveStep(index);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const containerTop = scrollTop + rect.top;
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (index / 3.8) * totalScrollable;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const cur = steps[activeStep];

  return (
    <section
      id="process"
      ref={containerRef}
      className="proc bg-[#141414] text-[#FFF4E8] relative"
      style={{ height: '320vh' }}
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 md:px-8 lg:px-14 py-6 md:py-8">
        {/* Main Content Grid: Left Column (Steps + 'spark to shape') / Right Column (Keywords + Placeholder) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 flex-1 items-center w-full max-w-7xl mx-auto my-auto">
          {/* Left Column (col-span-6): Interactive Steps list + Graphic Typography */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full max-h-[580px] py-2">
            {/* Steps List */}
            <div className="steps flex flex-col gap-2 max-w-xl w-full">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div key={step.num} className="transition-all duration-300">
                    {/* Step Title Header: LT Wave when active, LT Wave Mono when inactive */}
                    <button
                      type="button"
                      onClick={() => handleStepClick(idx)}
                      className="group flex items-baseline gap-2 text-left cursor-pointer focus:outline-none"
                      style={{
                        fontFamily: isActive ? 'var(--text)' : 'var(--label)',
                        fontSize: isActive ? 'clamp(16px, 1.45vw, 19px)' : 'clamp(14px, 1.25vw, 16px)',
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      <b
                        className={`transition-colors duration-300 ${
                          isActive
                            ? 'text-[#FDA83A]'
                            : 'text-[#7A7067] group-hover:text-[#FFF4E8]'
                        }`}
                        style={{
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        {step.num}
                      </b>
                      <span
                        className={`transition-colors duration-300 ${
                          isActive
                            ? 'text-white'
                            : 'text-[#7A7067] group-hover:text-[#FFF4E8]'
                        }`}
                      >
                        {step.name}
                      </span>
                    </button>

                    {/* Active Step Description */}
                    {isActive && (
                      <p
                        className="mt-1.5 mb-2 text-white font-medium max-w-xl transition-opacity duration-300"
                        style={{
                          fontFamily: 'var(--text)',
                          fontSize: 'clamp(16px, 1.5vw, 20px)',
                          lineHeight: 1.35,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {step.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Kinetic Graphic Typography: 'spark' / 'to' / 'shape' centered to phase description */}
            <div className="words select-none mt-auto pt-6 flex flex-col items-center max-w-xl w-full overflow-hidden">
              <span
                className="text-[#FDA83A] leading-none transition-transform duration-100 ease-out will-change-transform"
                style={{
                  fontFamily: 'var(--title)',
                  fontWeight: 700,
                  fontSize: 'clamp(48px, 5.8vw, 92px)',
                  letterSpacing: '-0.02em',
                  transform: `translateX(${-20 - scrollProgress * 45}px)`,
                }}
              >
                spark
              </span>
              <span
                className="text-[#FFF4E8] leading-none my-1"
                style={{
                  fontFamily: 'var(--title)',
                  fontWeight: 400,
                  fontSize: 'clamp(28px, 3.2vw, 50px)',
                }}
              >
                to
              </span>
              <span
                className="text-[#E5372A] leading-none transition-transform duration-100 ease-out will-change-transform"
                style={{
                  fontFamily: 'var(--title)',
                  fontWeight: 700,
                  fontSize: 'clamp(48px, 5.8vw, 92px)',
                  letterSpacing: '-0.02em',
                  transform: `translateX(${20 + scrollProgress * 45}px)`,
                }}
              >
                shape
              </span>
            </div>
          </div>

          {/* Right Column (col-span-6): Keywords strip + Placeholder Box */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center w-full">
            <div className="w-full max-w-[460px]">
              {/* Keywords Strip directly aligned above the box */}
              <div
                className="w-full flex justify-between items-center pb-2.5 text-[#FFF4E8] text-sm md:text-base font-mono tracking-wider transition-all duration-300"
                style={{ fontFamily: 'var(--label)' }}
              >
                <span>{cur.words[0]}</span>
                <span>{cur.words[1]}</span>
                <span>{cur.words[2]}</span>
              </div>

              {/* Square / Rectangular Placeholder Box with #c8d1d9 background */}
              <div
                className="w-full aspect-[4/3] bg-[#c8d1d9] text-[#141414] shadow-lg flex items-center justify-center select-none transition-all duration-500 relative overflow-hidden"
                style={{
                  borderRadius: '0px',
                  fontFamily: 'var(--label)',
                  fontSize: '16px',
                }}
              >
                {/* Subtle phase indicator in the corner */}
                <div
                  className="absolute top-3 left-3 text-xs text-[#141414]/60 font-mono"
                  style={{ fontFamily: 'var(--label)' }}
                >
                  {cur.num} {cur.name}
                </div>

                <span>placeholder</span>

                {/* Subtle phase progress line at bottom of placeholder */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#141414]/15">
                  <div
                    className="h-full bg-[#E5372A] transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline Divider & Bottom Right Section Identifier matching mockup */}
        <div className="border-t border-[#2A2522] pt-3.5 flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Left subtle indicator */}
          <span className="font-mono text-xs text-[#827970] tracking-wider">
            PHASE 0{activeStep + 1} / 04
          </span>

          {/* Right aligned Section Tag: 02 <the_process> */}
          <div className="flex items-center gap-3">
            <b className="text-[#E5372A] font-medium text-base">02</b>
            <span
              className="font-mono text-sm tracking-wider text-[#FFF4E8]"
              style={{ fontFamily: 'var(--label)' }}
            >
              &lt;the_process&gt;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
