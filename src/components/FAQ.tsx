'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "In quanto tempo vedrò i primi risultati?",
      answer: "I primi risultati sono visibili già nella prima settimana con un aumento delle visualizzazioni del profilo. Entro 30 giorni vedrai un incremento significativo di contatti qualificati e opportunità di business. Il nostro record è di 3 lead qualificati in soli 5 giorni dall'attivazione."
    },
    {
      question: "Come funziona esattamente il servizio?",
      answer: "Il processo è semplice e completamente gestito da noi: 1) Analizziamo il tuo profilo e settore, 2) Ottimizziamo completamente il tuo LinkedIn, 3) Creiamo e pubblichiamo contenuti strategici, 4) Monitoriamo e ottimizziamo continuamente le performance. Tu devi solo raccogliere i risultati."
    },
    {
      question: "È adatto anche al mio settore specifico?",
      answer: "Assolutamente sì. Abbiamo lavorato con successo in oltre 50 settori diversi: consulenti, architetti, avvocati, medici, ingegneri, coach, formatori, e molti altri. Il nostro metodo si adatta perfettamente a qualsiasi nicchia professionale perché si basa sui principi fondamentali del personal branding."
    },
    {
      question: "Cosa succede se non sono soddisfatto?",
      answer: "Offriamo una garanzia completa di 30 giorni. Se non vedi un miglioramento significativo della tua presenza LinkedIn, ti rimborsiamo l'intero investimento senza fare domande. È il nostro modo di dimostrarti che crediamo davvero nel nostro metodo."
    },
    {
      question: "Quanto tempo devo dedicare personalmente?",
      answer: "Praticamente zero. Dopo un briefing iniziale di 30 minuti, ci occupiamo noi di tutto. Occasionalmente ti chiederemo un feedback o l'approvazione per contenuti particolarmente strategici, ma parliamo di 5-10 minuti a settimana al massimo."
    },
    {
      question: "Il servizio include anche la gestione dei messaggi?",
      answer: "Il nostro focus è sulla creazione di un profilo che attiri organicamente i clienti giusti. Non gestiamo i messaggi privati perché crediamo che le conversazioni commerciali debbano sempre essere autentiche e personali. Ti forniamo però le strategie e i template per rispondere efficacemente."
    },
    {
      question: "Posso cancellare in qualsiasi momento?",
      answer: "Certamente. Non ci sono contratti vincolanti. Puoi cancellare il servizio in qualsiasi momento con un semplice preavviso di 7 giorni. Siamo così sicuri della qualità del nostro lavoro che non abbiamo bisogno di vincolarti."
    },
    {
      question: "Perché solo 10 clienti al mese?",
      answer: "Limitiamo i posti per garantire la massima qualità del servizio. Ogni profilo riceve un'attenzione personalizzata e strategica che sarebbe impossibile fornire con numeri più alti. Questa esclusività è anche uno dei motivi del nostro alto tasso di successo."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2 mb-6">
            <HelpCircle size={16} className="text-orange-400" />
            <span className="text-sm text-orange-200">Domande Frequenti</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Le domande che ci fai più spesso
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Abbiamo raccolto le domande più comuni dei nostri clienti. Se non trovi la risposta che cerchi, contattaci direttamente.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl overflow-hidden">
                <motion.button
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-white/5 transition-colors duration-200 transform-gpu hover:scale-[1.01] hover:shadow-[0_8px_20px_rgba(255,255,255,0.12)]"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  whileHover={{ scale: 1.01, boxShadow: '0 8px 20px rgba(255,255,255,0.12)' }}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openFAQ === index ? (
                      <Minus size={20} className="text-blue-400" />
                    ) : (
                      <Plus size={20} className="text-blue-400" />
                    )}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Hai altre domande?
            </h3>
            <p className="text-gray-300 mb-6">
              Siamo qui per aiutarti. Scrivici e ti risponderemo entro 2 ore lavorative.
            </p>
            <motion.button
              className="btn-primary px-6 py-3 rounded-full font-semibold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open('mailto:info@profiloautorevole.it?subject=Domanda su Profilo Autorevole', '_blank');
              }}
            >
              Contattaci Ora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}