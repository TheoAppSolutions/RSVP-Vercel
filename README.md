# RSVP Suites

A Next.js app hosting RSVP invitation sites for two clients — **Mayet**
and **Glenna** — each with three visual designs. Every design's form
saves to that client's own Google Sheet and sends a confirmation email
to the guest plus a notification email to the event owner.

## Folder structure

Both clients are mirrors of each other, structurally — same file
layout, same backend contract — with only their content, palette, and
markup differing.

```
app/
  layout.tsx, page.tsx, fonts.ts, globals.css   Shared shell + client picker
  api/rsvp/
    mayet/route.ts     Mayet's API route  — thin, uses lib/rsvp/handler.ts
    glenna/route.ts    Glenna's API route — thin, uses lib/rsvp/handler.ts
  mayet/
    page.tsx            Design picker ("View 3 Designs")
    rsvp.config.ts       Which sheet + owner inbox this client uses
    lib/event.ts          Event details + palette (edit here to rebrand)
    constants.ts           Re-exports EVENT + per-design CSS var blocks
    components/RSVPForm.tsx  Mayet-styled form (styled-jsx classes)
    design-1/page.tsx      "Botanical Garland"
    design-2/page.tsx      "Garden Ticket"
    design-3/page.tsx      "Botanical Frame"
  glenna/
    page.tsx            Design picker
    rsvp.config.ts       Which sheet + owner inbox this client uses
    lib/event.ts          Event details
    constants.ts           Re-exports EVENT + per-design theme tokens
    components/RSVPForm.tsx  Glenna-styled form (Tailwind theme prop)
    design-1/page.tsx      "Rhinestone Ranch"
    design-2/page.tsx      "Sapphire Soirée"
    design-3/page.tsx      "Denim Edit"
lib/
  rsvp/
    types.ts     Shared RSVPSubmission / RSVPClientConfig contracts
    sheets.ts     appendRSVPRow() — writes a row via one shared Google service account
    email.ts      sendRSVPEmails() — guest confirmation + owner notification via Resend
    handler.ts    createRSVPHandler() — the actual POST logic, shared by both routes
```

**Why it's split this way:** the two clients look completely different
(different fonts, palettes, layout — see `components/RSVPForm.tsx` in
each), so their forms and design pages stay separate. But "save a row
to a sheet" and "send two emails" is identical logic for both, so that
part lives once in `lib/rsvp/` and each client just plugs in its own
config (`rsvp.config.ts`) — its sheet ID env var, its owner's email env
var, its event name. A client's `route.ts` is one line:

```ts
export const POST = createRSVPHandler(RSVP_CONFIG);
```

To add a third client later: copy an existing client folder, edit its
`lib/event.ts` / `constants.ts` / `rsvp.config.ts`, add a matching
`app/api/rsvp/<name>/route.ts`, and set that client's env vars. No
changes needed in `lib/rsvp/`.

---

## 1. Run it locally

```
npm install
cp .env.example .env.local   # then fill in the values (see step 2)
npm run dev
```

Visit `http://localhost:3000` — it links out to `/mayet` and `/glenna`.

---

## 2. Connect Google Sheets (one service account, two sheets)

Both clients share a single Google service account; each just writes to
its own sheet.

### a) Create both sheets

For each client, create a Google Sheet with this header row:

```
Name | Email | Attendance | Guests | Message | Submitted At
```

Copy each sheet's ID out of its URL:
`https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit`

### b) Create one Google Cloud service account

1. In [console.cloud.google.com](https://console.cloud.google.com/), create/select a project.
2. **APIs & Services → Library** → enable **Google Sheets API**.
3. **APIs & Services → Credentials → Create Credentials → Service account.**
4. Open it → **Keys** → **Add Key → Create new key → JSON**. Keep this file safe, never commit it.
5. From that JSON, you need `client_email` and `private_key`.

### c) Share both sheets with the service account

For each sheet, click **Share**, paste in the `client_email`, and give it **Editor** access.

### d) Set environment variables

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=rsvp-writer@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n"
MAYET_GOOGLE_SHEET_ID=your-mayet-sheet-id
GLENNA_GOOGLE_SHEET_ID=your-glenna-sheet-id
```

The private key must be pasted exactly as it appears in the JSON file
(quotes included, `\n` left as literal characters).

---

## 3. Connect email (Resend)

Both clients share one sender identity; each has its own owner inbox.

1. Create a free account at [resend.com](https://resend.com) and verify a sending domain (or use their test domain while developing).
2. **API Keys** → create one → this is `RESEND_API_KEY`.
3. Set the following:

```
RESEND_API_KEY=re_your_key
EMAIL_FROM="RSVPs <rsvp@yourdomain.com>"
MAYET_OWNER_EMAIL=mayet-owner@example.com
GLENNA_OWNER_EMAIL=glenna-owner@example.com
```

If `RESEND_API_KEY` or `EMAIL_FROM` is missing, the app still saves to
the sheet — it just skips emails and logs a warning. Email is
best-effort and never blocks a successful RSVP.

---

## 4. Deploy to Vercel

1. Push this project to a GitHub repo, then import it into Vercel.
2. In **Settings → Environment Variables**, add all nine variables from
   `.env.local`:
   `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`,
   `MAYET_GOOGLE_SHEET_ID`, `GLENNA_GOOGLE_SHEET_ID`,
   `RESEND_API_KEY`, `EMAIL_FROM`,
   `MAYET_OWNER_EMAIL`, `GLENNA_OWNER_EMAIL`.
3. Deploy. Visit `your-project.vercel.app/mayet` or `/glenna`.

Every submitted RSVP appears as a new row in the right sheet within a
second or two, and both the guest and the event owner get an email.

---

## Fonts

Fonts are loaded via `app/fonts.ts` using Next.js's built-in
`next/font/google` (self-hosted at build time, no runtime request to
fonts.googleapis.com, no flash of unstyled text). If you add a new font
for a design, add it in `app/fonts.ts` rather than importing it directly
in a page.

## Troubleshooting

- **"Server is not configured to receive RSVPs yet" / 500 on submit** —
  one of the Sheets env vars is missing or misspelled for that client.
- **403 / permission error in the logs** — the relevant sheet hasn't
  been shared with the service account's `client_email`, or was only
  given Viewer instead of Editor access.
- **Private key errors** — usually the `\n` characters getting converted
  to real newlines when copy-pasting. Keep it one single-line string
  with literal `\n`.
- **RSVP saves but no emails arrive** — check `RESEND_API_KEY`,
  `EMAIL_FROM` (must be a verified sender/domain in Resend), and the
  relevant `*_OWNER_EMAIL`. Check server logs for a warning naming which
  one is missing.

## Event details

- **Mayet:** edit `app/mayet/lib/event.ts`.
- **Glenna:** edit `app/glenna/lib/event.ts`.
