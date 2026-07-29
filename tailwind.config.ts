import type { Config } from "tailwindcss";
import { SHELL_COLORS, PAGE_COLORS } from "./lib/colors";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // --- Shared app shell (root + both clients' picker pages) ---
        // --- Glenna's own design pages also use this "denim" scale ---
        denim: {
          50: PAGE_COLORS.denim50,
          100: PAGE_COLORS.denim100,
          200: PAGE_COLORS.denim200,
          300: PAGE_COLORS.denim300,
          400: PAGE_COLORS.denim400,
          500: PAGE_COLORS.denim500,
          600: PAGE_COLORS.denim600,
          700: PAGE_COLORS.denim700,
          800: PAGE_COLORS.denim800,
          900: SHELL_COLORS.denim900, // same value as PAGE_COLORS.denim900 — shell + Glenna share this shade
        },
        rhinestone: SHELL_COLORS.rhinestone, // same value as PAGE_COLORS.rhinestone

        // --- Glenna only: "Sapphire Soirée" design ---
        sapphire: {
          950: PAGE_COLORS.sapphire950,
          900: PAGE_COLORS.sapphire900,
          800: PAGE_COLORS.sapphire800,
        },
      },
      fontFamily: {
        script: ["var(--font-script)"],
        oswald: ["var(--font-oswald)"],
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
