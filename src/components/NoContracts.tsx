'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, ArrowRight } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';
import GradientButton from '@/components/ui/GradientButton';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function NoContracts() {
  const { openPopup } = useContactPopup();

  return (
    <section className="pt-8 pb-12 md:pt-4 md:pb-8 lg:pt-2 lg:pb-8 relative overflow-hidden" style={{ background: '#040124' }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Background pattern - CSS diretto */}
      <div 
        className="absolute inset-0 z-[-5]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.6) 2px, transparent 2px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Immagine (solo desktop) */}
          <motion.div
            className="relative flex justify-center lg:justify-start hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-xl mx-auto">
              <Image 
                src="/images/Cell.png" 
                alt="Smartphone con analytics di performance e crescita business"
                width={400}
                height={600}
                className="w-full h-auto object-contain drop-shadow-lg filter"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.15)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.1))',
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main headline */}
            <div>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 leading-relaxed -mt-10">
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
                Dov&apos;è l&apos;inghippo allora? <span className="font-normal">Non tutti riusciranno ad accedere a</span>{' '}
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
            <div className="flex justify-center lg:justify-start">
              <GradientButton onClick={openPopup}>
                <span>Candidati ora per Profilo Autorevole</span>
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
