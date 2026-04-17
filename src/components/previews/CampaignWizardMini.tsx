"use client";

import { useSceneLoop } from "./useSceneLoop";
import PreviewChrome from "./previewChrome";

/**
 * 03 Campaign Wizard preview.
 *
 * Storyboard (~16s loop):
 *   S0  Prompt + reference thumbnail drop in on the left
 *   S1  Four agent chips (Copy / Visual / Brand / Distribution) cascade in;
 *       each cycles queued -> running -> done with a plasma pulse while running
 *   S2  Four campaign idea cards pop out in a 2x2 grid on the right
 *   S3  Four social platform icons appear at the bottom; dashed lines
 *       animate from the cards to each platform
 *   S4  Platforms light up with a green check in sequence
 *   S5  "Published · 4 campaigns · 4 platforms" chip appears
 */

const DURATIONS = [1800, 2400, 3000, 3400, 3000, 2400];

const AGENTS = [
  { id: "copy", label: "Copy", color: "#A8CDEF" },
  { id: "visual", label: "Visual", color: "#E8D9B8" },
  { id: "brand", label: "Brand", color: "#C9B087" },
  { id: "distrib", label: "Distrib.", color: "#D48492" },
];

const CAMPAIGNS = [
  {
    label: "Sunset Launch",
    bg: "linear-gradient(135deg, #E8B47A 0%, #9A4E3B 60%, #2D1614 100%)",
  },
  {
    label: "Beach House",
    bg: "linear-gradient(135deg, #A8CDEF 0%, #2D4A6B 60%, #0C1A2B 100%)",
  },
  {
    label: "Golden Hour",
    bg: "linear-gradient(135deg, #E8D9B8 0%, #7A5A28 60%, #2A1F14 100%)",
  },
  {
    label: "Boardwalk",
    bg: "linear-gradient(135deg, #D48492 0%, #6A3042 60%, #1F0F18 100%)",
  },
];

function SocialIcon({
  kind,
  className,
}: {
  kind: "ig" | "tt" | "meta" | "x";
  className?: string;
}) {
  if (kind === "ig") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={className}
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "tt") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M16.5 3c.4 2 1.8 3.6 3.5 4.2v2.6a7 7 0 01-3.5-1v5.6a5.4 5.4 0 11-5.4-5.4c.3 0 .5 0 .8.1v2.8a2.6 2.6 0 102.1 2.5V3h2.5z" />
      </svg>
    );
  }
  if (kind === "meta") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M4.5 14c1.5-5 4-9 6.5-9 1.7 0 2.8 1.4 4.3 4 1.7 3 2.7 4.5 3.5 4.5.7 0 1.2-.5 1.7-1.3.3 1.2-.2 3.3-2 3.3-2 0-3.5-2-4.9-4.7-.9-1.6-1.4-2.5-1.9-2.5-.6 0-1.4 1.3-2.8 4.1C7.5 15 6.2 16.5 4.9 16.5 3.4 16.5 2.5 15.2 2.5 13c0-1 .2-2 .6-2.8C3.5 12 3.9 13 4.5 14z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.7 3h3l-6.5 7.5L21 21h-6l-4.7-6L5 21H2l7-8L2 3h6.2l4.3 5.7L16.7 3zm-1 16.2h1.7L8.2 4.7H6.4l9.3 14.5z" />
    </svg>
  );
}

const PLATFORMS = [
  { kind: "ig", name: "Instagram" },
  { kind: "tt", name: "TikTok" },
  { kind: "meta", name: "Meta" },
  { kind: "x", name: "X" },
] as const;

