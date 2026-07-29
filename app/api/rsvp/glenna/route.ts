import { createRSVPHandler } from "@/lib/rsvp/handler";
import { RSVP_CONFIG } from "@/app/glenna/rsvp.config";

// Lives at /api/rsvp/glenna to match what app/glenna/components/RSVPForm.tsx
// posts to. All the actual Sheets + email logic is shared — see lib/rsvp/.
export const POST = createRSVPHandler(RSVP_CONFIG);
