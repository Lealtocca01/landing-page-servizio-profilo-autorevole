'use client';

import { BlurFade } from '@/components/ui/blur-fade';

const failureCards = [
  { title: 'Fare da soli', body: "Gestisci un'azienda, non un profilo social. Non hai tempo per la costanza che l'algoritmo pretende." },
  { title: 'Agenzia generica', body: 'Contenuti copia-incolla. Nessuna conoscenza del tuo settore. Ti trattano come uno dei tanti.' },
  { title: 'Collaboratore interno', body: 'Pubblica per riempire il calendario. Non conosce LinkedIn, non conosce il tuo posizionamento.' },
];

export function WhyItFailed() {
  return (
    <section style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="container-page section-padding">
        <p className="label mb-3">IL PROBLEMA</p>
        <h2 className="heading-bold mb-10">Perché finora non ha funzionato</h2>

        <div className="flex flex-col gap-4 max-w-3xl">
          {failureCards.map((card, i) => (
            <BlurFade key={i} delay={i * 0.12} inView>
              <div className="bg-white rounded-xl border border-[var(--border)] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <p className="font-bold text-lg mb-1">
                  <span style={{ color: 'var(--accent)' }} className="font-bold mr-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {card.title}
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{card.body}</p>
              </div>
            </BlurFade>
          ))}

          <BlurFade delay={failureCards.length * 0.12} inView>
            <div className="dot-grid bg-black rounded-xl p-6 mt-2">
              <div className="accent-bar mb-3" />
              <p className="text-white leading-relaxed font-medium">
                Nessuno di questi funziona perché nessuno è specifico per LinkedIn e costruito intorno al tuo settore.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
