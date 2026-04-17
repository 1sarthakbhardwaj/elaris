"use client";

import { useSceneLoop } from "./useSceneLoop";
import PreviewChrome from "./previewChrome";

/**
 * 05 Product Staging preview.
 *
 * Storyboard (~12s loop) — tells the "one raw product image, many
 * backgrounds" story for e-commerce:
 *
 *   S0  Raw product silhouette fades in on a flat grey bg
 *   S1  Dashed isolation mask animates around the subject
 *       ("subject isolated" chip)
 *   S2  Beach background cross-fades in behind the product
 *   S3  Concrete studio background swaps in
 *   S4  Forest moss background swaps in
 *   S5  Marble bathroom background swaps in
 *   S6  Three ratio thumbnails (1:1, 9:16, 16:9) pop up on the right
 *   S7  "4 environments · 3 ratios" chip appears
 */

const DURATIONS = [1400, 1600, 1200, 1200, 1200, 1200, 2600, 1600];

const BACKGROUNDS = [
  {
    id: "beach",
    name: "Beach",
    bg: "radial-gradient(ellipse at 50% 40%, #e7d4a7 0%, #b89b6c 50%, #6e5430 100%)",
  },
  {
    id: "studio",
    name: "Studio",
    bg: "radial-gradient(ellipse at 50% 40%, #45454b 0%, #28282c 50%, #111114 100%)",
  },
  {
    id: "forest",
    name: "Forest",
    bg: "radial-gradient(ellipse at 50% 40%, #4a5d3a 0%, #2b3a22 55%, #0f1509 100%)",
  },
  {
    id: "marble",
    name: "Marble",
    bg: "radial-gradient(ellipse at 50% 40%, #e8e6ea 0%, #aaa8b0 55%, #55555c 100%)",
  },
];

function SneakerSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 70" fill="none" className={className}>
      <defs>
        <linearGradient id="sneakerBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7f8fa" />
          <stop offset="0.55" stopColor="#c7cad1" />
          <stop offset="1" stopColor="#70747d" />
        </linearGradient>
        <linearGradient id="sneakerSole" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2d2d32" />
          <stop offset="1" stopColor="#0c0d10" />
        </linearGradient>
      </defs>
      {/* Upper */}
      <path
        d="M8 48 C 14 28 30 20 50 22 C 72 24 86 24 98 36 C 108 42 114 46 114 50 L 110 56 L 10 56 Z"
        fill="url(#sneakerBody)"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth="0.8"
      />
      {/* Toe cap highlight */}
      <path
        d="M12 50 C 18 40 32 34 48 36"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.2"
        fill="none"
      />
      {/* Laces */}
      <g stroke="#2d2d32" strokeWidth="1.2" strokeLinecap="round">
        <line x1="58" y1="28" x2="66" y2="30" />
        <line x1="62" y1="32" x2="70" y2="34" />
        <line x1="66" y1="36" x2="74" y2="38" />
      </g>
      {/* Accent stripe */}
      <path
        d="M30 52 C 48 44 68 44 90 46"
        stroke="#A8CDEF"
        strokeWidth="1.8"
        fill="none"
        opacity="0.9"
      />
      {/* Sole */}
      <rect x="8" y="54" width="106" height="6" rx="3" fill="url(#sneakerSole)" />
      {/* Ground shadow */}
      <ellipse
        cx="60"
        cy="63"
        rx="48"
        ry="3"
        fill="rgba(0,0,0,0.35)"
      />
    </svg>
  );
}

