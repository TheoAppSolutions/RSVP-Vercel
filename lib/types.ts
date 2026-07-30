// -----------------------------------------------------------------------
// Shared RSVP contract. /mayet submit this same shape
// from their forms, and is processed by the same API handler
// factory (see lib/rsvp/handler.ts). Client-specific copy (button labels,
// success text, colors) stays in each client's own components — only the
// data shape and the backend plumbing are shared.
// -----------------------------------------------------------------------

export type Attending = "yes" | "no";

export interface RSVPSubmission {
  name: string;
  email?: string;
  attending: Attending;
  guests?: string | number;
  message?: string;
}

export interface RSVPClientConfig {
  /** URL-safe id, e.g. "mayet" — used in logs and email subjects. */
  slug: string;
  /** Human-readable event name for email subject lines, e.g. "Mayet's 65th Birthday". */
  eventLabel: string;
  /** First name used in the guest confirmation email greeting. */
  honoreeFirstName: string;
  /** Env var name holding this client's Google Sheet ID. */
  sheetIdEnv: string;
  /** Defaults to "Sheet1!A:F" if omitted. */
  sheetRange?: string;
  /** Env var name holding the address that should receive owner notifications. */
  ownerEmailEnv: string;
}
