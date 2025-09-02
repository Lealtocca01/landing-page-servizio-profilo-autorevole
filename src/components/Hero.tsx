'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, TrendingUp, Users } from 'lucide-react';
import { OrbitPain } from '@/components/OrbitPain';
import ScrollReveal from './ScrollReveal';
import { Card } from '@/components/ui/card';
import { Tilt } from '@/components/ui/tilt';

export function Hero() {
  const scrollToCTA = () => {
    const element = document.querySelector('#cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-950">
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-5xl md:text-6xl lg:text-7xl">Sei un <span className="text-gradient">professionista</span> nel tuo settore?</span>{' '}
              <span className="text-3xl md:text-4xl lg:text-5xl">Nel <span className="text-gradient">2025</span> non puoi non essere su{' '}
              <span className="text-gradient">LinkedIn</span>!</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Con <span className="text-gradient font-semibold">Profilo Autorevole</span> trasformiamo il tuo LinkedIn nel{' '}
              <span className="text-white font-semibold">biglietto da visita che attrae clienti portandoti online </span><span className="text-gradient font-semibold">in soli 7 giorni</span>.
            </motion.div>

            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="btn-primary px-8 py-4 rounded-xl font-semibold text-white flex items-center space-x-2 text-lg transform-gpu transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:shadow-[0_16px_40px_rgba(59,130,246,0.4)] hover:scale-110"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 2,
                  boxShadow: '0 20px 50px rgba(59,130,246,0.5)',
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToCTA}
              >
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Attiva Profilo Autorevole
                </motion.span>
                <motion.div
                  whileHover={{ x: 8, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>

            </motion.div>


          </motion.div>

          {/* Right Side - BusinessStatsGraphic */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
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
            >
              <BusinessStatsGraphic />
            </Tilt>
          </motion.div>
        </div>

        {/* Pain Amplification Section - Integrated into Hero */}
        <div className="mt-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                         <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
             <span className="text-white">Sei già in </span><span className="text-gradient">ritardo!</span>
             </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Quanti potenziali clienti hai già <span className="font-bold text-white">perso</span>, solo perché qualcun&apos;altro sembrava <span className="font-bold text-white">&ldquo;più professionale&rdquo;</span> e <span className="font-bold text-white">&ldquo;più affidabile&rdquo;</span>” ?
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left side - Text content */}
            <div className="lg:w-1/2">
              <motion.div
                className="text-center lg:text-left mb-8 lg:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
                  La verità è che senza una presenza curata, la tua attività verrà percepita <span className="text-red-400">di basso livello</span>.
                  </h3>
                  <div className="space-y-5 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-1 h-5 bg-red-400 rounded-full flex-shrink-0 mt-1.5"></div>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Ogni minuto che passi senza una strategia LinkedIn mirata è un&apos;opportunità persa.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-1 h-5 bg-red-400 rounded-full flex-shrink-0 mt-1.5"></div>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Perchè chi cerca un professionista come te ti giudica e ti sceglie da come ti presenti online. E se il tuo LinkedIn è fermo o vuoto non possono ne conoscerti ne fidarsi di te!
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-1 h-5 bg-red-400 rounded-full flex-shrink-0 mt-1.5"></div>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Di conseguenza, andranno dai tuoi concorrenti, anche se tu sei più capace di loro..
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-1 h-5 bg-green-400 rounded-full flex-shrink-0 mt-1.5"></div>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        L&apos;unico modo che hai per essere percepito come dovresti e non restare tagliato fuori è digitalizzare la tua presenza con Linkedln.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-xl md:text-2xl font-semibold text-white mb-2 text-left">
                      C&apos;è un problema però...
                    </p>
                    <div className="w-64 h-0.5 bg-green-400 rounded-full"></div>
                  </div>
              </motion.div>
            </div>

            {/* Right side - Cards in vertical column */}
            <div className="lg:w-1/2">
                             <OrbitPain />
            </div>
          </div>


        </div>

        {/* Wrong Paths Section - Integrated into Hero to continue red flow */}
        <div className="mt-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

          </motion.div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Nessuno smanettone o dipendente improvvisato <span className="border-b-4 border-white">può farlo nel modo corretto</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              E sai perché? Bisogna avere una strategia mirata e soprattutto costanza.
            </p>
          </div>

                    {/* Parallax Stacking Section with Advanced ScrollReveal */}
          <div className="w-full mb-16 space-y-32">
            {stickyContent.map((item, index) => (
              <div key={index} className="text-center max-w-4xl mx-auto px-4">
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
      className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-gray-900/50 border border-gray-600/30"
      style={{
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
      }}
    >
      {/* Background Image with fallback */}
      <div
        className="absolute inset-0 h-[500px] bg-cover bg-center bg-no-repeat opacity-90 overflow-hidden shadow-inner"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-[500px] items-center justify-center p-6">
        <div className="grid w-full grid-cols-3 gap-4">
          {/* Autorità Callout */}
          <Card 
            className="group relative transform bg-white/20 p-4 shadow-xl backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-white/30 hover:-translate-y-2 hover:z-10"
            style={{
              transform: 'translateZ(0)',
            }}
          >
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-white">+</div>
              <h3 className="text-xl font-bold text-white">Autorità</h3>
              <p className="mt-2 text-sm text-white/90">Crea la tua reputazione</p>
            </div>
          </Card>

          {/* Fiducia Callout */}
          <Card className="group relative transform bg-white/20 p-4 shadow-xl backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-white/30 hover:-translate-y-2">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-white">+</div>
              <h3 className="text-xl font-bold text-white">Fiducia</h3>
              <p className="mt-2 text-sm text-white/90">Aumenta la tua credibilità</p>
            </div>
          </Card>

          {/* Clienti Callout */}
          <Card className="group relative transform bg-white/20 p-4 shadow-xl backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-white/30 hover:-translate-y-2">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-white">+</div>
              <h3 className="text-xl font-bold text-white">Clienti</h3>
              <p className="mt-2 text-sm text-white/90">Aumenta il tuo fatturato</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}