"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scramble from "./motion/Scramble";

gsap.registerPlugin(ScrollTrigger);

type ParallaxDividerProps = {
  /** Basename under /public/video, without extension. */
  video: string;
  poster: string;
  eyebrow: string;
  /** Plain lead-in, then the emphasised tail. */
  lead: string;
  tail: string;
  label: string;
  /** Shorter band for secondary placements. */
  size?: "lg" | "sm";
};

/**
 * Full-bleed video band that drifts against the scroll.
 *
 * The template does this with ukiyo.js; this is a single ScrollTrigger tween
 * instead, to avoid adding another animation library for one effect. The media
 * is over-scaled beyond the frame so translating it never uncovers an edge —
 * that over-scale is what makes parallax read as depth rather than a sliding gap.
 */
export default function ParallaxDivider({
  video,
  poster,
  eyebrow,
  lead,
  tail,
  label,
  size = "lg",
}: ParallaxDividerProps) {
  const rootRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const media = mediaRef.current;
    if (!root || !media) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        media,
        { yPercent: -14 },
        {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Only decode while the band is near the viewport — a full-bleed loop
    // playing off-screen costs battery for nothing.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { rootMargin: "200px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label={label}
      className={`relative overflow-hidden ${
        size === "lg"
          ? "h-[58vh] min-h-[22rem] md:h-[72vh]"
          : "h-[42vh] min-h-[18rem] md:h-[50vh]"
      }`}
    >
      <div ref={mediaRef} className="absolute inset-x-0 -inset-y-[16%]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
        >
          <source src={`/video/${video}.webm`} type="video/webm" />
          <source src={`/video/${video}.mp4`} type="video/mp4" />
        </video>
      </div>

      {/* Tint + vignette so overlaid type stays legible over any frame. */}
      <div className="pointer-events-none absolute inset-0 bg-coal/55" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(7,7,10,0.9) 100%)",
        }}
      />

      <div className="relative flex h-full items-center justify-center px-6 text-center">
        <div>
          <Scramble as="p" className="type-eyebrow mb-5 block text-halo">
            {eyebrow}
          </Scramble>
          <p className="type-h2 text-display mx-auto max-w-4xl text-lume">
            {lead} <span className="shine-plasma italic">{tail}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
