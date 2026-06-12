export type DocSection = {
  id: string;
  title: string;
  description: string;
};

export type DocPage = {
  slug: string;
  title: string;
  excerpt: string;
  sectionId: string;
  readTime: string;
  href: string;
  image: string;
  imageAlt: string;
  topics: string[];
};

export const DOC_SECTIONS: DocSection[] = [
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect ElarisLabs to MCP clients, Slack, and your existing toolchain.",
  },
];

export const DOC_PAGES: DocPage[] = [
  {
    slug: "mcp",
    title: "MCP setup & integration guide",
    excerpt:
      "Connect Creative Studio to Claude, Cursor, and other MCP clients. API keys, config snippets, multi-server setups, example prompts, and troubleshooting.",
    sectionId: "integrations",
    readTime: "10 min read",
    href: "/docs/mcp",
    image: "/docs/mcp-cover.svg",
    imageAlt: "ElarisLabs MCP server — connect Claude, Cursor, and your creative stack",
    topics: [
      "What is MCP?",
      "Quick start",
      "API keys",
      "Claude & Cursor",
      "Multiple servers",
      "Tools reference",
      "Troubleshooting",
    ],
  },
];