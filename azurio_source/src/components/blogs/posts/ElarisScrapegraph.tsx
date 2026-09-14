import ArticleTable from "@/components/blogs/blocks/ArticleTable";
import Callout from "@/components/blogs/blocks/Callout";
import CodePanel from "@/components/blogs/blocks/CodePanel";
import NumberedFrames from "@/components/blogs/blocks/NumberedFrames";
import SideBySide from "@/components/blogs/blocks/SideBySide";
import StatRow from "@/components/blogs/blocks/StatRow";
import TableOfContents from "@/components/blogs/blocks/TableOfContents";
import { STUDIO_APP_URL } from "@/lib/site";

const SCRAPE_CALL = `await sgai.scrape({
  url: normalizedUrl,
  formats: [
    { type: "branding" },
    { type: "images" },
    { type: "json", prompt: "...tagline...", schema: { ... } },
  ],
  fetchConfig: { mode: "auto", timeout: 30000 },
});`;

const EXTRACT_CALL = `await sgai.extract({
  url: normalizedUrl,
  prompt: \`Extract product name, price, hi-res images,
           videos, brand, key features...\`,
  schema: { type: "object", required: ["product_name"] },
  fetchConfig: {
    mode: "js",
    stealth: true,
    scrolls: 3,
    timeout: 30000,
  },
});`;

const NORMALISED_OUTPUT = `{
  "success": true,
  "data": {
    "name": "Sony WH-1000XM5 Headphones",
    "brand_name": "Sony",
    "price": 329.99,
    "currency": "USD",
    "images": [
      ".../I/61abc._SL1500_.jpg"
    ],
    "key_features": [
      "Industry-leading noise cancellation",
      "Up to 30-hour battery life",
      "Crystal-clear hands-free calling"
    ]
  }
}`;

const PRODUCT_RESPONSE = `{
  "success": true,
  "data": {
    "name": "Product Name",
    "price": 29.99,
    "currency": "USD",
    "images": ["https://..."],
    "videos": ["https://..."],
    "brand_name": "Brand",
    "key_features": ["feature1", "feature2"]
  }
}`;

