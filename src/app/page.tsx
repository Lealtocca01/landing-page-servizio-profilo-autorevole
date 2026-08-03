import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { PainPoints } from '@/components/PainPoints';
import { WhyItFailed } from '@/components/WhyItFailed';
import { HowItWorksNew } from '@/components/HowItWorksNew';
import { FinalCTA } from '@/components/FinalCTA';
import { NoContracts } from '@/components/NoContracts';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <PainPoints />
      <WhyItFailed />
      <HowItWorksNew />
      <FinalCTA />
      <NoContracts />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
