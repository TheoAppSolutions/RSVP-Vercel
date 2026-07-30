import type { Config } from "tailwindcss";
import { SHELL_COLORS, PAGE_COLORS, LEAF_COLORS } from "./lib/colors";

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
        coral: "#F94063",
        olive: "#A39814",

        // --- Foliage scale, used only for vine/leaf illustrations ---
        leaf: {
          200: LEAF_COLORS.leaf200,
          400: LEAF_COLORS.leaf400,
          600: LEAF_COLORS.leaf600,
          800: LEAF_COLORS.leaf800,
          900: LEAF_COLORS.leaf900,
        },
      },
      fontFamily: {
        script: ["var(--font-script)"],
        jost: ["var(--font-jost)"],
        garamond: ["var(--font-garamond)"],
        fraunces: ["var(--font-fraunces)"],
        work: ["var(--font-work)"],
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        drift: {
          "0%, 100%": { opacity: "0.4", transform: "translateY(0px)" },
          "50%": { opacity: "0.9", transform: "translateY(-6px)" },
        },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
        drift: "drift 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
