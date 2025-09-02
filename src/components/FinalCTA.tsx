'use client';

import { motion } from 'framer-motion';
import { PricingCards } from '@/components/ui/pricing-cards';

export function FinalCTA() {

  // Definizione dei pricing tiers
  const pricingTiers = [
    {
      name: "PROFESSIONAL",
      price: 250,
      pricePrefix: "Solo",
      interval: "/mese",
      description: "Tutto questo a meno della metà del costo di un dipendente PART-TIME al mese",
      features: [
        { name: "3 post a settimana (12 al mese)", included: true },
        { name: "Strategia e piano editoriale personalizzato", included: true },
        { name: "Creazione contenuti professionali + grafiche", included: true },
        { name: "Pubblicazione costante", included: true },
        { name: "Gestione engagement (commenti, interazioni)", included: true },
        { name: "Monitoraggio e ottimizzazione continua", included: true },
      ],
      cta: {
        text: "Inizia con il Base",
        onClick: () => {
          window.open('mailto:info@profiloautorevole.it?subject=Richiesta Pacchetto Base&body=Ciao, sono interessato al Pacchetto Base (€250/mese). Vorrei maggiori informazioni.', '_blank');
        }
      }
    },
    {
      name: "EXECUTIVE",
      price: 490,
      interval: "/mese",
      description: "Perfetto per chi vuole accelerare la crescita e trasformare LinkedIn in un vero canale di acquisizione clienti.",
      highlight: true,
      features: [
        { name: "1 post al giorno (24 al mese)", included: true },
        { name: "Tutto quello incluso nel Pacchetto Base", included: true },
        { name: "Maggiore visibilità settimanale", included: true },
        { name: "Presenza costante e autorevole", included: true },
        { name: "Più opportunità di interazione e crescita", included: true },
        { name: "Monitoraggio e ottimizzazione continua + report mensile", included: true },
      ],
      cta: {
        text: "Scegli Premium",
        onClick: () => {
          window.open('mailto:info@profiloautorevole.it?subject=Richiesta Pacchetto Premium&body=Ciao, sono interessato al Pacchetto Premium (€490/mese). Vorrei maggiori informazioni.', '_blank');
        }
      }
    },
  ];

  return (
    <section id="cta" className="section-padding bg-gradient-to-b from-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ma quanto <span className="text-gradient">costa</span> tutto questo?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Quanto ti costerà costruire la tua presenza digitale e per farti scegliere dai tuoi clienti?
          </p>
        </motion.div>

        {/* Sezione Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 mt-8 lg:-mt-28"
        >
          <PricingCards 
            tiers={pricingTiers}
            sectionClassName="py-0 px-0 bg-transparent"
            containerClassName="px-0"
            className="gap-6 lg:gap-8"
            cardClassName="backdrop-blur-sm shadow-xl"
          />
        </motion.div>




      </div>
    </section>
  );
}