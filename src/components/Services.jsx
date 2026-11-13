import React, { useState, useEffect } from 'react';

const services = [
  {
    num: '01',
    titleMain: 'Brand',
    titleAccent: 'Identity',
    desc: 'Give your brand a face worth remembering.',
    details: 'Complete brand positioning, visual identity systems, guidelines, and corporate voice.',
  },
  {
    num: '02',
    titleMain: 'Logo',
    titleAccent: '& Marks',
    desc: 'A small shape that carries a big idea.',
    details: 'Iconography, logotypes, responsive mascot marks, and custom brand signatures.',
  },
  {
    num: '03',
    titleMain: 'Web',
    titleAccent: '& Interface',
    desc: 'Digital spaces that feel as good as they look.',
    details: 'Award-grade UI/UX design, interactive web experiences, and kinetic digital craft.',
  },
  {
    num: '04',
    titleMain: 'Print',
    titleAccent: '& Packaging',
    desc: 'Things people can hold, keep and talk about.',
    details: 'Tactile packaging, custom merchandise, editorial publications, and spatial collateral.',
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through services with snappier duration (3.2s) & pause on mouse hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const cur = services[activeIndex];

  return (
    <section
      id="services"
      className="serv light bg-[#FFF4E8] text-[#141414] py-20 md:py-28 border-b border-[#141414]/20 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="wrap">
        {/* Section Header */}
        <div className="lab pb-6 border-b border-[#c9bfb4] flex flex-wrap justify-between items-baseline gap-4 font-mono text-sm">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#E5372A]">04</span>
            <span className="uppercase tracking-wider text-[#141414]">&lt;services&gt;</span>
          </div>
          <span
            className="sub text-[#141414] font-semibold text-lg sm:text-2xl"
            style={{ fontFamily: 'var(--text)' }}
          >
            Different sparks. Different directions.
          </span>
        </div>

        {/* Interactive Service Presentation Stage */}
        <div className="sv py-16 md:py-24 min-h-[420px] flex flex-col justify-between">
          <div>
            {/* Active Service Number & Paused Status Indicator */}
            <div className="flex items-center gap-4">
              <span className="n font-mono text-xl font-bold text-[#E5372A]">
                {cur.num}
              </span>
              {isPaused && (
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A7067] bg-[#E0D3C5] px-2 py-0.5">
                  Paused on hover
                </span>
              )}
            </div>

            {/* Service Headline */}
            <h2
              className="text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[#141414] mt-4 leading-none"
              style={{ fontFamily: 'var(--title)' }}
            >
              {cur.titleMain}{' '}
              <em className="not-italic text-[#E5372A]">{cur.titleAccent}</em>
            </h2>

            {/* Tagline & Extended Details */}
            <p
              className="mt-6 text-2xl sm:text-3xl text-[#141414] font-semibold max-w-3xl leading-snug tracking-[-0.02em]"
              style={{ fontFamily: 'var(--text)' }}
            >
              {cur.desc}
            </p>
            <p
              className="mt-3 text-base sm:text-lg text-[#7A7067] max-w-2xl font-light"
              style={{ fontFamily: 'var(--text)' }}
            >
              {cur.details}
            </p>
          </div>

          {/* Interactive Navigation Pills for All 4 Services */}
          <div className="mt-12 flex flex-wrap gap-3">
            {services.map((s, idx) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 border rounded-full font-mono text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  idx === activeIndex
                    ? 'border-[#E5372A] bg-[#141414] text-[#FFF4E8]'
                    : 'border-[#c9bfb4] bg-transparent text-[#7A7067] hover:border-[#141414]'
                }`}
              >
                <span>{s.num}</span> {s.titleMain} {s.titleAccent}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Bar: Service Counter and CTA Button */}
        <div className="foot pt-8 border-t border-[#c9bfb4] flex flex-wrap justify-between items-center gap-6">
          <p className="font-mono text-sm text-[#7A7067] max-w-lg">
            Four services, one spark. Each stays for a moment before the next takes over.
          </p>
          <a
            href="#showcase"
            className="btn btn-o"
            style={{ color: 'var(--canvas)', borderColor: 'var(--canvas)' }}
          >
            View all our works →
          </a>
        </div>
      </div>
    </section>
  );
}
