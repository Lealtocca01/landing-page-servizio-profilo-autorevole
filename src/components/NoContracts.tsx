'use client';

import { motion } from 'framer-motion';
import GradientButton from '@/components/ui/GradientButton';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function NoContracts() {
  const { openPopup } = useContactPopup();

  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ background: '#111936' }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Scarico del rischio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Nessun vincolo. Interrompi{' '}
              <span style={{ color: '#D3F20F' }}>quando vuoi</span>.
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: '#C9D1D9' }}
            >
              Niente contratti vincolanti, niente penali, niente obblighi. Se i
              risultati non ti convincono, smetti. Crediamo nel valore di quello
              che facciamo, non nei vincoli contrattuali.
            </p>
          </motion.div>

          {/* Selezione — reason why */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 sm:p-8 mb-10"
            style={{
              background: '#0B1020',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <h3 className="text-xl font-bold text-white mb-3">
              C&apos;è un però.
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: '#C9D1D9' }}
            >
              Non accettiamo tutte le attività. Prima di iniziare facciamo una
              call di valutazione: se il percorso non ha senso per il tuo caso,
              saremo i primi a dirtelo.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: '#C9D1D9' }}
            >
              Lavoriamo solo con professionisti per cui LinkedIn può fare davvero
              la differenza. Se sei tra questi, i risultati arrivano.
            </p>
          </motion.div>

          {/* CTA */}
          <GradientButton onClick={() => openPopup('consultation')}>
            <span>Prenota la call di valutazione</span>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
