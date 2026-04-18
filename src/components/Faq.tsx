"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

interface FaqBullet {
  label: string;
  body: string;
}

interface FaqItem {
  q: string;
  /** Opening paragraph. */
  intro: string;
  /** Optional structured bullets; renders below the intro when present. */
  bullets?: FaqBullet[];
  /** Optional closing paragraph after the bullets. */
  outro?: string;
}

const FAQS: FaqItem[] = [
  {
    q: "What is ElarisLabs and how is it different from other AI creative tools?",
    intro:
      "ElarisLabs is an end-to-end AI creative platform for advertising and marketing teams. Ideation, copy, image generation, video, product staging, and multi-platform deployment all live inside one workspace. Most AI tools solve a single slice: a prompt box that spits out an image, or a template editor with AI bolted on. ElarisLabs is the full stack.",
    bullets: [
      { label: "Campaign Wizard", body: "brief to finished creative in minutes." },
      { label: "AI Video Studio", body: "short-form up to long-form video ads." },
      { label: "URL-to-Video", body: "turn a product page into a video ad." },
      { label: "Product Staging", body: "photorealistic product shots, no photoshoot required." },
      { label: "Creative Studio", body: "node-based canvas for custom pipelines when you want full control." },
    ],
    outro: "What used to take weeks across designers, editors, and agencies now ships in hours.",
  },
  {
    q: "What can I make, and which platforms and formats are supported?",
    intro:
      "If it's a creative deliverable an ad team ships, ElarisLabs is designed to produce it. Static ads, video ads, product photography, full campaign concepts, and localized variants across languages and markets.",
    bullets: [
      { label: "Every ad ratio", body: "9:16, 1:1, 4:5, 16:9, and 1.91:1, safe-zone aware." },
      { label: "Every major channel", body: "Meta, TikTok, YouTube, Google, Snapchat, LinkedIn, and more." },
      { label: "One hero, full matrix", body: "generate a concept once and the platform-specific crops come with it." },
      { label: "Native publishing", body: "push approved creative directly to connected channels. No exporting, renaming, or re-uploading." },
    ],
  },
  {
    q: "How does ElarisLabs handle my brand, and can my whole team collaborate?",
    intro:
      "Upload your brand kit (logos, fonts, colors, product imagery, voice guidelines) and every asset produced in the workspace inherits those constraints. Logos render from your actual vector files, not regenerated approximations. Colors stay on-brand. Copy follows your tone. You're not re-prompting \"please use the right blue\" on every generation. Brand managers, creative leads, performance marketers, and external agency partners all work in the same team workspace with role-based permissions. Comments, approvals, and versioning live alongside the assets, so creative review doesn't need a separate PM tool.",
  },
  {
    q: "How does pricing work, and do you charge per seat?",
    intro:
      "ElarisLabs runs on a compute-credit model. Your plan includes a pool of credits consumed by what you generate, so a static image costs less than a 30-second video, which costs less than a 500-variant localized rollout. You pay for what you produce, not for empty seats.",
    bullets: [
      { label: "Unlimited seats on every plan", body: "bring your full team, stakeholders, and agency partners without seat-math overhead." },
      { label: "Top up anytime", body: "buy credits on demand or enable auto-overage so pipelines never pause mid-campaign." },
      { label: "Right-sized tiers", body: "if your usage consistently exceeds your plan, we'll help you move to the tier that fits." },
    ],
  },
  {
    q: "Is my data secure, and how do I get started?",
    intro:
      "Everything you generate stays in your workspace. We don't train models on your creative, brand assets, or campaign data, and Enterprise plans include SSO and additional security controls. To get started, sign up at elarislabs.ai and you'll get 200 free credits to explore the workspace and try every product. No prompt-engineering skills required: Campaign Wizard takes a simple brief and produces finished ad concepts, and Creative Studio gives power users a node-based canvas when they want deeper control. For enterprise teams that want pooled credits, unlimited seats, SSO, and dedicated onboarding, talk to our team and we'll tailor a plan to your scale.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open ? "rotate-180 text-halo" : "text-chrome"
      }`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [headRef, headShown] = useReveal<HTMLDivElement>(0.2);
  const [listRef, listShown] = useReveal<HTMLDivElement>(0.15);

  return (
    <section className="relative py-28 md:py-32 px-6 md:px-10 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 canvas-grid opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(109,166,217,0.10) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(201,176,135,0.05) 0%, transparent 45%)",
        }}
      />

      <div className="relative max-w-[920px] mx-auto">
        <div
          ref={headRef}
          className={`text-center ${headShown ? "anim-fade-up" : "opacity-0"}`}
        >
          <p className="text-xs text-mono text-halo uppercase tracking-[0.3em] mb-5">
            ◉ FAQ
          </p>
          <h2 className="text-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-bone">
            Frequently asked
            <span className="italic shine-plasma glow-plasma"> questions.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-bone/70 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about ElarisLabs. What you can build,
            how brand memory works, and how billing, security, and team
            collaboration fit together.
          </p>
        </div>

        <div
          ref={listRef}
          className={`mt-14 glass rounded-2xl overflow-hidden ${listShown ? "anim-fade-up d-1" : "opacity-0"}`}
        >
          {FAQS.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={item.q}
                className={i > 0 ? "border-t border-white/[0.06]" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-6 text-left px-5 md:px-7 py-5 md:py-6 hover:bg-white/[0.02] transition-colors group"
                >
                  <span
                    className={`text-[15px] md:text-base leading-snug font-medium transition-colors ${
                      open ? "text-bone" : "text-bone/90 group-hover:text-bone"
                    }`}
                  >
                    {item.q}
                  </span>
                  <Chevron open={open} />
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-7 pb-6 pr-8 md:pr-16 text-sm md:text-[15px] leading-relaxed text-bone/75 space-y-4">
                      <p>{item.intro}</p>
                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="space-y-2.5">
                          {item.bullets.map((b) => (
                            <li key={b.label} className="flex items-start gap-3">
                              <span
                                aria-hidden
                                className="mt-[0.55em] h-1.5 w-1.5 rounded-full bg-halo shadow-[0_0_8px_rgba(168,205,239,0.6)] shrink-0"
                              />
                              <span>
                                <span className="font-semibold text-bone">{b.label}:</span>{" "}
                                <span className="text-bone/70">{b.body}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.outro && <p>{item.outro}</p>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
