import type { BlogPost } from "@/types/blog";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "seedance-2-5-vs-minimax-h3",
    title: "Seedance 2.5 vs MiniMax H3: One Shared Prompt",
    excerpt:
      "Two frontier video models launched the same day. We read both spec sheets, compared features, vendors and pricing, then ran one stress-test prompt through both, graded on eight axes.",
    category: "Model Testing",
    readTime: "11 min read",
    date: "11 August, 2026",
    author: "ElarisLabs",
    href: "/blogs/seedance-2-5-vs-minimax-h3",
    image: "/blogs/seedance-2-5-vs-minimax-h3/cover.jpg",
    imageAlt:
      "Seedance 2.5 vs MiniMax H3: one prompt run through two frontier AI video models, side by side",
  },
  {
    slug: "mcdonalds-qatar-live-dooh",
    title: "The Billboard That Knew How Hot It Was",
    excerpt:
      "How ElarisLabs turned a single PSD into a live, weather-reactive DOOH campaign for McDonald's Qatar. Taste the Mixperience, running across Doha.",
    category: "Case Study",
    readTime: "7 min read",
    date: "July 2026",
    author: "ElarisLabs",
    href: "/blogs/mcdonalds-qatar-live-dooh",
    image: "/blogs/mcdonalds-qatar-live-dooh/cover.jpg",
    imageAlt:
      "Live weather-reactive DOOH for McDonald's Qatar: temperature-driven Sprite billboard in Doha",
  },
  {
    slug: "elarislabs-marketing-journey",
    title: "Your whole marketing journey, in one place.",
    excerpt:
      "ElarisLabs is the AI-native creative OS for brands. Onboard from a URL, build on an infinite canvas, generate at scale, edit video, publish, and learn. One continuous loop.",
    category: "Inside ElarisLabs",
    readTime: "12 min read",
    date: "2026",
    author: "ElarisLabs",
    href: "/blogs/elarislabs-marketing-journey",
    image: "/blogs/elarislabs-marketing-journey/what-is-elarislabs.png",
    imageAlt:
      "ElarisLabs marketing journey: smarter creative, stronger brands, generate, publish, and learn in one loop",
  },
  {
    slug: "elaris-scrapegraph",
    title: "One URL in. A whole brand out.",
    excerpt:
      "How ElarisLabs uses ScrapeGraph to turn a single web address into a production-ready brand profile, so onboarding and URL-to-video start in seconds.",
    category: "Inside ElarisLabs",
    readTime: "8 min read",
    date: "2026",
    author: "ElarisLabs Engineering",
    href: "/blogs/elaris-scrapegraph",
    image: "/landing/images/scrape.png",
    imageAlt: "ElarisLabs x ScrapeGraph AI: one URL in, full brand assets out",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== slug).slice(0, limit);
}
