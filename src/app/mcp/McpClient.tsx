"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useReveal } from "@/components/useReveal";

/* ==========================================================================
 * MCP server page — interactive client shell
 * ==========================================================================
 *
 * Marketing page for the ElarisLabs MCP server: run the brand's creative
 * engine from any MCP agent (Claude, Cursor, and friends). Layout follows a
 * calm, centered, panel-driven structure; a thin server wrapper at
 * ./page.tsx owns SEO, this client owns the copy-to-clipboard interactions.
 */

const MCP_URL = "https://mcp.elarislabs.ai/mcp";
const CLAUDE_CMD = `claude mcp add --transport http elaris ${MCP_URL}`;

type ToolCategory = "read" | "make" | "ship";

type Tool = {
  category: ToolCategory;
  name: string;
  desc: string;
};

const TOOLS: Tool[] = [
  {
    category: "read",
    name: "list_brands",
    desc: "Browse your brands and the campaigns living inside each one.",
  },
  {
    category: "read",
    name: "get_asset",
    desc: "Pull an approved hero, layer file, or past creative by name.",
  },
  {
    category: "read",
    name: "list_models",
    desc: "See every model on tap for image, video, and voice work.",
  },
  {
    category: "make",
    name: "upload_reference",
    desc: "Bring a PSD, image, or clip in as a reference.",
  },
  {
    category: "make",
    name: "generate",
    desc: "Kick off on-brand image or video generation on any model.",
  },
  {
    category: "make",
    name: "run_brand_pack",
    desc: "Resize one approved asset across every ratio in a single pass.",
  },
  {
    category: "ship",
    name: "send_to_canvas",
    desc: "Push finished variants back to your workspace, ready to share.",
  },
];

const CATEGORY_LABEL: Record<ToolCategory, string> = {
  read: "Read",
  make: "Make",
  ship: "Ship",
};

const CATEGORY_ACCENT: Record<ToolCategory, string> = {
  read: "text-halo",
  make: "text-pearl",
  ship: "text-chrome",
};

type Feature = {
  title: string;
  body: string;
  art: "brief" | "guardrails" | "ratios";
  prompt: string;
  toolLine: string;
};

const FEATURES: Feature[] = [
  {
    title: "Your context flows in",
    art: "brief",
    prompt: "Use our summer sale brief for the new hero.",
    toolLine: "→ read brief · brand context",
    body: "Brief in Claude and the MCP server already knows. Point at a codebase in Cursor and it reads the copy. The agent's context becomes the prompt, so nothing gets lost in translation.",
  },
  {
    title: "Guardrails, not guesswork",
    art: "guardrails",
    prompt: "Keep it on brand — palette and type locked.",
    toolLine: "→ apply brand guardrails",
    body: "Colors, type, safe zones, and voice ship as constraints. It won't hand back off-brand work. What comes out of the chat is ready for the client, not a first draft to fix.",
  },
  {
    title: "One asset, every ratio",
    art: "ratios",
    prompt: "Resize the approved hero for every placement.",
    toolLine: "→ run_brand_pack · 4 ratios",
    body: "Pull an approved hero from a past campaign and re-treat it in seconds. Brand Pack resizes across every placement in a single pass, from Stories to landscape DOOH.",
  },
];

type UseCase = {
  who: string;
  title: string;
  body: string;
};

const USE_CASES: UseCase[] = [
  {
    who: "Enterprise retail",
    title: "Hundreds of product shots in one afternoon",
    body: "A regional retail team calls their brand pack from Claude as new SKUs land. Drop a product cut, get every placement back on brand, ready for the storefront.",
  },
  {
    who: "Global QSR",
    title: "Weather-reactive DOOH on demand",
    body: "A campaign team runs localized outdoor creative from chat, swapping copy and visuals per venue as briefs come in, without reopening the canvas.",
  },
  {
    who: "Paint & coatings",
    title: "Product reveal, every shade",
    body: "A marketing team built a luxury reveal system in ElarisLabs. They call it from chat during planning to spin up concept boards without booking a shoot.",
  },
  {
    who: "Financial services",
    title: "Many portfolio brands, one voice",
    body: "An ops team runs a shared DOOH pipeline from chat, holding every portfolio brand to its own guardrails across ratios and two languages at once.",
  },
];

