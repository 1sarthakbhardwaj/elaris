'use client';

import { Navbar } from '@/app/components/Navbar';
import { HeroSection } from '@/app/components/HeroSection';
import { PlatformMarquee } from '@/app/components/PlatformMarquee';
import { CreativeGridSection } from '@/app/components/CreativeGridSection';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PlatformMarquee />
      <CreativeGridSection />
      <Footer />
    </main>
  );
}
