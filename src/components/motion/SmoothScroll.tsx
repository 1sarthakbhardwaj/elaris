"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The live Lenis instance, or null when smooth scroll is off (reduced motion).
 * Module-level rather than context so non-descendant UI — the footer's back to
 * top control — can drive the same scroller instead of fighting it.
 */
let lenisInstance: Lenis | null = null;

export function scrollToTop() {
  if (lenisInstance) lenisInstance.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Drives page scroll through Lenis and hands the frame loop to GSAP's ticker,
 * so ScrollTrigger reads positions from the same clock that moves the page.
 * Running two independent RAF loops desyncs pinned/scrubbed animations.
 *
 * Skipped entirely under `prefers-reduced-motion`, which leaves native scroll
 * in place — hijacked scrolling is the part of this that causes motion sickness.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Touch devices already have momentum scrolling; overriding it feels worse.
      syncTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // In-page anchors must go through Lenis, or the page jumps while Lenis
    // keeps its own stale scroll position and then snaps back.
    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href*="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
      window.history.pushState(null, "", url.hash);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
