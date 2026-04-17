import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ==========================================================================
 * Legal page primitives
 * --------------------------------------------------------------------------
 * Shared shell + card components used by /privacy-policy and /terms. Styled
 * to match the dark / glass aesthetic of the rest of the site: canvas-grid
 * background, plasma accents, chrome body text.
 * ========================================================================*/

export function LegalPage({
  title,
  effective,
  updated,
  children,
}: {
  title: string;
  effective: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-coal text-bone">
      <Navbar />

      {/* Header — ambient grid + plasma glow to match Hero/Pricing */}
      <section className="relative pt-32 md:pt-40 pb-12 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-60 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(109,166,217,0.14) 0%, transparent 55%), radial-gradient(ellipse at 80% 60%, rgba(201,176,135,0.05) 0%, transparent 45%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-chrome hover:text-bone transition-colors mb-8 group anim-fade-up"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
              aria-hidden
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-display text-[clamp(2.2rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight anim-fade-up d-1">
            <span className="text-bone">{title}</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3 anim-fade-up d-2">
            <span className="inline-flex items-center gap-2 text-xs text-mono text-chrome glass rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-halo" />
              Effective: {effective}
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-mono text-chrome glass rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-chrome/50" />
              Last updated: {updated}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="relative mx-auto max-w-4xl px-6 md:px-10 pb-24">
        <div className="space-y-6">{children}</div>
      </div>

      <Footer />
    </main>
  );
}

/** Numbered glass card with section heading + body. */
export function LegalSection({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="glass rounded-2xl p-6 md:p-8">
      <h2 className="text-display text-xl md:text-2xl font-semibold tracking-tight mb-5 text-bone flex items-center gap-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-halo/15 text-halo ring-1 ring-halo/30 text-sm font-bold font-mono">
          {num}
        </span>
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-chrome">
        {children}
      </div>
    </section>
  );
}

/** Nested "A./B./C." sub-heading inside a section. */
export function LegalSubHeading({
  letter,
  children,
}: {
  letter: string;
  children: ReactNode;
}) {
  return (
    <h3 className="text-base font-semibold tracking-tight mt-2 mb-3 text-bone flex items-center gap-2">
      <span className="text-halo">{letter}.</span> {children}
    </h3>
  );
}

/** Muted inner card for groups of related bullets or definitions. */
export function LegalSubCard({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
      {title && (
        <p className="text-sm font-semibold text-bone mb-2">{title}</p>
      )}
      <div className="text-sm text-chrome leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

/** Definition box for "Term: description" lists. */
export function LegalDefinition({
  term,
  desc,
}: {
  term: string;
  desc: string;
}) {
  return (
    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
      <p className="text-sm font-semibold text-bone mb-1">{term}</p>
      <p className="text-sm text-chrome leading-relaxed">{desc}</p>
    </div>
  );
}

/** Top-level halo-bulleted list. */
export function LegalBulletList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-chrome">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-halo shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Compact inner bullet list (for use inside sub-cards). */
export function LegalSubBulletList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="space-y-1.5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-chrome">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-chrome/50 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Highlighted callout — used for contact blocks and key notices. */
export function LegalCallout({
  children,
  variant = "halo",
}: {
  children: ReactNode;
  variant?: "halo" | "warn" | "danger";
}) {
  const styles = {
    halo: "bg-halo/10 border-halo/25 text-bone",
    warn: "bg-[rgba(201,176,135,0.08)] border-[rgba(201,176,135,0.25)] text-bone",
    danger: "bg-[rgba(229,115,115,0.08)] border-[rgba(229,115,115,0.22)] text-bone",
  }[variant];

  return (
    <div className={`p-4 rounded-xl border ${styles}`}>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

/** Inline brand-colored link (for emails, etc.). */
export function LegalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-halo hover:text-lume underline underline-offset-2 decoration-halo/40 hover:decoration-lume transition-colors"
    >
      {children}
    </a>
  );
}

/** Labeled "danger" bucket in acceptable-use lists. */
export function LegalRuleBox({
  title,
  tone = "danger",
  children,
}: {
  title: string;
  tone?: "danger" | "warn";
  children: ReactNode;
}) {
  const dotColor = tone === "warn" ? "bg-brass" : "bg-[#E57373]";
  return (
    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
      <p className="text-sm font-semibold text-bone mb-3 flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
        {title}
      </p>
      <div className="ml-1 text-sm text-chrome">{children}</div>
    </div>
  );
}
