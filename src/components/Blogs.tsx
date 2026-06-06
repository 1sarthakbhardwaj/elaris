"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogs";
import BlogPostCard from "./BlogPostCard";
import { useReveal } from "./useReveal";

export default function Blogs() {
  const [headRef, headShown] = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      id="blogs"
      className="scroll-mt-24 relative py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto">
        <div
          ref={headRef}
          className={`mb-10 md:mb-12 ${headShown ? "anim-fade-up" : "opacity-0"}`}
        >
          <p className="text-xs text-mono text-halo uppercase tracking-[0.25em] mb-4">
            ◉ From the team
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-display text-bone leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Blogs & <span className="italic shine-plasma">deep dives.</span>
            </h2>
            <Link
              href="/blogs"
              className="text-chrome text-sm text-mono hover:text-halo transition-colors sm:text-right"
            >
              View all posts →
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          {BLOG_POSTS.map((post, i) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              className={headShown ? "anim-fade-up" : "opacity-0"}
              style={{ animationDelay: `${0.08 + i * 0.08}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
