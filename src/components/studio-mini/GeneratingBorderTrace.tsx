"use client";

import { memo, useId } from "react";

/** Rounded-rect path in 0–100 viewBox; stroke traces clockwise. */
const ROUNDED_FRAME_PATH =
  "M 9,2 L 91,2 C 95.5,2 98,4.5 98,9 L 98,91 C 98,95.5 95.5,98 91,98 L 9,98 C 4.5,98 2,95.5 2,91 L 2,9 C 2,4.5 4.5,2 9,2 Z";

export type GeneratingBorderTraceProps = {
  progress: number;
  className?: string;
  /** Optional stroke color (defaults to a soft halo tone). */
  color?: string;
};

/**
 * Absolute overlay: classic "border trace" loader (SVG stroke-dash) with a soft glow.
 * Parent must be `position: relative` and `overflow: hidden` + rounded corners matching the card.
 * Faithful port of ELARIS-AI/components/studio/nodes/GeneratingBorderTrace.tsx.
 */
function GeneratingBorderTraceComponent({
  progress,
  className,
  color = "rgba(255,255,255,0.92)",
}: GeneratingBorderTraceProps) {
  const uid = useId().replace(/:/g, "");
  const filterId = `sm-border-glow-${uid}`;
  const p = Math.max(0, Math.min(100, progress));
  const dashOffset = 100 - p * 0.998;

  return (
    <svg
      className={`pointer-events-none absolute inset-0 z-[12] h-full w-full ${className ?? ""}`}
      viewBox="0 0 100 100"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <filter id={filterId} x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.65" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* faint track */}
      <path
        d={ROUNDED_FRAME_PATH}
        stroke="rgba(255,255,255,0.14)"
        strokeWidth={1.15}
        vectorEffect="non-scaling-stroke"
        pathLength={100}
        fill="none"
      />
      {/* animated trace */}
      <path
        d={ROUNDED_FRAME_PATH}
        stroke={color}
        strokeWidth={1.35}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        pathLength={100}
        strokeDasharray="100"
        strokeDashoffset={dashOffset}
        fill="none"
        style={{ filter: `url(#${filterId})` }}
      />
    </svg>
  );
}

export default memo(GeneratingBorderTraceComponent);
