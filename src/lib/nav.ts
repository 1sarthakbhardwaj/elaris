import { STUDIO_APP_URL } from "./site";

export type NavLink = {
  label: string;
  description: string;
  href: string;
  external?: boolean;
  badge?: string;
};

export type MegaColumn = {
  heading: string;
  links: NavLink[];
};

export type MegaMenu = {
  id: "products" | "resources";
  trigger: string;
  title: string;
  description: string;
  columns: [MegaColumn, MegaColumn];
  banner: { label: string; href: string };
};

export const MEGA_MENUS: MegaMenu[] = [
  {
    id: "products",
    trigger: "Products",
    title: "The complete creative OS",
    description:
      "Frontier models behind a marketing harness — generate, localise, score, and launch from one canvas.",
    columns: [
      {
        heading: "Product",
        links: [
          {
            label: "Overview",
            description: "One creative workspace",
            href: "/#products",
          },
          {
            label: "Creative Studio",
            description: "Node-based pipelines",
            href: STUDIO_APP_URL,
            external: true,
          },
          {
            label: "Video Studio",
            description: "Brief to final cut",
            href: STUDIO_APP_URL,
            external: true,
          },
          {
            label: "MCP",
            description: "Connect to your agents",
            href: "/mcp",
            badge: "New",
          },
          {
            label: "Pricing",
            description: "Try today",
            href: "/pricing",
          },
        ],
      },
      {
        heading: "Create",
        links: [
          {
            label: "Brand pack",
            description: "One master, every ratio",
            href: "/learn/creative-automation",
          },
          {
            label: "Localise",
            description: "Arabic and RTL, mirrored",
            href: "/arabic-rtl-ad-creative",
          },
          {
            label: "Bulk generate",
            description: "Thousands from one lock",
            href: "/blogs/homesrus-530-variants",
          },
          {
            label: "Composer",
            description: "Layers you can still edit",
            href: STUDIO_APP_URL,
            external: true,
          },
          {
            label: "Score",
            description: "Predicted performance, pre-spend",
            href: "/learn/predictive-creative-scoring",
          },
          {
            label: "URL-to-Video",
            description: "A product page to a cut",
            href: STUDIO_APP_URL,
            external: true,
          },
          {
            label: "Product staging",
            description: "Shots without a shoot",
            href: STUDIO_APP_URL,
            external: true,
          },
          {
            label: "Launch & Track",
            description: "Publish and measure",
            href: STUDIO_APP_URL,
            external: true,
          },
        ],
      },
    ],
    banner: {
      label: "Paid media, live in Doha — 10.4M impressions. Read the case study",
      href: "/blogs/mcdonalds-qatar-live-dooh",
    },
  },
  {
    id: "resources",
    trigger: "Resources",
    title: "From the studio",
    description:
      "Case studies, definitions, and the writing behind how the work actually ships.",
    columns: [
      {
        heading: "Library",
        links: [
          {
            label: "Blogs",
            description: "Stories from the studio",
            href: "/blogs",
          },
          {
            label: "Learn",
            description: "The terms, defined",
            href: "/learn",
          },
          {
            label: "Docs",
            description: "Guides and setup",
            href: "/docs",
          },
          {
            label: "Brand kit",
            description: "Logos and marks",
            href: "/brand",
          },
        ],
      },
      {
        heading: "Proof",
        links: [
          {
            label: "What ElarisLabs is",
            description: "Not model access — the rest of it",
            href: "/blogs/what-elarislabs-is",
          },
          {
            label: "McDonald's Qatar",
            description: "Weather-reactive DOOH in Doha",
            href: "/blogs/mcdonalds-qatar-live-dooh",
          },
          {
            label: "HomesRus",
            description: "530 ads from one approved master",
            href: "/blogs/homesrus-530-variants",
          },
          {
            label: "Arabic & RTL",
            description: "Mirrored layouts, not a flip",
            href: "/arabic-rtl-ad-creative",
          },
          {
            label: "Model testing",
            description: "Seedance 2.5 vs MiniMax H3",
            href: "/blogs/seedance-2-5-vs-minimax-h3",
          },
          {
            label: "Tool comparison",
            description: "Best AI ad tools for Arabic, 2026",
            href: "/blogs/best-ai-ad-tools-arabic-rtl-2026",
          },
        ],
      },
    ],
    banner: {
      label: "What ElarisLabs actually is — 9 min read",
      href: "/blogs/what-elarislabs-is",
    },
  },
];

export const TOP_LINKS = [
  { label: "Blogs", href: "/blogs" },
  { label: "Pricing", href: "/pricing" },
] as const;

export function linkIsActive(href: string, pathname: string): boolean {
  if (href.startsWith("http")) return false;
  const path = href.split("#")[0] || "/";
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}
