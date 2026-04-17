"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ==========================================================================
 * Pricing page
 * ==========================================================================
 *
 * Four tiers (Free, Growth, Scale [Most Popular], Enterprise) with a
 * Monthly / Annual toggle. Annual pricing is 20% off and displays the
 * original monthly price struck through + "billed annually" caption.
 * The Scale card is visually inverted (dark + plasma halo) to call out the
 * popular plan, the rest are light. A 4-stat plasma strip sits between
 * the subhead and the toggle as a social-proof beat.
 */

type Billing = "monthly" | "annual";

interface Plan {
  id: string;
  name: string;
  tagline?: "Most Popular";
  /** Monthly rate in USD. Null for Enterprise (contact sales). */
  monthly: number | null;
  credits: string;
  volume: string;
  cta: string;
  /** Inverted dark card with plasma halo. */
  highlight?: boolean;
}

const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    credits: "2,000 Credits",
    volume: "~200 Images or 8 Videos",
    cta: "Get Started Free",
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 49,
    credits: "5,000 Credits",
    volume: "~500 Images or 20 Videos",
    cta: "Start Growth",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Most Popular",
    monthly: 399,
    credits: "50,000 Credits",
    volume: "~5,000 Images or 200 Videos",
    cta: "Start Scaling",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: null,
    credits: "250,000+ Credits",
    volume: "~25,000+ Images or 1,000+ Videos",
    cta: "Talk to Sales",
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
      {/* Monthly label — clickable */}
      <button
        type="button"
        onClick={() => onChange("monthly")}
        aria-pressed={!isAnnual}
        className={`${labelBase} ${isAnnual ? "text-chrome hover:text-bone" : "text-bone"}`}
      >
        Monthly
      </button>

      {/* Track */}
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

      {/* Annual label — clickable */}
      <button
        type="button"
        onClick={() => onChange("annual")}
        aria-pressed={isAnnual}
        className={`${labelBase} ${isAnnual ? "text-bone" : "text-chrome hover:text-bone"}`}
      >
        Annual
      </button>

      {/* Save 20% chip — only on annual */}
      {isAnnual && (
        <span
          className="ml-1 inline-flex items-center rounded-full text-[11px] font-semibold px-2.5 py-1 text-[#0E3B1E]"
          style={{
            background:
              "linear-gradient(180deg, #D9F5DF 0%, #B9EBC6 100%)",
            boxShadow:
              "0 0 18px -4px rgba(100, 220, 140, 0.45), inset 0 1px 0 rgba(255,255,255,0.45)",
            animation: "chip-in 0.35s cubic-bezier(0.34,1.26,0.64,1) backwards",
          }}
        >
          Save 20%
        </span>
      )}
    </div>
  );
}

/* ——— Icons (inline to avoid new deps) ——————————————— */

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      <circle cx="12" cy="12" r="2.5" />
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

/* ——— Price display ————————————————————————————— */

function PriceDisplay({
  plan,
  billing,
  highlight,
}: {
  plan: Plan;
  billing: Billing;
  highlight: boolean;
}) {
  if (plan.monthly === null) {
    return (
      <div className="mt-2">
        <span
          className="text-display font-semibold tracking-tight leading-[0.95] block"
          style={{ fontSize: "clamp(3rem, 5.5vw, 4.25rem)" }}
        >
          Custom
        </span>
      </div>
    );
  }

  const isAnnual = billing === "annual";
  const monthly = plan.monthly;
  const effective = isAnnual ? annualMonthly(monthly) : monthly;
  const showSubline = isAnnual && monthly > 0;

  const strikeColor = highlight ? "text-chrome/70" : "text-[#6b6d75]";
  const billedColor = highlight ? "text-[#5BDC8A]" : "text-[#1F7A3F]";

  return (
    <div className="mt-2">
      <div className="flex items-baseline gap-1">
        <span
          className={`text-display font-semibold tracking-tight leading-[0.95] ${
            highlight ? "text-bone" : "text-[#111113]"
          }`}
          style={{ fontSize: "clamp(3rem, 6vw, 4.25rem)" }}
        >
          <span className="align-top text-[0.55em] mr-0.5 font-semibold">$</span>
          {effective.toLocaleString("en-US")}
        </span>
        <span
          className={`text-sm ${
            highlight ? "text-chrome" : "text-[#6b6d75]"
          }`}
        >
          /mo
        </span>
      </div>

      {showSubline && (
        <div
          className={`mt-2 pt-2 flex items-baseline gap-2 text-xs ${
            highlight ? "border-t border-white/10" : "border-t border-black/5"
          }`}
        >
          <span className={`line-through ${strikeColor}`}>
            {formatUSD(monthly)}/mo
          </span>
          <span className={`font-medium ${billedColor}`}>billed annually</span>
        </div>
      )}
    </div>
  );
}

