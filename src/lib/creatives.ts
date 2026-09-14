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

/**
 * Raw model output, scrolling left under the two work bands. Curated toward the
 * monochrome and high-contrast frames, which sit on the obsidian palette far
 * better than the saturated ones in the same set.
 */
export const CREATIVES_ROW_C: Creative[] = [
  { src: "/creatives/generated/mar_16.webp", width: 800, height: 1200, tag: "Editorial", badge: "generated" },
  { src: "/creatives/generated/mar_14.webp", width: 737, height: 1200, tag: "Motion", badge: "generated" },
  { src: "/creatives/generated/mar_01.webp", width: 1200, height: 1200, tag: "Beauty", badge: "generated" },
  { src: "/creatives/generated/mar_05.webp", width: 800, height: 1200, tag: "Fashion", badge: "generated" },
  { src: "/creatives/generated/mar_10.webp", width: 1200, height: 873, tag: "Film", badge: "generated" },
  { src: "/creatives/generated/mar_08.webp", width: 737, height: 1200, tag: "3D", badge: "generated" },
  { src: "/creatives/generated/mar_02.webp", width: 1200, height: 685, tag: "Concept art", badge: "generated" },
  { src: "/creatives/generated/mar_11.webp", width: 1200, height: 1200, tag: "Product", badge: "generated" },
];
