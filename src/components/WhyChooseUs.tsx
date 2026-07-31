"use client"

import { motion } from "framer-motion"
import GradientButton from '@/components/ui/GradientButton'
import { useContactPopup } from '@/contexts/ContactPopupContext'

export function WhyChooseUs() {
  const { openPopup } = useContactPopup()

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: '#f5f5f5' }}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(circle at 20% 80%, #FFFFFF 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FFFFFF 0%, transparent 50%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Sezione "Cosa fa di diverso Profilo Autorevole per te" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 scroll-mt-24"
        >
          <h3 id="perche-noi" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-left md:text-center">
            Cosa fa di diverso <span style={{ color: '#000000' }}>Profilo Autorevole</span> per te
          </h3>
          <p className="text-lg max-w-3xl md:mx-auto text-left md:text-center leading-relaxed mb-12" style={{ color: '#555555' }}>
            Ogni punto risponde a un problema che hai già vissuto.
          </p>
        </motion.div>

        {/* Grid dei 6 motivi */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Il tuo settore, studiato a fondo",
              description: "Studiamo il tuo mercato, i tuoi competitor e il linguaggio dei tuoi clienti prima di scrivere una riga.",
              icon: "🎯"
            },
            {
              number: "02", 
              title: "Contenuti scritti per te",
              description: "Ogni contenuto è scritto per il tuo settore, nella lingua di chi deve sceglierti. Niente template generici.",
              icon: "📞"
            },
            {
              number: "03",
              title: "Costanza garantita",
              description: "3 contenuti a settimana, engagement gestito, ottimizzazione continua. Mai più settimane di silenzio.",
              icon: "📊"
            },
            {
              number: "04",
              title: "Nessun vincolo contrattuale",
              description: "Interrompi quando vuoi. Crediamo nel valore di quello che facciamo, non nei vincoli.",
              icon: "🔓"
            },
            {
              number: "05",
              title: "LinkedIn è il nostro unico mestiere",
              description: "Non facciamo un po di tutto. Ci concentriamo su una sola piattaforma e la facciamo funzionare.",
              icon: "🔄"
            },
            {
              number: "06",
              title: "Consulente dedicato",
              description: "2 call a settimana col tuo consulente per domande, strategia e aggiornamenti. Non sei mai solo.",
              icon: "✅"
            }
          ].map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded p-8"
              style={{ 
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.1)'
              }}
            >
              {/* Numero grande semi-trasparente dietro il testo */}
              <div 
                className="absolute top-4 right-4 text-8xl font-black opacity-[0.08] select-none"
                style={{ color: '#000000' }}
              >
                {reason.number}
              </div>
              
              {/* Contenuto principale */}
              <div className="relative z-10">
                {/* Titolo bianco italic */}
                <h3 className="text-[26px] font-bold italic mb-4 leading-tight text-neutral-900">
                  {reason.title}
                </h3>
                
                {/* Descrizione grigia */}
                <p className="text-[15px] leading-relaxed" style={{ color: '#555555' }}>
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
            className="inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4 text-base sm:text-base md:text-lg font-semibold rounded relative overflow-hidden w-full sm:w-auto min-w-[280px] h-14"
            style={{ 
              background: 'linear-gradient(135deg, #FFFFFF 0%, #e3e3e3 100%)',
              color: '#ffffff',
              boxShadow: 'none',
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
