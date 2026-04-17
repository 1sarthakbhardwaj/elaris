"use client";

import { memo } from "react";
import type { NodeProps } from "@xyflow/react";
import MiniNodeShell, {
  MiniNodeHeader,
  MiniChip,
} from "./MiniNodeShell";
import {
  IconCheck,
  IconChevronDown,
  IconDownload,
  IconFolderDown,
  IconLoader,
  IconSparkles,
} from "./icons";

type OutputVariant = "save" | "image" | "video" | "push";
type OutputPhase = "spawn" | "selecting" | "highlighting" | "saving" | "done" | "fading";

export interface MiniOutputNodeData {
  phase?: OutputPhase;
  variant?: OutputVariant;
  /** Target label ("Summer Launch", "library", etc.) */
  target?: string;
  /** Optional subtitle/status on done. */
  doneText?: string;
  progress?: number;
  fading?: boolean;
}

function MiniOutputNodeComponent({ data }: NodeProps) {
  const d = data as unknown as MiniOutputNodeData;
  const phase = d.phase ?? "selecting";
  const variant = d.variant ?? "save";
  // Push uses a distinct plasma-pink accent to read as "publishing" vs. green "save".
  const accent = variant === "push" ? "#ec4899" : "var(--studio-output-accent)";

  const headerIcon =
    variant === "save" ? (
      <IconFolderDown size={12} />
    ) : variant === "push" ? (
      <IconSparkles size={12} />
    ) : (
      <IconDownload size={12} />
    );
  const headerLabel =
    variant === "save"
      ? "Save"
      : variant === "image"
        ? "Export"
        : variant === "push"
          ? "Push to Campaign"
          : "Export Video";

  const target = d.target ?? "Summer Launch";

  const isSelecting = phase === "selecting";
  const isHighlighting = phase === "highlighting";
  const isSaving = phase === "saving";
  const isDone = phase === "done";

  const doneText =
    d.doneText ??
    (variant === "save"
      ? `Saved to ${target}`
      : variant === "image"
        ? `Exported to ${target}`
        : variant === "push"
          ? `Published — 4 placements live`
          : `Rendered to ${target}`);

  const busyLabel = variant === "push" ? "Publishing…" : "Saving…";
  const readyLabel = variant === "push" ? "Ready to publish" : "Ready to save";
  const pickLabel = variant === "push" ? "Pick a campaign" : "Pick a destination";
  const chipLabel = variant === "push" ? "Live" : "Saved";
  const sectionLabel = variant === "push" ? "Destination" : "Campaign";

  return (
    <MiniNodeShell
      accent={accent}
      fading={d.fading}
      minWidth={220}
      showConnectors={{ left: false, right: false }}
      showHandles={{ target: true, source: false }}
    >
      <MiniNodeHeader
        accent={accent}
        icon={<span style={{ color: accent }}>{headerIcon}</span>}
        label={headerLabel}
        chips={
          isDone && (
            <MiniChip accent={accent} tone="soft">
              {chipLabel}
            </MiniChip>
          )
        }
      />

      <div className="px-3 py-2.5 flex flex-col gap-2">
        {/* Destination / Campaign picker row */}
        <div className="flex flex-col gap-1">
          <span
            className="text-[9px] uppercase tracking-[0.14em]"
            style={{
              color: "var(--studio-text-tertiary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {sectionLabel}
          </span>
          <div
            className="flex items-center justify-between px-2 py-1.5 rounded-md transition-all"
            style={{
              background: isHighlighting || isSaving
                ? `color-mix(in srgb, ${accent} 14%, transparent)`
                : "rgba(255,255,255,0.03)",
              border:
                isHighlighting || isSaving
                  ? `1px solid color-mix(in srgb, ${accent} 40%, transparent)`
                  : "1px solid var(--studio-node-border)",
              boxShadow:
                isHighlighting
                  ? `0 0 0 3px color-mix(in srgb, ${accent} 12%, transparent)`
                  : "none",
            }}
          >
            <span
              className="text-[10.5px] leading-none"
              style={{
                color: isSelecting
                  ? "var(--studio-text-tertiary)"
                  : "var(--studio-text-primary)",
              }}
            >
              {isSelecting ? (
                <span style={{ color: "var(--studio-text-tertiary)" }}>
                  Select campaign…
                </span>
              ) : (
                target
              )}
            </span>
            <span style={{ color: "var(--studio-text-tertiary)" }}>
              {isSelecting ? (
                <IconLoader size={10} />
              ) : (
                <IconChevronDown size={10} />
              )}
            </span>
          </div>
        </div>

        {/* Status row */}
        <div className="flex items-center gap-1.5 min-h-[18px]">
          {isDone ? (
            <>
              <span
                className="sm-check-pop inline-flex items-center justify-center rounded-full"
                style={{
                  width: 16,
                  height: 16,
                  background: `color-mix(in srgb, ${accent} 22%, transparent)`,
                  color: accent,
                  border: `1px solid color-mix(in srgb, ${accent} 50%, transparent)`,
                }}
              >
                <IconCheck size={10} />
              </span>
              <span
                className="text-[10.5px] leading-none"
                style={{ color: "var(--studio-text-secondary)" }}
              >
                {doneText}
              </span>
            </>
          ) : isSaving ? (
            <>
              <span
                className="inline-flex items-center justify-center"
                style={{ color: accent }}
              >
                <IconLoader size={12} />
              </span>
              <span
                className="text-[10.5px] leading-none"
                style={{ color: "var(--studio-text-tertiary)" }}
              >
                {busyLabel}
              </span>
            </>
          ) : (
            <span
              className="text-[10px] leading-none"
              style={{
                color: "var(--studio-text-tertiary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {isHighlighting ? readyLabel : pickLabel}
            </span>
          )}
        </div>
      </div>
    </MiniNodeShell>
  );
}

export default memo(MiniOutputNodeComponent);
