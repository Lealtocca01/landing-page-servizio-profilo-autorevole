'use client';

import { BlurFade } from '@/components/ui/blur-fade';

const painItems = [
  { text: "Non hai tempo di gestire LinkedIn. L'algoritmo premia chi è costante ogni settimana, non chi appare una volta al mese.", accent: false, bold: false },
  { text: "Hai provato a delegare a un'agenzia — contenuti generici, nessuna conoscenza del tuo settore. Il profilo sembrava un volantino.", accent: false, bold: false },
  { text: "Chi cerca un'azienda come la tua ti giudica da come ti presenti online. LinkedIn fermo o vuoto = non esistono motivi per fidarsi.", accent: false, bold: false },
  { text: 'Scelgono i tuoi concorrenti. Non è vanità — ti sta costando soldi.', accent: true, bold: true },
];

export function PainPoints() {
  return (
    <section className="dot-grid" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container-page section-padding">
        <BlurFade delay={0.1} inView>
          <h2 className="heading-lg mb-4" style={{ color: '#ffffff' }}>Lo sai che sei meglio di così.</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Il tuo concorrente pubblica ogni settimana, ha un profilo curato, riceve contatti. Non è più bravo di te — si presenta meglio.
          </p>
        </BlurFade>

        <div className="accent-bar mb-10" />

        <BlurFade delay={0.2} inView>
          <p
            className="font-serif text-xl md:text-2xl mb-12"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Non è che non ci hai provato — è che nessuno ti ha mai costruito un sistema.
          </p>
        </BlurFade>

        <div className="flex flex-col gap-6">
          {painItems.map((item, i) => (
            <BlurFade key={i} delay={i * 0.1} inView direction="right">
              <div className="flex items-stretch gap-5">
                <div
                  className="w-[3px] flex-shrink-0 rounded-full"
                  style={{ backgroundColor: item.accent ? 'var(--accent)' : 'rgba(255,255,255,0.2)' }}
                />
                <p
                  className={`text-base md:text-lg leading-relaxed py-0.5${item.bold ? ' font-bold' : ''}`}
                  style={{ color: item.bold ? '#ffffff' : 'rgba(255,255,255,0.7)' }}
                >
                  {item.text}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
