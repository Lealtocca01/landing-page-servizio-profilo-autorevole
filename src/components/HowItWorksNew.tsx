'use client';

import { motion } from 'framer-motion';

export function HowItWorksNew() {
  const steps = [
    {
      title: 'Ti studiamo',
      benefit:
        'Capiamo chi sono i tuoi clienti ideali, come cercano su LinkedIn e cosa li convince a scegliere un professionista. Da qui costruiamo la strategia.',
    },
    {
      title: 'Costruiamo il tuo posizionamento',
      benefit:
        'Ottimizziamo il tuo profilo perché comunichi competenza e affidabilità al primo sguardo. Chi ti cerca trova un professionista, non una pagina vuota.',
    },
    {
      title: 'Scriviamo i tuoi contenuti',
      benefit:
        'Ogni settimana pubblichiamo contenuti che dimostrano la tua competenza nel tuo settore — senza che tu debba scrivere una riga.',
    },
    {
      title: 'Gestiamo tutto',
      benefit:
        'Pubblicazione, commenti, interazioni: ci pensiamo noi. Tu ti concentri sul tuo lavoro, i tuoi potenziali clienti ti vedono attivo e presente.',
    },
    {
      title: 'Ottimizziamo i risultati',
      benefit:
        'Ogni mese analizziamo cosa funziona e cosa no, e aggiustiamo la strategia. Non pubblichiamo alla cieca: miglioriamo di continuo.',
    },
    {
      title: 'I clienti ti trovano',
      benefit:
        'I tuoi potenziali clienti iniziano a contattarti perché ti percepiscono come il riferimento nel tuo settore. Il profilo lavora per te, anche quando non ci pensi.',
    },
  ];

  return (
    <section
      id="come-funziona"
      className="py-16 lg:py-24"
      style={{ background: '#0B1020' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p
            className="text-base font-medium mb-3"
            style={{ color: '#D3F20F' }}
          >
            Come funziona
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Cosa succede dopo che ci{' '}
            <span style={{ color: '#D3F20F' }}>contatti</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl"
            style={{ color: '#C9D1D9' }}
          >
            Dalla prima call al primo cliente che ti scrive su LinkedIn. Online
            in 7 giorni.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-2">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-5 sm:gap-6 items-start py-6"
              style={{
                borderBottom:
                  i < steps.length - 1
                    ? '1px solid rgba(255,255,255,0.06)'
                    : 'none',
              }}
            >
              {/* Number badge */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ background: '#D3F20F', color: '#0B1020' }}
              >
                {i + 1}
              </div>
              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: '#C9D1D9' }}
                >
                  {step.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
