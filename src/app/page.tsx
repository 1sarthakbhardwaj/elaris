import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import VideoResources from "@/components/VideoResources";
import PressFeature from "@/components/PressFeature";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
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
      <ProductsGrid />
      <VideoResources />
      <PressFeature />
      <Blogs />
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
