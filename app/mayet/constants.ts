// -----------------------------------------------------------------------
// Mayet — shared constants for all design pages.
// Edit event details or colors here once — every design picks it up.
// Naming mirrors app/glenna/constants.ts (EVENT, PALETTE, STYLE_1/2/3)
// even though the underlying values are CSS custom-property strings
// here instead of Tailwind class bundles — injected via a <style> tag
// in each design page.
// -----------------------------------------------------------------------

export { EVENT, PALETTE } from "@/app/mayet/lib/event";

// -----------------------------------------------------------------------
// Per-design style tokens (STYLE_1/2/3, matching Glenna's naming)
// -----------------------------------------------------------------------

import { PALETTE as P } from "@/app/mayet/lib/event";

/** Design 1 — "Botanical Garland" (cream + burnt orange panel line) */
export const STYLE_1 = `
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
export const STYLE_2 = `
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
export const STYLE_3 = `
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
