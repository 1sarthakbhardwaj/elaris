import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CALENDLY_BOOKING_URL, SITE_URL, STUDIO_APP_URL } from "@/lib/site";

const PAGE_PATH = "/learn/creative-automation";
const OG_IMAGE = `${SITE_URL}/og/one-brief-many-ads.jpg`;
const UPDATED = "2026-09-11";

const TITLE = "Creative Automation: One Master, Every Ad Size | ElarisLabs";
const DESCRIPTION =
  "Creative automation produces every size, language and variant of an ad from one approved master by recomposing the layout instead of cropping it. How it differs from templating and DCO, how to set it up, and what it produced for a MENA retail catalogue.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "creative automation",
    "creative automation MENA",
    "generate 500 ad variants from one master",
    "AI tool that resizes ads without cropping the logo",
    "ad resizing automation",
    "brand-locked creative production",
    "GCC creative automation",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: "Creative automation: one approved master, every placement",
    description:
      "Recomposition, not cropping. What creative automation is, how it differs from templating and DCO, and the numbers from a 530-variant retail catalogue.",
    images: [{ url: OG_IMAGE }],
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative automation, defined",
    description:
      "Every size and language from one approved master, recomposed rather than cropped.",
    images: [OG_IMAGE],
  },
};

/* ---------------------------------------------------------------- content */

const NOT: { title: string; body: string }[] = [
  {
    title: "Not templating",
    body: "A template is a fixed frame you pour content into. It holds only while the content behaves: a longer headline, a taller product shot or a second language and the frame breaks. Creative automation recomposes the layout around the new content instead of asking the content to fit.",
  },
  {
    title: "Not dynamic creative optimisation",
    body: "DCO swaps elements at serve time based on audience signals. It optimises which version a person sees. Creative automation is upstream of that: it produces the versions in the first place, in every size and language the media plan needs.",
  },
  {
    title: "Not batch export",
    body: "Exporting one artboard at eleven dimensions is cropping with extra steps. The logo drifts into a corner, the headline loses a line, the safe zone is wrong. Automation means each size is composed for its own frame from the same locked elements.",
  },
];

const STEPS: { title: string; body: string }[] = [
  {
    title: "Lock the brand kit first",
    body: "Logo lockups, palette, type hierarchy, clear space and the Arabic typeface go in before any generation. Everything produced downstream inherits them, which is what makes the output approvable rather than merely fast.",
  },
  {
    title: "Approve one master",
    body: "Get sign-off on a single composition, in the primary market and primary ratio. This is the artefact the whole campaign derives from, so the review cost is paid once.",
  },
  {
    title: "Layerise the master",
    body: "Split the approved file into addressable layers: background, product, headline, subhead, CTA, logo, legal. Each layer carries rules about how it behaves when the frame changes.",
  },
  {
    title: "Define the output matrix",
    body: "List the placements, ratios, languages and SKUs the campaign needs. Eleven standard ad sizes group into five ratio families, so the matrix is smaller than the raw size count suggests.",
  },
  {
    title: "Recompose, then review the exceptions",
    body: "The system composes each cell of the matrix and flags the ones where a rule could not be satisfied, such as a headline that will not fit a narrow frame at minimum type size. A human reviews the exceptions, not the whole set.",
  },
];

