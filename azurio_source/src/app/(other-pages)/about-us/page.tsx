import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/about-us/InnerHeadline";
import ParallaxDividerImage from "@/components/other-pages/about-us/ParallaxDividerImage";
import Process from "@/components/other-pages/about-us/Process";
import DoubleMarqueeDivider from "@/components/other-pages/about-us/DoubleMarqueeDivider";
import Awards from "@/components/other-pages/about-us/Awards";
import TeamGrid from "@/components/other-pages/about-us/TeamGrid";
import ParallaxDividerImage2 from "@/components/other-pages/about-us/ParallaxDividerImage2";
import Approach from "@/components/other-pages/about-us/Approach";
import BlogPreview from "@/components/other-pages/about-us/BlogPreview";
import CTAWithMarquee from "@/components/other-pages/about-us/CTAWithMarquee";
export const metadata: Metadata = {
  title: "About ElarisLabs | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function AboutUsPage() {
  return (
    <>
      <>
        <InnerHeadline />
        <ParallaxDividerImage />
        <Process />
        <DoubleMarqueeDivider />
        <Awards />
        <TeamGrid />
        <ParallaxDividerImage2 />
        <Approach />
        <BlogPreview />
        <CTAWithMarquee />
      </>
    </>
  );
}
