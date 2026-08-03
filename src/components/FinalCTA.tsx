'use client';

import { useContactPopup } from '@/contexts/ContactPopupContext';
import { BlurFade } from '@/components/ui/blur-fade';
import { ShineBorder } from '@/components/ui/shine-border';

export function FinalCTA() {
  const { openPopup } = useContactPopup();

  const professionalFeatures = [
    '12 contenuti al mese pubblicati per te',
    'Strategia costruita sul tuo settore',
    'Calendario editoriale gestito',
    'La tua voce professionale, amplificata',
    'Ottimizzazioni continue basate sui dati',
    'Un consulente dedicato a te',
    'Nessun vincolo — esci quando vuoi',
  ];

  const consultationFeatures = [
    'Scopri come funziona per la tua azienda',
    'Direzione strategica personalizzata',
    'Piano concreto per i primi 90 giorni',
    '30 minuti dedicati a te',
    'Nessun impegno',
  ];

  return (
    <section id="pricing" className="section-padding" style={{ background: 'var(--bg-alt)' }}>
      <div className="container-page">
        <BlurFade delay={0.1} inView>
          <div className="mb-12">
            <p className="label mb-3">PACCHETTI</p>
            <h2 className="heading-lg mb-4">Quanto costa costruire la tua autorità su LinkedIn?</h2>
            <p className="font-serif text-xl md:text-2xl" style={{ color: 'var(--fg-muted)' }}>
              Meno di quello che stai perdendo ogni mese senza una strategia.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Professional */}
          <BlurFade delay={0.2} inView>
            <div
              className="relative overflow-hidden text-white rounded-2xl p-8 flex flex-col h-full"
              style={{ background: 'var(--fg)', boxShadow: '0 0 80px rgba(255, 55, 0, 0.15), 0 0 30px rgba(255, 55, 0, 0.1)' }}
            >
              <span
                className="text-xs font-bold uppercase tracking-wider mb-4 inline-block px-3 py-1 rounded-full w-fit"
                style={{ background: 'var(--accent)' }}
              >
                Molto richiesto
              </span>
              <h3 className="text-3xl font-bold mb-6">Professional</h3>
              <ul className="space-y-3 mb-8 flex-1">
                {professionalFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px] leading-relaxed">
                    <span className="mt-0.5 shrink-0" style={{ color: 'var(--accent)' }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <p className="font-serif text-sm mb-6 opacity-70">
                Meno di un terzo del costo di un dipendente part-time.
              </p>
              <button
                onClick={() => openPopup('package')}
                className="w-full py-3.5 rounded-full text-base font-semibold bg-white text-black hover:opacity-90 transition-opacity"
              >
                Scopri il pacchetto
              </button>
              <ShineBorder shineColor={['#ff3700', '#ff6633', '#ff3700']} borderWidth={2} duration={10} />
            </div>
          </BlurFade>

          {/* Consulenza Gratuita */}
          <BlurFade delay={0.3} inView>
            <div
              className="rounded-2xl p-8 flex flex-col h-full border border-[var(--border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ background: 'var(--bg)' }}
            >
              <h3 className="text-3xl font-bold mb-4">Consulenza Gratuita</h3>
              <p className="font-serif text-2xl mb-6">
                <span className="line-through" style={{ color: 'var(--fg-subtle)' }}>€75</span>{' '}
                → €0 <span className="font-bold" style={{ color: 'var(--accent)' }}>GRATIS</span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {consultationFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px] leading-relaxed">
                    <span className="mt-0.5 shrink-0">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <p className="font-serif text-sm mb-6" style={{ color: 'var(--fg-muted)' }}>
                Ti chiediamo solo un feedback sincero.
              </p>
              <button
                onClick={() => openPopup('consultation')}
                className="w-full py-3.5 rounded-full text-base font-semibold bg-black text-white hover:opacity-90 transition-opacity"
              >
                Prenota la consulenza gratuita
              </button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