const MATRIX: { family: string; sizes: string; use: string }[] = [
  { family: "Square", sizes: "1:1", use: "Feed, carousel, display" },
  { family: "Portrait", sizes: "4:5, 6:5", use: "Feed, programmatic display" },
  { family: "Vertical", sizes: "9:16", use: "Stories, Reels, TikTok, Shorts" },
  { family: "Landscape", sizes: "16:9", use: "YouTube, in-stream, DOOH" },
  { family: "Banner", sizes: "Leaderboard, MPU, skyscraper", use: "Programmatic display" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is creative automation?",
    a: "Creative automation is the production of every size, language and variant of an advert from one approved master, by a system that recomposes the layout for each output rather than cropping or scaling a single artboard. The brand kit is locked at the top, so the hundredth asset carries the same logo lockup, palette and type hierarchy as the one the brand team signed off. ElarisLabs runs this on a node canvas, including mirrored Arabic and other right-to-left versions.",
  },
  {
    q: "How is creative automation different from dynamic creative optimisation?",
    a: "Creative automation produces the assets; DCO decides which of them to serve. Automation runs before the campaign goes live and its output is a finished set of files in every placement and language. DCO runs at serve time and assembles or selects variations against audience and performance signals. Most teams need both, and automation is the prerequisite, because DCO cannot optimise across variants that were never produced.",
  },
  {
    q: "How do I generate hundreds of ad variants from one master?",
    a: "Lock the brand kit, approve a single master composition, split it into addressable layers, then define the matrix of placements, ratios, languages and products the campaign needs. The system composes each cell from the same locked layers and flags only the cells where a rule cannot be met. For a MENA retail catalogue, ElarisLabs produced more than 530 finished ads across 9:16 social and 6:5 programmatic from one approved concept in under four weeks.",
  },
  {
    q: "Which AI tool resizes ads without cropping the logo?",
    a: "Any tool that treats resizing as recomposition rather than as a crop. The test is what happens to the logo lockup and the headline block when the frame narrows: a cropping tool pushes them out of frame or shrinks them below legibility, while a recomposing tool re-lays the elements inside the new frame under the brand kit rules, holding clear space and minimum type size. ElarisLabs Brand Pack recomposes across eleven standard sizes from one master.",
  },
  {
    q: "Does creative automation work for Arabic and other right-to-left languages?",
    a: "Only if the system mirrors layouts rather than translating text in place. Right-to-left output needs the composition flipped, an Arabic typeface applied from the brand kit, the copy retypeset at a higher line height, numerals localised and safe zones recalculated. ElarisLabs handles right-to-left as part of the same pass that produces the other sizes, so the Arabic set comes off the same approved master.",
  },
  {
    q: "Does automation replace the designer?",
    a: "It replaces the reformatting, not the design. The judgement work is the master: the concept, the composition and the brand rules. Once those are approved, deriving the other 500 assets is mechanical, and that mechanical portion is where most in-house teams and agencies lose their weeks.",
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
            name: "Creative automation",
            item: `${SITE_URL}${PAGE_PATH}`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_PATH}#article`,
        headline: "Creative automation: one approved master, every ad size",
        description: DESCRIPTION,
        image: OG_IMAGE,
        mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
        inLanguage: "en",
        datePublished: UPDATED,
        dateModified: UPDATED,
        author: { "@type": "Organization", name: "ElarisLabs", url: SITE_URL },
        publisher: { "@type": "Organization", name: "ElarisLabs", url: SITE_URL },
        about: [
          { "@type": "Thing", name: "Creative automation" },
          { "@type": "Thing", name: "Advertising production" },
          { "@type": "Thing", name: "Brand governance" },
        ],
      },
      {
        "@type": "DefinedTerm",
        "@id": `${SITE_URL}${PAGE_PATH}#term`,
        name: "Creative automation",
        description:
          "The production of every size, language and variant of an advert from one approved master, by a system that recomposes the layout for each output instead of cropping a single artboard.",
        inDefinedTermSet: `${SITE_URL}/learn`,
      },
      {
        "@type": "HowTo",
        name: "How to set up creative automation",
        description:
          "Five steps from a locked brand kit to a full placement matrix produced from one approved master.",
        step: STEPS.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.body,
        })),
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

