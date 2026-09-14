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
const LOOP_SECONDS = 52;

function Row({
  items,
  direction,
}: {
  items: Creative[];
  direction: "left" | "right";
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const row = rowRef.current;
    const track = trackRef.current;
    if (!row || !track) return;

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

      let hovering = false;

      const onEnter = () => {
        hovering = true;
        gsap.to(drift, { timeScale: 0, duration: 0.5, overwrite: true });
      };
      const onLeave = () => {
        hovering = false;
        gsap.to(drift, { timeScale: 1, duration: 0.9, overwrite: true });
      };

      row.addEventListener("mouseenter", onEnter);
      row.addEventListener("mouseleave", onLeave);

      // Scrolling speeds the band up and briefly drags it the way you scrolled;
      // it settles back to its idle drift when you stop.
      const st = ScrollTrigger.create({
        trigger: row,
        start: "top bottom",
        end: "bottom top",
        onUpdate(self) {
          if (hovering) return;
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
        row.removeEventListener("mouseenter", onEnter);
        row.removeEventListener("mouseleave", onLeave);
        st.kill();
        drift.kill();
      };
    }, row);

    return () => ctx.revert();
  }, [direction]);

  const doubled = [...items, ...items];

  return (
    <div ref={rowRef} className="overflow-hidden">
      <div ref={trackRef} className="flex w-max items-stretch gap-3 md:gap-4">
        {doubled.map((item, i) => (
          <Card key={`${item.src}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function Card({ item }: { item: Creative }) {
  return (
    <figure
      className="group relative h-[16.5rem] shrink-0 md:h-[21rem]"
      style={{ aspectRatio: `${item.width} / ${item.height}` }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/[0.08] bg-ink shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]">
        <Image
          src={item.src}
          alt=""
          width={item.width}
          height={item.height}
          sizes="(max-width: 767px) 220px, 340px"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-coal/75 to-transparent" />
        {item.badge && (
          <span className="type-caption absolute right-2.5 top-2.5 rounded-sm border border-white/10 bg-coal/70 px-1.5 py-0.5 text-[9px] capitalize tracking-[0.14em] text-chrome/80 backdrop-blur-sm">
            {item.badge}
          </span>
        )}
        <figcaption className="type-caption absolute inset-x-0 bottom-0 px-3 pb-3 text-[10px] tracking-[0.16em] text-bone/90">
          {item.tag}
        </figcaption>
      </div>
    </figure>
  );
}

export default function CreativesMarquee() {
  return (
    <section
      id="products"
      aria-label="Creative output"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 18% 0%, rgba(109,166,217,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto mb-14 max-w-[1400px] px-6 md:mb-16 md:px-10">
        <div className="grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] md:gap-16">
          <div>
            <Scramble as="p" className="type-eyebrow mb-6 block text-halo">
              The output
            </Scramble>
            <RevealHeading className="type-h2 text-display max-w-3xl text-bone">
              Thousands of assets,{" "}
              <span className="italic shine-plasma">one brand memory.</span>
            </RevealHeading>
          </div>
          <p className="type-body max-w-sm text-chrome/70 md:pb-1">
            Live boards, catalogue packs, and concept work — produced on the
            same canvas, locked to the same brand.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-3 md:gap-4">
        <Row items={CREATIVES_ROW_A} direction="left" />
        <Row items={CREATIVES_ROW_B} direction="right" />
        <Row items={CREATIVES_ROW_C} direction="left" />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-coal to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-coal to-transparent md:w-28" />
      </div>

      <p className="type-caption relative mx-auto mt-12 max-w-[1400px] px-6 text-chrome/40 md:px-10">
        Client work shown with permission. Pieces marked concept are engine
        demonstrations, not affiliated with or endorsed by the brands shown.
      </p>
    </section>
  );
}
