import type { Config } from "tailwindcss";
import { SHELL_COLORS, GLENNA_COLORS, MAYET_COLORS } from "./lib/colors";

// -----------------------------------------------------------------------
// All color values here come from lib/colors.ts (the single source of
// truth) — nothing is hard-coded twice. Mayet's designs don't use
// Tailwind for color (they use CSS custom properties via styled-jsx —
// see app/mayet/constants.ts), so only the shell + Glenna tokens are
// registered here.
// -----------------------------------------------------------------------

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // --- Shared app shell (root + both clients' picker pages) ---
        // --- Glenna's own design pages also use this "denim" scale ---
        denim: {
          50: GLENNA_COLORS.denim50,
          100: GLENNA_COLORS.denim100,
          200: GLENNA_COLORS.denim200,
          300: GLENNA_COLORS.denim300,
          400: GLENNA_COLORS.denim400,
          500: GLENNA_COLORS.denim500,
          600: GLENNA_COLORS.denim600,
          700: GLENNA_COLORS.denim700,
          800: GLENNA_COLORS.denim800,
          900: SHELL_COLORS.denim900, // same value as GLENNA_COLORS.denim900 — shell + Glenna share this shade
        },
        rhinestone: SHELL_COLORS.rhinestone, // same value as GLENNA_COLORS.rhinestone

        // --- Glenna only: "Sapphire Soirée" design ---
        sapphire: {
          950: GLENNA_COLORS.sapphire950,
          900: GLENNA_COLORS.sapphire900,
          800: GLENNA_COLORS.sapphire800,
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
