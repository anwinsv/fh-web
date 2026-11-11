import React, { useState, useEffect } from 'react';

const steps = [
  {
    num: '01',
    name: '/Discover',
    desc: "Every project begins somewhere. We start by understanding the idea, the people behind it and what you're hoping to achieve.",
    words: ['Listen', 'Understand', 'Define'],
    accent: '#FDA83A',
  },
  {
    num: '02',
    name: '/Explore',
    desc: 'This is where curiosity takes over. We explore possibilities, play with directions and see which ideas have something worth pursuing.',
    words: ['Imagine', 'Experiment', 'Explore'],
    accent: '#F36F21',
  },
  {
    num: '03',
    name: '/Create',
    desc: 'Good ideas need good execution. We bring the chosen direction to life through thoughtful design, experimentation and attention to detail.',
    words: ['Draw', 'Design', 'Craft'],
    accent: '#E5372A',
  },
  {
    num: '04',
    name: '/Refine',
    desc: 'The finishing touches make all the difference. We refine, polish and prepare the final work to make its way into the world.',
    words: ['Tweak', 'Polish', 'Deliver'],
    accent: '#FDA83A',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto transition preview or click to select
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const cur = steps[activeStep];

  return (
    <section id="process" className="proc bg-[#141414] text-[#FFF4E8] py-20 md:py-28 border-b border-[#FFF4E8]/20">
      <div className="wrap">
        {/* Section Header */}
        <div className="lab pb-8 border-b border-[#FFF4E8]/20 flex items-baseline justify-between font-mono text-xs text-[#827970]">
          <div className="flex items-center gap-3">
            <b>02</b>
            <span className="uppercase tracking-wider text-[#FFF4E8]">&lt;the_process&gt;</span>
          </div>
          <span>Methodology</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Step Navigation & Description */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="steps flex flex-col gap-4">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    type="button"
                    className={`text-left p-4 border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-[#E5372A] bg-[#201F1F] translate-x-2'
                        : 'border-[#2A2522] bg-[#141414] hover:border-[#FFF4E8]/40'
                    }`}
                  >
                    <div className="stepn flex items-center justify-between font-mono text-base">
                      <div className="flex items-center gap-3">
                        <b className={isActive ? 'text-[#E5372A]' : 'text-[#827970]'}>
                          {step.num}
                        </b>
                        <span className={isActive ? 'text-[#FFF4E8]' : 'text-[#827970]'}>
                          {step.name}
                        </span>
                      </div>
                      <span className="text-xs text-[#827970]">Phase 0{idx + 1}</span>
                    </div>

                    {isActive && (
                      <p
                        className="mt-3 text-base sm:text-lg text-[#C2B8AD] leading-relaxed"
                        style={{ fontFamily: 'var(--text)' }}
                      >
                        {step.desc}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Large Typography Signifier matching Claude HTML */}
            <div className="words mt-8">
              <span style={{ fontFamily: 'var(--title)', fontWeight: 600 }}>SPARK</span>
              <span
                style={{
                  fontFamily: 'var(--text)',
                  fontWeight: 400,
                  paddingLeft: '6vw',
                  color: 'var(--body)',
                }}
              >
                to
              </span>
              <span style={{ fontFamily: 'var(--title)', fontWeight: 600, color: 'var(--primary)' }}>
                SHAPE
              </span>
            </div>
          </div>

          {/* Right Column: Visual Frame Swapping According to Step */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Sub-keywords strip for current step */}
            <div className="flex justify-between items-center py-3 px-6 bg-[#201F1F] border border-[#2A2522] font-mono text-sm">
              {cur.words.map((w, i) => (
                <span key={w} className="flex items-center gap-2">
                  <b className="text-[#E5372A]">0{i + 1}</b>
                  <span className="text-[#FFF4E8] uppercase tracking-wider">{w}</span>
                </span>
              ))}
            </div>

            {/* Media Frame Container */}
            <div className="relative w-full aspect-[4/3] bg-[#1C1B1B] border border-[#2A2522] overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 group">
              <div
                className="absolute inset-0 opacity-20 transition-all duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${cur.accent} 0%, rgba(20,20,20,0) 70%)`,
                }}
              />

              <div className="relative z-10 text-center flex flex-col items-center gap-4 transition-all duration-300">
                <div
                  className="w-20 h-20 border-2 flex items-center justify-center font-mono text-2xl font-bold transition-colors duration-300"
                  style={{ borderColor: cur.accent, color: cur.accent }}
                >
                  {cur.num}
                </div>
                <div>
                  <h3
                    className="text-xl uppercase tracking-widest text-[#FFF4E8] font-mono"
                  >
                    {cur.name.replace('/', '')} Phase
                  </h3>
                  <p className="font-mono text-xs text-[#827970] mt-1">
                    placeholder frame · media swaps with phase
                  </p>
                </div>
              </div>

              {/* Progress Bar Indicator at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2A2522]">
                <div
                  className="h-full bg-[#E5372A] transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
