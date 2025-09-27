"use client"

import { motion } from "framer-motion"
import GradientButton from '@/components/ui/GradientButton'
import { useContactPopup } from '@/contexts/ContactPopupContext'

export function WhyChooseUs() {
  const { openPopup } = useContactPopup()

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: '#111936' }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(circle at 20% 80%, #D3F20F 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D3F20F 0%, transparent 50%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Sezione "6 motivi per cui Profilo Autorevole è migliore" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 scroll-mt-24"
        >
          <h3 id="perche-noi" className="text-3xl md:text-4xl font-bold text-white mb-4 text-left md:text-center">
            6 motivi per cui <span style={{ color: '#D3F20F' }}>Profilo Autorevole</span> è migliore
          </h3>
          <p className="text-lg max-w-3xl md:mx-auto text-left md:text-center leading-relaxed mb-12" style={{ color: '#C9D1D9' }}>
            Di qualsiasi altra alternativa:
          </p>
        </motion.div>

        {/* Grid dei 6 motivi */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Contatto diretto costante",
              description: "A differenza di chi parla con te solo quando c'è da pagare e poi sparisce, noi ci teniamo in contatto costante con te ben 2 volte a settimana per monitorare i tuoi progressi e ottimizzare la strategia.",
              icon: "📞"
            },
            {
              number: "02", 
              title: "Spiegazioni precise e dettagliate",
              description: "Non ci limitiamo a darti una visione generale del percorso, ogni singolo post e strategia viene sviscerato al massimo per garantirti risultati concreti.",
              icon: "📋"
            },
            {
              number: "03",
              title: "Tutto in 1",
              description: "Con Profilo Autorevole non devi preoccuparti di controllare 10 fogli o file diversi, hai tutto quello che ti serve in un unico posto per gestire la tua presenza LinkedIn.",
              icon: "📁"
            },
            {
              number: "04",
              title: "Monitoraggio e controllo dei progressi",
              description: "I competitor spesso si dimenticano di verificare i progressi. Noi sappiamo che per ottenere risultati non basta guardare solo la situazione di partenza, quindi monitoriamo costantemente i tuoi risultati.",
              icon: "📊"
            },
            {
              number: "05",
              title: "Flessibilità temporale",
              description: "I nostri programmi di gestione LinkedIn sono studiati per essere flessibili e permetterti di ottenere risultati anche se lavori tanto o sei molto impegnato in settimana.",
              icon: "⏰"
            },
            {
              number: "06",
              title: "Niente rischi",
              description: "Con i classici competitor, una volta pagato, i tuoi soldi sono andati e hai tu tutto il rischio. Invece con la nostra garanzia sei sicuro che otterrai risultati nei primi mesi, altrimenti ti rimborsiamo.",
              icon: "🛡️"
            }
          ].map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-8 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(211,242,15,0.2)]"
              style={{ 
                background: '#0B1020',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {/* Numero grande semi-trasparente dietro il testo */}
              <div 
                className="absolute top-4 right-4 text-8xl font-black opacity-[0.08] select-none"
                style={{ color: '#D3F20F' }}
              >
                {reason.number}
              </div>
              
              {/* Contenuto principale */}
              <div className="relative z-10">
                {/* Titolo bianco italic */}
                <h3 className="text-[26px] font-bold italic mb-4 leading-tight text-white">
                  {reason.title}
                </h3>
                
                {/* Descrizione grigia */}
                <p className="text-[15px] leading-relaxed" style={{ color: '#C9D1D9' }}>
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button sotto la sezione */}
        <div className="mt-16 mb-16 flex justify-center lg:justify-start">
          <GradientButton onClick={openPopup}>
            <span>Richiedi ora la tua consulenza gratuita</span>
          </GradientButton>
        </div>
      </div>
    </section>
  )
}
