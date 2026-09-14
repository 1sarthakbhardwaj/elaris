export type WorkItem = {
  /** Stable key for React and the slide index. */
  slug: string;
  /** Completes the sentence "Your creative OS for …". */
  title: string;
  /** One-line proof of what shipped. */
  caption: string;
  /** Short format label shown over the stage. */
  format: string;
  /** Client or programme the work ran for. */
  client: string;
  image: string;
  /** Intrinsic size — next/image needs both to reserve layout space. */
  width: number;
  height: number;
  /**
   * Extra stills cycled on top of `image` while this slide is on stage. Used
   * where the point of the work *is* the volume — showing one frame of a
   * 530-variant run undersells it.
   */
  frames?: string[];
  /** Present only where a published case study backs the claim. */
  href?: string;
};

/**
 * Each slide is one discipline, led by delivered client work rather than a
 * product screenshot. Ordered so the stage alternates landscape and vertical
 * art, which keeps the transitions from feeling like a slideshow of the same
 * shape.
 */
export const WORK: WorkItem[] = [
  {
    slug: "out-of-home",
    title: "out of home",
    caption: "Six brands live on Qatar boards",
    format: "DOOH",
    client: "Qatar Development Bank",
    image: "/work/qdb/elite.jpg",
    width: 560,
    height: 315,
    frames: [
      "/work/qdb/crystal.jpg",
      "/work/qdb/qlife-pharma.jpg",
      "/work/qdb/fresh-meat-factory.jpg",
    ],
  },
  {
    slug: "localisation",
    title: "localisation",
    caption: "One master, two scripts, zero redraws",
    format: "AR / EN",
    client: "McDonald's Qatar",
    image: "/arabic-rtl/mcd-arabic-master.png",
    width: 1088,
    height: 608,
  },
  {
    slug: "catalogue",
    title: "catalogues at scale",
    caption: "530 variants from one approved layout",
    format: "BULK",
    client: "HomesRUs",
    image: "/blogs/homesrus-530-variants/master.jpg",
    width: 240,
    height: 427,
    frames: [
      "/blogs/homesrus-530-variants/v1.jpg",
      "/blogs/homesrus-530-variants/v2.jpg",
      "/blogs/homesrus-530-variants/v3.jpg",
      "/blogs/homesrus-530-variants/v4.jpg",
      "/blogs/homesrus-530-variants/v5.jpg",
      "/blogs/homesrus-530-variants/v6.jpg",
      "/blogs/homesrus-530-variants/v7.jpg",
      "/blogs/homesrus-530-variants/v8.jpg",
    ],
    href: "/blogs/homesrus-530-variants",
  },
  {
    slug: "live-dooh",
    title: "screens that read the weather",
    caption: "Creative re-rendered against live temperature",
    format: "REAL-TIME",
    client: "McDonald's Qatar × ELAN Media",
    image: "/blogs/mcdonalds-qatar-live-dooh/cover.jpg",
    width: 680,
    height: 1208,
    href: "/blogs/mcdonalds-qatar-live-dooh",
  },
  {
    slug: "campaign-systems",
    title: "one brief, every placement",
    caption: "A single system feeding every channel",
    format: "OMNICHANNEL",
    client: "ElarisLabs production",
    image: "/work/one-brief-many-ads.jpg",
    width: 1072,
    height: 706,
  },
];
