"use client";

import { useEffect, useRef, useState } from "react";
import { STUDIO_APP_URL } from "@/lib/site";
import PlatformLogos from "./PlatformLogos";

/** Rotating tail — types in, pauses, erases, then advances. */
const DYNAMIC_PHRASES = [
  "scale securely.",
  "control perfectly.",
  "edit instantly.",
  "trust with your brand.",
];

/** The longest phrase reserves a fixed slot for the rotating tail so the
 *  static lead ("AI design & creative you can") never shifts horizontally
 *  while the tail types in or erases. */
const LONGEST_PHRASE = DYNAMIC_PHRASES.reduce(
  (a, b) => (b.length > a.length ? b : a),
  "",
);

const PROMPT_TEMPLATES = [
  {
    label: "Omnichannel Launch",
    prompt:
      "Build an omnichannel launch for [brand name] having [brand colors]. Create feed, story, and short-form assets for Meta, Instagram, TikTok, YouTube, and Snap, all on-brand.",
  },
  {
    label: "Localization",
    prompt:
      "Localize campaign assets for [brand name] having [brand colors]. Adapt the master creative for [languages] with on-brand copy, layout, and cultural cues while keeping logos and product framing locked.",
  },
  {
    label: "500+ A/B Variants",
    prompt:
      "Generate 500+ A/B variants for [brand name] having [brand colors]. Use the approved master and swap headlines, CTAs, backgrounds, and product angles across export-ready aspect ratios.",
  },
  {
    label: "TikTok Resizing",
    prompt:
      "Resize this campaign for TikTok for [brand name] having [brand colors]. Deliver 9:16 vertical cuts with safe zones for UI overlays, a strong hook in the first 2 seconds, and caption-friendly framing without cropping the product.",
  },
] as const;

const DEFAULT_PROMPT = PROMPT_TEMPLATES[0].prompt;

