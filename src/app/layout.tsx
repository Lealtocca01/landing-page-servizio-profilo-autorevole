import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { ContactPopupProvider } from '@/contexts/ContactPopupContext';
import { ContactPopupManager } from '@/components/ContactPopupManager';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { IubendaScript, CookieBanner } from '@/components/IubendaScript';

export const metadata: Metadata = {
  title: 'Profilo Autorevole | Il tuo LinkedIn che attrae clienti',
  description: 'Hai provato a curare il tuo LinkedIn ma i clienti non arrivano? Con Profilo Autorevole costruiamo la tua presenza professionale e ti posizioniamo come il riferimento nel tuo settore, in soli 7 giorni.',
  keywords: 'LinkedIn, profilo professionale, personal branding, consulenti, imprenditori, networking, business',
  authors: [{ name: 'Profilo Autorevole' }],
  creator: 'Profilo Autorevole',
  publisher: 'Profilo Autorevole',
  openGraph: {
    title: 'Profilo Autorevole | Il tuo LinkedIn che attrae clienti',
    description: 'Hai provato a curare il tuo LinkedIn ma i clienti non arrivano? Con Profilo Autorevole costruiamo la tua presenza professionale e ti posizioniamo come il riferimento nel tuo settore, in soli 7 giorni.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Profilo Autorevole',
    images: [
      {
        url: 'https://profilo-autorevole.vercel.app/images/Screenshot%202025-09-29%20alle%2010.43.16.png',
        width: 1200,
        height: 630,
        alt: 'Profilo Autorevole - Il tuo LinkedIn che attrae clienti',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profilo Autorevole | Il tuo LinkedIn che attrae clienti',
    description: 'Hai provato a curare il tuo LinkedIn ma i clienti non arrivano? Con Profilo Autorevole costruiamo la tua presenza professionale e ti posizioniamo come il riferimento nel tuo settore, in soli 7 giorni.',
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
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
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