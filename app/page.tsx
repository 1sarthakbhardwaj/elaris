'use client';

import { Navbar } from '@/app/components/Navbar';
import { HeroSection } from '@/app/components/HeroSection';
import { AgentSection } from '@/app/components/AgentSection';
import { WorkflowSection } from '@/app/components/WorkflowSection';
import { WhyElarisSection } from '@/app/components/WhyElarisSection';
import { CreativeGridSection } from '@/app/components/CreativeGridSection';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AgentSection />
      <WorkflowSection />
      <WhyElarisSection />
      <CreativeGridSection />
      <Footer />
    </main>
  );
}
