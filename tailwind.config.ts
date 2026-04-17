import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        // Obsidian base
        coal: "#07070A",   // near-black base
        ink: "#0C0D10",    // page body
        ember: "#14161B",  // elevated surfaces
        soot: "#23262D",   // 1px borders
        steel: "#3A3E48",  // stronger dividers
        // Silver family
        chrome: "#8A8F9C", // muted silver
        silver: "#C7CAD1", // accent silver
        bone: "#EEF0F3",   // primary text
        lume: "#F7F8FA",   // pure highlight
        // Sophisticated accents
        plasma: "#6DA6D9", // icy cool blue — primary accent
        halo: "#A8CDEF",   // bright plasma for glows
        deep: "#2D4A6B",   // deep plasma for shadows/fills
        brass: "#C9B087",  // champagne — warm counterpoint (sparing)
        pearl: "#E8D9B8",  // pearl highlight (sparing)
        // Legacy aliases (re-mapped)
        dust: "#8A8F9C",
        rust: "#C7CAD1",
        amber: "#8A8F9C",
        moss: "#3A3E48",
      },
    },
  },
  plugins: [],
};
export default config;
