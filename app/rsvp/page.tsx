'use client';

import { useState } from 'react';
import { EVENT, PALETTE, type Attendance } from '@/lib/event';

// -----------------------------------------------------------------------
// Design 1 — "Botanical Garland"
// Event data, attendance type, and color palette now live in
// lib/event.ts and are shared across every design (rsvp, rsvp2, rsvp3).
// Display face: 'Cormorant Garamond' — soft, romantic serif for a garden party
// Body / label face: 'Jost' — light, wide-tracked for small caps labels
// -----------------------------------------------------------------------

export default function RsvpPage() {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<Attendance>('');
  const [guests, setGuests] = useState('1');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !attendance) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, attendance, guests, message }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="page">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Jost:wght@300;400;500&display=swap');

        :root {
          --cream: ${PALETTE.cream};
          --panel: ${PALETTE.panel};
          --panel-line: rgba(163, 152, 20, 0.22);
          --ink: ${PALETTE.ink};
          --sage: ${PALETTE.sage};
          --burnt: ${PALETTE.burnt};
          --coral: ${PALETTE.coral};
          --marigold: ${PALETTE.marigold};
          --olive: ${PALETTE.olive};
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }
      `}</style>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(ellipse at 50% -10%, #fff9ef 0%, var(--cream) 60%);
          color: var(--ink);
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          display: flex;
          justify-content: center;
          padding: 64px 20px 96px;
        }

        .card {
          width: 100%;
          max-width: 640px;
          animation: rise 900ms ease-out both;
        }

        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .card {
            animation: none;
          }
        }

        /* ---------- Hero ---------- */

        .hero {
          text-align: center;
          padding: 8px 8px 40px;
        }

        .eyebrow {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 12px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--burnt);
          margin: 0 0 28px;
        }

        .hero-photo {
          width: 132px;
          height: 132px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 26px;
          border: 3px solid var(--marigold);
          box-shadow: 0 12px 28px -14px rgba(74, 46, 23, 0.4);
        }

        .hero-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .medallion {
          width: 176px;
          height: 176px;
          margin: 0 auto 28px;
          display: block;
        }

        .name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          font-size: 46px;
          line-height: 1.1;
          margin: 0 0 6px;
          letter-spacing: 0.01em;
        }

        .celebrates {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--sage);
          margin: 4px 0 0;
        }

        .rule {
          border: none;
          height: 1px;
          width: 100%;
          margin: 40px 0;
          background: linear-gradient(
            to right,
            transparent,
            var(--panel-line) 20%,
            var(--panel-line) 80%,
            transparent
          );
          position: relative;
        }

        .rule::after {
          content: '✿';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: var(--coral);
          font-size: 13px;
          background: var(--cream);
          padding: 0 10px;
        }

        /* ---------- Details ---------- */

        .details {
          text-align: center;
          padding: 0 8px 8px;
        }

        .invite-line {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 19px;
          line-height: 1.7;
          color: var(--ink);
          max-width: 460px;
          margin: 0 auto 36px;
        }

        .detail-grid {
          display: grid;
          gap: 22px;
        }

        .detail-item .label {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--burnt);
          margin: 0 0 6px;
        }

        .detail-item .value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 500;
          color: var(--ink);
          margin: 0;
        }

        .detail-item .value span {
          display: block;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: var(--sage);
          margin-top: 2px;
        }

        .map-frame {
          margin: 20px auto 0;
          max-width: 460px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--panel-line);
          box-shadow: 0 14px 30px -20px rgba(74, 46, 23, 0.3);
        }

        .map-frame iframe {
          width: 100%;
          height: 220px;
          border: 0;
          display: block;
        }

        .map-caption {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--sage);
          text-align: center;
          padding: 10px 6px;
          background: var(--panel);
        }

        .attire-heading {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--burnt);
          text-align: center;
          margin: 34px 0 16px;
        }

        .attire-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          max-width: 460px;
          margin: 0 auto;
        }

        .attire-card {
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--panel-line);
        }

        .attire-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }

        .attire-caption {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--sage);
          text-align: center;
          padding: 8px 6px;
          background: var(--panel);
        }

        @media (max-width: 420px) {
          .attire-gallery {
            grid-template-columns: 1fr;
          }
        }

        /* ---------- RSVP form ---------- */

        .form-wrap {
          background: var(--panel);
          border: 1px solid var(--panel-line);
          border-radius: 4px;
          padding: 40px 32px;
          margin-top: 8px;
          box-shadow: 0 18px 40px -24px rgba(74, 46, 23, 0.25);
        }

        .form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          text-align: center;
          margin: 0 0 6px;
          color: var(--burnt);
        }

        .form-sub {
          text-align: center;
          font-size: 13px;
          color: var(--sage);
          margin: 0 0 30px;
        }

        .field {
          margin-bottom: 22px;
        }

        .field label {
          display: block;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--olive);
          margin-bottom: 9px;
        }

        .field input[type='text'],
        .field textarea,
        .field select {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--panel-line);
          color: var(--ink);
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 16px;
          padding: 8px 2px;
          outline: none;
          transition: border-color 200ms ease;
        }

        .field select option {
          background: var(--panel);
          color: var(--ink);
        }

        .field input[type='text']:focus,
        .field textarea:focus,
        .field select:focus {
          border-color: var(--burnt);
        }

        .field textarea {
          resize: vertical;
          min-height: 64px;
          font-family: 'Jost', sans-serif;
        }

        .attend-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .attend-btn {
          border: 1px solid var(--panel-line);
          background: transparent;
          color: var(--sage);
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          letter-spacing: 0.05em;
          padding: 14px 10px;
          border-radius: 3px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .attend-btn:hover {
          border-color: var(--burnt);
          color: var(--burnt);
        }

        .attend-btn.active {
          background: rgba(225, 85, 5, 0.1);
          border-color: var(--burnt);
          color: var(--burnt);
        }

        .attend-btn:focus-visible,
        .field input:focus-visible,
        .field select:focus-visible,
        .field textarea:focus-visible,
        .submit-btn:focus-visible {
          outline: 2px solid var(--coral);
          outline-offset: 2px;
        }

        .submit-btn {
          width: 100%;
          margin-top: 12px;
          background: var(--burnt);
          color: #fff9ef;
          border: none;
          border-radius: 3px;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 15px;
          cursor: pointer;
          transition: background 180ms ease;
        }

        .submit-btn:hover:not(:disabled) {
          background: var(--coral);
        }

        .submit-btn:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .status-msg {
          text-align: center;
          font-size: 14px;
          margin-top: 18px;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
        }

        .status-msg.sent {
          color: var(--burnt);
        }

        .status-msg.error {
          color: var(--coral);
        }

        .footer {
          text-align: center;
          margin-top: 44px;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--sage);
        }

        @media (max-width: 420px) {
          .name {
            font-size: 38px;
          }
          .form-wrap {
            padding: 32px 20px;
          }
        }
      `}</style>

      <div className="card">
        {/* Hero */}
        <div className="hero">
          {/* Placeholder photo — swap the src for an actual photo of Mayet before launch */}
          <div className="hero-photo">
            <img
              src="https://placehold.co/300x300/FFA82C/4A2E17?text=Photo"
              alt="Placeholder photo of Mayet Sumagaysay — replace with an actual photo"
            />
          </div>

          <p className="eyebrow">You are cordially invited</p>

          <svg
            className="medallion"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="A ring of garden flowers in burnt orange, coral, marigold, and olive, encircling the number 65"
          >
            {/* garland ring of small flowers using the four palette colors */}
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i / 16) * Math.PI * 2;
              const r = 84;
              const cx = 100 + r * Math.cos(angle);
              const cy = 100 + r * Math.sin(angle);
              const colors = [PALETTE.burnt, PALETTE.coral, PALETTE.marigold, PALETTE.olive];
              const color = colors[i % colors.length];
              const size = i % 2 === 0 ? 6 : 4.2;
              return (
                <g key={i}>
                  {/* petals */}
                  {Array.from({ length: 5 }).map((_, p) => {
                    const pAngle = (p / 5) * Math.PI * 2;
                    const px = cx + size * 0.9 * Math.cos(pAngle);
                    const py = cy + size * 0.9 * Math.sin(pAngle);
                    return (
                      <ellipse
                        key={p}
                        cx={px}
                        cy={py}
                        rx={size * 0.6}
                        ry={size * 0.9}
                        fill={color}
                        opacity="0.88"
                        transform={`rotate(${(pAngle * 180) / Math.PI} ${px} ${py})`}
                      />
                    );
                  })}
                  <circle cx={cx} cy={cy} r={size * 0.45} fill="#FFF9EF" />
                </g>
              );
            })}
            <circle cx="100" cy="100" r="65" fill="#FFFFFF" stroke="var(--panel-line)" strokeWidth="1" />
            <text
              x="100"
              y="118"
              textAnchor="middle"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="54"
              fill="var(--burnt)"
              fontStyle="italic"
            >
              65
            </text>
          </svg>

          <h1 className="name">{EVENT.name}</h1>
          <p className="celebrates">is turning {EVENT.age}</p>
        </div>

        <hr className="rule" />

        {/* Details */}
        <div className="details">
          <p className="invite-line">
            Please join us in the garden of good company as we celebrate a
            milestone birthday with blooms, laughter, and gratitude.
          </p>

          <div className="detail-grid">
            <div className="detail-item">
              <p className="label">Date &amp; Time</p>
              <p className="value">
                {EVENT.date}
                <span>{EVENT.time}</span>
              </p>
            </div>
            <div className="detail-item">
              <p className="label">Venue</p>
              <p className="value">{EVENT.venue}</p>
            </div>
            <div className="detail-item">
              <p className="label">Attire</p>
              <p className="value">
                Garden Formal
                <span>florals and warm garden hues welcome</span>
              </p>
            </div>
          </div>

          {/* Map — swap EVENT.mapQuery for the hotel's exact address for a precise pin */}
          <div className="map-frame">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                EVENT.mapQuery
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map to ${EVENT.venue}`}
            />
            <p className="map-caption">{EVENT.venue}</p>
          </div>

          <p className="attire-heading">Attire Inspiration</p>
          <div className="attire-gallery">
            <div className="attire-card">
              <img
                src="https://placehold.co/300x400/F94063/FFF9EF?text=Attire"
                alt="Placeholder image — garden formal attire inspiration"
              />
              <p className="attire-caption">Garden Florals</p>
            </div>
            <div className="attire-card">
              <img
                src="https://placehold.co/300x400/A39814/FFF9EF?text=Attire"
                alt="Placeholder image — garden formal attire inspiration"
              />
              <p className="attire-caption">Warm Earth Tones</p>
            </div>
          </div>
        </div>

        <hr className="rule" />

        {/* RSVP form */}
        <div className="form-wrap">
          <h2 className="form-title">Kindly Respond</h2>
          <p className="form-sub">We look forward to hearing from you by {EVENT.rsvpBy}</p>

          {status === 'sent' ? (
            <p className="status-msg sent">
              Thank you, {name.split(' ')[0] || 'friend'}. Your response has been received with joy.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="field">
                <label>Will you attend?</label>
                <div className="attend-options">
                  <button
                    type="button"
                    className={`attend-btn ${attendance === 'joyfully-accepts' ? 'active' : ''}`}
                    onClick={() => setAttendance('joyfully-accepts')}
                  >
                    Joyfully accepts
                  </button>
                  <button
                    type="button"
                    className={`attend-btn ${attendance === 'regretfully-declines' ? 'active' : ''}`}
                    onClick={() => setAttendance('regretfully-declines')}
                  >
                    Regretfully declines
                  </button>
                </div>
              </div>

              {attendance === 'joyfully-accepts' && (
                <div className="field">
                  <label htmlFor="guests">Number of Guests (including yourself)</label>
                  <select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="field">
                <label htmlFor="message">Message for Mayet (optional)</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a warm note..."
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'sending' || !name.trim() || !attendance}
              >
                {status === 'sending' ? 'Sending…' : 'Send RSVP'}
              </button>

              {status === 'error' && (
                <p className="status-msg error">
                  Something went wrong sending your response — please try again.
                </p>
              )}
            </form>
          )}
        </div>

        <p className="footer">With Love — The Family of {EVENT.name}</p>
      </div>
    </div>
  );
}
