"use client";

import type { JSX } from "react";
import PreviewChrome from "./previewChrome";
import { useSceneLoop } from "./useSceneLoop";

/**
 * 03 Launch & Track — omnichannel scheduling + performance metrics.
 *
 * Loop: idle → publish queue on the ad card → platforms arm with checks →
 *       metrics + health score brighten together.
 */

const DURATIONS = [1600, 1800, 2000, 2400];

type IconFn = (props: { className?: string }) => JSX.Element;

const PLATFORMS: { id: string; label: string; Icon: IconFn }[] = [
  { id: "x", label: "X", Icon: IconX },
  { id: "google", label: "Google", Icon: IconGoogle },
  { id: "snap", label: "Snap", Icon: IconSnap },
  { id: "linkedin", label: "LinkedIn", Icon: IconLinkedIn },
  { id: "tiktok", label: "TikTok", Icon: IconTikTok },
  { id: "reddit", label: "Reddit", Icon: IconReddit },
];

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconGoogle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function IconSnap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821 1.564 3.527-.867 7.286-5.589 9.617a.77.77 0 01-.706 0c-4.723-2.331-7.026-6.09-5.463-9.617C8.962 1.069 12.217.793 12.217.793h-.011zM9.92 14.064c-.42 0-.782.343-.782.766 0 .423.362.766.783.766.421 0 .783-.343.783-.766 0-.423-.362-.766-.783-.766zm4.157 0c-.421 0-.783.343-.783.766 0 .423.362.766.783.766.421 0 .783-.343.783-.766 0-.423-.362-.766-.783-.766z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.5 3c.4 2 1.8 3.6 3.5 4.2v2.6a7 7 0 01-3.5-1v5.6a5.4 5.4 0 11-5.4-5.4c.3 0 .5 0 .8.1v2.8a2.6 2.6 0 102.1 2.5V3h2.5z" />
    </svg>
  );
}

function IconReddit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0111 11.108c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .688.561 1.248 1.25 1.248.687 0 1.248-.56 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c2.833 2.746 7.394 2.746 10.227 0a.327.327 0 000-.463.326.326 0 00-.463 0c-2.483 2.417-6.487 2.417-8.971 0a.326.326 0 00-.462-.094z" />
    </svg>
  );
}

export default function TrackLaunchMini() {
  const { sceneIndex, rootRef, hoverHandlers } = useSceneLoop(DURATIONS);

  const showQueue = sceneIndex >= 1;
  const liveMetrics = sceneIndex >= 3;

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full flex flex-col bg-[#0D0D10]"
      onMouseEnter={hoverHandlers.onMouseEnter}
      onMouseLeave={hoverHandlers.onMouseLeave}
    >
      <PreviewChrome label="launch & track · omnichannel" />

      <div className="relative flex-1 overflow-hidden px-2 py-2 flex gap-2 min-h-0">
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(rgba(168,205,239,0.06) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />

        {/* Left — ad preview */}
        <div className="relative z-[1] w-[44%] shrink-0 flex flex-col rounded-lg border border-white/[0.1] bg-black/40 overflow-hidden">
          <div className="px-2 pt-1.5 pb-1 border-b border-white/[0.06]">
            <div className="text-[6px] text-mono text-halo/90 uppercase tracking-[0.14em] truncate">
              biomedical_persona_ad
            </div>
          </div>
          <div className="relative aspect-[9/14] max-h-[62px] mx-1.5 mt-1.5 rounded-[4px] overflow-hidden border border-white/10">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(165deg, rgba(109,166,217,0.35) 0%, rgba(13,13,16,1) 55%), radial-gradient(ellipse at 70% 30%, rgba(232,217,184,0.25) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-1 left-1 right-1">
              <p className="text-[6px] font-semibold text-bone leading-tight drop-shadow">
                Last Call for Impact.
              </p>
              <p className="text-[5px] text-chrome/90 mt-0.5">Be Part of the Change.</p>
              <span className="inline-block mt-1 text-[5px] font-mono uppercase tracking-wider px-1 py-0.5 rounded bg-white/15 text-bone">
                Apply now
              </span>
            </div>
          </div>
          <div
            className={`mt-auto px-1.5 py-1 border-t border-white/[0.06] transition-opacity duration-300 ${
              showQueue ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="text-[5.5px] text-mono text-emerald-300/95 uppercase tracking-[0.12em]">
                Queued · 6 surfaces
              </span>
            </div>
          </div>
        </div>

        {/* Right — platforms + metrics + gauge */}
        <div className="relative z-[1] flex-1 flex flex-col gap-1 min-w-0">
          <div className="grid grid-cols-3 gap-[3px]">
            {PLATFORMS.map((p, i) => {
              const Icon = p.Icon;
              const checked =
                sceneIndex >= 2 && (sceneIndex >= 3 || i < 3);
              const dim = sceneIndex < 2;

              return (
                <div
                  key={p.id}
                  className={`flex items-center justify-center rounded border py-1 transition-all duration-300 ${
                    checked
                      ? "border-emerald-400/45 bg-emerald-500/10 text-bone"
                      : dim
                        ? "border-white/[0.06] bg-white/[0.02] text-chrome/35"
                        : "border-white/10 bg-white/[0.04] text-chrome/70"
                  }`}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <Icon className="w-3 h-3" />
                    {checked && (
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-emerald-400"
                        stroke="currentColor"
                        strokeWidth="3.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`grid grid-cols-2 gap-x-1 gap-y-0.5 text-[5.5px] leading-tight font-mono ${
              liveMetrics ? "text-emerald-200/95" : "text-chrome/55"
            } transition-colors duration-500`}
          >
            <div>Spend · $5,021 (+12%)</div>
            <div>CPM · $8.09</div>
            <div>ROAS · 5.2×</div>
            <div>CPA · $28.40</div>
            <div className="col-span-2">CVR · 4.8%</div>
          </div>

          <div className="relative mt-auto flex justify-end items-end pt-0.5">
            <Gauge score={670} delta={20} lit={liveMetrics} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Gauge({
  score,
  delta,
  lit,
}: {
  score: number;
  delta: number;
  lit: boolean;
}) {
  const circumference = 2 * Math.PI * 18;
  const dash = lit ? circumference * 0.72 : circumference * 0.35;

  return (
    <div className="relative flex items-center gap-1">
      <div className="relative w-[46px] h-[46px] shrink-0">
        <svg viewBox="0 0 52 52" className="w-full h-full -rotate-90">
          <circle cx="26" cy="26" r="18" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
          <circle
            cx="26"
            cy="26"
            r="18"
            fill="none"
            stroke={lit ? "#34d399" : "rgba(168,205,239,0.35)"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
            className="transition-all duration-700 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-0.5">
          <span
            className={`text-[11px] font-semibold leading-none tracking-tight ${
              lit ? "text-bone" : "text-chrome/50"
            }`}
          >
            {score}
          </span>
          <span
            className={`text-[5px] font-mono uppercase tracking-wider mt-0.5 ${
              lit ? "text-emerald-400" : "text-chrome/40"
            }`}
          >
            Good
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col items-start text-[6px] font-mono leading-tight ${
          lit ? "text-emerald-300" : "text-chrome/40"
        }`}
      >
        <span className="inline-flex items-center gap-0.5">
          <span className="text-emerald-400">↑</span>
          {delta}
        </span>
        <span className="text-[5px] text-chrome/50 normal-case tracking-normal">vs last week</span>
      </div>
    </div>
  );
}
