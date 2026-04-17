"use client";

import { useEffect, useRef, useState } from "react";

/** Rotating tail — types in, pauses, erases, then advances. */
const DYNAMIC_PHRASES = [
  "scale securely.",
  "control perfectly.",
  "edit instantly.",
  "trust with your brand.",
];

const EXAMPLE_PILLS = [
  "Omnichannel Launch",
  "Localization",
  "500+ A/B Variants",
  "TikTok Resizing",
];

const DEFAULT_PROMPT =
  "Take this summer moodboard and build launch assets for Meta, TikTok, and Snap…";

export default function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");
  const [promptValue, setPromptValue] = useState(DEFAULT_PROMPT);
  const promptRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const full = DYNAMIC_PHRASES[phraseIdx];

    if (phase === "typing") {
      if (typed.length < full.length) {
        const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 55);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), 0);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("erasing"), 2200);
      return () => clearTimeout(t);
    }

    if (typed.length > 0) {
      const t = setTimeout(() => setTyped((s) => s.slice(0, -1)), 25);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setPhraseIdx((i) => (i + 1) % DYNAMIC_PHRASES.length);
      setPhase("typing");
    }, 220);
    return () => clearTimeout(t);
  }, [typed, phase, phraseIdx]);

  return (
    <section className="relative pt-28 md:pt-32 pb-20 px-6 md:px-10 overflow-hidden">
      {/* Ambient grid & plasma glow */}
      <div className="absolute inset-0 canvas-grid opacity-70 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(109,166,217,0.15) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(201,176,135,0.06) 0%, transparent 45%), radial-gradient(ellipse at 20% 70%, rgba(168,205,239,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-[1480px] mx-auto pt-8">
        {/* Single-line headline — static lead is pinned to the right edge of
            its own slot, rotating tail grows/shrinks to its left edge. The
            group as a whole is centered, but the split around the gap acts
            like a stable rail so the lead's right edge never shifts. */}
        <h1
          className="text-display text-[clamp(1.15rem,2.8vw,2.85rem)] mb-8 anim-fade-up d-1 leading-tight whitespace-nowrap flex justify-center"
          aria-live="polite"
        >
          <span className="inline-flex items-baseline whitespace-nowrap">
            {/* Lead — right-aligned in its slot → right edge is the anchor */}
            <span className="text-bone text-right">
              AI design &amp; creative you can
            </span>
            {/* Rotating tail — left-aligned so it grows to the right only */}
            <span className="inline-flex items-baseline whitespace-nowrap pl-[0.3em] text-left">
              <span className="italic shine-plasma glow-plasma">{typed}</span>
              <span
                className="inline-block align-middle ml-0.5 anim-blink bg-halo"
                style={{ width: "0.06em", height: "0.7em" }}
                aria-hidden
              />
            </span>
          </span>
        </h1>

        {/* ——— UPPER HALF: Prompt box — roomier ——— */}
        <div className="max-w-3xl mx-auto mb-6 anim-fade-up d-3">
          <div
            className="glass-strong rounded-2xl p-5 shadow-2xl cursor-text transition-[box-shadow,border-color] duration-200 focus-within:border-halo/45 focus-within:shadow-[0_0_0_1px_rgba(168,205,239,0.35),0_25px_50px_-12px_rgba(0,0,0,0.6)]"
            onClick={() => promptRef.current?.focus()}
          >
            {/* Input area — editable textarea. Users can click anywhere in
                the card to focus; the outer ring highlights on focus-within. */}
            <textarea
              ref={promptRef}
              value={promptValue}
              onChange={(e) => setPromptValue(e.target.value)}
              spellCheck={false}
              rows={3}
              aria-label="Prompt"
              placeholder={DEFAULT_PROMPT}
              className="w-full bg-transparent resize-none outline-none border-0 px-3 pt-2 pb-5 min-h-[130px] text-[17px] md:text-[18px] leading-relaxed text-bone placeholder:text-chrome/60 caret-halo selection:bg-halo/25 selection:text-bone"
            />

            {/* Bottom action bar */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] gap-3">
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                <button className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border border-white/[0.10] text-chrome hover:text-bone hover:border-white/25 hover:bg-white/5 transition-all whitespace-nowrap">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Attach Brand Kit
                </button>
                <button className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border border-white/[0.10] text-chrome hover:text-bone hover:border-white/25 hover:bg-white/5 transition-all whitespace-nowrap">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Attach Product URLs
                </button>
              </div>

              <button className="group bg-gradient-to-br from-lume to-halo text-coal text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-1.5 shrink-0 shadow-[0_0_30px_-5px_rgba(168,205,239,0.6)] hover:shadow-[0_0_50px_-5px_rgba(168,205,239,0.85)] hover:brightness-110 transition-all">
                Generate
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Example pills */}
          <div className="flex items-center gap-2 flex-wrap justify-center mt-5">
            {EXAMPLE_PILLS.map((pill, i) => (
              <button
                key={pill}
                className="glass text-xs px-3 py-1.5 rounded-full text-chrome hover:text-bone hover:border-white/20 transition-all whitespace-nowrap"
                style={{ animation: `chip-in 0.6s ${0.6 + i * 0.08}s backwards` }}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
