import type { OfferingItem } from "@/types/offering";

/**
 * What ElarisLabs actually ships, taken from the 2026 portfolio deck
 * ("Five disciplines, one workspace"). Each card carries a real piece of
 * delivered work rather than a product screenshot — the point of the section
 * is the output, not the tooling.
 */
export const OFFERINGS: OfferingItem[] = [
  {
    slug: "out-of-home",
    title: "Out of home",
    caption: "Six brands live on Qatar boards",
    format: "DOOH",
    client: "Qatar Development Bank SME programme",
    image: "/img/offerings/out-of-home.webp",
    width: 560,
    height: 315,
    orientation: "landscape",
  },
  {
    slug: "localisation",
    title: "Localisation",
    caption: "Two scripts from one master",
    format: "AR / EN",
    client: "McDonald's Qatar",
    image: "/img/offerings/localisation.webp",
    width: 680,
    height: 1208,
    orientation: "portrait",
  },
  {
    slug: "catalogue",
    title: "Catalogue",
    caption: "Six SKUs, one approved layout",
    format: "BULK",
    client: "HomesRUs",
    image: "/img/offerings/catalogue.webp",
    width: 240,
    height: 427,
    orientation: "portrait",
  },
  {
    slug: "social-video",
    title: "Social video",
    caption: "Script, presenters, captions, cut",
    format: "UGC",
    client: "Be More Healthy, Dubai",
    image: "/img/offerings/social-video.webp",
    width: 230,
    height: 381,
    orientation: "portrait",
  },
  {
    slug: "long-form",
    title: "Long form film",
    caption: "Long form with native supers",
    format: "FILM",
    client: "Asian Paints Royale",
    image: "/img/offerings/long-form.webp",
    width: 363,
    height: 210,
    orientation: "landscape",
  },
];

/**
 * Concept work used as the falling objects behind the hero. These are
 * demonstration pieces — the brands are illustrative and not affiliated with
 * or endorsed by their owners, which is why the hero carries a disclaimer.
 */
export const HERO_CREATIVES = [
  { slug: "diet-coke", src: "/img/creatives/diet-coke.webp", width: 426, height: 779 },
  { slug: "lays", src: "/img/creatives/lays.webp", width: 520, height: 644 },
  { slug: "bacardi", src: "/img/creatives/bacardi.webp", width: 340, height: 342 },
  { slug: "colgate", src: "/img/creatives/colgate.webp", width: 270, height: 268 },
  { slug: "nescafe", src: "/img/creatives/nescafe.webp", width: 340, height: 339 },
  { slug: "ikea", src: "/img/creatives/ikea.webp", width: 270, height: 411 },
  {
    slug: "localisation",
    src: "/img/offerings/localisation.webp",
    width: 680,
    height: 1208,
  },
  {
    slug: "catalogue",
    src: "/img/offerings/catalogue.webp",
    width: 240,
    height: 427,
  },
  {
    slug: "out-of-home",
    src: "/img/offerings/out-of-home.webp",
    width: 560,
    height: 315,
  },
  {
    slug: "social-video",
    src: "/img/offerings/social-video.webp",
    width: 230,
    height: 381,
  },
] as const;
