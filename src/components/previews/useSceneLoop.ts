"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Drives a looping scene index from a list of per-scene durations.
 *
 * Contract
 * --------
 * - Plays from scene 0 forward, wrapping back to 0 after the last scene.
 * - Pauses when the root element is scrolled off-screen (IntersectionObserver
 *   at threshold 0.1) and resumes from the current scene when it returns.
 * - Freezes on `onMouseEnter` and resumes from the current scene on
 *   `onMouseLeave`, so users can study any frame without the story advancing.
 * - Cleans up all timers/observers on unmount.
 *
 * Usage
 * -----
 * const { sceneIndex, rootRef, hoverHandlers } = useSceneLoop([1800, 2600, ...]);
 * return <div ref={rootRef} {...hoverHandlers}>...</div>;
 */
export function useSceneLoop(durations: number[]) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const sceneRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isVisibleRef = useRef(true);
  const isHoveredRef = useRef(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const schedule = useCallback(() => {
    clear();
    if (!isVisibleRef.current || isHoveredRef.current) return;
    const dur = durations[sceneRef.current] ?? 1500;
    timerRef.current = setTimeout(() => {
      const next = (sceneRef.current + 1) % durations.length;
      sceneRef.current = next;
      setSceneIndex(next);
      schedule();
    }, dur);
  }, [durations, clear]);

  useEffect(() => {
    schedule();
    return clear;
  }, [schedule, clear]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const nowVisible = entry.isIntersecting;
        if (nowVisible === isVisibleRef.current) return;
        isVisibleRef.current = nowVisible;
        if (nowVisible) {
          schedule();
        } else {
          clear();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [schedule, clear]);

  const onMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
    clear();
  }, [clear]);

  const onMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    schedule();
  }, [schedule]);

  return {
    sceneIndex,
    rootRef,
    hoverHandlers: { onMouseEnter, onMouseLeave },
  };
}
