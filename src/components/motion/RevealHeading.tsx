"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type RevealHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

/**
 * Headline that rises line by line from behind a mask.
 *
 * Splits into lines *and* words because masking needs a line-level wrapper to
 * clip against, while the stagger reads better on words. The split is reverted
 * on cleanup so the DOM returns to the original single text node — leaving the
 * generated spans in place would break re-splitting on resize and would hand
 * screen readers a pile of fragments.
 */
export default function RevealHeading({
  children,
  className,
  as: Tag = "h2",
}: RevealHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(el, {
        type: "lines,words",
        linesClass: "reveal-line",
      });

      gsap.from(split.words, {
        yPercent: 115,
        duration: 1,
        ease: "power4.out",
        stagger: 0.035,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });

      return () => split.revert();
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
