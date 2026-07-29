import type { RSVPClientConfig } from "@/lib/rsvp/types";
import { EVENT } from "./lib/event";

// -----------------------------------------------------------------------
// Mayet's backend wiring — which sheet to write to and who gets owner
// notifications. Design/copy content lives in ./lib/event.ts instead;
// this file only feeds the shared lib/rsvp handler.
// -----------------------------------------------------------------------

export const RSVP_CONFIG: RSVPClientConfig = {
  slug: "mayet",
  eventLabel: `${EVENT.name}'s ${EVENT.age}th Birthday`,
  honoreeFirstName: EVENT.name.split(" ")[0],
  sheetIdEnv: "MAYET_GOOGLE_SHEET_ID",
  ownerEmailEnv: "MAYET_OWNER_EMAIL",
};
