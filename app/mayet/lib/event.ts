// -----------------------------------------------------------------------
// Shared across every RSVP page design (design-1, design-2, design-3).
// Edit event details here once — every page picks it up. Colors come
// from lib/colors.ts (the single source of truth for every hex value in
// the app) — see app/glenna/lib/event.ts for the same PALETTE pattern
// with Glenna's colors.
// -----------------------------------------------------------------------

import { MAYET_COLORS } from "@/lib/colors";

export const EVENT = {
  name: 'Mayet Sumagaysay',
  age: '65',
  date: 'Thursday, November 19, 2026',
  time: '6:00 PM',
  venue: 'Summit Hotel',
  // Used to build each page's embedded map — replace with the exact
  // address (e.g. "Summit Hotel, [Street], [City]") for a precise pin.
  mapQuery: 'Summit Hotel',
  rsvpBy: 'November 5, 2026',
} as const;

// Used by the RSVP form's "Will you attend?" state on every design.
export type Attendance = 'joyfully-accepts' | 'regretfully-declines' | '';

// Garden palette pulled from the reference photo. The four accents
// (burnt, coral, marigold, olive) should stay identical across every
// design so they read as one consistent invitation suite. "cream",
// "ink", "sage", and "panel" are the neutral base most designs share;
// a page can still locally shade "panel" slightly warmer/cooler if the
// design calls for it.
export const PALETTE = MAYET_COLORS;
