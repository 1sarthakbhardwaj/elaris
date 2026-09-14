import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/team/InnerHeadline";
import SplitAboutTeam from "@/components/other-pages/team/SplitAboutTeam";
import TeamList from "@/components/other-pages/team/TeamList";
import ParallaxDividerImage from "@/components/other-pages/team/ParallaxDividerImage";
import TestimonialsSlider from "@/components/other-pages/team/TestimonialsSlider";
import CTAWithMarquee from "@/components/other-pages/team/CTAWithMarquee";
export const metadata: Metadata = {
  title: "Team | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function TeamPage() {
  return (
    <>
      <>
        <InnerHeadline />
        <SplitAboutTeam />
        <TeamList />
        <ParallaxDividerImage />
        <TestimonialsSlider />
        <CTAWithMarquee />
      </>
    </>
  );
}
