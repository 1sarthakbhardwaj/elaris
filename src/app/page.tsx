import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import VideoResources from "@/components/VideoResources";
import PressFeature from "@/components/PressFeature";
import Docs from "@/components/Docs";
import Blogs from "@/components/Blogs";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProductsGrid />
      <VideoResources />
      <PressFeature />
      <Docs />
      <Blogs />
      <Faq />
      <Footer />
    </main>
  );
}
