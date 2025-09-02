'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Servizi",
      links: [
        { label: "Ottimizzazione Profilo", href: "#come-funziona" },
        { label: "Content Strategy", href: "#benefici" },
        { label: "Personal Branding", href: "#testimonianze" },
        { label: "LinkedIn Analytics", href: "#prezzi" }
      ]
    },
    {
      title: "Azienda",
      links: [
        { label: "Chi Siamo", href: "#" },
        { label: "Il Nostro Team", href: "#" },
        { label: "Casi Studio", href: "#testimonianze" },
        { label: "Blog & Risorse", href: "#" }
      ]
    },
    {
      title: "Supporto",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Contatti", href: "#contatti" },
        { label: "Garanzia", href: "#garanzia" },
        { label: "Termini di Servizio", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/profilo-autorevole", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:info@profiloautorevole.it", label: "Email" },
    { icon: <Phone size={20} />, href: "tel:+393901234567", label: "Telefono" }
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
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 border-t border-gray-800">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg tracking-tight">PA</span>
                </div>
                <span className="font-bold text-2xl text-white">
                  Profilo <span className="text-gradient">Autorevole</span>
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Trasformiamo il tuo LinkedIn nel biglietto da visita che attrae clienti. 
                Oltre 500 professionisti hanno già scelto la nostra expertise per dominare LinkedIn.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={16} className="text-blue-400" />
                  <span>info@profiloautorevole.it</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={16} className="text-green-400" />
                  <span>+39 390 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={16} className="text-yellow-400" />
                  <span>Milano, Italia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(social.href)}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1 group"
                      onClick={() => scrollToSection(link.href)}
                    >
                      <span>{link.label}</span>
                      {!link.href.startsWith('#') && (
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Profilo Autorevole. Tutti i diritti riservati. P.IVA 12345678901
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


        </motion.div>
      </div>
    </footer>
  );
}