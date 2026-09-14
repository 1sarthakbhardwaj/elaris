import { Metadata } from "next";
import InnerHeadline from "@/components/projects/works-grid/InnerHeadline";
import ProjectsGridX3Showcase from "@/components/projects/works-grid/ProjectsGridX3Showcase";
import ParallaxDividerVideo from "@/components/projects/works-grid/ParallaxDividerVideo";
import TestimonialsSticky from "@/components/projects/works-grid/TestimonialsSticky";
import CTAWithMarquee from "@/components/projects/works-grid/CTAWithMarquee";
export const metadata: Metadata = {
  title: "Case Studies by Industry | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function WorksGridPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <ProjectsGridX3Showcase />
        <ParallaxDividerVideo />
        <TestimonialsSticky />
        <CTAWithMarquee />
      </div>
    </>
  );
}
