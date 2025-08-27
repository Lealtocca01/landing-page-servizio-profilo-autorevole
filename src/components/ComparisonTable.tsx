'use client';

import { motion } from 'framer-motion';
import { Check, X, Crown } from 'lucide-react';

export function ComparisonTable() {
  const features = [
    {
      feature: "Analisi completa del profilo",
      profiloAutorevole: true,
      competitors: "Parziale",
      freelancer: false
    },
    {
      feature: "Strategia personalizzata",
      profiloAutorevole: true,
      competitors: "Template standard",
      freelancer: "Limitata"
    },
    {
      feature: "Ottimizzazione SEO LinkedIn",
      profiloAutorevole: true,
      competitors: "Base",
      freelancer: false
    },
    {
      feature: "Creazione contenuti professionali",
      profiloAutorevole: true,
      competitors: "Limitata",
      freelancer: "Variabile"
    },
    {
      feature: "Monitoraggio performance",
      profiloAutorevole: true,
      competitors: "Report mensile",
      freelancer: false
    },
    {
      feature: "Supporto dedicato",
      profiloAutorevole: true,
      competitors: "Email",
      freelancer: "Limitato"
    },
    {
      feature: "Garanzia risultati 30 giorni",
      profiloAutorevole: true,
      competitors: false,
      freelancer: false
    },
    {
      feature: "Prezzo mensile",
      profiloAutorevole: "€250",
      competitors: "€400-800",
      freelancer: "€150-500"
    }
  ];

  return (
    <section id="prezzi" className="section-padding bg-gradient-to-b from-slate-950 to-purple-950">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 mb-6">
            <Crown size={16} className="text-purple-400" />
            <span className="text-sm text-purple-200">Confronto Oggettivo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">Profilo Autorevole</span> vs Alternatives
          </h2>
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
          <div className="glass rounded-2xl p-6 min-w-[800px]">
            <div className="grid grid-cols-4 gap-4">
              {/* Header */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">Caratteristiche</h3>
              </div>
              <div className="p-4 text-center">
                <motion.div
                  className="bg-gradient-to-br from-blue-500 to-green-400 rounded-xl p-4 relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <Crown size={20} className="text-white mx-auto mb-2" />
                  <h3 className="text-white font-bold">Profilo Autorevole</h3>
                  <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    MIGLIORE
                  </div>
                </motion.div>
              </div>
              <div className="p-4 text-center">
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-gray-300 font-semibold">Agenzie Tradizionali</h3>
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <h3 className="text-gray-300 font-semibold">Freelancer Generici</h3>
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
                  
                  <div className="p-4 border-t border-gray-700/50 text-center">
                    {item.profiloAutorevole === true ? (
                      <Check size={20} className="text-green-400 mx-auto" />
                    ) : item.profiloAutorevole === false ? (
                      <X size={20} className="text-red-400 mx-auto" />
                    ) : (
                      <span className="text-green-400 font-semibold">{item.profiloAutorevole}</span>
                    )}
                  </div>
                  
                  <div className="p-4 border-t border-gray-700/50 text-center">
                    {item.competitors === true ? (
                      <Check size={20} className="text-green-400 mx-auto" />
                    ) : item.competitors === false ? (
                      <X size={20} className="text-red-400 mx-auto" />
                    ) : (
                      <span className="text-gray-400 text-sm">{item.competitors}</span>
                    )}
                  </div>
                  
                  <div className="p-4 border-t border-gray-700/50 text-center">
                    {item.freelancer === true ? (
                      <Check size={20} className="text-green-400 mx-auto" />
                    ) : item.freelancer === false ? (
                      <X size={20} className="text-red-400 mx-auto" />
                    ) : (
                      <span className="text-gray-400 text-sm">{item.freelancer}</span>
                    )}
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
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border-2 border-green-400/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              💡 La scelta è chiara
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Con Profilo Autorevole ottieni il massimo valore al prezzo più competitivo, 
              con la garanzia di risultati che nessun altro può offrire.
            </p>
            <motion.button
              className="btn-primary px-8 py-3 rounded-full font-semibold text-white transform-gpu transition-all duration-200 hover:scale-105 hover:shadow-[0_10px_26px_rgba(255,255,255,0.25)]"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 26px rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#cta');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Scegli Profilo Autorevole Ora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}