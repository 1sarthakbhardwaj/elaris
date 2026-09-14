"use client";

import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import { MCP_TOOL_CATEGORY_LABEL, MCP_TOOLS } from "@/data/mcp";

export default function Tools() {
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
              Every tool your agent can call.
            </CommonAnimatedText>
          </div>
        </div>
        <div className="mxd-block">
          <div className="mxd-services-list no-marquee">
            {MCP_TOOLS.map((tool, index) => (
              <div key={tool.name} className="mxd-services-list__item">
                <div className="mxd-services-list__divider top" />
                <div className="container-fluid px-0 mxd-services-list__inner">
                  <div className="row gx-0">
                    <div className="col-12 col-xl-2 mxd-grid-padding">
                      <div className="mxd-services-list__number">
                        <span className="meta-tag">
                          {MCP_TOOL_CATEGORY_LABEL[tool.category]}
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-padding">
                      <div className="mxd-services-list__title">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="h3"
                          animation="inUp"
                        >
                          {tool.name}
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-6 mxd-grid-padding">
                      <div className="mxd-services-list__descr">
                        <p className="t-medium">{tool.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {index === MCP_TOOLS.length - 1 ? (
                  <div className="mxd-services-list__divider bottom" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
