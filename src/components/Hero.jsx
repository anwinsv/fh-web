import React, { useRef, useState } from 'react';
import mascotSvg from '../assets/images/fh_mascot.svg';

export default function Hero() {
  const tiltRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  // Mouse 3D perspective tilt matching Claude prototype
  const handlePointerMove = (e) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / window.innerWidth;
    const y = (e.clientY - rect.top - rect.height / 2) / window.innerHeight;
    setTiltStyle({
      transform: `perspective(700px) rotateY(${x * 24}deg) rotateX(${-y * 24}deg)`,
    });
  };

  const handlePointerLeave = () => {
    setTiltStyle({
      transform: 'perspective(700px) rotateY(0deg) rotateX(0deg)',
    });
  };

  return (
    <section className="hero" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <div className="wrap">
        {/* Main Hero Grid: 60% Title Section / 40% Placeholder & Content Section */}
        <div className="hero-grid">
          {/* Left Column (60%): 2-line title scaled up & tagline strictly right-aligned */}
          <div className="copy">
            <h1 className="disp">
              <span>one spark away</span>
              <span>
                from <em>extraordinary</em>
              </span>
            </h1>
            <div className="tag">
              Giving ideas a look, a voice and a life of their own.
            </div>
          </div>

          {/* Right Column (40%): Visual Card + Studio lead & CTA buttons aligned together */}
          <div className="flex flex-col justify-center items-start gap-5 max-w-md w-full">
            {/* Visual Card with rounded corners & Flame mascot */}
            <div
              ref={tiltRef}
              className="ph"
              id="tilt"
              aria-hidden="true"
              style={{
                ...tiltStyle,
                background: '#FFFFFF',
                borderRadius: '28px',
                aspectRatio: '1.25 / 1',
                padding: '20px 24px',
                width: 'min(270px, 85%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 16px 36px rgba(0,0,0,0.45)',
                cursor: 'pointer',
              }}
            >
              <img
                src={mascotSvg}
                alt="Flame Head Mascot"
                className="w-24 sm:w-28 h-auto drop-shadow-md select-none transition-transform duration-200 hover:scale-105"
              />
              <span
                className="mt-2 text-base sm:text-lg font-bold tracking-tight text-[#141414] select-none"
                style={{ fontFamily: '"LT Wave", sans-serif', fontWeight: 700 }}
              >
                FLAME HEAD
              </span>
            </div>

            {/* Studio Lead Description & Actions - strictly aligned with each other */}
            <div className="side text-left w-full">
              <p className="lead text-[#C2B8AD]">
                Flame Head is a design studio from Kerala, India. We are your design solution for brands, ideas and everything in between.
              </p>
              <div className="cta flex flex-wrap gap-3.5 mt-4 justify-start">
                <a className="btn btn-p" href="#showcase">
                  View our works
                </a>
                <a className="btn btn-o" href="#contact">
                  Kickstart your idea
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Identifier Tag - offset upwards so it is 100% visible above the fold */}
        <div className="lab">
          <div className="flex items-center gap-2">
            <b>00</b>
            <span>&lt;first_look&gt;</span>
          </div>
          <span className="text-xs text-[#827970] font-mono hidden sm:inline">
            Kerala, IN — 09°58'N 76°17'E
          </span>
        </div>
      </div>
    </section>
  );
}
