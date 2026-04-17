"use client";

import { useReveal } from "./useReveal";

const STATS = [
  { num: "500+", label: "AI models" },
  { num: "12×", label: "faster turnaround" },
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
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`text-center md:text-left ${statsShown ? "anim-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`text-display text-6xl md:text-8xl mb-2 ${i % 2 === 0 ? "shine-plasma" : "shine"}`}>{s.num}</div>
                <div className="text-xs text-mono text-chrome uppercase tracking-[0.2em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section ref={ctaRef} className="relative py-32 md:py-40 px-6 md:px-10 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 canvas-grid opacity-60 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(109,166,217,0.22) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(201,176,135,0.08) 0%, transparent 45%)",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto text-center">
          <p className={`text-xs text-mono text-halo uppercase tracking-[0.3em] mb-8 ${ctaShown ? "anim-fade-up" : "opacity-0"}`}>
            ◉ Stop opening 14 tabs
          </p>
          <h2 className={`text-display text-[clamp(3.5rem,11vw,11rem)] mb-3 text-bone ${ctaShown ? "anim-fade-up d-1" : "opacity-0"}`}>
            One canvas.
          </h2>
          <h2 className={`text-display italic shine-plasma glow-plasma text-[clamp(3.5rem,11vw,11rem)] mb-12 ${ctaShown ? "anim-fade-up d-2" : "opacity-0"}`}>
            Every ad.
          </h2>
          <div className={`flex items-center justify-center gap-3 flex-wrap ${ctaShown ? "anim-fade-up d-3" : "opacity-0"}`}>
            <button className="group bg-gradient-to-br from-lume to-halo text-coal text-base font-semibold px-8 py-4 rounded-full flex items-center gap-2 shadow-[0_0_40px_-8px_rgba(168,205,239,0.6)] hover:shadow-[0_0_60px_-8px_rgba(168,205,239,0.9)] hover:brightness-110 transition-all">
              Start free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <button className="glass text-base font-medium px-8 py-4 rounded-full text-bone hover:bg-white/5 hover:border-halo/30 transition-colors">
              Book a demo →
            </button>
          </div>
          <p className={`text-xs text-mono text-chrome mt-8 ${ctaShown ? "anim-fade-up d-4" : "opacity-0"}`}>
            No credit card · unlimited seats on trial · go live in minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] px-6 md:px-10 pt-20 pb-10 bg-coal">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
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
                <div className="flex items-baseline gap-1">
                  <span className="text-display text-xl text-bone">Elaris</span>
                  <span className="text-display text-xl shine-plasma">Labs</span>
                </div>
              </a>
              <p className="text-chrome text-sm max-w-xs leading-relaxed mb-5">
                Full-stack AI creative ops for modern ad teams. Build, iterate, scale.
              </p>
              <div className="inline-flex items-center gap-2 glass-plasma rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-halo anim-breathe" />
                <span className="text-xs text-mono text-halo">All systems operational</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs text-mono uppercase tracking-[0.2em] text-chrome mb-4">Products</h4>
              <ul className="space-y-3 text-sm">
                {["Creative Studio", "AI Video Studio", "Campaign Wizard", "URL-to-Video", "Product Staging"].map((l) => (
                  <li key={l}><a href="#" className="text-bone hover:text-halo transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs text-mono uppercase tracking-[0.2em] text-chrome mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                {["About", "Blog", "Careers", "Manifesto"].map((l) => (
                  <li key={l}><a href="#" className="text-bone hover:text-halo transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs text-mono uppercase tracking-[0.2em] text-chrome mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                {["Docs", "Changelog", "Support", "Brand", "Terms", "Privacy"].map((l) => (
                  <li key={l}><a href="#" className="text-bone hover:text-halo transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Giant wordmark */}
          <div className="overflow-hidden mb-8">
            <div className="text-display text-[clamp(5rem,22vw,22rem)] leading-[0.85] tracking-tighter select-none bg-gradient-to-b from-steel to-transparent bg-clip-text text-transparent">
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