/* ——— Plan card ————————————————————————————— */

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const highlight = plan.highlight === true;

  const shell = highlight
    ? "relative bg-[#0B0B10] text-bone ring-1 ring-inset ring-white/10 shadow-[0_30px_70px_-20px_rgba(168,205,239,0.35)]"
    : "relative bg-[#F5F5F7] text-[#111113] border border-black/[0.06] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.45)]";

  const creditBox = highlight
    ? "bg-white/[0.04] border border-white/10"
    : "bg-white border border-black/[0.05]";

  const creditIconTile = highlight
    ? "bg-halo/15 text-halo ring-1 ring-halo/30"
    : "bg-[#F2ECFC] text-[#8E5AC6] ring-1 ring-[#8E5AC6]/20";

  const cta = highlight
    ? "bg-bone text-[#0B0B10] hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]"
    : "bg-[#0B0B10] text-bone hover:bg-black hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]";

  const volumeText = highlight ? "text-chrome/85" : "text-[#6b6d75]";

  const planNameClass = `text-[11px] font-mono uppercase tracking-[0.22em] ${
    highlight ? "text-chrome" : "text-[#6b6d75]"
  }`;

  return (
    <div
      className={`${shell} rounded-[28px] p-8 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 overflow-hidden`}
      style={{ minHeight: 460 }}
    >
      {/* Inner plasma wash on the Scale card */}
      {highlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[28px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(168,205,239,0.22) 0%, transparent 55%)",
          }}
        />
      )}

      <div className="relative flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className={planNameClass}>{plan.name}</span>
          {plan.tagline && (
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                highlight
                  ? "bg-white/10 text-bone border border-white/15 backdrop-blur"
                  : "bg-[#111113] text-bone"
              }`}
            >
              {plan.tagline}
            </span>
          )}
        </div>

        {/* Price */}
        <PriceDisplay plan={plan} billing={billing} highlight={highlight} />

        {/* Credits chip */}
        <div className={`mt-7 rounded-2xl px-4 py-3.5 ${creditBox}`}>
          <div className="flex items-center gap-2.5">
            <span
              className={`inline-flex items-center justify-center w-[22px] h-[22px] rounded-md ${creditIconTile}`}
            >
              <Sparkle className="w-3 h-3" />
            </span>
            <span
              className={`text-sm font-semibold ${
                highlight ? "text-bone" : "text-[#111113]"
              }`}
            >
              {plan.credits}
            </span>
          </div>
          <p className={`mt-1.5 text-[11px] ${volumeText}`}>{plan.volume}</p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <a
          href="https://studio.elarislabs.ai"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-7 h-11 inline-flex items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition-all duration-300 ${cta}`}
        >
          {plan.cta}
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
        {/* Ambient grid & plasma glow — same treatment as Hero */}
        <div className="absolute inset-0 canvas-grid opacity-60 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(109,166,217,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(201,176,135,0.05) 0%, transparent 45%)",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto">
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 anim-fade-up d-3">
            {PLANS.map((p) => (
              <PlanCard key={p.id} plan={p} billing={billing} />
            ))}
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
