'use client';

import { PricingCards } from '@/components/ui/pricing-cards';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function FinalCTA() {
  const { openPopup } = useContactPopup();

  // Definizione dei pricing tiers
  const pricingTiers = [
    {
      name: "Professional",
      price: null, // Nessun prezzo mostrato
      pricePrefix: "",
      interval: "",
      description: "",
      features: [
        { name: "I tuoi potenziali clienti ti vedono ogni settimana — 12 contenuti al mese pubblicati per te", included: true },
        { name: "Una strategia costruita sul tuo settore, non un template generico", included: true },
        { name: "Contenuti e grafiche che comunicano competenza, scritti nella lingua dei tuoi clienti", included: true },
        { name: "Mai più settimane di silenzio: pubblichiamo noi, con costanza", included: true },
        { name: "Rispondiamo, interagiamo, costruiamo relazioni — tu lavori", included: true },
        { name: "Monitoraggio e ottimizzazione continua", included: true },
        { name: "2 call a settimana col tuo consulente per domande, strategia e aggiornamenti", included: true },
      ],
      bottomNote: "Tutto questo a meno di un terzo del costo di un dipendente PART-TIME al mese",
      cta: {
        text: "Scopri il pacchetto",
        onClick: () => openPopup('package') // Apri il popup per il pacchetto
      },
      isPopular: true // Aggiungo il flag per "Più Popolare"
    },
    {
      name: "Consulenza Gratuita",
      price: 0,
      pricePrefix: "€",
      interval: "",
      originalPrice: 75,
      description: "GRATIS",
      features: [
        { name: "Analisi completa del tuo profilo LinkedIn", included: true },
        { name: "Linee guida per posizionarti al meglio", included: true },
        { name: "Strategia di contenuti personalizzata", included: true },
        { name: "Analisi del mercato e dei concorrenti", included: true },
        { name: "Script di contatto a freddo pronto", included: true },
        { name: "30 minuti di consulenza con un esperto", included: true },
      ],
      bottomNote: "In cambio ti chiediamo solo un feedback sincero. Se ti saremo utili, potremo usare la tua testimonianza per dimostrare concretamente il nostro valore ad altri professionisti come te.",
      cta: {
        text: "Prenota la consulenza gratuita",
        onClick: () => openPopup('consultation') // Apri il popup per la consulenza
      },
      isPopular: false
    },
  ];

  return (
    <section id="cta" className="pt-12 md:pt-16 lg:pt-20 pb-4 md:pb-2 lg:pb-1 relative overflow-hidden" style={{ background: '#F5F5F5' }}>
      {/* Background effects - rimossi per design più pulito */}
      <div className="absolute inset-0">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(circle at 20% 80%, #FFFFFF 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FFFFFF 0%, transparent 50%)' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-left md:text-center mb-12">
          <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-black mb-6 leading-[1.0] md:leading-[0.9] tracking-tight" style={{ color: '#1C1C1C' }}>
              Quanto costa costruire la tua presenza su LinkedIn?
            </h2>
          <p className="text-xl md:text-2xl max-w-4xl md:mx-auto leading-relaxed font-medium" style={{ color: '#666666' }}>
            Meno di quello che stai perdendo ogni mese senza una strategia.
          </p>
        </div>

        {/* Sezione Pricing Cards */}
        <div className="mb-8 lg:mb-4 -mt-4 lg:-mt-8">
          <PricingCards 
            tiers={pricingTiers}
            sectionClassName="py-0 px-0 bg-transparent"
            containerClassName="px-0 w-full lg:max-w-6xl mx-auto flex justify-center"
            className="gap-4 lg:gap-6 grid grid-cols-1 lg:grid-cols-2"
            cardClassName="backdrop-blur-sm shadow-xl"
          />
        </div>





      </div>
    </section>
  );
}