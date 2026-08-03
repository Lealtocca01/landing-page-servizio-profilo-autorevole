'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { useContactPopup } from '@/contexts/ContactPopupContext';

const reasons = [
  { number: '01', title: 'Il tuo settore, studiato a fondo' },
  { number: '02', title: 'Contenuti scritti per te, non riciclati' },
  { number: '03', title: 'Costanza garantita, ogni settimana' },
  { number: '04', title: 'Nessun vincolo, esci quando vuoi' },
  { number: '05', title: 'LinkedIn e basta — il nostro unico mestiere' },
  { number: '06', title: 'Un consulente dedicato a te' },
];

export function WhyChooseUs() {
  const { openPopup } = useContactPopup();

  return (
    <section id="perche-noi" className="section-padding" style={{ background: 'var(--bg-alt)' }}>
      <div className="container-page">
        <BlurFade delay={0.1} inView>
          <div className="mb-14">
            <p className="label mb-3">PERCHÉ NOI</p>
            <h2 className="heading-lg">Cosa fa di diverso Profilo Autorevole.</h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <BlurFade key={reason.number} delay={i * 0.08} inView>
              <div
                className="rounded-xl p-6 border border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ background: 'var(--bg)' }}
              >
                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ background: 'var(--accent)' }}
                />
                <p className="text-sm font-bold mb-3" style={{ color: 'var(--accent)' }}>
                  {reason.number}
                </p>
                <h3 className="text-lg font-bold">{reason.title}</h3>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5} inView>
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => openPopup('consultation')}
              className="py-3.5 px-8 rounded-full text-base font-semibold bg-black text-white hover:opacity-90 transition-opacity"
            >
              Prenota una call gratuita
            </button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
