"use client";

import { memo } from "react";
import type { NodeProps } from "@xyflow/react";
import MiniNodeShell, {
  MiniNodeHeader,
  MiniChip,
} from "./MiniNodeShell";
import { IconCheck, IconPackage } from "./icons";

type BrandPackPhase = "spawn" | "filling" | "done" | "fading";

export interface MiniBrandPackNodeData {
  phase?: BrandPackPhase;
  /** How many of the 9 slots are filled (0–9). */
  filledCount?: number;
  filename?: string;
  fading?: boolean;
}

interface AdSize {
  id: string;
  label: string;
  channel: string;
  w: number;
  h: number;
}

// Matches the 9 placements from the original BrandPack resize animation.
const SIZES: AdSize[] = [
  { id: "ig-feed", label: "1080×1080", channel: "IG Feed", w: 1080, h: 1080 },
  { id: "ig-story", label: "1080×1920", channel: "IG Story", w: 1080, h: 1920 },
  { id: "li-feed", label: "1200×628", channel: "LinkedIn", w: 1200, h: 628 },
  { id: "mrec", label: "300×250", channel: "MREC", w: 300, h: 250 },
  { id: "leaderboard", label: "728×90", channel: "Leaderboard", w: 728, h: 90 },
  { id: "billboard", label: "970×250", channel: "Billboard", w: 970, h: 250 },
  { id: "skyscraper", label: "160×600", channel: "Skyscraper", w: 160, h: 600 },
  { id: "mobile-banner", label: "320×100", channel: "Mobile", w: 320, h: 100 },
  { id: "half-page", label: "300×600", channel: "Half page", w: 300, h: 600 },
];

// Per-cell max dims so every slot rectangle stays inside the node body.
const CELL_MAX_W = 44;
const CELL_MAX_H = 20;

function fitToCell(ratio: number): { w: number; h: number } {
  let w = CELL_MAX_W;
  let h = CELL_MAX_W / ratio;
  if (h > CELL_MAX_H) {
    h = CELL_MAX_H;
    w = CELL_MAX_H * ratio;
  }
  return { w, h };
}

function SlotCell({
  size,
  filled,
  staggerIndex,
}: {
  size: AdSize;
  filled: boolean;
  staggerIndex: number;
}) {
  const { w, h } = fitToCell(size.w / size.h);

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="relative overflow-hidden rounded-[2px]"
        style={{
          width: w,
          height: h,
          border: filled
            ? "1px solid rgba(245, 158, 11, 0.6)"
            : "1px dashed rgba(255,255,255,0.18)",
          transition: "border-color 220ms ease-out",
          animation: `sm-chip-in 0.32s ${staggerIndex * 55}ms backwards`,
        }}
      >
        {filled && (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 40%, #f2d19a 0%, #c07a4e 45%, #3a1f1a 100%)",
              }}
            />
            <span
              aria-hidden
              key={`beam-${size.id}`}
              className="pointer-events-none absolute inset-x-0"
              style={{
                height: "40%",
                top: 0,
                background:
                  "linear-gradient(180deg, rgba(245,158,11,0) 0%, rgba(245,158,11,0.75) 50%, rgba(245,158,11,0) 100%)",
                mixBlendMode: "screen",
                animation: "beam-sweep 520ms ease-out",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

function MiniBrandPackNodeComponent({ data }: NodeProps) {
  const d = data as unknown as MiniBrandPackNodeData;
  const phase = d.phase ?? "spawn";
  const filledCount = Math.max(0, Math.min(SIZES.length, d.filledCount ?? 0));
  const isDone = phase === "done";

  const accent = "var(--studio-brand-accent)";

  return (
    <MiniNodeShell
      accent={accent}
      fading={d.fading}
      filename={
        d.filename
          ? { icon: <IconPackage size={10} />, text: d.filename }
          : undefined
      }
      minWidth={220}
    >
      <MiniNodeHeader
        accent={accent}
        icon={
          <span style={{ color: "rgba(255,255,255,0.95)" }}>
            <IconPackage size={12} />
          </span>
        }
        label="Brand Pack"
        chips={
          <MiniChip accent={accent} tone="outline">
            {isDone ? "9 sizes · brand-locked" : `${filledCount}/9 sizes`}
          </MiniChip>
        }
      />

      <div className="px-3 py-2.5">
        <div
          className="grid grid-cols-3 gap-y-1.5 gap-x-2"
          style={{ gridTemplateRows: "repeat(3, 22px)" }}
        >
          {SIZES.map((s, i) => (
            <SlotCell
              key={s.id}
              size={s}
              filled={i < filledCount}
              staggerIndex={i}
            />
          ))}
        </div>

        {/* Status row — flips to approved once done */}
        <div
          className="mt-2.5 pt-2 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--studio-node-border)" }}
        >
          <span
            className="text-[9px] font-medium uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--studio-text-tertiary)",
            }}
          >
            {isDone ? "EXPORTED" : phase === "filling" ? "RESIZING" : "READY"}
          </span>

          {isDone ? (
            <span
              aria-hidden
              className="sm-check-pop inline-flex items-center justify-center rounded-full"
              style={{
                width: 16,
                height: 16,
                background: "color-mix(in srgb, var(--studio-brand-accent) 18%, transparent)",
                border: "1px solid color-mix(in srgb, var(--studio-brand-accent) 55%, transparent)",
                color: "var(--studio-brand-accent)",
              }}
            >
              <IconCheck size={10} />
            </span>
          ) : (
            <span
              className="text-[9px] font-semibold px-1.5 py-[3px] rounded-[5px] tracking-tight"
              style={{
                fontFamily: "var(--font-mono)",
                background: "color-mix(in srgb, var(--studio-brand-accent) 14%, transparent)",
                color: "var(--studio-brand-accent)",
                border: "1px solid color-mix(in srgb, var(--studio-brand-accent) 30%, transparent)",
              }}
            >
              {filledCount === 0 ? "Resize" : `${filledCount} / 9`}
            </span>
          )}
        </div>
      </div>
    </MiniNodeShell>
  );
}

export default memo(MiniBrandPackNodeComponent);
