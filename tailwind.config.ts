import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        customTeal: "#356D65",
        customBeige: "#CABB9D",
        customGreen: "#BACA9E",
        customSienna: "#862b0e",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        neato: ["neato-serif", "serif"],
        jomolhari: ["Jomolhari", "serif"],
        jost: ["Jost", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "scale-and-move-left": {
          "0%": {
            transform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1)",
          },
          "50%": {
            transform: "translate3d(-30%, 0%, 0) scale3d(1.2, 1.2, 1)",
          },
          "100%": {
            transform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1)",
          },
        },
        "scale-and-move-right": {
          "0%": {
            transform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1)",
          },
          "50%": {
            transform: "translate3d(30%, 0%, 0) scale3d(1.2, 1.2, 1)",
          },
          "100%": {
            transform: "translate3d(0%, 0%, 0) scale3d(1, 1, 1)",
          },
        },
      },
      animation: {
        "move-left": "scale-and-move-left 10s ease-in-out infinite",
        "move-right": "scale-and-move-right 10s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
