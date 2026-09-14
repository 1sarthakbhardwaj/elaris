import type { MenuLinkItem } from "@/types/menu";

/** Demo start pages that ship with the template. Kept for the landing/preview screens. */
export const homeLinks: MenuLinkItem[] = [
  { href: "/index-branding-studio", label: "Branding studio" },
  {
    href: "/index-software-development-company",
    label: "Software development company",
  },
  { href: "/index-creative-agency", label: "Creative agency" },
  { href: "/index-freelancer-portfolio", label: "Freelancer portfolio" },
  { href: "/index-design-studio", label: "Design studio" },
  { href: "/index-web-developer", label: "Web Developer" },
  { href: "/index-personal-portfolio", label: "Personal portfolio" },
  { href: "/index-digital-agency", label: "Digital agency" },
  { href: "/index-web-studio", label: "Web Studio" },
  { href: "/index-digital-designer", label: "Digital designer" },
];

/** BUILD and GROW, the two halves of the ElarisLabs operating system. */
export const capabilityLinks: MenuLinkItem[] = [
  { href: "/services#ai-websites", label: "AI Websites" },
  { href: "/services#apps", label: "Web & Mobile Apps" },
  { href: "/services#decks", label: "Pitch Decks & Slides" },
  { href: "/services#brand-memory", label: "Brand Memory Systems" },
  { href: "/services#ad-campaign-os", label: "Ad Campaign OS" },
  { href: "/services#video", label: "AI Video & Motion" },
  { href: "/services#social", label: "Social & Scheduling" },
  { href: "/services#analytics", label: "Analytics & Listening" },
  { href: "/services#agents", label: "Agent Workflows & MCP" },
];

/** Solutions, mapped onto the case study pages. */
export const worksLinks: MenuLinkItem[] = [
  { href: "/works-default", label: "All case studies" },
  { href: "/works-grid", label: "By industry" },
  { href: "/works-grid-sticky", label: "By channel" },
  { href: "/project-details", label: "Inside a build" },
];

/** Company and platform pages. */
export const pageLinks: MenuLinkItem[] = [
  { href: "/about-us", label: "About ElarisLabs" },
  { href: "/services", label: "The platform" },
  { href: "/mcp", label: "MCP Server" },
  { href: "/about-me", label: "Founder note" },
  { href: "/team", label: "The team" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/404", label: "404 error page" },
  { href: "/", label: "Home" },
];

export const insightLinks: MenuLinkItem[] = [
  { href: "/blogs", label: "All insights" },
  { href: "/docs", label: "Docs" },
];
