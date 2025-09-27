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
              title: "Specializzati su LinkedIn",
              description: "Non facciamo \"un po' di tutto\": viviamo e respiriamo LinkedIn, ed è per questo che sappiamo come farlo funzionare davvero.",
              icon: "🎯"
            },
            {
              number: "02", 
              title: "Contatto diretto e costante",
              description: "Non ti lasciamo mai solo: ci sentiamo regolarmente per guidarti, aggiornarti e adattare la strategia alle tue esigenze.",
              icon: "📞"
            },
            {
              number: "03",
              title: "Monitoraggio e ottimizzazione continua",
              description: "Non ci limitiamo a pubblicare. Analizziamo ogni risultato e ottimizziamo in tempo reale per far crescere le performance.",
              icon: "📊"
            },
            {
              number: "04",
              title: "Nessun vincolo",
              description: "Puoi interrompere quando vuoi. Crediamo nel valore del risultato, non nei contratti rigidi.",
              icon: "🔓"
            },
            {
              number: "05",
              title: "Supporto a 360°",
              description: "Non solo contenuti: ti forniamo anche script e approcci concreti per contattare i lead e trasformarli in clienti.",
              icon: "🔄"
            },
            {
              number: "06",
              title: "Selezione iniziale",
              description: "Non tutte le attività sono adatte. Prima di partire facciamo una call di valutazione: se il percorso non ha senso per te, saremo i primi a dirtelo.",
              icon: "✅"
            }
          ].map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-8"
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
        
        {/* CTA Button sotto la sezione - CENTRATO MOBILE, SINISTRA DESKTOP */}
        <div className="mt-24 mb-24 flex justify-center lg:justify-start px-4 sm:px-0">
          <button
            onClick={() => {
              console.log('CONSULTATION BUTTON CLICKED!');
              openPopup('consultation');
            }}
            className="inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4 text-base sm:text-base md:text-lg font-semibold rounded-xl relative overflow-hidden w-full sm:w-auto min-w-[280px] h-14"
            style={{ 
              background: 'linear-gradient(135deg, #D3F20F 0%, #A8D83A 100%)',
              color: '#0B1020',
              boxShadow: '0 4px 14px 0 rgba(211, 242, 15, 0.2)',
              cursor: 'pointer',
              zIndex: 99999,
              position: 'relative',
              fontSize: '1.1em'
            }}
          >
            <span className="relative z-10 flex items-center justify-center w-full whitespace-nowrap">
              Richiedi ora la tua consulenza gratuita
            </span>
          </button>
        </div>

      </div>
    </section>
  )
}
