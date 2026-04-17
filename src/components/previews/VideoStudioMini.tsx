"use client";

import { useSceneLoop } from "./useSceneLoop";
import PreviewChrome from "./previewChrome";

/**
 * 02 AI Video Studio preview.
 *
 * Storyboard (loops every ~14s):
 *   S0  Brief bar types in a short prompt line
 *   S1  Four 4:3 storyboard cells fade in as dashed sketch placeholders
 *   S2  Each cell renders in turn — gradient still replaces the sketch,
 *       with a rolling halo-pulse highlighting the "active" frame
 *   S3  A timeline strip + waveform appears under the cells
 *   S4  "11 models" chip enters top-right
 *   S5  "Exported 00:30 · 1080p" green check chip enters bottom-right
 */

const DURATIONS = [1600, 2600, 3200, 3000, 2000, 1600];

const FRAMES = [
  {
    label: "open",
    bg: "radial-gradient(circle at 30% 40%, #C9B087 0%, #2D4A6B 60%, #0C0D10 100%)",
  },
  {
    label: "hero",
    bg: "radial-gradient(circle at 40% 50%, #A8CDEF 0%, #2D4A6B 55%, #0C0D10 100%)",
  },
  {
    label: "detail",
    bg: "radial-gradient(circle at 35% 45%, #D48492 0%, #4A2D3F 60%, #0C0D10 100%)",
  },
  {
    label: "close",
    bg: "radial-gradient(circle at 35% 45%, #E8D9B8 0%, #5A4528 60%, #0C0D10 100%)",
  },
];

export default function VideoStudioMini() {
  const { sceneIndex, rootRef, hoverHandlers } = useSceneLoop(DURATIONS);

  const showSketches = sceneIndex >= 1;
  const renderCells = sceneIndex >= 2;
  const showTimeline = sceneIndex >= 3;
  const showModelsChip = sceneIndex >= 4;
  const showExported = sceneIndex >= 5;

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full flex flex-col bg-[#0D0D10]"
      onMouseEnter={hoverHandlers.onMouseEnter}
      onMouseLeave={hoverHandlers.onMouseLeave}
    >
      <PreviewChrome label="video studio · brief to cut" />

      <div className="relative flex-1 overflow-hidden px-3 pt-2 pb-2">
        {/* Ambient dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(rgba(168,205,239,0.08) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* Brief line */}
        <div className="relative flex items-center gap-1.5 text-[9px] text-mono">
          <span className="px-1.5 py-0.5 rounded bg-halo/15 text-halo uppercase tracking-[0.15em] text-[7px]">
            brief
          </span>
          <span
            key={`brief-${sceneIndex === 0 ? "typing" : "done"}`}
            className="text-bone/90 truncate"
            style={{
              animation:
                sceneIndex === 0
                  ? "chip-in 1.2s ease-out both"
                  : "none",
            }}
          >
            30s product demo · warm cinematic
          </span>
          {sceneIndex === 0 && (
            <span
              className="anim-blink bg-halo shrink-0"
              style={{ width: 1.5, height: 8 }}
            />
          )}
        </div>

        {/* Storyboard strip */}
        <div className="relative mt-2 flex gap-[6px]">
          {FRAMES.map((frame, i) => (
            <div
              key={i}
              className={`relative flex-1 aspect-[4/3] rounded-[3px] overflow-hidden border transition-opacity duration-300 ${
                showSketches
                  ? "opacity-100 border-white/10"
                  : "opacity-0 border-white/0"
              }`}
              style={
                showSketches
                  ? { animation: `chip-in 0.5s ${i * 0.18}s backwards` }
                  : undefined
              }
            >
              {/* Sketch base — always under */}
              <div className="absolute inset-0 bg-[#141418]" />
              <div className="absolute inset-1 border border-dashed border-white/12 rounded-[2px]" />
              {/* Tiny sketch marks */}
              <svg
                className="absolute inset-1 text-white/15"
                viewBox="0 0 40 30"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 22 Q 14 10 22 20 T 36 14"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.5" />
              </svg>

              {/* Rendered gradient — fades in per-cell with stagger */}
              <div
                className="absolute inset-0"
                style={{
                  background: frame.bg,
                  opacity: renderCells ? 1 : 0,
                  transition: "opacity 420ms ease-out",
                  transitionDelay: renderCells ? `${i * 160}ms` : "0ms",
                }}
              />
              {/* Shimmer sweep during render */}
              {renderCells && !showTimeline && (
                <div
                  className="absolute inset-0 pointer-events-none shimmer"
                  style={{
                    mixBlendMode: "overlay",
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              )}

              {/* Labels */}
              <div className="absolute bottom-[2px] left-1 text-[6px] text-mono uppercase tracking-wider text-bone/80">
                {frame.label}
              </div>
              <div className="absolute top-[2px] right-1 text-[6px] text-mono text-chrome/60">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline + waveform (S3+) */}
        <div
          className={`relative mt-2 transition-opacity duration-500 ${
            showTimeline ? "opacity-100" : "opacity-0"
          }`}
          style={
            showTimeline
              ? { animation: "chip-in 0.45s backwards" }
              : undefined
          }
        >
          <div className="flex gap-[2px] h-[8px] mb-1">
            {FRAMES.map((f, i) => (
              <div
                key={i}
                className="flex-1 rounded-[2px] border border-white/10"
                style={{ background: f.bg, opacity: 0.88 }}
              />
            ))}
          </div>
          <div className="flex items-end gap-[1.5px] h-[14px]">
            {Array.from({ length: 32 }).map((_, i) => {
              const rand = (n: number) => {
                const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
                return x - Math.floor(x);
              };
              const h = 3 + Math.sin(i * 0.9) * 3.5 + rand(i) * 3;
              const dur = 0.9 + rand(i + 21) * 0.7;
              return (
                <span
                  key={i}
                  className="w-[2px] rounded-full"
                  style={{
                    backgroundColor:
                      i % 3 === 0
                        ? "rgba(168,205,239,0.9)"
                        : "rgba(199,202,209,0.65)",
                    height: `${h.toFixed(2)}px`,
                    animationName: "breathe",
                    animationDuration: `${dur.toFixed(2)}s`,
                    animationIterationCount: "infinite",
                    animationTimingFunction: "ease-in-out",
                    animationDelay: `${(i * 0.04).toFixed(2)}s`,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Models chip — top-right */}
        <div
          className={`absolute top-2 right-3 flex items-center gap-1 rounded px-1.5 py-0.5 border border-white/10 bg-black/40 backdrop-blur transition-opacity ${
            showModelsChip ? "opacity-100" : "opacity-0"
          }`}
          style={
            showModelsChip
              ? { animation: "chip-in 0.4s backwards" }
              : undefined
          }
        >
          <span className="w-1 h-1 rounded-full bg-halo anim-breathe" />
          <span className="text-[7px] text-mono text-halo uppercase tracking-[0.15em]">
            11 models
          </span>
        </div>

        {/* Exported chip — bottom-right */}
        <div
          className={`absolute bottom-2 right-3 flex items-center gap-1 rounded px-1.5 py-0.5 border border-lume/40 bg-lume/10 backdrop-blur transition-opacity ${
            showExported ? "opacity-100" : "opacity-0"
          }`}
          style={
            showExported
              ? { animation: "chip-in 0.4s backwards" }
              : undefined
          }
        >
          <svg
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-[7px] text-mono text-lume uppercase tracking-[0.15em]">
            00:30 · 1080p
          </span>
        </div>
      </div>
    </div>
  );
}