export default function ProductStagingMini() {
  const { sceneIndex, rootRef, hoverHandlers } = useSceneLoop(DURATIONS);

  const showIsolation = sceneIndex >= 1 && sceneIndex <= 2;
  const isolated = sceneIndex >= 1;
  // Which background to show. -1 = neutral grey (not yet staged).
  const bgIndex =
    sceneIndex <= 1
      ? -1
      : sceneIndex === 2
        ? 0
        : sceneIndex === 3
          ? 1
          : sceneIndex === 4
            ? 2
            : 3;

  const showRatios = sceneIndex >= 6;
  const showChip = sceneIndex >= 7;

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full flex flex-col bg-[#0D0D10]"
      onMouseEnter={hoverHandlers.onMouseEnter}
      onMouseLeave={hoverHandlers.onMouseLeave}
    >
      <PreviewChrome label="product staging · infinite environments" />

      <div className="relative flex-1 overflow-hidden">
        {/* Stage area — contains the swappable background + locked product */}
        <div
          className={`absolute top-0 bottom-0 left-0 transition-[right] duration-500`}
          style={{ right: showRatios ? "38%" : 0 }}
        >
          {/* Neutral grey base — visible before first environment */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #2b2b30 0%, #1a1a1e 100%)",
              opacity: bgIndex === -1 ? 1 : 0,
              transition: "opacity 380ms ease-out",
            }}
          />
          {/* Environment backgrounds — cross-fade between them */}
          {BACKGROUNDS.map((b, i) => (
            <div
              key={b.id}
              className="absolute inset-0"
              style={{
                background: b.bg,
                opacity: bgIndex === i ? 1 : 0,
                transition: "opacity 480ms ease-out",
              }}
            />
          ))}
          {/* Ground gradient to anchor the product */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.35) 100%)",
            }}
          />

          {/* Product — pinned at center-bottom */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              bottom: "18%",
              width: "54%",
              animation: "chip-in 0.5s backwards",
            }}
          >
            <SneakerSVG className="w-full h-auto drop-shadow-[0_6px_6px_rgba(0,0,0,0.35)]" />

            {/* Isolation mask — animated dashed rect around the subject */}
            {showIsolation && (
              <svg
                className="absolute -inset-1 pointer-events-none"
                viewBox="0 0 120 80"
                preserveAspectRatio="none"
              >
                <rect
                  x="2"
                  y="2"
                  width="116"
                  height="76"
                  rx="3"
                  fill="none"
                  stroke="#A8CDEF"
                  strokeWidth="0.8"
                  strokeDasharray="4 3"
                  style={{
                    animation: "marching-ants 0.6s linear infinite",
                  }}
                />
              </svg>
            )}
          </div>

          {/* Environment label pill — top-right of stage */}
          {bgIndex >= 0 && (
            <div
              key={`bglabel-${bgIndex}`}
              className="absolute top-2 right-2 rounded px-1.5 py-0.5 bg-black/55 border border-white/15 backdrop-blur"
              style={{ animation: "chip-in 0.35s backwards" }}
            >
              <span className="text-[7px] text-mono text-bone uppercase tracking-[0.18em]">
                {BACKGROUNDS[bgIndex].name}
              </span>
            </div>
          )}

          {/* "subject isolated" chip — top-left during S1/S2 */}
          {showIsolation && (
            <div
              className="absolute top-2 left-2 rounded px-1.5 py-0.5 bg-black/55 border border-halo/40 backdrop-blur flex items-center gap-1"
              style={{ animation: "chip-in 0.35s backwards" }}
            >
              <span className="w-1 h-1 rounded-full bg-halo anim-breathe" />
              <span className="text-[6px] text-mono text-halo uppercase tracking-[0.15em]">
                {isolated ? "isolated" : "isolating"}
              </span>
            </div>
          )}
        </div>

        {/* Ratio thumbnails column — slides in from right in S6+ */}
        <div
          className={`absolute top-2 bottom-2 right-2 flex flex-col gap-1.5 transition-all duration-500 ${
            showRatios
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-3 pointer-events-none"
          }`}
          style={{ width: "34%" }}
        >
          {[
            { label: "1:1", aspect: "1 / 1" },
            { label: "9:16", aspect: "9 / 16" },
            { label: "16:9", aspect: "16 / 9" },
          ].map((r, i) => (
            <div
              key={r.label}
              className="relative flex-1 rounded-[3px] border border-white/15 overflow-hidden"
              style={
                showRatios
                  ? {
                      animation: `chip-in 0.4s ${i * 0.1}s backwards`,
                      aspectRatio: r.aspect,
                    }
                  : { aspectRatio: r.aspect }
              }
            >
              <div
                className="absolute inset-0"
                style={{
                  background: BACKGROUNDS[bgIndex < 0 ? 3 : bgIndex].bg,
                }}
              />
              {/* Tiny pinned product */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ bottom: "22%", width: "70%" }}
              >
                <SneakerSVG className="w-full h-auto" />
              </div>
              <div className="absolute top-0.5 right-1 text-[6px] text-mono text-bone/80 uppercase tracking-wider">
                {r.label}
              </div>
            </div>
          ))}
        </div>

        {/* Summary chip — bottom-left */}
        <div
          className={`absolute bottom-2 left-2 flex items-center gap-1 rounded px-1.5 py-0.5 border border-lume/40 bg-lume/10 transition-opacity ${
            showChip ? "opacity-100" : "opacity-0"
          }`}
          style={
            showChip ? { animation: "chip-in 0.4s backwards" } : undefined
          }
        >
          <span className="w-1 h-1 rounded-full bg-lume anim-breathe" />
          <span className="text-[7px] text-mono text-lume uppercase tracking-[0.15em]">
            4 envs · 3 ratios
          </span>
        </div>
      </div>
    </div>
  );
}
