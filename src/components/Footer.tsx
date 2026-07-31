'use client';

import { Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // ID Iubenda - ID specifico del tuo account
  const IUBENDA_SITE_ID = process.env.NEXT_PUBLIC_IUBENDA_SITE_ID || '76483844';

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/profilo-autorevole", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:a.cattolico@profiloautorevole.com", label: "Email" },
    { icon: <Phone size={20} />, href: "tel:+393442517856", label: "Telefono" }
  ];

  // Funzione per aprire i link Iubenda (solo per Termini & Condizioni)
  const handleIubendaLink = (type: 'terms') => {
    const baseUrl = 'https://www.iubenda.com';
    let url = '';
    
    switch (type) {
      case 'terms':
        url = `${baseUrl}/terms-and-conditions/${IUBENDA_SITE_ID}`;
        break;
    }
    
    window.open(url, '_blank');
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="border-t" style={{ background: '#ffffff', borderColor: '#e3e3e3' }}>
      <div className="container-custom py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Brand Section */}
          <div>
            <div className="mb-4 md:mb-6 text-center">
              <div className="flex items-center justify-center space-x-3 mb-3 md:mb-4">
                <span className="font-bold text-xl md:text-2xl text-neutral-900">
                  Profilo <span style={{ color: '#000000' }}>Autorevole</span>
                </span>
              </div>
              <p className="leading-relaxed mb-4 md:mb-6 text-sm md:text-base" style={{ color: '#555555' }}>
                Costruiamo la tua presenza su LinkedIn perché i tuoi potenziali clienti ti trovino, ti scelgano e ti contattino.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center justify-center space-x-3 text-sm" style={{ color: '#777777' }}>
                  <Mail size={14} style={{ color: '#555555' }} />
                  <span>a.cattolico@profiloautorevole.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-sm" style={{ color: '#777777' }}>
                  <Phone size={14} style={{ color: '#555555' }} />
                  <span>+39 344 251 7856</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-sm" style={{ color: '#777777' }}>
                  <MapPin size={14} style={{ color: '#555555' }} />
                  <span>Milano, Italia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: '#ffffff', color: '#777777' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = '#f5f5f5'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#777777'; e.currentTarget.style.background = '#ffffff'; }}
                    onClick={() => scrollToSection(social.href)}
                    aria-label={social.label}
                  >
                    <div className="scale-75 md:scale-100">{social.icon}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 md:mt-12 pt-6 md:pt-8" style={{ borderColor: '#e3e3e3' }}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm" style={{ color: '#777777' }}>
              © {currentYear} Profilo Autorevole. Tutti i diritti riservati.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              {/* Privacy Policy con link Iubenda ufficiale */}
              <a 
                href="https://www.iubenda.com/privacy-policy/76483844" 
                className="transition-colors duration-200" style={{ color: '#777777' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#777777'; }}
                title="Privacy Policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <button 
                className="transition-colors duration-200" style={{ color: '#777777' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#777777'; }}
                onClick={() => handleIubendaLink('terms')}
              >
                Termini & Condizioni
              </button>
              {/* Cookie Policy con link Iubenda ufficiale */}
              <a 
                href="https://www.iubenda.com/privacy-policy/76483844/cookie-policy" 
                className="transition-colors duration-200" style={{ color: '#777777' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#777777'; }}
                title="Cookie Policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookie Policy
              </a>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
}