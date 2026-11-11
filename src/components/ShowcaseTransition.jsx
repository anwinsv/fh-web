import React from 'react';

export default function ShowcaseTransition() {
  return (
    <section
      id="showcase"
      className="show relative py-28 md:py-36 overflow-hidden border-b border-[#141414]/20 transition-all duration-300"
      style={{
        backgroundImage: 'linear-gradient(180deg, #FDA83A 0%, #F89A33 35%, #F36F21 70%, #FDA83A 100%)',
      }}
    >
      <div className="wrap text-[#141414] flex flex-col justify-between items-center text-center gap-12">
        <h2
          className="text-6xl sm:text-8xl lg:text-[100px] font-bold uppercase tracking-tight text-[#E5372A]"
          style={{ fontFamily: 'var(--title)' }}
        >
          Showcase
        </h2>

        <p
          className="max-w-2xl text-xl sm:text-3xl font-semibold tracking-[-0.02em] leading-snug"
          style={{ fontFamily: 'var(--text)' }}
        >
          A few ideas that made it out of the sketchbook and into the world through us.
        </p>

        {/* Animated Down indicator */}
        <div className="flex flex-col items-center gap-2 pt-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#141414]/80">
            Scroll to explore
          </span>
          <span className="text-2xl animate-bounce text-[#141414]">
            ▼
          </span>
        </div>
      </div>
    </section>
  );
}
