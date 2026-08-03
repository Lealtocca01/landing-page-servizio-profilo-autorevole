'use client';

import { BlurFade } from '@/components/ui/blur-fade';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function NoContracts() {
  const { openPopup } = useContactPopup();

  return (
    <section className="section-padding dot-grid" style={{ background: '#0a0a0a' }}>
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Dark visual card */}
          <BlurFade delay={0.1} inView direction="right">
            <div
              className="rounded-2xl flex items-end p-8 min-h-[360px] border border-white/10"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              <h2 className="heading-bold text-white">
                Il tuo nome.<br />
                La tua voce.<br />
                La tua scelta.
              </h2>
            </div>
          </BlurFade>

          {/* Right — Content */}
          <BlurFade delay={0.2} inView direction="left">
            <div className="space-y-6">
              <h2 className="heading-bold text-white">
                Interrompi quando vuoi.<br />
                Niente contratti. Niente penali.
              </h2>

              <div
                className="rounded-xl p-6 border border-white/10"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  C&apos;è un però. Non accettiamo tutti. Prima facciamo una call — se il tuo
                  settore non è adatto a LinkedIn, te lo diciamo noi per primi.
                </p>
              </div>

              <button
                onClick={() => openPopup('consultation')}
                className="cta-white"
              >
                Prenota una call gratuita
              </button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
