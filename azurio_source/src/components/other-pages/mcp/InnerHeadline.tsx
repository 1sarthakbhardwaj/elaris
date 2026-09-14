import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";

export default function InnerHeadline() {
  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-section">
          <div className="mxd-container grid-l-container">
            <div className="mxd-block loading-wrap">
              <div className="inner-headline margin-bottom-subtitle">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 mxd-grid-item">
                      <CommonLoadFade index={0}>
                        <div className="inner-headline__breadcrumbs loading-fade">
                          <div className="breadcrumbs__nav">
                            <span>
                              <Link href={`/`}>
                                <TextScramble className="mxd-scramble">
                                  Home
                                </TextScramble>
                              </Link>
                            </span>
                            <span className="current-item">MCP </span>
                          </div>
                        </div>
                      </CommonLoadFade>
                    </div>
                    <div className="col-12">
                      <div className="inner-headline__content has-large-title">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 col-xl-9 mxd-grid-item">
                              <div className="inner-headline__title pre-subtitle-large">
                                <CommonAnimatedText
                                  as="h1"
                                  className="large loading-split"
                                  animation="splitLinesLoad"
                                >
                                  Run your brand&apos;s creative engine from any
                                  chat.
                                </CommonAnimatedText>
                              </div>
                              <CommonLoadItem index={0}>
                                <div className="inner-headline__subtitle loading-item">
                                  <p>
                                    Generate on-brand ads, resize across every
                                    ratio, and pull approved assets{" "}
                                    <span>
                                      from Claude, Cursor, and any MCP-compatible
                                      agent.
                                    </span>
                                  </p>
                                </div>
                              </CommonLoadItem>
                            </div>
                            <div className="col-12 col-xl-3 mxd-grid-item">
                              <div className="inner-headline__tags align-end-desktop tags-large-subtitle">
                                <CommonLoadItem index={1}>
                                  <SmoothAnchorLink
                                    className="loading-item"
                                    targetId="install"
                                  >
                                    <TextScramble className="tag tag-m meta-tag mxd-scramble">
                                      Install
                                    </TextScramble>
                                  </SmoothAnchorLink>
                                </CommonLoadItem>
                                <CommonLoadItem index={2}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    Claude
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={3}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    Cursor
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={4}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    7 tools
                                  </TextScramble>
                                </CommonLoadItem>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurSection>
      </>
    </CommonLoadAnimation>
  );
}
