"use client";

import { CALENDLY_BOOKING_URL, STUDIO_APP_URL } from "@/lib/site";
import { useReveal } from "./useReveal";

const STATS: { num: string; label: string }[] = [
  { num: "100%", label: "brand IP compliance" },
  { num: "Weeks→Min", label: "production velocity" },
  { num: "∞", label: "formats per creative" },
  { num: "1", label: "source of truth" },
];

export default function Footer() {
  const [statsRef, statsShown] = useReveal<HTMLDivElement>(0.2);
  const [ctaRef, ctaShown] = useReveal<HTMLDivElement>(0.2);

  return (
    <>
      {/* Stats strip */}
      <section ref={statsRef} className="py-24 px-6 md:px-10 border-t border-white/[0.06] relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(109,166,217,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`text-center flex flex-col items-center gap-3 ${statsShown ? "anim-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`text-display text-4xl md:text-5xl lg:text-[3.75rem] tracking-tight leading-none whitespace-nowrap ${i % 2 === 0 ? "shine-plasma" : "shine"}`}
                >
                  {s.num}
                </div>
                <div className="text-[10px] md:text-[11px] text-mono text-chrome uppercase tracking-[0.25em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section ref={ctaRef} className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 canvas-grid opacity-60 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(109,166,217,0.22) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(201,176,135,0.08) 0%, transparent 45%)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto text-center">
          <p className={`text-xs text-mono text-halo uppercase tracking-[0.3em] mb-7 ${ctaShown ? "anim-fade-up" : "opacity-0"}`}>
            ◉ Scale without the headcount
          </p>
          <h2 className={`text-display text-[clamp(2.5rem,7.5vw,6.5rem)] leading-[1.02] tracking-tight mb-1 text-bone ${ctaShown ? "anim-fade-up d-1" : "opacity-0"}`}>
            One canvas.
          </h2>
          <h2 className={`text-display italic shine-plasma glow-plasma text-[clamp(2.5rem,7.5vw,6.5rem)] leading-[1.02] tracking-tight mb-10 ${ctaShown ? "anim-fade-up d-2" : "opacity-0"}`}>
            Infinite assets.
          </h2>
          <div className={`flex items-center justify-center gap-3 flex-wrap ${ctaShown ? "anim-fade-up d-3" : "opacity-0"}`}>
            <a
              href={CALENDLY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-lume to-halo text-coal text-base font-semibold px-8 py-4 rounded-full flex items-center gap-2 shadow-[0_0_40px_-8px_rgba(168,205,239,0.6)] hover:shadow-[0_0_60px_-8px_rgba(168,205,239,0.9)] hover:brightness-110 transition-all"
            >
              Book a demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={STUDIO_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass text-base font-medium px-8 py-4 rounded-full text-bone hover:bg-white/5 hover:border-halo/30 transition-colors"
            >
              Start free
            </a>
          </div>
          <p className={`text-xs text-mono text-chrome mt-8 ${ctaShown ? "anim-fade-up d-4" : "opacity-0"}`}>
            No credit card · unlimited seats on trial · go live in minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] px-6 md:px-10 pt-20 pb-10 bg-coal">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2">
              <a href="/" className="flex items-center gap-2.5 mb-5">
                <svg width="26" height="26" viewBox="0 0 32 32">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="16" cy="16" r="14" opacity="0.25" />
                    <circle cx="16" cy="16" r="10" opacity="0.5" />
                    <circle cx="16" cy="16" r="6" />
                    <circle cx="16" cy="16" r="2" fill="#A8CDEF" stroke="none" />
                  </g>
                </svg>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-display text-lg sm:text-xl font-semibold tracking-[0.14em] text-bone uppercase">
                    ElarisLabs
                  </span>
                  <span className="text-display text-lg sm:text-xl font-semibold tracking-[0.14em] shine-plasma uppercase">
                    AI
                  </span>
                </div>
              </a>
              <p className="text-chrome text-sm max-w-xs leading-relaxed mb-5">
                Unified AI creative OS for global enterprises. Generate, composite, scale.
              </p>
              <div className="inline-flex items-center gap-2 glass-plasma rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-halo anim-breathe" />
                <span className="text-xs text-mono text-halo">All systems operational</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs text-mono uppercase tracking-[0.2em] text-chrome mb-4">Products</h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Creative Studio",
                  "AI Video Studio",
                  "Launch & Track Performance",
                  "URL-to-Video",
                  "Product Staging",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href={STUDIO_APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bone hover:text-halo transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs text-mono uppercase tracking-[0.2em] text-chrome mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "Terms", href: "/terms" },
                  { label: "Privacy", href: "/privacy-policy" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-bone hover:text-halo transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Giant wordmark — sized so the full word always fits within the container */}
          <div className="mb-8 overflow-hidden">
            <div className="text-display text-[clamp(3rem,15.5vw,13.5rem)] leading-[0.85] tracking-tighter select-none whitespace-nowrap bg-gradient-to-b from-steel to-transparent bg-clip-text text-transparent">
              ElarisLabs
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/[0.05] pt-6 flex-wrap gap-4">
            <p className="text-xs text-mono text-chrome">© 2026 ElarisLabs. All rights reserved.</p>
            <p className="text-xs text-mono text-chrome">Built for ad teams who ship ◉</p>
          </div>
        </div>
      </footer>
    </>
  );
}
