type ArticleVideoProps = {
  src: string;
  poster?: string;
  caption?: string;
  autoPlay?: boolean;
};

export default function ArticleVideo({
  src,
  poster,
  caption,
  autoPlay = false,
}: ArticleVideoProps) {
  return (
    <div className="mxd-article__block block-image">
      <div className="block-image__container">
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          autoPlay={autoPlay}
          muted={autoPlay}
          loop={autoPlay}
          style={{ width: "100%", height: "auto" }}
        />
        {caption ? (
          <div className="block-image__tags">
            <span className="tag tag-m tag-bg permanent">{caption}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
