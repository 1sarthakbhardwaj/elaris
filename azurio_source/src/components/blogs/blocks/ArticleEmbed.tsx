type ArticleEmbedProps = {
  src: string;
  title: string;
};

export default function ArticleEmbed({ src, title }: ArticleEmbedProps) {
  return (
    <div className="mxd-article__block block-image">
      <div className="block-image__container">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", aspectRatio: "16 / 9", border: 0 }}
        />
      </div>
    </div>
  );
}
