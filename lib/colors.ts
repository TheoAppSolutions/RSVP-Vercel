/** Shared app shell — client picker pages (app/page.tsx). */
export const SHELL_COLORS = {
  garden900: "#241B0E",
  marigold: "#FFA82C",
} as const;

/**
 * Mayet — "Garden Colors" palette.
 * Built from the four brand colors in the client's mood board:
 * burnt orange, coral pink, marigold, and olive gold, over an
 * ivory-to-umber neutral ramp.
 */
export const PAGE_COLORS = {
  garden50: "#FBF3E7", // ivory
  garden100: "#F5E4C8",
  garden200: "#ECC98F",
  garden300: "#E0A94F",
  garden400: "#E1780C",
  garden500: "#E15505", // burnt orange (brand)
  garden600: "#B84503",
  garden700: "#8A3403",
  garden800: "#5C2402",
  garden900: "#241B0E", // deep umber — same value as SHELL_COLORS.garden900
  moss950: "#16220D", // deepest evening-garden green (design-2 backdrop)
  moss900: "#1F2F12",
  moss800: "#2A3D18",
  marigold: "#FFA82C", // same value as SHELL_COLORS.marigold
} as const;

/** The four exact brand hexes from the mood board, for one-off accents (petals, gradients). */
export const ACCENT = {
  burntOrange: "#E15505",
  coralPink: "#F94063",
  marigold: "#FFA82C",
  oliveGold: "#A39814",
} as const;
