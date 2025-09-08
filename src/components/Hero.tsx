'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, TrendingUp, Users } from 'lucide-react';
import NextImage from 'next/image';
import ScrollReveal from './ScrollReveal';
import { Card } from '@/components/ui/card';
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
          <div className="text-left w-full">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-4 lg:mb-6 leading-none sm:leading-tight lg:leading-tight">
              {/* Prima frase - ora più piccola e senza bold */}
              <span className="text-4xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal block mb-2">
                Sei un <span className="text-gradient">professionista</span> nel tuo settore?
              </span>
              {/* Seconda frase con effetto typing */}
              <div className="text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white">
                <TextType 
                  text={["Nel 2025 non puoi non essere su LinkedIn!"]}
                  as="span"
                  typingSpeed={40}
                  deletingSpeed={30}
                  pauseDuration={2000}
                  initialDelay={200}
                  showCursor={true}
                  cursorCharacter="|"
                  cursorClassName="text-gradient"
                  cursorBlinkDuration={0.8}
                  className=""
                  textColors={["#ffffff"]}
                  variableSpeed={{
                    min: 30,
                    max: 60
                  }}
                  loop={false}
                  onSentenceComplete={(text, index) => {
                    console.log(`Completed: ${text} (${index})`);
                  }}
                />
              </div>
            </h1>

            <div className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl text-gray-300 mb-6 lg:mb-8 leading-snug lg:leading-loose max-w-4xl">
               Con <span className="text-gradient font-semibold">Profilo Autorevole</span> trasformiamo il tuo LinkedIn nel{' '}
               <span className="text-white font-semibold">biglietto da visita che attrae clienti portandoti online </span><span className="text-gradient font-semibold underline decoration-white decoration-2">in soli 7 giorni</span>.
             </div>

             {/* CTA Button - Hidden on mobile, shown on desktop after subtitle */}
             <div className="hidden lg:flex justify-start mt-16 -ml-2">
               <GradientButton onClick={openPopup}>
                 <span>Candidati ora per Profilo Autorevole</span>
               </GradientButton>
             </div>
            </div>

          {/* Right Side - BusinessStatsGraphic ottimizzato */}
          <div className="w-full lg:flex lg:justify-end -mt-8 lg:mt-0">
            <div className="w-full">
              <BusinessStatsGraphic />
            </div>
          </div>
        </div>

        {/* CTA Button - Mobile only, positioned after image */}
        <div className="flex lg:hidden justify-center mt-8">
          <GradientButton onClick={openPopup}>
            <span>Candidati ora per Profilo Autorevole</span>
          </GradientButton>
        </div>

        {/* Pain Amplification Section - Integrated into Hero */}
        <div className="mt-16 lg:mt-4">
          <div className="text-left md:text-center mb-8 lg:mb-16">
                                                   <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-4 lg:mb-6 -mt-4 lg:-mt-8">
             <span className="text-white">Sei già in </span><span className="text-gradient">ritardo!</span>
             </h2>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl text-gray-300 max-w-3xl mx-0 md:mx-auto">
            Quanti potenziali clienti hai già <span className="font-bold text-white">perso</span>, solo perché qualcun&apos;altro sembrava <span className="font-bold text-white">&ldquo;più professionale&rdquo;</span> e <span className="font-bold text-white">&ldquo;più affidabile&rdquo;</span>?
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Left side - Text content */}
            <div className="lg:w-1/2">
              <div className="text-left mb-8 lg:mb-0">
                  <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl font-black text-white mb-6">
                  La verità è che senza una presenza curata, la tua attività verrà percepita <span className="text-red-400">di basso livello</span>.
                  </h3>
                  <div className="space-y-5 mb-8">
                    {[
                      { text: "Ogni minuto che passi senza una strategia LinkedIn mirata è un'opportunità persa.", color: "bg-red-400" },
                      { text: "Perchè chi cerca un professionista come te ti giudica e ti sceglie da come ti presenti online. E se il tuo LinkedIn è fermo o vuoto non possono ne conoscerti ne fidarsi di te!", color: "bg-red-400" },
                      { text: "Di conseguenza, andranno dai tuoi concorrenti, anche se tu sei più capace di loro..", color: "bg-red-400" },
                      { text: "L'unico modo che hai per essere percepito come dovresti e non restare tagliato fuori è digitalizzare la tua presenza con Linkedln.", color: "bg-green-400" }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4"
                      >
                        <div 
                          className={`w-1 h-5 ${item.color} rounded-full flex-shrink-0 mt-1.5`}
                        />
                        <p className="text-xl sm:text-2xl lg:text-lg text-gray-300 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Mobile version - Profilo Autorevole Diagram ottimizzato */}
                  <div className="lg:hidden flex justify-center overflow-hidden my-8">
                    <div className="relative w-full max-w-sm h-auto">
                      <NextImage
                        src="/images/fiducia.png"
                        alt="Diagramma Profilo Autorevole - Fiducia, Autorità e Clienti"
                        width={400}
                        height={240}
                        className="object-contain w-full h-auto"
                        quality={90}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 text-left">
                    <p className="text-xl sm:text-2xl lg:text-2xl font-semibold text-white mb-2">
                      C&apos;è un problema però...
                    </p>
                    <div className="w-64 h-0.5 bg-green-400 rounded-full"></div>
                  </div>
              </div>
            </div>

            {/* Right side - Profilo Autorevole Diagram ottimizzato - Hidden on mobile */}
            <div className="hidden lg:block lg:w-1/2 flex justify-end items-start -mt-16">
              <div className="relative w-[600px] h-auto">
                <NextImage
                  src="/images/fiducia.png"
                  alt="Diagramma Profilo Autorevole - Fiducia, Autorità e Clienti"
                  width={600}
                  height={360}
                  className="object-contain"
                  quality={90}
                  loading="lazy"
                  sizes="(max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>


        </div>

        {/* Wrong Paths Section - Integrated into Hero to continue red flow */}
        <div className="mt-16 lg:mt-32">
          <div className="text-center mb-16">

          </div>

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
      {/* Background Image ottimizzata con NextImage */}
      <div className="absolute inset-0 h-[400px] sm:h-[500px] lg:h-[500px] overflow-hidden shadow-inner">
        <NextImage
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Team professionale al lavoro - Profilo Autorevole"
          fill
          className="object-cover opacity-90"
          priority // Priorità alta per l'immagine hero
          quality={85} // Qualità ottimizzata
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-[400px] sm:h-[500px] lg:h-[500px] items-center justify-center p-4 lg:p-6">
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          {/* Autorità Callout */}
          <Card 
            className="group relative bg-white/20 p-3 lg:p-4 shadow-xl backdrop-blur-md border border-white/30"
          >
            <div className="text-center">
              <div className="mb-1 lg:mb-2 text-2xl lg:text-3xl font-bold text-white">+</div>
              <h3 className="text-lg lg:text-xl font-bold text-white">Autorità</h3>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-white/90">Crea la tua reputazione</p>
            </div>
          </Card>

          {/* Fiducia Callout */}
          <Card className="group relative bg-white/20 p-3 lg:p-4 shadow-xl backdrop-blur-md border border-white/30">
            <div className="text-center">
              <div className="mb-1 lg:mb-2 text-2xl lg:text-3xl font-bold text-white">+</div>
              <h3 className="text-lg lg:text-xl font-bold text-white">Fiducia</h3>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-white/90">Aumenta la tua credibilità</p>
            </div>
          </Card>

          {/* Clienti Callout */}
          <Card className="group relative bg-white/20 p-3 lg:p-4 shadow-xl backdrop-blur-md border border-white/30">
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