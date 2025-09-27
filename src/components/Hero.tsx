'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, TrendingUp, Users } from 'lucide-react';
import NextImage from 'next/image';
import ScrollReveal from './ScrollReveal';
import { Card } from '@/components/ui/card';
import GradientButton from '@/components/ui/GradientButton';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function Hero() {
  const { openPopup } = useContactPopup();



  const stickyContent = [
    {
      title: "Fare da soli",
      subtitle: "Non hai tempo né competenze = INUTILE"
    },
    {
      title: "Delegare",
      subtitle: "Magari a qualche agenzia che ha scoperto Linkedln ieri... e infatti ti rifila subito un bel contrattone vincolante"
    },
    {
      title: "Ignorare LinkedIn",
      subtitle: "E far sì che i tuoi potenziali clienti continuino a scegliere i tuoi competitor."
    },
    {
      title: "Esiste però un'alternativa",
      subtitle: "Valida"
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: '#0B1020' }}>

      <div className="container-custom relative z-10 px-8 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-start min-h-[70vh] lg:min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="text-left w-full">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 lg:mb-6 leading-none sm:leading-tight lg:leading-tight">
              {/* Prima frase - ora più piccola e senza bold */}
              <span className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal block mb-2">
                <span style={{ color: '#C9D1D9' }}>Sei un</span> <span style={{ color: '#D3F20F' }}>professionista</span> <span style={{ color: '#C9D1D9' }}>nel tuo settore?</span>
              </span>
              {/* Seconda frase - ora statica senza effetto typing */}
               <span className="text-[44px] sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-bold">
                Se nel 2025 non sei su LinkedIn, stai <span style={{ color: '#D3F20F' }}>perdendo soldi</span>.
              </span>
            </h1>

            {/* Subheadline aggiunta */}
            <div className="text-[17px] sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl mb-6 lg:mb-8 leading-relaxed max-w-4xl italic" style={{ color: '#C9D1D9' }}>
              <span style={{ fontWeight: '300' }}>L&apos;80% dei lead B2B sui social proviene da </span><span className="text-white font-bold">LinkedIn</span>.
            </div>

            <div className="text-[21px] sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl mb-6 lg:mb-8 leading-snug lg:leading-loose max-w-4xl" style={{ color: '#C9D1D9' }}>
               Con <span style={{ color: '#D3F20F', fontWeight: '600' }}>Profilo Autorevole</span> <span style={{ fontWeight: '200' }}>trasformiamo il tuo LinkedIn nel</span>{' '}
               <span style={{ color: '#C9D1D9', fontWeight: '200' }}>biglietto da visita che </span><span className="text-white font-bold">attrae clienti </span><span style={{ fontWeight: '200' }}>portandoti online</span> <span className="text-white underline font-bold">in soli 7 giorni</span>.
             </div>

             {/* CTA Button - Hidden on mobile, shown on desktop after subtitle */}
             <div className="hidden lg:flex justify-start mt-16 -ml-2">
               <GradientButton onClick={() => openPopup('consultation')}>
                 <span>Richiedi ora la tua consulenza gratuita</span>
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
          <GradientButton onClick={() => openPopup('consultation')}>
            <span>Richiedi ora la tua consulenza gratuita</span>
          </GradientButton>
        </div>

        {/* Pain Amplification Section - Integrated into Hero */}
        <div className="mt-16 lg:mt-4">
          <div className="text-left md:text-center mb-8 lg:mb-16">
                                                   <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 lg:mb-6 -mt-4 lg:-mt-8 lg:pt-4">
             <span className="text-white">Sei già in </span><span style={{ color: '#D3F20F' }}>ritardo!</span>
             </h2>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl max-w-3xl mx-0 md:mx-auto" style={{ color: '#C9D1D9' }}>
            Quanti potenziali clienti hai già <span className="text-white">perso</span>, solo perché qualcun altro sembrava <span className="text-white">&ldquo;più professionale&rdquo;</span> e <span className="text-white">&ldquo;più affidabile&rdquo;</span>?
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Left side - Text content */}
            <div className="lg:w-1/2">
              <div className="text-left mb-8 lg:mb-0">
                  <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl font-normal text-white mb-6">
                  La verità è che senza una presenza curata su Linkedln, <span className="font-bold" style={{ color: '#D3F20F' }}>la tua attività verrà percepita di basso livello</span>.
                  </h3>
                  <div className="space-y-5 mb-8">
                    {[
                      { text: "Ogni minuto che passi senza una strategia LinkedIn mirata è un'opportunità persa.", highlight: "opportunità persa" },
                      { text: "Perchè chi cerca un professionista come te ti giudica e ti sceglie da come ti presenti online. E se il tuo LinkedIn è fermo o vuoto non possono né conoscerti né fidarsi di te!", highlight: "non possono né conoscerti né fidarsi di te" },
                      { text: "Di conseguenza, andranno dai tuoi concorrenti, anche se tu sei più capace di loro..", highlight: "andranno dai tuoi concorrenti" },
                      { text: "L'unico modo che hai per essere percepito come dovresti, e non restare tagliato fuori, è digitalizzare la tua presenza con Linkedln.", highlight: "digitalizzare la tua presenza" }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4"
                      >
                        <div 
                          className={`w-1 h-5 rounded-full flex-shrink-0 mt-1.5 ${
                            index === 3 ? 'bg-[#D3F20F]' : 'bg-white'
                          }`}
                        />
                        <p className="text-base sm:text-lg md:text-lg lg:text-base xl:text-lg leading-relaxed" style={{ color: '#C9D1D9' }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Frase in giallo - allineata con il testo delle bullet */}
                  <div className="mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-1 h-5 rounded-full flex-shrink-0 mt-1.5 bg-transparent" />
                      <p className="text-lg sm:text-xl md:text-xl lg:text-lg xl:text-xl" style={{ color: '#D3F20F' }}>
                        C&apos;è un problema però...
                      </p>
                    </div>
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

          <div className="text-left sm:text-center mb-8 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
              Nessuno smanettone o dipendente improvvisato <span style={{ color: '#D3F20F' }}>può farlo nel modo corretto</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl max-w-3xl sm:mx-auto mb-8 lg:mb-12" style={{ color: '#C9D1D9' }}>
            E sai perché? Perché serve una strategia mirata e, soprattutto, costanza.
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
                  textClassName="text-4xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white"
                  rotationEnd="bottom center"
                  wordAnimationEnd="bottom center"
                >
                  {item.title}
                </ScrollReveal>

                {/* Subtitle */}
                <div className="mb-4 text-lg sm:text-xl md:text-xl lg:text-lg xl:text-xl max-w-3xl mx-auto">
                  <span style={{ color: '#E5E7EB' }}>
                    {item.subtitle.split(' ').map((word, wordIndex) => {
                      // Highlight key words in lime
                      const highlightWords = ['INUTILE', 'contrattone', 'competitor', 'Valida'];
                      const shouldHighlight = highlightWords.some(highlightWord => 
                        word.toLowerCase().includes(highlightWord.toLowerCase())
                      );
                      
                      return shouldHighlight ? (
                        <span key={wordIndex} style={{ color: '#D3F20F', fontWeight: '600' }}>
                          {word}{' '}
                        </span>
                      ) : (
                        <span key={wordIndex}>{word} </span>
                      );
                    })}
                  </span>
                </div>

                {/* Enhanced separator with glow effect */}
                <div 
                  className="w-32 h-0.5 mx-auto rounded-full shadow-lg bg-gradient-to-r from-transparent via-[#D3F20F] to-transparent shadow-[#D3F20F]/30"
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
      className="relative w-full overflow-hidden rounded-xl border"
      style={{
        background: '#1A2246',
        borderColor: '#334155',
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
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-[400px] sm:h-[500px] lg:h-[500px] items-center justify-center p-4 lg:p-6">
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          {/* Autorità Callout */}
          <Card 
            className="group relative p-3 lg:p-4 shadow-xl backdrop-blur-md"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <div className="text-center">
              <div className="mb-1 lg:mb-2 text-2xl lg:text-3xl font-bold text-white">+</div>
              <h3 className="text-lg lg:text-xl font-bold text-white">Autorità</h3>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-white/90">Crea la tua reputazione</p>
            </div>
          </Card>

          {/* Fiducia Callout */}
          <Card className="group relative p-3 lg:p-4 shadow-xl backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <div className="text-center">
              <div className="mb-1 lg:mb-2 text-2xl lg:text-3xl font-bold text-white">+</div>
              <h3 className="text-lg lg:text-xl font-bold text-white">Fiducia</h3>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-white/90">Aumenta la tua credibilità</p>
            </div>
          </Card>

          {/* Clienti Callout */}
          <Card className="group relative p-3 lg:p-4 shadow-xl backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
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