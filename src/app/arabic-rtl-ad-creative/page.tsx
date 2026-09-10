import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CALENDLY_BOOKING_URL, SITE_URL, STUDIO_APP_URL } from "@/lib/site";
import MirrorDemo from "./MirrorDemo";

const PAGE_PATH = "/arabic-rtl-ad-creative";
const OG_IMAGE = `${SITE_URL}/arabic-rtl/mcd-arabic-master.png`;

const TITLE = "Arabic and RTL Ad Creative at Scale | ElarisLabs";
const DESCRIPTION =
  "How to produce Arabic and right-to-left ad creative at scale without breaking layout. What RTL localisation actually requires, why cropping and flipping fail, and how ElarisLabs Localise mirrors layouts instead of pasting translations.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Arabic ad creative",
    "RTL ad localisation",
    "right-to-left layout mirroring",
    "Arabic video ad generator",
    "creative automation MENA",
    "AI ad platform Qatar",
    "AI ad platform Saudi Arabia",
    "GCC creative automation",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: TITLE,
    description:
      "Most AI ad tools translate the copy and keep the layout. Arabic needs the layout mirrored, the type reshaped and the numerals reset. Here is what that takes.",
    images: [{ url: OG_IMAGE }],
    locale: "en",
    alternateLocale: ["ar"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Most AI ad tools translate the copy and keep the layout. Arabic needs the layout mirrored, not pasted.",
    images: [OG_IMAGE],
  },
};

const FACTS: { value: string; label: string }[] = [
  { value: "20+", label: "languages, Arabic to Farsi" },
  { value: "11", label: "sizes from one master" },
  { value: "10.4M", label: "impressions live in Doha" },
  { value: "1", label: "brand kit, every market" },
];

const REQUIREMENTS: { title: string; body: string; sample?: string }[] = [
  {
    title: "Mirrored layout direction",
    body: "Logo, call to action, badges, progress indicators and image alignment all move to the opposite side. The composition mirrors, the photography does not.",
  },
  {
    title: "Correct Arabic type",
    body: "An Arabic typeface with the right glyph set, so letters connect and ligatures form. Latin fonts with Arabic pasted in render as disconnected characters.",
    sample: "تذوّق الفرق",
  },
  {
    title: "Retypesetting, not resizing",
    body: "Arabic runs shorter than English in word count but taller in line height. Line breaks, leading and text-block height have to be reset for the new script, not stretched to fit the old box.",
  },
  {
    title: "Numerals and dates",
    body: "Eastern Arabic numerals where the market uses them, Western where it does not. Gulf markets differ from Levant markets, and the ad has to follow the market it runs in.",
    sample: "١٠٨٠ × ١٣٥٠",
  },
  {
    title: "Safe zones that mirror",
    body: "Platform safe zones are not symmetrical. A Story with a right-aligned interface element needs the Arabic composition to clear a different edge than the English one.",
  },
  {
    title: "Brand rules that hold",
    body: "Logo lockup, clear space, palette and typographic hierarchy stay identical across markets. Localising the layout should never mean re-approving the brand.",
  },
];

const COMPARISON: { requirement: string; crop: string; template: string; elaris: string }[] = [
  {
    requirement: "Copy translated",
    crop: "Yes",
    template: "Yes, manually",
    elaris: "Yes",
  },
  {
    requirement: "Layout mirrored",
    crop: "No, layout is unchanged",
    template: "Only if a designer rebuilds it",
    elaris: "Yes, automatically",
  },
  {
    requirement: "Arabic typeface applied",
    crop: "Falls back to the Latin font",
    template: "Yes, if the designer selects one",
    elaris: "Yes, from the brand kit",
  },
  {
    requirement: "Text retypeset for the script",
    crop: "No, text is scaled to fit",
    template: "Manual reflow per asset",
    elaris: "Yes, per asset",
  },
  {
    requirement: "Numerals localised",
    crop: "No",
    template: "Manual",
    elaris: "Yes, per market",
  },
  {
    requirement: "Safe zones mirrored",
    crop: "No",
    template: "No",
    elaris: "Yes",
  },
  {
    requirement: "Effort for 11 sizes, 2 markets",
    crop: "Fast, and wrong",
    template: "Days of designer time",
    elaris: "One run from the master",
  },
];

