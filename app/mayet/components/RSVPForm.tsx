"use client";

import { useState } from "react";
import type { Attendance } from "@/app/mayet/lib/event";

// -----------------------------------------------------------------------
// Mayet-scoped RSVP form.
// Self-contained: posts to /api/rsvp/mayet and hard-codes Mayet-specific
// copy (reply date, message label, success text). Accepts a `formPrefix`
// prop so element IDs are unique when multiple forms appear on the same
// page. The wire payload ({name, email, attending, guests, message})
// matches the shared handler in lib/rsvp/ — see app/glenna's RSVPForm
// for the same contract with different markup/styling.
// -----------------------------------------------------------------------

type Props = {
  formPrefix?: string;
};

export default function RSVPForm({ formPrefix = "mayet" }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState<Attendance>("");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !attendance) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/rsvp/mayet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: email || undefined,
          attending: attendance === "joyfully-accepts" ? "yes" : "no",
          guests,
          message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="status-msg sent">
        Thank you, {name.split(" ")[0] || "friend"}. Your response has been received with joy.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor={`${formPrefix}-name`}>Full Name</label>
        <input
          id={`${formPrefix}-name`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>

      <div className="field">
        <label htmlFor={`${formPrefix}-email`}>Email (optional)</label>
        <input
          id={`${formPrefix}-email`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </div>

      <div className="field">
        <label>Will you attend?</label>
        <div className="attend-options">
          <button
            type="button"
            className={`attend-btn ${attendance === "joyfully-accepts" ? "active" : ""}`}
            onClick={() => setAttendance("joyfully-accepts")}
          >
            Joyfully accepts
          </button>
          <button
            type="button"
            className={`attend-btn ${attendance === "regretfully-declines" ? "active" : ""}`}
            onClick={() => setAttendance("regretfully-declines")}
          >
            Regretfully declines
          </button>
        </div>
      </div>

      {attendance === "joyfully-accepts" && (
        <div className="field">
          <label htmlFor={`${formPrefix}-guests`}>Number of Guests (including yourself)</label>
          <select id={`${formPrefix}-guests`} value={guests} onChange={(e) => setGuests(e.target.value)}>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      )}

      <div className="field">
        <label htmlFor={`${formPrefix}-message`}>Message for Mayet (optional)</label>
        <textarea
          id={`${formPrefix}-message`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a warm note..."
        />
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={status === "sending" || !name.trim() || !attendance}
      >
        {status === "sending" ? "Sending…" : "Send RSVP"}
      </button>

      {status === "error" && (
        <p className="status-msg error">
          Something went wrong sending your response — please try again.
        </p>
      )}
    </form>
  );
}
