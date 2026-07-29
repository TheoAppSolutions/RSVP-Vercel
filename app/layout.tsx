import type { Metadata } from 'next';
import {
  cormorant,
  jost,
  fraunces,
  playfair,
  script,
  oswald,
  garamond,
  inter,
  bebas,
  work,
} from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: "Celebration RSVPs",
  description: "RSVP for our upcoming birthday events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${jost.variable} ${fraunces.variable} ${playfair.variable} ${script.variable} ${oswald.variable} ${garamond.variable} ${inter.variable} ${bebas.variable} ${work.variable} antialiased`}
        style={{ margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
