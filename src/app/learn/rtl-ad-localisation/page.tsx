import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CALENDLY_BOOKING_URL, SITE_URL, STUDIO_APP_URL } from "@/lib/site";

const PAGE_PATH = "/learn/rtl-ad-localisation";
const OG_IMAGE = `${SITE_URL}/og/rtl-localisation.jpg`;
const UPDATED = "2026-09-11";

const TITLE = "RTL Ad Localisation: How to Localise Ads for Right-to-Left Languages | ElarisLabs";
const DESCRIPTION =
  "RTL ad localisation means mirroring the layout, not translating the copy. What breaks when you skip it, the step-by-step procedure for deriving an Arabic campaign from an approved English master, and the QA checklist before you ship.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "RTL ad localisation",
    "how to localise ads for RTL languages",
    "mirror layouts for Arabic",
    "RTL safe zones in ad design",
    "Arabic and English versions of the same ad",
    "localise a Meta ad campaign into Arabic",
    "right-to-left layout mirroring",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: "RTL ad localisation: mirror the layout, do not translate the copy",
    description:
      "The six things that break when an ad moves right to left, the step-by-step procedure to fix them, and the checks to run before the campaign goes live.",
    images: [{ url: OG_IMAGE }],
    locale: "en",
    alternateLocale: ["ar"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RTL ad localisation, step by step",
    description:
      "Mirroring is not translating. What breaks, how to fix it, and the QA checklist before an Arabic campaign ships.",
    images: [OG_IMAGE],
  },
};

/* ---------------------------------------------------------------- content */

const CONTRAST: { label: string; translate: string; mirror: string }[] = [
  {
    label: "What changes",
    translate: "The words in the text layer.",
    mirror: "The words, the composition, the typeface, the numerals and the safe zones.",
  },
  {
    label: "Where the logo sits",
    translate: "Top left, where the English master put it.",
    mirror: "Top right, where an Arabic reader starts.",
  },
  {
    label: "Where the eye finishes",
    translate: "Bottom right, on empty space.",
    mirror: "Bottom left, on the call to action.",
  },
  {
    label: "What a native reader sees",
    translate: "An English ad with Arabic words in it.",
    mirror: "An ad made for their market.",
  },
];

const BREAKS: { title: string; body: string; sample?: string }[] = [
  {
    title: "Logo lockups",
    body: "A lockup with the mark on the left and the wordmark on the right is a left-to-right reading unit. Mirroring the canvas flips the mark into the wrong position and, if the lockup contains Latin type, reverses it. The composition mirrors; the lockup itself does not. It moves to the opposite corner intact.",
  },
  {
    title: "Call to action direction",
    body: "Arrows, chevrons, swipe indicators and progress bars all encode direction. An arrow pointing right means forward in English and backward in Arabic. Every directional element has to flip, and every non-directional one, such as a clock face or a product photograph, has to stay exactly as it was.",
  },
  {
    title: "Numerals",
    body: "Gulf markets commonly set Eastern Arabic numerals, Levant and North African markets often use Western ones. Numbers also stay left-to-right inside a right-to-left line, so a price, a percentage or a date sits as an LTR island in an RTL sentence. Get this wrong and the discount reads backwards.",
    sample: "٥٠٪ خصم",
  },
  {
    title: "Diacritics and line height",
    body: "Arabic glyphs carry marks above and below the baseline, so the script needs roughly 1.4 to 1.6x the line height of the equivalent Latin setting. Reuse the English leading and the marks collide with the line above, which is the single most common giveaway in translated ad creative.",
    sample: "تذوّق الفرق",
  },
  {
    title: "Text expansion and contraction",
    body: "Arabic typically runs 20 to 25 percent shorter than English in character count but taller on the page once leading is corrected. A headline box sized to an English line will have slack on one axis and overflow on the other. The block has to be retypeset, not scaled.",
  },
  {
    title: "Safe zones",
    body: "Platform interface elements are not symmetrical. A Reel puts its action rail on the right, so a right-aligned Arabic headline lands underneath it. Safe zones have to be recalculated per placement for the mirrored composition, not inherited from the English version.",
  },
];

