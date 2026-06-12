"use client";

import Link from "next/link";
import type { DocPage } from "@/lib/docs";

type DocCardProps = {
  doc: DocPage;
  className?: string;
  style?: React.CSSProperties;
  headingLevel?: "h2" | "h3";
};

export default function DocCard({
  doc,
  className = "",
  style,
  headingLevel = "h3",
}: DocCardProps) {
  const TitleTag = headingLevel;

  return (
    <Link
      href={doc.href}
      className={`group glass rounded-2xl overflow-hidden border border-white/[0.08] hover:border-halo/25 hover-lift transition-colors block ${className}`}
      style={style}
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[min(38%,280px)] shrink-0 aspect-[16/10] md:aspect-auto md:min-h-[200px] bg-ink overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={doc.image}
            alt={doc.imageAlt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coal/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-coal/30 pointer-events-none" />
        </div>

        <div className="flex flex-col justify-between gap-5 p-6 md:p-7 min-w-0 flex-1">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] text-mono uppercase tracking-[0.2em] text-halo px-2.5 py-1 rounded-full glass-plasma">
                Guide
              </span>
              <span className="text-[10px] text-mono text-chrome/70 uppercase tracking-[0.16em]">
                {doc.readTime}
              </span>
            </div>
            <TitleTag className="text-display text-xl md:text-2xl text-bone leading-snug group-hover:text-lume transition-colors">
              {doc.title}
            </TitleTag>
            <p className="mt-3 text-chrome text-sm md:text-base leading-relaxed">
              {doc.excerpt}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {doc.topics.map((topic) => (
                <li
                  key={topic}
                  className="list-none text-[11px] text-mono text-chrome/80 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm text-halo group-hover:gap-2.5 transition-all">
            Open guide
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
