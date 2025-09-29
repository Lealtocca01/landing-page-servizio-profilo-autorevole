import type { Metadata } from 'next';
import './globals.css';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { ContactPopupProvider } from '@/contexts/ContactPopupContext';
import { ContactPopupManager } from '@/components/ContactPopupManager';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { IubendaScript, CookieBanner } from '@/components/IubendaScript';

export const metadata: Metadata = {
  title: 'Profilo Autorevole | Costruisci la tua presenza su LinkedIn al miglior rapporto qualità prezzo',
  description: 'Sei un professionista nel tuo settore? Se nel 2025 non sei su LinkedIn stai perdendo soldi. Con Profilo Autorevole costruisci la tua presenza online e diventi la scelta giusta per più clienti, in soli 7 giorni.',
  keywords: 'LinkedIn, profilo professionale, personal branding, consulenti, imprenditori, networking, business',
  authors: [{ name: 'Profilo Autorevole' }],
  creator: 'Profilo Autorevole',
  publisher: 'Profilo Autorevole',
  openGraph: {
    title: 'Profilo Autorevole | Costruisci la tua presenza su LinkedIn al miglior rapporto qualità prezzo',
    description: 'Sei un professionista nel tuo settore? Se nel 2025 non sei su LinkedIn stai perdendo soldi. Con Profilo Autorevole costruisci la tua presenza online e diventi la scelta giusta per più clienti, in soli 7 giorni.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Profilo Autorevole',
    images: [
      {
        url: 'https://profilo-autorevole.vercel.app/images/Screenshot%202025-09-29%20alle%2010.43.16.png',
        width: 1200,
        height: 630,
        alt: 'Profilo Autorevole - Costruisci la tua presenza su LinkedIn al miglior rapporto qualità prezzo',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profilo Autorevole | Costruisci la tua presenza su LinkedIn al miglior rapporto qualità prezzo',
    description: 'Sei un professionista nel tuo settore? Se nel 2025 non sei su LinkedIn stai perdendo soldi. Con Profilo Autorevole costruisci la tua presenza online e diventi la scelta giusta per più clienti, in soli 7 giorni.',
    images: ['https://profilo-autorevole.vercel.app/images/Screenshot%202025-09-29%20alle%2010.43.16.png']
  },
  robots: 'index, follow'
};

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        {/* Iubenda Privacy Controls and Cookie Solution */}
        <script 
          type="text/javascript" 
          src="https://embeds.iubenda.com/widgets/f73f43b3-1ba0-44a8-9370-a851706f44fd.js"
          async
        />
      </head>
      <body className="antialiased">
        <ContactPopupProvider>
          <ScrollProgressBar />
          {children}
          <ContactPopupManager />
          <CookieBanner />
        </ContactPopupProvider>
        {/* Vercel Speed Insights - monitors performance metrics */}
        <SpeedInsights />
        {/* Iubenda Cookie and Privacy Management */}
        <IubendaScript />
        
        {/* Script Iubenda per Privacy Policy e Cookie Policy */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function (w,d) {
                var loader = function () {
                  var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; 
                  s.src="https://cdn.iubenda.com/iubenda.js"; 
                  tag.parentNode.insertBefore(s,tag);
                }; 
                if(w.addEventListener){
                  w.addEventListener("load", loader, false);
                }else if(w.attachEvent){
                  w.attachEvent("onload", loader);
                }else{
                  w.onload = loader;
                }
              })(window, document);
            `
          }}
        />
      </body>
    </html>
  );
}