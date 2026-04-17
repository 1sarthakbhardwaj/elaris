"use client";

import { memo } from "react";
import type { NodeProps } from "@xyflow/react";
import MiniNodeShell, {
  MiniNodeHeader,
  MiniChip,
  PillButton,
  PillDivider,
} from "./MiniNodeShell";
import {
  IconClapperboard,
  IconDownload,
  IconFilm,
  IconMessage,
  IconPlay,
  IconUpscale,
  IconWand,
} from "./icons";

type VideoPhase = "empty" | "generating" | "done" | "fading";

export interface MiniVideoNodeData {
  phase?: VideoPhase;
  category?: string;
  model?: string;
  duration?: string;
  filename?: string;
  progress?: number;
  fading?: boolean;
}

function MiniVideoNodeComponent({ data }: NodeProps) {
  const d = data as unknown as MiniVideoNodeData;
  const phase = d.phase ?? "empty";
  const isEmpty = phase === "empty";
  const isGenerating = phase === "generating";
  const isDone = phase === "done";
  const accent = "var(--studio-video-accent)";

  return (
    <MiniNodeShell
      accent={accent}
      fading={d.fading}
      generating={isGenerating}
      progress={d.progress}
      filename={
        d.filename
          ? { icon: <IconFilm size={10} />, text: d.filename }
          : undefined
      }
      toolbar={
        <>
          <PillButton title="Edit">
            <IconWand size={13} />
          </PillButton>
          <PillButton title="Upscale">
            <IconUpscale size={13} />
          </PillButton>
          <PillDivider />
          <PillButton title="Download">
            <IconDownload size={13} />
          </PillButton>
          <PillButton title="Comment">
            <IconMessage size={13} />
          </PillButton>
        </>
      }
      minWidth={240}
    >
      <MiniNodeHeader
        accent={accent}
        icon={
          <span style={{ color: accent }}>
            <IconClapperboard size={12} />
          </span>
        }
        label="Video"
        chips={
          <>
            {d.category && (
              <MiniChip accent={accent} tone="soft">
                {d.category}
              </MiniChip>
            )}
            {d.model && <MiniChip tone="outline">{d.model}</MiniChip>}
          </>
        }
      />

      {/* 16:9 video frame */}
      <div className="px-2.5 pt-2 pb-2.5">
        <div
          className="relative w-full overflow-hidden rounded-md"
          style={{ aspectRatio: "16 / 9" }}
        >
          {isEmpty && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-1.5"
              style={{
                border: "1.5px dashed rgba(255,255,255,0.14)",
                borderRadius: 6,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span style={{ color: "var(--studio-text-tertiary)" }}>
                <IconClapperboard size={18} />
              </span>
              <span
                className="text-[9px] tracking-tight"
                style={{ color: "var(--studio-text-tertiary)" }}
              >
                Connect image + audio
              </span>
            </div>
          )}

          {isGenerating && (
            <div className="sm-checkerboard absolute inset-0 rounded-md" />
          )}

          {isDone && (
            <div className="sm-gradient-video sm-grain absolute inset-0 rounded-md">
              {/* Highlight */}
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(168,205,239,0.3) 0%, transparent 55%)",
                  mixBlendMode: "screen",
                  opacity: 0.9,
                }}
              />
              {/* Play triangle in a circle */}
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
                style={{
                  width: 26,
                  height: 26,
                  background: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(6px)",
                  color: "#ffffff",
                }}
              >
                <IconPlay size={11} />
              </span>
              {/* Bottom: duration + scrub bar */}
              <div className="absolute left-1.5 right-1.5 bottom-1.5 flex items-center gap-1.5">
                <span
                  className="text-[8.5px] leading-none px-1 py-0.5 rounded"
                  style={{
                    background: "rgba(0,0,0,0.55)",
                    color: "#ffffff",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {d.duration ?? "00:08"}
                </span>
                <div
                  className="relative h-[3px] rounded-full flex-1"
                  style={{ background: "rgba(255,255,255,0.18)" }}
                >
                  <span
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{
                      width: "32%",
                      background: "rgba(255,255,255,0.85)",
                    }}
                  />
                  <span
                    className="absolute top-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      left: "32%",
                      width: 6,
                      height: 6,
                      background: "#ffffff",
                      boxShadow: "0 0 4px rgba(0,0,0,0.4)",
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MiniNodeShell>
  );
}

export default memo(MiniVideoNodeComponent);
