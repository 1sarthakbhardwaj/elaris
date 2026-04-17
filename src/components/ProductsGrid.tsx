"use client";

import { useReveal } from "./useReveal";
import StudioMiniCanvas from "./StudioMiniCanvas";
import VideoStudioMini from "./previews/VideoStudioMini";
import CampaignWizardMini from "./previews/CampaignWizardMini";
import UrlToVideoMini from "./previews/UrlToVideoMini";
import ProductStagingMini from "./previews/ProductStagingMini";

type Product = {
  num: string;
  title: string;
  tagline: string;
  body: string;
  route: string;
  preview: "studio" | "video" | "campaign" | "url" | "staging";
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    num: "01",
    title: "Creative Studio",
    tagline: "Node canvas",
    body: "Wire up image, video, and audio nodes into repeatable workflows. The visual brain of ElarisLabs.",
    route: "/studio",
    preview: "studio",
    featured: true,
  },
  {
    num: "02",
    title: "AI Video Studio",
    tagline: "Brief to final cut",
    body: "Brief, storyboard, generate, assemble, export — all in one stepped flow. 11 frontier video models on tap.",
    route: "/video-studio",
    preview: "video",
  },
  {
    num: "03",
    title: "Campaign Wizard",
    tagline: "On-brand at scale",
    body: "Moodboard, direction, variants, copy. Guided pipeline that turns a brief into a campaign.",
    route: "/campaigns/new",
    preview: "campaign",
  },
  {
    num: "04",
    title: "URL-to-Video",
    tagline: "One link, one ad",
    body: "Paste a product URL — we scrape, script, voice, and render a 30-second ad with optional lipsync overlay.",
    route: "/url-video",
    preview: "url",
  },
  {
    num: "05",
    title: "Product Staging",
    tagline: "Infinite environments",
    body: "Upload a product shot. Get lifestyle stages, seasonal variants, and on-brand environments in seconds.",
    route: "/product-staging",
    preview: "staging",
  },
];

function MiniPreview({ type }: { type: Product["preview"] }) {
  if (type === "studio") return <StudioMiniCanvas />;
  if (type === "video") return <VideoStudioMini />;
  if (type === "campaign") return <CampaignWizardMini />;
  if (type === "url") return <UrlToVideoMini />;
  return <ProductStagingMini />;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [ref, shown] = useReveal<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      className={`node-card group glass rounded-2xl overflow-hidden hover-lift ${
        product.featured ? "md:col-span-2 lg:col-span-2" : ""
      } ${shown ? "anim-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Preview zone — sits outside the anchor so interactive children (React Flow) own their pointer events */}
      <div
        className={`${product.preview === "studio" ? "studio-mini " : ""}relative bg-ink border-b border-white/[0.08] ${
          product.featured ? "aspect-[16/7]" : "aspect-[16/9]"
        } overflow-hidden`}
      >
        <MiniPreview type={product.preview} />
      </div>

      {/* Body zone — the only clickable region that navigates */}
      <a href={product.route} className="block p-6">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-display text-2xl text-chrome/40">{product.num}</span>
          <span className="text-[10px] text-mono text-halo uppercase tracking-[0.2em]">
            {product.tagline}
          </span>
        </div>
        <h3 className="text-display text-2xl md:text-3xl mb-2 reveal-bar inline-block text-bone group-hover:text-lume transition-colors">
          {product.title}
        </h3>
        <p className="text-chrome text-sm leading-relaxed mb-5">{product.body}</p>

        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <span className="text-[10px] text-mono text-chrome">{product.route}</span>
          <span className="flex items-center gap-1 text-xs text-bone group-hover:text-halo transition-colors">
            Explore
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
}

export default function ProductsGrid() {
  const [ref, shown] = useReveal<HTMLDivElement>(0.1);

  return (
    <section
      id="products"
      className="scroll-mt-24 py-24 md:py-32 px-6 md:px-10 relative border-t border-white/[0.06]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(109,166,217,0.08) 0%, transparent 55%)",
        }}
      />
      <div className="relative max-w-[1400px] mx-auto">
        <div ref={ref} className={`flex items-end justify-between flex-wrap gap-4 mb-14 ${shown ? "anim-fade-up" : "opacity-0"}`}>
          <div className="min-w-0">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.25em] mb-6">
              ◉ Five products
            </p>
            <h2
              className="text-display text-bone whitespace-nowrap leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(1.35rem, 5.2vw, 4.25rem)" }}
            >
              The full stack, <span className="italic shine-plasma">one login.</span>
            </h2>
          </div>
          <p className="text-chrome text-sm text-mono max-w-xs">
            Every surface shares the same canvas, the same brand pack, and the same team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.num} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
