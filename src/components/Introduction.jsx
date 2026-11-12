import React from 'react';
import ScrollFloat from './ScrollFloat';
import introSparkImg from '../assets/images/intro_spark.jpg';

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

        {/* Middle Content: Fills the space evenly between the top and bottom lines */}
        <div className="flex-1 flex items-center justify-center py-6 md:py-10 lg:py-14 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-8 items-center w-full">
            {/* Left Column: Landscape Image - Enlarged */}
            <div className="flex justify-center lg:justify-start w-full lg:w-auto flex-shrink-0">
              <div className="w-full sm:w-[500px] md:w-[560px] lg:w-[580px] xl:w-[640px] aspect-[3/2] overflow-hidden bg-black select-none shadow-xl">
                <img
                  src={introSparkImg}
                  alt="Igniting spark from lighter"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Extended typography area close to the image */}
            <div className="flex flex-col w-full text-left justify-center min-w-0">
              <ScrollFloat
                as="h2"
                effect="float"
                splitBy="chars"
                direction="up"
                order="start"
                fromColor="currentColor"
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.03}
                distance={120}
                stretch={2}
                smoothing={0}
                containerClassName="font-bold text-[#F36F21] w-full"
                style={{
                  fontFamily: 'var(--text)',
                  fontSize: 'clamp(26px, 2.7vw, 44px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                  color: '#F36F21',
                  textAlign: 'left',
                  display: 'block',
                  width: '100%',
                }}
              >
                Not every spark needs a matchstick.
              </ScrollFloat>

              <ScrollFloat
                as="p"
                effect="float"
                splitBy="words"
                direction="up"
                order="start"
                fromColor="currentColor"
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=45%"
                scrollEnd="bottom bottom-=35%"
                stagger={0.02}
                distance={80}
                stretch={1.6}
                smoothing={0}
                containerClassName="mt-4 md:mt-5 text-[#141414] w-full"
                style={{
                  fontFamily: 'var(--text)',
                  fontWeight: 500,
                  fontSize: 'clamp(19px, 1.95vw, 27px)',
                  lineHeight: 1.48,
                  letterSpacing: '-0.01em',
                  color: '#141414',
                  textAlign: 'left',
                  whiteSpace: 'pre-line',
                  display: 'block',
                  width: '100%',
                }}
              >
                {`Sometimes, all it needs is a good idea and\nsomeone willing to run with it.\nThat's where we come in. We work with\npeople and businesses to give their ideas\na visual identity, a little personality and a\nreason to be remembered.`}
              </ScrollFloat>
            </div>
          </div>
        </div>

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
