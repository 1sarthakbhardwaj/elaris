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
      url: `${SITE_URL}/blogs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blogs/mcdonalds-qatar-live-dooh`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.68,
    },
    {
      url: `${SITE_URL}/blogs/elarislabs-marketing-journey`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${SITE_URL}/blogs/elaris-scrapegraph`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/mcp`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/docs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/docs/getting-started/welcome`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/docs/getting-started/quickstart`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/docs/connect/mcp-overview`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/docs/connect/setup`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/docs/studio/overview`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
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
