import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import mascotSvg from '../assets/images/fh_mascot.svg';
import Aurora from './Aurora';
import GradientText from './GradientText';
import BlurText from './BlurText';

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
    <section
      className="hero relative overflow-hidden bg-[#141414]"
      style={{ backgroundColor: '#141414' }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Full-screen Aurora Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#141414]"
        style={{ backgroundColor: '#141414' }}
        aria-hidden="true"
      >
        <Aurora
          colorStops={["#d71426", "#f36f21", "#d71426"]}
          amplitude={0.55}
          blend={0.35}
          height={0.2}
          speed={1.15}
          glow={0.2}
          direction="bottom"
          scale={0.75}
          brightness={0.6}
        />
      </div>

      <div className="wrap relative z-10">
        {/* Main Hero Grid: 60% Title Section / 40% Placeholder & Content Section */}
        <div className="hero-grid">
          {/* Left Column (60%): 2-line title scaled up & tagline strictly right-aligned */}
          <div className="copy">
            <h1 className="disp">
              <BlurText
                text="one spark away"
                effect="blur"
                animateBy="words"
                direction="top"
                delay={100}
                stepDuration={0.35}
                className="justify-end whitespace-nowrap"
                as="span"
              />
              <BlurText
                text="from extraordinary"
                effect="blur"
                animateBy="words"
                direction="top"
                delay={120}
                initialDelay={320}
                stepDuration={0.35}
                className="justify-end whitespace-nowrap items-baseline"
                as="span"
                renderWord={(wordIndex, content, wordText) => {
                  if (wordText === 'extraordinary') {
                    return (
                      <em className="not-italic inline-block">
                        <GradientText
                          colors={["#d71426", "#fb8323", "#005e88", "#d71426", "#f36f21"]}
                          animationSpeed={4}
                          variant="flow"
                          glow={0.25}
                          pauseOnHover
                        >
                          extraordinary
                        </GradientText>
                      </em>
                    );
                  }
                  return content;
                }}
              />
            </h1>
            <motion.div
              className="tag"
              initial={{ opacity: 0, filter: 'blur(8px)', y: -20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.65, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
              <BlurText
                text="Giving ideas a look, a voice and a life of their own."
                effect="blur"
                animateBy="words"
                direction="top"
                delay={35}
                initialDelay={550}
                stepDuration={0.3}
                className="justify-end"
                as="span"
              />
            </motion.div>
          </div>

          {/* Right Column (40%): Visual Card + Studio lead & CTA buttons aligned together */}
          <div className="flex flex-col justify-center items-start gap-5 max-w-md w-full">
            {/* Visual Card with rounded corners & Flame mascot */}
            <motion.div
              initial={{ filter: 'blur(12px)', opacity: 0, y: -40 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
              className="w-full flex justify-start"
            >
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
                <BlurText
                  text="FLAME HEAD"
                  effect="blur"
                  animateBy="letters"
                  direction="top"
                  delay={30}
                  initialDelay={450}
                  stepDuration={0.25}
                  className="mt-2 text-base sm:text-lg font-bold tracking-tight text-[#141414] select-none justify-center"
                  style={{ fontFamily: '"LT Wave", sans-serif', fontWeight: 700 }}
                  as="span"
                />
              </div>
            </motion.div>

            {/* Studio Lead Description & Actions - strictly aligned with each other */}
            <div className="side text-left w-full">
              <BlurText
                text="Flame Head is a design studio from Kerala, India. We are your design solution for brands, ideas and everything in between."
                effect="blur"
                animateBy="words"
                direction="top"
                delay={25}
                initialDelay={400}
                stepDuration={0.3}
                className="lead text-[#C2B8AD]"
                as="p"
              />
              <motion.div
                className="cta flex flex-wrap gap-3.5 mt-4 justify-start"
                initial={{ filter: 'blur(10px)', opacity: 0, y: -25 }}
                animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.65, ease: [0.33, 1, 0.68, 1] }}
              >
                <a className="btn btn-p" href="#showcase">
                  <BlurText
                    text="View our works"
                    effect="blur"
                    direction="top"
                    delay={35}
                    initialDelay={700}
                    as="span"
                  />
                </a>
                <a className="btn btn-o" href="#contact">
                  <BlurText
                    text="Kickstart your idea"
                    effect="blur"
                    direction="top"
                    delay={35}
                    initialDelay={770}
                    as="span"
                  />
                </a>
              </motion.div>
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
