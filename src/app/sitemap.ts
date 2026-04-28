import type { MetadataRoute } from "next";

const SITE_URL = "https://elarislabs.ai";

/**
 * Dynamic sitemap — served at /sitemap.xml.
 *
 * `lastModified` is computed at build time, so every deploy refreshes the
 * signal crawlers use to decide what to re-crawl. Keep this list in sync
 * with the routes under `src/app/`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
