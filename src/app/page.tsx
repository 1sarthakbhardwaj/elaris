import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProductsGrid />
      <Faq />
      <Footer />
    </main>
  );
}
