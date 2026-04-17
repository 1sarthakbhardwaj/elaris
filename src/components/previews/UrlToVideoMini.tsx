"use client";

import { useSceneLoop } from "./useSceneLoop";
import PreviewChrome from "./previewChrome";

/**
 * 04 URL-to-Video preview.
 *
 * Storyboard (~15s loop):
 *   S0  URL bar appears and types in an amazon URL
 *   S1  Four product chips (thumb / $price / rating / reviews) burst out
 *   S2  Script panel slides in with a typewriter voiceover line
 *   S3  Custom avatar circle appears with lipsync dots pulsing
 *   S4  A 9:16 UGC ad frame assembles on the right:
 *         avatar head overlay + product inset + caption
 *   S5  "UGC ad · 30s · ready" chip appears bottom-right
 */

const DURATIONS = [1800, 1800, 2800, 2800, 3400, 2000];

const PRODUCT_CHIPS = [
  {
    label: "img",
    content: (
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, #A8CDEF 0%, #2D4A6B 60%, #0C0D10 100%)",
        }}
      />
    ),
  },
  {
    label: "$129",
    content: (
      <div className="w-full h-full flex items-center justify-center text-[8px] text-mono font-semibold text-lume">
        $129
      </div>
    ),
  },
  {
    label: "4.7",
    content: (
      <div className="w-full h-full flex items-center justify-center gap-[1px] text-[8px] text-mono text-amber-200">
        <svg width="7" height="7" viewBox="0 0 24 24" fill="#fbbf24">
          <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
        </svg>
        <span>4.7</span>
      </div>
    ),
  },
  {
    label: "12k",
    content: (
      <div className="w-full h-full flex items-center justify-center text-[7px] text-mono text-bone/85">
        12k★
      </div>
    ),
  },
];

