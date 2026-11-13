import React, { useState } from 'react';
import brandBg from '../assets/images/brand_showcase_bg.jpg';

const brands = [
  {
    id: 0,
    num: '01',
    code: 'Brand A',
    name: 'Kallada Artisan Brews',
    category: 'Brand Identity & Packaging',
    desc: 'Crafted visual narrative and tactile packaging system for small-batch single-origin roasters.',
  },
  {
    id: 1,
    num: '02',
    code: 'Brand B',
    name: 'Vyali Mobility',
    category: 'Digital Product & Interface',
    desc: 'Full-spectrum design system and mobile interface for next-gen electric fleet telematics.',
  },
  {
    id: 2,
    num: '03',
    code: 'Brand C',
    name: 'Ember Atelier',
    category: 'Spatial Design & Identity',
    desc: 'Exhibition identity, typography and spatial signage for an architectural craft studio.',
  },
  {
    id: 3,
    num: '04',
    code: 'Brand D',
    name: 'Malabar Pulse',
    category: 'Editorial & Campaign',
    desc: 'Editorial design, custom typographic marks, and publication for cultural retrospectives.',
  },
];

export default function BrandShowcase() {
  const [selectedBrand, setSelectedBrand] = useState(0);
  const cur = brands[selectedBrand];

  return (
    <section className="relative min-h-[90vh] bg-[#141414] text-[#FFF4E8] py-20 flex flex-col justify-between overflow-hidden border-b border-[#FFF4E8]/20">
      {/* Background with Dark Texture & Accent Glow */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url(${brandBg})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/90 via-[#141414]/75 to-[#141414] pointer-events-none" />

      {/* Main Content Area */}
      <div className="wrap relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Bar: Section Tag & Brand Index Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#FFF4E8]/20">
          <div className="flex items-center gap-3 font-mono text-xs text-[#827970]">
            <span className="font-bold text-[#E5372A]">03</span>
            <span className="uppercase tracking-wider">&lt;showcase&gt;</span>
          </div>

          {/* Interactive Index Pills */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
            {brands.map((b, i) => {
              const isActive = i === selectedBrand;
              return (
                <button
                  key={b.num}
                  type="button"
                  onClick={() => setSelectedBrand(i)}
                  className={`flex items-center gap-2 px-3 py-1.5 border rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'border-[#FDA83A] bg-[#2A2522] text-[#FFF4E8] translate-x-1'
                      : 'border-[#2A2522] text-[#827970] hover:text-[#FFF4E8] hover:border-[#FFF4E8]/40'
                  }`}
                >
                  <span className={isActive ? 'text-[#FDA83A] font-bold' : ''}>
                    {b.num}
                  </span>
                  <span>/{b.code}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Presentation Card */}
        <div className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end transition-opacity duration-300">
          {/* Left Column: Project Name & Description - Using LT Wave (var(--text)) as in Claude HTML */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FDA83A]">
              Featured Case Study · 0{selectedBrand + 1}
            </span>
            <h3
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#FFF4E8]"
              style={{ fontFamily: 'var(--text)' }}
            >
              {cur.name}
            </h3>
            <p
              className="max-w-2xl text-lg sm:text-xl text-[#C2B8AD] leading-relaxed"
              style={{ fontFamily: 'var(--text)' }}
            >
              {cur.desc}
            </p>
          </div>

          {/* Right Column: Category & Explore CTA */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-6">
            <div className="text-left lg:text-right font-mono text-sm text-[#C2B8AD]">
              <span className="block text-xs uppercase text-[#827970]">
                Project Scope
              </span>
              <span className="text-[#FFF4E8] font-mono">{cur.category}</span>
            </div>

            {/* Explore Button with kinetic fill hover effect */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 h-14 border border-[#E5372A] text-[#FFF4E8] font-mono text-sm tracking-wider uppercase overflow-hidden cursor-pointer transition-colors duration-300 rounded-full"
            >
              <span className="absolute inset-0 bg-[#E5372A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 font-medium">Explore Project</span>
              <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Framing Metadata */}
        <div className="pt-6 border-t border-[#FFF4E8]/20 flex justify-between items-center font-mono text-xs text-[#827970]">
          <span>Brand Showcase Interactive Portfolio</span>
          <span>Switch index to cycle cases</span>
        </div>
      </div>
    </section>
  );
}
