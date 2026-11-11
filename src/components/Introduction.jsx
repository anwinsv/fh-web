import React from 'react';

export default function Introduction() {
  return (
    <section id="about" className="intro light min-h-screen flex flex-col justify-between">
      <div className="wrap flex flex-col justify-between flex-1 min-h-screen py-6 md:py-8 w-full">
        {/* Top Header Tag & Hairline Divider */}
        <div className="lab border-b border-[#c9bfb4] pb-3 flex items-baseline justify-between w-full">
          <div className="flex items-center gap-3">
            <b className="text-[#E5372A] font-medium text-base">01</b>
            <span className="font-mono text-sm tracking-wider text-[#141414]">&lt;introduction&gt;</span>
          </div>
        </div>

        {/* Upper breathing space to offset placeholder, heading, and description downward */}
        <div className="flex-[1.8] min-h-[48px] max-h-[200px]" />

        {/* Middle Content Grid: 50% Placeholder Left / 50% Text Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
          {/* Left Column (50%): Clean Square Placeholder Box */}
          <div className="flex justify-center items-center w-full">
            <div
              className="ph select-none shadow-sm"
              aria-hidden="true"
              style={{
                width: 'min(290px, 80%)',
                aspectRatio: '1',
                background: '#c8d1d9',
                color: '#141414',
                display: 'grid',
                placeItems: 'center',
                fontFamily: 'var(--label)',
                fontSize: '16px',
                borderRadius: '0px',
              }}
            >
              placeholder
            </div>
          </div>

          {/* Right Column (50%): Single-line heading and 6-line description matching mockup */}
          <div className="flex flex-col w-full max-w-2xl">
            <h2
              className="font-bold text-[#F36F21]"
              style={{
                fontFamily: 'var(--text)',
                fontSize: 'clamp(26px, 2.6vw, 38px)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Not every spark needs a matchstick.
            </h2>

            {/* Description scaled up to match the mockup's 6 lines with rich medium weight */}
            <p
              className="mt-2.5 text-[#141414]"
              style={{
                fontFamily: 'var(--text)',
                fontWeight: 500,
                fontSize: 'clamp(21px, 2.1vw, 29px)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
              }}
            >
              Sometimes, all it needs is a good idea and<br className="hidden md:inline" />
              {' '}someone willing to run with it.<br className="hidden md:inline" />
              That's where we come in. We work with<br className="hidden md:inline" />
              {' '}people and businesses to give their ideas<br className="hidden md:inline" />
              {' '}a visual identity, a little personality and a<br className="hidden md:inline" />
              {' '}reason to be remembered.
            </p>
          </div>
        </div>

        {/* Lower breathing space leading down into the bottom divider line */}
        <div className="flex-1 min-h-[32px] max-h-[80px]" />

        {/* Bottom Section: 50% Studio Metadata Left / 50% Action Buttons Right */}
        <div className="bot border-t border-[#c9bfb4] pt-8 pb-4 md:pb-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-end w-full">
          {/* Metadata Block on Left (50%) */}
          <div className="meta flex flex-col gap-3">
            <div>
              <b className="block text-[#141414] text-[16px] leading-tight" style={{ fontFamily: 'var(--text)', fontWeight: 600 }}>
                Based in
              </b>
              <span className="block text-[#7A7067] text-[14px]" style={{ fontFamily: 'var(--label)' }}>
                Kerala, India
              </span>
            </div>
            <div>
              <b className="block text-[#141414] text-[16px] leading-tight" style={{ fontFamily: 'var(--text)', fontWeight: 600 }}>
                Powered by
              </b>
              <span className="block text-[#7A7067] text-[14px]" style={{ fontFamily: 'var(--label)' }}>
                Pixels, possibilities and<br className="hidden sm:inline" /> plenty of brainstorming.
              </span>
            </div>
          </div>

          {/* Action Buttons on Right (50%), aligned directly under the right text column */}
          <div className="row flex flex-wrap gap-4 items-center">
            <a
              href="#about"
              className="btn btn-o"
              style={{
                color: 'var(--canvas)',
                borderColor: 'var(--canvas)',
                fontFamily: 'var(--label)',
                height: '48px',
                padding: '0 24px',
                fontSize: '14.5px',
              }}
            >
              About Flame Head
            </a>
            <a
              href="#services"
              className="btn btn-o"
              style={{
                color: 'var(--canvas)',
                borderColor: 'var(--canvas)',
                fontFamily: 'var(--label)',
                height: '48px',
                padding: '0 24px',
                fontSize: '14.5px',
              }}
            >
              Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
