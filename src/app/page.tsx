import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

import { HowItWorksNew } from '@/components/HowItWorksNew';
import { FreeConsultation } from '@/components/FreeConsultation';
import { NoContracts } from '@/components/NoContracts';
import { WhyChooseUs } from '@/components/WhyChooseUs';

import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#0B1020' }}>
      <Navbar />
      <Hero />
      <HowItWorksNew />
      <FinalCTA />
      <NoContracts />
      <FreeConsultation />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}