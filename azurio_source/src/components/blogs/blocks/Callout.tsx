import type { ReactNode } from "react";

type CalloutProps = {
  children: ReactNode;
};

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="mxd-article__block block-quote">
      <blockquote>
        <p className="quote__text">{children}</p>
      </blockquote>
    </div>
  );
}
