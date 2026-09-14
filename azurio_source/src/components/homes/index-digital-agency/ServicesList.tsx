"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import { PRODUCTS } from "@/data/products";
import { STUDIO_APP_URL } from "@/lib/site";

export default function ServicesList() {
  return (
    <>
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
                            Five products
                          </TextScramble>
                        </CommonScrollAnimated>
                        <CommonAnimatedText
                          as="h2"
                          className="reveal-type"
                          animation="revealType"
                        >
                          Your multi-agent creative OS.
                        </CommonAnimatedText>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-controls">
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
                              Open Studio
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
              <div className="mxd-services-list no-marquee">
                {PRODUCTS.map((product) => (
                  <Link
                    key={product.number}
                    className="mxd-services-list__item active-cursor-image-tr"
                    data-cursor-image={product.cursorImage}
                    href={STUDIO_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="mxd-services-list__divider top" />
                    <div className="container-fluid px-0 mxd-services-list__inner">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-1 mxd-grid-padding">
                          <div className="mxd-services-list__number">
                            <span className="meta-tag">[{product.number}]</span>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-padding">
                          <div className="mxd-services-list__title">
                            <h3>{product.title}</h3>
                            <p className="t-caption t-muted">{product.tagline}</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-5 mxd-grid-padding">
                          <div className="mxd-services-list__descr">
                            <p className="t-medium">{product.body}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mxd-services-list__divider bottom" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <PinnedSection.Trigger />
        </PinnedSection.Inner>
      </PinnedSection>
    </>
  );
}
