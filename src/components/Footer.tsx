'use client';

import { Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container-page py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold mb-1">Profilo Autorevole</p>
            <p className="text-sm" style={{ color: 'var(--fg-subtle)' }}>Milano · Italia</p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col items-start md:items-end gap-3 text-sm" style={{ color: 'var(--fg-subtle)' }}>
            <a href="mailto:a.cattolico@profiloautorevole.com" className="hover:opacity-80 transition-opacity">
              a.cattolico@profiloautorevole.com
            </a>
            <a href="tel:+393442517856" className="hover:opacity-80 transition-opacity">
              +39 344 251 7856
            </a>
            <a
              href="https://linkedin.com/company/profilo-autorevole"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity mt-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.iubenda.com/privacy-policy/76483844" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                Privacy Policy
              </a>
              <a href="https://www.iubenda.com/privacy-policy/76483844/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-[13px]" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--fg-subtle)' }}>
          © {currentYear} Profilo Autorevole. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
