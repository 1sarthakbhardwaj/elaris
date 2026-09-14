import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/mcp/InnerHeadline";
import Features from "@/components/other-pages/mcp/Features";
import Tools from "@/components/other-pages/mcp/Tools";
import Install from "@/components/other-pages/mcp/Install";
import UseCases from "@/components/other-pages/mcp/UseCases";
import CTAWithMarquee from "@/components/other-pages/pricing/CTAWithMarquee";

export const metadata: Metadata = {
  title: "MCP Server | ElarisLabs AI - The Agentic Business OS",
  description:
    "Run the ElarisLabs creative engine from Claude, Cursor, and any MCP-compatible agent. Generate on-brand ads, resize across ratios, and pull approved assets from chat.",
};

export default function McpPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <Features />
        <Tools />
        <Install />
        <UseCases />
        <CTAWithMarquee />
      </div>
    </>
  );
}
