import type { Config } from "tailwindcss";


export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#0b1326",
        "surface-lowest": "#060e20",
        "surface-low": "#121a30",
        "surface-high": "#222a3d",
        "surface-highest": "#2d3449",
        primary: "#c3c0ff",
        "primary-container": "#4f46e5",
        tertiary: "#ffb695",
        outline: "rgba(70, 69, 85, 0.35)",
        text: "#f5f7ff",
        muted: "#c7c4d8",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(6, 14, 32, 0.5), 0 4px 10px -5px rgba(195, 192, 255, 0.04)",
      },
    },
  },
  plugins: [],
} satisfies Config;
