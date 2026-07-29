// -----------------------------------------------------------------------
// Shared across every RSVP page design (design-1, design-2, design-3).
// Edit event details here once — every page picks it up. Colors come
// from lib/colors.ts (the single source of truth for every hex value in
// the app) — Glenna's designs consume color via Tailwind
// classes (tailwind.config.ts, sourced from the same file) rather than
// reading PALETTE directly — it's exported here for parity and for any
// future spot that needs a raw hex value.
// -----------------------------------------------------------------------

import { PAGE_COLORS } from "@/lib/colors";

export const EVENT = {
  honoree: "Atty. Glenna",
  title: "65th Birthday Celebration",
  date: "Saturday, October 10, 2026",
  isoDate: "2026-10-10T17:00:00",
  time: "5:00 PM",
  venue: "Glasshouse",
  dressCode: "Denim & Diamonds",
  rsvpBy: "September 26, 2026",
};

export const PALETTE = PAGE_COLORS;
