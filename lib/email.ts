import { Resend } from "resend";
import type { RSVPClientConfig, RSVPSubmission } from "@/lib/types";

// -----------------------------------------------------------------------
// Sends two emails per submission, using Resend (https://resend.com —
// free tier, no SMTP setup, works out of the box on Vercel):
//   1. A confirmation to the guest, if they gave an email address.
//   2. A notification to the event owner (see each client's
//      rsvp.config.ts / ownerEmailEnv for which env var holds that
//      address).
//
// Shared across all clients:
//   RESEND_API_KEY   — from resend.com/api-keys
//   EMAIL_FROM        — a verified sender, e.g. "RSVPs <rsvp@yourdomain.com>"
//
// If either is missing, this quietly no-ops (with a console.warn) so the
// Sheets write still succeeds — email is a nice-to-have, not a blocker.
// -----------------------------------------------------------------------

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  return apiKey ? new Resend(apiKey) : null;
}

function summaryLines(submission: RSVPSubmission): string {
  const attendingLine =
    submission.attending === "yes"
      ? `Attending — party of ${submission.guests ?? 1}`
      : "Not attending";

  return [
    `Name: ${submission.name}`,
    submission.email ? `Email: ${submission.email}` : null,
    attendingLine,
    submission.message ? `Message: ${submission.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function sendRSVPEmails(config: RSVPClientConfig, submission: RSVPSubmission) {
  const resend = getResend();
  const from = process.env.EMAIL_FROM;

  if (!resend || !from) {
    console.warn(
      `Skipping RSVP emails for "${config.slug}" — set RESEND_API_KEY and EMAIL_FROM to enable them.`
    );
    return;
  }

  const firstName = submission.name.split(" ")[0] || "there";
  const tasks: Promise<unknown>[] = [];

  if (submission.email) {
    tasks.push(
      resend.emails.send({
        from,
        to: submission.email,
        subject: `Your RSVP for ${config.eventLabel}`,
        text:
          `Hi ${firstName},\n\n` +
          `Thanks for your RSVP to ${config.eventLabel}! Here's what we recorded:\n\n` +
          `${summaryLines(submission)}\n\n` +
          `If anything looks wrong, just reply to this email and we'll fix it.\n\n` +
          `— ${config.honoreeFirstName}'s celebration`,
      })
    );
  }

  const ownerEmail = process.env[config.ownerEmailEnv];
  if (ownerEmail) {
    tasks.push(
      resend.emails.send({
        from,
        to: ownerEmail,
        subject: `New RSVP: ${submission.name} — ${config.eventLabel}`,
        text: summaryLines(submission),
      })
    );
  }

  await Promise.all(tasks);
}