function FanoutDiagram() {
  const accent = "#A8CDEF";
  const outputs = [
    { label: "1:1 square", y: 34 },
    { label: "4:5 / 6:5 portrait", y: 86 },
    { label: "9:16 vertical", y: 138 },
    { label: "16:9 landscape", y: 190 },
    { label: "Banner set", y: 242 },
  ];

  return (
    <figure className="glass rounded-2xl p-6 md:p-8 text-silver">
      <svg
        viewBox="0 0 900 300"
        role="img"
        aria-label="One approved master is layerised into a brand-locked layer graph, which recomposes into five ratio families and, on a separate branch, into a mirrored Arabic set."
        className="w-full h-auto"
        style={{ maxWidth: "100%" }}
      >
        <defs>
          <marker id="ca-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <polygon points="0,0 10,5 0,10" fill="currentColor" />
          </marker>
          <marker id="ca-arrow-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <polygon points="0,0 10,5 0,10" fill={accent} />
          </marker>
        </defs>

        {/* master */}
        <rect x="8" y="104" width="150" height="72" rx="10" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <text x="83" y="134" textAnchor="middle" fontSize="13" fill="currentColor">Approved</text>
        <text x="83" y="152" textAnchor="middle" fontSize="13" fill="currentColor">master</text>

        {/* master -> graph */}
        <line x1="158" y1="140" x2="252" y2="140" stroke="currentColor" strokeWidth="1.25" markerEnd="url(#ca-arrow)" />
        <text x="205" y="130" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.75">layerise</text>

        {/* layer graph */}
        <rect x="252" y="88" width="186" height="104" rx="10" fill="none" stroke={accent} strokeWidth="1.5" />
        <text x="345" y="116" textAnchor="middle" fontSize="13" fill={accent}>Brand-locked</text>
        <text x="345" y="134" textAnchor="middle" fontSize="13" fill={accent}>layer graph</text>
        <text x="345" y="158" textAnchor="middle" fontSize="10.5" fill="currentColor" opacity="0.8">logo · palette · type · clear space</text>
        <text x="345" y="174" textAnchor="middle" fontSize="10.5" fill="currentColor" opacity="0.8">safe zones · legal</text>

        {/* fan out */}
        {outputs.map((o) => (
          <g key={o.label}>
            <path
              d={`M438 140 C 520 140, 540 ${o.y + 16}, 620 ${o.y + 16}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              markerEnd="url(#ca-arrow)"
              opacity="0.8"
            />
            <rect x="624" y={o.y} width="200" height="32" rx="7" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.85" />
            <text x="724" y={o.y + 21} textAnchor="middle" fontSize="12" fill="currentColor">{o.label}</text>
          </g>
        ))}
        <text x="545" y="24" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.75">recomposed, not cropped</text>

        {/* rtl branch */}
        <path d="M345 192 C 345 250, 345 276, 500 276" fill="none" stroke={accent} strokeWidth="1.25" markerEnd="url(#ca-arrow-accent)" />
        <text x="352" y="240" fontSize="11" fill={accent}>mirror + retypeset</text>
        <rect x="504" y="260" width="150" height="32" rx="7" fill="none" stroke={accent} strokeWidth="1.1" />
        <text x="579" y="281" textAnchor="middle" fontSize="12" fill={accent}>Arabic / RTL set</text>
      </svg>
      <figcaption className="text-[12.5px] text-chrome leading-relaxed mt-5 max-w-[70ch]">
        Every output is composed from the same locked layer graph. Nothing downstream re-opens the
        brand decisions, which is why the five-hundredth asset does not need a second approval.
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------- page */

export default function CreativeAutomationPage() {
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
            <a href="/" className="hover:text-halo transition-colors">
              ElarisLabs
            </a>
            <span className="mx-2 text-steel">/</span>
            <span className="text-silver">Learn</span>
            <span className="mx-2 text-steel">/</span>
            <span className="text-silver">Creative automation</span>
          </nav>

          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-6">◉ Learn</p>
          <h1 className="text-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] tracking-tight text-bone mb-7">
            Creative automation:
            <span className="italic shine-plasma glow-plasma"> one master, every size.</span>
          </h1>

          <p className="text-lg md:text-xl text-bone/80 leading-relaxed mb-6">
            Creative automation is the production of every size, language and variant of an advert
            from one approved master, by a system that recomposes the layout for each output instead
            of cropping it. ElarisLabs runs it on a node canvas with the brand kit locked, so the
            five-hundredth asset needs no second approval.
          </p>

          <p className="text-base text-chrome leading-relaxed mb-9 max-w-[66ch]">
            This page covers what separates automation from templating and DCO, the mechanism that
            makes recomposition possible, the five steps to set it up, and what it produced on a
            live retail catalogue.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={STUDIO_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-lume to-halo text-coal text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_0_35px_-8px_rgba(168,205,239,0.6)] hover:shadow-[0_0_55px_-8px_rgba(168,205,239,0.9)] hover:brightness-110 transition-all"
            >
              Run it on your master
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="/arabic-rtl-ad-creative"
              className="glass text-sm font-medium px-6 py-3 rounded-full text-bone hover:bg-white/5 hover:border-halo/30 transition-colors"
            >
              Arabic and RTL at scale
            </a>
          </div>

          <p className="text-[11px] text-mono text-chrome mt-8 tracking-[0.02em]">
            Last updated 11 September 2026
          </p>
        </div>
      </section>

      {/* Mechanism */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[760px] mb-10">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ The mechanism
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-6">
              Recomposition, not cropping.
            </h2>
            <p className="text-lg text-bone/75 leading-relaxed mb-5">
              A crop takes one composition and cuts it to a new frame, so whatever sat near the edge
              leaves. Recomposition takes the elements and lays them out again inside the new frame,
              under the same brand rules. The difference shows up first on the logo and the headline,
              which are the two things a cropped resize always damages.
            </p>
            <p className="text-base text-chrome leading-relaxed">
              That is only possible if the master is addressable. A flattened export has no layers to
              reposition, so every tool that starts from a flat image is cropping regardless of what
              the marketing page calls it.
            </p>
          </div>

          <FanoutDiagram />
        </div>
      </section>

      {/* What it is not */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ The boundary
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              Three things it gets confused with.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              The term gets applied to anything that produces more than one file. These are the three
              neighbours worth separating it from, because they solve different problems and most
              teams eventually need all four.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {NOT.map((n) => (
              <div key={n.title} className="glass rounded-2xl p-6 hover-lift">
                <h3 className="text-display text-lg font-semibold tracking-tight text-bone mb-2.5">
                  {n.title}
                </h3>
                <p className="text-sm text-chrome leading-relaxed">{n.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ Setup</p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              How to set up creative automation.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Five steps. The order is the point: teams that generate first and lock the brand
              afterwards end up approving every asset individually, which is the cost automation was
              supposed to remove.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="glass rounded-2xl p-6 flex gap-5 items-start hover-lift">
                <span className="shrink-0 w-9 h-9 grid place-items-center rounded-lg border border-steel text-mono text-[13px] text-halo">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-display text-lg font-semibold tracking-tight text-bone mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-chrome leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matrix */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[760px] mb-10">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ The matrix
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              Eleven sizes, five ratio families.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Grouping sizes by ratio family cuts the number of distinct compositions the system has
              to solve. Within a family the frame changes but the layout logic holds, so the work is
              a scale rather than a rebuild.
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="p-4 md:p-5 text-[10.5px] text-mono text-chrome uppercase tracking-[0.16em] font-medium">Ratio family</th>
                    <th className="p-4 md:p-5 text-[10.5px] text-mono text-chrome uppercase tracking-[0.16em] font-medium">Sizes</th>
                    <th className="p-4 md:p-5 text-[10.5px] text-mono text-halo uppercase tracking-[0.16em] font-medium">Where it runs</th>
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map((m) => (
                    <tr key={m.family} className="border-b border-white/[0.05] last:border-0">
                      <td className="p-4 md:p-5 text-sm text-bone font-medium align-top w-[24%]">{m.family}</td>
                      <td className="p-4 md:p-5 text-sm text-chrome leading-relaxed align-top w-[34%]">{m.sizes}</td>
                      <td className="p-4 md:p-5 text-sm text-pearl leading-relaxed align-top">{m.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-base text-chrome leading-relaxed mt-8 max-w-[70ch]">
            Add a second language and the matrix doubles, which is where right-to-left markets
            usually break a production plan.{" "}
            <a href="/learn/rtl-ad-localisation" className="text-halo hover:underline underline-offset-4">
              RTL localisation
            </a>{" "}
            is the part of the pass that mirrors the composition rather than translating it in place.
          </p>
        </div>
      </section>

      {/* Worked example */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, rgba(109,166,217,0.10) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-[1000px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
            ◉ Worked example
          </p>
          <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-8">
            530 finished ads from one concept.
          </h2>

          <div className="glass rounded-2xl p-7 md:p-9">
            <p className="text-base text-bone/80 leading-relaxed mb-4">
              HomesRus, a MENA retail brand, had the bottleneck most catalogue advertisers have. The
              concept was signed off quickly. Reformatting it for every product, every placement and
              every size was what took the quarter.
            </p>
            <p className="text-base text-chrome leading-relaxed mb-7">
              Running the approved master through ElarisLabs produced more than 530 finished ads
              across 9:16 social and 6:5 programmatic in under four weeks, with the product swapped
              per SKU and everything else held fixed.{" "}
              <a href="/blogs/homesrus-530-variants" className="text-halo hover:underline underline-offset-4">
                Read the case study
              </a>
              .
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6 border-t border-white/[0.08]">
              {[
                { v: "530+", k: "Finished ads" },
                { v: "1", k: "Approved concept" },
                { v: "< 4 wks", k: "End to end" },
                { v: "2", k: "Placement families" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-display text-2xl font-semibold tracking-tight text-bone leading-none">
                    {s.v}
                  </div>
                  <div className="text-[10.5px] text-mono text-chrome uppercase tracking-[0.14em] mt-2">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-[860px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ FAQ</p>
          <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-10">
            Creative automation,
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
                Bring one approved master.
              </h3>
              <p className="text-sm text-chrome leading-relaxed">
                Get the full placement matrix back, brand-locked, in English and Arabic.
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
