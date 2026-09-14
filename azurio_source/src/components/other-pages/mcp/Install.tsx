"use client";

import { useState } from "react";
import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { CLAUDE_MCP_CMD, MCP_URL } from "@/lib/site";

function CopyField({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    void navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <CommonScrollAnimated className="anim-uni-in-up" as="div" animation="inUp">
      <p className="t-caption t-muted">{label}</p>
      <p className="t-medium">{value}</p>
      <button
        type="button"
        className="btn btn-line btn-line-default"
        onClick={onCopy}
      >
        <TextScramble className="btn-caption mxd-scramble">
          {copied ? "Copied" : "Copy"}
        </TextScramble>
      </button>
    </CommonScrollAnimated>
  );
}

export default function Install() {
  return (
    <BlurSection
      id="install"
      className="mxd-section padding-bottom-default"
    >
      <div className="mxd-container grid-l-container">
        <div className="mxd-block">
          <div className="mxd-section-title">
            <CommonAnimatedText
              as="h2"
              className="reveal-type"
              animation="revealType"
            >
              One URL. Any agent.
            </CommonAnimatedText>
          </div>
          <p className="t-medium">
            Connect once and it shows up wherever you already work.
          </p>
        </div>
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-6 mxd-grid-item">
                <CopyField value={MCP_URL} label="MCP URL" />
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item">
                <CopyField value={CLAUDE_MCP_CMD} label="Claude Code" />
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-block">
          <CommonScrollAnimated
            className="anim-uni-in-up"
            as="p"
            animation="inUp"
          >
            Claude web and desktop: open Settings, Connectors, add a custom
            connector named ElarisLabs with the URL above, then approve OAuth.
          </CommonScrollAnimated>
        </div>
      </div>
    </BlurSection>
  );
}
