import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mayet's 65th Birthday — RSVP",
  description:
    "You're invited to celebrate Mayet Sumagaysay's 65th birthday on November 19, 2026 at Summit Hotel. Please RSVP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
