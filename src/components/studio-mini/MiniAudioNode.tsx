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
  IconAudioLines,
  IconDownload,
  IconMessage,
  IconPlay,
  IconSparkles,
  IconWand,
} from "./icons";

type AudioPhase = "spawn" | "typing" | "generating" | "done" | "fading";

export interface MiniAudioNodeData {
  phase?: AudioPhase;
  text?: string;
  typeUpTo?: number;
  voice?: string;
  model?: string;
  duration?: string;
  filename?: string;
  progress?: number;
  fading?: boolean;
}

function MiniAudioNodeComponent({ data }: NodeProps) {
  const d = data as unknown as MiniAudioNodeData;
  const phase = d.phase ?? "done";
  const text = d.text ?? "";
  const typingTarget = d.typeUpTo ?? text.length;
  const isTyping = phase === "typing";
  const isGenerating = phase === "generating";
  const isDone = phase === "done";

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
    }, 30);
    return () => clearTimeout(id);
  }, [isTyping, charIndex, typingTarget, text.length]);

  const displayText = isTyping ? text.slice(0, charIndex) : text;
  const accent = "var(--studio-audio-accent)";

  return (
    <MiniNodeShell
      accent={accent}
      fading={d.fading}
      generating={isGenerating}
      progress={d.progress}
      filename={
        d.filename
          ? { icon: <IconAudioLines size={10} />, text: d.filename }
          : undefined
      }
      toolbar={
        <>
          <PillButton title="Re-voice">
            <IconWand size={13} />
          </PillButton>
          <PillButton title="Remix">
            <IconSparkles size={13} />
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
          <span style={{ color: accent }}>
            <IconAudioLines size={12} />
          </span>
        }
        label="Audio"
        chips={
          <>
            {d.voice && (
              <MiniChip accent={accent} tone="soft">
                {d.voice}
              </MiniChip>
            )}
            {d.model && <MiniChip tone="outline">{d.model}</MiniChip>}
          </>
        }
      />

      {/* Text row */}
      <div className="px-3 pt-2">
        <p
          className="text-[10.5px] leading-snug"
          style={{ color: "var(--studio-text-secondary)", minHeight: 16 }}
        >
          {displayText || (
            <span style={{ color: "var(--studio-text-tertiary)" }}>
              Type a line to synthesize…
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

      {/* Waveform row + transport */}
      <div className="px-3 pb-2 pt-2 flex items-center gap-2">
        <button
          type="button"
          aria-label={isDone ? "Play" : "Preparing"}
          className="nodrag inline-flex items-center justify-center rounded-full shrink-0 transition-colors"
          style={{
            width: 22,
            height: 22,
            background: isDone
              ? `color-mix(in srgb, ${accent} 18%, transparent)`
              : "rgba(255,255,255,0.04)",
            color: isDone ? accent : "var(--studio-text-tertiary)",
            border: isDone
              ? `1px solid color-mix(in srgb, ${accent} 32%, transparent)`
              : "1px solid var(--studio-node-border)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <IconPlay size={10} />
        </button>
        <div className="flex items-end gap-[2px] h-5 flex-1 min-w-0 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => {
            // Deterministic heights per bar; scale depends on phase
            const baseHeight = 3 + ((i * 29) % 8) + Math.round(Math.sin(i * 0.9) * 3);
            const activeHeight = 8 + ((i * 41) % 10);
            const h = isDone ? activeHeight : baseHeight;
            const bounce = isGenerating;
            const color =
              i % 4 === 0
                ? `color-mix(in srgb, ${accent} 70%, transparent)`
                : `color-mix(in srgb, ${accent} 30%, transparent)`;
            return (
              <span
                key={i}
                className={bounce ? "sm-wave-bar" : ""}
                style={{
                  width: 2,
                  height: h,
                  background: color,
                  borderRadius: 1,
                  animationDelay: bounce ? `${(i * 50) % 500}ms` : undefined,
                  opacity: isGenerating || isDone ? 1 : 0.5,
                  transition: "height 180ms ease-out",
                }}
              />
            );
          })}
        </div>
        <span
          className="text-[9px] tracking-tight shrink-0"
          style={{
            color: "var(--studio-text-tertiary)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {d.duration ?? "0:03"}
        </span>
      </div>
    </MiniNodeShell>
  );
}

export default memo(MiniAudioNodeComponent);
