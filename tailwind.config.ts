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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jomolhari: ["Jomolhari", "serif"],
        jost: ["Jost", "sans-serif"],
      },
      keyframes: {
        "scale-and-move-left": {
          "0%": { transform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1)" },
          "50%": {
            transform: "translate3d(-30%, 0%, 0) scale3d(1.2, 1.2, 1)",
          },
          "100%": { transform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1)" },
        },
        "scale-and-move-right": {
          "0%": { transform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1)" },
          "50%": {
            transform: "translate3d(30%, 0%, 0) scale3d(1.2, 1.2, 1)",
          },
          "100%": { transform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1)" },
        },
      },
      animation: {
        "move-left": "scale-and-move-left 10s ease-in-out infinite",
        "move-right": "scale-and-move-right 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
