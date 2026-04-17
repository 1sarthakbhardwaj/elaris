"use client";

import { memo } from "react";
import type { NodeProps } from "@xyflow/react";
import MiniNodeShell, {
  MiniNodeHeader,
  MiniChip,
  PillButton,
  PillDivider,
} from "./MiniNodeShell";
import { IconCheck, IconDownload, IconMessage, IconWand } from "./icons";

type ChatPhase = "spawn" | "typing" | "approved" | "fading";

export interface MiniChatNodeData {
  phase?: ChatPhase;
  filename?: string;
  /** How many of the `messages` are visible (0..messages.length). */
  messagesShown?: number;
  /** Ordered list of team messages to tick in. */
  messages?: Array<{ who: string; text: string; tone?: "neutral" | "approve" }>;
  /** When true, the "Approved by team" stamp pops in. */
  approved?: boolean;
  fading?: boolean;
}

const DEFAULT_MESSAGES: Required<MiniChatNodeData>["messages"] = [
  { who: "Maya", text: "loving the amber — warmer feels on brand" },
  { who: "Jordan", text: "approved from my side", tone: "approve" },
  { who: "Priya", text: "ship it", tone: "approve" },
];

// Deterministic hue per initial so avatars feel distinct but coherent.
const AVATAR_HUES: Record<string, number> = {
  M: 280, // violet
  J: 210, // cool blue
  P: 330, // magenta
  S: 160, // teal
  D: 35, // amber
};

function hueFor(name: string): number {
  const key = (name[0] ?? "?").toUpperCase();
  return AVATAR_HUES[key] ?? 220;
}

function MiniChatNodeComponent({ data }: NodeProps) {
  const d = data as unknown as MiniChatNodeData;
  const messages = d.messages ?? DEFAULT_MESSAGES;
  const shown = Math.max(0, Math.min(messages.length, d.messagesShown ?? 0));
  const approved = d.approved === true;

  const accent = "var(--studio-prompt-accent)";
  const activeCount = approved ? messages.length : shown;

  return (
    <MiniNodeShell
      accent={accent}
      fading={d.fading}
      filename={
        d.filename
          ? { icon: <IconMessage size={10} />, text: d.filename }
          : undefined
      }
      toolbar={
        <>
          <PillButton title="Reply">
            <IconMessage size={13} />
          </PillButton>
          <PillButton title="Approve">
            <IconCheck size={13} />
          </PillButton>
          <PillDivider />
          <PillButton title="Share">
            <IconDownload size={13} />
          </PillButton>
          <PillButton title="Resolve">
            <IconWand size={13} />
          </PillButton>
        </>
      }
      minWidth={240}
    >
      <MiniNodeHeader
        accent={accent}
        icon={
          <span style={{ color: accent }}>
            <IconMessage size={12} />
          </span>
        }
        label="Team chat"
        chips={
          <MiniChip accent={accent} tone="soft">
            {activeCount}/{messages.length} replies
          </MiniChip>
        }
      />

      {/* Messages */}
      <div className="flex flex-col gap-1.5 px-3 py-2.5">
        {messages.map((m, i) => {
          const visible = i < shown || approved;
          if (!visible) {
            return (
              <div
                key={`ghost-${i}`}
                className="flex items-start gap-2 opacity-0"
                style={{ minHeight: 22 }}
                aria-hidden
              />
            );
          }
          const hue = hueFor(m.who);
          const initial = m.who[0]?.toUpperCase() ?? "?";
          const isApprove = m.tone === "approve";
          return (
            <div
              key={`msg-${i}-${m.who}`}
              className="sm-chip-in flex items-start gap-2"
              style={{
                animationDelay: `${i * 60}ms`,
              }}
            >
              <span
                className="flex-shrink-0 inline-flex items-center justify-center rounded-full text-[8.5px] font-semibold leading-none"
                style={{
                  width: 16,
                  height: 16,
                  background: `hsl(${hue} 70% 58% / 0.22)`,
                  color: `hsl(${hue} 85% 78%)`,
                  border: `1px solid hsl(${hue} 70% 58% / 0.45)`,
                }}
              >
                {initial}
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span
                    className="text-[9.5px] font-medium leading-none tracking-tight"
                    style={{ color: "var(--studio-text-primary)" }}
                  >
                    {m.who}
                  </span>
                  <span
                    className="text-[8.5px] leading-none"
                    style={{
                      color: "var(--studio-text-tertiary)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    now
                  </span>
                  {isApprove && (
                    <span
                      className="inline-flex items-center justify-center rounded-full"
                      style={{
                        width: 11,
                        height: 11,
                        background: "rgba(34,197,94,0.22)",
                        color: "#22c55e",
                        border: "1px solid rgba(34,197,94,0.5)",
                      }}
                    >
                      <IconCheck size={7} />
                    </span>
                  )}
                </div>
                <span
                  className="text-[10.5px] leading-snug truncate"
                  style={{ color: "var(--studio-text-secondary)" }}
                >
                  {m.text}
                </span>
              </div>
            </div>
          );
        })}

        {/* Typing indicator, before all messages have ticked and not yet approved */}
        {!approved && shown < messages.length && (
          <div
            className="flex items-center gap-1 pl-6"
            style={{ minHeight: 10 }}
          >
            <span
              className="block rounded-full sm-wave-bar"
              style={{
                width: 3,
                height: 3,
                background: "var(--studio-text-tertiary)",
                animationDelay: "0ms",
              }}
            />
            <span
              className="block rounded-full sm-wave-bar"
              style={{
                width: 3,
                height: 3,
                background: "var(--studio-text-tertiary)",
                animationDelay: "120ms",
              }}
            />
            <span
              className="block rounded-full sm-wave-bar"
              style={{
                width: 3,
                height: 3,
                background: "var(--studio-text-tertiary)",
                animationDelay: "240ms",
              }}
            />
          </div>
        )}
      </div>

      {/* Approval stamp */}
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ borderTop: "1px solid var(--studio-node-border)" }}
      >
        <span
          className="text-[9px] uppercase tracking-[0.14em]"
          style={{
            color: "var(--studio-text-tertiary)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {approved ? "Approved" : "In review"}
        </span>
        {approved ? (
          <span
            className="sm-check-pop inline-flex items-center gap-1 rounded-md px-1.5 py-[3px] text-[9.5px] leading-none font-medium"
            style={{
              background: "rgba(34,197,94,0.14)",
              color: "#22c55e",
              border: "1px solid rgba(34,197,94,0.45)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <IconCheck size={9} />
            <span>Approved by team</span>
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-1 rounded-md px-1.5 py-[3px] text-[9.5px] leading-none"
            style={{
              background: "rgba(255,255,255,0.03)",
              color: "var(--studio-text-tertiary)",
              border: "1px solid var(--studio-node-border)",
              fontFamily: "var(--font-mono)",
            }}
          >
            2 online
          </span>
        )}
      </div>
    </MiniNodeShell>
  );
}

export default memo(MiniChatNodeComponent);
