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

/** Design 1 — "Botanical Garland" (deep garden green + marigold gold) */
export const STYLE_1: RSVPTheme = {
  label: "block font-jost text-xs uppercase tracking-[0.2em] text-garden-100/80 mb-2",
  input:
    "w-full rounded-sm border border-garden-300/40 bg-garden-900/40 px-4 py-3 text-garden-50 placeholder:text-garden-200/40 outline-none focus:border-marigold/70 transition-colors",
  fieldset: "space-y-2",
  radioWrap: "flex gap-3",
  radioActive:
    "flex-1 rounded-sm border border-marigold bg-marigold/90 px-4 py-3 text-sm font-jost uppercase tracking-wide text-garden-900",
  radioInactive:
    "flex-1 rounded-sm border border-garden-300/40 px-4 py-3 text-sm font-jost uppercase tracking-wide text-garden-100/70 hover:border-marigold/60",
  button:
    "rounded-sm bg-gradient-to-r from-garden-400 via-marigold to-garden-400 bg-[length:200%_100%] py-3.5 font-jost text-sm uppercase tracking-[0.2em] text-garden-900 font-semibold hover:animate-shimmer transition",
  helper: "text-center text-xs text-garden-200/60 font-jost tracking-wide",
  success: "rounded-sm border border-marigold/40 bg-garden-900/60 p-6 text-garden-50",
  error: "text-sm text-rose-300",
};

/** Design 2 — "Garden Soirée" (moss-dark evening backdrop + petal accents) */
export const STYLE_2: RSVPTheme = {
  label: "block font-inter text-[11px] uppercase tracking-[0.18em] text-garden-100/60 mb-2",
  input:
    "w-full border-0 border-b border-garden-300/30 bg-transparent px-1 py-3 text-garden-50 placeholder:text-garden-200/30 outline-none focus:border-garden-100 transition-colors",
  fieldset: "space-y-3",
  radioWrap: "flex gap-3",
  radioActive:
    "flex-1 border border-garden-100 bg-garden-100/10 px-4 py-3 text-sm font-inter tracking-wide text-garden-50",
  radioInactive:
    "flex-1 border border-garden-300/25 px-4 py-3 text-sm font-inter tracking-wide text-garden-200/50 hover:border-garden-100/50",
  button:
    "border border-garden-100 py-3.5 font-inter text-xs uppercase tracking-[0.25em] text-garden-50 hover:bg-garden-100 hover:text-moss-950 transition-colors",
  helper: "text-center text-[11px] text-garden-200/50 font-inter tracking-wide",
  success: "border border-garden-300/30 p-8 text-garden-50",
  error: "text-sm text-rose-300",
};

/** Design 3 — "Garden Edit" (ivory ground, bold editorial) */
export const STYLE_3: RSVPTheme = {
  label: "block font-work text-xs uppercase tracking-widest text-garden-700 mb-1.5",
  input:
    "w-full rounded-none border-2 border-garden-800 bg-white px-4 py-3 text-garden-900 placeholder:text-garden-400 outline-none focus:bg-garden-50 transition-colors",
  fieldset: "space-y-2",
  radioWrap: "flex gap-3",
  radioActive: "flex-1 border-2 border-garden-800 bg-garden-800 px-4 py-3 text-sm font-work font-semibold text-white",
  radioInactive:
    "flex-1 border-2 border-garden-800 bg-white px-4 py-3 text-sm font-work font-semibold text-garden-800 hover:bg-garden-50",
  button:
    "bg-garden-800 py-4 font-bebas text-2xl tracking-wide text-white hover:bg-garden-900 transition-colors",
  helper: "text-xs text-garden-500 font-work",
  success: "border-2 border-garden-800 bg-white p-8 text-garden-900",
  error: "text-sm text-rose-600",
};
