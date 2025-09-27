


"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GlassIcons } from '@/components/ui/glass-icons'
import GradientButton from '@/components/ui/GradientButton'
import { User, BarChart3, Calendar, Palette, Send, TrendingUp } from 'lucide-react'
import { useContactPopup } from '@/contexts/ContactPopupContext'

export function HowItWorksNew() {
  const { openPopup } = useContactPopup()

  

  const steps = [
    {
      title: "Analisi e Ottimizzazione Profilo",
      description: "Il tuo profilo LinkedIn è la base di tutto: lo analizziamo, lo ottimizziamo e lo settiamo per comunicare professionalità e autorevolezza fin dal primo sguardo.",
      color: "blue",
      lucideIcon: User
    },
    {
      title: "Studio Mercato e Competitor",
      description: "Studiamo il tuo settore e i tuoi competitor per capire come posizionarti in modo chiaro e distinguerti agli occhi dei tuoi potenziali clienti.",
      color: "purple",
      lucideIcon: BarChart3
    },
    {
      title: "Strategia e Piano Editoriale",
      description: "Creiamo per te una strategia su misura, con un calendario di pubblicazione costante che ti mantiene visibile e ti fa percepire come punto di riferimento nel tuo settore.",
      color: "green",
      lucideIcon: Calendar
    },
    {
      title: "Contenuti e Grafiche Professionali",
      description: "Produciamo testi e grafiche di qualità che trasmettono subito autorevolezza e ti distinguono dai competitor che improvvisano con contenuti amatoriali.",
      color: "orange",
      lucideIcon: Palette
    },
    {
      title: "Pubblicazione e Gestione Engagement",
      description: "Mentre tu segui la tua attività, noi pubblichiamo tre contenuti di qualità ogni settimana che trasformano i curiosi in clienti, facendoti apparire costantemente davanti al tuo pubblico.",
      color: "indigo",
      lucideIcon: Send
    },
    {
      title: "Monitoraggio e Ottimizzazione Continua",
      description: "Analizziamo le performance dei tuoi post, vediamo cosa funziona meglio e ottimizziamo la strategia per migliorare costantemente i risultati.",
      color: "red",
      lucideIcon: TrendingUp
    },
  ]

  // Creo gli items per il GlassIcons component con colore lime consistente
  const glassIconsItems = steps.map((step, index) => ({
    icon: <step.lucideIcon className="w-6 h-6 text-white" />,
    color: 'lime', // Colore consistente lime per tutti gli step
  }))



  return (
    <div className="min-h-screen" style={{ background: '#111936' }}>


      {/* Nuova sezione Benefici */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Titolo principale con immagine */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left lg:text-left space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {/* Layout mobile con distribuzione su più righe */}
                <div className="block md:hidden space-y-2">
                  <div><span className="text-3xl font-normal">Affidati a Profilo Autorevole,</span></div>
                  <div>l&apos;unica agenzia <span style={{ color: '#D3F20F' }}>davvero specializzata</span></div>
                  <div><span className="text-3xl font-normal">nel costruire la tua presenza</span></div>
                  <div><span className="text-3xl font-normal">su LinkedIn.</span></div>
                </div>
                {/* Layout desktop normale */}
                <div className="hidden md:block">
                  Affidati a Profilo Autorevole, l&apos;unica agenzia <span style={{ color: '#D3F20F' }}>davvero specializzata</span> nel costruire la tua presenza su LinkedIn.
                </div>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed" style={{ color: '#C9D1D9' }}>
                <span className="font-bold">Hai capito bene:</span> mentre le altre agenzie fanno &quot;un po&apos; di tutto&quot;, noi ci concentriamo su una sola cosa e la facciamo meglio di chiunque altro.<br /><br />
                <em>Portandoti online in soli 7 giorni.</em>
              </p>
              
              {/* CTA Button */}
              <div className="mt-8 flex justify-start">
                <GradientButton onClick={() => {
                  console.log('Button clicked - opening consultation popup');
                  openPopup('consultation');
                }}>
                  <span>Richiedi ora la tua consulenza gratuita</span>
                </GradientButton>
              </div>
            </div>


            {/* Right side - Image */}
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ 
                  background: '#111936'
                }}
              >
                {/* Immagine di sfondo */}
                <div 
                  className="w-full h-96 lg:h-[28rem] bg-cover bg-center lg:bg-contain"
                  style={{
                    backgroundImage: 'url("/images/7gg.png")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Sezione How It Works - Titolo principale */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pt-4 pb-16"
      >
        <div className="text-left md:text-center mb-16">
          {/* Preheadline */}
          <p className="text-lg font-semibold mb-4" style={{ color: '#C9D1D9' }}>
            Ma ora ti starai chiedendo..
          </p>
          
          {/* Headline principale */}
          <h2 id="come-funziona" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Come funziona nel <span style={{ color: '#D3F20F' }}>pratico</span>?
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#C9D1D9' }}>
            Ecco cosa farà Profilo Autorevole per te:
          </p>
        </div>
      </motion.div>

      {/* Demo content */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-12">

        <div className="space-y-8">
          <div className="relative max-w-4xl mx-auto">
            {/* Progress bar centrale fissa - Desktop */}
            <div 
              className="absolute hidden lg:block"
              style={{ 
                left: '50%',
                top: '1.5rem',
                transform: 'translateX(-50%)',
                width: '2px',
                height: `${(steps.length + 3) * 9 + 12}rem`
              }}
            >
              {/* Barra grigia di background */}
              <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
              
              {/* Barra lime fissa (sempre al 100%) */}
              <div className="absolute inset-x-0 top-0 rounded-full h-full" style={{ background: '#D3F20F' }}></div>
            </div>

            {/* Progress bar centrale fissa - Mobile */}
            <div 
              className="absolute block lg:hidden"
              style={{ 
                left: '50%',
                top: '1.5rem',
                transform: 'translateX(-50%)',
                width: '2px',
                height: `${(steps.length + 3) * 11 + 55}rem`
              }}
            >
              {/* Barra grigia di background */}
              <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
              
              {/* Barra lime fissa (sempre al 100%) */}
              <div className="absolute inset-x-0 top-0 rounded-full h-full" style={{ background: '#D3F20F' }}></div>
            </div>

            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-center relative mb-8 last:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Card a sinistra per numeri pari */}
                {i % 2 === 0 && (
                  <div className="w-full flex justify-start items-center gap-6">
                    <motion.div 
                      className="w-7/12"
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Glass Icon sopra la card, centrata */}
                      <div className="flex justify-center mb-4">
                        <GlassIcons 
                          items={[glassIconsItems[i]]} 
                          className="!grid-cols-1 !gap-0 !py-0 scale-75"
                        />
                      </div>
                      {/* Step box con nuovo design */}
                      <div 
                        className="rounded-lg px-6 py-6"
                        style={{ 
                          background: '#1A2246',
                          border: '1px solid #D3F20F'
                        }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#C9D1D9' }}>{step.description}</p>
                      </div>
                    </motion.div>
                    {/* Numero badge circolare lime */}
                    <motion.div 
                      className="flex-shrink-0 select-none"
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                        style={{ 
                          background: '#D3F20F',
                          color: '#0B1020'
                        }}
                      >
                        {i + 1}
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Card a destra per numeri dispari */}
                {i % 2 === 1 && (
                  <div className="w-full flex justify-end items-center gap-6">
                    {/* Numero badge circolare lime */}
                    <motion.div 
                      className="flex-shrink-0 select-none"
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                        style={{ 
                          background: '#D3F20F',
                          color: '#0B1020'
                        }}
                      >
                        {i + 1}
                      </div>
                    </motion.div>
                    <motion.div 
                      className="w-7/12"
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {/* Glass Icon sopra la card, centrata */}
                      <div className="flex justify-center mb-4">
                        <GlassIcons 
                          items={[glassIconsItems[i]]} 
                          className="!grid-cols-1 !gap-0 !py-0 scale-75"
                        />
                      </div>
                      {/* Step box con nuovo design */}
                      <div 
                        className="rounded-lg px-6 py-6"
                        style={{ 
                          background: '#1A2246',
                          border: '1px solid #D3F20F'
                        }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#C9D1D9' }}>{step.description}</p>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}