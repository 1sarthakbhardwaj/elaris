"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SPEED_MS = 40;
/** Letters resolved per tick. Below 1 so the reveal reads as a wipe. */
const STEP = 0.25;

type ScrambleProps = {
  children: string;
  className?: string;
  as?: "span" | "p" | "div";
};

/**
 * Cycles random glyphs then resolves left to right on hover. Ported from the
 * template's `mxd-scramble`, which uses it on every eyebrow and button label.
 *
 * Renders the real string on the server and whenever idle, so the text is
 * always the actual content for crawlers and screen readers — only the
 * transient hover frames are scrambled.
 */
export default function Scramble({
  children,
  className,
  as: Tag = "span",
}: ScrambleProps) {
  const text = children.trim();
  const [frame, setFrame] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (timer.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let resolved = 0;
    timer.current = setInterval(() => {
      setFrame(
        text
          .split("")
          .map((char, i) =>
            i < resolved || char === " "
              ? char
              : ALPHABET[Math.floor(Math.random() * ALPHABET.length)],
          )
          .join(""),
      );
      if (resolved >= text.length) {
        stop();
        setFrame(null);
      }
      resolved += STEP;
    }, SPEED_MS);
  }, [text, stop]);

  const reset = useCallback(() => {
    stop();
    setFrame(null);
  }, [stop]);

  useEffect(() => stop, [stop]);

  return (
    <Tag className={className} onPointerEnter={start} onPointerLeave={reset}>
      {frame ?? text}
    </Tag>
  );
}