/* ——— Reveal wrapper ————————————————————————————— */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, shown] = useReveal<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className={`${shown ? "anim-fade-up" : "opacity-0"} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/* ——— Icons ————————————————————————————— */

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

/* ——— Copy field ————————————————————————————— */

function CopyField({
  value,
  label,
  className = "",
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 ${className}`}
    >
      {label && (
        <span className="text-mono shrink-0 rounded-md border border-white/[0.08] bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-chrome/70">
          {label}
        </span>
      )}
      <code className="text-mono flex-1 overflow-x-auto whitespace-nowrap text-[13px] text-bone scrollbar-hide">
        {value}
      </code>
      <button
        type="button"
        onClick={onCopy}
        className={`text-mono shrink-0 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
          copied
            ? "border-halo/50 text-halo"
            : "border-white/10 bg-white/[0.03] text-chrome hover:border-halo/40 hover:text-bone"
        }`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

/* ——— Mock screenshot frame ————————————————————————————— */

function MockFrame({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B0C0F] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="text-mono ml-2 text-[11px] text-chrome/55">{label}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function PromptLine({ text }: { text: string }) {
  return (
    <div className="mb-3 flex justify-end">
      <span className="rounded-lg rounded-br-sm border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-[13px] text-bone/90">
        {text}
      </span>
    </div>
  );
}

function ToolLine({ text }: { text: string }) {
  return (
    <div className="text-mono mb-4 flex items-center gap-2 text-[12px] text-chrome">
      <span className="text-halo">{text.slice(0, 1)}</span>
      <span className="text-chrome/80">{text.slice(1).trim()}</span>
    </div>
  );
}

/* ——— Feature art blocks ————————————————————————————— */

function FeatureArt({ art }: { art: Feature["art"] }) {
  if (art === "brief") {
    return (
      <div className="space-y-2">
        {[
          { k: "brand", v: "your brand · palette locked", accent: "text-halo" },
          { k: "voice", v: 'short lines · clear voice · "we"', accent: "text-pearl" },
          { k: "context", v: "summer sale · regional market", accent: "text-halo" },
        ].map((row) => (
          <div
            key={row.k}
            className="text-mono flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-black/30 px-3 py-2.5 text-xs text-chrome"
          >
            <span className={row.accent}>{row.k}</span>
            {row.v}
          </div>
        ))}
      </div>
    );
  }

  if (art === "guardrails") {
    const chips: { label: string; dot: string }[] = [
      { label: "#6DA6D9 plasma", dot: "bg-plasma" },
      { label: "#A8CDEF halo", dot: "bg-halo" },
      { label: "#07070A coal", dot: "bg-coal border border-white/20" },
      { label: "Bricolage Grotesque", dot: "bg-halo" },
      { label: "Geist", dot: "bg-pearl" },
      { label: "safe zones on", dot: "bg-plasma" },
    ];
    return (
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <span
            key={c.label}
            className="text-mono inline-flex items-center gap-2 rounded-full border border-white/[0.1] px-3 py-1.5 text-[11px] text-chrome"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
            {c.label}
          </span>
        ))}
      </div>
    );
  }

  // ratios
  return (
    <div className="flex items-end gap-2.5">
      {[
        { w: "w-[34px]", h: "h-[88px]", r: "9:16" },
        { w: "w-[56px]", h: "h-[70px]", r: "4:5" },
        { w: "w-[70px]", h: "h-[70px]", r: "1:1" },
        { w: "w-[104px]", h: "h-[58px]", r: "16:9" },
      ].map((box) => (
        <div
          key={box.r}
          className={`flex ${box.w} ${box.h} items-end justify-center rounded-md border border-white/[0.12] bg-black/30 pb-1`}
        >
          <span className="text-mono text-[9px] text-chrome/60">{box.r}</span>
        </div>
      ))}
    </div>
  );
}

/* ——— Hero product mock ————————————————————————————— */

