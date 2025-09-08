'use client';

import Image from 'next/image';
import { Crown } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';
import { useContactPopup } from '@/contexts/ContactPopupContext';

export function ComparisonTable() {
  const { openPopup } = useContactPopup();

  const features = [
    {
      feature: "Cosa Offre",
      profiloAutorevole: "Specializzati nel costruire la tua presenza su Linkedln, con un metodo testato per trasformare il profilo in un vero asset digitale",
      competitors: "Tanti canali seguiti in modo superficiale, senza focus e conoscenza di LinkedIn",
      freelancer: "Gestione \"alla buona\" del profilo, nei ritagli di tempo, senza strategia né costanza"
    },
    {
      feature: "Quanto Costa",
      profiloAutorevole: "250€/mese – tutto incluso, senza costi nascosti",
      competitors: "Migliaia di euro al mese per servizi generici",
      freelancer: "Apparentemente poco, ma danni alla tua immagine"
    },
    {
      feature: "Chi c'è Dietro",
      profiloAutorevole: "Specialisti LinkedIn: competenza verticale e focus totale",
      competitors: "Agenzie generaliste che fanno \"un po' di tutto\"",
      freelancer: "Un improvvisato senza esperienza che fa esperimenti con la tua immagine"
    },
    {
      feature: "Risultati Ottenuti",
      profiloAutorevole: "Crescita costante di visibilità, autorevolezza e nuove opportunità con oltre 100 professionisti",
      competitors: "Risultati discontinui e poco misurabili",
      freelancer: "Nessuna crescita reale, il profilo resta invisibile"
    }
  ];

  return (
    <section id="prezzi" className="section-padding" style={{ background: '#040124' }}>
      {/* Immagine - visibile solo su mobile */}
      <div className="mb-12 block lg:hidden">
        <div className="relative flex justify-center">
          <div className="relative max-w-sm mx-auto">
            <Image 
              src="/images/Cell.png" 
              alt="Smartphone con analytics di performance e crescita business"
              width={400}
              height={600}
              className="w-full h-auto object-contain drop-shadow-lg filter"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.15)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.1))',
              }}
            />
          </div>
        </div>
      </div>
      
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="mb-6">
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 italic">
              Ancora non sei convinto?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              Ecco perché <span className="text-gradient">Profilo Autorevole</span> è la scelta migliore per te.
            </h2>
          </div>
        </div>

        {/* Modern Cards Layout */}
        <div className="space-y-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Feature Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.feature}</h3>
                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-transparent w-24"></div>
              </div>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Profilo Autorevole - Winner Card */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-green-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative backdrop-blur-sm bg-slate-900/80 border border-blue-500/30 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <Crown size={24} className="text-blue-400 mr-3" />
                      <h4 className="text-white font-bold text-lg">Profilo Autorevole</h4>
                      <div className="ml-auto">
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">MIGLIORE</span>
                      </div>
                    </div>
                    <p className="text-blue-200 leading-relaxed">{item.profiloAutorevole}</p>
                  </div>
                </div>

                {/* Agenzia Tradizionale */}
                <div className="relative group">
                  <div className="backdrop-blur-sm bg-slate-800/60 border border-slate-600/30 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-orange-500/20 rounded-full mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      </div>
                      <h4 className="text-slate-300 font-semibold">Agenzia Tradizionale</h4>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{item.competitors}</p>
                  </div>
                </div>

                {/* Freelancer */}
                <div className="relative group">
                  <div className="backdrop-blur-sm bg-slate-800/40 border border-slate-700/30 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      </div>
                      <h4 className="text-slate-400 font-semibold">Dipendente / Freelancer</h4>
                    </div>
                    <p className="text-slate-500 leading-relaxed">{item.freelancer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex justify-center lg:justify-start">
            <GradientButton onClick={openPopup}>
              <span>Candidati ora per Profilo Autorevole</span>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}