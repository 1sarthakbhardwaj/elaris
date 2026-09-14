import type { ProjectShowcaseItem, ProjectStackItem } from "@/types/project";

const commonTags = ["Build", "Grow", "Localisation", "Brand memory"];
const showcaseCommonTags = ["Build", "Grow", "Localisation", "Brand memory"];

export const brandingStudioProjects: ProjectStackItem[] = [
  {
    title: "Omnichannel campaign build",
    imageSrc: "/img/works/showcase-stack/pr03.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    tags: commonTags,
  },
  {
    title: "Mobile app interface",
    imageSrc: "/img/works/showcase-stack/pr02.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 2200,
    imageHeight: 1240,
    tags: commonTags,
  },
  {
    title: "Investor deck from a brand kit",
    imageSrc: "/img/works/showcase-stack/pr01.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    tags: commonTags,
  },
  {
    title: "Landing page in a day",
    imageSrc: "/img/works/showcase-stack/pr04.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    coverClassName: "cover-darken",
    tags: commonTags,
  },
];

export const digitalDesignerProjectsShowcase: ProjectShowcaseItem[] = [
  {
    titleLines: ["Retail campaign", "in two languages"],
    bgImageSrc: "/img/works/1920x1280_pr01.webp",
    cardImageSrc: "/img/works/700x700_pr01.webp",
    cardImageAlt: "Retail campaign case study preview",
    cursorText: "View Work",
    href: "/project-details",
    tags: showcaseCommonTags,
  },
  {
    titleLines: ["Product launch", "site and deck"],
    bgImageSrc: "/img/works/1920x1280_pr02.webp",
    cardImageSrc: "/img/works/700x700_pr02.webp",
    cardImageAlt: "Product launch case study preview",
    cursorText: "View Work",
    href: "/project-details",
    tags: ["Websites", "App UI", "Decks", "Brand memory"],
  },
  {
    titleLines: ["Always on", "social engine"],
    bgImageSrc: "/img/works/1920x1280_pr03.webp",
    cardImageSrc: "/img/works/700x700_pr03.webp",
    cardImageAlt: "Social engine case study preview",
    cursorText: "View Work",
    href: "/project-details",
    tags: showcaseCommonTags,
  },
];
