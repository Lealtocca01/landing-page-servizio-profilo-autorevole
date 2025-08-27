'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Linkedin, TrendingUp } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Consulente Marketing Digitale",
      company: "RossiConsulting",
      testimonial: "In 2 mesi ho raddoppiato i contatti qualificati. Il team di Profilo Autorevole ha trasformato il mio LinkedIn da profilo dormiente a macchina di lead generation. Investimento che si è ripagato dopo sole 3 settimane.",
      image: "MR",
      metrics: "+180% contatti qualificati",
      linkedin: "linkedin.com/in/marcorossi-marketing"
    },
    {
      name: "Giulia Bianchi",
      role: "Architetto Senior",
      company: "Studio Bianchi & Associati",
      testimonial: "Non pensavo che LinkedIn potesse funzionare per l'architettura. Mi sbagliavo completamente! Ora ricevo 4-5 richieste di progetti al mese direttamente dalla piattaforma. Il ROI è stato incredibile.",
      image: "GB",
      metrics: "+300% visibilità profilo",
      linkedin: "linkedin.com/in/giuliabianchi-architect"
    }
  ];

  const stats = [
    { number: "500+", label: "Professionisti trasformati", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "95%", label: "Tasso di successo", icon: <Star className="w-6 h-6" /> },
    { number: "30", label: "Giorni per i primi risultati", icon: <Linkedin className="w-6 h-6" /> }
  ];

  return (
    <section id="testimonianze" className="section-padding bg-gradient-to-b from-blue-950 to-slate-950">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
            <Star size={16} className="text-yellow-400" />
            <span className="text-sm text-yellow-200">Testimonianze Reali</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quello che dicono i nostri clienti
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Risultati concreti, testimonianze verificate, ROI documentato. Ecco perché oltre 500 professionisti si fidano di noi.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="glass rounded-2xl p-8 card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl p-8 h-full card-hover relative overflow-hidden">
                {/* Glassmorphism background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                
                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="absolute -top-2 -left-2 text-blue-400/30">
                    <Quote size={40} />
                  </div>

                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-200 mb-6 leading-relaxed font-medium">
                    &quot;{testimonial.testimonial}&quot;
                  </p>

                  {/* Metrics */}
                  <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-3 mb-6">
                    <div className="text-green-400 font-semibold text-sm">
                      📈 Risultato: {testimonial.metrics}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                      <div className="text-blue-400 text-xs mt-1 flex items-center space-x-1">
                        <Linkedin size={12} />
                        <span>{testimonial.linkedin}</span>
                      </div>
                    </div>
                  </div>
                </div>
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
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              🎯 Pronto a ottenere gli stessi risultati?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Marco e Giulia sono solo 2 dei nostri 500+ clienti soddisfatti. 
              La prossima storia di successo potresti essere tu.
            </p>
            <motion.button
              className="btn-primary px-8 py-3 rounded-lg font-semibold text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#prezzi');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Scopri i Prezzi
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}