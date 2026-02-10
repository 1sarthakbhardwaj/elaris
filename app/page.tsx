'use client';

import { Navbar } from '@/app/components/Navbar';
import { HeroSection } from '@/app/components/HeroSection';
import { PlatformMarquee } from '@/app/components/PlatformMarquee';
import { CreativeGridSection } from '@/app/components/CreativeGridSection';
import { AgentSection } from '@/app/components/AgentSection';
import { AdFormatsSection } from '@/app/components/AdFormatsSection';
import { WorkflowSection } from '@/app/components/WorkflowSection';
import { WhyElarisSection } from '@/app/components/WhyElarisSection';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PlatformMarquee />
      <CreativeGridSection />
      <AgentSection />
      <AdFormatsSection />
      <WorkflowSection />
      <WhyElarisSection />
      <Footer />
    </main>
  );
}
