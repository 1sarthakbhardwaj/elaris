import { Metadata } from "next";
import InnerHeadline from "@/components/blogs/blog-standard/InnerHeadline";
import Blog from "@/components/blogs/blog-standard/Blog";
import CTAWithMarquee from "@/components/blogs/blog-standard/CTAWithMarquee";

export const metadata: Metadata = {
  title: "Insights | ElarisLabs AI - The Agentic Business OS",
  description:
    "Model tests, live campaigns, and notes from the canvas, written by the team that ships the ElarisLabs operating system.",
};

export default function BlogsIndexPage() {
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
