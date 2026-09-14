"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Per-character rise, used for the giant footer wordmark — the template's
 * `animChars`. Splitting to chars *and* lines gives each character its own
 * mask to clear, so the letters appear to push up out of the baseline.
 *
 * The split is reverted on cleanup so the DOM goes back to one text node;
 * leaving the generated spans would hand screen readers a pile of fragments.
 */
export default function CharsReveal({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(el, {
        type: "lines,chars",
        linesClass: "reveal-line",
      });

      gsap.from(split.chars, {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.025,
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });

      return () => split.revert();
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
