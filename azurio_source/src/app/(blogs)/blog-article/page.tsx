import { Metadata } from "next";
import BlogArticle from "@/components/blogs/blog-article/BlogArticle";
import MoreOnTopic from "@/components/blogs/blog-article/MoreOnTopic";
import CTAWithMarquee from "@/components/blogs/blog-article/CTAWithMarquee";
export const metadata: Metadata = {
  title: "Insight | ElarisLabs AI - The Agentic Business OS",
  description:
    "ElarisLabs is a single node based canvas where AI agents build your website, app UI and pitch deck, then run your global campaigns under one brand memory.",
};
export default function BlogArticlePage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <BlogArticle />
        <MoreOnTopic />
        <CTAWithMarquee />
      </div>
    </>
  );
}
