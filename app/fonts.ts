import {
  Cormorant_Garamond,
  Jost,
  Fraunces,
  Playfair_Display,
  Dancing_Script,
  Oswald,
  Inter,
  Bebas_Neue,
  Work_Sans,
} from 'next/font/google';

// Mayet's fonts
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

// Glenna's fonts
export const script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["500", "700"],
  display: 'swap',
});

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600"],
  display: 'swap',
});

export const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: 'swap',
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
  display: 'swap',
});

export const work = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  display: 'swap',
});
