"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The template's signature transition: once a section's bottom reaches the
 * viewport bottom it pins, then dims, lifts and shrinks while the next section
 * slides over the top of it. Reads as depth rather than a flat scroll.
 *
 * `pinSpacing: false` is what lets the next section overlap instead of being
 * pushed down — which is also why the wrapper paints an opaque background:
 * without it the two sections would be visible through each other.
 *
 * Desktop only. Below 1200px there is not enough viewport height for the
 * effect to land, and pinning on touch fights native momentum scrolling.
 */
export default function SectionRecede({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const inner = innerRef.current;
    if (!section || !inner) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1200px) and (prefers-reduced-motion: no-preference)",
      () => {
        const st = ScrollTrigger.create({
          trigger: section,
          pin: section,
          start: "bottom bottom",
          end: "+=100%",
          scrub: true,
          pinSpacing: false,
          animation: gsap.to(inner, {
            autoAlpha: 0.25,
            y: "-38vh",
            scale: 0.94,
            ease: "none",
          }),
        });
        return () => st.kill();
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative z-10 bg-coal ${className ?? ""}`}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
