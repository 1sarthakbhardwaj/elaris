"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds to hold before the element starts moving. */
  delay?: number;
  /** Travel distance in px. */
  y?: number;
  /**
   * Animate direct children in sequence instead of the wrapper itself. Use for
   * card grids and lists; the wrapper stays put so grid layout is unaffected.
   */
  stagger?: number;
};

const START = "top 85%";

/**
 * Scroll-triggered entrance. Everything runs inside a `gsap.context` so the
 * tweens and their ScrollTriggers are reverted together on unmount — without
 * it, navigating away leaves orphaned triggers that fight the next page.
 *
 * Under `prefers-reduced-motion` the content is made visible immediately
 * rather than left at opacity 0, which is how a CSS-only guard would fail.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets: Element[] = stagger ? Array.from(el.children) : [el];
    if (targets.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: el, start: START, once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay, y, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
