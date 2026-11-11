import React, { useState } from 'react';
import mascotSvg from '../assets/images/fh_mascot.svg';
import flameGlowImg from '../assets/images/extracted_img_2.png';
import typoWhiteSvg from '../assets/images/typo_white.svg';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="touch relative bg-[#000000] text-[#FFF4E8] overflow-hidden border-t border-[#FFF4E8]/20"
      style={{
        background: '#000',
      }}
    >
      {/* Background drift glow */}
      <div
        className="absolute inset-[-30%] opacity-70 pointer-events-none"
        style={{
          background:
            'radial-gradient(40% 40% at 25% 70%, rgba(243, 111, 33, 0.32), transparent 70%), radial-gradient(35% 35% at 75% 30%, rgba(229, 55, 42, 0.28), transparent 70%), radial-gradient(30% 30% at 55% 85%, rgba(253, 168, 58, 0.16), transparent 70%)',
        }}
      />

      <div className="wrap relative z-10 pt-[90px] pb-9 grid gap-11 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
        {/* Top Header Statement */}
        <div className="hd lg:col-span-2">
          <h2
            className="disp text-5xl sm:text-7xl lg:text-[82px] uppercase leading-none"
            style={{ fontFamily: 'var(--title)' }}
          >
            Got a <em className="not-italic text-[#E5372A]">spark?</em>
          </h2>
          <p
            className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-[-0.04em] mt-2 text-[#FFF4E8]"
            style={{ fontFamily: 'var(--title)' }}
          >
            Let’s make it happen.
          </p>
        </div>

        {/* Left Column: Big Flame Mascot & Typo Wordmark */}
        <div className="big flex flex-col gap-4 self-end lg:-mt-5">
          <img
            src={flameGlowImg || mascotSvg}
            alt="Flame Head Glowing Mascot"
            className="w-[min(232px,50vw)] h-auto drop-shadow-[0_0_35px_rgba(229,55,42,0.6)]"
          />
          <img
            src={typoWhiteSvg}
            alt="Flame Head"
            className="w-[min(251px,60vw)] h-auto"
          />
        </div>

        {/* Right Column: CTA, Mail & Navigation */}
        <div className="r flex flex-col items-start lg:items-end text-left lg:text-right justify-end gap-7 lg:mt-24">
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-[#FFF4E8]"
            style={{ fontFamily: 'var(--text)' }}
          >
            Keep that creative spark alive
          </h3>

          {/* Start a project triggers inline inquiry form */}
          {!isFormOpen ? (
            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              className="btn btn-p"
            >
              Start a project
            </button>
          ) : (
            <div className="w-full max-w-md bg-[#1C1B1B] border border-[#2A2522] p-6 text-left">
              {submitted ? (
                <div className="py-6 text-center flex flex-col items-center gap-3">
                  <span className="text-[#E5372A] text-2xl font-bold">✓</span>
                  <h4 className="text-xl font-bold font-mono">Inquiry Received</h4>
                  <p className="text-xs text-[#C2B8AD] font-mono">
                    Thanks, {formData.name}. We'll connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-[#2A2522]">
                    <span className="uppercase text-[#FDA83A]">Project Inquiry</span>
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="text-[#827970] hover:text-[#FFF4E8]"
                    >
                      ✕ Close
                    </button>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-10 px-3 bg-[#141414] border border-[#2A2522] text-[#FFF4E8] focus:border-[#FDA83A] outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 bg-[#141414] border border-[#2A2522] text-[#FFF4E8] focus:border-[#FDA83A] outline-none"
                  />
                  <textarea
                    rows="2"
                    placeholder="Project Scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#141414] border border-[#2A2522] text-[#FFF4E8] focus:border-[#FDA83A] outline-none resize-none"
                  />
                  <button type="submit" className="btn btn-p h-11 text-xs">
                    Send Inquiry →
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Email link */}
          <a
            className="mail block font-normal tracking-[-0.03em] border-t border-[#FFF4E8]/20 pt-8 w-full hover:-translate-x-2 transition-transform duration-200"
            style={{
              fontFamily: 'var(--text)',
              fontSize: 'clamp(26px, 3.3vw, 44px)',
              lineHeight: 1.2,
            }}
            href="mailto:hello@flamehead.pro"
          >
            hello<em className="not-italic text-[#FDA83A]">@flamehead.pro</em>
          </a>

          {/* Footer Nav */}
          <nav
            className="flex flex-wrap gap-x-8 gap-y-3 justify-start lg:justify-end text-lg sm:text-xl tracking-[-0.03em] text-[#FFF4E8]"
            style={{ fontFamily: 'var(--text)' }}
          >
            <a href="#top" className="hover:text-[#FDA83A] transition-colors">
              Home
            </a>
            <a href="#showcase" className="hover:text-[#FDA83A] transition-colors">
              Showcase
            </a>
            <a href="#services" className="hover:text-[#FDA83A] transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-[#FDA83A] transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-[#FDA83A] transition-colors">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Bottom Legal / Back to Top Bar */}
        <div className="fl lg:col-span-2 flex flex-wrap justify-between items-center gap-4 pt-11 border-t border-[#FFF4E8]/20 font-mono text-sm text-[#827970] w-full">
          <div>Flame Head · Kerala, India</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#FDA83A] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#FDA83A] transition-colors">
              Cookies
            </a>
            <a
              href="#top"
              onClick={scrollToTop}
              className="text-[#E5372A] hover:text-[#F36F21] font-semibold transition-colors"
            >
              Back to the top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
