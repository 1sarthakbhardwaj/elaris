import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DocCard from "@/components/DocCard";
import { DOC_PAGES, DOC_SECTIONS } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Docs | ElarisLabs",
  description:
    "Developer documentation for ElarisLabs — MCP setup, integrations, API keys, and connecting Creative Studio to Claude, Cursor, and Slack.",
};

export default function DocsPage() {
  return (
    <main className="relative min-h-screen bg-coal text-bone">
      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-16 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 canvas-grid opacity-60 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(94,200,255,0.12) 0%, transparent 55%)",
          }}
        />

        <div className="relative max-w-[900px] mx-auto">
          <p className="text-xs text-mono text-halo uppercase tracking-[0.25em] mb-5 anim-fade-up">
            ◉ Documentation
          </p>
          <h1 className="text-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] tracking-tight anim-fade-up d-1">
            Build with <span className="italic shine-plasma">ElarisLabs.</span>
          </h1>
          <p className="mt-5 text-chrome text-base md:text-lg max-w-2xl anim-fade-up d-2">
            Integration guides, MCP setup, and reference docs for connecting Creative Studio to your stack.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[900px] mx-auto space-y-14">
          {DOC_SECTIONS.map((section) => {
            const pages = DOC_PAGES.filter((doc) => doc.sectionId === section.id);
            if (!pages.length) return null;

            return (
              <div key={section.id}>
                <div className="mb-6 anim-fade-up">
                  <h2 className="text-display text-2xl text-bone">{section.title}</h2>
                  <p className="text-chrome text-sm md:text-base mt-2 max-w-2xl">
                    {section.description}
                  </p>
                </div>
                <div className="grid gap-5">
                  {pages.map((doc, i) => (
                    <DocCard
                      key={doc.slug}
                      doc={doc}
                      headingLevel="h3"
                      className="anim-fade-up"
                      style={{ animationDelay: `${0.12 + i * 0.08}s` }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
