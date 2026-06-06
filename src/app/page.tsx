import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import VideoResources from "@/components/VideoResources";
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
      <Blogs />
      <Faq />
      <Footer />
    </main>
  );
}
