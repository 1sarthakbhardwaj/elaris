export type PressStat = {
  value: string;
  label: string;
};

export type PressFeature = {
  outlet: string;
  logoSrc: string;
  date: string;
  headline: string;
  quote: string;
  href: string;
  caseStudyHref?: string;
  stats: PressStat[];
};
