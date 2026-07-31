// -----------------------------------------------------------------------
// Mayet — shared constants for all design pages.
// Edit event details, colors, or per-design styles here once — every
// design picks it up.
// -----------------------------------------------------------------------

import type { RSVPTheme } from "@/app/components/form";

export { EVENT, PALETTE } from "@/lib/event";

// -----------------------------------------------------------------------
// Per-design style tokens (STYLE_1/2/3)
// -----------------------------------------------------------------------

/** Design 1 — "Garden Arch" (ivory ground, vine-arch signature) */
export const STYLE_1: RSVPTheme = {
  label: "block font-jost text-xs uppercase tracking-[0.2em] text-garden-700/80 mb-2",
  input: "w-full rounded-md border border-garden-300/60 bg-white px-4 py-3 text-garden-900 placeholder:text-garden-400 outline-none focus:border-garden-500 transition-colors",
  fieldset: "space-y-2",
  radioWrap: "flex gap-3",
  radioActive: "flex-1 rounded-md border border-garden-500 bg-garden-500 px-4 py-3 text-sm font-jost uppercase tracking-wide text-garden-50",
  radioInactive: "flex-1 rounded-md border border-garden-300/60 bg-white px-4 py-3 text-sm font-jost uppercase tracking-wide text-garden-600 hover:border-garden-500/60",
  button: "rounded-md bg-garden-500 py-3.5 font-jost text-sm uppercase tracking-[0.2em] text-garden-50 font-semibold hover:bg-garden-600 transition-colors",
  helper: "text-center text-xs text-garden-500 font-jost tracking-wide",
  success: "rounded-md border border-garden-300/60 bg-garden-50 p-6 text-garden-900",
  error: "text-sm text-coral",
};

/** Design 2 — "Pressed Petals" (symmetric botanical stationery card) */
export const STYLE_2: RSVPTheme = {
  label: "block font-jost text-[11px] uppercase tracking-[0.22em] text-garden-600 mb-2",
  input: "w-full border-0 border-b border-garden-300 bg-transparent px-1 py-3 text-center font-garamond text-lg text-garden-900 placeholder:text-garden-400 outline-none focus:border-garden-500 transition-colors",
  fieldset: "space-y-3",
  radioWrap: "flex gap-3",
  radioActive: "flex-1 border border-garden-500 bg-garden-500/10 px-4 py-3 text-sm font-jost tracking-wide text-garden-800",
  radioInactive: "flex-1 border border-garden-300 px-4 py-3 text-sm font-jost tracking-wide text-garden-500 hover:border-garden-500/50",
  button: "border border-garden-800 py-3.5 font-jost text-xs uppercase tracking-[0.25em] text-garden-800 hover:bg-garden-800 hover:text-garden-50 transition-colors",
  helper: "text-center text-[11px] text-garden-500 font-jost tracking-wide",
  success: "border border-garden-300 p-8 text-center text-garden-900",
  error: "text-sm text-coral text-center",
};

/** Design 3 — "Garden Mood Board" (bold editorial, literal swatch strip) */
export const STYLE_3: RSVPTheme = {
  label: "block font-jost text-xs uppercase tracking-widest text-garden-700 mb-1.5",
  input: "w-full rounded-none border-2 border-garden-800 bg-white px-4 py-3 text-garden-900 placeholder:text-garden-400 outline-none focus:bg-garden-50 transition-colors",
  fieldset: "space-y-2",
  radioWrap: "flex gap-3",
  radioActive: "flex-1 border-2 border-garden-800 bg-garden-800 px-4 py-3 text-sm font-work font-semibold text-white",
  radioInactive: "flex-1 border-2 border-garden-800 bg-white px-4 py-3 text-sm font-work font-semibold text-garden-800 hover:bg-garden-50",
  button: "bg-garden-800 py-4 font-fraunces text-2xl italic tracking-wide text-white hover:bg-garden-900 transition-colors",
  helper: "text-xs text-garden-500 font-work",
  success: "border-2 border-garden-800 bg-white p-8 text-garden-900",
  error: "text-sm text-coral",
};
