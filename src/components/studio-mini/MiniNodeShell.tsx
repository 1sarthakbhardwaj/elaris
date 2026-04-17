"use client";

import type { CSSProperties, ReactNode } from "react";
import { Handle, Position } from "@xyflow/react";
import GeneratingBorderTrace from "./GeneratingBorderTrace";
import { IconPlus } from "./icons";

export interface MiniNodeShellProps {
  /** Accent color used for the top-left indicator square and header tint. */
  accent?: string;
  /** Optional filename-style label above the card; group-hover reveal. */
  filename?: { icon: ReactNode; text: string };
  /** Optional hover-pill toolbar content rendered above the card (nodrag inside). */
  toolbar?: ReactNode;
  /** When true, renders the generating border trace overlay at the given progress. */
  generating?: boolean;
  progress?: number;
  /** Applies the fade-out animation when true (used at loop boundaries). */
  fading?: boolean;
  /** Applies a pop-in animation when true (default true). */
  popIn?: boolean;
  /** Controls which decorative plus-connectors render around the card. */
  showConnectors?: { left?: boolean; right?: boolean };
  /** Forces a directional decorative "+" connector visible + pulsing.
   *  Overrides hover-reveal for the chosen side. Used to script interactions
   *  where the cursor is about to click that + to attach a follow-up node. */
  plusPulse?: "bottom" | "right";
  /** Controls which React Flow handles exist (for edge connections). */
  showHandles?: { target?: boolean; source?: boolean };
  /** Inline style overrides. */
  style?: CSSProperties;
  /** Outer className. */
  className?: string;
  /** Min-width for the card (default 200). */
  minWidth?: number;
  /** Card body. */
  children: ReactNode;
}

