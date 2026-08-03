'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function Navbar() {
  const { openPopup } = useContactPopup();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Come funziona', href: '#come-funziona' },
    { label: 'Pacchetti', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo-pa.png"
            alt="Profilo Autorevole"
            width={180}
            height={40}
            className={`h-10 w-auto transition-all duration-500 ${scrolled ? '' : 'brightness-0 invert'}`}
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] transition-colors duration-500 hover:opacity-70 ${
                scrolled ? 'text-neutral-600' : 'text-white/60'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => openPopup('consultation')}
            className={`text-[15px] font-bold rounded-full px-5 py-2.5 transition-all duration-500 ${
              scrolled ? 'bg-black text-white hover:bg-neutral-800' : 'bg-white text-black hover:bg-white/90'
            }`}
          >
            Contattaci
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${scrolled ? 'bg-white' : 'bg-black/95 backdrop-blur-md'}`}
          >
            <div className="container-page py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-[15px] py-2 ${scrolled ? 'text-neutral-600' : 'text-white/60'}`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { openPopup('consultation'); setMenuOpen(false); }}
                className={`w-full text-[15px] font-bold rounded-full px-5 py-3 mt-2 ${
                  scrolled ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                Contattaci
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
