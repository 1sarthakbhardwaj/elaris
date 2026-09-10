export type FaqBullet = {
  label: string;
  body: string;
};

export type FaqItem = {
  q: string;
  /** Opening paragraph. */
  intro: string;
  /** Optional structured bullets; renders below the intro when present. */
  bullets?: FaqBullet[];
  /** Optional closing paragraph after the bullets. */
  outro?: string;
};

export const FAQS: FaqItem[] = [
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

export function faqAnswerText(item: FaqItem): string {
  const parts = [item.intro];
  if (item.bullets && item.bullets.length > 0) {
    parts.push(item.bullets.map((b) => `${b.label}: ${b.body}`).join(" "));
  }
  if (item.outro) {
    parts.push(item.outro);
  }
  return parts.join(" ");
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(item),
      },
    })),
  };
}
