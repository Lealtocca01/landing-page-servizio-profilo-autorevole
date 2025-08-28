'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, TrendingUp, Users } from 'lucide-react';
import { OrbitPain } from '@/components/OrbitPain';
import ScrollReveal from './ScrollReveal';
import AutoSizeImage from './AutoSizeImage';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Unified Background - Blue to Red gradient across all three sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-slate-900 to-red-950" />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-5xl md:text-6xl lg:text-7xl">Sei un <span className="text-gradient">professionista</span> nel tuo settore?</span>{' '}
              <span className="text-3xl md:text-4xl lg:text-5xl">Nel <span className="text-gradient">2025</span> non puoi non essere su{' '}
              <span className="text-gradient">LinkedIn</span>!</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Con <span className="text-gradient font-semibold">Profilo Autorevole</span> trasformiamo il tuo LinkedIn nel{' '}
              <span className="text-blue-400 font-semibold">biglietto da visita che attrae clienti</span>.
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="btn-primary px-8 py-4 rounded-full font-semibold text-white flex items-center space-x-2 text-lg transform-gpu transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:shadow-[0_16px_40px_rgba(59,130,246,0.4)] hover:scale-110"
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
              
              <motion.button
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 text-lg hover:bg-gray-50 transition-all duration-300 transform-gpu hover:shadow-[0_16px_40px_rgba(30,64,175,0.3)] hover:scale-110"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: -2,
                  boxShadow: '0 20px 50px rgba(30,64,175,0.4)',
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const element = document.querySelector('#come-funziona');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <motion.span
                  whileHover={{ x: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Vedi Come Funziona
                </motion.span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-8 text-gray-400 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <TrendingUp size={16} className="text-green-400" />
                <span className="text-sm">Risultati in 30 giorni</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-blue-400" />
                <span className="text-sm">500+ professionisti</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin size={16} className="text-yellow-400" />
                <span className="text-sm">Strategia personalizzata</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - AutoSizeImage */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              <AutoSizeImage
                imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                sizeBasedOn="Width"
                enableLazyLoading={true}
                style={{
                  border: {
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                  },
                  borderRadius: 16,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              />
              
              {/* Statistiche sovrapposte all'immagine */}
              
              {/* Top Left Box - + Autorità */}
              <motion.div
                className="absolute top-8 left-4 bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl border border-white/20 max-w-[450px]"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center justify-center h-full">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-2xl text-[#0A66C2]">+</span>
                    <span className="text-lg font-bold text-gray-800">Autorità</span>
                  </div>
                </div>
              </motion.div>

              {/* Top Right Box - + Fiducia */}
              <motion.div
                className="absolute top-8 right-4 bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl border border-white/20 max-w-[450px]"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center justify-center h-full">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-2xl text-[#0A66C2]">+</span>
                    <span className="text-lg font-bold text-gray-800">Fiducia</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Center Box - + Clienti */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl border border-white/20 max-w-[450px]"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center justify-center h-full">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-2xl text-[#0A66C2]">+</span>
                    <span className="text-lg font-bold text-gray-800">Clienti</span>
                  </div>
                </div>
              </motion.div>

              {/* Icona LinkedIn in basso a destra */}
              <motion.div
                className="absolute bottom-6 right-6 bg-[#0A66C2] rounded-2xl p-3 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Linkedin size={24} className="text-white" />
              </motion.div>

              {/* Indicatore di navigazione a sinistra */}
              <motion.div
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <ArrowRight size={16} className="text-white rotate-180" />
              </motion.div>
            </div>
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
             <span className="text-gradient">Sei già in ritardo!</span>
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nessuno smanettone o dipendente improvvisato può farlo nel modo corretto
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
                  scrollContainerRef={null}
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
                  scrollContainerRef={null}
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

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border-2 border-green-400/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ✅ La strada giusta esiste
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Con <span className="text-gradient font-semibold">Profilo Autorevole</span> eviti tutti questi errori e ottieni risultati concreti in 30 giorni, grazie a una strategia testata e personalizzata per il tuo business.
              </p>
              <motion.button
                className="btn-primary px-8 py-3 rounded-full font-semibold text-white transform-gpu transition-all duration-200 hover:scale-105 hover:shadow-[0_10px_26px_rgba(255,255,255,0.25)]"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 26px rgba(255,255,255,0.25)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#come-funziona');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Scopri il Metodo che Funziona
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}