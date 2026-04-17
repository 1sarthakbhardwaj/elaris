"use client";

import { memo } from "react";
import type { NodeProps } from "@xyflow/react";
import MiniNodeShell, {
  MiniNodeHeader,
  MiniChip,
} from "./MiniNodeShell";
import { IconDownload, IconMaximize2 } from "./icons";

type RatioPhase = "empty" | "generating" | "done" | "fading";
type RatioTag = "1:1" | "9:16" | "16:9";

export interface MiniRatioOutputNodeData {
  phase?: RatioPhase;
  ratio?: RatioTag;
  label?: string;
  variant?: "warm" | "cool" | "sunset" | "violet";
  progress?: number;
  fading?: boolean;
}

function MiniRatioOutputNodeComponent({ data }: NodeProps) {
  const d = data as unknown as MiniRatioOutputNodeData;
  const phase = d.phase ?? "empty";
  const ratio = d.ratio ?? "1:1";
  const isGenerating = phase === "generating";
  const isDone = phase === "done";
  const accent = "var(--studio-brand-accent)";
  const variant = d.variant ?? "warm";

  const aspect = ratio === "1:1" ? "1 / 1" : ratio === "9:16" ? "9 / 16" : "16 / 9";
  const gradientClass =
    variant === "warm"
      ? "sm-gradient-warm"
      : variant === "cool"
        ? "sm-gradient-cool"
        : variant === "sunset"
          ? "sm-gradient-sunset"
          : "sm-gradient-violet";

  return (
    <MiniNodeShell
      accent={accent}
      fading={d.fading}
      generating={isGenerating}
      progress={d.progress}
      minWidth={ratio === "9:16" ? 120 : 150}
      showConnectors={{ left: false, right: false }}
      showHandles={{ target: true, source: false }}
    >
      <MiniNodeHeader
        accent={accent}
        icon={
          <span style={{ color: accent }}>
            <IconMaximize2 size={11} />
          </span>
        }
        label={d.label ?? "Ratio"}
        right={
          <MiniChip accent={accent} tone="soft">
            {ratio}
          </MiniChip>
        }
      />
      <div className="px-2 pt-1.5 pb-2">
        <div
          className="relative w-full overflow-hidden rounded"
          style={{ aspectRatio: aspect }}
        >
          {phase === "empty" && (
            <div
              className="sm-checkerboard absolute inset-0 rounded"
              style={{ opacity: 0.5 }}
            />
          )}
          {isGenerating && <div className="sm-checkerboard absolute inset-0 rounded" />}
          {isDone && (
            <div className={`${gradientClass} sm-grain absolute inset-0 rounded`}>
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.25) 0%, transparent 45%)",
                  mixBlendMode: "screen",
                  opacity: 0.9,
                }}
              />
            </div>
          )}
          {/* Hover overlay: dim + small download button */}
          {isDone && (
            <div
              className="pointer-events-none absolute inset-0 flex items-end justify-end rounded opacity-0 transition-opacity duration-150 group-hover:opacity-100"
              style={{ background: "rgba(0,0,0,0.38)" }}
            >
              <span
                className="m-1 inline-flex items-center gap-0.5 rounded px-1.5 py-1 text-[9px] leading-none"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  color: "#0a0a0a",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <IconDownload size={10} />
                PNG
              </span>
            </div>
          )}
        </div>
      </div>
    </MiniNodeShell>
  );
}

export default memo(MiniRatioOutputNodeComponent);
