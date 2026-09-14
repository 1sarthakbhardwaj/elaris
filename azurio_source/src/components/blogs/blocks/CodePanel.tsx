"use client";

import { useState } from "react";
import TextScramble from "@/components/animations/TextScramble";

type CodePanelProps = {
  title?: string;
  code: string;
};

export default function CodePanel({ title, code }: CodePanelProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    void navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <div className="mxd-article__block">
      {title ? <p className="t-caption t-muted">{title}</p> : null}
      <pre
        className="mxd-article__normal"
        style={{ whiteSpace: "pre-wrap", overflowX: "auto" }}
      >
        <code>{code}</code>
      </pre>
      <button
        type="button"
        className="btn btn-line btn-line-default"
        onClick={onCopy}
      >
        <TextScramble className="btn-caption mxd-scramble">
          {copied ? "Copied" : "Copy"}
        </TextScramble>
      </button>
    </div>
  );
}
