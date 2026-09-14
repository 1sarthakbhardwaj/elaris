"use client";

import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import {
  CommonCardBatchAnimated,
  CommonScrollAnimated,
} from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { MCP_USE_CASES } from "@/data/mcp";

export default function UseCases() {
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
              How teams are using the MCP.
            </CommonAnimatedText>
          </div>
        </div>
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              {MCP_USE_CASES.map((useCase) => (
                <CommonCardBatchAnimated
                  key={useCase.title}
                  className="col-12 col-md-6 mxd-grid-item animate-card-2"
                  as="div"
                  columns={2}
                >
                  <CommonScrollAnimated
                    className="anim-uni-in-up"
                    as="div"
                    animation="inUp"
                  >
                    <TextScramble className="tag tag-m meta-tag mxd-scramble">
                      {useCase.who}
                    </TextScramble>
                    <h3>{useCase.title}</h3>
                    <p className="t-medium">{useCase.body}</p>
                  </CommonScrollAnimated>
                </CommonCardBatchAnimated>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
