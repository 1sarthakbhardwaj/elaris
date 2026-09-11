import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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
      url: `${SITE_URL}/arabic-rtl-ad-creative`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/learn/rtl-ad-localisation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${SITE_URL}/learn`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/learn/creative-automation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${SITE_URL}/learn/brand-memory`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.68,
    },
    {
      url: `${SITE_URL}/learn/predictive-creative-scoring`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.62,
    },
    {
      url: `${SITE_URL}/blogs/best-ai-ad-tools-arabic-rtl-2026`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${SITE_URL}/blogs/homesrus-530-variants`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.68,
    },
    {
      url: `${SITE_URL}/brand`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/blogs/seedance-2-5-vs-minimax-h3`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.69,
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
