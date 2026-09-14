type Stat = {
  value: string;
  label: string;
};

type StatRowProps = {
  stats: Stat[];
};

export default function StatRow({ stats }: StatRowProps) {
  return (
    <div className="mxd-article__block">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {stats.map((stat) => (
            <div key={stat.label} className="col-6 col-md-3 mxd-grid-item">
              <p className="t-large t-bold">{stat.value}</p>
              <p className="t-caption t-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
