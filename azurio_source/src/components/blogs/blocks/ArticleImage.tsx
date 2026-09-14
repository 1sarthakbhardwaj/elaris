import Image from "next/image";

type ArticleImageProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export default function ArticleImage({
  src,
  alt,
  caption,
  width = 1920,
  height = 1280,
}: ArticleImageProps) {
  return (
    <div className="mxd-article__block block-image">
      <div className="block-image__container">
        <Image alt={alt} src={src} width={width} height={height} />
        {caption ? (
          <div className="block-image__tags">
            <span className="tag tag-m tag-bg permanent">{caption}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
