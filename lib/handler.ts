import { NextResponse } from "next/server";
import type { RSVPClientConfig, RSVPSubmission } from "@/lib/types";
import { appendRSVPRow } from "@/lib/sheets";
import { sendRSVPEmails } from "@/lib/email";

// -----------------------------------------------------------------------
// One handler factory shared by every client. A client's route.ts is
// just:
//
//   export const POST = createRSVPHandler(RSVP_CONFIG);
//
// This keeps the actual Sheets + email logic in one place instead of
// duplicated per client, while each client still gets its own URL,
// its own sheet, and its own owner inbox via RSVPClientConfig.
// -----------------------------------------------------------------------

function parseSubmission(body: unknown): RSVPSubmission | null {
  if (typeof body !== "object" || body === null) return null;
  const raw = body as Record<string, unknown>;

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const attendingRaw = raw.attending;
  const attending = attendingRaw === "yes" || attendingRaw === "no" ? attendingRaw : null;

  if (!name || !attending) return null;

  return {
    name,
    email: typeof raw.email === "string" && raw.email.trim() ? raw.email.trim() : undefined,
    attending,
    guests: typeof raw.guests === "string" || typeof raw.guests === "number" ? raw.guests : undefined,
    message: typeof raw.message === "string" ? raw.message : undefined,
  };
}

export function createRSVPHandler(config: RSVPClientConfig) {
  return async function POST(request: Request) {
    try {
      const submission = parseSubmission(await request.json());

      if (!submission) {
        return NextResponse.json(
          { ok: false, error: "Name and attendance are required." },
          { status: 400 }
        );
      }

      await appendRSVPRow(config, submission);

      // Email is best-effort — a failed send shouldn't fail the RSVP,
      // since the row is already safely in the sheet at this point.
      await sendRSVPEmails(config, submission).catch((err) =>
        console.error(`RSVP email error for "${config.slug}":`, err)
      );

      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error(`RSVP submission error for "${config.slug}":`, err);
      return NextResponse.json(
        { ok: false, error: "Something went wrong saving your RSVP." },
        { status: 500 }
      );
    }
  };
}
