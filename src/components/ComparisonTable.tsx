'use client';

import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export function ComparisonTable() {
  const features = [
    {
      feature: "Cosa Offre",
      profiloAutorevole: "Solo LinkedIn, con un metodo testato per trasformare il profilo in un asset di autorevolezza e clienti",
      competitors: "Tanti canali seguiti in modo superficiale, senza focus su LinkedIn",
      freelancer: "Gestione \"alla buona\" del profilo, senza strategia né costanza"
    },
    {
      feature: "Quanto Costa",
      profiloAutorevole: "250€/mese – tutto incluso, senza costi nascosti",
      competitors: "Migliaia di euro al mese per servizi generici",
      freelancer: "Apparentemente poco, ma sprechi tempo, soldi e opportunità"
    },
    {
      feature: "Chi c'è Dietro",
      profiloAutorevole: "Specialisti LinkedIn: competenza verticale e focus totale",
      competitors: "Agenzie generaliste che fanno \"un po' di tutto\"",
      freelancer: "Un improvvisato senza esperienza reale di posizionamento"
    },
    {
      feature: "Risultati Ottenuti",
      profiloAutorevole: "Crescita costante di visibilità, autorevolezza e nuove opportunità",
      competitors: "Risultati discontinui e poco misurabili",
      freelancer: "Nessuna crescita reale, il profilo resta invisibile"
    }
  ];

  return (
    <section id="prezzi" className="section-padding bg-gradient-to-b from-slate-950 to-blue-950">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 italic">
              Ancora non sei convinto?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              Ecco perché <span className="text-gradient">Profilo Autorevole</span> è la scelta migliore per te.
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scopri perché Profilo Autorevole è la scelta migliore per il tuo business. Confronto trasparente e onesto.
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-6 min-w-[1000px]">
            <div className="grid grid-cols-4 gap-4">
              {/* Header */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">Caratteristiche</h3>
              </div>
              <div className="p-4 text-center">
                <motion.div
                  className="bg-gradient-to-br from-blue-500 to-green-400 rounded-xl p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Crown size={20} className="text-white mx-auto mb-2" />
                  <h3 className="text-white font-bold">Profilo Autorevole</h3>
                </motion.div>
              </div>
              <div className="p-4 text-center">
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-gray-300 font-semibold">Agenzia Tradizionale</h3>
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-gray-300 font-semibold">Dipendente / Freelancer Improvvisato</h3>
                </div>
              </div>

              {/* Features */}
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="contents"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 border-t border-gray-700/50">
                    <span className="text-gray-200">{item.feature}</span>
                  </div>
                  
                  <div className="p-4 border-t border-gray-700/50">
                    <span className="text-green-400 font-semibold text-sm leading-relaxed">{item.profiloAutorevole}</span>
                  </div>
                  
                  <div className="p-4 border-t border-gray-700/50">
                    <span className="text-gray-300 text-sm leading-relaxed">{item.competitors}</span>
                  </div>
                  
                  <div className="p-4 border-t border-gray-700/50">
                    <span className="text-gray-300 text-sm leading-relaxed">{item.freelancer}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary px-8 py-3 rounded-xl font-semibold text-white transform-gpu transition-all duration-200 hover:scale-105 hover:shadow-[0_10px_26px_rgba(255,255,255,0.25)]"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 26px rgba(255,255,255,0.25)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#cta');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Scegli Profilo Autorevole Ora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}