export default function CampaignWizardMini() {
  const { sceneIndex, rootRef, hoverHandlers } = useSceneLoop(DURATIONS);

  const showAgents = sceneIndex >= 1;
  const showCampaigns = sceneIndex >= 2;
  const showSocial = sceneIndex >= 3;
  const socialsDone = sceneIndex >= 4;
  const showPublished = sceneIndex >= 5;

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full flex flex-col bg-[#0D0D10]"
      onMouseEnter={hoverHandlers.onMouseEnter}
      onMouseLeave={hoverHandlers.onMouseLeave}
    >
      <PreviewChrome label="campaign wizard · multi-agent" />

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

        {/* Left column — prompt + reference + agent chips */}
        <div className="relative flex flex-col gap-1.5 w-[40%] pr-2">
          {/* Prompt tile */}
          <div
            className="flex items-center gap-1.5 rounded border border-white/10 bg-white/[0.03] px-1.5 py-1"
            style={{ animation: "chip-in 0.4s backwards" }}
          >
            {/* Reference thumbnail */}
            <div
              className="w-5 h-5 rounded-[2px] shrink-0 border border-white/15"
              style={{
                background:
                  "linear-gradient(135deg, #E8B47A 0%, #9A4E3B 60%, #2D1614 100%)",
              }}
            />
            <div className="min-w-0 flex-1">
              <div className="text-[6px] text-mono text-halo uppercase tracking-[0.15em] mb-0.5">
                prompt
              </div>
              <div className="text-[8px] text-bone/90 truncate">
                summer 2026 · warm · lux
              </div>
            </div>
          </div>

          {/* Agent chips */}
          <div className="flex flex-col gap-[3px]">
            {AGENTS.map((a, i) => {
              const staggerDelayS = 0.1 + i * 0.15;
              // Agent status cycles through the scene:
              //  S1: running -> fades in with pulse
              //  S2+: done
              const runningNow = showAgents && !showCampaigns;
              const doneNow = showCampaigns;
              return (
                <div
                  key={a.id}
                  className={`flex items-center gap-1.5 rounded border px-1.5 py-0.5 transition-colors ${
                    doneNow
                      ? "border-white/15 bg-white/[0.04]"
                      : "border-white/10 bg-white/[0.02]"
                  } ${
                    showAgents ? "opacity-100" : "opacity-0"
                  }`}
                  style={
                    showAgents
                      ? {
                          animation: `chip-in 0.4s ${staggerDelayS}s backwards`,
                        }
                      : undefined
                  }
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      background: doneNow
                        ? "#C7CAD1"
                        : runningNow
                        ? a.color
                        : "rgba(199,202,209,0.35)",
                      boxShadow:
                        runningNow && !doneNow
                          ? `0 0 8px ${a.color}`
                          : "none",
                      animation:
                        runningNow && !doneNow
                          ? "breathe 1.2s ease-in-out infinite"
                          : "none",
                    }}
                  />
                  <span
                    className="text-[7px] text-mono uppercase tracking-wider"
                    style={{ color: doneNow ? "#E8D9B8" : "rgba(247,248,250,0.85)" }}
                  >
                    {a.label}
                  </span>
                  {doneNow && (
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="3.5"
                      className="ml-auto"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {runningNow && !doneNow && (
                    <span className="ml-auto text-[6px] text-mono text-halo uppercase tracking-widest">
                      run
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column — campaign cards 2x2 */}
        <div
          className="absolute top-2 right-3 grid grid-cols-2 gap-[4px]"
          style={{ width: "48%" }}
        >
          {CAMPAIGNS.map((c, i) => (
            <div
              key={c.label}
              className={`relative aspect-[4/3] rounded-[3px] overflow-hidden border transition-all duration-300 ${
                showCampaigns
                  ? "opacity-100 border-white/15"
                  : "opacity-0 border-white/0"
              }`}
              style={
                showCampaigns
                  ? {
                      animation: `chip-in 0.5s ${i * 0.12}s backwards`,
                      background: c.bg,
                    }
                  : { background: c.bg }
              }
            >
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute bottom-[1px] left-1 text-[6px] text-mono uppercase tracking-wider text-bone/90 truncate pr-1">
                {c.label}
              </div>
              <div className="absolute top-[1px] right-1 text-[6px] text-mono text-bone/70">
                0{i + 1}
              </div>
              {showSocial && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(168,205,239,0.35)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom row — social platforms */}
        <div
          className={`absolute bottom-1.5 left-3 right-3 flex items-center gap-2 transition-opacity duration-500 ${
            showSocial ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Dashed connector line from campaigns down to platforms row */}
          {showSocial && (
            <svg
              className="absolute left-0 right-0 -top-3 pointer-events-none w-full h-3"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <line
                x1="50"
                y1="0"
                x2="10"
                y2="12"
                stroke="rgba(168,205,239,0.35)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                className="flow-line"
              />
              <line
                x1="60"
                y1="0"
                x2="35"
                y2="12"
                stroke="rgba(168,205,239,0.35)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                className="flow-line"
              />
              <line
                x1="70"
                y1="0"
                x2="60"
                y2="12"
                stroke="rgba(168,205,239,0.35)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                className="flow-line"
              />
              <line
                x1="80"
                y1="0"
                x2="85"
                y2="12"
                stroke="rgba(168,205,239,0.35)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                className="flow-line"
              />
            </svg>
          )}

          <div className="flex items-center gap-1.5">
            {PLATFORMS.map((p, i) => (
              <div
                key={p.kind}
                className={`relative w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                  socialsDone
                    ? "border-lume/40 bg-lume/10"
                    : "border-white/15 bg-white/[0.04]"
                }`}
                style={
                  showSocial
                    ? { animation: `chip-in 0.4s ${i * 0.12}s backwards` }
                    : undefined
                }
              >
                <SocialIcon
                  kind={p.kind}
                  className={`w-3.5 h-3.5 ${
                    socialsDone ? "text-lume" : "text-bone/85"
                  }`}
                />
                {socialsDone && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-lume flex items-center justify-center"
                    style={{
                      animation: `chip-in 0.35s ${i * 0.14}s backwards`,
                    }}
                  >
                    <svg
                      width="5"
                      height="5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0D0D10"
                      strokeWidth="4.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Published chip */}
          <div
            className={`ml-auto flex items-center gap-1 rounded px-1.5 py-0.5 border border-lume/40 bg-lume/10 transition-opacity ${
              showPublished ? "opacity-100" : "opacity-0"
            }`}
            style={
              showPublished
                ? { animation: "chip-in 0.4s backwards" }
                : undefined
            }
          >
            <span className="w-1 h-1 rounded-full bg-lume anim-breathe" />
            <span className="text-[7px] text-mono text-lume uppercase tracking-[0.15em]">
              published · 4
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
