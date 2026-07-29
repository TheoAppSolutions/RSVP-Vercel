import { createRSVPHandler } from "@/lib/rsvp/handler";
import { RSVP_CONFIG } from "@/app/mayet/rsvp.config";

// Lives at /api/rsvp/mayet to match what app/mayet/components/RSVPForm.tsx
// posts to. All the actual Sheets + email logic is shared — see lib/rsvp/.
export const POST = createRSVPHandler(RSVP_CONFIG);
