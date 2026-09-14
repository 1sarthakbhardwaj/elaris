"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CommonGravitySection, {
  CommonGravityContainer,
  CommonGravityObject,
} from "@/components/animations/CommonGravitySection";
import { HERO_CREATIVES } from "@/data/offerings";

/**
 * Decorative physics layer for the hero: finished creatives drop in, tumble
 * and settle at the bottom of the first screen, and stay draggable.
 *
 * Notes on how this sits inside the hero:
 * - `animateOnScroll={false}` because the hero is above the fold, so there is
 *   no scroll trigger to wait for — the objects should already be falling
 *   when the page paints.
 * - The wrapper is `pointer-events: none` so the hero's own links and scroll
 *   behaviour keep working; `.object` re-enables pointer events on the cards
 *   themselves (main.css), and their events still bubble to the Matter mouse
 *   listener on the container.
 * - The layer is hidden for `prefers-reduced-motion`, and the physics engine
 *   is never started in that case because the component returns null.
 */
export default function HeroGravityCreatives() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="hero-creatives-layer" aria-hidden="true">
      <CommonGravitySection animateOnScroll={false}>
        <div className="hero-creatives mxd-gravity-section">
          <CommonGravityContainer>
            <div className="object-container hero-creatives__objects">
              {HERO_CREATIVES.map((creative, index) => (
                <CommonGravityObject key={creative.slug} index={index}>
                  <div
                    className={`object object-image hero-creatives__object hero-creatives__object--${
                      index % 3
                    }`}
                  >
                    <Image
                      alt=""
                      src={creative.src}
                      width={creative.width}
                      height={creative.height}
                    />
                  </div>
                </CommonGravityObject>
              ))}
            </div>
          </CommonGravityContainer>
        </div>
      </CommonGravitySection>
    </div>
  );
}
