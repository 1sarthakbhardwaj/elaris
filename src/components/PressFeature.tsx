"use client";

import Link from "next/link";
import { PRESS_FEATURE } from "@/lib/press";
import { useReveal } from "./useReveal";

export default function PressFeature() {
  const [ref, shown] = useReveal<HTMLDivElement>(0.18);
  const { outlet, date, headline, quote, href, caseStudyHref, stats } =
    PRESS_FEATURE;

  return (
    <section
      aria-label="Press coverage"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-20 md:px-10 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(109,166,217,0.10) 0%, transparent 55%)",
        }}
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-[1100px] ${shown ? "anim-fade-up" : "opacity-0"}`}
      >
        <div className="mb-8 flex flex-col gap-3">
          <p className="text-xs text-mono uppercase tracking-[0.25em] text-halo">
            ◉ In the press
          </p>
          <h2
            className="text-display leading-[1.08] tracking-tight text-bone"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Featured in{" "}
            <span className="italic shine-plasma">Campaign Middle East.</span>
          </h2>
        </div>

        <div className="glass relative overflow-hidden rounded-2xl border border-white/[0.08] p-7 md:p-10">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(168,205,239,0.5), transparent)",
            }}
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="min-w-0 flex-1">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="text-mono text-sm font-semibold uppercase tracking-[0.14em] text-bone">
                  {outlet}
                </span>
                <span className="h-1 w-1 rounded-full bg-chrome/50" aria-hidden />
                <span className="text-mono text-xs uppercase tracking-[0.14em] text-chrome/70">
                  {date}
                </span>
              </div>

              <p className="text-lg font-medium leading-snug text-bone md:text-xl">
                &ldquo;{headline}&rdquo;
              </p>

              <p className="mt-4 text-sm leading-relaxed text-chrome md:text-base">
                {quote}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-br from-lume to-halo px-4 py-2.5 text-sm font-semibold text-coal shadow-[0_0_30px_-8px_rgba(168,205,239,0.6)] transition-all hover:shadow-[0_0_44px_-6px_rgba(168,205,239,0.85)] hover:brightness-105"
                >
                  Read the feature
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </a>

                {caseStudyHref && (
                  <Link
                    href={caseStudyHref}
                    className="group inline-flex items-center gap-1.5 text-sm text-halo transition-all hover:gap-2.5"
                  >
                    Read our breakdown
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>

            <div className="grid shrink-0 grid-cols-3 gap-6 border-t border-white/[0.08] pt-7 lg:grid-cols-1 lg:gap-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-display text-3xl leading-none text-bone md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] text-mono uppercase tracking-[0.16em] text-chrome/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
