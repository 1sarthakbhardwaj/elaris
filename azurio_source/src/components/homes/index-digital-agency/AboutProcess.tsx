import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Link from "next/link";
import {
  CommonScrollAnimated,
  CommonCardBatchAnimated,
} from "@/components/animations/CommonScrollAnimated";
export default function AboutProcess() {
  return (
    <>
      <BlurSection
        id="about"
        className="mxd-section bg-color-accent padding-top-manifest-m padding-bottom-default padding-bottom-tag-m-desktop"
      >
        <div className="mxd-container grid-l-container">
          {/* Block - Manifest Large Start */}
          <div className="mxd-block">
            <div className="mxd-section-manifest pre-points">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="mxd-section-manifest__wrap wrap-text-m">
                      <div className="mxd-section-manifest__text manifest-text-m">
                        <Link data-cursor-text="The platform" href={`/about-us`}>
                          <CommonAnimatedText
                            as="span"
                            className="manifest manifest-m manifest-accent mxd-split-lines active-cursor-permanent"
                            animation="splitLines"
                          >
                            ElarisLabs is the agentic AI business OS. A single
                            node based canvas where agents run the entire
                            digital lifecycle.
                            <span>
                              Build the product, then grow it, without stitching
                              ten disconnected tools together.
                            </span>
                          </CommonAnimatedText>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Manifest Large End */}
          {/* Block - Process Points Start */}
          <div className="mxd-block">
            <div className="mxd-process-points">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {/* process item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <div className="mxd-process-points__divider top accent" />
                    <div className="mxd-process-points__title">
                      <div className="mxd-process-points__icon accent">
                        <i className="ph ph-cube" />
                      </div>
                      <p className="accent">Build</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium t-accent">
                        Websites, web and mobile app interfaces, and investor
                        ready decks. Design to code agents turn a brief into
                        something that actually ships.
                      </p>
                    </div>
                    <div className="mxd-process-points__time">
                      <span className="tag tag-m tag-permanent">
                        Live product in days
                      </span>
                    </div>
                  </CommonCardBatchAnimated>
                  {/* process item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <CommonScrollAnimated
                      className="mxd-process-points__divider top accent anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                    <div className="mxd-process-points__title">
                      <div className="mxd-process-points__icon accent">
                        <i className="ph ph-trend-up" />
                      </div>
                      <p className="accent">Grow</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium t-accent">
                        Omnichannel campaigns, dynamic video, social scheduling
                        and pre flight scoring. Five hundred variants generated
                        in a single parallel pass.
                      </p>
                    </div>
                    <div className="mxd-process-points__time">
                      <span className="tag tag-m tag-permanent">
                        500+ variants per pass
                      </span>
                    </div>
                  </CommonCardBatchAnimated>
                  {/* process item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <CommonScrollAnimated
                      className="mxd-process-points__divider top accent anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                    <div className="mxd-process-points__title">
                      <div className="mxd-process-points__icon accent">
                        <i className="ph ph-graph" />
                      </div>
                      <p className="accent">Compound</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium t-accent">
                        Update the brand kit once and the site, the deck, the
                        social channels and the ad campaigns all update with
                        it. One graph, one source of truth.
                      </p>
                    </div>
                    <div className="mxd-process-points__time">
                      <span className="tag tag-m tag-permanent">
                        One brand memory
                      </span>
                    </div>
                    <CommonScrollAnimated
                      className="mxd-process-points__divider bottom accent anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                  </CommonCardBatchAnimated>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Process Points End */}
        </div>
      </BlurSection>
    </>
  );
}
