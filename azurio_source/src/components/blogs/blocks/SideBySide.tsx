import type { ReactNode } from "react";

type SideBySideProps = {
  left: ReactNode;
  right: ReactNode;
};

export default function SideBySide({ left, right }: SideBySideProps) {
  return (
    <div className="mxd-article__block">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12 col-md-6 mxd-grid-item">{left}</div>
          <div className="col-12 col-md-6 mxd-grid-item">{right}</div>
        </div>
      </div>
    </div>
  );
}
