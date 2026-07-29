// -----------------------------------------------------------------------
// Every hex color used anywhere in the app, in one place. Nothing else
// in the codebase should hard-code a hex value — import from here
// instead, so a color only ever needs to change in one spot.
//
// Consumed by:
//   - tailwind.config.ts        (Tailwind utility classes, e.g. bg-denim-900)
//   - app/mayet/lib/event.ts     (Mayet's PALETTE — used via CSS custom
//                                 properties in styled-jsx, since Mayet's
//                                 designs don't use Tailwind for color)
//   - app/glenna/lib/event.ts    (Glenna's PALETTE — mirrors the Tailwind
//                                 tokens below, for anywhere Glenna needs
//                                 a raw hex value outside a className)
// -----------------------------------------------------------------------

/** Shared app shell — client picker pages (app/page.tsx, app/mayet/page.tsx, app/glenna/page.tsx). */
export const SHELL_COLORS = {
  denim900: "#0e1a2b",
  rhinestone: "#e8ecf1",
} as const;

/** Mayet — garden party palette (warm ivory + burnt orange/coral/marigold/olive). */
export const MAYET_COLORS = {
  cream: "#FBF3E7",
  panel: "#FFFFFF",
  ink: "#4A2E17",
  sage: "#8A7A57",
  burnt: "#E15505",
  coral: "#F94063",
  marigold: "#FFA82C",
  olive: "#A39814",
} as const;

/** Glenna — "Denim & Diamonds" palette (denim blues + sapphire + rhinestone). */
export const GLENNA_COLORS = {
  denim50: "#eef3f8",
  denim100: "#dbe6f0",
  denim200: "#b3cbe0",
  denim300: "#8bafd0",
  denim400: "#5e8dba",
  denim500: "#3d6a9a",
  denim600: "#2f527a",
  denim700: "#243e5c",
  denim800: "#1b2e45",
  denim900: "#0e1a2b",
  sapphire950: "#081326",
  sapphire900: "#0b1e3d",
  sapphire800: "#122a4f",
  rhinestone: "#e8ecf1",
} as const;
