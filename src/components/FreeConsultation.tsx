'use client';

import { useContactPopup } from '@/contexts/ContactPopupContext';
import { CheckIcon } from '@radix-ui/react-icons';

export function FreeConsultation() {
  const { openPopup } = useContactPopup();

  const features = [
    "Analisi completa del tuo profilo (se lo hai) con consigli immediati",
    "Linee guida per posizionarti al meglio anche se parti da zero",
    "Strategia di contenuti personalizzata per il tuo settore",
    "Analisi del mercato e dei concorrenti",
    "Script di contatto a freddo già pronto per iniziare subito",
    "30 minuti di consulenza gratuita con un esperto"
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: '#ffffff' }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(circle at 20% 80%, #FFFFFF 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FFFFFF 0%, transparent 50%)' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-left md:text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#000000' }}>
              Vorresti iniziare a <span style={{ color: '#000000' }}>costruire</span> la tua presenza su <span style={{ color: '#000000' }}>LinkedIn</span>, ma non sai da dove iniziare?
            </h2>
            <p className="text-xl md:text-2xl font-medium italic mb-8" style={{ color: '#777777' }}>
              Oppure ci stai già provando ma non ottieni risultati?
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#000000' }}>
              Prenota ora la tua consulenza <span style={{ color: '#000000' }}>gratuita</span>
            </h3>
            <p className="text-lg md:text-xl max-w-3xl md:mx-auto leading-relaxed" style={{ color: '#555555' }}>
              Ti daremo consigli pratici e applicabili fin da subito per capire come posizionarti, costruire una strategia efficace e attrarre clienti su LinkedIn.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-left md:text-center mb-8" style={{ color: '#000000' }}>
              Cosa include la tua consulenza:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-0 md:p-6 md:rounded transition-all duration-300 hover:scale-[1.02] md:bg-[rgba(0,0,0,0.05)] md:border md:border-[rgba(0,0,0,0.2)]"
                >
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ 
                      background: '#000000',
                      color: '#ffffff'
                    }}
                  >
                    <CheckIcon className="w-4 h-4" />
                  </div>
                  <span 
                    className="text-base leading-relaxed font-medium"
                    style={{ color: '#f5f5f5' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>


          {/* CTA Button - CENTRATO MOBILE, SINISTRA DESKTOP */}
          <div className="text-center lg:text-left px-4 sm:px-0">
            <button
              onClick={() => openPopup('consultation')}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold rounded-lg relative overflow-hidden w-full sm:w-auto min-w-[280px] h-14"
              style={{ 
                background: 'linear-gradient(135deg, #FFFFFF 0%, #e3e3e3 100%)',
                color: '#ffffff',
                boxShadow: 'none',
                fontSize: '1.1em'
              }}
            >
              <span className="relative z-10 flex items-center justify-center w-full whitespace-nowrap">
                Richiedi ora la tua consulenza gratuita
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
