"use client";

import { useState } from "react";

/** One of the two ad frames in the comparison. */
type Frame = {
  dir: "ltr" | "rtl";
  lang: "en" | "ar";
  label: string;
  direction: string;
  brand: string;
  badge: string;
  kicker: string;
  headline: string;
  cta: string;
  size: string;
};

const FRAMES: Frame[] = [
  {
    dir: "ltr",
    lang: "en",
    label: "English",
    direction: "LTR",
    brand: "Brand",
    badge: "New",
    kicker: "Doha today, 44°",
    headline: "Taste the difference",
    cta: "Order now",
    size: "1080 × 1350",
  },
  {
    dir: "rtl",
    lang: "ar",
    label: "Arabic",
    direction: "RTL",
    brand: "براند",
    badge: "جديد",
    kicker: "الدوحة اليوم، ٤٤°",
    headline: "تذوّق الفرق",
    cta: "اطلب الآن",
    size: "١٠٨٠ × ١٣٥٠",
  },
];

const MOVED: { label: string; body: string }[] = [
  { label: "Logo", body: "moves to the top right, and the safe zone mirrors with it." },
  { label: "Call to action", body: "moves to the bottom right, where the eye finishes." },
  { label: "Type", body: "is reset in an Arabic face so letters join." },
  { label: "Numerals", body: "switch to Eastern Arabic where the market expects them." },
];

function AdFrame({ frame, marked }: { frame: Frame; marked: boolean }) {
  const arabic = frame.lang === "ar";
  const outline = marked ? "outline outline-[1.5px] outline-offset-[3px] outline-plasma" : "";

  return (
    <div className="min-w-0">
      <div className="flex items-center gap-1.5 mb-2 text-[10px] text-mono uppercase tracking-[0.12em] text-chrome">
        {frame.label}
        <span className="text-halo">{frame.direction}</span>
      </div>

      <div
        dir={frame.dir}
        lang={frame.lang}
        className="relative aspect-[4/5] rounded-lg overflow-hidden flex flex-col p-3.5"
        style={{
          background:
            "linear-gradient(155deg, #123047 0%, #0b1a26 62%, #0a0f15 100%)",
        }}
      >
        <span
          aria-hidden
          className={`absolute inset-3 rounded-md border border-dashed transition-colors ${
            marked ? "border-plasma/55" : "border-transparent"
          }`}
        />

        <div className="flex items-center gap-2">
          <span
            className={`flex items-center gap-1.5 text-[12.5px] font-semibold text-white rounded ${
              arabic ? "text-arabic" : "text-display"
            } ${outline}`}
          >
            <i className="block w-2.5 h-2.5 rounded-full bg-brass shrink-0" />
            {frame.brand}
          </span>
          <span className="ms-auto text-[9.5px] px-2 py-[3px] rounded-full bg-white/[0.14] text-white">
            {frame.badge}
          </span>
        </div>

        <div className="mt-auto text-start">
          <p
            className={`text-[10.5px] text-pearl mb-1.5 ${arabic ? "text-arabic" : ""}`}
          >
            {frame.kicker}
          </p>
          <p
            className={`text-[clamp(1.15rem,2.6vw,1.55rem)] font-bold text-white rounded ${
              arabic
                ? "text-arabic leading-[1.35]"
                : "text-display leading-[1.03] tracking-[-0.03em]"
            } ${outline}`}
          >
            {frame.headline}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-3.5">
          <span
            className={`text-[11px] font-semibold bg-white text-[#0b1a26] px-3 py-1.5 rounded-full ${
              arabic ? "text-arabic" : ""
            } ${outline}`}
          >
            {frame.cta}
          </span>
          <span
            className={`ms-auto text-[9px] text-mono text-white/50 ${arabic ? "text-arabic" : ""}`}
          >
            {frame.size}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MirrorDemo() {
  const [marked, setMarked] = useState(false);

  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-3 mb-3.5">
        <span className="text-[10.5px] text-mono uppercase tracking-[0.14em] text-chrome">
          One master, two markets
        </span>
        <button
          type="button"
          onClick={() => setMarked((v) => !v)}
          aria-pressed={marked}
          className="ms-auto text-[12.5px] text-bone border border-steel rounded-lg px-3 py-1.5 hover:bg-white/5 transition-colors"
        >
          {marked ? "Hide what moved" : "Show what moved"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {FRAMES.map((frame) => (
          <AdFrame key={frame.lang} frame={frame} marked={marked} />
        ))}
      </div>

      {marked && (
        <ul className="mt-3.5 pt-3 border-t border-white/[0.08] grid gap-1.5">
          {MOVED.map((m) => (
            <li key={m.label} className="flex gap-2 text-[12.5px] text-chrome leading-snug">
              <span className="mt-[7px] w-1 h-1 rounded-full bg-plasma shrink-0" />
              <span>
                <span className="text-bone font-medium">{m.label}</span> {m.body}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
