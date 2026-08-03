'use client';

import { Marquee } from '@/components/ui/marquee';

const claims = [
  'Online in 7 giorni',
  'Nessun vincolo contrattuale',
  '12 contenuti al mese',
  'Strategia personalizzata',
  'Un consulente dedicato',
  'Solo LinkedIn, il nostro mestiere',
  'La tua voce, amplificata',
  'Costanza garantita',
];

export function SocialProof() {
  return (
    <section className="py-6 overflow-hidden" style={{ background: 'var(--fg)' }}>
      <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
        {claims.map((claim, i) => (
          <span
            key={i}
            className="flex items-center gap-6 text-sm font-bold uppercase tracking-wider text-white/40 whitespace-nowrap"
          >
            {claim}
            <span style={{ color: 'var(--accent)' }}>●</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
