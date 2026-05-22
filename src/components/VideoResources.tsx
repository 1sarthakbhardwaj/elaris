"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReveal } from "./useReveal";

type Video = {
  id: string;
  title: string;
  channel: string;
  start?: number;
  badge?: string;
};

const VIDEOS: Video[] = [
  {
    id: "PXcPa8zT5_s",
    title: "ElarisLabs — newest drop",
    channel: "ElarisLabs",
    badge: "New",
  },
  {
    id: "rMB7b3Qn7V4",
    title: "Inside ElarisLabs — the multi-agent creative OS",
    channel: "ElarisLabs",
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

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function CarouselCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  const watchUrl = `https://www.youtube.com/watch?v=${video.id}${
    video.start ? `&t=${video.start}s` : ""
  }`;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1${
    video.start ? `&start=${video.start}` : ""
  }`;

  const thumbMax = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;
  const thumbHq = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <article className="carousel-card shrink-0 w-[min(88vw,300px)] snap-start">
      <div className="glass rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.14] transition-colors">
        <div className="relative aspect-video bg-ink overflow-hidden">
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
              className="group/thumb absolute inset-0 block h-full w-full"
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
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-[1.03]"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-coal/80 via-coal/20 to-transparent"
              />
              <span
                aria-hidden
                className="absolute inset-0 grid place-items-center"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full glass-plasma border border-white/10 transition-transform duration-300 group-hover/thumb:scale-105">
                  <PlayIcon className="ml-0.5 text-bone" />
                </span>
              </span>
              {video.badge && (
                <span className="absolute left-2.5 top-2.5 px-2 py-0.5 rounded-full glass-plasma text-[9px] text-mono uppercase tracking-[0.18em] text-bone">
                  {video.badge}
                </span>
              )}
            </button>
          )}
        </div>

        <div className="px-3.5 py-3 border-t border-white/[0.06]">
          <p className="text-[10px] text-mono text-halo/80 uppercase tracking-[0.18em] mb-1">
            {video.channel}
          </p>
          <h3 className="text-sm text-bone leading-snug line-clamp-2 min-h-[2.5rem]">
            {video.title}
          </h3>
          <div className="flex items-center gap-3 mt-2.5 pt-2.5 border-t border-white/[0.05]">
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="text-[11px] text-chrome hover:text-bone transition-colors inline-flex items-center gap-1"
            >
              <PlayIcon />
              {playing ? "Playing" : "Play"}
            </button>
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-chrome hover:text-halo transition-colors"
            >
              YouTube ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function VideoResources() {
  const [headRef, headShown] = useReveal<HTMLDivElement>(0.2);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth - 2;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < maxScroll);

    const cards = el.querySelectorAll<HTMLElement>(".carousel-card");
    if (!cards.length) return;
    const center = scrollLeft + clientWidth / 2;
    let nearest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < minDist) {
        minDist = dist;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".carousel-card");
    const gap = 16;
    const step = (card?.offsetWidth ?? 300) + gap;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>(".carousel-card");
    const card = cards[index];
    if (!card) return;
    const target = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  };

  return (
    <section
      id="resources"
      className="scroll-mt-24 relative py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 10%, rgba(109,166,217,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto">
        <div
          ref={headRef}
          className={`mb-10 md:mb-12 ${headShown ? "anim-fade-up" : "opacity-0"}`}
        >
          <p className="text-xs text-mono text-halo uppercase tracking-[0.25em] mb-4">
            ◉ Watch &amp; learn
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-display text-bone leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              See ElarisLabs <span className="italic shine-plasma">in motion.</span>
            </h2>
            <p className="text-chrome text-sm text-mono max-w-sm sm:text-right">
              Walkthroughs and demos from the team. Swipe or use the arrows.
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="carousel-track flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {VIDEOS.map((v) => (
              <CarouselCard key={v.id} video={v} />
            ))}
          </div>

          <div className="flex items-center justify-between mt-6 gap-4">
            <div className="flex items-center gap-1.5">
              {VIDEOS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to video ${i + 1}`}
                  onClick={() => scrollToIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 bg-halo"
                      : "w-1.5 bg-white/20 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous video"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                className="h-9 w-9 rounded-full glass border border-white/[0.08] flex items-center justify-center text-chrome hover:text-bone hover:border-white/[0.16] disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next video"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                className="h-9 w-9 rounded-full glass border border-white/[0.08] flex items-center justify-center text-chrome hover:text-bone hover:border-white/[0.16] disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
