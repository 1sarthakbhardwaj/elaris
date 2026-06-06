"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/blogs";

type BlogPostCardProps = {
  post: BlogPost;
  className?: string;
  style?: React.CSSProperties;
  headingLevel?: "h2" | "h3";
};

export default function BlogPostCard({
  post,
  className = "",
  style,
  headingLevel = "h3",
}: BlogPostCardProps) {
  const TitleTag = headingLevel;

  return (
    <Link
      href={post.href}
      className={`group glass rounded-2xl overflow-hidden border border-white/[0.08] hover:border-halo/25 hover-lift transition-colors block ${className}`}
      style={style}
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[min(42%,320px)] shrink-0 aspect-[16/10] md:aspect-auto md:min-h-[220px] bg-ink overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.imageAlt}
            className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-coal/20 pointer-events-none" />
        </div>

        <div className="flex flex-col justify-between gap-5 p-6 md:p-8 min-w-0 flex-1">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] text-mono uppercase tracking-[0.2em] text-halo px-2.5 py-1 rounded-full glass-plasma">
                {post.category}
              </span>
              <span className="text-[10px] text-mono text-chrome/70 uppercase tracking-[0.16em]">
                {post.readTime}
              </span>
            </div>
            <TitleTag className="text-display text-2xl md:text-3xl text-bone leading-snug group-hover:text-lume transition-colors">
              {post.title}
            </TitleTag>
            <p className="mt-3 text-chrome text-sm md:text-base leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm text-halo group-hover:gap-2.5 transition-all">
            Read article
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
