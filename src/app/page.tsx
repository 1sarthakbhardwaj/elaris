import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParallaxDivider from "@/components/ParallaxDivider";
import CreativesMarquee from "@/components/CreativesMarquee";
import VideoResources from "@/components/VideoResources";
import PressFeature from "@/components/PressFeature";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import SectionRecede from "@/components/motion/SectionRecede";
import { faqPageJsonLd } from "@/lib/faq";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <CreativesMarquee />
      <ParallaxDivider
        video="1280x720_bw-geometry"
        poster="/video/1280x720_bw-geometry.webp"
        label="Showreel"
        eyebrow="One canvas"
        lead="Brief in."
        tail="Campaign out."
      />
      {/* Each wrapped section pins and recedes as the next scrolls over it. */}
      <SectionRecede>
        <VideoResources />
      </SectionRecede>
      <ParallaxDivider
        video="640x360_stone-geometry"
        poster="/video/1280x720_stone-geometry-banner.webp"
        label="Brand memory"
        eyebrow="Deterministic by default"
        lead="Change it once."
        tail="It changes everywhere."
        size="sm"
      />
      <SectionRecede>
        <PressFeature />
      </SectionRecede>
      <SectionRecede>
        <Blogs />
      </SectionRecede>
      <Faq />
      <Footer />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd()) }}
      />
    </main>
  );
}
