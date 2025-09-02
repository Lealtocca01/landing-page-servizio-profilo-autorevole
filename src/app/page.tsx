import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

import { HowItWorksNew } from '@/components/HowItWorksNew';
import { NoContracts } from '@/components/NoContracts';

import { ComparisonTable } from '@/components/ComparisonTable';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Navbar />
      <Hero />

      <HowItWorksNew />
      <FinalCTA />
      <NoContracts />
      <ComparisonTable />
      <Footer />
    </main>
  );
}