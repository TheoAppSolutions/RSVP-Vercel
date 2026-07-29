'use client';

import { EVENT, GLOBAL_CSS_2 } from '../constants';
import { fraunces, jost } from '../../fonts';
import RSVPForm from '../RSVPForm';

// -----------------------------------------------------------------------
// Design 2 — "Garden Ticket"
// Styled as an asymmetric event-ticket: a colored stub with the "65"
// numeral on one side, perforated divider, invitation + RSVP on the other.
// Display face: 'Fraunces' — a bolder, more graphic serif for an
// editorial-ticket feel.
// -----------------------------------------------------------------------

export default function Design2() {
  return (
    <div className={`page ${fraunces.variable} ${jost.variable}`}>
      <style>{GLOBAL_CSS_2}</style>

      <style>{`
        .page {
          min-height: 100vh;
          background: var(--cream);
          color: var(--ink);
          font-family: var(--font-jost), sans-serif;
          font-weight: 300;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 56px 20px 96px;
        }

        .ticket {
          width: 100%;
          max-width: 680px;
          display: flex;
          background: var(--panel);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 30px 60px -30px rgba(74, 46, 23, 0.35);
          animation: rise 500ms ease-out both;
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticket { animation: none; }
        }

        /* ---------- Stub ---------- */

        .stub {
          width: 190px;
          flex-shrink: 0;
          background: linear-gradient(165deg, var(--burnt) 0%, var(--coral) 100%);
          color: #fff9ef;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 28px 12px;
          position: relative;
        }

        .stub-tag {
          font-family: var(--font-jost), sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-align: center;
          opacity: 0.92;
        }

        .stub-number {
          font-family: var(--font-fraunces), serif;
          font-size: 92px;
          font-weight: 600;
          line-height: 1;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        .stub-icon { width: 30px; height: 30px; opacity: 0.9; }

        /* perforation */
        .perforation {
          width: 0;
          position: relative;
          border-left: 2px dashed rgba(74, 46, 23, 0.18);
        }
        .perforation::before,
        .perforation::after {
          content: '';
          position: absolute;
          left: -10px;
          width: 20px;
          height: 20px;
          background: var(--cream);
          border-radius: 50%;
        }
        .perforation::before { top: -10px; }
        .perforation::after  { bottom: -10px; }

        /* ---------- Main ---------- */

        .main { flex: 1; padding: 40px 34px; }

        .eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--olive);
          margin: 0 0 10px;
        }

        .name {
          font-family: var(--font-fraunces), serif;
          font-weight: 600;
          font-size: 36px;
          line-height: 1.12;
          margin: 0 0 4px;
        }

        .celebrates {
          font-family: var(--font-fraunces), serif;
          font-style: italic;
          font-weight: 500;
          font-size: 17px;
          color: var(--burnt);
          margin: 0 0 26px;
        }

        .hero-photo {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--marigold);
          float: right;
          margin: -4px 0 12px 12px;
        }
        .hero-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .info-list {
          list-style: none;
          margin: 0 0 8px;
          padding: 0;
          display: grid;
          gap: 14px;
        }

        .info-list li { display: flex; gap: 12px; align-items: baseline; }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          transform: translateY(-2px);
        }

        .info-label {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--sage);
          display: block;
        }

        .info-value {
          font-family: var(--font-fraunces), serif;
          font-size: 18px;
          font-weight: 500;
          color: var(--ink);
        }

        .map-frame {
          margin: 18px 0 6px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid rgba(163, 152, 20, 0.22);
        }
        .map-frame iframe { width: 100%; height: 160px; border: 0; display: block; }

        .attire-row { display: flex; gap: 10px; margin: 18px 0 8px; }
        .attire-row img {
          width: 64px;
          height: 84px;
          object-fit: cover;
          border-radius: 4px;
          border: 1px solid rgba(163, 152, 20, 0.22);
        }
        .attire-note { font-size: 12px; color: var(--sage); align-self: center; line-height: 1.5; }
        .attire-note b { color: var(--ink); font-weight: 500; }

        .divider { border: none; border-top: 1px dashed rgba(163, 152, 20, 0.3); margin: 26px 0 24px; }

        /* ---------- RSVP ---------- */

        .form-title {
          font-family: var(--font-fraunces), serif;
          font-weight: 500;
          font-size: 20px;
          margin: 0 0 4px;
          color: var(--burnt);
        }
        .form-sub { font-size: 12px; color: var(--sage); margin: 0 0 20px; }

        .field { margin-bottom: 16px; }
        .field label {
          display: block;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--olive);
          margin-bottom: 7px;
        }
        .field input[type='text'],
        .field textarea,
        .field select {
          width: 100%;
          background: var(--cream);
          border: 1px solid rgba(163, 152, 20, 0.25);
          border-radius: 20px;
          color: var(--ink);
          font-family: var(--font-jost), sans-serif;
          font-weight: 300;
          font-size: 14px;
          padding: 10px 16px;
          outline: none;
        }
        .field textarea { border-radius: 14px; min-height: 56px; resize: vertical; }
        .field input:focus,
        .field textarea:focus,
        .field select:focus { border-color: var(--burnt); }

        .attend-options { display: flex; gap: 10px; }
        .attend-btn {
          flex: 1;
          border: 1px solid rgba(163, 152, 20, 0.25);
          background: var(--cream);
          color: var(--sage);
          font-size: 12px;
          padding: 10px 8px;
          border-radius: 20px;
          cursor: pointer;
        }
        .attend-btn.active { background: var(--burnt); border-color: var(--burnt); color: #fff9ef; }

        .submit-btn {
          width: 100%;
          margin-top: 6px;
          background: var(--burnt);
          color: #fff9ef;
          border: none;
          border-radius: 20px;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 13px;
          cursor: pointer;
        }
        .submit-btn:hover:not(:disabled) { background: var(--coral); }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .status-msg {
          text-align: center;
          font-family: var(--font-fraunces), serif;
          font-style: italic;
          font-size: 14px;
          color: var(--burnt);
          margin-top: 14px;
        }
        .status-msg.error { color: var(--coral); }

        @media (max-width: 560px) {
          .ticket { flex-direction: column; }
          .stub { width: 100%; flex-direction: row; padding: 18px 24px; }
          .stub-number { writing-mode: horizontal-tb; transform: none; font-size: 48px; }
          .perforation { display: none; }
          .hero-photo { float: none; margin: 0 auto 14px; }
        }
      `}</style>

      <div className="ticket">
        <div className="stub">
          <p className="stub-tag">Garden<br />Celebration</p>
          <span className="stub-number">65</span>
          <svg className="stub-icon" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2c2 3 2 5 0 8-2-3-2-5 0-8zM12 14c2 3 2 5 0 8-2-3-2-5 0-8zM2 12c3-2 5-2 8 0-3 2-5 2-8 0zM14 12c3-2 5-2 8 0-3 2-5 2-8 0z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="perforation" />

        <div className="main">
          <div className="hero-photo">
            <img
              src="https://placehold.co/200x200/FFA82C/4A2E17?text=Photo"
              alt="Placeholder photo of Mayet Sumagaysay — replace with an actual photo"
            />
          </div>

          <p className="eyebrow">You're invited to celebrate</p>
          <h1 className="name">{EVENT.name}</h1>
          <p className="celebrates">turning {EVENT.age}, in bloom</p>

          <ul className="info-list">
            <li>
              <span className="dot" style={{ background: 'var(--burnt)' }} />
              <div>
                <span className="info-label">Date &amp; Time</span>
                <span className="info-value">{EVENT.date} · {EVENT.time}</span>
              </div>
            </li>
            <li>
              <span className="dot" style={{ background: 'var(--coral)' }} />
              <div>
                <span className="info-label">Venue</span>
                <span className="info-value">{EVENT.venue}</span>
              </div>
            </li>
            <li>
              <span className="dot" style={{ background: 'var(--olive)' }} />
              <div>
                <span className="info-label">Attire</span>
                <span className="info-value">Garden Formal</span>
              </div>
            </li>
          </ul>

          <div className="map-frame">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(EVENT.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map to ${EVENT.venue}`}
            />
          </div>

          <div className="attire-row">
            <img src="https://placehold.co/150x200/F94063/FFF9EF?text=A" alt="Attire inspiration" />
            <img src="https://placehold.co/150x200/A39814/FFF9EF?text=B" alt="Attire inspiration" />
            <p className="attire-note">
              <b>Garden Formal.</b> Florals and warm garden hues welcome.
            </p>
          </div>

          <hr className="divider" />

          <h2 className="form-title">Kindly Respond</h2>
          <p className="form-sub">By {EVENT.rsvpBy}</p>

          <RSVPForm formPrefix="d2" />
        </div>
      </div>
    </div>
  );
}
