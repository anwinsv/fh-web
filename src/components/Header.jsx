import React from 'react';
import { useKochiClock } from '../hooks/useKochiClock';
import mascotSvg from '../assets/images/fh_mascot.svg';

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const kochiTime = useKochiClock();

  return (
    <header id="top">
      <div className="wrap">
        <a className="logo" href="#top">
          <img
            src={mascotSvg}
            alt="Flame Head Mascot"
            width="42"
            height="51"
            className="w-[42px] h-auto"
          />
          <span
            className="text-[24px] tracking-[-0.02em] text-[#FFF4E8] font-bold"
            style={{ fontFamily: '"LT Wave", sans-serif', fontWeight: 700 }}
          >
            FLAME HEAD
          </span>
        </a>

        <div className="hr">
          <div className="clock">
            {kochiTime}
            <br />
            Kochi
          </div>

          <a className="btn btn-p" href="#contact">
            Start a Project →
          </a>

          <button
            className={`burger ${isMenuOpen ? 'on' : ''}`}
            id="bg"
            aria-label="menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}
