import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HowItWorksNew } from '@/components/HowItWorksNew';
import { NoContracts } from '@/components/NoContracts';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#0B1020' }}>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorksNew />
      <NoContracts />
      <FinalCTA />
      <Footer />
    </main>
  );
}
