'use client';

import Image from 'next/image';
import { Shield, ArrowRight } from 'lucide-react';
import { BGPattern } from '@/components/ui/bg-pattern';
import GradientButton from '@/components/ui/GradientButton';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function NoContracts() {
  const { openPopup } = useContactPopup();

  return (
    <section className="pt-24 pb-20 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 relative overflow-hidden" style={{ background: '#111936' }}>
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
          <div className="relative flex justify-center lg:justify-start hidden lg:block">
            <div className="relative max-w-xl mx-auto">
              <Image 
                src="/images/tel.png" 
                alt="Smartphone con analytics di performance e crescita business"
                width={300}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 text-left">
            {/* Main headline */}
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 leading-relaxed -mt-10" style={{ color: '#C9D1D9' }}>
                Dovrai sottostare a Vincoli Contrattuali? No.
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Avrai la possibilità di{' '}
                <span style={{ color: '#D3F20F' }}>rescindere</span> quando vuoi.
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: '#C9D1D9' }}>
                Niente obblighi, niente vincoli o impegni.
              </p>
              
              {/* Immagine solo mobile */}
              <div className="flex justify-center lg:hidden">
                <div className="relative max-w-sm mx-auto">
                  <Image 
                    src="/images/tel.png" 
                    alt="Smartphone con analytics di performance e crescita business"
                    width={300}
                    height={450}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Dov&apos;è l&apos;inghippo allora? <span className="font-normal">Non tutti riusciranno ad accedere a</span>{' '}
                <span style={{ color: '#D3F20F' }}>Profilo Autorevole</span>.
              </h4>
            </div>

            {/* Section 3 */}
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Accettiamo solo <span style={{ color: '#D3F20F' }}>10 attività</span> al mese.
              </h4>
              <p className="text-lg mb-4" style={{ color: '#C9D1D9' }}>
                Il motivo? È molto semplice.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#C9D1D9' }}>
              Vogliamo garantire la massima qualità a chi ci sceglie.
              Preferiamo seguire pochi clienti, ma farlo bene.
              </p>

            </div>

            {/* CTA Button */}
            <div className="flex justify-start">
              <GradientButton onClick={() => openPopup('consultation')}>
                <span>Richiedi ora la tua consulenza gratuita</span>
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
