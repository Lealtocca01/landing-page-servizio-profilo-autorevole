import type { Metadata } from 'next';
import './globals.css';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';

export const metadata: Metadata = {
  title: 'Profilo Autorevole | Trasforma il tuo LinkedIn in uno strumento di business',
  description: 'Nel 2025 non puoi non essere su LinkedIn. Con Profilo Autorevole trasformiamo il tuo LinkedIn nel biglietto da visita che attrae clienti. Servizio professionale per consulenti e imprenditori.',
  keywords: 'LinkedIn, profilo professionale, personal branding, consulenti, imprenditori, networking, business',
  authors: [{ name: 'Profilo Autorevole' }],
  creator: 'Profilo Autorevole',
  publisher: 'Profilo Autorevole',
  openGraph: {
    title: 'Profilo Autorevole | LinkedIn che converte',
    description: 'Trasforma il tuo LinkedIn nel biglietto da visita che attrae clienti. Servizio professionale €250/mese.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'Profilo Autorevole'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Profilo Autorevole | LinkedIn che converte',
    description: 'Trasforma il tuo LinkedIn nel biglietto da visita che attrae clienti.'
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
      <body className="antialiased">
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}