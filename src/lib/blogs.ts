export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-ai-ad-tools-arabic-rtl-2026",
    title: "Best AI Ad Creative Tools for Arabic and RTL, 2026",
    excerpt:
      "Ten tools compared on the one thing the category rarely tests: what happens to the layout when the campaign moves right to left. 2026 pricing, best-for guidance, and an honest note on where each one beats us.",
    category: "Comparison",
    readTime: "12 min read",
    href: "/blogs/best-ai-ad-tools-arabic-rtl-2026",
    image: "/arabic-rtl/mcd-arabic-master.png",
    imageAlt:
      "Comparison of AI ad creative tools on Arabic and right-to-left layout support, 2026",
  },
  {
    slug: "homesrus-530-variants",
    title: "530 Finished Ads From One Approved Concept",
    excerpt:
      "HomesRus had no shortage of ideas. They had a reformatting problem. How one approved master became 530+ finished ads across 9:16 social and 6:5 programmatic in under four weeks, brand-locked throughout.",
    category: "Case Study",
    readTime: "6 min read",
    href: "/blogs/homesrus-530-variants",
    image: "/landing/images/homes.webp",
    imageAlt:
      "HomesRus retail campaign: one approved master fanned into 530 finished ad variants on ElarisLabs",
  },
  {
    slug: "seedance-2-5-vs-minimax-h3",
    title: "Seedance 2.5 vs MiniMax H3: One Shared Prompt",
    excerpt:
      "Two frontier video models launched the same day. We read both spec sheets, compared features, vendors and pricing, then ran one stress-test prompt through both — graded on eight axes.",
    category: "Model Testing",
    readTime: "11 min read",
    href: "/blogs/seedance-2-5-vs-minimax-h3",
    image: "/blogs/seedance-2-5-vs-minimax-h3/cover.jpg",
    imageAlt:
      "Seedance 2.5 vs MiniMax H3: one prompt run through two frontier AI video models, side by side",
  },
  {
    slug: "mcdonalds-qatar-live-dooh",
    title: "The Billboard That Knew How Hot It Was",
    excerpt:
      "How ElarisLabs turned a single PSD into a live, weather-reactive DOOH campaign for McDonald's Qatar — Taste the Mixperience, running across Doha.",
    category: "Case Study",
    readTime: "7 min read",
    href: "/blogs/mcdonalds-qatar-live-dooh",
    image: "/blogs/mcdonalds-qatar-live-dooh/cover.jpg",
    imageAlt:
      "Live weather-reactive DOOH for McDonald's Qatar: temperature-driven Sprite billboard in Doha",
  },
  {
    slug: "elarislabs-marketing-journey",
    title: "Your whole marketing journey, in one place.",
    excerpt:
      "ElarisLabs is the AI-native creative OS for brands — onboard from a URL, build on an infinite canvas, generate at scale, edit video, publish, and learn. One continuous loop.",
    category: "Inside ElarisLabs",
    readTime: "12 min read",
    href: "/blogs/elarislabs-marketing-journey",
    image: "/blogs/elarislabs-marketing-journey/what-is-elarislabs.png",
    imageAlt:
      "ElarisLabs marketing journey: smarter creative, stronger brands — generate, publish, and learn in one loop",
  },
  {
    slug: "elaris-scrapegraph",
    title: "One URL in. A whole brand out.",
    excerpt:
      "How ElarisLabs uses ScrapeGraph to turn a single web address into a production-ready brand profile, so onboarding and URL-to-video start in seconds.",
    category: "Inside ElarisLabs",
    readTime: "8 min read",
    href: "/blogs/elaris-scrapegraph",
    image: "/landing/images/scrape.png",
    imageAlt: "ElarisLabs x ScrapeGraph AI: one URL in, full brand assets out",
  },
];
