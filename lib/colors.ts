/** Shared app shell — client picker page (app/page.tsx). */
export const SHELL_COLORS = {
  garden900: "#241B0E",
  marigold: "#FFA82C",
} as const;

/**
 * Mayet — "Garden Colors" palette.
 * The four brand colors from the client's mood board — burnt orange,
 * coral pink, marigold, and olive gold — over an ivory-to-umber neutral
 * ramp used for backgrounds, text, and structure.
 */
export const PAGE_COLORS = {
  garden50: "#FBF3E7", // ivory — primary background
  garden100: "#F5E4C8",
  garden200: "#ECC98F",
  garden300: "#E0A94F",
  garden400: "#E1780C",
  garden500: "#E15505", // burnt orange (brand)
  garden600: "#B84503",
  garden700: "#8A3403",
  garden800: "#5C2402",
  garden900: "#241B0E", // deep umber — same value as SHELL_COLORS.garden900
  marigold: "#FFA82C", // same value as SHELL_COLORS.marigold
} as const;

/**
 * Leaf-green scale, mixed to sit alongside the four brand colors without
 * fighting them — used only for the vine/foliage illustrations.
 */
export const LEAF_COLORS = {
  leaf200: "#C3D3A4",
  leaf400: "#8FAE5D",
  leaf600: "#5B7C3A",
  leaf800: "#3F5726",
  leaf900: "#23300F",
} as const;

/** The four exact brand hexes from the mood board, for direct use in illustrations and swatch chips. */
export const ACCENT = {
  burntOrange: "#E15505",
  coralPink: "#F94063",
  marigold: "#FFA82C",
  oliveGold: "#A39814",
} as const;
