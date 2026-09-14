"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icon";
import Scramble from "./motion/Scramble";
import { STUDIO_APP_URL } from "@/lib/site";
import { WORK } from "@/lib/work";

gsap.registerPlugin(ScrollTrigger);

/** Open from the centre band outwards — the template's image transition. */
const CLIPPED = "inset(50% 0% 50% 0%)";
const FULL = "inset(0% 0% 0% 0%)";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Cycles a slide's extra frames while it is the active one. Only the catalogue
 * and out-of-home slides supply frames; the rest hold on a single still.
 */
function useFrameCycle(active: number) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    setFrame(0);
    const frames = WORK[active]?.frames;
    if (!frames?.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => setFrame((f) => (f + 1) % (frames.length + 1)),
      420,
    );
    return () => clearInterval(id);
  }, [active]);

  return frame;
}

export default function WorkShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const mediaRefs = useRef<Array<HTMLDivElement | null>>([]);
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const frame = useFrameCycle(active);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const media = mediaRefs.current.filter(Boolean) as HTMLDivElement[];
    const texts = textRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || !stage || media.length < 2) return;

    const steps = media.length - 1;

    const ctx = gsap.context(() => {
      // Base state: first slide open, the rest pinched shut at the centre.
      media.forEach((el, i) =>
        gsap.set(el, { clipPath: i === 0 ? FULL : CLIPPED }),
      );
      texts.forEach((el, i) => gsap.set(el, { yPercent: i === 0 ? 0 : 100 }));
      gsap.set(progressRef.current, { transformOrigin: "left center", scaleX: 0 });

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduced) {
        // No pinning: fall back to a plain stack the user can scroll normally.
        media.forEach((el) => gsap.set(el, { clipPath: FULL, position: "relative" }));
        texts.forEach((el) => gsap.set(el, { yPercent: 0, position: "relative" }));
        return;
      }

      const timeline = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } });

      for (let i = 1; i < media.length; i += 1) {
        timeline.to(media[i], { clipPath: FULL, duration: 0.6 }, "+=0.15");
        timeline.to(texts[i - 1], { yPercent: -100, duration: 0.3 }, "-=0.5");
        timeline.to(texts[i], { yPercent: 0, duration: 0.3 }, "<");
      }

      // One viewport of scroll per transition, so each slide gets equal dwell.
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${steps * window.innerHeight}`,
        pin: stage,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 0.6,
        invalidateOnRefresh: true,
        animation: timeline,
        onUpdate(self) {
          gsap.to(progressRef.current, {
            scaleX: self.progress,
            duration: 0.12,
            ease: "none",
          });
          setActive(Math.min(steps, Math.round(self.progress * steps)));
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const current = WORK[active];
  const currentSrc =
    current?.frames && frame > 0
      ? current.frames[frame - 1]
      : current?.image;

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative border-t border-white/[0.06]"
    >
      <div
        ref={stageRef}
        className="relative flex min-h-[100svh] items-center overflow-hidden px-6 py-20 md:px-10"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 75% 15%, rgba(109,166,217,0.10) 0%, transparent 55%)",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* ——— Argument ——— */}
          <div className="min-w-0">
            <Scramble as="p" className="type-eyebrow mb-7 block text-halo">
              Selected work
            </Scramble>

            <p className="text-display text-2xl text-chrome/70 md:text-3xl">
              Your creative OS for
            </p>

            {/* Masked well the slide copy rolls through. */}
            <div className="relative mt-3 h-[13rem] overflow-hidden sm:h-[11rem]">
              {WORK.map((item, i) => (
                <div
                  key={item.slug}
                  ref={(el) => {
                    textRefs.current[i] = el;
                  }}
                  className="absolute inset-0"
                >
                  <h2 className="type-h2 text-display text-bone">
                    <span className="shine-plasma italic">{item.title}.</span>
                  </h2>
                  <p className="type-body mt-4 max-w-md text-chrome">
                    {item.caption}
                  </p>
                  <p className="type-caption mt-2 text-chrome/50">
                    {item.client}
                  </p>
                </div>
              ))}
            </div>

            {/* ——— Counter + progress ——— */}
            <div className="mt-8 flex items-center gap-5">
              <span className="text-display text-3xl leading-none text-bone">
                {pad(active + 1)}
              </span>
              <div className="relative h-px w-32 bg-steel/60">
                <div
                  ref={progressRef}
                  className="absolute inset-0 bg-gradient-to-r from-plasma to-halo"
                />
              </div>
              <span className="type-caption text-chrome/50">
                {pad(WORK.length)}
              </span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={STUDIO_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-5 py-2.5 text-sm text-bone transition-colors hover:border-halo/40 hover:text-halo"
              >
                <Scramble>Bring a live campaign</Scramble>
                <Icon
                  name="arrowUpRight"
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {current?.href && (
                <Link
                  href={current.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-halo transition-all hover:gap-2.5"
                >
                  Read the case study
                  <Icon name="arrowRight" size={14} />
                </Link>
              )}
            </div>
          </div>

          {/* ——— Stage ——— */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-ink">
            {WORK.map((item, i) => (
              <div
                key={item.slug}
                ref={(el) => {
                  mediaRefs.current[i] = el;
                }}
                /* Opaque panel, not a bare image: the clip-path wipe has to
                   cover the slide beneath it, and contained art leaves gaps. */
                className="absolute inset-0 flex items-center justify-center bg-ink p-6 md:p-10"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 50% 115%, rgba(109,166,217,0.18) 0%, transparent 62%)",
                }}
              >
                <Image
                  src={i === active ? (currentSrc ?? item.image) : item.image}
                  alt={`${item.title} produced on ElarisLabs for ${item.client}`}
                  width={item.width}
                  height={item.height}
                  priority={i === 0}
                  sizes="(max-width: 1023px) 88vw, 46vw"
                  className="max-h-full w-auto max-w-full rounded-lg object-contain shadow-[0_24px_70px_-24px_rgba(0,0,0,0.95)]"
                />
              </div>
            ))}

            <span className="type-caption absolute left-4 top-4 z-10 rounded border border-white/[0.1] bg-coal/70 px-2.5 py-1 text-[10px] text-halo backdrop-blur-md">
              {current?.format}
            </span>

            {current?.frames && (
              <span className="type-caption absolute bottom-4 right-4 z-10 rounded border border-white/[0.1] bg-coal/70 px-2.5 py-1 text-[10px] text-chrome/70 backdrop-blur-md">
                {pad(frame + 1)} / {pad(current.frames.length + 1)}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
