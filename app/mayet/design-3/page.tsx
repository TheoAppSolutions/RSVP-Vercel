'use client';

import { EVENT, PALETTE, STYLE_3 } from '../constants';
import { playfair, jost } from '../../fonts';
import RSVPForm from '../components/RSVPForm';

// -----------------------------------------------------------------------
// Design 3 — "Botanical Frame"
// Symmetric, romantic invitation: corner leaf sprigs framing the card,
// a large translucent "65" watermark behind the name, soft guest-book
// style RSVP form.
// Display face: 'Playfair Display' italic — a softer, romantic serif.
// -----------------------------------------------------------------------

const SPRIG_COLORS = [PALETTE.burnt, PALETTE.coral, PALETTE.marigold, PALETTE.olive];

function LeafSprig({ rotate }: { rotate: number }) {
  return (
    <svg
      viewBox="0 0 90 90"
      width="90"
      height="90"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path d="M4 4 C 30 10, 40 30, 42 42" stroke="var(--olive)" strokeWidth="1.4" fill="none" />
      {[
        [10, 10, 0],
        [18, 18, 1],
        [26, 24, 2],
        [33, 32, 3],
        [15, 24, 1],
        [24, 34, 0],
      ].map(([x, y, ci], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="7"
          ry="4"
          fill={SPRIG_COLORS[ci as number]}
          opacity="0.85"
          transform={`rotate(${35 + i * 12} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

export default function Design3() {
  return (
    <div className={`page ${playfair.variable} ${jost.variable}`}>
      <style>{STYLE_3}</style>

      <style>{`
        .page {
          min-height: 100vh;
          background: var(--cream);
          color: var(--ink);
          font-family: var(--font-jost), sans-serif;
          font-weight: 300;
          display: flex;
          justify-content: center;
          padding: 56px 16px 96px;
        }

        .frame {
          position: relative;
          width: 100%;
          max-width: 600px;
          background: var(--panel);
          border: 1px solid rgba(163, 152, 20, 0.25);
          border-radius: 4px;
          padding: 56px 40px 44px;
          box-shadow: 0 24px 50px -28px rgba(74, 46, 23, 0.3);
          animation: rise 500ms ease-out both;
          overflow: hidden;
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .frame { animation: none; }
        }

        .corner { position: absolute; opacity: 0.9; }
        .corner.tl { top: -6px;    left: -6px;  }
        .corner.tr { top: -6px;    right: -6px; }
        .corner.bl { bottom: -6px; left: -6px;  }
        .corner.br { bottom: -6px; right: -6px; }

        .watermark {
          position: absolute;
          top: 38%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-playfair), serif;
          font-weight: 600;
          font-size: 260px;
          color: var(--burnt);
          opacity: 0.06;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        .content { position: relative; text-align: center; }

        .hero-photo {
          width: 108px;
          height: 108px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 22px;
          border: 2px solid var(--marigold);
          box-shadow: 0 8px 20px -10px rgba(74, 46, 23, 0.4);
        }
        .hero-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .eyebrow {
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--olive);
          margin: 0 0 18px;
        }

        .name {
          font-family: var(--font-playfair), serif;
          font-style: italic;
          font-weight: 600;
          font-size: 42px;
          line-height: 1.15;
          margin: 0 0 6px;
          color: var(--burnt);
        }

        .celebrates {
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--sage);
          margin: 0 0 30px;
        }

        .invite-line {
          font-family: var(--font-playfair), serif;
          font-style: italic;
          font-size: 17px;
          line-height: 1.75;
          max-width: 400px;
          margin: 0 auto 34px;
        }

        .divider-flower { text-align: center; color: var(--coral); font-size: 14px; margin: 0 0 30px; }

        .detail-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 18px;
          margin-bottom: 30px;
        }
        .detail-row .label {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--olive);
          margin: 0 0 6px;
        }
        .detail-row .value {
          font-family: var(--font-playfair), serif;
          font-weight: 500;
          font-size: 16px;
          margin: 0;
        }
        .detail-row .value span {
          display: block;
          font-family: var(--font-jost), sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: var(--sage);
          margin-top: 2px;
        }

        .map-frame {
          margin: 0 auto 30px;
          max-width: 440px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid rgba(163, 152, 20, 0.22);
        }
        .map-frame iframe { width: 100%; height: 190px; border: 0; display: block; }

        .attire-gallery { display: flex; justify-content: center; gap: 12px; margin: 0 auto 8px; }
        .attire-gallery img {
          width: 88px;
          height: 116px;
          object-fit: cover;
          border-radius: 50% 50% 6px 6px;
          border: 1px solid rgba(163, 152, 20, 0.25);
        }

        .attire-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--sage);
          margin: 10px 0 36px;
        }

        /* ---------- RSVP ---------- */

        .form-wrap {
          background: var(--cream);
          border-radius: 10px;
          padding: 32px 26px;
          text-align: left;
        }

        .form-title {
          font-family: var(--font-playfair), serif;
          font-style: italic;
          font-size: 22px;
          text-align: center;
          margin: 0 0 4px;
          color: var(--burnt);
        }
        .form-sub { text-align: center; font-size: 12px; color: var(--sage); margin: 0 0 24px; }

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
          background: var(--panel);
          border: 1px solid rgba(163, 152, 20, 0.3);
          border-radius: 999px;
          color: var(--ink);
          font-family: var(--font-jost), sans-serif;
          font-weight: 300;
          font-size: 14px;
          padding: 11px 18px;
          outline: none;
        }
        .field textarea { border-radius: 16px; min-height: 60px; resize: vertical; }
        .field input:focus,
        .field textarea:focus,
        .field select:focus { border-color: var(--burnt); }

        .attend-options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .attend-btn {
          border: 1px solid rgba(163, 152, 20, 0.3);
          background: var(--panel);
          color: var(--sage);
          font-size: 12px;
          padding: 11px 8px;
          border-radius: 999px;
          cursor: pointer;
        }
        .attend-btn.active { background: var(--coral); border-color: var(--coral); color: #fff9ef; }

        .submit-btn {
          width: 100%;
          margin-top: 6px;
          background: var(--burnt);
          color: #fff9ef;
          border: none;
          border-radius: 999px;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 14px;
          cursor: pointer;
        }
        .submit-btn:hover:not(:disabled) { background: var(--coral); }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .status-msg {
          text-align: center;
          font-family: var(--font-playfair), serif;
          font-style: italic;
          font-size: 14px;
          color: var(--burnt);
          margin-top: 14px;
        }
        .status-msg.error { color: var(--coral); }

        @media (max-width: 480px) {
          .frame { padding: 44px 20px 32px; }
          .name { font-size: 32px; }
          .watermark { font-size: 170px; }
          .detail-row { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>

      <div className="frame">
        <div className="corner tl"><LeafSprig rotate={0} /></div>
        <div className="corner tr"><LeafSprig rotate={90} /></div>
        <div className="corner bl"><LeafSprig rotate={-90} /></div>
        <div className="corner br"><LeafSprig rotate={180} /></div>

        <span className="watermark">{EVENT.age}</span>

        <div className="content">
          <div className="hero-photo">
            <img
              src="https://placehold.co/220x220/FFA82C/4A2E17?text=Photo"
              alt="Placeholder photo of Mayet Sumagaysay — replace with an actual photo"
            />
          </div>

          <p className="eyebrow">Together with joyful hearts</p>
          <h1 className="name">{EVENT.name}</h1>
          <p className="celebrates">celebrates her {EVENT.age}th birthday</p>

          <p className="invite-line">
            A garden evening of soft blooms and warm company, in honor of a
            life beautifully lived. We would be delighted to have you join us.
          </p>

          <p className="divider-flower">✿ ✿ ✿</p>

          <div className="detail-row">
            <div>
              <p className="label">Date</p>
              <p className="value">
                {EVENT.date}
                <span>2026</span>
              </p>
            </div>
            <div>
              <p className="label">Time</p>
              <p className="value">
                {EVENT.time}
                <span>onwards</span>
              </p>
            </div>
            <div>
              <p className="label">Venue</p>
              <p className="value">
                {EVENT.venue}
                <span>garden formal</span>
              </p>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(EVENT.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map to ${EVENT.venue}`}
            />
          </div>

          <div className="attire-gallery">
            <img src="https://placehold.co/200x260/F94063/FFF9EF?text=Attire" alt="Attire inspiration" />
            <img src="https://placehold.co/200x260/A39814/FFF9EF?text=Attire" alt="Attire inspiration" />
          </div>
          <p className="attire-label">Garden Formal — florals &amp; warm hues</p>

          <div className="form-wrap">
            <h2 className="form-title">Kindly Respond</h2>
            <p className="form-sub">We hope to hear from you by {EVENT.rsvpBy}</p>
            <RSVPForm formPrefix="d3" />
          </div>
        </div>
      </div>
    </div>
  );
}
