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
    id: "getting-started",
    title: "Getting started",
    description: "Welcome, quickstart, concepts, and the product map.",
  },
  {
    id: "connect",
    title: "Connect",
    description: "Drive Creative Studio from MCP clients, API keys, and Slack.",
  },
];

export const DOC_PAGES: DocPage[] = [
  {
    slug: "welcome",
    title: "Welcome to ElarisLabs",
    excerpt:
      "Agentic creative platform for marketing teams — Studio, Campaigns, Scheduler, Insights, and more.",
    sectionId: "getting-started",
    readTime: "3 min read",
    href: "/docs/getting-started/welcome",
    image: "/img/mcp-cover.svg",
    imageAlt: "ElarisLabs documentation — product guides and reference",
    topics: [
      "What you can do",
      "Product map",
      "Creative Studio",
      "Connect MCP",
    ],
  },
  {
    slug: "mcp-setup",
    title: "MCP setup & integration guide",
    excerpt:
      "Connect Creative Studio to Claude, Cursor, and other MCP clients. API keys, config snippets, multi-server setups, example prompts, and troubleshooting.",
    sectionId: "connect",
    readTime: "10 min read",
    href: "/docs/connect/setup",
    image: "/img/mcp-cover.svg",
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
