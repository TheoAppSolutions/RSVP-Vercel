import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// -----------------------------------------------------------------------
// This route appends each RSVP submission as a new row in a Google Sheet,
// authenticating as a Google service account (see README.md for the full
// one-time setup: creating the service account, sharing the sheet with it,
// and setting the three environment variables below in Vercel).
//
// Required environment variables:
//   GOOGLE_SHEET_ID               — the ID from the sheet's URL
//   GOOGLE_SERVICE_ACCOUNT_EMAIL  — client_email from the service account JSON
//   GOOGLE_PRIVATE_KEY            — private_key from the service account JSON
// -----------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, attendance, guests, message } = body ?? {};

    if (!name || !attendance) {
      return NextResponse.json(
        { error: 'Name and attendance are required.' },
        { status: 400 }
      );
    }

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    // Vercel env vars store literal "\n" — convert back to real newlines.
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!sheetId || !clientEmail || !privateKey) {
      console.error('Missing Google Sheets environment variables.');
      return NextResponse.json(
        { error: 'Server is not configured to receive RSVPs yet.' },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      // "Sheet1" is the default tab name — change this if you renamed the tab.
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            name,
            attendance === 'joyfully-accepts' ? 'Attending' : 'Not Attending',
            attendance === 'joyfully-accepts' ? guests ?? '1' : '',
            message ?? '',
            new Date().toISOString(),
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('RSVP submission error:', err);
    return NextResponse.json(
      { error: 'Something went wrong saving your RSVP.' },
      { status: 500 }
    );
  }
}
