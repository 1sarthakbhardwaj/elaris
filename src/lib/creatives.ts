export type Creative = {
  src: string;
  width: number;
  height: number;
  /** Short label shown above/below the frame in the marquee. */
  tag: string;
  /**
   * Marks work that is not a client engagement so the marquee can badge it.
   * `concept` is brand-styled demo work; `generated` is raw model output kept
   * as a texture reel. Everything unbadged is delivered client work.
   */
  badge?: "concept" | "generated";
};

/** Scrolls left. Delivered client work leads, concept pieces fill. */
export const CREATIVES_ROW_A: Creative[] = [
  { src: "/work/qdb/elite.jpg", width: 560, height: 315, tag: "Out of home" },
  {
    src: "/blogs/homesrus-530-variants/v1.jpg",
    width: 240,
    height: 427,
    tag: "Catalogue",
  },
  { src: "/creatives/lays.webp", width: 520, height: 644, tag: "Packaging", badge: "concept" },
  {
    src: "/arabic-rtl/mcd-doha-42-arabic.jpg",
    width: 240,
    height: 427,
    tag: "Localisation",
  },
  { src: "/creatives/bacardi.webp", width: 340, height: 342, tag: "Social", badge: "concept" },
  { src: "/work/qdb/crystal.jpg", width: 560, height: 315, tag: "Out of home" },
  {
    src: "/creatives/diet-coke.webp",
    width: 426,
    height: 779,
    tag: "Product staging",
    badge: "concept",
  },
  {
    src: "/blogs/homesrus-530-variants/v4.jpg",
    width: 240,
    height: 427,
    tag: "Retail",
  },
];

/** Scrolls right, so the two bands cross. */
export const CREATIVES_ROW_B: Creative[] = [
  { src: "/creatives/ikea.webp", width: 270, height: 411, tag: "Lifestyle", badge: "concept" },
  {
    src: "/work/qdb/qlife-pharma.jpg",
    width: 560,
    height: 315,
    tag: "Pharma",
  },
  { src: "/creatives/nescafe.webp", width: 340, height: 339, tag: "Beverage", badge: "concept" },
  {
    src: "/blogs/homesrus-530-variants/v6.jpg",
    width: 240,
    height: 427,
    tag: "Seasonal",
  },
  { src: "/creatives/colgate.webp", width: 270, height: 268, tag: "FMCG", badge: "concept" },
  {
    src: "/work/qdb/fresh-meat-factory.jpg",
    width: 560,
    height: 315,
    tag: "Food",
  },
  {
    src: "/blogs/homesrus-530-variants/v7.jpg",
    width: 240,
    height: 427,
    tag: "Furniture",
  },
];

/** Third band — more delivered work, so the reel stays a studio, not a texture pack. */
export const CREATIVES_ROW_C: Creative[] = [
  {
    src: "/arabic-rtl/mcd-doha-feels-like-0c.jpeg",
    width: 900,
    height: 1600,
    tag: "Live DOOH",
  },
  {
    src: "/blogs/homesrus-530-variants/v2.jpg",
    width: 240,
    height: 427,
    tag: "Retail",
  },
  {
    src: "/arabic-rtl/mcd-doha-mixperience.jpeg",
    width: 680,
    height: 1208,
    tag: "Out of home",
  },
  {
    src: "/blogs/homesrus-530-variants/v3.jpg",
    width: 240,
    height: 427,
    tag: "Catalogue",
  },
  {
    src: "/arabic-rtl/mcd-doha-45-arabic.jpg",
    width: 680,
    height: 1208,
    tag: "Localisation",
  },
  {
    src: "/blogs/homesrus-530-variants/v5.jpg",
    width: 240,
    height: 427,
    tag: "Furniture",
  },
  {
    src: "/blogs/mcdonalds-qatar-live-dooh/cover.jpg",
    width: 680,
    height: 1208,
    tag: "Paid media",
  },
  {
    src: "/blogs/homesrus-530-variants/v8.jpg",
    width: 240,
    height: 427,
    tag: "Seasonal",
  },
];
