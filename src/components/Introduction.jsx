import React from 'react';
import mascotSvg from '../assets/images/fh_mascot.svg';

export default function Introduction() {
  return (
    <section id="about" className="intro light min-h-screen">
      <div className="wrap">
        {/* Section Header Tag - Top border divider */}
        <div className="lab">
          <b>01</b>
          <span>&lt;introduction&gt;</span>
        </div>

        {/* 2-Column Content Grid: Vertically Centered */}
        <div className="grid">
          {/* Left Column: Kinetic Abstract Fiery Visual (Option B/C) */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px] aspect-square bg-[#EFE1D3] border border-[#E0D3C5] overflow-hidden flex items-center justify-center p-8 group shadow-sm">
              {/* Concentric kinetic rings rotating */}
              <div className="absolute inset-4 rounded-full border border-[#E5372A]/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-dashed border-[#F36F21]/30 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-20 rounded-full border border-[#FDA83A]/40 animate-[spin_15s_linear_infinite]" />

              {/* Flame Symbol in center */}
              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={mascotSvg}
                  alt="Flame Kinetic Graphic"
                  className="w-24 sm:w-28 h-auto drop-shadow-[0_4px_16px_rgba(229,55,42,0.25)] transition-transform duration-300 group-hover:scale-110"
                />
                <span className="mt-4 font-mono text-xs uppercase tracking-widest text-[#E5372A] font-semibold">
                  Creative Combustion
                </span>
              </div>

              {/* Corner markers */}
              <span className="absolute top-2 left-2 font-mono text-[10px] text-[#7A7067]">01//SPARK</span>
              <span className="absolute bottom-2 right-2 font-mono text-[10px] text-[#7A7067]">FH//CORE</span>
            </div>
          </div>

          {/* Right Column: Statement & Copy - strictly using LT Wave (var(--text)) as in Claude HTML */}
          <div className="flex flex-col gap-5 max-w-2xl">
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F36F21]"
              style={{ fontFamily: 'var(--text)' }}
            >
              Not every spark needs a matchstick.
            </h2>

            <div
              className="flex flex-col gap-4 text-lg sm:text-xl lg:text-[23px] text-[#141414] leading-[1.45] font-normal"
              style={{ fontFamily: 'var(--text)' }}
            >
              <p>
                Sometimes, all it needs is a good idea and someone willing to run with it.
              </p>
              <p className="text-base sm:text-lg text-[#555] font-light leading-relaxed">
                That's where we come in. We work with people and businesses to give their ideas a visual identity, a little personality and a reason to be remembered.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Studio Metadata & Action Links */}
        <div className="bot">
          <div className="meta">
            <div>
              <b>Based in</b>
              <span>Kerala, India</span>
            </div>
            <div>
              <b>Powered by</b>
              <span>Pixels, possibilities and plenty of brainstorming.</span>
            </div>
          </div>

          <div className="row">
            <a
              href="#about"
              className="btn btn-o"
              style={{ color: 'var(--canvas)', borderColor: 'var(--canvas)' }}
            >
              About Flame Head
            </a>
            <a
              href="#services"
              className="btn btn-o"
              style={{ color: 'var(--canvas)', borderColor: 'var(--canvas)' }}
            >
              Services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
