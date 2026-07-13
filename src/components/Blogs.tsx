"use client";

import { BLOG_POSTS } from "@/lib/blogs";
import BlogPostCard from "./BlogPostCard";
import { useReveal } from "./useReveal";

export default function Blogs() {
  const [ref, shown] = useReveal<HTMLDivElement>(0.2);
  const featuredPost = BLOG_POSTS.find(
    (post) => post.slug === "mcdonalds-qatar-live-dooh",
  );

  if (!featuredPost) return null;

  return (
    <section
      id="blogs"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] px-6 py-20 md:px-10 md:py-28"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.08) 0%, transparent 55%)",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-[1100px]">
        <p
          className={`mb-6 text-xs text-mono uppercase tracking-[0.25em] text-halo ${
            shown ? "anim-fade-up" : "opacity-0"
          }`}
        >
          ◉ Featured blog
        </p>
        <BlogPostCard
          post={featuredPost}
          className={shown ? "anim-fade-up" : "opacity-0"}
        />
      </div>
    </section>
  );
}
