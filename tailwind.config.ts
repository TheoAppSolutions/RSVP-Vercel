import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        denim: {
          50: "#eef3f8",
          100: "#dbe6f0",
          200: "#b3cbe0",
          300: "#8bafd0",
          400: "#5e8dba",
          500: "#3d6a9a",
          600: "#2f527a",
          700: "#243e5c",
          800: "#1b2e45",
          900: "#0e1a2b",
        },
        sapphire: {
          950: "#081326",
          900: "#0b1e3d",
          800: "#122a4f",
        },
        rhinestone: "#e8ecf1",
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
