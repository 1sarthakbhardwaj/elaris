import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "../animations/CommonAnimatedText";
import {
  CommonScrollAnimated,
  CommonScrollAnimatedLink,
} from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import FooterBackToTop from "@/components/footers/FooterBackToTop";
export default function Footer3({ name = "ElarisLabs" }: { name?: string }) {
  return (
    <BlurSection as="footer" className="mxd-footer">
      <div className="mxd-container grid-l-container">
        {/* Footer Block - Navigation v1 Start */}
        <div className="mxd-block">
          <div className="mxd-footer__footer-blocks mxd-grid-item">
            <div className="footer-blocks__nav-v01">
              <ul className="footer-nav-v01">
                <li className="footer-nav-v01__item">
                  <CommonScrollAnimatedLink
                    className="anim-uni-slide-down"
                    href={`/`}
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble mxd-slide-down">
                      Home
                    </TextScramble>
                  </CommonScrollAnimatedLink>
                </li>
                <li className="footer-nav-v01__item">
                  <CommonScrollAnimatedLink
                    className="anim-uni-slide-down"
                    href={`/works-default`}
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble mxd-slide-down">
                      Solutions
                    </TextScramble>
                  </CommonScrollAnimatedLink>
                </li>
                <li className="footer-nav-v01__item">
                  <CommonScrollAnimatedLink
                    className="anim-uni-slide-down"
                    href={`/about-us`}
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble mxd-slide-down">
                      Company
                    </TextScramble>
                  </CommonScrollAnimatedLink>
                </li>
                <li className="footer-nav-v01__item">
                  <CommonScrollAnimatedLink
                    className="anim-uni-slide-down"
                    href={`/services`}
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble mxd-slide-down">
                      Capabilities
                    </TextScramble>
                  </CommonScrollAnimatedLink>
                </li>
                <li className="footer-nav-v01__item">
                  <CommonScrollAnimatedLink
                    className="anim-uni-slide-down"
                    href={`/contact`}
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble mxd-slide-down">
                      Contact
                    </TextScramble>
                  </CommonScrollAnimatedLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Block - Navigation v1 End */}
        {/* Footer Block - Info Columns Start */}
        <div className="mxd-block">
          <div className="mxd-footer__footer-blocks">
            <div className="footer-blocks__column mxd-grid-item justify-start">
              <div className="footer-blocks__data justify-start">
                <p className="footer-data">
                  <CommonScrollAnimated
                    className="anim-uni-slide-down"
                    href="mailto:hello@elarislabs.ai?subject=Message%20from%20your%20site"
                    as="a"
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble">
                      hello@elarislabs.ai
                    </TextScramble>
                  </CommonScrollAnimated>
                </p>
                <p className="footer-data">
                  <CommonScrollAnimated
                    className="anim-uni-slide-down"
                    href="tel:+919211946444"
                    as="a"
                    animation="slideDownLine"
                  >
                    <TextScramble className="mxd-scramble">
                      +91 92119 46444
                    </TextScramble>
                  </CommonScrollAnimated>
                </p>
                <CommonScrollAnimated
                  className="footer-data anim-uni-slide-down"
                  as="p"
                  animation="slideDownLine"
                >
                  <span>studio.elarislabs.ai · book a live walkthrough</span>
                </CommonScrollAnimated>
              </div>
            </div>
            <div className="footer-blocks__column mxd-grid-item justify-end">
              <div className="footer-blocks__data justify-end">
                <CommonScrollAnimated
                  className="footer-data anim-uni-slide-down"
                  as="p"
                  animation="slideDownLine"
                >
                  <span className="mxd-slide-down">
                    ©{new Date().getFullYear()}
                  </span>
                </CommonScrollAnimated>
                <CommonScrollAnimated
                  className="footer-data anim-uni-slide-down"
                  as="p"
                  animation="slideDownLine"
                >
                  <span className="mxd-slide-down">
                    Copyright ElarisLabs AI. All rights reserved
                  </span>
                </CommonScrollAnimated>
                <CommonScrollAnimated
                  className="footer-data anim-uni-slide-down"
                  as="p"
                  animation="slideDownLine"
                >
                  <span className="mxd-slide-down">
                    The agentic business OS by&nbsp;
                    <a href="https://elarislabs.ai" target="_blank">
                      <TextScramble className="mxd-scramble">
                        ElarisLabs AI
                      </TextScramble>
                    </a>
                  </span>
                </CommonScrollAnimated>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Info Columns End */}
        {/* Footer Block - Fullwidth Text Start */}
        <div className="mxd-block">
          <div className="mxd-footer__fw-mark mxd-grid-item">
            <div className="fw-mark__wrap">
              <div className="fw-mark__content">
                <CommonAnimatedText
                  as="span"
                  className="anim-uni-chars"
                  animation="animChars"
                >
                  {name}
                </CommonAnimatedText>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Fullwidth Text End */}
        {/* Footer Block - Links Start */}
        <div className="mxd-block">
          <div className="mxd-footer__footer-blocks bottom-blocks">
            <div className="footer-blocks__column mxd-grid-item justify-start">
              <div className="footer-blocks__socials">
                <CommonScrollAnimated
                  className="mxd-socials-line anim-uni-fade-in"
                  as="ul"
                  animation="fadeIn"
                >
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://www.linkedin.com/company/elarislabs/"
                      target="_blank"
                    >
                      <TextScramble className="mxd-scramble">
                        LinkedIn
                      </TextScramble>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://x.com/elarislabs"
                      target="_blank"
                    >
                      <TextScramble className="mxd-scramble">
                        X
                      </TextScramble>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://github.com/elarislabs"
                      target="_blank"
                    >
                      <TextScramble className="mxd-scramble">
                        GitHub
                      </TextScramble>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://www.youtube.com/@elarislabs"
                      target="_blank"
                    >
                      <TextScramble className="mxd-scramble">
                        YouTube
                      </TextScramble>
                    </a>
                  </li>
                  <li>
                    <a
                      className="mxd-socials-line__link"
                      href="https://www.instagram.com/elarislabs/"
                      target="_blank"
                    >
                      <TextScramble className="mxd-scramble">
                        Instagram
                      </TextScramble>
                    </a>
                  </li>
                </CommonScrollAnimated>
              </div>
            </div>
            <div className="footer-blocks__column mxd-grid-item justify-end">
              <CommonScrollAnimated
                className="footer-blocks__controls anim-uni-fade-in"
                as="div"
                animation="fadeIn"
              >
                <FooterBackToTop />
              </CommonScrollAnimated>
            </div>
          </div>
        </div>
        {/* Footer Block - Links End */}
      </div>
    </BlurSection>
  );
}