export default function UrlToVideoMini() {
  const { sceneIndex, rootRef, hoverHandlers } = useSceneLoop(DURATIONS);

  const showChips = sceneIndex >= 1;
  const showScript = sceneIndex >= 2;
  const showAvatar = sceneIndex >= 3;
  const showFrame = sceneIndex >= 4;
  const showReady = sceneIndex >= 5;

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full flex flex-col bg-[#0D0D10]"
      onMouseEnter={hoverHandlers.onMouseEnter}
      onMouseLeave={hoverHandlers.onMouseLeave}
    >
      <PreviewChrome label="url to video · ugc ad" />

      <div className="relative flex-1 overflow-hidden px-3 py-2">
        {/* Ambient grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(rgba(168,205,239,0.08) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* URL bar — always present from S0 */}
        <div
          className="relative flex items-center gap-1.5 rounded border border-white/10 bg-white/[0.04] px-1.5 py-1"
          style={{ animation: "chip-in 0.4s backwards" }}
        >
          <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#ff9900]" />
          <span className="text-[8px] text-mono text-bone/90 truncate">
            amazon.com/Sneaker-Pro-V2
          </span>
          {sceneIndex === 0 && (
            <span
              className="anim-blink bg-halo shrink-0 ml-auto"
              style={{ width: 1.5, height: 8 }}
            />
          )}
          {sceneIndex >= 1 && (
            <span className="ml-auto text-[6px] text-mono text-halo uppercase tracking-widest">
              scraped
            </span>
          )}
        </div>

        {/* Left column zone — script + avatar, shrinks after frame appears */}
        <div
          className={`absolute left-3 right-3 transition-all duration-500`}
          style={{
            top: 28,
            bottom: 6,
            paddingRight: showFrame ? "38%" : 0,
          }}
        >
          {/* Product chips */}
          <div className="flex items-center gap-1 mt-1.5 mb-1.5">
            {PRODUCT_CHIPS.map((chip, i) => (
              <div
                key={chip.label}
                className={`relative w-7 h-7 rounded-[3px] border overflow-hidden transition-opacity ${
                  showChips
                    ? "opacity-100 border-white/15"
                    : "opacity-0 border-white/0"
                }`}
                style={
                  showChips
                    ? {
                        animation: `chip-in 0.4s ${i * 0.08}s backwards`,
                        background: "rgba(255,255,255,0.04)",
                      }
                    : undefined
                }
              >
                {chip.content}
              </div>
            ))}
          </div>

          {/* Script panel */}
          <div
            className={`rounded border border-white/10 bg-white/[0.03] px-1.5 py-1 transition-opacity ${
              showScript ? "opacity-100" : "opacity-0"
            }`}
            style={
              showScript
                ? { animation: "chip-in 0.4s backwards" }
                : undefined
            }
          >
            <div className="flex items-center gap-1 mb-0.5">
              <svg
                width="7"
                height="7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A8CDEF"
                strokeWidth="2"
              >
                <path d="M4 4h16v13H5.5L4 18.5V4z" />
              </svg>
              <span className="text-[6px] text-mono text-halo uppercase tracking-[0.15em]">
                script
              </span>
            </div>
            <div className="text-[8px] leading-tight text-bone/90 line-clamp-2">
              Meet the all-new Sneaker Pro V2 — built for comfort…
              {sceneIndex === 2 && (
                <span
                  className="inline-block align-middle ml-0.5 anim-blink bg-halo"
                  style={{ width: 1.5, height: 7 }}
                />
              )}
            </div>
          </div>

          {/* Avatar row */}
          <div
            className={`mt-1.5 flex items-center gap-1.5 transition-opacity ${
              showAvatar ? "opacity-100" : "opacity-0"
            }`}
            style={
              showAvatar
                ? { animation: "chip-in 0.4s backwards" }
                : undefined
            }
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/15 shrink-0">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 42%, #F2D6B9 0%, #C39A73 55%, #5B3A2A 100%)",
                }}
              />
              {/* Eyes */}
              <span
                className="absolute rounded-full bg-[#2d1f14]"
                style={{ left: "32%", top: "40%", width: 2, height: 2 }}
              />
              <span
                className="absolute rounded-full bg-[#2d1f14]"
                style={{ right: "32%", top: "40%", width: 2, height: 2 }}
              />
              {/* Mouth area subtle */}
              <span
                className="absolute rounded-full bg-[#5a2a22]/60"
                style={{ left: "42%", top: "62%", width: 5, height: 1.5 }}
              />
            </div>
            <div className="flex items-end gap-[1.5px] h-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="w-[2px] rounded-full bg-halo/80"
                  style={{
                    height: 8,
                    transformOrigin: "bottom center",
                    animation: "lipsync 0.55s ease-in-out infinite",
                    animationDelay: `${i * 0.08}s`,
                  }}
                />
              ))}
            </div>
            <div className="ml-auto flex items-center gap-1 rounded bg-white/[0.05] border border-white/10 px-1 py-[1px]">
              <span className="w-1 h-1 rounded-full bg-plasma anim-breathe" />
              <span className="text-[6px] text-mono text-bone/80 uppercase tracking-widest">
                Rachel · en
              </span>
            </div>
          </div>
        </div>

        {/* 9:16 UGC frame — slides in from right in S4 */}
        <div
          className={`absolute top-8 bottom-2 right-3 rounded-[3px] border border-white/15 overflow-hidden transition-all duration-500 ${
            showFrame ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
          }`}
          style={{ width: "34%" }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #2D4A6B 0%, #A8CDEF 35%, #C9B087 100%)",
            }}
          />
          {/* Avatar bust */}
          <div className="absolute inset-x-0 top-0 h-[54%] flex items-start justify-center pt-1">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/30 shadow-lg">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 42%, #F2D6B9 0%, #C39A73 55%, #5B3A2A 100%)",
                }}
              />
              <span
                className="absolute rounded-full bg-[#2d1f14]"
                style={{ left: "32%", top: "40%", width: 2, height: 2 }}
              />
              <span
                className="absolute rounded-full bg-[#2d1f14]"
                style={{ right: "32%", top: "40%", width: 2, height: 2 }}
              />
            </div>
          </div>
          {/* Product inset */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-[2px] border border-white/20"
            style={{
              top: "52%",
              width: "64%",
              height: "22%",
              background:
                "linear-gradient(135deg, #A8CDEF 0%, #2D4A6B 60%, #0C0D10 100%)",
            }}
          />
          {/* Caption bar */}
          <div className="absolute inset-x-1 bottom-4 text-[6px] text-mono text-bone text-center bg-black/45 rounded px-1 py-0.5">
            the shoe everyone&apos;s talking about
          </div>
          {/* Play triangle + duration */}
          <div className="absolute bottom-1 right-1 flex items-center gap-[3px] rounded bg-black/60 px-1 py-[1px]">
            <span className="w-0 h-0 border-l-[4px] border-l-lume border-y-[3px] border-y-transparent" />
            <span className="text-[6px] text-mono text-lume">0:30</span>
          </div>
        </div>

        {/* UGC ready chip */}
        <div
          className={`absolute bottom-1.5 right-3 flex items-center gap-1 rounded px-1.5 py-0.5 border border-lume/40 bg-lume/10 transition-opacity ${
            showReady ? "opacity-100" : "opacity-0"
          }`}
          style={
            showReady
              ? { animation: "chip-in 0.4s backwards" }
              : undefined
          }
        >
          <svg
            width="7"
            height="7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="3.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-[7px] text-mono text-lume uppercase tracking-[0.15em]">
            UGC · 30s
          </span>
        </div>
      </div>
    </div>
  );
}
