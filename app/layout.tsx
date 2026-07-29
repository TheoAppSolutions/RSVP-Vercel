import type { Metadata } from "next";
import {
  Dancing_Script,
  Oswald,
  Cormorant_Garamond,
  Inter,
  Bebas_Neue,
  Work_Sans,
} from "next/font/google";
import "./globals.css";

const script = Dancing_Script({ subsets: ["latin"], variable: "--font-script", weight: ["500", "700"] });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["300", "400", "500", "600"] });
const garamond = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-garamond", weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({ subsets: ["latin"], variable: "--font-bebas", weight: "400" });
const work = Work_Sans({ subsets: ["latin"], variable: "--font-work" });

export const metadata: Metadata = {
  title: "Glenna's 65th — Denim & Diamonds",
  description: "RSVP for Atty. Glenna's 65th Birthday Celebration — Denim & Diamonds, October 10, 2026 at Glasshouse.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${script.variable} ${oswald.variable} ${garamond.variable} ${inter.variable} ${bebas.variable} ${work.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
