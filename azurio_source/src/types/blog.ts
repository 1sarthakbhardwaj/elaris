export type BlogSlug =
  | "seedance-2-5-vs-minimax-h3"
  | "mcdonalds-qatar-live-dooh"
  | "elarislabs-marketing-journey"
  | "elaris-scrapegraph";

export type BlogPost = {
  slug: BlogSlug;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  href: string;
  image: string;
  imageAlt: string;
};
