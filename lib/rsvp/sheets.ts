import { google } from "googleapis";
import type { RSVPClientConfig, RSVPSubmission } from "./types";

// -----------------------------------------------------------------------
// One Google service account, shared across every client. Each client
// just points at its own sheet via `sheetIdEnv`. See README.md for the
// one-time setup (create the service account once, share each client's
// sheet with its client_email, set the env vars below in Vercel).
//
// Shared across all clients:
//   GOOGLE_SERVICE_ACCOUNT_EMAIL
//   GOOGLE_PRIVATE_KEY
//
// Per client (see each client's rsvp.config.ts for the exact var name):
//   MAYET_GOOGLE_SHEET_ID
//   GLENNA_GOOGLE_SHEET_ID
// -----------------------------------------------------------------------

function getAuth() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  // Vercel env vars store literal "\n" — convert back to real newlines.
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) return null;

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendRSVPRow(config: RSVPClientConfig, submission: RSVPSubmission) {
  const sheetId = process.env[config.sheetIdEnv];
  const auth = getAuth();

  if (!sheetId || !auth) {
    throw new Error(
      `Missing Google Sheets configuration for "${config.slug}" (check ${config.sheetIdEnv}, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY).`
    );
  }

  const sheets = google.sheets({ version: "v4", auth });
  const attendingLabel = submission.attending === "yes" ? "Attending" : "Not Attending";

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: config.sheetRange ?? "Sheet1!A:F",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          submission.name,
          submission.email ?? "",
          attendingLabel,
          submission.attending === "yes" ? submission.guests ?? "1" : "",
          submission.message ?? "",
          new Date().toISOString(),
        ],
      ],
    },
  });
}
