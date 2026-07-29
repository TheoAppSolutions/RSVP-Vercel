"use client";

import { useState } from "react";
import { EVENT } from "../constants";
import type { RSVPTheme } from "@/app/glenna/components/RSVPForm2";

// -----------------------------------------------------------------------
// Glenna-scoped RSVP form.
// Shares the RSVPTheme interface with the generic component but is
// self-contained: uses the /api/rsvp/glenna endpoint and hard-codes
// Glenna-specific copy (reply date, message label, success text).
// -----------------------------------------------------------------------

export type { RSVPTheme };

export default function RSVPForm({ theme }: { theme: RSVPTheme }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!attending) {
      setErrorMsg("Let us know if you'll be joining us.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      guests: (form.elements.namedItem("guests") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      attending,
    };

    try {
      const res = await fetch("/api/rsvp/glenna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={theme.success} role="status">
        <p className="text-lg font-medium">
          {attending === "yes" ? "You're on the list! ✨" : "Thanks for letting us know."}
        </p>
        <p className="mt-2 text-sm opacity-80">
          {attending === "yes"
            ? "We can't wait to sparkle with you on October 10."
            : "You'll be missed — thank you for the reply."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5" noValidate>
      <div>
        <label htmlFor="glenna-name" className={theme.label}>Full name</label>
        <input id="glenna-name" name="name" type="text" required className={`focus-ring ${theme.input}`} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="glenna-email" className={theme.label}>Email</label>
        <input id="glenna-email" name="email" type="email" required className={`focus-ring ${theme.input}`} placeholder="you@example.com" />
      </div>

      <fieldset className={theme.fieldset}>
        <legend className={theme.label}>Will you be there?</legend>
        <div className={theme.radioWrap}>
          <button
            type="button"
            onClick={() => setAttending("yes")}
            className={`focus-ring ${attending === "yes" ? theme.radioActive : theme.radioInactive}`}
          >
            Joyfully accepts
          </button>
          <button
            type="button"
            onClick={() => setAttending("no")}
            className={`focus-ring ${attending === "no" ? theme.radioActive : theme.radioInactive}`}
          >
            Regretfully declines
          </button>
        </div>
      </fieldset>

      <div>
        <label htmlFor="glenna-guests" className={theme.label}>Number in your party</label>
        <input id="glenna-guests" name="guests" type="number" min={1} max={6} defaultValue={1} className={`focus-ring ${theme.input}`} />
      </div>

      <div>
        <label htmlFor="glenna-message" className={theme.label}>Message for Atty. Glenna (optional)</label>
        <textarea id="glenna-message" name="message" rows={3} className={`focus-ring ${theme.input}`} placeholder="Leave a note or well-wish" />
      </div>

      {errorMsg && <p className={theme.error}>{errorMsg}</p>}

      <button type="submit" disabled={status === "loading"} className={`focus-ring w-full ${theme.button}`}>
        {status === "loading" ? "Sending…" : "Send RSVP"}
      </button>
      <p className={theme.helper}>Please reply by {EVENT.rsvpBy}.</p>
    </form>
  );
}