function HeroMock() {
  return (
    <MockFrame label="claude · elarislabs connected" className="text-left">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-mono mb-2 text-[11px] uppercase tracking-[0.14em] text-chrome/55">
            You · in Claude
          </p>
          <PromptLine text="Take our summer hero and run the brand pack — IG, Stories, and a landscape DOOH cut." />
          <p className="text-mono mb-2 mt-4 text-[11px] uppercase tracking-[0.14em] text-chrome/55">
            ElarisLabs MCP
          </p>
          <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3.5 text-[13px] leading-relaxed text-bone/90">
            On it. Pulling the approved hero, applying brand guardrails,
            resizing across three ratios.
            <div className="text-mono mt-3 space-y-1.5 text-[12px] text-chrome">
              <div>
                <span className="text-halo">→</span> get_asset{" "}
                <span className="text-chrome/50">summer_hero_v3</span>
              </div>
              <div>
                <span className="text-halo">→</span> run_brand_pack{" "}
                <span className="text-chrome/50">3 ratios</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-mono mb-2 text-[11px] uppercase tracking-[0.14em] text-chrome/55">
            Output · ready to share
          </p>
          <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3.5 text-[13px] leading-relaxed text-bone/90">
            6 variants generated on brand. Palette locked, type set, safe zones
            respected.
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                "from-plasma/70 to-deep/70",
                "from-brass/60 to-[#6f6040]",
                "from-steel/70 to-ember",
                "from-halo/60 to-plasma/60",
                "from-pearl/50 to-brass/50",
                "from-soot to-coal",
              ].map((g, i) => (
                <div
                  key={i}
                  className={`aspect-[4/5] rounded-lg bg-gradient-to-br ${g}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-2.5 text-[13px] text-bone/90">
            Sent back to your canvas ✓
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

/* ——— Page ————————————————————————————— */

export default function McpClient() {
  return (
    <main className="relative min-h-screen bg-coal text-bone">
      <Navbar />

      {/* Hero */}
      <header className="relative overflow-hidden px-6 pb-20 pt-40 md:px-10 md:pt-48">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(760px 420px at 50% -10%, rgba(109,166,217,0.14) 0%, transparent 62%)",
          }}
        />

        <div className="relative mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="anim-fade-up flex justify-center">
              <span className="text-mono inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] text-chrome">
                <span className="h-1.5 w-1.5 rounded-full bg-halo anim-breathe" />
                ElarisLabs MCP server
              </span>
            </div>

            <h1 className="anim-fade-up d-1 mx-auto mt-7 max-w-[16ch] text-display text-bone leading-[1.02] tracking-tight [font-size:clamp(2.25rem,5.5vw,4rem)]">
              Run your brand&apos;s{" "}
              <span className="italic shine-plasma">creative engine</span> from
              any chat.
            </h1>

            <p className="anim-fade-up d-2 mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-chrome">
              Generate on-brand ads, resize across every ratio, and pull
              approved assets straight from Claude, Cursor, and any
              MCP-compatible agent, all from the chat.
            </p>

            <div className="anim-fade-up d-3 mt-9 flex justify-center">
              <a
                href="#install"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-lume to-halo px-7 py-3.5 text-sm font-semibold text-coal shadow-[0_0_40px_-8px_rgba(168,205,239,0.55)] transition-all hover:shadow-[0_0_60px_-8px_rgba(168,205,239,0.85)] hover:brightness-110"
              >
                Install the MCP now
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="anim-fade-up d-4 mx-auto mt-6 max-w-[560px]">
              <CopyField value={CLAUDE_CMD} />
            </div>
          </div>

          <div className="anim-fade-up d-5 mx-auto mt-16 max-w-[980px]">
            <HeroMock />
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="work" className="relative px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1100px] space-y-5">
          {FEATURES.map((feature, i) => {
            const mockRight = i % 2 === 1;
            return (
              <Reveal key={feature.title}>
                <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/[0.07] bg-white/[0.015] p-7 md:grid-cols-2 md:gap-12 md:p-12">
                  <div className={mockRight ? "md:order-1" : "md:order-2"}>
                    <h2 className="text-display text-[26px] font-semibold tracking-tight text-bone md:text-[30px]">
                      {feature.title}
                    </h2>
                    <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-chrome">
                      {feature.body}
                    </p>
                  </div>
                  <div className={mockRight ? "md:order-2" : "md:order-1"}>
                    <MockFrame label="elarislabs · in chat">
                      <PromptLine text={feature.prompt} />
                      <ToolLine text={feature.toolLine} />
                      <FeatureArt art={feature.art} />
                    </MockFrame>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="relative px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className="text-mono mb-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-halo">
              7 tools
            </p>
            <h2 className="text-display text-bone leading-[1.04] tracking-tight [font-size:clamp(1.8rem,4vw,2.6rem)]">
              Every tool your agent can call.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-9 overflow-hidden rounded-2xl border border-white/[0.08]">
              {TOOLS.map((tool, i) => (
                <div
                  key={tool.name}
                  className={`grid grid-cols-1 gap-1.5 px-5 py-4 transition-colors hover:bg-white/[0.02] md:grid-cols-[110px_220px_1fr] md:items-center md:gap-4 md:px-7 md:py-5 ${
                    i > 0 ? "border-t border-white/[0.06]" : ""
                  }`}
                >
                  <span
                    className={`text-mono text-[11px] font-semibold uppercase tracking-[0.16em] ${CATEGORY_ACCENT[tool.category]}`}
                  >
                    {CATEGORY_LABEL[tool.category]}
                  </span>
                  <span className="text-mono text-[15px] text-bone">
                    {tool.name}
                  </span>
                  <span className="text-[14px] leading-relaxed text-chrome">
                    {tool.desc}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="relative px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <Reveal className="text-center">
            <p className="text-mono mb-4 text-[11px] uppercase tracking-[0.25em] text-chrome/60">
              Install
            </p>
            <h2 className="text-display text-bone leading-[1.04] tracking-tight [font-size:clamp(1.8rem,4vw,2.6rem)]">
              One URL. Any agent.
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-lg text-chrome">
              Connect once and it shows up wherever you already work.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-9">
            <CopyField value={MCP_URL} label="MCP URL" />
          </Reveal>

          <Reveal delay={0.14} className="mt-8">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 md:p-8">
              <p className="text-mono mb-5 text-center text-[11px] uppercase tracking-[0.2em] text-chrome/50">
                Or install manually
              </p>
              <p className="text-mono mb-2 text-[11px] uppercase tracking-[0.14em] text-chrome/60">
                Claude Code
              </p>
              <CopyField value={CLAUDE_CMD} className="mb-6" />
              <p className="text-mono mb-2 text-[11px] uppercase tracking-[0.14em] text-chrome/60">
                Claude web · desktop
              </p>
              <p className="text-sm leading-relaxed text-chrome">
                Open{" "}
                <span className="text-mono rounded border border-white/10 bg-black/40 px-1.5 py-0.5 text-[12.5px] text-halo">
                  Settings → Connectors
                </span>
                , add a custom connector named{" "}
                <span className="font-semibold text-bone">ElarisLabs</span> with
                the URL above, then approve OAuth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use cases */}
      <section className="relative px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <Reveal className="text-center">
            <h2 className="text-display text-bone leading-[1.04] tracking-tight [font-size:clamp(1.8rem,4vw,2.6rem)]">
              How teams are using the MCP.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {USE_CASES.map((useCase, i) => (
              <Reveal key={useCase.title} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7 transition-colors hover:border-white/[0.14] md:p-8">
                  <span className="text-mono inline-flex items-center rounded-full border border-white/[0.1] px-3 py-1 text-[11px] uppercase tracking-[0.1em] text-chrome">
                    {useCase.who}
                  </span>
                  <h3 className="mt-5 text-display text-[24px] font-semibold leading-tight tracking-tight text-bone">
                    {useCase.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-chrome">
                    {useCase.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-6 py-24 text-center md:px-10 md:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(109,166,217,0.12) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[820px]">
          <Reveal>
            <h2 className="mx-auto max-w-[20ch] text-display text-bone leading-[1.04] tracking-tight [font-size:clamp(2rem,5vw,3.5rem)]">
              Your brand&apos;s creative engine, one message away.
            </h2>
            <p className="mx-auto mt-5 max-w-[50ch] text-lg text-chrome">
              Connect the MCP server to your favourite agent and brief your next
              campaign from the chat you&apos;re already in.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="#install"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-lume to-halo px-8 py-4 text-base font-semibold text-coal shadow-[0_0_40px_-8px_rgba(168,205,239,0.55)] transition-all hover:shadow-[0_0_60px_-8px_rgba(168,205,239,0.85)] hover:brightness-110"
              >
                Install the MCP now
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
