type Stage = {
  title: string;
  body: string;
  media?: {
    src: string;
    caption?: string;
  };
};

type StageSectionProps = {
  stages: Stage[];
};

export default function StageSection({ stages }: StageSectionProps) {
  return (
    <>
      {stages.map((stage) => (
        <div key={stage.title} className="mxd-article__block">
          <h3>{stage.title}</h3>
          <p className="mxd-article__normal">{stage.body}</p>
          {stage.media ? (
            <div className="block-image">
              <div className="block-image__container">
                <video
                  src={stage.media.src}
                  controls
                  playsInline
                  style={{ width: "100%", height: "auto" }}
                />
                {stage.media.caption ? (
                  <div className="block-image__tags">
                    <span className="tag tag-m tag-bg permanent">
                      {stage.media.caption}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
