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
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: '#0B1020' }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(circle at 20% 80%, #D3F20F 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D3F20F 0%, transparent 50%)' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-left md:text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
              Vorresti iniziare a <span style={{ color: '#D3F20F' }}>costruire</span> la tua presenza su <span style={{ color: '#FFFFFF' }}>LinkedIn</span>, ma non sai da dove iniziare?
            </h2>
            <p className="text-xl md:text-2xl font-medium italic mb-8" style={{ color: '#94A3B8' }}>
              Oppure ci stai già provando ma non ottieni risultati?
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Prenota ora la tua consulenza <span style={{ color: '#D3F20F' }}>gratuita</span>
            </h3>
            <p className="text-lg md:text-xl max-w-3xl md:mx-auto leading-relaxed" style={{ color: '#C9D1D9' }}>
              Ti daremo consigli pratici e applicabili fin da subito per capire come posizionarti, costruire una strategia efficace e attrarre clienti su LinkedIn.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-left md:text-center mb-8" style={{ color: '#FFFFFF' }}>
              Cosa include la tua consulenza:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-0 md:p-6 md:rounded-2xl transition-all duration-300 hover:scale-[1.02] md:bg-[rgba(211,242,15,0.05)] md:border md:border-[rgba(211,242,15,0.2)]"
                >
                  <div 
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ 
                      background: '#D3F20F',
                      color: '#0B1020'
                    }}
                  >
                    <CheckIcon className="w-4 h-4" />
                  </div>
                  <span 
                    className="text-base leading-relaxed font-medium"
                    style={{ color: '#E2E8F0' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why we do it section */}
          <div className="mb-12">
            <div 
              className="p-8 rounded-2xl"
              style={{ 
                background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
                border: '1px solid #E2E8F0'
              }}
            >
              <div>
                <h4 
                  className="text-xl font-bold mb-4" 
                  style={{ color: '#0B1020' }}
                >
                  Perché lo facciamo?
                </h4>
                <p 
                  className="text-base leading-relaxed" 
                  style={{ color: '#475569' }}
                >
                  In cambio della consulenza ti chiediamo soltanto un <strong>feedback sincero</strong>: se ti siamo stati utili e ti abbiamo aiutato, potremo utilizzare la tua testimonianza per dimostrare concretamente il nostro valore ad altri professionisti come te.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button - CENTRATO MOBILE, SINISTRA DESKTOP */}
          <div className="text-center lg:text-left px-4 sm:px-0">
            <button
              onClick={() => openPopup('consultation')}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold rounded-lg relative overflow-hidden w-full sm:w-auto min-w-[280px] h-14"
              style={{ 
                background: 'linear-gradient(135deg, #D3F20F 0%, #A8D83A 100%)',
                color: '#0B1020',
                boxShadow: '0 4px 14px 0 rgba(211, 242, 15, 0.2)',
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
