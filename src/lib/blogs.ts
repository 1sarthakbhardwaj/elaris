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
