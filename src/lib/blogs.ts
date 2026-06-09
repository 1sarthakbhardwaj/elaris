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
