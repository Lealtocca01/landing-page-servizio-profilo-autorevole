'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Shield, Zap } from 'lucide-react';

export function FinalCTA() {
  const benefits = [
    { icon: <Zap className="w-5 h-5" />, text: "Setup in 48 ore" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Primi risultati in 7 giorni" },
    { icon: <Shield className="w-5 h-5" />, text: "Garanzia 30 giorni" },
    { icon: <Clock className="w-5 h-5" />, text: "Assistenza prioritaria" }
  ];

  const handleCTAClick = () => {
    // In a real implementation, this would redirect to a booking/payment page
    window.open('mailto:info@profiloautorevole.it?subject=Richiesta Profilo Autorevole&body=Ciao, sono interessato al servizio Profilo Autorevole. Vorrei maggiori informazioni.', '_blank');
  };

  return (
    <section id="cta" className="section-padding bg-gradient-to-b from-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ma quanto <span className="text-gradient">costa</span> tutto questo?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Quanto ti costerà costruire la tua presenza digitale e per farti scegliere dai tuoi clienti?
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-3xl p-8 md:p-12 text-center border-2 border-blue-400/20 relative">


            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-2xl text-gray-300 mr-2">Solo</span><span className="text-gradient">€250</span><span className="text-2xl text-gray-400">/mese</span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 font-bold">
            Meno della metà del costo mensile di un dipendente part-time al mese.
            </p>

            {/* Benefits grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white/5 rounded-lg p-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-green-400">
                    {benefit.icon}
                  </div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Main CTA Button */}
            <motion.button
              className="btn-primary px-12 py-5 rounded-xl font-bold text-white text-xl flex items-center space-x-3 mx-auto mb-6 shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(14, 165, 233, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCTAClick}
              animate={{ 
                boxShadow: [
                  "0 10px 30px rgba(14, 165, 233, 0.3)",
                  "0 20px 40px rgba(14, 165, 233, 0.5)", 
                  "0 10px 30px rgba(14, 165, 233, 0.3)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 3, repeat: Infinity },
                scale: { duration: 0.2 }
              }}
            >
              <span>Attiva Profilo Autorevole Oggi</span>
              <ArrowRight size={24} />
            </motion.button>

            <p className="text-sm text-gray-400 mb-6">
              🔒 Nessun contratto vincolante • Cancellazione in qualsiasi momento
            </p>


          </div>
        </motion.div>


      </div>
    </section>
  );
}