export default function MiniNodeShell({
  accent,
  filename,
  toolbar,
  generating = false,
  progress = 50,
  fading = false,
  popIn = true,
  showConnectors = { left: true, right: true },
  plusPulse,
  showHandles = { target: true, source: true },
  style,
  className,
  minWidth = 200,
  children,
}: MiniNodeShellProps) {
  const rootStyle: CSSProperties = {
    background: "var(--studio-node-bg)",
    border: "1px solid var(--studio-node-border)",
    boxShadow: "var(--studio-node-shadow)",
    minWidth,
    ...style,
  };

  return (
    <div
      className={`group relative ${popIn ? "sm-pop" : ""} ${fading ? "sm-fade-out" : ""} ${className ?? ""}`}
      style={rootStyle}
    >
      {/* Rounded card surface */}
      <div
        className="relative flex flex-col overflow-hidden rounded-2xl"
        style={{ borderRadius: 16 }}
      >
        {children}
        {generating && <GeneratingBorderTrace progress={progress} />}
      </div>

      {/* Filename label — above-top-left, reveals on hover */}
      {filename && (
        <div
          className="pointer-events-none absolute left-0 bottom-full mb-2 z-30 flex items-center gap-1.5 opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0"
          style={{ maxWidth: "min(100%, 240px)" }}
        >
          <span style={{ color: "var(--studio-text-tertiary)" }}>{filename.icon}</span>
          <span
            className="truncate text-[10px] font-medium leading-none tracking-tight"
            style={{
              color: "var(--studio-text-secondary)",
              textShadow: "0 1px 2px rgba(0,0,0,0.55)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {filename.text}
          </span>
        </div>
      )}

      {/* Accent indicator dot — top-left of card, always visible, subtle */}
      {accent && (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-px left-3 z-20 h-0.5 w-8 rounded-full"
          style={{ background: accent, opacity: 0.55 }}
        />
      )}

      {/* Hover pill toolbar — above-center, reveals on hover */}
      {toolbar && (
        <div
          className="pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-30 flex opacity-0 translate-y-1 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0"
        >
          <div
            className="nodrag inline-flex items-center gap-0.5 rounded-full px-1.5 py-1 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.85)]"
            style={{
              background: "rgba(0,0,0,0.72)",
              backdropFilter: "blur(20px) saturate(1.8)",
              WebkitBackdropFilter: "blur(20px) saturate(1.8)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {toolbar}
          </div>
        </div>
      )}

      {/* Invisible React Flow handles on card edges (edges attach here) */}
      {showHandles.target !== false && (
        <Handle type="target" position={Position.Left} style={handleStyle} />
      )}
      {showHandles.source !== false && (
        <Handle type="source" position={Position.Right} style={handleStyle} />
      )}

      {/* Decorative plus-connectors — hidden until hover */}
      {showConnectors.left !== false && (
        <div className="pointer-events-none absolute -left-14 top-1/2 -translate-y-1/2 z-10 flex items-center flex-row-reverse opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span
            className="block w-4 h-px"
            style={{ background: "var(--studio-node-border)" }}
          />
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-transform hover:scale-110 active:scale-90"
            style={{
              background: "var(--studio-node-bg)",
              borderColor: "var(--studio-node-border)",
              color: "var(--studio-text-secondary)",
            }}
          >
            <IconPlus size={14} />
          </span>
        </div>
      )}
      {showConnectors.right !== false && (
        <div
          className={`pointer-events-none absolute -right-14 top-1/2 -translate-y-1/2 z-10 flex items-center transition-opacity duration-200 ${
            plusPulse === "right"
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <span
            className="block w-4 h-px"
            style={{ background: "var(--studio-node-border)" }}
          />
          <span
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-transform hover:scale-110 active:scale-90 ${
              plusPulse === "right" ? "sm-plus-pulse" : ""
            }`}
            style={{
              background: "var(--studio-node-bg)",
              borderColor: "var(--studio-node-border)",
              color: "var(--studio-text-secondary)",
            }}
          >
            <IconPlus size={14} />
          </span>
        </div>
      )}

      {/* Bottom decorative + — renders only when requested via plusPulse. */}
      {plusPulse === "bottom" && (
        <div className="pointer-events-none absolute -bottom-14 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-100">
          <span
            className="block w-px h-4"
            style={{ background: "var(--studio-node-border)" }}
          />
          <span
            className="sm-plus-pulse w-9 h-9 rounded-full flex items-center justify-center border"
            style={{
              background: "var(--studio-node-bg)",
              borderColor: "var(--studio-node-border)",
              color: "var(--studio-text-secondary)",
            }}
          >
            <IconPlus size={14} />
          </span>
        </div>
      )}
    </div>
  );
}

const handleStyle: CSSProperties = {
  width: 8,
  height: 8,
  minWidth: 8,
  minHeight: 8,
  background: "transparent",
  border: 0,
  opacity: 0,
};

/** Pill toolbar button — shared by all mini nodes. */
export function PillButton({
  children,
  title,
  onClick,
  highlight,
}: {
  children: ReactNode;
  title: string;
  onClick?: (e: React.MouseEvent) => void;
  highlight?: boolean;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      className={`nodrag p-1.5 rounded-md transition-colors ${highlight ? "sm-pulse-ring" : ""}`}
      style={{
        color: highlight ? "rgba(168,205,239,0.95)" : "var(--studio-text-secondary)",
        background: highlight ? "rgba(168,205,239,0.1)" : "transparent",
      }}
    >
      {children}
    </button>
  );
}

/** Thin vertical divider between toolbar groups. */
export function PillDivider() {
  return (
    <span
      className="w-px h-3.5 mx-0.5"
      style={{ background: "rgba(255,255,255,0.12)" }}
      aria-hidden
    />
  );
}

/** Small header row — accent-tinted tag + label + optional right slot. */
export function MiniNodeHeader({
  accent,
  icon,
  label,
  chips,
  right,
}: {
  accent: string;
  icon?: ReactNode;
  label: string;
  chips?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2"
      style={{ borderBottom: "1px solid var(--studio-node-border)" }}
    >
      {icon && (
        <span style={{ color: accent }} className="flex-shrink-0">
          {icon}
        </span>
      )}
      <span
        className="text-[11px] font-medium leading-none tracking-tight"
        style={{ color: "var(--studio-text-primary)" }}
      >
        {label}
      </span>
      {chips && <div className="flex items-center gap-1 flex-wrap min-w-0">{chips}</div>}
      {right && <div className="ml-auto flex items-center">{right}</div>}
    </div>
  );
}

/** Small colored chip used in headers ("nano-banana-2 · 1:1", "Rachel · en", etc.). */
export function MiniChip({
  children,
  accent,
  tone = "soft",
}: {
  children: ReactNode;
  accent?: string;
  tone?: "soft" | "outline" | "solid";
}) {
  const style: CSSProperties =
    tone === "soft"
      ? {
          background: accent ? `color-mix(in srgb, ${accent} 12%, transparent)` : "rgba(255,255,255,0.05)",
          color: accent ?? "var(--studio-text-secondary)",
          border: "1px solid transparent",
        }
      : tone === "outline"
        ? {
            background: "transparent",
            color: accent ?? "var(--studio-text-tertiary)",
            border: `1px solid ${accent ? `color-mix(in srgb, ${accent} 28%, transparent)` : "var(--studio-node-border)"}`,
          }
        : {
            background: accent ?? "var(--studio-prompt-accent)",
            color: "#0a0a0a",
            border: "1px solid transparent",
          };

  return (
    <span
      className="text-[9px] leading-none px-1.5 py-[3px] rounded-[5px] tracking-tight"
      style={{
        ...style,
        fontFamily: "var(--font-mono)",
      }}
    >
      {children}
    </span>
  );
}
