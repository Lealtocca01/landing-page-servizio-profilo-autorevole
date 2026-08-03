'use client';

import { useContactPopup } from '@/contexts/ContactPopupContext';
import { NumberTicker } from '@/components/ui/number-ticker';

export function Hero() {
  const { openPopup } = useContactPopup();

  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 min-h-[calc(100vh-40px)] overflow-hidden bg-[linear-gradient(to_bottom,#000_0%,#0a0a0a_40%,#111_70%,#0a0a0a_100%)] rounded-b-xl"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-60 h-[600px] w-full bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:6rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent — positioned low, subtle glow */}
      <div
        className="absolute left-1/2 top-[calc(100%-60px)] lg:top-[calc(100%-100px)] h-[400px] w-[600px] md:h-[400px] md:w-[900px] lg:h-[600px] lg:w-[120%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,#0a0a0a_70%,#ff370030_100%)]"
        style={{ animation: 'fade-up 1s ease forwards' }}
      />

      {/* Dark overlay behind text for readability */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(0,0,0,0.5)_0%,transparent_70%)]" />

      {/* Eyebrow */}
      <span
        className="relative z-10 text-sm text-white/40 mx-auto px-5 py-2 bg-gradient-to-tr from-white/5 via-white/5 to-transparent border-[2px] border-white/10 rounded-3xl w-fit tracking-[0.12em] uppercase flex items-center justify-center"
      >
        Per imprenditori e aziende B2B
      </span>

      {/* Title */}
      <h1
        className="relative z-10 animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-white from-50% to-white/70 bg-clip-text py-6 text-5xl font-light leading-none tracking-tighter text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
        style={{ animationDelay: '0.15s', letterSpacing: '-0.04em', lineHeight: '0.92' }}
      >
        Se nel 2026 non hai la giusta presenza su LinkedIn,{' '}
        <span className="font-semibold" style={{ WebkitTextFillColor: 'var(--accent)' }}>
          stai perdendo soldi.
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="relative z-10 animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-white/60 opacity-0 md:text-xl max-w-2xl mx-auto"
        style={{ animationDelay: '0.3s' }}
      >
        Trasforma il tuo profilo in un sistema di acquisizione clienti.
        Studiamo il tuo settore, costruiamo il posizionamento, pubblichiamo
        ogni settimana con la tua voce. Online in{' '}
        <NumberTicker value={7} className="text-white font-bold" /> giorni.
      </p>

      {/* CTA */}
      <div className="relative z-10 flex justify-center" style={{ animation: 'fade-in 1s ease 0.45s forwards', opacity: 0 }}>
        <button
          onClick={() => openPopup('consultation')}
          className="cta-white z-20"
        >
          Scopri come possiamo farlo per la tua azienda
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* Bottom Fade */}
      <div
        className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,#0a0a0a_10%,transparent)]"
      />
    </section>
  );
}
