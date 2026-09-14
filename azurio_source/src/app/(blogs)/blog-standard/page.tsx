import { Metadata } from "next";
import InnerHeadline from "@/components/blogs/blog-standard/InnerHeadline";
import Blog from "@/components/blogs/blog-standard/Blog";
import CTAWithMarquee from "@/components/blogs/blog-standard/CTAWithMarquee";
export const metadata: Metadata = {
  title: "Insights | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function BlogStandardPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <Blog />
        <CTAWithMarquee />
      </div>
    </>
  );
}
