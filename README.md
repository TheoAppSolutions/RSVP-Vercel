# Mayet's 65th Birthday — RSVP Site

A small Next.js app with one page (`/rsvp`) — a garden-themed invitation
with an RSVP form that saves responses to a Google Sheet.

## What's inside

```
app/
  layout.tsx        Root layout + page title
  page.tsx           Redirects "/" to "/rsvp"
  rsvp/page.tsx       The invitation + RSVP form (garden theme)
  api/rsvp/route.ts   API route: writes each RSVP to Google Sheets
package.json
next.config.mjs
tsconfig.json
.env.example          Template for the required environment variables
```

Styling is done with `styled-jsx`, which ships with Next.js — there's
nothing extra to install for the design itself.

---

## 1. Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in the three values (see step 2)
npm run dev
```

Visit `http://localhost:3000` — it will redirect to `/rsvp`.

---

## 2. Connect it to a Google Sheet

The form won't save anywhere until you complete this one-time setup
(about 10 minutes).

### a) Create the sheet

Create a new Google Sheet. In row 1, add these headers:

```
Name | Attendance | Guests | Message | Submitted At
```

Copy the **Sheet ID** out of its URL:

```
https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit
```

### b) Create a Google Cloud service account

A service account is a robot Google identity that can write to the sheet
without needing your personal login.

1. Go to [console.cloud.google.com](https://console.cloud.google.com/) and
   create a project (or use an existing one).
2. In the search bar, go to **APIs & Services → Library**, search for
   **Google Sheets API**, and click **Enable**.
3. Go to **APIs & Services → Credentials → Create Credentials → Service
   account**. Give it any name (e.g. `rsvp-writer`) and finish the wizard.
4. Open the service account you just created → **Keys** tab → **Add Key →
   Create new key → JSON**. This downloads a `.json` file — keep it safe,
   don't commit it to git.
5. Open that JSON file. You need two fields from it:
   - `client_email`
   - `private_key`

### c) Share the sheet with the service account

Back in your Google Sheet, click **Share**, and paste in the
`client_email` address from the JSON file (it looks like
`rsvp-writer@your-project.iam.gserviceaccount.com`). Give it **Editor**
access.

### d) Set the environment variables

Locally, put these in `.env.local`:

```
GOOGLE_SHEET_ID=your-sheet-id
GOOGLE_SERVICE_ACCOUNT_EMAIL=rsvp-writer@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n"
```

The private key must be pasted exactly as it appears in the JSON file
(quotes included, `\n` left as literal characters — don't convert them to
real line breaks in this file).

---

## 3. Deploy to Vercel

1. Push this project to a GitHub repo, then import it into Vercel
   (or run `vercel` from this folder if you have the CLI).
2. In the Vercel project → **Settings → Environment Variables**, add the
   same three variables from `.env.local`:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
3. Deploy. Visit `your-project.vercel.app/rsvp`.

Every submitted RSVP will now appear as a new row in the Google Sheet
within a second or two.

---

## Event details

- **Honoree:** Mayet Sumagaysay
- **Date:** Thursday, November 19, 2026, 6:00 PM
- **Venue:** Summit Hotel
- **RSVP by:** November 5, 2026

To change any of these, edit the `EVENT` object near the top of
`app/rsvp/page.tsx`.

## Design notes

- Palette: warm ivory background (`#FBF3E7`) with a garden accent set —
  burnt orange (`#E15505`), coral pink (`#F94063`), marigold (`#FFA82C`),
  and olive gold (`#A39814`) — over warm umber text (`#4A2E17`).
- Display type is Cormorant Garamond; labels use tracked small-caps-style
  Jost.
- The signature element is a garland of small flowers in the four palette
  colors, ringing "65" in the hero.

## Troubleshooting

- **"Server is not configured to receive RSVPs yet"** — one or more of the
  three environment variables is missing or misspelled. Double check them
  in Vercel's dashboard.
- **403 / permission error in the logs** — the sheet hasn't been shared
  with the service account's `client_email`, or it was only given Viewer
  instead of Editor access.
- **Private key errors** — usually caused by the `\n` characters getting
  converted to real newlines when copy-pasting. Keep it as one single-line
  string with literal `\n`.
