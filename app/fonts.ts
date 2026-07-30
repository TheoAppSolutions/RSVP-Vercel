import {
  Cormorant_Garamond,
  Dancing_Script,
  Jost,
  Fraunces,
  Work_Sans,
} from 'next/font/google';

// Mayet's fonts — a warm, botanical type system.
// - script: hand-lettered accent line ("Garden Colors")
// - garamond: refined italic display for the symmetric stationery design
// - fraunces: soft, high-contrast serif for bold expressive headlines
// - jost: tracked small-caps-style labels (dates, venue, form fields)
// - work: body copy

export const script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["500", "700"],
  display: 'swap',
});

export const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: 'swap',
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: 'swap',
});

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
  display: 'swap',
});

export const work = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  display: 'swap',
});