const STEPS: { title: string; body: string }[] = [
  {
    title: "Start from the approved master, not a new generation",
    body: "The Arabic version should be derived from the layered file the brand team already signed off. Regenerating the creative in a new language produces a second campaign to approve, which is where most teams lose the week.",
  },
  {
    title: "Separate what mirrors from what does not",
    body: "Composition, text blocks, directional icons and alignment mirror. Photography, video, logos, faces, product shots and any image containing Latin type stay in their original orientation. Tag every layer before you flip anything.",
  },
  {
    title: "Mirror the composition",
    body: "Flip the layout axis so the reading order runs right to left. Logo moves to the top right, call to action to the bottom left, image gutters and padding swap sides. The grid mirrors with the content so the rhythm survives.",
  },
  {
    title: "Swap in a real Arabic typeface",
    body: "Pull the Arabic face from the brand kit, matched to the Latin one on weight and x-height. A Latin font with Arabic characters pasted into it renders the letters unjoined, which reads roughly like English printed with a space between every letter.",
  },
  {
    title: "Retypeset the copy",
    body: "Reset line breaks, leading and text-block height for the new script. Arabic breaks at different points than English, so a two-line headline may become one line or three. Set the leading at 1.4 to 1.6x and let the block find its own height.",
  },
  {
    title: "Localise numerals, dates and currency",
    body: "Choose Eastern or Western Arabic numerals by market, not by language. Keep numbers running left to right inside the right-to-left line, and set currency and date order to the local convention rather than the source one.",
  },
  {
    title: "Recalculate safe zones per placement",
    body: "Run the mirrored composition against the safe zone for every placement it will ship in: Story, Reel, in-feed, Shorts, display, out of home. The Arabic version clears different edges than the English one and has to be checked separately.",
  },
  {
    title: "Have a native reader check it before it ships",
    body: "One pass by someone who reads the language catches the failures no automated check will: an idiom that landed wrong, a line break mid-phrase, a tone that reads formal where the brand is casual. Budget an hour, not a day.",
  },
];

const SAFE_ZONES: { placement: string; watch: string; mirrored: string }[] = [
  {
    placement: "Instagram / Facebook Story",
    watch: "Profile row at the top, reply bar at the bottom",
    mirrored: "Top-right logo now sits under the profile row. Drop the headline block down, keep 250px clear at the top and 340px at the bottom.",
  },
  {
    placement: "Instagram Reel / TikTok",
    watch: "Right-hand action rail, caption block bottom left",
    mirrored: "The rail collides with right-aligned Arabic text. Inset the text block from the right by the rail width and move the CTA above the caption zone.",
  },
  {
    placement: "YouTube Shorts",
    watch: "Right-hand controls, title and channel bottom left",
    mirrored: "Same collision as Reels, plus the bottom-left CTA now competes with the channel strip. Raise it.",
  },
  {
    placement: "In-feed square and 4:5",
    watch: "Primary text above, CTA button below the creative",
    mirrored: "Platform chrome stays LTR around an RTL creative. Keep the in-creative CTA away from the bottom-left corner so it does not stack with the platform button.",
  },
  {
    placement: "Programmatic display",
    watch: "Close button, top right on most exchanges",
    mirrored: "This is the one that catches people: the mirrored logo lands exactly under the close button. Inset it or move it down.",
  },
  {
    placement: "Digital out of home",
    watch: "Screen bezel, viewing distance, dwell time",
    mirrored: "No interface chrome, but line length matters more. Arabic at distance needs a heavier weight and more leading than the English board used.",
  },
];

