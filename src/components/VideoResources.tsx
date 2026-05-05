"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

type Video = {
  id: string;
  title: string;
  channel: string;
  start?: number;
  featured?: boolean;
};

const VIDEOS: Video[] = [
  {
    id: "rMB7b3Qn7V4",
    title: "Inside ElarisLabs — the multi-agent creative OS",
    channel: "ElarisLabs",
    featured: true,
  },
  {
    id: "F-CnNnzzOQM",
    title: "AI Video Studio — brief to final cut",
    channel: "ElarisLabs",
  },
  {
    id: "m2AboVX5NnQ",
    title: "Product Staging — studio shots from a single image",
    channel: "ElarisLabs",
  },
  {
    id: "N_WtXGKC1g4",
    title: "Getting started with ElarisLabs nodes",
    channel: "ElarisLabs",
    start: 250,
  },
  {
    id: "JcE8jzcOQN4",
    title: "Product Staging — infinite environments",
    channel: "ElarisLabs",
  },
];

function PlayBadge() {
  return (
    <span
      aria-hidden
      className="absolute inset-0 grid place-items-center pointer-events-none"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full glass-plasma transition-transform duration-500 ease-[cubic-bezier(0.2,0.9,0.3,1)] group-hover:scale-110">
        <span className="absolute inset-0 rounded-full anim-pulse-plasma" />
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative ml-[3px] text-bone drop-shadow-[0_0_10px_rgba(168,205,239,0.65)]"
        >
          <path d="M8 5v14l11-7L8 5z" />
        </svg>
      </span>
    </span>
  );
}

function VideoCard({ video, index }: { video: Video; index: number }) {
  const [ref, shown] = useReveal<HTMLDivElement>(0.15);
  const [playing, setPlaying] = useState(false);

  const watchUrl = `https://www.youtube.com/watch?v=${video.id}${
    video.start ? `&t=${video.start}s` : ""
  }`;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1${
    video.start ? `&start=${video.start}` : ""
  }`;

  // YouTube returns a 120×90 placeholder (not a 404) when maxresdefault.jpg
  // doesn't exist for a video — so detect that on load and fall back.
  const thumbMax = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;
  const thumbHq = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div
      ref={ref}
      className={`node-card group glass rounded-2xl overflow-hidden hover-lift ${
        video.featured ? "md:col-span-2 lg:col-span-2" : ""
      } ${shown ? "anim-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div
        className={`relative bg-ink border-b border-white/[0.08] overflow-hidden ${
          video.featured ? "aspect-[16/8]" : "aspect-video"
        }`}
      >
        {playing ? (
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 block h-full w-full"
          >
            <img
              src={thumbMax}
              alt=""
              loading="lazy"
              decoding="async"
              onLoad={(e) => {
                const img = e.currentTarget;
                if (img.naturalWidth > 0 && img.naturalWidth <= 120 && !img.src.endsWith("hqdefault.jpg")) {
                  img.src = thumbHq;
                }
              }}
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.src.endsWith("hqdefault.jpg")) img.src = thumbHq;
              }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.9,0.3,1)] group-hover:scale-[1.06]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-coal/90 via-coal/30 to-coal/0"
            />
            <span
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(109,166,217,0.18) 0%, transparent 60%)",
              }}
            />
            <span
              aria-hidden
              className="absolute left-3 top-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass text-[10px] text-mono uppercase tracking-[0.2em] text-bone/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-plasma shadow-[0_0_8px_rgba(168,205,239,0.8)]" />
              YouTube
            </span>
            <PlayBadge />
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-halo/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </button>
        )}
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-[10px] text-mono text-halo uppercase tracking-[0.2em]">
            {video.channel}
          </span>
          <span className="text-[10px] text-mono text-chrome/60 uppercase tracking-[0.2em]">
            {String(index + 1).padStart(2, "0")} / {String(VIDEOS.length).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-display text-lg md:text-xl text-bone leading-snug reveal-bar inline-block group-hover:text-lume transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="text-xs text-chrome hover:text-bone transition-colors flex items-center gap-1.5"
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
            {playing ? "Playing" : "Watch here"}
          </button>
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-chrome hover:text-halo transition-colors flex items-center gap-1"
          >
            Open in YouTube
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function VideoResources() {
  const [headRef, headShown] = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      id="resources"
      className="scroll-mt-24 relative py-24 md:py-32 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 10%, rgba(109,166,217,0.10) 0%, transparent 55%), radial-gradient(ellipse at 90% 90%, rgba(201,176,135,0.06) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 canvas-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        <div
          ref={headRef}
          className={`flex items-end justify-between flex-wrap gap-4 mb-14 ${
            headShown ? "anim-fade-up" : "opacity-0"
          }`}
        >
          <div className="min-w-0">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.25em] mb-6">
              ◉ Watch &amp; learn
            </p>
            <h2
              className="text-display text-bone leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 5.2vw, 4.25rem)" }}
            >
              See ElarisLabs <span className="italic shine-plasma">in motion.</span>
            </h2>
          </div>
          <p className="text-chrome text-sm text-mono max-w-xs">
            Walkthroughs, demos, and behind-the-scenes from the team. Tap any tile to play it inline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VIDEOS.map((v, i) => (
            <VideoCard key={v.id} video={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
