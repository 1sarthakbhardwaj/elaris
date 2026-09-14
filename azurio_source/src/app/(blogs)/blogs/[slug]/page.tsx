import { notFound } from "next/navigation";
import { Metadata } from "next";
import ArticleShell from "@/components/blogs/article/ArticleShell";
import MoreOnTopic from "@/components/blogs/blog-article/MoreOnTopic";
import CTAWithMarquee from "@/components/blogs/blog-article/CTAWithMarquee";
import { BLOG_POSTS, getPostBySlug } from "@/data/blogs";
import { getPostBody } from "@/components/blogs/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Insight | ElarisLabs AI" };
  }
  return {
    title: `${post.title} | ElarisLabs AI`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  const Body = getPostBody(post.slug);

  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <ArticleShell post={post}>
          <Body />
        </ArticleShell>
        <MoreOnTopic currentSlug={slug} />
        <CTAWithMarquee />
      </div>
    </>
  );
}