const CHECKS: string[] = [
  "Every letter joins. Open the render at 400 percent and look at the middle of each word.",
  "The logo is in the mirrored corner and has not itself been flipped.",
  "Arrows, chevrons and progress indicators point the new way. Clocks, photos and product shots do not.",
  "Diacritics clear the line above at the final line height, not the draft one.",
  "Numerals match the market convention, and numbers inside sentences still read left to right.",
  "No text sits inside the platform safe zone for the placement it will run in.",
  "Brand palette, logo clear space and type hierarchy are identical to the approved English master.",
  "A native reader has seen the final render, not the copy deck.",
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is RTL ad localisation?",
    a: "RTL ad localisation is the process of rebuilding an advert for a right-to-left language by mirroring its layout as well as translating its text. The logo, call to action and reading order move to the opposite side, the copy is reset in an Arabic typeface with corrected line height, and numerals and dates are localised to the market. ElarisLabs Localise performs this from one approved master, holding the brand rules fixed across every language.",
  },
  {
    q: "What is the difference between translating an ad and localising it for RTL?",
    a: "Translation changes the words in the text layer. RTL localisation changes the composition: the reading order flips, the logo and call to action move to the opposite corners, directional icons reverse, the typeface changes to one with a full Arabic glyph set, the line height increases to clear diacritics, and safe zones are recalculated for the mirrored layout. A translated ad reads as an English ad with Arabic words in it. A localised one reads as an ad made for the market.",
  },
  {
    q: "Can I just flip the canvas to make an Arabic version?",
    a: "No. Flipping the whole canvas mirrors everything, including the things that must not mirror: logos, photography, faces, product shots and any embedded Latin type all come out reversed. Correct mirroring moves the composition while leaving those elements in their original orientation, which is a per-layer decision rather than a canvas-level transform.",
  },
  {
    q: "How do I make Arabic and English versions of the same ad without rebuilding it?",
    a: "Work from one layered, brand-locked master rather than two separate files. Tag each layer as mirroring or fixed, then derive both language versions from that master. The brand kit supplies the Arabic typeface, so the Arabic version inherits the approved palette, logo lockup and hierarchy instead of being re-approved. In ElarisLabs, both versions and every placement size come off the same master in one pass.",
  },
  {
    q: "What line height should Arabic ad copy use?",
    a: "Roughly 1.4 to 1.6 times the line height you would use for the equivalent Latin setting. Arabic carries diacritical marks above and below the baseline, so English leading causes marks on one line to collide with the line above it. Set the leading first, then let the text block find its own height rather than scaling the type to fit the original box.",
  },
  {
    q: "Which numerals should an Arabic ad use?",
    a: "It depends on the market, not the language. Gulf markets including Qatar, Saudi Arabia and the UAE commonly use Eastern Arabic numerals, while much of North Africa and parts of the Levant use Western ones. Whichever set you choose, numbers continue to read left to right inside a right-to-left line, so prices, percentages and dates sit as left-to-right islands in the sentence.",
  },
  {
    q: "How long does it take to localise a campaign into Arabic?",
    a: "By hand, a designer rebuilding a campaign across placements typically spends days per set and repeats the work for each new size. Derived from a single approved master with automated mirroring and retypesetting, the same set is produced in one pass, with the remaining time going to the native-reader review rather than to layout work.",
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
            name: "RTL ad localisation",
            item: `${SITE_URL}${PAGE_PATH}`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_PATH}#article`,
        headline: "RTL ad localisation: how to localise ads for right-to-left languages",
        description: DESCRIPTION,
        image: OG_IMAGE,
        mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
        inLanguage: "en",
        datePublished: UPDATED,
        dateModified: UPDATED,
        author: { "@type": "Organization", name: "ElarisLabs", url: SITE_URL },
        publisher: { "@type": "Organization", name: "ElarisLabs", url: SITE_URL },
        about: [
          { "@type": "Thing", name: "Right-to-left localisation" },
          { "@type": "Thing", name: "Arabic typography" },
          { "@type": "Thing", name: "Advertising creative production" },
        ],
      },
      {
        "@type": "DefinedTerm",
        "@id": `${SITE_URL}${PAGE_PATH}#term`,
        name: "RTL ad localisation",
        description:
          "The process of rebuilding an advert for a right-to-left language by mirroring its layout as well as translating its text: reading order, logo placement, call to action, typeface, line height, numerals and safe zones all change.",
        inDefinedTermSet: `${SITE_URL}/learn`,
      },
      {
        "@type": "HowTo",
        name: "How to localise an ad for a right-to-left language",
        description:
          "Eight steps to derive a mirrored Arabic campaign from an approved English master without re-approving the brand.",
        totalTime: "PT2H",
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

/* ------------------------------------------------------------------- page */

export default function RtlAdLocalisationPage() {
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
          <nav
            aria-label="Breadcrumb"
            className="text-[11px] text-mono text-chrome mb-8 tracking-[0.02em]"
          >
            <a href="/" className="hover:text-halo transition-colors">
              ElarisLabs
            </a>
            <span className="mx-2 text-steel">/</span>
            <span className="text-silver">Learn</span>
            <span className="mx-2 text-steel">/</span>
            <span className="text-silver">RTL ad localisation</span>
          </nav>

          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-6">◉ Learn</p>
          <h1 className="text-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.04] tracking-tight text-bone mb-7">
            RTL ad localisation:
            <span className="italic shine-plasma glow-plasma"> mirror the layout.</span>
          </h1>

          <p className="text-lg md:text-xl text-bone/80 leading-relaxed mb-6">
            RTL ad localisation means rebuilding an advert for a right-to-left language by mirroring
            its layout, not only translating its text. Logo, call to action and reading order move
            to the opposite side, the type is reshaped, numerals are reset. ElarisLabs Localise does
            it from one approved master.
          </p>

          <p className="text-base text-chrome leading-relaxed mb-9 max-w-[66ch]">
            This page covers what breaks when a campaign moves right to left, the eight-step
            procedure for deriving an Arabic version from an English master, safe zones per
            placement, and the checks to run before anything goes live.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={STUDIO_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-lume to-halo text-coal text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_0_35px_-8px_rgba(168,205,239,0.6)] hover:shadow-[0_0_55px_-8px_rgba(168,205,239,0.9)] hover:brightness-110 transition-all"
            >
              Try it with your brand kit
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="/arabic-rtl-ad-creative"
              className="glass text-sm font-medium px-6 py-3 rounded-full text-bone hover:bg-white/5 hover:border-halo/30 transition-colors"
            >
              See it running at scale
            </a>
          </div>

          <p className="text-[11px] text-mono text-chrome mt-8 tracking-[0.02em]">
            Last updated 11 September 2026
          </p>
        </div>
      </section>

      {/* Mirroring vs translating */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[760px] mb-10">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ The distinction
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-6">
              Mirroring is not translating.
            </h2>
            <p className="text-lg text-bone/75 leading-relaxed mb-5">
              Translation is a text operation. Localisation is a layout operation. An ad that has
              been translated but not mirrored keeps every spatial decision that was made for an
              English reader, and hands them to someone who reads in the opposite direction.
            </p>
            <p className="text-base text-chrome leading-relaxed">
              The practical test: cover the copy and look at the composition. If the eye still
              starts at the top left and ends on empty space, the ad has been translated, not
              localised.
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="p-4 md:p-5 text-[10.5px] text-mono text-chrome uppercase tracking-[0.16em] font-medium" />
                    <th className="p-4 md:p-5 text-[10.5px] text-mono text-chrome uppercase tracking-[0.16em] font-medium">
                      Translated only
                    </th>
                    <th className="p-4 md:p-5 text-[10.5px] text-mono text-halo uppercase tracking-[0.16em] font-medium">
                      Mirrored and localised
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CONTRAST.map((row) => (
                    <tr key={row.label} className="border-b border-white/[0.05] last:border-0">
                      <td className="p-4 md:p-5 text-sm text-bone font-medium align-top w-[26%]">
                        {row.label}
                      </td>
                      <td className="p-4 md:p-5 text-sm text-chrome leading-relaxed align-top">
                        {row.translate}
                      </td>
                      <td className="p-4 md:p-5 text-sm text-pearl leading-relaxed align-top">
                        {row.mirror}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What breaks */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ Failure modes
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              Six things that break.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              These are the failures that show up in Arabic ad creative produced in a left-to-right
              tool. Each one is visible to a native reader in under a second, and none of them are
              translation errors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BREAKS.map((b) => (
              <div key={b.title} className="glass rounded-2xl p-6 hover-lift">
                <h3 className="text-display text-lg font-semibold tracking-tight text-bone mb-2.5">
                  {b.title}
                </h3>
                <p className="text-sm text-chrome leading-relaxed">{b.body}</p>
                {b.sample && (
                  <p dir="rtl" className="text-arabic text-pearl text-base mt-4">
                    {b.sample}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ The procedure
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              How to localise an ad for a right-to-left language.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Eight steps, in order. The sequence matters: mirroring before the typeface swap means
              retypesetting twice, and checking safe zones before the copy is final means checking
              them again.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
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

      {/* Safe zones */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1000px] mx-auto">
          <div className="max-w-[760px] mb-10">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ Safe zones
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              RTL safe zones, per placement.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Platform interfaces stay left-to-right around a right-to-left creative, so the safe
              zone that worked for the English version is the wrong one for the Arabic. Here is what
              moves where.
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="p-4 md:p-5 text-[10.5px] text-mono text-chrome uppercase tracking-[0.16em] font-medium">
                      Placement
                    </th>
                    <th className="p-4 md:p-5 text-[10.5px] text-mono text-chrome uppercase tracking-[0.16em] font-medium">
                      Interface to clear
                    </th>
                    <th className="p-4 md:p-5 text-[10.5px] text-mono text-halo uppercase tracking-[0.16em] font-medium">
                      What changes when mirrored
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SAFE_ZONES.map((z) => (
                    <tr key={z.placement} className="border-b border-white/[0.05] last:border-0">
                      <td className="p-4 md:p-5 text-sm text-bone font-medium align-top w-[22%]">
                        {z.placement}
                      </td>
                      <td className="p-4 md:p-5 text-sm text-chrome leading-relaxed align-top w-[26%]">
                        {z.watch}
                      </td>
                      <td className="p-4 md:p-5 text-sm text-pearl leading-relaxed align-top">
                        {z.mirrored}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* QA checklist */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[860px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ QA</p>
          <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
            Eight checks before it ships.
          </h2>
          <p className="text-base md:text-lg text-bone/70 leading-relaxed mb-10">
            Run these against the final render, not the design file. Most RTL failures survive the
            design review and die in the export.
          </p>

          <ul className="border-t border-white/[0.08]">
            {CHECKS.map((c, i) => (
              <li
                key={c}
                className="flex gap-5 items-start py-5 border-b border-white/[0.08] text-[15px] text-chrome leading-relaxed"
              >
                <span className="shrink-0 text-mono text-[12px] text-halo mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proof */}
      <section className="relative py-20 md:py-24 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, rgba(109,166,217,0.10) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-[1000px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ In market</p>
          <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-8">
            What this looks like when it runs.
          </h2>

          <div className="glass rounded-2xl p-7 md:p-9">
            <p className="text-base text-bone/80 leading-relaxed mb-4">
              ElarisLabs built a weather-reactive out of home campaign for McDonald&apos;s Qatar,
              running in English and Arabic across a nine-screen digital network operated by ELAN
              Media, with a live temperature reading on each board. The Arabic boards were not
              separate artwork. They came off the same approved master as the English ones,
              mirrored and retypeset.
            </p>
            <p className="text-sm text-chrome leading-relaxed mb-7">
              <a
                href="/blogs/mcdonalds-qatar-live-dooh"
                className="text-halo hover:underline underline-offset-4"
              >
                Read the full case study
              </a>
              , or see{" "}
              <a
                href="/arabic-rtl-ad-creative"
                className="text-halo hover:underline underline-offset-4"
              >
                how Arabic and RTL creative is produced at scale
              </a>
              .
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6 border-t border-white/[0.08]">
              {[
                { v: "10.4M", k: "Impressions" },
                { v: "5.6M", k: "Video views" },
                { v: "9", k: "Live screens" },
                { v: "EN + AR", k: "From one master" },
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
            RTL ad localisation,
            <span className="italic shine-plasma glow-plasma"> answered.</span>
          </h2>

          <div className="border-t border-white/[0.08]">
            {FAQS.map((f, i) => (
              <details key={f.q} open={i === 0} className="group border-b border-white/[0.08]">
                <summary className="cursor-pointer list-none flex items-start gap-4 py-5 text-display text-[17px] md:text-lg font-medium tracking-tight text-bone hover:text-halo transition-colors">
                  <span className="flex-1">{f.q}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-1.5 text-chrome transition-transform duration-300 group-open:rotate-180 group-open:text-halo"
                    aria-hidden
                  >
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
                Localise your own master.
              </h3>
              <p className="text-sm text-chrome leading-relaxed">
                Bring an approved English campaign. Get the mirrored Arabic set back in every
                placement size.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href={STUDIO_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-lume to-halo text-coal text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition-all whitespace-nowrap"
              >
                Open Studio
              </a>
              <a
                href={CALENDLY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-sm font-medium px-5 py-2.5 rounded-full text-bone hover:bg-white/5 hover:border-halo/30 transition-colors whitespace-nowrap"
              >
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
