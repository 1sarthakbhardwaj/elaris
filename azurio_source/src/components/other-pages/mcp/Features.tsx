"use client";

import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import { MCP_FEATURES } from "@/data/mcp";

export default function Features() {
  return (
    <BlurSection className="mxd-section padding-bottom-default">
      <div className="mxd-container grid-l-container">
        <div className="mxd-block">
          <div className="mxd-section-title">
            <CommonAnimatedText
              as="h2"
              className="reveal-type"
              animation="revealType"
            >
              Your brand&apos;s creative engine, in the chat.
            </CommonAnimatedText>
          </div>
        </div>
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              {MCP_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="col-12 col-xl-4 mxd-grid-item"
                >
                  <CommonScrollAnimated
                    className="anim-uni-in-up"
                    as="div"
                    animation="inUp"
                  >
                    <h3>{feature.title}</h3>
                    <p className="t-medium">{feature.body}</p>
                  </CommonScrollAnimated>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
