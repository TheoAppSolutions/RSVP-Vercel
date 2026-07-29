import { Cormorant_Garamond, Jost, Fraunces, Playfair_Display } from 'next/font/google';

// -----------------------------------------------------------------------
// Centralized font loading via next/font/google.
//
// Why this file exists: next/font downloads these fonts once at BUILD
// time and self-hosts the files alongside the rest of the app. That
// means the browser never makes a separate request to
// fonts.googleapis.com, and there's no "flash of unstyled text" while
// that request resolves — the correct font is already present on the
// very first paint. This replaces the old `@import url(...)` approach,
// which caused a visible font swap / layout reflow on load.
//
// Each export below produces a CSS custom property (the `variable`
// option) that a page applies to its root element, then references in
// its own styled-jsx as `var(--font-cormorant)`, etc.
// -----------------------------------------------------------------------

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});