export default function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  // Seed the rotating word with the first full phrase so the SSR snapshot
  // emits a complete <h1> to crawlers (important for SEO — Googlebot's first
  // pass reads the server HTML, not the post-hydration animated state).
  const [typed, setTyped] = useState(DYNAMIC_PHRASES[0]);
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("pausing");
  const [promptValue, setPromptValue] = useState<string>(DEFAULT_PROMPT);
  const [activePill, setActivePill] = useState<string>(PROMPT_TEMPLATES[0].label);
  const promptRef = useRef<HTMLTextAreaElement | null>(null);

  const applyTemplate = (label: string, prompt: string) => {
    setActivePill(label);
    setPromptValue(prompt);
    requestAnimationFrame(() => {
      const el = promptRef.current;
      if (!el) return;
      el.focus();
      el.setSelectionRange(prompt.length, prompt.length);
    });
  };

  const [brandFiles, setBrandFiles] = useState<File[]>([]);
  const [productUrls, setProductUrls] = useState<string[]>([]);
  const [urlDraft, setUrlDraft] = useState("");
  const [urlOpen, setUrlOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const urlInputRef = useRef<HTMLInputElement | null>(null);

  const handleBrandFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;
    setBrandFiles((prev) => [...prev, ...files]);
    e.target.value = "";
  };

  const removeBrandFile = (idx: number) => {
    setBrandFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const addUrl = () => {
    const trimmed = urlDraft.trim();
    if (!trimmed) return;
    setProductUrls((prev) => (prev.includes(trimmed) ? prev : [...prev, trimmed]));
    setUrlDraft("");
  };

  const removeUrl = (idx: number) => {
    setProductUrls((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleGenerate = () => {
    const params = new URLSearchParams();
    if (promptValue.trim()) params.set("prompt", promptValue.trim());
    productUrls.forEach((u) => params.append("productUrl", u));
    if (brandFiles.length > 0) {
      params.set("brandFiles", brandFiles.map((f) => f.name).join(","));
    }
    const qs = params.toString();
    const url = `${STUDIO_APP_URL}${qs ? `?${qs}` : ""}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
        {/* Single-line headline — the static lead is pinned in place; only
            the rotating tail animates. The tail's slot reserves the width of
            the longest phrase via a hidden ghost layer (CSS grid overlay), so
            the headline's total width is constant through the typing cycle
            and the lead never shifts as letters type in or erase. */}
        <h1
          className="text-display text-[clamp(1.15rem,2.8vw,2.85rem)] mb-8 anim-fade-up d-1 leading-tight whitespace-nowrap flex justify-center"
          aria-live="polite"
        >
          <span className="inline-flex items-baseline whitespace-nowrap">
            <span className="text-bone">
              AI design &amp; creative you can
            </span>
            <span className="grid pl-[0.3em] text-left items-baseline">
              {/* Ghost: reserves the width of the longest phrase so the
                  headline's total width never changes during the type/erase
                  cycle. Hidden from accessibility. */}
              <span
                aria-hidden
                className="italic invisible whitespace-nowrap [grid-area:1/1]"
              >
                {LONGEST_PHRASE}
              </span>
              {/* Visible rotating tail — overlays the ghost in the same grid
                  cell, left-aligned, with a baseline that matches the lead. */}
              <span className="inline-flex items-baseline whitespace-nowrap [grid-area:1/1]">
                <span className="italic shine-plasma glow-plasma">{typed}</span>
                <span
                  className="inline-block align-middle ml-0.5 anim-blink bg-halo"
                  style={{ width: "0.06em", height: "0.7em" }}
                  aria-hidden
                />
              </span>
            </span>
          </span>
        </h1>

        {/* Sub-headline — bridges the jump from headline to prompt UI */}
        <p className="max-w-2xl mx-auto -mt-2 mb-8 text-center text-chrome/75 text-[15px] md:text-base leading-relaxed anim-fade-up d-2">
          The Full Stack Agentic OS. Generate, composite, and scale omnichannel assets instantly with deterministic brand memory.
        </p>

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
              onChange={(e) => {
                setPromptValue(e.target.value);
                setActivePill("");
              }}
              spellCheck={false}
              rows={3}
              aria-label="Prompt"
              placeholder={DEFAULT_PROMPT}
              className="w-full bg-transparent resize-none outline-none border-0 px-3 pt-2 pb-5 min-h-[130px] text-[17px] md:text-[18px] leading-relaxed text-bone placeholder:text-chrome/60 caret-halo selection:bg-halo/25 selection:text-bone"
            />

            {/* Attached items row — chips for brand files and product URLs */}
            {(brandFiles.length > 0 || productUrls.length > 0) && (
              <div
                className="flex flex-wrap gap-1.5 px-3 pb-3"
                onClick={(e) => e.stopPropagation()}
              >
                {brandFiles.map((f, i) => (
                  <span
                    key={`bf-${i}-${f.name}`}
                    className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-halo/10 border border-halo/25 text-halo max-w-[240px]"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                    </svg>
                    <span className="truncate">{f.name}</span>
                    <button
                      type="button"
                      aria-label={`Remove ${f.name}`}
                      onClick={() => removeBrandFile(i)}
                      className="text-halo/70 hover:text-halo transition-colors"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
                {productUrls.map((u, i) => (
                  <span
                    key={`pu-${i}-${u}`}
                    className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/15 text-bone/90 max-w-[260px]"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <span className="truncate">{u}</span>
                    <button
                      type="button"
                      aria-label={`Remove ${u}`}
                      onClick={() => removeUrl(i)}
                      className="text-chrome hover:text-bone transition-colors"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* URL input popover — opens under the action bar */}
            {urlOpen && (
              <div
                className="mb-3 mx-1 flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-2 py-1.5"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" className="text-chrome ml-1 shrink-0">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                <input
                  ref={urlInputRef}
                  type="url"
                  inputMode="url"
                  placeholder="https://your-product-page.com"
                  value={urlDraft}
                  onChange={(e) => setUrlDraft(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addUrl();
                    } else if (e.key === "Escape") {
                      setUrlOpen(false);
                    }
                  }}
                  className="flex-1 bg-transparent outline-none border-0 text-sm text-bone placeholder:text-chrome/50 py-1"
                />
                <button
                  type="button"
                  onClick={addUrl}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-halo/15 border border-halo/30 text-halo hover:bg-halo/20 transition-colors"
                >
                  Add
                </button>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setUrlOpen(false)}
                  className="text-chrome hover:text-bone p-1 transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            {/* Bottom action bar */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] gap-3">
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf,.zip,.ai,.psd,.svg"
                  onChange={handleBrandFiles}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border transition-all whitespace-nowrap ${
                    brandFiles.length > 0
                      ? "border-halo/35 bg-halo/10 text-halo"
                      : "border-white/[0.10] text-chrome hover:text-bone hover:border-white/25 hover:bg-white/5"
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Attach Brand Kit
                  {brandFiles.length > 0 && (
                    <span className="text-[10px] font-semibold">({brandFiles.length})</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setUrlOpen((v) => {
                      const next = !v;
                      if (next) {
                        setTimeout(() => urlInputRef.current?.focus(), 0);
                      }
                      return next;
                    });
                  }}
                  aria-expanded={urlOpen}
                  className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border transition-all whitespace-nowrap ${
                    productUrls.length > 0 || urlOpen
                      ? "border-halo/35 bg-halo/10 text-halo"
                      : "border-white/[0.10] text-chrome hover:text-bone hover:border-white/25 hover:bg-white/5"
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Attach Product URLs
                  {productUrls.length > 0 && (
                    <span className="text-[10px] font-semibold">({productUrls.length})</span>
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleGenerate();
                }}
                className="group bg-gradient-to-br from-lume to-halo text-coal text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-1.5 shrink-0 shadow-[0_0_30px_-5px_rgba(168,205,239,0.6)] hover:shadow-[0_0_50px_-5px_rgba(168,205,239,0.85)] hover:brightness-110 transition-all"
              >
                Generate
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Example pills — each fills the prompt bar with a workflow template */}
          <div className="flex items-center gap-2 flex-wrap justify-center mt-5">
            {PROMPT_TEMPLATES.map((template, i) => {
              const isActive = activePill === template.label;
              return (
                <button
                  key={template.label}
                  type="button"
                  onClick={() => applyTemplate(template.label, template.prompt)}
                  aria-pressed={isActive}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all whitespace-nowrap ${
                    isActive
                      ? "border-halo/40 bg-halo/15 text-bone shadow-[0_0_20px_-8px_rgba(168,205,239,0.5)]"
                      : "glass text-chrome hover:text-bone hover:border-white/20"
                  }`}
                  style={{ animation: `chip-in 0.6s ${0.6 + i * 0.08}s backwards` }}
                >
                  {template.label}
                </button>
              );
            })}
          </div>

          {/* Platform logo strip — shows distribution surfaces */}
          <PlatformLogos />
        </div>

      </div>
    </section>
  );
}
