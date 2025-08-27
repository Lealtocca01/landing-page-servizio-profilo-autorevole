'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, TrendingUp, Users } from 'lucide-react';
import { OrbitPain } from '@/components/OrbitPain';
import ScrollStack from './ui/ScrollStack';

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
      description: "Sprechi mesi tentando di capire l'algoritmo LinkedIn. Zero risultati dopo settimane di sforzi, contenuti che nessuno vede o condivide, frustrazione e perdita di tempo prezioso."
    },
    {
      title: "Delegare male",
      description: "Affidi il tuo LinkedIn a persone che non capiscono il tuo business. Contenuti generici che non ti rappresentano, perdita della tua voce professionale autentica, investimento buttato senza risultati concreti."
    },
    {
      title: "Ignorare LinkedIn",
      description: "Pensi che LinkedIn non sia importante per il tuo settore. I competitor ti superano e attirano i tuoi clienti, opportunità di business perse ogni giorno, diventi invisibile ai decision maker del tuo settore."
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

          {/* Right Side - Image Card */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* LinkedIn Profile Card */}
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
                {/* LinkedIn Profile Header */}
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-20 relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Profile Picture */}
                <div className="flex justify-center -mt-16 mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center text-white text-xs p-2">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="text-green-400 font-bold">TWIP++</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="text-center mb-6 px-4">
                  <div className="flex items-center justify-center mb-2">
                    <h3 className="text-xl font-bold text-white mr-2">Alessandro Cattolico</h3>
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                                      <p className="text-sm text-gray-300 leading-relaxed mb-3">
                      Founder @Twip | Helping local businesses grow through Marketing & Sales | Built my first tech startup from scratch at 19 — here&apos;s where I share the journey.
                    </p>
                  
                  <div className="text-xs text-gray-400 mb-3">
                    Milano · Informazioni di contatto
                  </div>
                  
                  <div className="text-xs text-gray-400 mb-4">
                    692 follower · Più di 500 collegamenti
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button className="w-full bg-blue-600 text-white text-sm py-2 px-4 rounded-lg font-medium">
                      Disponibile per
                    </button>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="bg-white text-blue-600 text-xs py-1 px-2 rounded border border-blue-600">
                        Aggiungi sezione
                      </button>
                      <button className="bg-white text-blue-600 text-xs py-1 px-2 rounded border border-blue-600">
                        Pulsante
                      </button>
                      <button className="bg-white text-blue-600 text-xs py-1 px-2 rounded border border-blue-600">
                        Risorse
                      </button>
                      </div>
                  </div>
                </div>
                
                {/* Company & Education */}
                <div className="px-4 pb-4 space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-bold text-xs">
                      T
                    </div>
                    <div>
                      <div className="text-white font-medium">TWIP official</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs">
                      IC
                    </div>
                    <div>
                      <div className="text-white font-medium">Istituto Istruzione Superiore Italo Calvino</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500/20 rounded-full backdrop-blur-sm border border-green-400/30" />
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  La verità è che senza una presenza curata, la tua attività verrà percepita <span className="text-red-400">di basso livello</span>.
                  </h3>
                  <div className="space-y-8 mb-10">
                    <div className="flex items-start space-x-6">
                      <div className="w-1 h-6 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Ogni minuto che passi senza una strategia LinkedIn mirata è un&apos;opportunità persa.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-6">
                      <div className="w-1 h-6 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Perchè chi cerca un professionista come te ti giudica e ti sceglie da come ti presenti online. E se il tuo LinkedIn è fermo o vuoto non possono ne conoscerti ne fidarsi di te!
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-6">
                      <div className="w-1 h-6 bg-red-400 rounded-full flex-shrink-0 mt-2"></div>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Di conseguenza, andranno dai tuoi concorrenti, anche se tu sei più capace di loro..
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-6">
                      <div className="w-1 h-6 bg-green-400 rounded-full flex-shrink-0 mt-2"></div>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        L&apos;unico modo che hai per essere percepito come dovresti e non restare tagliato fuori è digitalizzare la tua presenza con Linkedln.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="text-xl md:text-2xl font-semibold text-white mb-3 text-left">
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

          {/* ScrollStack component full width */}
          <div className="w-full mb-16">
            <ScrollStack
              itemDistance={80}
            >
              {stickyContent.map((item, index) => (
                <div key={index} className="scroll-stack-text-section">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-8">
                    {item.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </ScrollStack>
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