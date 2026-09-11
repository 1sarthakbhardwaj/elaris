import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CALENDLY_BOOKING_URL, SITE_URL, STUDIO_APP_URL } from "@/lib/site";

const PAGE_PATH = "/learn/brand-memory";
const OG_IMAGE = `${SITE_URL}/og/brand-memory.jpg`;
const UPDATED = "2026-09-11";

const TITLE = "Deterministic Brand Memory: Stop AI Drifting Off-Brand | ElarisLabs";
const DESCRIPTION =
  "Deterministic brand memory is a machine-readable definition of a brand applied as a constraint at composition time, not as a suggestion in a prompt. Why generative tools drift, what has to be locked, and what stays generative.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "brand memory",
    "deterministic brand memory",
    "AI creative tool with brand compliance",
    "stop AI drifting off-brand",
    "node-based AI creative tools",
    "brand governance AI creative",
    "brand kit enforcement",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: "Deterministic brand memory: constraints, not suggestions",
    description:
      "Generative tools re-interpret a brand on every run. Brand memory makes the brand a constraint the composition step cannot violate.",
    images: [{ url: OG_IMAGE }],
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deterministic brand memory",
    description:
      "Why AI creative drifts off-brand, and what it takes to make the brand a constraint rather than a prompt.",
    images: [OG_IMAGE],
  },
};

/* ---------------------------------------------------------------- content */

const LOCKED: { item: string; why: string }[] = [
  { item: "Logo lockup and clear space", why: "A regenerated logo is a redrawn logo. It is placed, never generated." },
  { item: "Palette, by exact value", why: "Near-enough brand colour is off-brand colour, and it compounds across a set." },
  { item: "Type hierarchy and the Arabic face", why: "Weight, size ratio and the right script face, so every language matches the approved master." },
  { item: "Grid, margins and safe zones", why: "The composition rules that survive a change of frame." },
  { item: "Legal and mandatory copy", why: "Disclaimers, terms marks and market-specific lines that must appear verbatim." },
];

const GENERATIVE: { item: string; why: string }[] = [
  { item: "Backgrounds and scene", why: "Where model quality actually earns its keep." },
  { item: "Product staging", why: "Per SKU, against the same approved composition." },
  { item: "Headline and body variants", why: "Within the tone rules, for testing." },
  { item: "Motion and pacing", why: "Within the brand's timing and transition rules." },
];

