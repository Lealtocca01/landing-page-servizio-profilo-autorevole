import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { HowItWorksNew } from '@/components/HowItWorksNew';
import { WeeklyBenefits } from '@/components/WeeklyBenefits';
import { SocialProof } from '@/components/SocialProof';
import { ComparisonTable } from '@/components/ComparisonTable';
import { FinalCTA } from '@/components/FinalCTA';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Navbar />
      <Hero />
      {/* <HowItWorks /> */}
      <HowItWorksNew />
      <WeeklyBenefits />
      <SocialProof />
      <ComparisonTable />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  );
}