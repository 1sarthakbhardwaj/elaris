import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/faq/InnerHeadline";
import ParallaxDividerImage from "@/components/other-pages/faq/ParallaxDividerImage";
import BlogPreview from "@/components/other-pages/faq/BlogPreview";
import CTAWithMarquee from "@/components/other-pages/faq/CTAWithMarquee";
export const metadata: Metadata = {
  title: "FAQ | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function FaqPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <ParallaxDividerImage />
        <BlogPreview />
        <CTAWithMarquee />
      </div>
    </>
  );
}
