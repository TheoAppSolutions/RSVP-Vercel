// -----------------------------------------------------------------------
// Glenna — shared constants for all design pages.
// Edit event details or themes here once — every design picks it up.
// -----------------------------------------------------------------------

import type { RSVPTheme } from "@/components/RSVPForm";

export { EVENT } from "@/lib/event-glenna";

// -----------------------------------------------------------------------
// Per-design RSVPTheme tokens
// -----------------------------------------------------------------------

/** Design 1 — "Rhinestone Ranch" (dark denim + rhinestone gold) */
export const THEME_1: RSVPTheme = {
  label: "block font-oswald text-xs uppercase tracking-[0.2em] text-denim-100/80 mb-2",
  input:
    "w-full rounded-sm border border-denim-300/40 bg-denim-900/40 px-4 py-3 text-denim-50 placeholder:text-denim-200/40 outline-none focus:border-rhinestone/70 transition-colors",
  fieldset: "space-y-2",
  radioWrap: "flex gap-3",
  radioActive:
    "flex-1 rounded-sm border border-rhinestone bg-rhinestone/90 px-4 py-3 text-sm font-oswald uppercase tracking-wide text-denim-900",
  radioInactive:
    "flex-1 rounded-sm border border-denim-300/40 px-4 py-3 text-sm font-oswald uppercase tracking-wide text-denim-100/70 hover:border-rhinestone/60",
  button:
    "rounded-sm bg-gradient-to-r from-denim-400 via-rhinestone to-denim-400 bg-[length:200%_100%] py-3.5 font-oswald text-sm uppercase tracking-[0.2em] text-denim-900 font-semibold hover:animate-shimmer transition",
  helper: "text-center text-xs text-denim-200/50 font-oswald tracking-wide",
  success: "rounded-sm border border-rhinestone/40 bg-denim-900/60 p-6 text-denim-50",
  error: "text-sm text-rose-300",
};

/** Design 2 — "Sapphire Soirée" (midnight sapphire + thin lines) */
export const THEME_2: RSVPTheme = {
  label: "block font-inter text-[11px] uppercase tracking-[0.18em] text-denim-100/60 mb-2",
  input:
    "w-full border-0 border-b border-denim-300/30 bg-transparent px-1 py-3 text-denim-50 placeholder:text-denim-200/30 outline-none focus:border-denim-100 transition-colors",
  fieldset: "space-y-3",
  radioWrap: "flex gap-3",
  radioActive:
    "flex-1 border border-denim-100 bg-denim-100/10 px-4 py-3 text-sm font-inter tracking-wide text-denim-50",
  radioInactive:
    "flex-1 border border-denim-300/25 px-4 py-3 text-sm font-inter tracking-wide text-denim-200/50 hover:border-denim-100/50",
  button:
    "border border-denim-100 py-3.5 font-inter text-xs uppercase tracking-[0.25em] text-denim-50 hover:bg-denim-100 hover:text-sapphire-950 transition-colors",
  helper: "text-center text-[11px] text-denim-200/40 font-inter tracking-wide",
  success: "border border-denim-300/30 p-8 text-denim-50",
  error: "text-sm text-rose-300",
};

/** Design 3 — "Denim Edit" (light denim, bold editorial) */
export const THEME_3: RSVPTheme = {
  label: "block font-work text-xs uppercase tracking-widest text-denim-700 mb-1.5",
  input:
    "w-full rounded-none border-2 border-denim-800 bg-white px-4 py-3 text-denim-900 placeholder:text-denim-400 outline-none focus:bg-denim-50 transition-colors",
  fieldset: "space-y-2",
  radioWrap: "flex gap-3",
  radioActive: "flex-1 border-2 border-denim-800 bg-denim-800 px-4 py-3 text-sm font-work font-semibold text-white",
  radioInactive:
    "flex-1 border-2 border-denim-800 bg-white px-4 py-3 text-sm font-work font-semibold text-denim-800 hover:bg-denim-50",
  button:
    "bg-denim-800 py-4 font-bebas text-2xl tracking-wide text-white hover:bg-denim-900 transition-colors",
  helper: "text-xs text-denim-500 font-work",
  success: "border-2 border-denim-800 bg-white p-8 text-denim-900",
  error: "text-sm text-rose-600",
};
