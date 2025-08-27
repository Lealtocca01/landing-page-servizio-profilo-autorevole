'use client';

import { motion } from 'framer-motion';
import { Trophy, Shield, Target, Calendar } from 'lucide-react';

export function WeeklyBenefits() {
  const benefits = [
    {
      week: "Settimana 1",
      icon: <Target className="w-8 h-8" />,
      title: "Competenza Riconosciuta",
      description: "I tuoi contenuti iniziano a posizionarti come esperto del settore",
      metrics: [
        "Aumento delle visualizzazioni del 300%",
        "Prime richieste di connessione qualificate",
        "Commenti da potenziali clienti"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      week: "Settimana 2", 
      icon: <Shield className="w-8 h-8" />,
      title: "Fiducia Costruita",
      description: "La tua audience inizia a fidarsi della tua expertise e autorevolezza",
      metrics: [
        "Crescita dei follower del 150%",
        "Condivisioni organiche dei tuoi post",
        "Prime menzioni da altri professionisti"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      week: "Settimana 3",
      icon: <Trophy className="w-8 h-8" />,
      title: "Opportunità Concrete",
      description: "Inizi a ricevere contatti qualificati e opportunità di business reali",
      metrics: [
        "5-10 messaggi da prospect qualificati",
        "Inviti a eventi e collaborazioni", 
        "Prime richieste di consulenza"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="benefici" className="section-padding bg-gradient-to-b from-slate-950 to-blue-950">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 mb-6">
            <Calendar size={16} className="text-green-400" />
            <span className="text-sm text-green-200">Risultati Settimana per Settimana</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            I tuoi progressi con <span className="text-gradient">Profilo Autorevole</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ecco cosa succede nelle prime 3 settimane quando attivi il nostro servizio. I risultati sono misurabili e concreti.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl p-8 h-full card-hover relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white`}>
                      {benefit.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 font-semibold">{benefit.week}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{benefit.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-sm">Metriche concrete:</h4>
                    {benefit.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${benefit.color} rounded-full mt-2 flex-shrink-0`} />
                        <p className="text-gray-300 text-sm">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connection line */}
              {index < benefits.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <motion.div
                    className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-green-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: (index + 1) * 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🚀 E questo è solo l&apos;inizio...
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Dopo il primo mese, i risultati si moltiplicano esponenzialmente. I nostri clienti vedono in media:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">10x</div>
                <div className="text-sm text-gray-300">Visibilità del profilo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">5-15</div>
                <div className="text-sm text-gray-300">Lead qualificati/mese</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">30%</div>
                <div className="text-sm text-gray-300">Aumento fatturato</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}