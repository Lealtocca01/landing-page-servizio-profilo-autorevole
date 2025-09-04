'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, TrendingUp, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Card } from '@/components/ui/card';
import { Tilt } from '@/components/ui/tilt';
import GradientButton from '@/components/ui/GradientButton';
import TextType from './TextType';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function Hero() {
  const { openPopup } = useContactPopup();



  const stickyContent = [
    {
      title: "Fare da soli",
      subtitle: "Non hai tempo e competenze = INUTILE"
    },
    {
      title: "Delegare",
      subtitle: "Magari a qualche agenzia che ha scoperto Linkedln ieri e infatti ti fa firmare un bel contrattone vincolante"
    },
    {
      title: "Ignorare LinkedIn",
      subtitle: "L'errore più grande nel 2025"
    },
    {
      title: "Esiste però un alternativa",
      subtitle: "Valida"
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div className="container-custom relative z-10 px-8 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-start min-h-[70vh] lg:min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-left w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-4 lg:mb-6 leading-none sm:leading-tight lg:leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Prima frase - ora più piccola e senza bold */}
              <span className="text-4xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal block mb-2">
                Sei un <span className="text-gradient">professionista</span> nel tuo settore?
              </span>
              {/* Seconda frase con effetto typing */}
              <div className="text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white">
                <TextType 
                  text={["Nel 2025 non puoi non essere su LinkedIn!"]}
                  as="span"
                  typingSpeed={60}
                  deletingSpeed={40}
                  pauseDuration={2500}
                  initialDelay={1000}
                  showCursor={true}
                  cursorCharacter="|"
                  cursorClassName="text-gradient"
                  cursorBlinkDuration={0.8}
                  className=""
                  textColors={["#ffffff"]}
                  variableSpeed={{
                    min: 40,
                    max: 80
                  }}
                  loop={false}
                  onSentenceComplete={(text, index) => {
                    console.log(`Completed: ${text} (${index})`);
                  }}
                />
              </div>
            </motion.h1>

                         <motion.div
               className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl text-gray-300 mb-6 lg:mb-8 leading-snug lg:leading-loose max-w-4xl"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
               Con <span className="text-gradient font-semibold">Profilo Autorevole</span> trasformiamo il tuo LinkedIn nel{' '}
               <span className="text-white font-semibold">biglietto da visita che attrae clienti portandoti online </span><span className="text-gradient font-semibold underline decoration-white decoration-2">in soli 7 giorni</span>.
             </motion.div>

             {/* CTA Button - Hidden on mobile, shown on desktop after subtitle */}
             <motion.div
               className="hidden lg:flex justify-start mt-16 -ml-2"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
             >
               <GradientButton onClick={openPopup}>
                 <span>Candidati ora per Profilo Autorevole</span>
               </GradientButton>
             </motion.div>
            </motion.div>

          {/* Right Side - BusinessStatsGraphic */}
          <motion.div
            className="w-full lg:flex lg:justify-end -mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Tilt
              rotationFactor={8}
              isRevese
              style={{
                transformOrigin: 'center center',
                width: '100%',
              }}
              springOptions={{
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
              }}
              className="w-full"
            >
              <BusinessStatsGraphic />
            </Tilt>
          </motion.div>
        </div>

        {/* CTA Button - Mobile only, positioned after image */}
        <motion.div
          className="flex lg:hidden justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <GradientButton onClick={openPopup}>
            <span>Candidati ora per Profilo Autorevole</span>
          </GradientButton>
        </motion.div>

        {/* Pain Amplification Section - Integrated into Hero */}
        <div className="mt-16 lg:mt-4">
                      <motion.div
              className="text-left md:text-center mb-8 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                                                   <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-4 lg:mb-6 -mt-4 lg:-mt-8">
             <span className="text-white">Sei già in </span><span className="text-gradient">ritardo!</span>
             </h2>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-0 md:mx-auto">
            Quanti potenziali clienti hai già <span className="font-bold text-white">perso</span>, solo perché qualcun&apos;altro sembrava <span className="font-bold text-white">&ldquo;più professionale&rdquo;</span> e <span className="font-bold text-white">&ldquo;più affidabile&rdquo;</span>?
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Left side - Text content */}
            <div className="lg:w-1/2">
              <motion.div
                className="text-left mb-8 lg:mb-0"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                  <motion.h3 
                    className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl font-black text-white mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                  La verità è che senza una presenza curata, la tua attività verrà percepita <span className="text-red-400">di basso livello</span>.
                  </motion.h3>
                  <div className="space-y-5 mb-8">
                    {[
                      { text: "Ogni minuto che passi senza una strategia LinkedIn mirata è un'opportunità persa.", color: "bg-red-400" },
                      { text: "Perchè chi cerca un professionista come te ti giudica e ti sceglie da come ti presenti online. E se il tuo LinkedIn è fermo o vuoto non possono ne conoscerti ne fidarsi di te!", color: "bg-red-400" },
                      { text: "Di conseguenza, andranno dai tuoi concorrenti, anche se tu sei più capace di loro..", color: "bg-red-400" },
                      { text: "L'unico modo che hai per essere percepito come dovresti e non restare tagliato fuori è digitalizzare la tua presenza con Linkedln.", color: "bg-green-400" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, x: -30, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.2 + (index * 0.1),
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 120
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.div 
                          className={`w-1 h-5 ${item.color} rounded-full flex-shrink-0 mt-1.5`}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 1.4 + (index * 0.1),
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                        />
                        <p className="text-xl sm:text-2xl lg:text-lg text-gray-300 leading-relaxed">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  {/* Mobile version - Profilo Autorevole Diagram */}
                  <div className="lg:hidden flex justify-center overflow-hidden my-8">
                    <motion.img 
                      src="/images/fiducia.png" 
                      alt="Diagramma Profilo Autorevole - Fiducia, Autorità e Clienti"
                      className="w-[1000px] h-auto object-contain scale-125"
                      initial={{ opacity: 0, scale: 0.7, y: 30, rotate: -5 }}
                      whileInView={{ opacity: 1, scale: 1.25, y: 0, rotate: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.8,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 120
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.35,
                        rotate: 2,
                        transition: { duration: 0.3, type: "spring", stiffness: 300 }
                      }}
                    />
                  </div>
                  
                  <div className="mt-6 text-left">
                    <p className="text-xl sm:text-2xl lg:text-2xl font-semibold text-white mb-2">
                      C&apos;è un problema però...
                    </p>
                    <div className="w-64 h-0.5 bg-green-400 rounded-full"></div>
                  </div>
              </motion.div>
            </div>

            {/* Right side - Profilo Autorevole Diagram - Hidden on mobile */}
            <div className="hidden lg:block lg:w-1/2 flex justify-end items-start -mt-16">
              <motion.img 
                src="/images/fiducia.png" 
                alt="Diagramma Profilo Autorevole - Fiducia, Autorità e Clienti"
                className="w-[600px] h-auto object-contain"
                initial={{ opacity: 0, scale: 0.7, x: 80, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.0,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  rotate: 1,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
              />
            </div>
          </div>


        </div>

        {/* Wrong Paths Section - Integrated into Hero to continue red flow */}
        <div className="mt-16 lg:mt-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

          </motion.div>

          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-black text-white mb-4 lg:mb-6">
              Nessuno smanettone o dipendente improvvisato <span className="border-b-4 border-white">può farlo nel modo corretto</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 lg:mb-12">
              E sai perché? Bisogna avere una strategia mirata e soprattutto costanza.
            </p>
          </div>

                    {/* Parallax Stacking Section with Advanced ScrollReveal */}
          <div className="w-full mb-16 space-y-32">
            {stickyContent.map((item, index) => (
              <div key={index} className="text-center max-w-4xl mx-auto px-8">
                {/* Title with ScrollReveal */}
                <ScrollReveal
                  enableBlur={true}
                  baseOpacity={0.1}
                  baseRotation={0}
                  blurStrength={4}
                  containerClassName="mb-6"
                  textClassName="title-large text-slate-100"
                  rotationEnd="bottom center"
                  wordAnimationEnd="bottom center"
                >
                  {item.title}
                </ScrollReveal>

                {/* Subtitle with ScrollReveal */}
                <ScrollReveal
                  enableBlur={true}
                  baseOpacity={0.1}
                  baseRotation={0}
                  blurStrength={3}
                  containerClassName="mb-4"
                  textClassName={`subtitle-medium ${
                    index === 3 
                      ? 'text-[#0cc305] large' 
                      : 'text-red-400'
                  }`}
                  rotationEnd="bottom center"
                  wordAnimationEnd="bottom center"
                >
                  {item.subtitle}
                </ScrollReveal>


                
                                  {/* Enhanced separator with glow effect */}
                  <div 
                    className={`w-32 h-0.5 mx-auto rounded-full shadow-lg ${
                      index === 3 
                        ? 'bg-gradient-to-r from-transparent via-[#0cc305] to-transparent shadow-[#0cc305]/30' 
                        : 'bg-gradient-to-r from-transparent via-red-400 to-transparent shadow-red-400/30'
                    }`}
                  />
              </div>
            ))}
          </div>


        </div>
      </div>


    </section>
  );
}


// BusinessStatsGraphic Component
export function BusinessStatsGraphic() {
  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl bg-gray-900/50 border border-gray-600/30"
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
      }}
    >
      {/* Background Image with fallback */}
      <div
        className="absolute inset-0 h-[400px] sm:h-[500px] lg:h-[500px] bg-cover bg-center bg-no-repeat opacity-90 overflow-hidden shadow-inner"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-[400px] sm:h-[500px] lg:h-[500px] items-center justify-center p-4 lg:p-6">
        <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
          {/* Autorità Callout */}
          <Card 
            className="group relative transform bg-white/20 p-3 lg:p-4 shadow-xl backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-white/30 hover:-translate-y-2 hover:z-10"
            style={{
              transform: 'translateZ(0)',
            }}
          >
            <div className="text-center">
              <div className="mb-1 lg:mb-2 text-2xl lg:text-3xl font-bold text-white">+</div>
              <h3 className="text-lg lg:text-xl font-bold text-white">Autorità</h3>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-white/90">Crea la tua reputazione</p>
            </div>
          </Card>

          {/* Fiducia Callout */}
          <Card className="group relative transform bg-white/20 p-3 lg:p-4 shadow-xl backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-white/30 hover:-translate-y-2">
            <div className="text-center">
              <div className="mb-1 lg:mb-2 text-2xl lg:text-3xl font-bold text-white">+</div>
              <h3 className="text-lg lg:text-xl font-bold text-white">Fiducia</h3>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-white/90">Aumenta la tua credibilità</p>
            </div>
          </Card>

          {/* Clienti Callout */}
          <Card className="group relative transform bg-white/20 p-3 lg:p-4 shadow-xl backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-white/30 hover:-translate-y-2">
            <div className="text-center">
              <div className="mb-1 lg:mb-2 text-2xl lg:text-3xl font-bold text-white">+</div>
              <h3 className="text-lg lg:text-xl font-bold text-white">Clienti</h3>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-white/90">Aumenta il tuo fatturato</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}