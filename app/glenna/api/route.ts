import { NextRequest, NextResponse } from "next/server";

// NOTE: Vercel's serverless functions don't have persistent disk storage,
// so this route just validates and logs the submission. For real production
// use, wire this up to a database or sheet — see README "Making RSVPs stick".
// Good free/easy options: Vercel Postgres, Supabase, Airtable, or a Google Sheet
// via a service like SheetDB.

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, attending, guests, message } = data;

    if (!name || !attending) {
      return NextResponse.json(
        { ok: false, error: "Name and attendance are required." },
        { status: 400 }
      );
    }

    // Replace this with a real database/sheet write if needed.
    console.log("New Glenna RSVP:", { name, email, attending, guests, message, receivedAt: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
