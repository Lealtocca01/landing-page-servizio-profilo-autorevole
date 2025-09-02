'use client';

import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';

export function NoContracts() {
  const handleCTAClick = () => {
    window.open('mailto:info@profiloautorevole.it?subject=Candidatura Profilo Autorevole&body=Ciao, sono interessato a candidarmi per il servizio Profilo Autorevole. Vorrei sapere come procedere.', '_blank');
  };

  return (
    <section className="pt-8 pb-12 md:pt-4 md:pb-8 lg:pt-2 lg:pb-8 bg-gradient-to-b from-slate-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Visual Element */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-xl mx-auto">
              {/* Main image */}
              <img 
                src="/images/ChatGPT Image Sep 1, 2025, 06_14_22 PM.png" 
                alt="Smartphone con analytics di performance e crescita business"
                className="w-full h-auto object-contain drop-shadow-2xl filter"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.2)) drop-shadow(0 0 45px rgba(255, 255, 255, 0.1))',
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main headline */}
            <div>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 leading-relaxed">
                Dovrai sottostare a Vincoli Contrattuali? No.
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Avrai la possibilità di{' '}
                <span className="text-gradient">rescindere</span> quando vuoi.
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Niente obblighi, niente vincoli o impegni.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Dov'è l'inghippo allora? Non tutti riusciranno ad accedere a{' '}
                <span className="text-blue-400">Profilo Autorevole</span>.
              </h4>
            </div>

            {/* Section 3 */}
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Accettiamo solo <span className="text-blue-400">10 attività</span> al mese.
              </h4>
              <p className="text-lg text-gray-400 mb-4">
                Il motivo? È molto semplice.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Vogliamo garantire la massima qualità a chi ci sceglie.
              Preferiamo seguire pochi clienti, ma farlo bene.
              </p>

            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-3 transition-all duration-300 shadow-[0_8px_25px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_35px_rgba(59,130,246,0.5)] hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCTAClick}
            >
              <Shield size={20} />
              <span>Candidati Adesso a Profilo Autorevole</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
