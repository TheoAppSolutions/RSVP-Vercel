import type { Metadata } from 'next';
import {
  script,
  jost,
  garamond,
  inter,
  bebas,
  work,
} from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: "Mayet's 65th Birthday — RSVP",
  description: "RSVP for Mayet Sumagaysay's 65th Birthday Celebration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${script.variable} ${jost.variable} ${garamond.variable} ${inter.variable} ${bebas.variable} ${work.variable} antialiased`}
        style={{ margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
