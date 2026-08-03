"use client"

import { BlurFade } from '@/components/ui/blur-fade'
import { useContactPopup } from '@/contexts/ContactPopupContext'

const steps = [
  { title: "Ti studiamo", description: "capiamo cosa ti rende diverso dai concorrenti nel tuo settore." },
  { title: "Costruiamo il posizionamento", description: "il profilo racconta cosa fai, per chi e perché sei la scelta giusta." },
  { title: "Scriviamo i contenuti", description: "idee rilevanti, voce riconoscibile, messaggi per i clienti che vuoi." },
  { title: "Gestiamo tutto", description: "la tua presenza resta attiva senza occupare le tue giornate." },
  { title: "Ottimizziamo", description: "leggiamo i dati e affiniamo ciò che porta attenzione qualificata." },
  { title: "I clienti ti trovano", description: "il tuo nome è già nella loro testa quando arriva il momento di scegliere." },
]

export function HowItWorksNew() {
  const { openPopup } = useContactPopup()

  return (
    <>
      {/* PART A — Solution intro */}
      <section style={{ background: '#0a0a0a' }} className="dot-grid">
        <div className="container-page section-padding">
          <BlurFade delay={0.1} inView>
            <div className="max-w-3xl">
              <div className="accent-bar mb-6" />
              <h2 className="heading-lg mb-6" style={{ color: '#ffffff' }}>
                Con Profilo Autorevole, il tuo LinkedIn ti posiziona dove meriti.
              </h2>
              <p className="text-lg leading-relaxed max-w-2xl mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>
                LinkedIn è il nostro unico mestiere. Studiamo il tuo settore, costruiamo il posizionamento,
                scriviamo con la tua voce, pubblichiamo ogni settimana. Tu lavori sulla tua azienda — noi
                sul tuo LinkedIn. Online in 7 giorni.
              </p>
              <p className="font-serif text-lg mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
                &ldquo;LinkedIn è il nostro unico mestiere.&rdquo;
              </p>
              <button
                onClick={() => openPopup('consultation')}
                className="cta-white"
              >
                Scopri come possiamo farlo per la tua azienda
                <span>→</span>
              </button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* PART B — Process */}
      <section id="come-funziona" style={{ background: '#0a0a0a' }} className="dot-grid">
        <div className="container-page section-padding">
          <BlurFade delay={0.1} inView>
            <div className="mb-12">
              <p className="label-light mb-3">IL NOSTRO PROCESSO</p>
              <h2 className="heading-bold" style={{ color: '#ffffff' }}>Come funziona.</h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1
              return (
                <BlurFade key={i} delay={i * 0.1} inView>
                  <div
                    className="rounded-xl p-7 flex gap-4 items-start border border-white/10"
                    style={{ background: isLast ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)' }}
                  >
                    <span
                      className="flex-shrink-0 w-[34px] h-[34px] rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: isLast ? 'var(--accent)' : '#000000' }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-base leading-relaxed pt-1.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <strong style={{ color: '#ffffff' }}>{step.title}</strong> — {step.description}
                    </p>
                  </div>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