const CONFUSED: { title: string; body: string }[] = [
  {
    title: "Not a PDF brand guideline",
    body: "A guideline is written for humans to interpret. A generative system cannot read intent out of a PDF, so the same document produces a different result every run. Brand memory is the same information in a form the composition step can enforce.",
  },
  {
    title: "Not a prompt library",
    body: "Prompts are suggestions with a probability attached. Repeat the identical prompt and the output moves. Anything that must be identical across 500 assets cannot live in the prompt.",
  },
  {
    title: "Not a fine-tune",
    body: "Training on brand assets shifts the average output towards the brand. It does not guarantee the logo is the logo. Fine-tuning changes the odds; brand memory removes the question from the generative step entirely.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is deterministic brand memory?",
    a: "Deterministic brand memory is a machine-readable definition of a brand, covering logo lockups, exact palette values, type hierarchy, grid, safe zones and mandatory copy, that an AI creative system applies as a constraint at composition time rather than as a suggestion inside a prompt. Because the constraint is applied after generation, the same brand elements come out identical on every asset. ElarisLabs uses it to hold a brand fixed across hundreds of variants and across languages.",
  },
  {
    q: "How do I stop AI creative drifting off-brand?",
    a: "Move the brand out of the prompt and into the composition step. Generation is probabilistic, so anything you ask a model to reproduce, such as a logo, a specific hex value or a type hierarchy, will vary run to run. The fix is to let the model generate only what is allowed to vary, such as backgrounds, staging and scene, and to place the fixed brand elements deterministically on top under rules the system cannot violate.",
  },
  {
    q: "Why do generative tools produce a slightly different logo every time?",
    a: "Because they are drawing it, not placing it. A diffusion model reconstructs a logo from learned statistics, so proportions, spacing and letterforms shift on each run, and at small sizes the drift is obvious. Any system that treats the logo as a placed asset with defined clear space rather than as something to generate avoids the problem entirely.",
  },
  {
    q: "What should stay generative?",
    a: "Everything whose variation is the point: backgrounds, scene composition, product staging per SKU, copy variants inside the tone rules, and motion within the brand's timing rules. Locking those removes the reason to use a generative system at all. The line sits between what the brand team approves once and what the campaign is meant to test.",
  },
  {
    q: "Does brand memory hold across languages?",
    a: "It has to, or the localised campaign becomes a second approval cycle. The brand kit carries a script-appropriate typeface for each language it supports, so an Arabic version inherits the approved hierarchy rather than falling back to a default font. The mirrored layout still has to follow the brand grid and clear space rules, which is the part covered in RTL ad localisation.",
  },
  {
    q: "How is this different from an AI tool that says it supports brand kits?",
    a: "Ask where the brand kit is applied. If it is fed into the prompt or used to bias generation, the output is a likeness that varies. If it is applied as a constraint at composition time, with exact values and placement rules, the output is identical every run. The first is a style preference, the second is governance, and only the second survives a legal review at volume.",
  },
];

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ElarisLabs", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}/learn` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Deterministic brand memory",
            item: `${SITE_URL}${PAGE_PATH}`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_PATH}#article`,
        headline: "Deterministic brand memory: constraints, not suggestions",
        description: DESCRIPTION,
        image: OG_IMAGE,
        mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
        inLanguage: "en",
        datePublished: UPDATED,
        dateModified: UPDATED,
        author: { "@type": "Organization", name: "ElarisLabs", url: SITE_URL },
        publisher: { "@type": "Organization", name: "ElarisLabs", url: SITE_URL },
        about: [
          { "@type": "Thing", name: "Brand governance" },
          { "@type": "Thing", name: "Generative AI" },
          { "@type": "Thing", name: "Advertising production" },
        ],
      },
      {
        "@type": "DefinedTerm",
        "@id": `${SITE_URL}${PAGE_PATH}#term`,
        name: "Deterministic brand memory",
        description:
          "A machine-readable definition of a brand, covering logo lockups, exact palette values, type hierarchy, grid, safe zones and mandatory copy, applied as a constraint at composition time rather than as a suggestion in a prompt, so brand elements are identical on every generated asset.",
        inDefinedTermSet: `${SITE_URL}/learn`,
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${PAGE_PATH}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

/* -------------------------------------------------------------- diagram */

function DriftDiagram() {
  const accent = "#A8CDEF";
  const warn = "#E4A76B";

  return (
    <figure className="glass rounded-2xl p-6 md:p-8 text-silver">
      <svg
        viewBox="0 0 900 330"
        role="img"
        aria-label="Top row: a prompt containing brand rules goes into a model and produces three outputs that each drift. Bottom row: the model generates only the scene, then brand memory places fixed elements, producing three identical outputs."
        className="w-full h-auto"
        style={{ maxWidth: "100%" }}
      >
        <defs>
          <marker id="bm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <polygon points="0,0 10,5 0,10" fill="currentColor" />
          </marker>
          <marker id="bm-arrow-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <polygon points="0,0 10,5 0,10" fill={accent} />
          </marker>
        </defs>

        {/* ---- row 1: brand in the prompt ---- */}
        <text x="8" y="20" fontSize="11.5" fill={warn} letterSpacing="0.08em">BRAND IN THE PROMPT</text>

        <rect x="8" y="36" width="168" height="60" rx="9" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="92" y="62" textAnchor="middle" fontSize="12.5" fill="currentColor">Prompt</text>
        <text x="92" y="80" textAnchor="middle" fontSize="10.5" fill="currentColor" opacity="0.75">&quot;use our blue, our logo&quot;</text>

        <line x1="176" y1="66" x2="250" y2="66" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#bm-arrow)" />

        <rect x="250" y="36" width="130" height="60" rx="9" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="315" y="72" textAnchor="middle" fontSize="12.5" fill="currentColor">Model</text>

        {[0, 1, 2].map((i) => (
          <g key={`drift-${i}`}>
            <path d={`M380 66 C 440 66, 460 ${34 + i * 34} , 540 ${34 + i * 34}`} fill="none" stroke={warn} strokeWidth="1.1" markerEnd="url(#bm-arrow)" opacity="0.8" />
            <rect x="544" y={20 + i * 34} width="118" height="28" rx="6" fill="none" stroke={warn} strokeWidth="1" opacity="0.85" />
            <text x="603" y={39 + i * 34} textAnchor="middle" fontSize="11" fill={warn}>run {i + 1}</text>
          </g>
        ))}
        <text x="690" y="66" fontSize="11.5" fill={warn}>three different blues,</text>
        <text x="690" y="84" fontSize="11.5" fill={warn}>three redrawn logos</text>

        {/* divider */}
        <line x1="8" y1="150" x2="892" y2="150" stroke="currentColor" strokeWidth="0.75" opacity="0.25" />

        {/* ---- row 2: brand at composition ---- */}
        <text x="8" y="182" fontSize="11.5" fill={accent} letterSpacing="0.08em">BRAND AT COMPOSITION</text>

        <rect x="8" y="198" width="168" height="60" rx="9" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="92" y="224" textAnchor="middle" fontSize="12.5" fill="currentColor">Prompt</text>
        <text x="92" y="242" textAnchor="middle" fontSize="10.5" fill="currentColor" opacity="0.75">scene only</text>

        <line x1="176" y1="228" x2="250" y2="228" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#bm-arrow)" />

        <rect x="250" y="198" width="130" height="60" rx="9" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <text x="315" y="234" textAnchor="middle" fontSize="12.5" fill="currentColor">Model</text>

        <line x1="380" y1="228" x2="452" y2="228" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#bm-arrow)" />

        <rect x="452" y="188" width="160" height="80" rx="9" fill="none" stroke={accent} strokeWidth="1.5" />
        <text x="532" y="216" textAnchor="middle" fontSize="12.5" fill={accent}>Brand memory</text>
        <text x="532" y="234" textAnchor="middle" fontSize="10.5" fill="currentColor" opacity="0.8">logo placed, palette</text>
        <text x="532" y="250" textAnchor="middle" fontSize="10.5" fill="currentColor" opacity="0.8">pinned, type locked</text>

        {[0, 1, 2].map((i) => (
          <g key={`locked-${i}`}>
            <path d={`M612 228 C 660 228, 672 ${196 + i * 34}, 720 ${196 + i * 34}`} fill="none" stroke={accent} strokeWidth="1.1" markerEnd="url(#bm-arrow-accent)" opacity="0.85" />
            <rect x="724" y={182 + i * 34} width="118" height="28" rx="6" fill="none" stroke={accent} strokeWidth="1" />
            <text x="783" y={201 + i * 34} textAnchor="middle" fontSize="11" fill={accent}>run {i + 1}</text>
          </g>
        ))}
        <text x="452" y="296" fontSize="11.5" fill={accent}>identical brand elements, every run</text>
      </svg>
      <figcaption className="text-[12.5px] text-chrome leading-relaxed mt-5 max-w-[70ch]">
        The only structural difference is where the brand enters. Ask the model for it and you get a
        likeness with variance. Apply it after generation and the variance has nowhere to land.
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------- page */

export default function BrandMemoryPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-50 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 25% 0%, rgba(109,166,217,0.16) 0%, transparent 58%)",
          }}
        />
        <div className="relative max-w-[860px] mx-auto">
          <nav aria-label="Breadcrumb" className="text-[11px] text-mono text-chrome mb-8 tracking-[0.02em]">
            <a href="/" className="hover:text-halo transition-colors">ElarisLabs</a>
            <span className="mx-2 text-steel">/</span>
            <span className="text-silver">Learn</span>
            <span className="mx-2 text-steel">/</span>
            <span className="text-silver">Brand memory</span>
          </nav>

          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-6">◉ Learn</p>
          <h1 className="text-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] tracking-tight text-bone mb-7">
            Deterministic brand memory:
            <span className="italic shine-plasma glow-plasma"> constraints, not prompts.</span>
          </h1>

          <p className="text-lg md:text-xl text-bone/80 leading-relaxed mb-6">
            Deterministic brand memory is a machine-readable definition of a brand, applied as a
            constraint at composition time rather than as a suggestion in a prompt. Logo, palette,
            type and safe zones come out identical on every asset. ElarisLabs uses it to hold a brand
            fixed across hundreds of variants and every language.
          </p>

          <p className="text-base text-chrome leading-relaxed mb-9 max-w-[66ch]">
            This page covers why generative tools drift off-brand, what has to be locked, what should
            stay generative, and how brand memory differs from a brand kit, a prompt library and a
            fine-tune.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <a href={STUDIO_APP_URL} target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-lume to-halo text-coal text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_0_35px_-8px_rgba(168,205,239,0.6)] hover:shadow-[0_0_55px_-8px_rgba(168,205,239,0.9)] hover:brightness-110 transition-all">
              Load your brand kit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="/learn/creative-automation" className="glass text-sm font-medium px-6 py-3 rounded-full text-bone hover:bg-white/5 hover:border-halo/30 transition-colors">
              How automation uses it
            </a>
          </div>

          <p className="text-[11px] text-mono text-chrome mt-8 tracking-[0.02em]">
            Last updated 11 September 2026
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[760px] mb-10">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ The problem</p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-6">
              Generative tools re-interpret a brand on every run.
            </h2>
            <p className="text-lg text-bone/75 leading-relaxed mb-5">
              Generation is probabilistic by design. That is the feature: ask for a kitchen scene ten
              times and you want ten kitchens. The same property applied to a logo gives you ten
              logos, and at ad sizes the difference between them is not subtle.
            </p>
            <p className="text-base text-chrome leading-relaxed">
              It rarely shows up on the first asset. It shows up at volume, when a brand manager lays
              200 outputs on a wall and finds four blues, three logo proportions and a headline
              hierarchy that wandered. At that point the review cost has moved from one master to
              every single file, which is the cost the tool was bought to remove.
            </p>
          </div>

          <DriftDiagram />
        </div>
      </section>

      {/* Locked vs generative */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ The line</p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              What gets locked, what stays generative.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Locking everything defeats the purpose of a generative system. The line sits between
              what the brand team approves once and what the campaign is meant to vary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-plasma rounded-2xl p-7">
              <h3 className="text-display text-lg font-semibold tracking-tight text-halo mb-5">
                Locked, by value
              </h3>
              <ul>
                {LOCKED.map((l) => (
                  <li key={l.item} className="py-3.5 border-b border-white/[0.08] last:border-0">
                    <p className="text-[15px] text-bone mb-1">{l.item}</p>
                    <p className="text-[13px] text-chrome leading-relaxed">{l.why}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-7">
              <h3 className="text-display text-lg font-semibold tracking-tight text-bone mb-5">
                Left generative
              </h3>
              <ul>
                {GENERATIVE.map((g) => (
                  <li key={g.item} className="py-3.5 border-b border-white/[0.08] last:border-0">
                    <p className="text-[15px] text-bone mb-1">{g.item}</p>
                    <p className="text-[13px] text-chrome leading-relaxed">{g.why}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Confused with */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ The boundary</p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              Three things it is not.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Most tools that claim brand support are doing one of these. Each moves the odds. None
              of them makes the output identical.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {CONFUSED.map((c) => (
              <div key={c.title} className="glass rounded-2xl p-6 hover-lift">
                <h3 className="text-display text-lg font-semibold tracking-tight text-bone mb-2.5">
                  {c.title}
                </h3>
                <p className="text-sm text-chrome leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <p className="text-base text-chrome leading-relaxed mt-10 max-w-[70ch]">
            The test for any tool: ask where the brand kit is applied. Before generation is a
            preference. After generation, at composition, is governance. Only the second one holds
            when the same master has to ship in{" "}
            <a href="/learn/rtl-ad-localisation" className="text-halo hover:underline underline-offset-4">
              Arabic and English
            </a>{" "}
            across a full{" "}
            <a href="/learn/creative-automation" className="text-halo hover:underline underline-offset-4">
              placement matrix
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-[860px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ FAQ</p>
          <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-10">
            Brand memory,
            <span className="italic shine-plasma glow-plasma"> answered.</span>
          </h2>

          <div className="border-t border-white/[0.08]">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0} className="group border-b border-white/[0.08]">
                <summary className="cursor-pointer list-none flex items-start gap-4 py-5 text-display text-[17px] md:text-lg font-medium tracking-tight text-bone hover:text-halo transition-colors">
                  <span className="flex-1">{f.q}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-1.5 text-chrome transition-transform duration-300 group-open:rotate-180 group-open:text-halo" aria-hidden>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="text-[15px] text-chrome leading-relaxed pb-6 max-w-[66ch]">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 glass rounded-2xl p-7 md:p-8 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
            <div>
              <h3 className="text-display text-lg font-semibold tracking-tight text-bone mb-1.5">
                Put your brand under lock.
              </h3>
              <p className="text-sm text-chrome leading-relaxed">
                Load the kit once. Every asset after that inherits it, in every language.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href={STUDIO_APP_URL} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-lume to-halo text-coal text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition-all whitespace-nowrap">
                Open Studio
              </a>
              <a href={CALENDLY_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="glass text-sm font-medium px-5 py-2.5 rounded-full text-bone hover:bg-white/5 hover:border-halo/30 transition-colors whitespace-nowrap">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
    </main>
  );
}
