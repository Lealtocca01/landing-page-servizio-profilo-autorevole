'use client';

import { motion } from 'framer-motion';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function WhyChooseUs() {
  const { openPopup } = useContactPopup();

  const scudo = [
    {
      title: 'Fare da soli',
      text: "Non hai tempo, e LinkedIn non è il tuo mestiere. Pubblicare ogni tanto senza strategia è come aprire un negozio e tenere la serranda abbassata 6 giorni su 7. L'algoritmo premia chi è costante — non chi appare una volta al mese.",
    },
    {
      title: 'Agenzia generica',
      text: 'Le agenzie che fanno "un po\' di tutto" trattano LinkedIn come un canale secondario. Pubblicano contenuti generici, senza conoscere il tuo settore né il linguaggio dei tuoi potenziali clienti. Risultato: un profilo che sembra un volantino, non un biglietto da visita.',
    },
    {
      title: 'Collaboratore interno',
      text: 'Un dipendente non ha le competenze strategiche per LinkedIn né la visione del mercato. Pubblica per riempire il calendario, non per attrarre clienti. E tu non hai modo di sapere se sta funzionando.',
    },
  ];

  const gladio = [
    {
      contro: 'Nessuno conosce il tuo settore',
      noi: 'Studiamo il tuo mercato, i tuoi competitor e il linguaggio dei tuoi clienti prima di scrivere una riga',
    },
    {
      contro: 'Contenuti generici copia-incolla',
      noi: 'Ogni contenuto è scritto per il tuo settore, nella lingua di chi deve sceglierti',
    },
    {
      contro: 'Pubblicano e spariscono',
      noi: '3 contenuti a settimana, engagement gestito, ottimizzazione continua',
    },
    {
      contro: 'LinkedIn è uno dei tanti canali',
      noi: 'LinkedIn è il nostro unico mestiere — ed è per questo che funziona',
    },
    {
      contro: 'Ti vincolano con contratti',
      noi: 'Nessun vincolo: interrompi quando vuoi',
    },
    {
      contro: 'Non ti seguono dopo l\'attivazione',
      noi: '2 call a settimana col tuo consulente dedicato',
    },
  ];

  return (
    <section
      id="perche-noi"
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ background: '#111936' }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* SCUDO — Squalifica delle alternative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Perché <span style={{ color: '#D3F20F' }}>finora</span> non ha
            funzionato
          </h2>
          <p
            className="text-lg md:text-xl mb-12 max-w-3xl"
            style={{ color: '#C9D1D9' }}
          >
            Hai già provato almeno una di queste strade. Ecco perché nessuna ti
            ha portato risultati.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {scudo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl p-6 lg:p-8"
                style={{
                  background: '#0B1020',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="text-lg font-bold mb-3"
                  style={{ color: '#EF4444' }}
                >
                  ✗
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: '#C9D1D9' }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PRESCRIZIONE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-2xl md:text-3xl font-bold text-white max-w-3xl mx-auto leading-snug">
            Nessun approccio funziona se non è{' '}
            <span style={{ color: '#D3F20F' }}>specifico per LinkedIn</span> e
            costruito intorno al tuo settore.
          </p>
        </motion.div>

        {/* GLADIO — Soluzione uguale e opposta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cosa fa{' '}
            <span style={{ color: '#D3F20F' }}>Profilo Autorevole</span> di
            diverso
          </h3>
          <p
            className="text-lg mb-10 max-w-3xl"
            style={{ color: '#C9D1D9' }}
          >
            Ogni punto risponde a un problema che hai già vissuto.
          </p>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {gladio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl p-6"
                style={{
                  background: '#0B1020',
                  border: '1px solid rgba(211, 242, 15, 0.12)',
                }}
              >
                <p
                  className="text-sm font-medium mb-2 line-through"
                  style={{ color: '#EF4444' }}
                >
                  {item.contro}
                </p>
                <p className="text-base font-medium text-white">{item.noi}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
