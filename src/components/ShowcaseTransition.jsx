import React from 'react';
import TechText from './TechText';

export default function ShowcaseTransition() {
  return (
    <section
      id="showcase-cover"
      className="relative min-h-[80vh] md:h-[80vh] w-full flex flex-col justify-between overflow-hidden bg-[#FDA83A] text-[#141414] px-[var(--px)] pt-8 md:pt-10 pb-2"
    >
      {/* Background layer ready for interactive background element */}
      <div
        id="showcase-interactive-bg"
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Top Area: Right-aligned 2-line statement matching mockup */}
      <div className="relative z-10 w-full flex justify-end pt-1 md:pt-2">
        <p
          className="text-right text-[#141414] font-normal leading-[1.35] max-w-2xl"
          style={{
            fontFamily: 'var(--text)',
            fontSize: 'clamp(18px, 1.8vw, 26px)',
            letterSpacing: '-0.01em',
          }}
        >
          <span className="block">A few ideas that made it out of the</span>
          <span className="block">sketchbook and into the world through us</span>
        </p>
      </div>

      {/* Bottom Area: Large Interactive TechText Showcase title with full canvas headroom */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-end -mx-[var(--px)] mt-2">
        <div className="w-full h-[320px] md:h-[380px] lg:h-[440px] relative">
          <TechText
            text="Showcase"
            fontFamily="LT Wave UI"
            fontWeight={700}
            fontSize={150}
            letterSpacing={-0.03}
            align="left"
            verticalAlign="bottom"
            paddingBottom={24}
            margin="gutter"
            color="#e5372a"
            accentColor="#141414"
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="metrics"
            introDuration={1.8}
            clickKick
            draggable
            guides={false}
            sweep
          />
        </div>
      </div>
    </section>
  );
}
