"use client";

import { useState } from "react";
import { EVENT } from "@/lib/event";

// -----------------------------------------------------------------------
// Mayet-scoped RSVP form.
// Self-contained: posts to /api/ and hard-codes Mayet-specific
// copy (reply date, success text). Takes a `theme` prop so each design
// page can hand it its own Tailwind classes (see ../constants.ts for
// STYLE_1/2/3) without duplicating the form logic per design. The wire
// payload ({name, email, attending, guests, message}) matches the shared
// handler in lib/rsvp/.
// -----------------------------------------------------------------------

export type RSVPTheme = {
  label: string;
  input: string;
  fieldset: string;
  radioWrap: string;
  radioActive: string;
  radioInactive: string;
  button: string;
  helper: string;
  success: string;
  error: string;
};

type Props = {
  theme: RSVPTheme;
  formPrefix?: string;
};

export default function Form({ theme, formPrefix = "mayet" }: Props) {
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
      const res = await fetch("/api/", {
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
          {attending === "yes" ? "You're on the list! 🌼" : "Thanks for letting us know."}
        </p>
        <p className="mt-2 text-sm opacity-80">
          {attending === "yes"
            ? "We can't wait to celebrate with you on November 19."
            : "You'll be missed — thank you for the reply."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5" noValidate>
      <div>
        <label htmlFor={`${formPrefix}-name`} className={theme.label}>Full name</label>
        <input id={`${formPrefix}-name`} name="name" type="text" required className={`focus-ring ${theme.input}`} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor={`${formPrefix}-email`} className={theme.label}>Email</label>
        <input id={`${formPrefix}-email`} name="email" type="email" required className={`focus-ring ${theme.input}`} placeholder="you@example.com" />
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
        <label htmlFor={`${formPrefix}-guests`} className={theme.label}>Number in your party</label>
        <input id={`${formPrefix}-guests`} name="guests" type="number" min={1} max={6} defaultValue={1} className={`focus-ring ${theme.input}`} />
      </div>

      <div>
        <label htmlFor={`${formPrefix}-message`} className={theme.label}>Message for Mayet (optional)</label>
        <textarea id={`${formPrefix}-message`} name="message" rows={3} className={`focus-ring ${theme.input}`} placeholder="Leave a note or well-wish" />
      </div>

      {errorMsg && <p className={theme.error}>{errorMsg}</p>}

      <button type="submit" disabled={status === "loading"} className={`focus-ring w-full ${theme.button}`}>
        {status === "loading" ? "Sending…" : "Send RSVP"}
      </button>
      <p className={theme.helper}>Please reply by {EVENT.rsvpBy}.</p>
    </form>
  );
}
