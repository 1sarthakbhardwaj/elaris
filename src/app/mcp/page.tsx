import type { Metadata } from "next";
import McpClient from "./McpClient";

export const metadata: Metadata = {
  title: "MCP Server | ElarisLabs — Your Brand's Creative Engine in Any Chat",
  description:
    "Connect the ElarisLabs MCP server to Claude, Cursor, and any MCP agent. Generate on-brand ads, resize across every ratio, and pull approved assets straight from the chat you already work in.",
  keywords: [
    "ElarisLabs MCP",
    "MCP server",
    "Claude MCP",
    "Cursor MCP",
    "AI creative MCP",
    "on-brand ad generation",
    "brand pack resizing",
  ],
  alternates: {
    canonical: "/mcp",
  },
  openGraph: {
    type: "website",
    url: "https://elarislabs.ai/mcp",
    title: "MCP Server | ElarisLabs",
    description:
      "Run your brand's creative engine from any chat. Generate on-brand ads and pull approved assets from Claude, Cursor, and any MCP agent.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Server | ElarisLabs",
    description:
      "Run your brand's creative engine from any chat — Claude, Cursor, and any MCP agent.",
  },
};

export default function McpPage() {
  return <McpClient />;
}
