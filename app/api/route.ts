import { createRSVPHandler } from "@/lib/handler";
import { RSVP_CONFIG } from "@/app/rsvp.config";

// Lives at /api/ to match what app/components/form.tsx
// posts to. All the actual Sheets + email logic is shared — see lib/rsvp/.
export const POST = createRSVPHandler(RSVP_CONFIG);
