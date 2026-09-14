import { Metadata } from "next";
import InnerHeadline from "@/components/projects/works-grid-sticky/InnerHeadline";
import ProjectsGridStickyShowcase from "@/components/projects/works-grid-sticky/ProjectsGridStickyShowcase";
import ParallaxDividerVideo from "@/components/projects/works-grid-sticky/ParallaxDividerVideo";
import ProjectsList from "@/components/projects/works-grid-sticky/ProjectsList";
import CTAWithMarquee from "@/components/projects/works-grid-sticky/CTAWithMarquee";
export const metadata: Metadata = {
  title:
    "Works Grid Sticky | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function WorksGridStickyPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <ProjectsGridStickyShowcase />
        <ParallaxDividerVideo />
        <ProjectsList />
        <CTAWithMarquee />
      </div>
    </>
  );
}
