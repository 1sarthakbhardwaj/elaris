type Frame = {
  title: string;
  body: string;
};

type NumberedFramesProps = {
  frames: Frame[];
};

export default function NumberedFrames({ frames }: NumberedFramesProps) {
  return (
    <div className="mxd-article__block">
      <ol className="article-ol">
        {frames.map((frame, index) => (
          <li key={frame.title}>
            <span>
              {String(index + 1).padStart(2, "0")} {frame.title}
            </span>
            {frame.body}
          </li>
        ))}
      </ol>
    </div>
  );
}
