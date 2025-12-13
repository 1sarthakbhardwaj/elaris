'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    const root = document.documentElement;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      // account for fixed navbar
      const offset = -96;
      lenis.scrollTo(el, { offset, duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) });
      history.replaceState(null, '', href);
    };

    document.addEventListener('click', handleAnchorClick);

    function raf(time: number) {
      lenis.raf(time);
      // Expose scroll position for CSS-driven parallax effects.
      root.style.setProperty('--lenis-scroll', `${lenis.scroll}px`);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
