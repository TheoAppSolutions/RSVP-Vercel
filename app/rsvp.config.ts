import type { RSVPClientConfig } from "@/lib/types";
import { EVENT } from "../lib/event";

// -----------------------------------------------------------------------
// Glenna's backend wiring — which sheet to write to and who gets owner
// notifications. Design/copy content lives in ./lib/event.ts instead;
// this file only feeds the shared lib/rsvp handler.
// -----------------------------------------------------------------------

export const RSVP_CONFIG: RSVPClientConfig = {
  slug: "glenna",
  eventLabel: EVENT.title,
  honoreeFirstName: EVENT.honoree.replace(/^Atty\.\s*/, "").split(" ")[0],
  sheetIdEnv: "GOOGLE_SHEET_ID",
  ownerEmailEnv: "OWNER_EMAIL",
};
