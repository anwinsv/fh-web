import React, { useEffect } from 'react';

export default function MenuOverlay({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { name: '01 / First Look', href: '#top' },
    { name: '02 / Introduction', href: '#about' },
    { name: '03 / The Process', href: '#process' },
    { name: '04 / Showcase', href: '#showcase' },
    { name: '05 / Services', href: '#services' },
    { name: '06 / Contact Us', href: '#contact' },
  ];

  return (
    <div className="fixed inset-0 z-40 bg-[#141414]/98 backdrop-blur-xl flex flex-col justify-center px-8 md:px-20 py-24 transition-opacity duration-300">
      <div className="site-wrap max-w-5xl w-full mx-auto flex flex-col gap-6">
        <span className="font-mono text-sm uppercase tracking-widest text-[#FDA83A] mb-4">
          Navigation Index
        </span>
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F36F21] hover:text-[#FDA83A] hover:translate-x-3 transition-all duration-200"
              style={{ fontFamily: '"LT Wave UI", sans-serif' }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-12 pt-8 border-t border-[#FFF4E8]/20 flex flex-wrap justify-between items-center gap-4 text-[#C2B8AD] font-mono text-sm">
          <span>hello@flamehead.pro</span>
          <span>Kerala, India — Global reach</span>
        </div>
      </div>
    </div>
  );
}

