


"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Tilt } from '@/components/ui/tilt'
import { Spotlight } from '@/components/ui/spotlight'
import { GlassIcons } from '@/components/ui/glass-icons'
import GradientButton from '@/components/ui/GradientButton'
import { User, BarChart3, Calendar, Palette, Send, TrendingUp } from 'lucide-react'
import { useContactPopup } from '@/contexts/ContactPopupContext'

export function HowItWorksNew() {
  const { openPopup } = useContactPopup()

  const benefits = [
    {
      title: "Posizionamento Chiaro",
      description: "Il tuo profilo diventa il biglietto da visita digitale che ti distingue nel tuo settore.",
      icon: "🎯",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Reputazione Solida",
      description: "Costruiamo autorevolezza e credibilità con contenuti professionali e strategici.",
      icon: "🏛️",
      color: "from-blue-500 to-slate-500"
    },
    {
      title: "Massima Visibilità",
      description: "Ti rendiamo visibile ai decision maker e potenziali clienti giusti, non a chiunque.",
      icon: "🔍",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Autorità nel Settore",
      description: "Ti posizioniamo come riferimento credibile e influente nella tua nicchia.",
      icon: "📢",
      color: "from-indigo-500 to-sky-500"
    },
    {
      title: "Nuove Opportunità",
      description: "Apri le porte a clienti, collaborazioni e partnership di valore grazie a LinkedIn.",
      icon: "💼",
      color: "from-orange-500 to-red-500"
    }
  ];
  

  const steps = [
    {
      title: "Analisi e Ottimizzazione Profilo",
      description: "Il tuo profilo LinkedIn è la base di tutto: lo analizziamo, lo ottimizziamo e lo settiamo per comunicare professionalità e autorevolezza già dal primo sguardo.",
      color: "blue",
      lucideIcon: User
    },
    {
      title: "Studio Mercato e Competitor",
      description: "Studiamo il tuo settore e i tuoi competitor per capire come posizionarti in modo chiaro e distinguerti agli occhi dei potenziali clienti.",
      color: "purple",
      lucideIcon: BarChart3
    },
    {
      title: "Strategia e Piano Editoriale",
      description: "Creiamo per te una strategia su misura, con un calendario di pubblicazione costante che ti mantiene visibile e ti fa percepire come punto di riferimento.",
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

  // Creo gli items per il GlassIcons component
  const glassIconsItems = steps.map((step, index) => ({
    icon: <step.lucideIcon className="w-6 h-6 text-white" />,
    color: step.color,
    label: `Step ${index + 1}`,
  }))



  return (
    <div id="come-funziona" className="min-h-screen" style={{ background: '#040124' }}>


      {/* Nuova sezione Benefici */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Titolo principale centrato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            {/* Layout mobile con distribuzione su più righe */}
            <div className="block md:hidden space-y-2">
              <div><span className="text-3xl font-normal">Affidati a</span> <span className="text-gradient text-3xl font-normal">Profilo Autorevole</span><span className="text-3xl font-normal">,</span></div>
              <div>l&apos;unica agenzia <span className="text-gradient">davvero specializzata</span></div>
              <div><span className="text-3xl font-normal">nel costruire la tua presenza</span></div>
              <div><span className="text-3xl font-normal">su LinkedIn.</span></div>
            </div>
            {/* Layout desktop normale */}
            <div className="hidden md:block">
              Affidati a <span className="text-gradient">Profilo Autorevole</span>, l&apos;unica agenzia <span className="text-gradient">davvero specializzata</span> nel costruire la tua presenza su LinkedIn.
            </div>
          </h2>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl text-left">
                <span className="font-bold">Hai capito bene:</span> mentre le altre agenzie fanno &quot;un po&apos; di tutto&quot;, noi ci concentriamo su una sola cosa e la facciamo meglio di chiunque altro.
              </p>
              
              {/* CTA Button aggiuntivo */}
              <div className="mt-8 flex justify-center lg:justify-start">
                <GradientButton onClick={openPopup}>
                  <span>Candidati ora per Profilo Autorevole</span>
                </GradientButton>
              </div>
        </motion.div>

        {/* Sezione "Perché affidarti a noi?" allineata a sinistra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-1"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-0 relative">
            Perché affidarti a noi?
            <div className="absolute bottom-0 left-0 w-72 h-0.5 bg-white rounded-full"></div>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-1">
            Abbiamo trasformato decine di profili professionali e aziendali!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Colonna sinistra - Bullet list dei benefici */}
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                {/* Bullet point colorato */}
                <div className="w-3 h-3 rounded-full mt-3 flex-shrink-0 bg-green-400" />
                
                {/* Contenuto del beneficio */}
                <div className="flex-1">
                  <h3 className="text-lg font-black mb-1 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonna destra - Componente Tilt con Spotlight */}
          <div className="relative -mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background decorativo con glow luminoso intenso */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl rotate-3 shadow-[0_0_80px_rgba(59,130,246,0.6),0_0_120px_rgba(59,130,246,0.4),0_0_160px_rgba(59,130,246,0.2)]" />
              
              {/* Container principale con Tilt */}
              <Tilt
                rotationFactor={8}
                isRevese
                style={{
                  transformOrigin: 'center center',
                }}
                springOptions={{
                  stiffness: 26.7,
                  damping: 4.1,
                  mass: 0.2,
                }}
                className='group relative rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden'
              >
                <Spotlight
                  className='z-10 from-blue-400/50 via-blue-300/20 to-purple-400/10 blur-2xl'
                  size={300}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                />
                
                {/* Contenuto della card - Immagine reale */}
                <div className="relative z-20 p-0">
                  <Image 
                    src="/images/linkedin-devices.jpg" 
                    alt="Laptop e smartphone che mostrano profili LinkedIn con icone neon fluttuanti"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
        
        {/* CTA Button sotto la toggle list */}
        <div className="mt-16 mb-16 flex justify-center lg:justify-start">
          <GradientButton onClick={openPopup}>
            <span>Candidati ora per Profilo Autorevole</span>
          </GradientButton>
        </div>
      </div>

      {/* Demo content */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">Ma come procederemo nel pratico?</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Un processo in 6 step strutturato e progressivo per il tuo successo
          </p>
        </div>

        <div className="space-y-12">
          <div className="relative max-w-4xl mx-auto">
            {/* Progress bar centrale fissa - Desktop */}
            <div 
              className="absolute hidden lg:block"
              style={{ 
                left: '50%',
                top: '1.5rem',
                transform: 'translateX(-50%)',
                width: '2px',
                height: `${steps.length * 12 + 21.5}rem`
              }}
            >
              {/* Barra grigia di background */}
              <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
              
              {/* Barra bianca fissa (sempre al 100%) */}
              <div className="absolute inset-x-0 top-0 bg-white rounded-full h-full"></div>
            </div>

            {/* Progress bar centrale fissa - Mobile */}
            <div 
              className="absolute block lg:hidden"
              style={{ 
                left: '50%',
                top: '1.5rem',
                transform: 'translateX(-50%)',
                width: '2px',
                height: `${steps.length * 12 + 70}rem`
              }}
            >
              {/* Barra grigia di background */}
              <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
              
              {/* Barra bianca fissa (sempre al 100%) */}
              <div className="absolute inset-x-0 top-0 bg-white rounded-full h-full"></div>
            </div>

            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-center relative mb-12 last:mb-0"
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
                      <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg shadow-[0_8px_25px_rgba(0,0,0,0.15),0_4px_10px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)] px-8 py-5 hover:shadow-[0_12px_35px_rgba(59,130,246,0.4),0_6px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300">
                        <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-100 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                    {/* Numero a destra della card */}
                    <motion.div 
                      className="text-6xl font-black text-white flex-shrink-0 select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] filter" 
                      style={{textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3), 0 0 35px rgba(255,255,255,0.15)'}}
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {i + 1}
                    </motion.div>
                  </div>
                )}

                {/* Card a destra per numeri dispari */}
                {i % 2 === 1 && (
                  <div className="w-full flex justify-end items-center gap-6">
                    {/* Numero a sinistra della card */}
                    <motion.div 
                      className="text-6xl font-black text-white flex-shrink-0 select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] filter" 
                      style={{textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3), 0 0 35px rgba(255,255,255,0.15)'}}
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {i + 1}
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
                      <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg shadow-[0_8px_25px_rgba(0,0,0,0.15),0_4px_10px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)] px-8 py-5 hover:shadow-[0_12px_35px_rgba(59,130,246,0.4),0_6px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300">
                        <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-100 leading-relaxed">{step.description}</p>
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