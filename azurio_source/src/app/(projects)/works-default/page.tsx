import { Metadata } from "next";
import InnerHeadline from "@/components/projects/works-default/InnerHeadline";
import ProjectsStack from "@/components/projects/works-default/ProjectsStack";
import ProjectsList from "@/components/projects/works-default/ProjectsList";
import ParallaxDividerVideo from "@/components/projects/works-default/ParallaxDividerVideo";
import TestimonialsSticky from "@/components/projects/works-default/TestimonialsSticky";
import CTAWithMarquee from "@/components/projects/works-default/CTAWithMarquee";
export const metadata: Metadata = {
  title: "Case Studies | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function WorksDefaultPage() {
  return (
    <>
      <InnerHeadline />
      <ProjectsStack />
      <ProjectsList />
      <ParallaxDividerVideo />
      <TestimonialsSticky />
      <CTAWithMarquee />
    </>
  );
}
