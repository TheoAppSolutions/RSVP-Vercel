import type { Metadata } from 'next';
import {
  script,
  garamond,
  fraunces,
  jost,
  work,
} from '@/lib/fonts';
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
        className={`${script.variable} ${garamond.variable} ${fraunces.variable} ${jost.variable} ${work.variable} antialiased`}
        style={{ margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
