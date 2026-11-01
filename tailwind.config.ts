import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0B1020", 2: "#10172B", 3: "#182038", line: "#232C47" },
        paper: { DEFAULT: "#F8FAFC", 2: "#F1F4F8", line: "#E2E8F0" },
        slate: { muted: "#64748B" },
        signal: { DEFAULT: "#22D3EE", deep: "#0E7490", soft: "#CFFAFE" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { site: "76rem" },
      letterSpacing: { label: "0.14em" },
    },
  },
  plugins: [],
};
export default config;
