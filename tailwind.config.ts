import type { Config } from "tailwindcss";
import { SHELL_COLORS, PAGE_COLORS } from "./lib/colors";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // --- Shared app shell (root + client picker page) ---
        // --- Mayet's own design pages also use this "garden" scale ---
        garden: {
          50: PAGE_COLORS.garden50,
          100: PAGE_COLORS.garden100,
          200: PAGE_COLORS.garden200,
          300: PAGE_COLORS.garden300,
          400: PAGE_COLORS.garden400,
          500: PAGE_COLORS.garden500,
          600: PAGE_COLORS.garden600,
          700: PAGE_COLORS.garden700,
          800: PAGE_COLORS.garden800,
          900: SHELL_COLORS.garden900, // same value as PAGE_COLORS.garden900 — shell + Mayet share this shade
        },
        marigold: SHELL_COLORS.marigold, // same value as PAGE_COLORS.marigold

        // --- Mayet only: "Garden Soirée" design backdrop ---
        moss: {
          950: PAGE_COLORS.moss950,
          900: PAGE_COLORS.moss900,
          800: PAGE_COLORS.moss800,
        },
      },
      fontFamily: {
        script: ["var(--font-script)"],
        jost: ["var(--font-jost)"],
        garamond: ["var(--font-garamond)"],
        inter: ["var(--font-inter)"],
        bebas: ["var(--font-bebas)"],
        work: ["var(--font-work)"],
      },
      keyframes: {
        sparkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        sparkle: "sparkle 2.4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
