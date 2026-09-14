import Footer3 from "@/components/footers/Footer3";
import { Metadata } from "next";
import Hero from "@/components/homes/index-digital-agency/Hero";
import AboutProcess from "@/components/homes/index-digital-agency/AboutProcess";
import ProjectsShowcase from "@/components/homes/index-digital-agency/ProjectsShowcase";
import OfferingsShowcase from "@/components/homes/index-digital-agency/OfferingsShowcase";
import PressFeature from "@/components/homes/index-digital-agency/PressFeature";
import ParallaxDividerVideo from "@/components/homes/index-digital-agency/ParallaxDividerVideo";
import TestimonialsSticky from "@/components/homes/index-digital-agency/TestimonialsSticky";
import ParallaxDividerImage from "@/components/homes/index-digital-agency/ParallaxDividerImage";
import BlogPreview from "@/components/homes/index-digital-agency/BlogPreview";
import Divider from "@/components/homes/index-digital-agency/Divider";
export const metadata: Metadata = {
  title: "ElarisLabs AI - The Agentic Business OS to Build & Grow",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function IndexDigitalAgencyPage() {
  return (
    <>
      <>
        <Hero />
        <AboutProcess />
        <ProjectsShowcase />
        <OfferingsShowcase />
        <ParallaxDividerVideo />
        <PressFeature />
        <TestimonialsSticky />
        <ParallaxDividerImage />
        <BlogPreview />
        <Divider />
      </>
      <Footer3 />
    </>
  );
}
