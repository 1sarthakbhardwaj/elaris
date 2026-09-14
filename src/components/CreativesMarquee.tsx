"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scramble from "./motion/Scramble";
import RevealHeading from "./motion/RevealHeading";
import {
  CREATIVES_ROW_A,
  CREATIVES_ROW_B,
  CREATIVES_ROW_C,
  type Creative,
} from "@/lib/creatives";

gsap.registerPlugin(ScrollTrigger);

/** Base travel time for one full loop, in seconds. Higher = slower drift. */
const LOOP_SECONDS = 46;

function Row({
  items,
  direction,
}: {
  items: Creative[];
  direction: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // The track renders its items twice, so travelling exactly -50% lands on
      // an identical frame and the loop is seamless.
      const from = direction === "left" ? 0 : -50;
      const to = direction === "left" ? -50 : 0;

      const drift = gsap.fromTo(
        track,
        { xPercent: from },
        {
          xPercent: to,
          duration: LOOP_SECONDS,
          ease: "none",
          repeat: -1,
        },
      );

      // Scrolling speeds the band up and briefly drags it the way you scrolled;
      // it settles back to its idle drift when you stop.
      const st = ScrollTrigger.create({
        trigger: track,
        start: "top bottom",
        end: "bottom top",
        onUpdate(self) {
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 900, 5);
          const sign = self.direction === 1 ? 1 : -1;
          gsap.to(drift, {
            timeScale: boost * sign,
            duration: 0.3,
            overwrite: true,
          });
          gsap.to(drift, {
            timeScale: 1,
            duration: 1.1,
            delay: 0.3,
            overwrite: false,
          });
        },
      });

      return () => {
        st.kill();
        drift.kill();
      };
    }, track);

    return () => ctx.revert();
  }, [direction]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex w-max gap-4 md:gap-6">
        {doubled.map((item, i) => (
          <figure
            key={`${item.src}-${i}`}
            className="group relative w-[13rem] shrink-0 md:w-[17rem]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/[0.08] bg-ink">
              <Image
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                sizes="(max-width: 767px) 13rem, 17rem"
                className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              {item.badge && (
                <span className="type-caption absolute right-2 top-2 rounded bg-coal/75 px-1.5 py-0.5 text-[9px] capitalize text-chrome/70 backdrop-blur-sm">
                  {item.badge}
                </span>
              )}
            </div>
            <figcaption className="type-caption mt-3 text-chrome/55">
              {item.tag}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function CreativesMarquee() {
  return (
    <section
      aria-label="Creative output"
      className="relative overflow-hidden border-t border-white/[0.06] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 0%, rgba(109,166,217,0.09) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto mb-14 max-w-[1400px] px-6 md:px-10">
        <Scramble as="p" className="type-eyebrow mb-6 block text-halo">
          The output
        </Scramble>
        <RevealHeading className="type-h2 text-display max-w-3xl text-bone">
          Thousands of assets,{" "}
          <span className="italic shine-plasma">one brand memory.</span>
        </RevealHeading>
      </div>

      <div className="relative flex flex-col gap-4 md:gap-6">
        <Row items={CREATIVES_ROW_A} direction="left" />
        <Row items={CREATIVES_ROW_B} direction="right" />
        <Row items={CREATIVES_ROW_C} direction="left" />

        {/* Fade the bands into the page edges instead of cutting them off. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-coal to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-coal to-transparent md:w-32" />
      </div>

      <p className="type-caption relative mx-auto mt-12 max-w-[1400px] px-6 text-chrome/40 md:px-10">
        Client work shown with permission. Pieces marked concept are engine
        demonstrations, not affiliated with or endorsed by the brands shown;
        pieces marked generated are raw model output.
      </p>
    </section>
  );
}