const STEPS: { title: string; body: string }[] = [
  {
    title: "Approve the master once",
    body: "Build or upload the English board and sign it off. That approved master becomes the reference every market is derived from, so nothing downstream re-opens the brand conversation.",
  },
  {
    title: "Add the markets",
    body: "Pick the target languages. Arabic, Hebrew, Urdu and Farsi are flagged as right-to-left, so the composition mirrors rather than translating in place.",
  },
  {
    title: "Localise composes each version",
    body: "Copy is retypeset in the correct script, the layout mirrors, numerals reset for the market, and the logo, palette and safe zones stay locked to the brand kit.",
  },
  {
    title: "Export or schedule",
    body: "Take the full set as a ZIP, or send it straight to the scheduler and book it into the week across Meta, TikTok, LinkedIn, YouTube and out of home.",
  },
];

const RTL_LANGS = ["Arabic", "Hebrew", "Urdu", "Farsi"];
const LTR_LANGS = [
  "English",
  "French",
  "Spanish",
  "German",
  "Hindi",
  "Chinese",
  "Japanese",
  "Portuguese",
  "Turkish",
  "Indonesian",
  "+ 9 more",
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is RTL ad localisation?",
    a: "RTL ad localisation is the process of adapting an advertisement for a right-to-left language such as Arabic, Hebrew, Urdu or Farsi. It involves translating the copy, mirroring the layout so the logo and call to action move to the opposite side, setting the text in a typeface with the correct script, retypesetting the text blocks for the new line lengths, and localising numerals and dates for the target market.",
  },
  {
    q: "Why can't I just translate the text and keep the layout?",
    a: "Because the reading order changes. In an Arabic layout the eye enters at the top right and finishes at the bottom left, so a logo in the top left and a button in the bottom right both land in the wrong place. Arabic is also cursive, so a Latin typeface without Arabic glyphs renders the letters disconnected and effectively unreadable.",
  },
  {
    q: "Is mirroring the same as flipping the image?",
    a: "No. Flipping reverses everything, including photography, faces and any Latin text in the frame, which produces a broken ad. Mirroring changes the composition direction only: the layout elements move to the opposite side while the imagery and the brand lockup stay correctly oriented.",
  },
  {
    q: "How does ElarisLabs handle Arabic type?",
    a: "The Arabic typeface is part of the brand kit, alongside the Latin one. When Localise composes an Arabic version it sets the copy in that face, so letters join and ligatures form correctly, and it reflows the text block for the line height Arabic needs rather than scaling the English block to fit.",
  },
  {
    q: "Which numerals should an Arabic ad use?",
    a: "It depends on the market. Gulf markets frequently use Eastern Arabic numerals, while parts of North Africa and the Levant commonly use Western ones. Localise sets numerals per market rather than per language, so a Qatar board and a Morocco board can differ while running off the same master.",
  },
  {
    q: "Does the Arabic version need separate brand approval?",
    a: "No, and that is the point of running it from an approved master. The logo lockup, clear space, palette and typographic hierarchy are held fixed by the brand kit, so only the composition direction and the copy change. Brand teams review the master once rather than every market variant.",
  },
  {
    q: "Can I produce Arabic video ads as well as statics?",
    a: "Yes. AI Video Studio produces Arabic video ads with the same brand kit constraints, including localised on-screen text and mirrored lower thirds, and the output can be scheduled to channel from the same canvas as the statics.",
  },
  {
    q: "How many ad sizes can one Arabic master produce?",
    a: "Eleven, from a single approved master. Each one is recomposed rather than cropped, so the logo and the headline survive the reframe in both the English and the Arabic version.",
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
          {
            "@type": "ListItem",
            position: 2,
            name: "Arabic and RTL ad creative",
            item: `${SITE_URL}${PAGE_PATH}`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}${PAGE_PATH}#article`,
        headline: "Arabic and RTL ad creative, at scale",
        description:
          "What right-to-left ad localisation requires, why translating the copy is not enough, and how ElarisLabs Localise mirrors layouts from one approved master.",
        image: OG_IMAGE,
        mainEntityOfPage: `${SITE_URL}${PAGE_PATH}`,
        inLanguage: "en",
        datePublished: "2026-09-11",
        dateModified: "2026-09-11",
        author: { "@type": "Organization", name: "ElarisLabs", url: SITE_URL },
        publisher: { "@type": "Organization", name: "ElarisLabs", url: SITE_URL },
        about: [
          { "@type": "Thing", name: "Right-to-left localisation" },
          { "@type": "Thing", name: "Arabic advertising" },
          { "@type": "Thing", name: "Creative automation" },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to produce Arabic ad creative from an English master",
        description:
          "Four steps to derive a mirrored Arabic campaign from an approved English master without re-approving the brand.",
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

export default function ArabicRtlAdCreativePage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-50 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 25% 0%, rgba(109,166,217,0.16) 0%, transparent 58%), radial-gradient(ellipse at 90% 70%, rgba(201,176,135,0.05) 0%, transparent 45%)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="text-[11px] text-mono text-chrome mb-8 tracking-[0.02em]"
          >
            <a href="/" className="hover:text-halo transition-colors">
              ElarisLabs
            </a>
            <span className="mx-2 text-steel">/</span>
            <span className="text-silver">Arabic and RTL ad creative</span>
          </nav>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-6">
                ◉ Localise
              </p>
              <h1 className="text-display text-[clamp(2.4rem,5.6vw,4.5rem)] leading-[1.02] tracking-tight text-bone mb-7">
                Arabic and RTL ad creative,
                <span className="italic shine-plasma glow-plasma"> at scale.</span>
              </h1>

              <p className="text-lg md:text-xl text-bone/75 leading-relaxed max-w-[34em] mb-8">
                Producing Arabic ad creative at scale requires mirroring the layout, not
                translating the copy. A right-to-left campaign has to move the logo, the call to
                action and the reading order to the opposite side, reshape the type so letters join
                correctly, and reset numerals and dates. ElarisLabs Localise does that from one
                approved master, holding the logo, palette and safe zones fixed across every market.
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
                  href={CALENDLY_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass text-sm font-medium px-6 py-3 rounded-full text-bone hover:bg-white/5 hover:border-halo/30 transition-colors"
                >
                  Book a demo
                </a>
              </div>

              <p className="text-[11px] text-mono text-chrome mt-8 tracking-[0.02em]">
                Last updated 11 September 2026
              </p>
            </div>

            <MirrorDemo />
          </div>
        </div>
      </section>

      {/* Fact strip */}
      <section className="px-6 md:px-10 py-14 border-y border-white/[0.06] bg-ink/60">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-9 gap-x-6">
          {FACTS.map((f, i) => (
            <div key={f.label} className="text-center flex flex-col items-center gap-2.5">
              <div
                className={`text-display text-3xl md:text-[2.75rem] tracking-tight leading-none whitespace-nowrap ${
                  i % 2 === 0 ? "shine-plasma" : "shine"
                }`}
              >
                {f.value}
              </div>
              <div className="text-[10px] md:text-[11px] text-mono text-chrome uppercase tracking-[0.2em]">
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The problem */}
      <section className="relative py-24 md:py-28 px-6 md:px-10">
        <div className="max-w-[760px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
            ◉ The problem
          </p>
          <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-6">
            Translation is not localisation.
          </h2>
          <p className="text-lg text-bone/75 leading-relaxed mb-5">
            Arabic is not English written backwards. It is a cursive script where letters change
            shape depending on their position in a word, set in a layout where the reading order
            runs right to left. A tool that swaps the words and keeps the layout produces something
            that reads as foreign to the market you are trying to reach.
          </p>
          <p className="text-base text-chrome leading-relaxed mb-5">
            Three failures show up constantly in ad creative built by teams working in a
            left-to-right tool. The logo stays in the top left, so the first thing an Arabic reader
            sees is the empty corner. The call to action stays on the left, so the eye finishes the
            ad and finds nothing there. And the Arabic is set in a Latin typeface that has no Arabic
            glyphs, so the letters render disconnected, which is roughly as readable as English
            printed with a space between every letter.
          </p>
          <p className="text-base text-chrome leading-relaxed">
            None of that is a translation problem. It is a layout problem, and it has to be solved by
            the system that composes the ad.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="relative py-24 md:py-28 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ The checklist
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              What RTL localisation actually requires.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Six things have to change when a campaign moves from English to Arabic. Any tool that
              handles fewer than all six will produce creative a native reader can tell was made
              somewhere else.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REQUIREMENTS.map((r) => (
              <div key={r.title} className="glass rounded-2xl p-6 hover-lift">
                <h3 className="text-display text-lg font-semibold tracking-tight text-bone mb-2.5">
                  {r.title}
                </h3>
                <p className="text-sm text-chrome leading-relaxed">{r.body}</p>
                {r.sample && (
                  <p dir="rtl" className="text-arabic text-pearl text-base mt-4">
                    {r.sample}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real work */}
      <section className="relative py-24 md:py-28 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 20%, rgba(109,166,217,0.10) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ Real work
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              Arabic creative we shipped.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Not mockups. A fully mirrored Arabic master and the live Doha out-of-home boards it
              belongs to, all governed by a single McDonald&apos;s brand kit.
            </p>
          </div>

          {/* Arabic master — 16:9, shown whole */}
          <figure className="relative glass rounded-2xl overflow-hidden mb-4">
            <span className="absolute top-3.5 start-3.5 z-10 text-[10px] text-mono uppercase tracking-[0.1em] font-semibold text-coal bg-halo rounded-full px-2.5 py-1">
              Arabic master · RTL
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/arabic-rtl/mcd-arabic-master.png"
              width={1088}
              height={608}
              loading="lazy"
              alt="McDonald's Arabic ad master, fully right-to-left: the logo and I'm lovin' it lockup sit top-right, the headline الطعم اللي تحبّه reads right to left in a joined Arabic face, and the 29 ريال price block mirrors to the correct side."
              className="w-full h-auto"
            />
            <figcaption className="p-5 md:p-6 border-t border-white/[0.06] md:flex md:items-start md:gap-8">
              <div className="md:w-[42%] shrink-0">
                <div dir="rtl" className="text-arabic text-bone text-base font-semibold mb-1.5">
                  الطعم اللي تحبّه
                </div>
                <div className="text-[10.5px] text-mono text-halo uppercase tracking-[0.1em]">
                  Logo top-right · Eastern-Arabic price · joined script
                </div>
              </div>
              <p className="text-sm text-chrome leading-relaxed mt-3 md:mt-0">
                The English lockup sits top-left; this Arabic master flips it top-right, sets the
                copy in a joined Arabic face, and keeps the red, the arches and the “I&apos;m
                lovin&apos; it” mark exactly on brand. Same master, opposite direction.
              </p>
            </figcaption>
          </figure>

          {/* The 9:16 pieces — each at its true aspect ratio, nothing cropped */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <figure className="relative glass rounded-2xl overflow-hidden">
              <span className="absolute top-3.5 start-3.5 z-10 text-[10px] text-mono uppercase tracking-[0.1em] font-semibold text-coal bg-halo rounded-full px-2.5 py-1">
                Live DOOH · Doha
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/arabic-rtl/mcd-doha-feels-like-0c.jpeg"
                width={900}
                height={1600}
                loading="lazy"
                alt="McDonald's weather-reactive digital billboard on a Doha tower reading FEELS LIKE 0°C over a Watermelon Sprite, part of the nine-screen ELAN Media network."
                className="w-full h-auto"
              />
              <figcaption className="p-4 border-t border-white/[0.06]">
                <div className="text-display text-[15px] font-semibold tracking-tight text-bone">
                  Weather-reactive, “feels like 0°C”
                </div>
                <div className="text-[10.5px] text-mono text-chrome uppercase tracking-[0.1em] mt-1.5">
                  Nine screens · live temperature
                </div>
              </figcaption>
            </figure>

            <figure className="relative glass rounded-2xl overflow-hidden">
              <span className="absolute top-3.5 start-3.5 z-10 text-[10px] text-mono uppercase tracking-[0.1em] font-semibold text-coal bg-halo rounded-full px-2.5 py-1">
                Live DOOH · Doha
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/arabic-rtl/mcd-doha-mixperience.jpeg"
                width={680}
                height={1208}
                loading="lazy"
                alt="McDonald's Taste the Mixperience digital billboard in Doha showing Passionfruit and Watermelon Sprite drinks, recomposed from the same approved master as the Arabic version."
                className="w-full h-auto"
              />
              <figcaption className="p-4 border-t border-white/[0.06]">
                <div className="text-display text-[15px] font-semibold tracking-tight text-bone">
                  Taste the Mixperience
                </div>
                <div className="text-[10.5px] text-mono text-chrome uppercase tracking-[0.1em] mt-1.5">
                  Recomposed, logo intact
                </div>
              </figcaption>
            </figure>

            <figure className="relative glass rounded-2xl overflow-hidden">
              <span className="absolute top-3.5 start-3.5 z-10 text-[10px] text-mono uppercase tracking-[0.1em] font-semibold text-coal bg-halo rounded-full px-2.5 py-1">
                Motion · 9:16
              </span>
              <video
                autoPlay
                muted
                loop
                playsInline
                width={420}
                height={746}
                poster="/arabic-rtl/mcd-doha-mixperience.jpeg"
                className="w-full h-auto bg-black"
              >
                <source src="/arabic-rtl/mcd-doha-dooh.mp4" type="video/mp4" />
              </video>
              <figcaption className="p-4 border-t border-white/[0.06]">
                <div className="text-display text-[15px] font-semibold tracking-tight text-bone">
                  The moving cut, same kit
                </div>
                <div className="text-[10.5px] text-mono text-chrome uppercase tracking-[0.1em] mt-1.5">
                  Statics and video, one master
                </div>
              </figcaption>
            </figure>
          </div>

          <p className="text-sm text-chrome leading-relaxed mt-6">
            Full breakdown of the campaign, the weather trigger and the numbers is in the{" "}
            <a
              href="/blogs/mcdonalds-qatar-live-dooh"
              className="text-halo hover:underline underline-offset-4"
            >
              McDonald&apos;s Qatar live DOOH case study
            </a>
            .
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative py-24 md:py-28 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ The comparison
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              Three approaches, and what each one breaks.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Most AI ad tools fall into one of three groups. The difference between them is not
              output quality. It is whether the system understands direction at all.
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-sm border-collapse">
                <caption className="sr-only">
                  How each approach handles an English master moving to Arabic.
                </caption>
                <thead>
                  <tr className="bg-white/[0.03]">
                    <th
                      scope="col"
                      className="text-start font-semibold text-bone px-5 py-4 border-b border-white/[0.08] w-[28%]"
                    >
                      Requirement
                    </th>
                    <th
                      scope="col"
                      className="text-start font-semibold text-bone px-5 py-4 border-b border-white/[0.08]"
                    >
                      Translate and crop
                    </th>
                    <th
                      scope="col"
                      className="text-start font-semibold text-bone px-5 py-4 border-b border-white/[0.08]"
                    >
                      Template editors
                    </th>
                    <th
                      scope="col"
                      className="text-start font-semibold text-halo px-5 py-4 border-b border-white/[0.08]"
                    >
                      ElarisLabs Localise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.requirement} className={i % 2 === 1 ? "bg-white/[0.015]" : ""}>
                      <th
                        scope="row"
                        className="text-start font-medium text-bone px-5 py-4 border-b border-white/[0.06] align-top"
                      >
                        {row.requirement}
                      </th>
                      <td className="text-chrome px-5 py-4 border-b border-white/[0.06] align-top">
                        {row.crop}
                      </td>
                      <td className="text-chrome px-5 py-4 border-b border-white/[0.06] align-top">
                        {row.template}
                      </td>
                      <td className="text-halo font-medium px-5 py-4 border-b border-white/[0.06] align-top">
                        {row.elaris}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24 md:py-28 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[760px] mb-12">
            <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
              ◉ The workflow
            </p>
            <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
              How Localise works.
            </h2>
            <p className="text-base md:text-lg text-bone/70 leading-relaxed">
              Localise runs on the master you already signed off. It does not regenerate the
              creative, which is the reason the Arabic version still looks like the campaign your
              brand team approved.
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

      {/* Proof */}
      <section className="relative py-24 md:py-28 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, rgba(109,166,217,0.10) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-[1000px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ The proof</p>
          <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-8">
            Live on the street in Doha.
          </h2>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/arabic-rtl/mcd-doha-feels-like-0c.jpeg"
                width={900}
                height={1600}
                loading="lazy"
                alt="McDonald's weather-reactive digital out-of-home board live in Doha reading FEELS LIKE 0°C, running in the nine-screen ELAN Media network."
                className="w-full h-auto"
              />
              <div className="p-7 md:p-9">
                <p className="text-base text-bone/80 leading-relaxed mb-4">
                  ElarisLabs built a weather-reactive out of home campaign for McDonald&apos;s
                  Qatar, running in English and Arabic across a nine-screen digital network operated
                  by ELAN Media. Each screen carried a live temperature reading next to the
                  creative, in both language versions, updating as the day got hotter.
                </p>
                <p className="text-sm text-chrome leading-relaxed mb-6">
                  The Arabic boards were not separate artwork. They came off the same approved
                  master as the English boards, mirrored and retypeset.{" "}
                  <a
                    href="/blogs/mcdonalds-qatar-live-dooh"
                    className="text-halo hover:underline underline-offset-4"
                  >
                    Read the full case study
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
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="relative py-24 md:py-28 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-[760px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ Coverage</p>
          <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-5">
            Languages.
          </h2>
          <p className="text-base md:text-lg text-bone/70 leading-relaxed mb-8">
            Four right-to-left scripts are handled with mirrored composition. The rest run as
            left-to-right retypesetting from the same master.
          </p>

          <div className="flex flex-wrap gap-2">
            {RTL_LANGS.map((l) => (
              <span
                key={l}
                className="text-mono text-[12.5px] text-halo glass-plasma rounded-lg px-3 py-1.5"
              >
                {l} · RTL
              </span>
            ))}
            {LTR_LANGS.map((l) => (
              <span
                key={l}
                className="text-mono text-[12.5px] text-silver glass rounded-lg px-3 py-1.5"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-28 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-[860px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">◉ FAQ</p>
          <h2 className="text-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.06] tracking-tight text-bone mb-10">
            Arabic and RTL ad creative,
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
