# Glenna's 65th — Denim & Diamonds RSVP

Next.js 14 (App Router) + Tailwind CSS site with three complete visual designs
for the same RSVP form and event details. Visit `/` to browse all three, or
go straight to `/design-1`, `/design-2`, `/design-3`.

- **Design 1 — Rhinestone Ranch**: dark denim, cursive script headline, star badge.
- **Design 2 — Sapphire Soirée**: elegant midnight-navy gala, diamond-facet dividers.
- **Design 3 — Denim Edit**: bold editorial layout, torn-denim panel.

Event details live in one place: `lib/event.ts`. Edit that file to change the
date, time, venue, or RSVP deadline everywhere at once.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset auto-detects as Next.js — no config needed.
4. Click **Deploy**.

Or with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Making RSVPs stick

Right now `app/api/rsvp/route.ts` validates a submission and logs it, but
Vercel's serverless functions don't have persistent disk storage — so
submissions aren't saved anywhere durable yet. Before the real event, wire
that route up to one of:

- **Vercel Postgres / Supabase** — a proper database, a bit more setup.
- **Airtable** — quick to set up, gives you a spreadsheet-like view of RSVPs.
- **Google Sheets** (via a connector like SheetDB or a Google Apps Script
  webhook) — easiest if you already live in Sheets.
- **Resend or Formspree** — simplest option if you just want an email each
  time someone RSVPs, no dashboard needed.

Happy to wire up whichever of these you'd like next.
