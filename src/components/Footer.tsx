'use client';

import { Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';

export function Footer() {
  const currentYear = new Date().getFullYear();



  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/profilo-autorevole", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:info@profiloautorevole.it", label: "Email" },
    { icon: <Phone size={20} />, href: "tel:+393442517856", label: "Telefono" }
  ];

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
    <footer className="border-t border-gray-800" style={{ background: '#060732' }}>
      <div className="container-custom py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Brand Section */}
          <div>
            <div className="mb-4 md:mb-6 text-center">
              <div className="flex items-center justify-center space-x-3 mb-3 md:mb-4">
                <span className="font-bold text-xl md:text-2xl text-white">
                  Profilo <span className="text-gradient">Autorevole</span>
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                Trasformiamo il tuo LinkedIn nel biglietto da visita che attrae clienti. 
                Oltre 500 professionisti hanno già scelto la nostra expertise per dominare LinkedIn.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                <div className="flex items-center justify-center space-x-3 text-gray-300 text-sm">
                  <Mail size={14} className="text-blue-400" />
                  <span>info@profiloautorevole.it</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300 text-sm">
                  <Phone size={14} className="text-green-400" />
                  <span>+39 344 251 7856</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300 text-sm">
                  <MapPin size={14} className="text-yellow-400" />
                  <span>Milano, Italia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 md:w-10 md:h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
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
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Profilo Autorevole. Tutti i diritti riservati.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => scrollToSection('#privacy')}
              >
                Privacy Policy
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => scrollToSection('#terms')}
              >
                Termini & Condizioni
              </button>
              <button 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                onClick={() => scrollToSection('#cookies')}
              >
                Cookie Policy
              </button>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
}