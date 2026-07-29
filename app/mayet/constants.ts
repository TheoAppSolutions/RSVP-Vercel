// -----------------------------------------------------------------------
// Mayet — shared constants for all design pages.
// Edit event details or palette here once — every design picks it up.
// -----------------------------------------------------------------------

export { EVENT, PALETTE } from "@/lib/event";

// -----------------------------------------------------------------------
// Per-design CSS variable blocks (injected via <style> tag in each page)
// These define the :root tokens; only the values differ per design.
// -----------------------------------------------------------------------

import { PALETTE as P } from "@/lib/event";

/** Design 1 — "Botanical Garland" (cream + burnt orange panel line) */
export const GLOBAL_CSS_1 = `
  :root {
    --cream: ${P.cream};
    --panel: ${P.panel};
    --panel-line: rgba(163, 152, 20, 0.22);
    --ink: ${P.ink};
    --sage: ${P.sage};
    --burnt: ${P.burnt};
    --coral: ${P.coral};
    --marigold: ${P.marigold};
    --olive: ${P.olive};
  }
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

/** Design 2 — "Garden Ticket" (same palette, ticket layout) */
export const GLOBAL_CSS_2 = `
  :root {
    --cream: ${P.cream};
    --panel: ${P.panel};
    --ink: ${P.ink};
    --sage: ${P.sage};
    --burnt: ${P.burnt};
    --coral: ${P.coral};
    --marigold: ${P.marigold};
    --olive: ${P.olive};
  }
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

/** Design 3 — "Botanical Frame" (slightly warmer local panel) */
export const GLOBAL_CSS_3 = `
  :root {
    --cream: ${P.cream};
    --panel: #fffdf9;
    --ink: ${P.ink};
    --sage: ${P.sage};
    --burnt: ${P.burnt};
    --coral: ${P.coral};
    --marigold: ${P.marigold};
    --olive: ${P.olive};
  }
  * { box-sizing: border-box; }
  body { margin: 0; }
`;
