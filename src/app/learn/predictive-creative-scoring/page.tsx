import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CALENDLY_BOOKING_URL, SITE_URL, STUDIO_APP_URL } from "@/lib/site";

const PAGE_PATH = "/learn/predictive-creative-scoring";
const OG_IMAGE = `${SITE_URL}/og/learn.jpg`;
const UPDATED = "2026-09-11";

const TITLE = "Predictive Creative Scoring: Ranking Ads Before Spend | ElarisLabs";
const DESCRIPTION =
  "Predictive creative scoring estimates how an ad is likely to perform before it runs, by scoring the creative itself rather than campaign results. What it can and cannot tell you, and where it belongs in the workflow.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "predictive creative scoring",
    "predictive creative scoring tools",
    "dynamic creative optimisation tools 2026",
    "score ads before spending",
    "creative pre-testing AI",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: "Predictive creative scoring, defined",
    description:
      "Score the creative before the media plan pays to find out. What the signal is good for, and what it is not.",
    images: [{ url: OG_IMAGE }],
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Predictive creative scoring",
    description: "Ranking creative before spend, and the limits of the signal.",
    images: [OG_IMAGE],
  },
};

const SIGNALS: { title: string; body: string }[] = [
  {
    title: "Composition",
    body: "Visual hierarchy, focal point, contrast between the subject and the background, and how quickly the eye reaches the message.",
  },
  {
    title: "Message clarity",
    body: "Whether the offer is legible at thumbnail scale, how much copy competes for attention, and whether the call to action is findable.",
  },
  {
    title: "Placement fit",
    body: "How the creative holds up inside the frame it will run in, including safe zones, sound-off legibility and the first frame of a video.",
  },
  {
    title: "Historical pattern",
    body: "How similar creative performed for similar objectives, which is the part that depends on having enough comparable data to be worth anything.",
  },
];

