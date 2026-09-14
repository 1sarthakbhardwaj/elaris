import type { McpFeature, McpTool, McpUseCase } from "@/types/mcp";

export const MCP_FEATURES: McpFeature[] = [
  {
    title: "Your context flows in",
    body: "Brief in Claude and the MCP server already knows. Point at a codebase in Cursor and it reads the copy. The agent's context becomes the prompt, so nothing gets lost in translation.",
  },
  {
    title: "Guardrails, not guesswork",
    body: "Colors, type, safe zones, and voice ship as constraints. It will not hand back off-brand work. What comes out of the chat is ready for the client, not a first draft to fix.",
  },
  {
    title: "One asset, every ratio",
    body: "Pull an approved hero from a past campaign and re-treat it in seconds. Brand Pack resizes across every placement in a single pass, from Stories to landscape DOOH.",
  },
];

export const MCP_TOOLS: McpTool[] = [
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

export const MCP_TOOL_CATEGORY_LABEL: Record<McpTool["category"], string> = {
  read: "Read",
  make: "Make",
  ship: "Ship",
};

export const MCP_USE_CASES: McpUseCase[] = [
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
