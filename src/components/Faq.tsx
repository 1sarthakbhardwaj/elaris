"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faq";
import { useReveal } from "./useReveal";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open ? "rotate-180 text-halo" : "text-chrome"
      }`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [headRef, headShown] = useReveal<HTMLDivElement>(0.2);
  const [listRef, listShown] = useReveal<HTMLDivElement>(0.15);

  return (
    <section className="relative py-28 md:py-32 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 canvas-grid opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(109,166,217,0.10) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(201,176,135,0.05) 0%, transparent 45%)",
        }}
      />

      <div className="relative max-w-[920px] mx-auto">
        <div
          ref={headRef}
          className={`text-center ${headShown ? "anim-fade-up" : "opacity-0"}`}
        >
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
            ◉ FAQ
          </p>
          <h2 className="text-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-bone">
            Frequently asked
            <span className="italic shine-plasma glow-plasma"> questions.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-bone/70 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about ElarisLabs. What you can build,
            how brand memory works, and how billing, security, and team
            collaboration fit together.
          </p>
        </div>

        <div
          ref={listRef}
          className={`mt-14 glass rounded-2xl overflow-hidden ${listShown ? "anim-fade-up d-1" : "opacity-0"}`}
        >
          {FAQS.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={item.q}
                className={i > 0 ? "border-t border-white/[0.06]" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-6 text-left px-5 md:px-7 py-5 md:py-6 hover:bg-white/[0.02] transition-colors group"
                >
                  <span
                    className={`text-[15px] md:text-base leading-snug font-medium transition-colors ${
                      open ? "text-bone" : "text-bone/90 group-hover:text-bone"
                    }`}
                  >
                    {item.q}
                  </span>
                  <Chevron open={open} />
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-7 pb-6 pr-8 md:pr-16 text-sm md:text-[15px] leading-relaxed text-bone/75 space-y-4">
                      <p>{item.intro}</p>
                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="space-y-2.5">
                          {item.bullets.map((b) => (
                            <li key={b.label} className="flex items-start gap-3">
                              <span
                                aria-hidden
                                className="mt-[0.55em] h-1.5 w-1.5 rounded-full bg-halo shadow-[0_0_8px_rgba(168,205,239,0.6)] shrink-0"
                              />
                              <span>
                                <span className="font-semibold text-bone">{b.label}:</span>{" "}
                                <span className="text-bone/70">{b.body}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.outro && <p>{item.outro}</p>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
