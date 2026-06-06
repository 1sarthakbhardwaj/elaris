import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostCard from "@/components/BlogPostCard";
import { BLOG_POSTS } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs | ElarisLabs",
  description:
    "Deep dives on brand onboarding, agentic creative workflows, and the infrastructure behind ElarisLabs.",
};

export default function BlogsPage() {
  return (
    <main className="relative min-h-screen bg-coal text-bone">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-16 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-60 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(109,166,217,0.14) 0%, transparent 55%)",
          }}
        />

        <div className="relative max-w-[900px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.25em] mb-5 anim-fade-up">
            ◉ Blogs
          </p>
          <h1 className="text-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-tight anim-fade-up d-1">
            Stories from the <span className="italic shine-plasma">studio.</span>
          </h1>
          <p className="mt-5 text-chrome text-base md:text-lg max-w-2xl anim-fade-up d-2">
            Product notes, engineering deep dives, and how we think about agentic creative at scale.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[900px] mx-auto grid gap-5">
          {BLOG_POSTS.map((post, i) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              headingLevel="h2"
              className="anim-fade-up"
              style={{ animationDelay: `${0.12 + i * 0.08}s` }}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
