'use client';

import GradientButton from '@/components/ui/GradientButton';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function Hero() {
  const { openPopup } = useContactPopup();

  const painPoints = [
    "Aggiorni la foto, riscrivi la bio, pubblichi un post ogni tanto. Risultato: 30 visualizzazioni, tutte di colleghi.",
    "Intanto il tuo concorrente posta ogni settimana. Non è più bravo di te — ma i clienti lo trovano prima.",
    "Hai provato a delegare a un'agenzia o a un collaboratore, ma nessuno ha capito davvero cosa comunicare per il tuo settore.",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24"
      style={{ background: '#0B1020' }}
    >
      <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Pre-headline — targeting tiepido */}
          <p
            className="text-base sm:text-lg font-medium tracking-wide uppercase mb-6"
            style={{ color: '#D3F20F' }}
          >
            Sei un professionista. Sai che LinkedIn conta.
          </p>

          {/* Headline — pain tiepido */}
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-10 leading-[1.1]">
            Hai provato a curare il tuo profilo, hai pubblicato qualche post
            — ma i clienti{' '}
            <span style={{ color: '#D3F20F' }}>non arrivano</span>.
          </h1>

          {/* Pain — cartellino specifico */}
          <div className="space-y-5 mb-12 max-w-3xl">
            {painPoints.map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className={`w-1 min-h-[20px] rounded-full flex-shrink-0 mt-1.5 ${
                    i === painPoints.length - 1
                      ? 'bg-[#D3F20F]'
                      : 'bg-white/30'
                  }`}
                />
                <p
                  className="text-lg sm:text-xl leading-relaxed"
                  style={{ color: '#C9D1D9' }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Decolpevolizzazione */}
          <div
            className="rounded-xl p-6 sm:p-8 mb-12 max-w-3xl"
            style={{
              background: '#111936',
              border: '1px solid rgba(211, 242, 15, 0.12)',
            }}
          >
            <p className="text-xl sm:text-2xl font-semibold text-white mb-3">
              Non è colpa tua.
            </p>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: '#C9D1D9' }}
            >
              LinkedIn non funziona come gli altri social. Serve una strategia
              specifica, contenuti mirati al tuo settore e costanza ogni
              settimana — tre cose che richiedono competenze verticali che la
              maggior parte delle agenzie semplicemente non ha.
            </p>
          </div>

          {/* CTA */}
          <GradientButton onClick={() => openPopup('consultation')}>
            <span>Scopri se Profilo Autorevole fa al caso tuo</span>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
