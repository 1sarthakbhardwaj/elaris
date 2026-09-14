export type McpToolCategory = "read" | "make" | "ship";

export type McpTool = {
  category: McpToolCategory;
  name: string;
  desc: string;
};

export type McpFeature = {
  title: string;
  body: string;
};

export type McpUseCase = {
  who: string;
  title: string;
  body: string;
};
