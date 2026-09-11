import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_URL, STUDIO_APP_URL } from "@/lib/site";

const PAGE_PATH = "/learn";
const TITLE = "Learn: AI Ad Creative, Arabic and RTL, Explained | ElarisLabs";
const DESCRIPTION =
  "Plain definitions of the terms that decide how ad creative is produced at scale: RTL ad localisation, creative automation, deterministic brand memory and predictive creative scoring.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${SITE_URL}/og/learn.jpg` }],
  },
};

const ENTRIES: { term: string; href: string; def: string }[] = [
  {
    term: "RTL ad localisation",
    href: "/learn/rtl-ad-localisation",
    def: "Rebuilding an advert for a right-to-left language by mirroring its layout, not only translating its text: reading order, logo placement, call to action, typeface, line height, numerals and safe zones all change.",
  },
  {
    term: "Creative automation",
    href: "/learn/creative-automation",
    def: "Producing every size, language and variant of an advert from one approved master, by recomposing the layout for each output instead of cropping a single artboard.",
  },
  {
    term: "Deterministic brand memory",
    href: "/learn/brand-memory",
    def: "A machine-readable definition of a brand applied as a constraint at composition time rather than as a suggestion in a prompt, so logo, palette and type are identical on every generated asset.",
  },
  {
    term: "Predictive creative scoring",
    href: "/learn/predictive-creative-scoring",
    def: "Estimating how an advert is likely to perform before media spend, by scoring the creative itself and returning a relative ranking across candidates.",
  },
];

const READS: { label: string; href: string; kind: string }[] = [
  { kind: "Solution", label: "Arabic and RTL ad creative at scale", href: "/arabic-rtl-ad-creative" },
  { kind: "Comparison", label: "Best AI ad tools for Arabic and RTL, 2026", href: "/blogs/best-ai-ad-tools-arabic-rtl-2026" },
  { kind: "Case study", label: "McDonald's Qatar, live in Doha", href: "/blogs/mcdonalds-qatar-live-dooh" },
  { kind: "Case study", label: "530 finished ads from one concept", href: "/blogs/homesrus-530-variants" },
];

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ElarisLabs", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Learn", item: `${SITE_URL}${PAGE_PATH}` },
        ],
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${SITE_URL}${PAGE_PATH}`,
        name: "ElarisLabs Learn",
        description: DESCRIPTION,
        inLanguage: "en",
        hasDefinedTerm: ENTRIES.map((e) => ({
          "@type": "DefinedTerm",
          name: e.term,
          description: e.def,
          url: `${SITE_URL}${e.href}`,
        })),
      },
    ],
  };
}

export default function LearnIndexPage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-14 px-6 md:px-10 overflow-hidden">
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
          </nav>

          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-6">◉ Learn</p>
          <h1 className="text-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] tracking-tight text-bone mb-7">
            The terms that decide
            <span className="italic shine-plasma glow-plasma"> how creative gets made.</span>
          </h1>
          <p className="text-lg text-bone/75 leading-relaxed max-w-[60ch]">
            Four definitions, written plainly, with the mechanism rather than the marketing. Each one
            is a real decision point in how an ad campaign gets produced at scale.
          </p>
        </div>
      </section>

      <section className="relative py-16 md:py-20 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[900px] mx-auto grid sm:grid-cols-2 gap-4">
          {ENTRIES.map((e) => (
            <a key={e.href} href={e.href} className="glass rounded-2xl p-7 hover-lift block group">
              <h2 className="text-display text-xl font-semibold tracking-tight text-bone mb-3 group-hover:text-halo transition-colors">
                {e.term}
              </h2>
              <p className="text-sm text-chrome leading-relaxed">{e.def}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="relative py-16 md:py-20 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[900px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-6">◉ In practice</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {READS.map((r) => (
              <a key={r.href} href={r.href} className="glass rounded-xl px-5 py-4 hover-lift block">
                <span className="block text-[11px] text-mono text-chrome uppercase tracking-[0.16em] mb-1.5">
                  {r.kind}
                </span>
                <span className="text-[15px] text-bone">{r.label}</span>
              </a>
            ))}
          </div>
          <a
            href={STUDIO_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-10 bg-gradient-to-br from-lume to-halo text-coal text-sm font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-all"
          >
            Open Studio
          </a>
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
