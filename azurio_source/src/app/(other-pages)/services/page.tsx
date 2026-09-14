import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/services/InnerHeadline";
import ServicesDescriptionStack from "@/components/other-pages/services/ServicesDescriptionStack";
import ParallaxDividerImage from "@/components/other-pages/services/ParallaxDividerImage";
import BlogPreview from "@/components/other-pages/services/BlogPreview";
import CTAWithMarquee from "@/components/other-pages/services/CTAWithMarquee";
export const metadata: Metadata = {
  title: "The Platform | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function ServicesPage() {
  return (
    <>
      <>
        <InnerHeadline />
        <ServicesDescriptionStack />
        <ParallaxDividerImage />
        <BlogPreview />
        <CTAWithMarquee />
      </>
    </>
  );
}
