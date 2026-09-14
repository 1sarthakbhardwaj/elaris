"use client";

import Image from "next/image";
import Link from "next/link";
import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { PRESS_FEATURE } from "@/data/press";

export default function PressFeature() {
  const { outlet, logoSrc, date, headline, quote, href, caseStudyHref, stats } =
    PRESS_FEATURE;

  return (
    <BlurSection
      className="mxd-section padding-top-subtitle-mobile padding-bottom-default"
      aria-label="Press coverage"
    >
      <div className="mxd-container grid-l-container">
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-8 mxd-grid-item">
                  <div className="mxd-section-title__title">
                    <CommonScrollAnimated
                      className="tag tag-m meta-tag anim-uni-in-up"
                      as="p"
                      animation="inUp"
                    >
                      <TextScramble className="mxd-scramble">
                        In the press
                      </TextScramble>
                    </CommonScrollAnimated>
                    <CommonAnimatedText
                      as="h2"
                      className="reveal-type"
                      animation="revealType"
                    >
                      Featured in Campaign Middle East.
                    </CommonAnimatedText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-8 mxd-grid-item">
                <CommonScrollAnimated
                  className="anim-uni-in-up"
                  as="div"
                  animation="inUp"
                >
                  <div className="mxd-section-title__data">
                    <Image
                      src={logoSrc}
                      alt={outlet}
                      width={300}
                      height={64}
                      style={{
                        width: "auto",
                        height: "48px",
                        maxWidth: "240px",
                        objectFit: "contain",
                        background: "#fff",
                        padding: "8px 16px",
                      }}
                    />
                    <p className="t-caption t-muted">{date}</p>
                  </div>
                  <p className="t-large t-bold">{headline}</p>
                  <p className="t-medium">{quote}</p>
                  <div className="mxd-section-title__controls">
                    <a
                      className="btn btn-default-icon btn-default-outline slide-right"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TextScramble className="btn-caption mxd-scramble">
                        Read the feature
                      </TextScramble>
                      <i className="btn-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          viewBox="0 0 18 18"
                        >
                          <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                        </svg>
                      </i>
                    </a>
                    {caseStudyHref ? (
                      <Link
                        className="btn btn-line btn-line-default"
                        href={caseStudyHref}
                      >
                        <TextScramble className="btn-caption mxd-scramble">
                          Read our breakdown
                        </TextScramble>
                      </Link>
                    ) : null}
                  </div>
                </CommonScrollAnimated>
              </div>
              <div className="col-12 col-xl-4 mxd-grid-item">
                {stats.map((stat) => (
                  <CommonScrollAnimated
                    key={stat.label}
                    className="anim-uni-in-up"
                    as="div"
                    animation="inUp"
                  >
                    <p className="t-large t-bold">{stat.value}</p>
                    <p className="t-caption t-muted">{stat.label}</p>
                  </CommonScrollAnimated>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
