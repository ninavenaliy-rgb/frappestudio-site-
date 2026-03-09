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
        surface: "#111111",
        surface2: "#181818",
        blue: "#5390d9",
        "blue-dim": "#3b6fb5",
        muted: "#888888",
        border: "#222222",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
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
