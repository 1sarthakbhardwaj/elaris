"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ==========================================================================
 * Pricing page
 * ==========================================================================
 *
 * Three tiers (Free / Growth / Scale [Most Popular]) on a unified dark
 * surface plus an "Enterprise" row beneath for teams operating at
 * agency-or-global scale. Monthly / Annual toggle — Annual knocks 20% off
 * the monthly effective rate and inlines the discount on the label itself.
 */

type Billing = "monthly" | "annual";

interface Plan {
  id: string;
  name: string;
  description: string;
  tagline?: "Most Popular";
  /** Monthly rate in USD. */
  monthly: number;
  /** Raw monthly credit allotment (formatted with locale separators). */
  credits: number;
  breakdown: { images: number; videos: number; texts: number };
  seats: string;
  /** Additional feature rows rendered beneath seats. */
  features: string[];
  cta: string;
  highlight?: boolean;
}

const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    description:
      "For individuals getting started — ideal for testing and early experimentation.",
    monthly: 0,
    credits: 200,
    breakdown: { images: 20, videos: 1, texts: 200 },
    seats: "Unlimited seats",
    features: ["Team workspace"],
    cta: "Get Started Free",
  },
  {
    id: "growth",
    name: "Growth",
    description:
      "For small creative teams developing ideas and producing focused deliverables.",
    monthly: 29,
    credits: 500,
    breakdown: { images: 50, videos: 2, texts: 500 },
    seats: "Unlimited seats",
    features: ["Team workspace"],
    cta: "Start Growth",
  },
  {
    id: "scale",
    name: "Scale",
    description:
      "For creative teams producing high-volume final assets with full control over every detail.",
    tagline: "Most Popular",
    monthly: 199,
    credits: 5000,
    breakdown: { images: 500, videos: 20, texts: 5000 },
    seats: "Unlimited seats",
    features: ["Team workspace"],
    cta: "Start Scaling",
    highlight: true,
  },
];

const ANNUAL_DISCOUNT = 0.2;

function formatUSD(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

/** Annual effective monthly rate, rounded to nearest whole dollar. */
function annualMonthly(monthly: number): number {
  return Math.round(monthly * (1 - ANNUAL_DISCOUNT));
}

/* ——— Toggle ————————————————————————————— */

function BillingToggle({
  billing,
  onChange,
}: {
  billing: Billing;
  onChange: (b: Billing) => void;
}) {
  const isAnnual = billing === "annual";

  const labelBase =
    "text-sm font-medium px-1 transition-colors cursor-pointer select-none";

  return (
    <div className="flex items-center justify-center gap-3">
      {/* Monthly label */}
      <button
        type="button"
        onClick={() => onChange("monthly")}
        aria-pressed={!isAnnual}
        className={`${labelBase} ${isAnnual ? "text-chrome hover:text-bone" : "text-bone"}`}
      >
        Monthly
      </button>

      {/* Switch track */}
      <button
        type="button"
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
        onClick={() => onChange(isAnnual ? "monthly" : "annual")}
        className={`relative h-7 w-[60px] rounded-full border transition-colors duration-300 ease-[cubic-bezier(0.34,1.26,0.64,1)] ${
          isAnnual
            ? "border-halo/40 bg-gradient-to-r from-plasma to-halo shadow-[0_0_24px_-4px_rgba(168,205,239,0.6)]"
            : "border-white/15 bg-white/10"
        }`}
      >
        <span
          aria-hidden
          className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-bone shadow-[0_2px_6px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.34,1.26,0.64,1)] ${
            isAnnual ? "translate-x-[31px]" : "translate-x-0"
          }`}
        />
      </button>

      {/* Annual label — inline discount chip mirrors the reference */}
      <button
        type="button"
        onClick={() => onChange("annual")}
        aria-pressed={isAnnual}
        className={`${labelBase} inline-flex items-center gap-1.5 ${
          isAnnual ? "text-bone" : "text-chrome hover:text-bone"
        }`}
      >
        Annual
        <span
          className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border transition-colors ${
            isAnnual
              ? "border-halo/40 text-halo bg-halo/10"
              : "border-white/10 text-chrome"
          }`}
        >
          20% off
        </span>
      </button>
    </div>
  );
}