const LIMITS: { title: string; body: string }[] = [
  {
    title: "It ranks, it does not forecast",
    body: "A score is useful for ordering a set of candidates against each other. Treating it as a predicted click-through rate or a revenue number overstates what the model knows.",
  },
  {
    title: "It is weakest on the new",
    body: "Scores come from patterns in past creative. A genuinely unusual idea is the case the model has least evidence about, so a low score on a bold concept is a prompt to test, not a reason to kill it.",
  },
  {
    title: "It does not see your market",
    body: "A model trained mostly on Western creative will misread cultural cues, and it will not know that a layout reads awkwardly to an Arabic audience. Local review still matters.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is predictive creative scoring?",
    a: "Predictive creative scoring is the practice of estimating how an advert is likely to perform before any media budget is spent, by analysing the creative itself rather than campaign results. A model trained on past creative and its outcomes scores attributes such as visual hierarchy, message clarity, thumbnail legibility and placement fit, and returns a relative ranking across a set of candidates. ElarisLabs scores creative inside the same workspace that produced it.",
  },
  {
    q: "How accurate is predictive creative scoring?",
    a: "Accurate enough to rank a set, not accurate enough to forecast a number. The reliable use is relative: given twenty candidates for the same objective and placement, the scoring separates the stronger half from the weaker half well enough to decide what goes into a test. Treating a score as a predicted click-through rate or return on ad spend reads more into it than the training data supports.",
  },
  {
    q: "How is it different from dynamic creative optimisation?",
    a: "Scoring happens before the campaign and judges creative that has never run. DCO happens during the campaign and reallocates delivery based on live performance. Scoring decides what is worth testing; DCO decides what to keep serving once real data exists.",
  },
  {
    q: "Where does scoring belong in the workflow?",
    a: "After production and before spend. Produce the full variant set from one approved master, score it, and send only the top-ranked cut into the live test. That order matters, because scoring is most useful when there is a genuine set to choose between, which requires the production step to be cheap.",
  },
  {
    q: "Does it work for Arabic and GCC creative?",
    a: "Partially, and with local review. Composition and legibility signals transfer across languages, but models trained mostly on Western creative carry weaker priors for regional cultural cues and right-to-left layout. Use the score to narrow the set and a native reviewer to make the final call.",
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
            name: "Predictive creative scoring",
            item: `${SITE_URL}${PAGE_PATH}`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_PATH}#article`,
        headline: "Predictive creative scoring: ranking ads before spend",
        description: DESCRIPTION,
        image: OG_IMAGE,
        mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
        inLanguage: "en",
        datePublished: UPDATED,
        dateModified: UPDATED,
        author: { "@type": "Organization", name: "ElarisLabs", url: SITE_URL },
        publisher: { "@type": "Organization", name: "ElarisLabs", url: SITE_URL },
        about: [
          { "@type": "Thing", name: "Creative effectiveness" },
          { "@type": "Thing", name: "Media planning" },
        ],
      },
      {
        "@type": "DefinedTerm",
        "@id": `${SITE_URL}${PAGE_PATH}#term`,
        name: "Predictive creative scoring",
        description:
          "Estimating how an advert is likely to perform before media spend, by scoring attributes of the creative itself against models trained on past creative and its outcomes, and returning a relative ranking across candidates.",
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

export default function PredictiveCreativeScoringPage() {
  return (
    <main className="relative">
      <Navbar />

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
            <span className="text-silver">Predictive creative scoring</span>
          </nav>

          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-6">◉ Learn</p>
          <h1 className="text-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] tracking-tight text-bone mb-7">
            Predictive creative scoring:
            <span className="italic shine-plasma glow-plasma"> ranking before spend.</span>
          </h1>

          <p className="text-lg md:text-xl text-bone/80 leading-relaxed mb-6">
            Predictive creative scoring estimates how an advert is likely to perform before any media
            budget is spent, by analysing the creative itself rather than campaign results. It
            returns a relative ranking across candidates. ElarisLabs scores creative in the same
            workspace that produced it.
          </p>

          <p className="text-base text-chrome leading-relaxed mb-9 max-w-[66ch]">
            Short page, because the honest version of this topic is short. What the signal is, what
            it is worth, and where it stops.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <a href={STUDIO_APP_URL} target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-lume to-halo text-coal text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_0_35px_-8px_rgba(168,205,239,0.6)] hover:shadow-[0_0_55px_-8px_rgba(168,205,239,0.9)] hover:brightness-110 transition-all">
              Score a set
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="/learn/creative-automation" className="glass text-sm font-medium px-6 py-3 rounded-full text-bone hover:bg-white/5 hover:border-halo/30 transition-colors">
              Produce the set first
            </a>
          </div>

          <p className="text-[11px] text-mono text-chrome mt-8 tracking-[0.02em]">
            Last updated 11 September 2026
          </p>
        </div>
      </section>

      {/* Signals */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ The inputs</p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              What a score actually looks at.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Four families of signal. The first three are properties of the file in front of it. The
              fourth is the one that decides whether the score means anything.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {SIGNALS.map((s) => (
              <div key={s.title} className="glass rounded-2xl p-6 hover-lift">
                <h3 className="text-display text-lg font-semibold tracking-tight text-bone mb-2.5">{s.title}</h3>
                <p className="text-sm text-chrome leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limits */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ The limits</p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              Three things a score will not do.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Worth saying plainly, because the category is sold with more certainty than the
              underlying data supports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {LIMITS.map((l) => (
              <div key={l.title} className="glass rounded-2xl p-6 hover-lift">
                <h3 className="text-display text-lg font-semibold tracking-tight text-bone mb-2.5">{l.title}</h3>
                <p className="text-sm text-chrome leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>

          <p className="text-base text-chrome leading-relaxed mt-10 max-w-[70ch]">
            The useful sequence is production first, scoring second, spend third. Scoring only pays
            off when there is a real set to choose between, which means the{" "}
            <a href="/learn/creative-automation" className="text-halo hover:underline underline-offset-4">
              production step
            </a>{" "}
            has to be cheap enough that producing twenty candidates is not a decision in itself.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-[860px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ FAQ</p>
          <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-10">
            Predictive scoring,
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
