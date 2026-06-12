"use client";

import Link from "next/link";
import { DOC_PAGES, DOC_SECTIONS } from "@/lib/docs";
import DocCard from "./DocCard";
import { useReveal } from "./useReveal";

export default function Docs() {
  const [headRef, headShown] = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      id="docs"
      className="scroll-mt-24 relative py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 15% 30%, rgba(94,200,255,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto">
        <div
          ref={headRef}
          className={`mb-10 md:mb-12 ${headShown ? "anim-fade-up" : "opacity-0"}`}
        >
          <p className="text-xs text-mono text-halo uppercase tracking-[0.25em] mb-4">
            ◉ Developer docs
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-display text-bone leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Setup guides & <span className="italic shine-plasma">integrations.</span>
            </h2>
            <Link
              href="/docs"
              className="text-chrome text-sm text-mono hover:text-halo transition-colors sm:text-right"
            >
              View all docs →
            </Link>
          </div>
        </div>

        <div className="grid gap-8">
          {DOC_SECTIONS.map((section) => {
            const pages = DOC_PAGES.filter((doc) => doc.sectionId === section.id);
            if (!pages.length) return null;

            return (
              <div key={section.id}>
                <div className={`mb-4 ${headShown ? "anim-fade-up" : "opacity-0"}`}>
                  <h3 className="text-display text-lg text-bone">{section.title}</h3>
                  <p className="text-chrome text-sm mt-1 max-w-2xl">{section.description}</p>
                </div>
                <div className="grid gap-5">
                  {pages.map((doc, i) => (
                    <DocCard
                      key={doc.slug}
                      doc={doc}
                      className={headShown ? "anim-fade-up" : "opacity-0"}
                      style={{ animationDelay: `${0.08 + i * 0.08}s` }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