export default function ElarisScrapegraph() {
  return (
    <>
      <div className="mxd-article__block">
        <p className="mxd-article__excerpt">
          ElarisLabs is the AI-native creative operating system for brands.
          Here is how we make the very first step feel instant, turning a
          single web address into a production-ready brand profile, with
          ScrapeGraph as the engine under the hood.
        </p>
        <p className="mxd-article__normal">
          ElarisLabs generates on-brand creative across image, video and audio,
          and publishes it straight to Meta, TikTok and Snapchat. At its center
          is Iris, a conversational AI agent that takes a brand brief and
          returns channel-ready creative in minutes, not weeks.
        </p>
      </div>
      <TableOfContents
        items={[
          { id: "chapter-01", label: "The blank form problem" },
          { id: "chapter-02", label: "One live page in" },
          { id: "chapter-03", label: "Architecture" },
          { id: "chapter-04", label: "Brand onboarding" },
          { id: "chapter-05", label: "URL to Video" },
          { id: "chapter-06", label: "Two tuned strategies" },
        ]}
      />
      <div id="chapter-01" className="mxd-article__block">
        <h3>All that power is useless behind a blank form.</h3>
        <p className="mxd-article__normal">
          Everything above only matters if a new brand can get started in
          seconds. The last thing someone joining ElarisLabs should do is spend
          twenty minutes uploading logos, eyedropping hex codes and dragging in
          product photos. And when they want a product video, they should not
          re-type everything already sitting on an Amazon or Shopify page.
        </p>
        <p className="mxd-article__normal">
          So to make onboarding instant, we reach for ScrapeGraph, wired in
          through the scrapegraph-js v2 SDK behind a shared client, so the rest
          of ElarisLabs never thinks about scraping at all.
        </p>
      </div>
      <Callout>
        Brand onboarding: colors, fonts, logo, photos and AI-inferred
        personality, pre-filled in under 30 seconds. URL to Video: extract name,
        price, hi-res media and features from real merchant pages, then
        generate.
      </Callout>
      <div id="chapter-02" className="mxd-article__block">
        <h3>One live page in. Structured data out.</h3>
        <p className="mxd-article__normal">
          Here is the whole idea on a single real product page. On the left, the
          messy, JavaScript-rendered, bot-protected page a shopper sees. On the
          right, exactly what ElarisLabs receives back from one extract() call,
          clean enough to drop straight into a video.
        </p>
      </div>
      <SideBySide
        left={
          <>
            <p className="t-caption t-muted">The live page</p>
            <p className="t-medium">amazon.com/dp/B09XS7JWHH</p>
            <p className="mxd-article__normal">
              Sony WH-1000XM5 Wireless Noise-Cancelling Headphones. $329.99
              struck through from $399. JS-rendered, lazy-loaded gallery,
              bot-protected, thumbnail URLs.
            </p>
          </>
        }
        right={
          <CodePanel title="normalised output" code={NORMALISED_OUTPUT} />
        }
      />
      <div id="chapter-03" className="mxd-article__block">
        <h3>Two flows. One SDK. Live data flowing through the core.</h3>
        <p className="mxd-article__normal">
          Both flows converge on a single ScrapeGraph client, but they call
          different primitives tuned to their target pages. Watch the data move
          from entry point, through the API, and back out to where ElarisLabs
          stores or renders it.
        </p>
      </div>
      <div className="mxd-article__block block-image">
        <div className="block-image__container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/blogs/elaris-scrapegraph/diagrams/architecture.svg"
            alt="ElarisLabs ScrapeGraph architecture: scrape() onboarding and extract() URL-to-video converging on one client"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <StatRow
        stats={[
          { value: "<30s", label: "URL to a production-ready brand context" },
          { value: "12", label: "Brand photos auto-collected and deduped" },
          { value: "5", label: "Creative surfaces brand-locked downstream" },
          { value: "3", label: "Formats fetched in a single API call" },
        ]}
      />
      <div id="chapter-04" className="mxd-article__block">
        <h3>Paste a URL, get a brand profile.</h3>
        <p className="mxd-article__normal">
          On the onboarding page, step zero is a website field. The user pastes
          qdb.qa or nike.com. ElarisLabs runs a scanning animation while
          ScrapeGraph works, then advances to a review form with everything
          pre-filled. If scraping fails, the user still proceeds to manual
          entry. Scraping is an accelerator, not a gate.
        </p>
        <p className="mxd-article__normal">
          The server action scrapeBrandFromWebsite() authenticates the user via
          Supabase, calls scrapeBrandData(url), and returns a typed
          ScrapedBrandData object. One HTTP call asks ScrapeGraph for three
          formats at once.
        </p>
      </div>
      <CodePanel title="lib/scrapegraph/client.ts" code={SCRAPE_CALL} />
      <NumberedFrames
        frames={[
          {
            title: "Native brand intelligence",
            body: "Colors, typography, logo, favicon, OG image, spacing, framework hints, plus AI-inferred tone, energy and target audience.",
          },
          {
            title: "Photo gallery",
            body: "Raw page images populate the brand photo gallery, deduped and capped at 12 to keep the picker clean.",
          },
          {
            title: "Focused tagline pull",
            body: "A tightly-scoped LLM extraction for the homepage slogan only, with a strict schema so the model cannot hallucinate extra fields.",
          },
        ]}
      />
      <div className="mxd-article__block">
        <h3>Normalising v2 data into ElarisLabs&apos;s shape</h3>
        <p className="mxd-article__normal">
          ScrapeGraph returns v2-shaped data. The client maps it into the
          legacy ScrapedBranding interface, validating and re-shaping along the
          way. If the branding format fails entirely, ElarisLabs returns
          success: false, because the review UI depends on those fields.
        </p>
      </div>
      <ArticleTable
        headers={["ScrapeGraph output", "ElarisLabs field", "Processing"]}
        rows={[
          ["colors.primary / accent", "colors object", "Hex validation (#RRGGBB only)"],
          ["typography.heading / mono", "fonts[] with roles", "Deduped: heading, body, mono"],
          ["typography sizes", "typography (legacy)", "Rebuild fontStacks, fontSizes"],
          ["images.logo", "logo_url", "HTTP(S) URLs only"],
          ["ogImage + results.images", "brand_photos[]", "Deduped, max 12"],
          ["personality", "brand_personality", "tone, energy, targetAudience"],
          ["results.json.tagline", "tagline", "From dedicated json format"],
        ]}
      />
      <Callout>
        Brand creation is free, with no credit deduction. Scraping lives in the
        acquisition funnel, not behind a paywall.
      </Callout>
      <div id="chapter-05" className="mxd-article__block">
        <h3>From a product link to a finished video.</h3>
        <p className="mxd-article__normal">
          URL to Video lives at /url-video, orchestrated by UrlVideoWizard.tsx.
          ScrapeGraph powers step one entirely and seeds step two. Everything
          after it is the ElarisLabs generation and rendering stack.
        </p>
      </div>
      <NumberedFrames
        frames={[
          {
            title: "URL input",
            body: "Paste a product page URL, or enter details manually. ScrapeGraph.",
          },
          {
            title: "Media review",
            body: "Confirm scraped images, videos, name, price, features.",
          },
          {
            title: "Video settings",
            body: "Duration, aspect ratio, language, target audience.",
          },
          {
            title: "Script selection",
            body: "LLM-generated script options from the scraped data.",
          },
          {
            title: "Voiceover + preview",
            body: "ElevenLabs TTS with word-level captions.",
          },
          {
            title: "Render",
            body: "Remotion template render to a final MP4.",
          },
        ]}
      />
      <div className="mxd-article__block">
        <h4>A heavier fetch, on purpose</h4>
        <p className="mxd-article__normal">
          E-commerce product pages are JavaScript-rendered, lazy-loaded and
          bot-protected. So unlike onboarding&apos;s lightweight scrape, product
          extraction uses a single extract() call with a detailed prompt, a
          schema requiring only product_name, and a much heavier fetch config.
        </p>
      </div>
      <CodePanel title="app/api/product/scrape/route.ts" code={EXTRACT_CALL} />
      <div className="mxd-article__block">
        <p className="mxd-article__normal">
          The prompt bakes in platform-specific instructions for Amazon,
          Flipkart, Shopify and Shopee, covering thumbnail-vs-full-size URL
          patterns, gallery containers, data-old-hires, srcset. Images are then
          run through upgradeImageUrl(), rewriting known CDN thumbnail patterns
          into their full-resolution equivalents. Amazon ._SX38_ becomes
          ._SL1500_. Price strings are cleaned locale-aware (₹ to INR, € to
          EUR).
        </p>
      </div>
      <CodePanel
        title="response · /api/product/scrape"
        code={PRODUCT_RESPONSE}
      />
      <div id="chapter-06" className="mxd-article__block">
        <h3>Same vendor, two tuned strategies.</h3>
        <p className="mxd-article__normal">
          One SDK and API key serve both flows, but every dimension is tuned to
          its target pages.
        </p>
      </div>
      <ArticleTable
        headers={["Dimension", "Brand onboarding", "URL to Video"]}
        rows={[
          ["ScrapeGraph API", "scrape()", "extract()"],
          [
            "Primary formats",
            "branding · images · json",
            "structured JSON via prompt + schema",
          ],
          [
            "Fetch mode",
            "auto (lightweight)",
            "js + stealth + 3 scrolls (heavy)",
          ],
          [
            "Target pages",
            "Marketing / corporate sites",
            "E-commerce product pages",
          ],
          [
            "Key outputs",
            "Logo, colors, fonts, personality, photos",
            "Name, price, hi-res images, videos, features",
          ],
          [
            "Post-processing",
            "Hex validation, font roles, photo dedup",
            "CDN URL upgrading, price parsing, dedup",
          ],
          ["Persistence", "brands table", "In-memory wizard state to render"],
          ["Fallback", "Manual form entry", "Manual product entry"],
        ]}
      />
      <div className="mxd-article__block">
        <h3>Every great creative starts with knowing the brand.</h3>
        <p className="mxd-article__normal">
          That is where ElarisLabs begins, and ScrapeGraph is the engine that
          makes the first mile instant. Paste a URL, and within seconds the
          platform knows your colors, fonts, voice and products, ready to
          generate on-brand creative across image, video and audio. Open Studio
          at{" "}
          <a href={STUDIO_APP_URL} target="_blank" rel="noopener noreferrer">
            studio.elarislabs.ai
          </a>
          .
        </p>
      </div>
    </>
  );
}
