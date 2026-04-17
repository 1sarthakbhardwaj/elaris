"use client";

import { memo, useEffect, useRef, useState } from "react";
import type { NodeProps } from "@xyflow/react";
import MiniNodeShell, {
  MiniNodeHeader,
  MiniChip,
  PillButton,
  PillDivider,
} from "./MiniNodeShell";
import {
  IconLoader,
  IconMessage,
  IconSparkles,
  IconWand,
} from "./icons";

type PromptPhase = "spawn" | "typing" | "waiting" | "generating" | "done" | "fading";

export interface MiniPromptNodeData {
  phase?: PromptPhase;
  text?: string;
  /** When set, typewriter advances chars from 0 up to `typeUpTo`; omit for full text. */
  typeUpTo?: number;
  /** File-name label to show on hover above the card. */
  filename?: string;
  /** Model chip label — "nano-banana-2 · 1:1" etc. */
  model?: string;
  /** Border-trace progress (0-100) while generating. */
  progress?: number;
  /** When true, Generate button pulses to invite a click. */
  highlight?: boolean;
  /** Apply a fade-out animation (loop boundaries). */
  fading?: boolean;
}

function MiniPromptNodeComponent({ data }: NodeProps) {
  const d = data as unknown as MiniPromptNodeData;
  const phase = d.phase ?? "done";
  const text = d.text ?? "";
  const typingTarget = d.typeUpTo ?? text.length;
  const isTyping = phase === "typing";
  const isGenerating = phase === "generating";
  const isDone = phase === "done" || phase === "waiting";

  // Local typewriter state, advancing toward `typingTarget`.
  const [charIndex, setCharIndex] = useState(isTyping ? 0 : text.length);
  const prevTextRef = useRef(text);

  useEffect(() => {
    if (prevTextRef.current !== text) {
      prevTextRef.current = text;
      setCharIndex(isTyping ? 0 : text.length);
    }
  }, [text, isTyping]);

  useEffect(() => {
    if (!isTyping) {
      setCharIndex(text.length);
      return;
    }
    if (charIndex >= typingTarget) return;
    const id = setTimeout(() => {
      setCharIndex((n) => Math.min(typingTarget, n + 1));
    }, 28);
    return () => clearTimeout(id);
  }, [isTyping, charIndex, typingTarget, text.length]);

  const displayText = isTyping ? text.slice(0, charIndex) : text;
  const accent = "var(--studio-prompt-accent)";

  return (
    <MiniNodeShell
      accent={accent}
      fading={d.fading}
      generating={isGenerating}
      progress={d.progress}
      filename={
        d.filename
          ? { icon: <IconSparkles size={10} />, text: d.filename }
          : undefined
      }
      toolbar={
        <>
          <PillButton title="Enhance">
            <IconWand size={13} />
          </PillButton>
          <PillButton title="Remix">
            <IconSparkles size={13} />
          </PillButton>
          <PillDivider />
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
          <span
            className="block w-2 h-2 rounded-[3px]"
            style={{ background: accent }}
          />
        }
        label="Prompt"
        chips={
          d.model && (
            <MiniChip accent={accent} tone="soft">
              {d.model}
            </MiniChip>
          )
        }
        right={
          <span style={{ color: "var(--studio-text-tertiary)" }}>
            <IconSparkles size={11} />
          </span>
        }
      />

      {/* Prompt body — typewriter */}
      <div className="px-3 py-2.5">
        <p
          className="text-[11px] leading-snug"
          style={{ color: "var(--studio-text-primary)", minHeight: 18 }}
        >
          {displayText || (
            <span style={{ color: "var(--studio-text-tertiary)" }}>
              Describe what you want to generate…
            </span>
          )}
          {isTyping && (
            <span
              className="sm-caret ml-[1px] inline-block"
              style={{
                width: 1,
                height: "1em",
                background: accent,
                verticalAlign: "text-bottom",
              }}
            />
          )}
        </p>
      </div>

      {/* Footer row — Generate button + cost hint */}
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ borderTop: "1px solid var(--studio-node-border)" }}
      >
        <span
          className="text-[9px] uppercase tracking-[0.12em]"
          style={{
            color: "var(--studio-text-tertiary)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {isGenerating ? "Generating" : isDone ? "Ready" : "2 credits"}
        </span>
        <button
          type="button"
          className={`nodrag inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium leading-none transition-all ${
            d.highlight ? "sm-pulse-ring" : ""
          }`}
          style={{
            background: `color-mix(in srgb, ${accent} 18%, transparent)`,
            color: accent,
            border: `1px solid color-mix(in srgb, ${accent} 32%, transparent)`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {isGenerating ? (
            <>
              <IconLoader size={11} />
              <span>Generating</span>
            </>
          ) : (
            <>
              <IconSparkles size={11} />
              <span>Generate</span>
            </>
          )}
        </button>
      </div>
    </MiniNodeShell>
  );
}

export default memo(MiniPromptNodeComponent);
