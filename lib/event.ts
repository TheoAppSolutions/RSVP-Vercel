// -----------------------------------------------------------------------
// Shared across every RSVP page design (design-1, design-2, design-3).
// Edit event details here once — every page picks it up. Colors come
// from lib/colors.ts (the single source of truth for every hex value in
// the app) — Mayet's designs consume color via Tailwind
// classes (tailwind.config.ts, sourced from the same file) rather than
// reading PALETTE directly — it's exported here for parity and for any
// future spot that needs a raw hex value.
// -----------------------------------------------------------------------

import { PAGE_COLORS } from "@/lib/colors";

export const EVENT = {
  honoree: "Mayet Sumagaysay",
  title: "65th Birthday Celebration",
  date: "Thursday, November 19, 2026",
  isoDate: "2026-11-19T18:00:00",
  time: "6:00 PM",
  venue: "Summit Hotel, Tacloban City",
  dressCode: "Garden Colors",
  rsvpBy: "November 5, 2026",
};

export const PALETTE = PAGE_COLORS;
