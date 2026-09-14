"use client";

import { useEffect, useRef, useState } from "react";
import TextScramble from "@/components/animations/TextScramble";

type Beat = {
  label: string;
  time: number;
};

type DualVideoCompareProps = {
  leftSrc: string;
  rightSrc: string;
  leftPoster?: string;
  rightPoster?: string;
  leftCaption: string;
  rightCaption: string;
  beats: Beat[];
};

function formatTimecode(seconds: number) {
  const clamped = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  const mins = Math.floor(clamped / 60);
  const secs = clamped % 60;
  return `${String(mins).padStart(2, "0")}:${secs.toFixed(1).padStart(4, "0")}`;
}

export default function DualVideoCompare({
  leftSrc,
  rightSrc,
  leftPoster,
  rightPoster,
  leftCaption,
  rightCaption,
  beats,
}: DualVideoCompareProps) {
  const leftRef = useRef<HTMLVideoElement>(null);
  const rightRef = useRef<HTMLVideoElement>(null);
  const syncingRef = useRef(false);
  const [timecode, setTimecode] = useState("00:00.0");

  const both = (action: (video: HTMLVideoElement) => void) => {
    if (leftRef.current) action(leftRef.current);
    if (rightRef.current) action(rightRef.current);
  };

  const otherOf = (video: HTMLVideoElement) =>
    video === leftRef.current ? rightRef.current : leftRef.current;

  const withSyncLock = (fn: () => void) => {
    if (syncingRef.current) return;
    syncingRef.current = true;
    fn();
    window.setTimeout(() => {
      syncingRef.current = false;
    }, 0);
  };

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const current = leftRef.current?.currentTime ?? 0;
      setTimecode(formatTimecode(current));
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="mxd-article__block">
      <p className="t-caption t-muted">Shared timecode {timecode}</p>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12 col-md-6 mxd-grid-item">
            <video
              ref={leftRef}
              src={leftSrc}
              poster={leftPoster}
              playsInline
              controls
              style={{ width: "100%", height: "auto" }}
              onPlay={(event) => {
                const other = otherOf(event.currentTarget);
                withSyncLock(() => {
                  void other?.play();
                });
              }}
              onPause={(event) => {
                const other = otherOf(event.currentTarget);
                withSyncLock(() => {
                  other?.pause();
                });
              }}
              onSeeked={(event) => {
                const other = otherOf(event.currentTarget);
                withSyncLock(() => {
                  if (other) other.currentTime = event.currentTarget.currentTime;
                });
              }}
            />
            <p className="t-caption t-muted">{leftCaption}</p>
          </div>
          <div className="col-12 col-md-6 mxd-grid-item">
            <video
              ref={rightRef}
              src={rightSrc}
              poster={rightPoster}
              playsInline
              controls
              style={{ width: "100%", height: "auto" }}
              onPlay={(event) => {
                const other = otherOf(event.currentTarget);
                withSyncLock(() => {
                  void other?.play();
                });
              }}
              onPause={(event) => {
                const other = otherOf(event.currentTarget);
                withSyncLock(() => {
                  other?.pause();
                });
              }}
              onSeeked={(event) => {
                const other = otherOf(event.currentTarget);
                withSyncLock(() => {
                  if (other) other.currentTime = event.currentTarget.currentTime;
                });
              }}
            />
            <p className="t-caption t-muted">{rightCaption}</p>
          </div>
        </div>
      </div>
      <div className="mxd-section-title__controls">
        <button
          type="button"
          className="btn btn-line btn-line-default"
          onClick={() =>
            both((video) => {
              void video.play();
            })
          }
        >
          <TextScramble className="btn-caption mxd-scramble">
            Play both
          </TextScramble>
        </button>
        <button
          type="button"
          className="btn btn-line btn-line-default"
          onClick={() => both((video) => video.pause())}
        >
          <TextScramble className="btn-caption mxd-scramble">Pause</TextScramble>
        </button>
        <button
          type="button"
          className="btn btn-line btn-line-default"
          onClick={() =>
            both((video) => {
              video.currentTime = 0;
              video.pause();
            })
          }
        >
          <TextScramble className="btn-caption mxd-scramble">
            Restart
          </TextScramble>
        </button>
      </div>
      <ul>
        {beats.map((beat) => (
          <li key={beat.label}>
            <button
              type="button"
              className="btn btn-line btn-line-default"
              onClick={() =>
                both((video) => {
                  video.currentTime = beat.time;
                })
              }
            >
              <TextScramble className="btn-caption mxd-scramble">
                {beat.label}
              </TextScramble>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
