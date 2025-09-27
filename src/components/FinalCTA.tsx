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
        { name: "3 post a settimana (12 al mese)", included: true },
        { name: "Strategia e piano editoriale personalizzato", included: true },
        { name: "Creazione contenuti professionali + grafiche", included: true },
        { name: "Pubblicazione costante", included: true },
        { name: "Gestione engagement (commenti, interazioni)", included: true },
        { name: "Monitoraggio e ottimizzazione continua", included: true },
        { name: "2 call a settimana direttamente con il tuo consulente di riferimento per qualsiasi domande o dubbi", included: true },
      ],
      bottomNote: "Tutto questo a meno di un terzo del costo di un dipendente PART-TIME al mese",
      cta: {
        text: "Richiedi Maggiori Informazioni",
        onClick: () => openPopup('package') // Apri il popup per il pacchetto
      },
      isPopular: true // Aggiungo il flag per "Più Popolare"
    },
  ];

  return (
    <section id="cta" className="pt-12 md:pt-16 lg:pt-20 pb-4 md:pb-2 lg:pb-1 relative overflow-hidden" style={{ background: '#E2E8F0' }}>
      {/* Background effects - rimossi per design più pulito */}
      <div className="absolute inset-0">
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{ background: 'radial-gradient(circle at 20% 80%, #D3F20F 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D3F20F 0%, transparent 50%)' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-left md:text-center mb-12">
          <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-black mb-6 leading-[1.0] md:leading-[0.9] tracking-tight" style={{ color: '#1A2246' }}>
              Uno dei servizi più richiesti di{' '}
              <span 
                style={{ 
                  color: '#1A2246',
                  textShadow: '0 0 20px rgba(26,34,70,0.3)'
                }}
              >
                Profilo Autorevole
              </span>
            </h2>
          <p className="text-xl md:text-2xl max-w-4xl md:mx-auto leading-relaxed font-medium" style={{ color: '#64748B' }}>
            Quanto ti costerà costruire la tua presenza digitale e per farti scegliere dai tuoi clienti?
          </p>
        </div>

        {/* Sezione Pricing Cards */}
        <div className="mb-8 lg:mb-4 -mt-4 lg:-mt-8">
          <PricingCards 
            tiers={pricingTiers}
            sectionClassName="py-0 px-0 bg-transparent"
            containerClassName="px-0 w-full lg:max-w-xl mx-auto"
            className="gap-4 lg:gap-6"
            cardClassName="backdrop-blur-sm shadow-xl"
          />
        </div>




      </div>
    </section>
  );
}