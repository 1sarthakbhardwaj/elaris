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
  IconDownload,
  IconImage,
  IconMessage,
  IconUpscale,
  IconWand,
} from "./icons";

type ImagePhase = "empty" | "generating" | "done" | "fading";
type ImageVariant = "warm" | "cool" | "sunset" | "violet";

export interface MiniImageNodeData {
  phase?: ImagePhase;
  /** Picks the themed radial gradient for the "done" state. */
  variant?: ImageVariant;
  filename?: string;
  modelTag?: string;
  progress?: number;
  /** When true, the Wand button in the hover pill pulses. */
  wandHighlight?: boolean;
  /** One-shot glow ring around the media frame — used when the image has just been re-rendered from an edit prompt. */
  editedFlash?: boolean;
  /** Forces a directional "+" connector visible + pulsing, used to signal "click here to attach a follow-up". */
  plusPulse?: "bottom" | "right";
  fading?: boolean;
}

function MiniImageNodeComponent({ data }: NodeProps) {
  const d = data as unknown as MiniImageNodeData;
  const phase = d.phase ?? "empty";
  const isGenerating = phase === "generating";
  const isDone = phase === "done";
  const isEmpty = phase === "empty";
  const variant = d.variant ?? "warm";

  const accent = "var(--studio-image-accent)";
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
      plusPulse={d.plusPulse}
      filename={
        d.filename
          ? { icon: <IconImage size={10} />, text: d.filename }
          : undefined
      }
      toolbar={
        <>
          <PillButton title="Edit" highlight={d.wandHighlight}>
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
      minWidth={220}
    >
      <MiniNodeHeader
        accent={accent}
        icon={
          <span style={{ color: "rgba(255,255,255,0.95)" }}>
            <IconImage size={12} />
          </span>
        }
        label="Image"
        chips={
          d.modelTag && (
            <MiniChip tone="outline">{d.modelTag}</MiniChip>
          )
        }
      />

      {/* 16:9 media frame */}
      <div className="px-2.5 pt-2 pb-2.5">
        <div
          className="relative w-full overflow-hidden rounded-md"
          style={{ aspectRatio: "16 / 9" }}
        >
          {/* Empty state */}
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
                <IconImage size={18} />
              </span>
              <span
                className="text-[9px] tracking-tight"
                style={{ color: "var(--studio-text-tertiary)" }}
              >
                Click to add media
              </span>
            </div>
          )}

          {/* Generating state — checkerboard fill */}
          {isGenerating && (
            <div className="sm-checkerboard absolute inset-0 rounded-md" />
          )}

          {/* Done state — themed gradient + subtle grain */}
          {isDone && (
            <div
              className={`${gradientClass} sm-grain absolute inset-0 rounded-md`}
              style={{ position: "absolute" }}
            >
              {/* Simulated highlight light */}
              <span
                aria-hidden
                className="absolute inset-0 rounded-md"
                style={{
                  background:
                    "radial-gradient(circle at 75% 25%, rgba(255,255,255,0.22) 0%, transparent 45%)",
                  mixBlendMode: "screen",
                  opacity: 0.85,
                }}
              />
              {d.editedFlash && (
                <span
                  aria-hidden
                  key={`flash-${d.variant ?? "v"}`}
                  className="sm-edited-flash absolute inset-0 rounded-md"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </MiniNodeShell>
  );
}

export default memo(MiniImageNodeComponent);