/* ——— Icons ————————————————————————————— */

function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Grid3({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ——— Plan card ————————————————————————————— */

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const highlight = plan.highlight === true;
  const isFree = plan.monthly === 0;

  const effectiveMonthly =
    billing === "annual" ? annualMonthly(plan.monthly) : plan.monthly;
  // Strikethrough only appears on Annual for paid plans, to show the
  // monthly-plan rate being discounted. Monthly view shows a clean rate.
  const showStrike = billing === "annual" && !isFree;
  const billedLabel = isFree
    ? "forever free"
    : billing === "annual"
      ? "billed annually"
      : "billed monthly";

  // Unit price per 100 credits, tracks the billing toggle.
  const unitPerHundred = !isFree
    ? `$${((effectiveMonthly / plan.credits) * 100).toFixed(2)}`
    : null;

  const shellClass = highlight
    ? "relative bg-[#0B0B10]/90 ring-1 ring-inset ring-halo/30 shadow-[0_30px_80px_-20px_rgba(109,166,217,0.35)]"
    : "relative bg-[#0B0B10]/80 border border-white/[0.06]";

  const ctaClass = highlight
    ? "bg-gradient-to-b from-plasma to-[#4F8CC9] text-bone shadow-[0_10px_40px_-10px_rgba(109,166,217,0.55)] hover:shadow-[0_14px_44px_-10px_rgba(109,166,217,0.75)]"
    : "bg-white/5 border border-white/10 text-bone hover:bg-white/10";

  return (
    <div
      className={`${shellClass} rounded-[24px] p-7 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 overflow-hidden backdrop-blur-sm`}
    >
      {/* Plasma wash + top accent line on the Studio card */}
      {highlight && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[24px]"
            style={{
              background:
                "radial-gradient(ellipse at 50% -10%, rgba(168,205,239,0.16) 0%, transparent 55%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-8 right-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(168,205,239,0.65), transparent)",
            }}
          />
        </>
      )}

      <div className="relative flex flex-col flex-1">
        {/* Header: name + Most Popular pill */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-display text-[28px] font-semibold tracking-tight text-bone">
            {plan.name}
          </h3>
          {plan.tagline && (
            <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] bg-halo/15 text-halo border border-halo/30 backdrop-blur">
              {plan.tagline}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-chrome leading-relaxed min-h-[42px]">
          {plan.description}
        </p>

        <div className="mt-5 border-t border-white/[0.06]" />

        {/* Credits + breakdown + seats */}
        <div className="mt-5">
          <div className="flex items-baseline gap-2">
            <span className="text-mono text-xl font-semibold text-bone">
              {plan.credits.toLocaleString("en-US")}
            </span>
            <span className="text-xs text-chrome">credits/mo</span>
          </div>

          <ul className="mt-3 space-y-2 text-xs text-chrome">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-halo shrink-0" />
              <span className="flex items-center gap-2 flex-wrap">
                <span>{plan.breakdown.images.toLocaleString("en-US")} images</span>
                <span className="text-white/15">|</span>
                <span>{plan.breakdown.videos.toLocaleString("en-US")} videos</span>
                <span className="text-white/15">|</span>
                <span>{plan.breakdown.texts.toLocaleString("en-US")} texts</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-halo shrink-0" />
              <span>{plan.seats}</span>
            </li>
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-halo shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-white/[0.06]" />

        {/* Price block */}
        <div className="mt-5 flex items-baseline gap-2.5 flex-wrap">
          <span
            className="text-display font-semibold tracking-tight leading-none text-bone"
            style={{ fontSize: "clamp(2.5rem, 4.2vw, 3.25rem)" }}
          >
            <span className="align-top text-[0.55em] mr-0.5 font-semibold">$</span>
            {effectiveMonthly.toLocaleString("en-US")}
          </span>
          {showStrike && (
            <span className="text-sm line-through text-chrome/60">
              {formatUSD(plan.monthly)}
            </span>
          )}
          <span className="text-xs text-chrome">{billedLabel}</span>
        </div>

        {/* Plasma pills — paid tiers only */}
        {unitPerHundred && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium bg-plasma/10 border border-plasma/25 text-halo">
              <Grid3 className="w-3 h-3" />
              100 credits = {unitPerHundred}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium bg-plasma/10 border border-plasma/25 text-halo">
              <Check className="w-3 h-3" />
              Volume Discount
            </span>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1 min-h-[20px]" />

        {/* CTA */}
        <a
          href="https://studio.elarislabs.ai"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 h-11 inline-flex items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition-all duration-300 ${ctaClass}`}
        >
          {plan.cta}
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}

/* ——— Enterprise row ————————————————————————————— */

const ENTERPRISE_FEATURES: string[] = [
  "SSO & SAML",
  "Dedicated CSM",
  "99.9% Uptime SLA",
  "Custom contracts",
  "Volume pricing",
  "On-prem deployment",
];

function EnterpriseRow() {
  return (
    <div className="relative mt-6 rounded-[24px] bg-[#0B0B10]/85 border border-white/[0.08] backdrop-blur-sm px-7 md:px-9 py-7 overflow-hidden">
      {/* Warm brass glow to signal premium tier, distinct from the */}
      {/* plasma-halo on the Scale card. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[24px]"
        style={{
          background:
            "radial-gradient(ellipse at 85% 10%, rgba(201,176,135,0.12) 0%, transparent 45%), radial-gradient(ellipse at 15% 90%, rgba(109,166,217,0.08) 0%, transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-8 right-8 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(232,217,184,0.55), rgba(168,205,239,0.45), transparent)",
        }}
      />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-pearl">
              Enterprise
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-pearl/60 to-transparent" />
          </div>
          <h3 className="mt-2 text-display text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold tracking-tight text-bone leading-tight">
            Built for teams operating at global scale.
          </h3>
          <p className="mt-2 text-sm text-chrome leading-relaxed">
            Unlimited credits, white-glove onboarding, and a dedicated team to
            help your org ship at agency-level velocity — with the security,
            control, and procurement your legal team expects.
          </p>

          {/* Feature chips */}
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {ENTERPRISE_FEATURES.map((f) => (
              <li
                key={f}
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium bg-white/[0.04] border border-white/10 text-bone/90"
              >
                <Check className="w-3 h-3 text-pearl shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://calendly.com/sarthak-bhardwaj-elarislabs/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl text-sm font-semibold bg-gradient-to-b from-pearl to-brass text-coal shadow-[0_10px_40px_-10px_rgba(201,176,135,0.55)] hover:shadow-[0_14px_44px_-10px_rgba(201,176,135,0.75)] transition-all duration-300 whitespace-nowrap self-start lg:self-auto shrink-0"
        >
          Talk to Sales
          <ArrowRight />
        </a>
      </div>
    </div>
  );
}

/* ——— Page ————————————————————————————— */

export default function PricingPage() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <main className="relative min-h-screen bg-coal text-bone">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-20 px-6 md:px-10 overflow-hidden">
        {/* Ambient grid + plasma + warm top-right glow */}
        <div className="absolute inset-0 canvas-grid opacity-60 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(109,166,217,0.12) 0%, transparent 55%), radial-gradient(ellipse at 85% 10%, rgba(201,176,135,0.10) 0%, transparent 45%), radial-gradient(ellipse at 15% 80%, rgba(109,166,217,0.05) 0%, transparent 45%)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto anim-fade-up d-1">
            <h1 className="text-display text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
              <span>Simple, transparent</span>
              <br />
              <span className="italic shine-plasma glow-plasma">pricing.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-chrome leading-relaxed">
              Start free. Pay only for what you generate. Every plan includes
              brand memory, smart resizing, and watermark-free exports.
            </p>
          </div>

          {/* Toggle */}
          <div className="mt-12 anim-fade-up d-2">
            <BillingToggle billing={billing} onChange={setBilling} />
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 anim-fade-up d-3">
            {PLANS.map((p) => (
              <PlanCard key={p.id} plan={p} billing={billing} />
            ))}
          </div>

          {/* Enterprise */}
          <div className="anim-fade-up d-4">
            <EnterpriseRow />
          </div>

          {/* Foot note */}
          <p className="mt-10 text-center text-xs text-chrome">
            Prices in USD. Taxes may apply. Credits refresh at the start of
            every billing period.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
