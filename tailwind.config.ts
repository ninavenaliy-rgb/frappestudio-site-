import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        white: "#ffffff",
        beige: "#f5f0e8",
        gold: "#c9a96e",
        muted: "#6b6b6b",
        border: "#e8e3da",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.4em",
      },
      animation: {
        "line-expand": "lineExpand 1.2s ease forwards",
      },
      keyframes: {
        lineExpand: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
