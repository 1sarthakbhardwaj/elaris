import { Metadata } from "next";
import InnerHeadline from "@/components/projects/project-details/InnerHeadline";
import ParallaxDividerImage from "@/components/projects/project-details/ParallaxDividerImage";
import SplitList from "@/components/projects/project-details/SplitList";
import ImagesGrid from "@/components/projects/project-details/ImagesGrid";
import SplitList2 from "@/components/projects/project-details/SplitList2";
import ImagesGrid2 from "@/components/projects/project-details/ImagesGrid2";
import SplitList3 from "@/components/projects/project-details/SplitList3";
import ParallaxDividerImage2 from "@/components/projects/project-details/ParallaxDividerImage2";
import ClientSFeedback from "@/components/projects/project-details/ClientSFeedback";
import NextProjectLink from "@/components/projects/project-details/NextProjectLink";
import CTAWithMarquee from "@/components/projects/project-details/CTAWithMarquee";
export const metadata: Metadata = {
  title:
    "Project Details | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function ProjectDetailsPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <ParallaxDividerImage />
        <SplitList />
        <ImagesGrid />
        <SplitList2 />
        <ImagesGrid2 />
        <SplitList3 />
        <ParallaxDividerImage2 />
        <ClientSFeedback />
        <NextProjectLink />
        <CTAWithMarquee />
      </div>
    </>
  );
}
