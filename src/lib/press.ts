export type PressStat = {
  value: string;
  label: string;
};

export type PressFeature = {
  outlet: string;
  date: string;
  headline: string;
  quote: string;
  href: string;
  /** Internal deep-dive / case study, if we have one. */
  caseStudyHref?: string;
  stats: PressStat[];
};

export const PRESS_FEATURE: PressFeature = {
  outlet: "Campaign Middle East",
  date: "July 2026",
  headline:
    "McDonald's Qatar turns Doha's heat into a real-time campaign",
  quote:
    "The creative lived across a nine-screen digital outdoor network powered by ELAN Media and built by Elaris Labs — each screen carrying the live Temperature, Feels Like reading and Thirst Score next to the Mixology creative, so the medium and the message updated together.",
  href: "https://campaignme.com/mcdonalds-qatar-turns-dohas-heat-into-a-live-thirst-score/",
  caseStudyHref: "/blogs/mcdonalds-qatar-live-dooh",
  stats: [
    { value: "10.4M", label: "Impressions" },
    { value: "5.6M", label: "Video views" },
    { value: "9", label: "Live screens" },
  ],
};
