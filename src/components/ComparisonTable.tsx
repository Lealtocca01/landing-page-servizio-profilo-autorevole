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

        {/* Modern Cards Layout */}
        <div className="space-y-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Feature Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.feature}</h3>
                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-transparent w-24"></div>
              </div>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Profilo Autorevole - Winner Card */}
                <motion.div
                  className="relative group"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-green-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-slate-900/80 border border-blue-500/30 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <Crown size={24} className="text-blue-400 mr-3" />
                      <h4 className="text-white font-bold text-lg">Profilo Autorevole</h4>
                      <div className="ml-auto">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">MIGLIORE</span>
                      </div>
                    </div>
                    <p className="text-blue-200 leading-relaxed">{item.profiloAutorevole}</p>
                  </div>
                </motion.div>

                {/* Agenzia Tradizionale */}
                <motion.div
                  className="relative group"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="backdrop-blur-sm bg-slate-800/60 border border-slate-600/30 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-orange-500/20 rounded-full mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      </div>
                      <h4 className="text-slate-300 font-semibold">Agenzia Tradizionale</h4>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{item.competitors}</p>
                  </div>
                </motion.div>

                {/* Freelancer */}
                <motion.div
                  className="relative group"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="backdrop-blur-sm bg-slate-800/40 border border-slate-700/30 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      </div>
                      <h4 className="text-slate-400 font-semibold">Dipendente / Freelancer</h4>
                    </div>
                    <p className="text-slate-500 leading-relaxed">{item.freelancer}</p>
                  </div>
                </motion.div>
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