import { Metadata } from "next";
import InnerHeadlineArticle from "@/components/blogs/blog-creative/InnerHeadlineArticle";
import BlogGrid from "@/components/blogs/blog-creative/BlogGrid";
import CTA from "@/components/blogs/blog-creative/CTA";
export const metadata: Metadata = {
  title: "Field Notes | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function BlogCreativePage() {
  return (
    <>
      <>
        <InnerHeadlineArticle />
        <BlogGrid />
        <CTA />
      </>
    </>
  );
}
