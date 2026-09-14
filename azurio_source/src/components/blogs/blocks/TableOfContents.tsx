import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";

type TocItem = {
  id: string;
  label: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="mxd-article__block block-table-of-contents">
      <p className="table-of-contents__title">/ Table of contents:</p>
      <ul className="table-of-contents__nav">
        {items.map((item) => (
          <li key={item.id}>
            <SmoothAnchorLink targetId={item.id}>{item.label}</SmoothAnchorLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
