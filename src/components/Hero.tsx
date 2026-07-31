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
      subtitle: "Non hai tempo e LinkedIn non è il tuo mestiere. L'algoritmo premia la costanza — non chi appare una volta al mese."
    },
    {
      title: "Agenzia generica",
      subtitle: "Trattano LinkedIn come un canale secondario. Contenuti generici, nessuna conoscenza del tuo settore. Risultato: un profilo che sembra un volantino."
    },
    {
      title: "Collaboratore interno",
      subtitle: "Pubblica per riempire il calendario, non per attrarre clienti. E tu non sai se sta funzionando."
    },
    {
      title: "Esiste un'alternativa",
      subtitle: "specifica per LinkedIn e costruita intorno al tuo settore."
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-32" style={{ background: '#ffffff' }}>

      <div className="container-custom relative z-10 px-8 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-start min-h-[70vh] lg:min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div className="text-left w-full mt-12 sm:mt-0">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-neutral-900 mb-4 lg:mb-6 leading-none sm:leading-tight lg:leading-tight">
              {/* Prima frase - ora più piccola e senza bold */}
              <span className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal block mb-2">
                <span style={{ color: '#555555' }}>Sei un professionista.</span> <span style={{ color: '#000000' }}>Sai che LinkedIn conta.</span>
              </span>
              {/* Headline tiepido */}
               <span className="text-[44px] sm:text-6xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-neutral-900 font-bold">
                Hai provato a curare il tuo profilo — ma i clienti <span style={{ color: '#000000' }}>non arrivano</span>.
              </span>
            </h1>

            {/* Subheadline aggiunta */}
            <div className="text-[17px] sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl mb-6 lg:mb-8 leading-relaxed max-w-4xl italic" style={{ color: '#555555' }}>
              <span style={{ fontWeight: '300' }}>Non è colpa tua. LinkedIn non funziona come gli altri social.</span>
            </div>

            <div className="text-[21px] sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl mb-6 lg:mb-8 leading-snug lg:leading-loose max-w-4xl" style={{ color: '#555555' }}>
               Serve una <span style={{ color: '#000000', fontWeight: '600' }}>strategia specifica</span>, <span style={{ fontWeight: '200' }}>contenuti mirati al tuo settore e costanza ogni settimana</span>{' '}
               — <span style={{ color: '#555555', fontWeight: '200' }}>tre cose che richiedono </span><span className="text-neutral-900 font-bold">competenze verticali </span><span style={{ fontWeight: '200' }}>che la maggior parte delle agenzie</span> <span className="text-neutral-900 underline font-bold">semplicemente non ha</span>.
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
                                                   <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-neutral-900 mb-4 lg:mb-6 -mt-4 lg:-mt-8 lg:pt-4">
             <span className="text-neutral-900">Intanto, il tuo concorrente </span><span style={{ color: '#000000' }}>cresce.</span>
             </h2>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl max-w-3xl mx-0 md:mx-auto" style={{ color: '#555555' }}>
            Pubblica ogni settimana, ha un profilo curato, riceve <span className="text-neutral-900">contatti</span>. Non è più bravo di te — ma i clienti <span className="text-neutral-900">lo trovano prima</span>.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            {/* Left side - Text content */}
            <div className="lg:w-1/2">
              <div className="text-left mb-8 lg:mb-0">
                  <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl font-normal text-neutral-900 mb-6">
                  La verità è che senza una presenza curata su LinkedIn, <span className="font-bold" style={{ color: '#000000' }}>chi ti cerca non ti trova — e sceglie qualcun altro</span>.
                  </h3>
                  <div className="space-y-5 mb-8">
                    {[
                      { text: "Aggiorni la foto, riscrivi la bio, pubblichi un post ogni tanto. Risultato: 30 visualizzazioni, tutte di colleghi.", highlight: "30 visualizzazioni" },
                      { text: "Hai provato a delegare a un'agenzia o a un collaboratore, ma nessuno ha capito davvero cosa comunicare per il tuo settore.", highlight: "cosa comunicare per il tuo settore" },
                      { text: "Chi cerca un professionista come te ti giudica da come ti presenti online. Se il tuo LinkedIn è fermo o vuoto, non possono né conoscerti né fidarsi di te.", highlight: "né conoscerti né fidarsi di te" },
                      { text: "Di conseguenza scelgono i tuoi concorrenti — anche se tu sei più competente di loro.", highlight: "scelgono i tuoi concorrenti" }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4"
                      >
                        <div 
                          className={`w-1 h-5 rounded-full flex-shrink-0 mt-1.5 ${
                            index === 3 ? 'bg-[#ff3700]' : 'bg-white'
                          }`}
                        />
                        <p className="text-base sm:text-lg md:text-lg lg:text-base xl:text-lg leading-relaxed" style={{ color: '#555555' }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Frase in giallo - allineata con il testo delle bullet */}
                  <div className="mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-1 h-5 rounded-full flex-shrink-0 mt-1.5 bg-transparent" />
                      <p className="text-lg sm:text-xl md:text-xl lg:text-lg xl:text-xl" style={{ color: '#000000' }}>
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
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-neutral-900 mb-4 lg:mb-6">
              Perché finora <span style={{ color: '#000000' }}>non ha funzionato</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-xl max-w-3xl sm:mx-auto mb-8 lg:mb-12" style={{ color: '#555555' }}>
            Hai già provato almeno una di queste strade. Ecco perché nessuna ti ha portato risultati.
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
                  textClassName="text-4xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-900"
                  rotationEnd="bottom center"
                  wordAnimationEnd="bottom center"
                >
                  {item.title}
                </ScrollReveal>

                {/* Subtitle */}
                <div className="mb-4 text-lg sm:text-xl md:text-xl lg:text-lg xl:text-xl max-w-3xl mx-auto">
                  <span style={{ color: '#777777' }}>
                    {item.subtitle.split(' ').map((word, wordIndex) => {
                      // Highlight key words in lime
                      const highlightWords = ['costanza', 'volantino', 'calendario', 'specifica'];
                      const shouldHighlight = highlightWords.some(highlightWord => 
                        word.toLowerCase().includes(highlightWord.toLowerCase())
                      );
                      
                      return shouldHighlight ? (
                        <span key={wordIndex} style={{ color: '#000000', fontWeight: '600' }}>
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
                  className="w-32 h-0.5 mx-auto rounded-full shadow-lg bg-gradient-to-r from-transparent via-[#ff3700] to-transparent shadow-[#ff3700]/30"
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
      className="relative w-full overflow-hidden rounded border"
      style={{
        background: '#ffffff',
        borderColor: '#e3e3e3',
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
            style={{ background: 'rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.2)' }}
          >
            <div className="text-center">
              <div className="mb-1 lg:mb-2 text-2xl lg:text-3xl font-bold text-neutral-900">+</div>
              <h3 className="text-lg lg:text-xl font-bold text-neutral-900">Autorità</h3>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-neutral-900/90">Crea la tua reputazione</p>
            </div>
          </Card>

          {/* Fiducia Callout */}
          <Card className="group relative p-3 lg:p-4 shadow-xl backdrop-blur-md" style={{ background: 'rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.2)' }}>
            <div className="text-center">
              <div className="mb-1 lg:mb-2 text-2xl lg:text-3xl font-bold text-neutral-900">+</div>
              <h3 className="text-lg lg:text-xl font-bold text-neutral-900">Fiducia</h3>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-neutral-900/90">Aumenta la tua credibilità</p>
            </div>
          </Card>

          {/* Clienti Callout */}
          <Card className="group relative p-3 lg:p-4 shadow-xl backdrop-blur-md" style={{ background: 'rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.2)' }}>
            <div className="text-center">
              <div className="mb-1 lg:mb-2 text-2xl lg:text-3xl font-bold text-neutral-900">+</div>
              <h3 className="text-lg lg:text-xl font-bold text-neutral-900">Clienti</h3>
              <p className="mt-1 lg:mt-2 text-xs lg:text-sm text-neutral-900/90">Aumenta il tuo fatturato</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}