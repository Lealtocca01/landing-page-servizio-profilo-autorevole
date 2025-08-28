'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, BarChart3 } from 'lucide-react';
import { ProgressBar } from './ProgressBar';

export function HowItWorksNew() {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8" />,
      title: "Analisi del Profilo",
      description: "Analizziamo il tuo profilo attuale, il tuo settore e i tuoi competitor per identificare le opportunità di crescita e definire la strategia perfetta.",
      duration: "Giorno 1-3"
    },
    {
      number: "02", 
      icon: <PenTool className="w-8 h-8" />,
      title: "Ottimizzazione Completa",
      description: "Riscriviamo il tuo profilo LinkedIn con copywriting professionale, ottimizziamo le parole chiave e creiamo un'identità visiva coerente.",
      duration: "Giorno 4-10"
    },
    {
      number: "03",
      icon: <Rocket className="w-8 h-8" />,
      title: "Strategia di Contenuto",
      description: "Creiamo e pubblichiamo contenuti di valore che posizionano te come leader del settore e attirano il tuo pubblico ideale.",
      duration: "Continuo"
    },
    {
      number: "04",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Monitoring & Ottimizzazione",
      description: "Monitoriamo le performance, analizziamo i dati e ottimizziamo continuamente la strategia per massimizzare i risultati.",
      duration: "Mensile"
    }
  ];

  return (
    <section id="come-funziona" className="section-padding bg-gradient-to-b from-red-950 to-slate-950">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6">
            <Rocket size={16} className="text-green-400" />
            <span className="text-sm text-green-200">Metodologia Testata</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Come funziona <span className="text-gradient">Profilo Autorevole</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Il nostro processo in 4 fasi trasforma il tuo LinkedIn in uno strumento di business che genera risultati concreti.
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Bar Container */}
          <div className="hidden lg:flex justify-center mb-16">
            <div className="relative">
              {/* Progress Bar */}
              <ProgressBar 
                backgroundColor="rgba(59, 130, 246, 0.3)"
                fillColor="rgb(119, 11, 244)"
                height={400}
                className="mx-auto"
              />
              
              {/* Step Indicators on Progress Bar */}
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-green-400 rounded-full border-4 border-white shadow-lg"
                  style={{
                    top: `${(index / (steps.length - 1)) * 100}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content Card */}
                <motion.div
                  className="glass rounded-2xl p-8 card-hover h-full"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-400 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-blue-400 font-semibold">{step.duration}</div>
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🎯 Risultati garantiti in 30 giorni
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Il nostro metodo è testato su oltre 500 professionisti e ha un tasso di successo del 95%. 
              Se non vedi risultati concreti entro 30 giorni, ti rimborsiamo completamente.
            </p>
            <motion.button
              className="btn-primary px-8 py-3 rounded-full font-semibold text-white transform-gpu transition-all duration-200 hover:scale-105 hover:shadow-[0_10px_26px_rgba(255,255,255,0.25)]"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 26px rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#benefici');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Scopri i Benefici
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}