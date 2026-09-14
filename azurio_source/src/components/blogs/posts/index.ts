import type { ComponentType } from "react";
import type { BlogSlug } from "@/types/blog";
import ElarisScrapegraph from "@/components/blogs/posts/ElarisScrapegraph";
import MarketingJourney from "@/components/blogs/posts/MarketingJourney";
import McdonaldsQatar from "@/components/blogs/posts/McdonaldsQatar";
import SeedanceVsMinimax from "@/components/blogs/posts/SeedanceVsMinimax";

export function getPostBody(slug: BlogSlug): ComponentType {
  switch (slug) {
    case "mcdonalds-qatar-live-dooh":
      return McdonaldsQatar;
    case "seedance-2-5-vs-minimax-h3":
      return SeedanceVsMinimax;
    case "elaris-scrapegraph":
      return ElarisScrapegraph;
    case "elarislabs-marketing-journey":
      return MarketingJourney;
    default: {
      const _never: never = slug;
      throw new Error(`Unhandled blog slug: ${_never}`);
    }
  }
}
