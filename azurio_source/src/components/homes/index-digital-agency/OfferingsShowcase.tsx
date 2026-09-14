"use client";

import Image from "next/image";
import PinnedSection from "@/components/animations/PinnedSection";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import { OFFERINGS } from "@/data/offerings";
import { STUDIO_APP_URL } from "@/lib/site";

/**
 * Replaces the old five-product list. The deck's argument is that the work is
 * the proof, so each card leads with a delivered creative and names the
 * discipline underneath — out of home, localisation, catalogue, social video,
 * long form film.
 */
export default function OfferingsShowcase() {
  return (
    <PinnedSection
      blurSection
      className="mxd-section padding-top-subtitle-mobile padding-bottom-default"
    >
      <PinnedSection.Inner>
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0 d-flex flex-column-reverse flex-xl-row">
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title">
                      <CommonScrollAnimated
                        className="tag tag-m meta-tag anim-uni-in-up"
                        as="p"
                        animation="inUp"
                      >
                        <TextScramble className="mxd-scramble">
                          What we make
                        </TextScramble>
                      </CommonScrollAnimated>
                      <CommonAnimatedText
                        as="h2"
                        className="reveal-type"
                        animation="revealType"
                      >
                        Five disciplines, one workspace.
                      </CommonAnimatedText>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-controls">
                      <CommonScrollAnimated
                        className="mxd-offerings__intro anim-uni-in-up"
                        as="p"
                        animation="inUp"
                      >
                        Every piece below was produced on ElarisLabs. No part of
                        it was handed to a separate design tool, edit suite or
                        localisation vendor.
                      </CommonScrollAnimated>
                      <CommonScrollAnimated
                        className="mxd-section-title__controls pre-title justify-end anim-uni-in-up"
                        as="div"
                        animation="inUp"
                      >
                        <a
                          className="btn btn-line btn-line-default"
                          href={STUDIO_APP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TextScramble className="btn-caption mxd-scramble">
                            Bring a live campaign
                          </TextScramble>
                        </a>
                      </CommonScrollAnimated>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-block">
            <ul className="mxd-offerings">
              {OFFERINGS.map((offering) => (
                <CommonScrollAnimated
                  key={offering.slug}
                  as="li"
                  animation="inUp"
                  className="mxd-offerings__item anim-uni-in-up"
                >
                  <figure className="mxd-offerings__card">
                    <div
                      className={`mxd-offerings__media mxd-offerings__media--${offering.orientation}`}
                    >
                      <Image
                        className="mxd-offerings__image"
                        alt={`${offering.title} work produced on ElarisLabs for ${offering.client}`}
                        src={offering.image}
                        width={offering.width}
                        height={offering.height}
                        sizes="(max-width: 767px) 90vw, (max-width: 1199px) 45vw, 20vw"
                      />
                      <span className="mxd-offerings__format">
                        {offering.format}
                      </span>
                    </div>
                    <figcaption className="mxd-offerings__body">
                      <h3 className="mxd-offerings__title">{offering.title}</h3>
                      <p className="mxd-offerings__caption">
                        {offering.caption}
                      </p>
                      <p className="mxd-offerings__client">{offering.client}</p>
                    </figcaption>
                  </figure>
                </CommonScrollAnimated>
              ))}
            </ul>
            <p className="mxd-offerings__note">
              Client work shown with permission. Concept pieces are illustrative
              and are not affiliated with or endorsed by the brands shown.
            </p>
          </div>
        </div>
        <PinnedSection.Trigger />
      </PinnedSection.Inner>
    </PinnedSection>
  );
}
