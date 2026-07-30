import {
  Cormorant_Garamond,
  Dancing_Script,
  Jost,
  Inter,
  Bebas_Neue,
  Work_Sans,
} from 'next/font/google';

// Mayet's fonts
export const script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["500", "700"],
  display: 'swap',
});

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
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
