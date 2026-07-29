import Link from "next/link";

const designs = [
  {
    href: "/mayet/design-1",
    name: "Botanical Garland",
    desc: "'Cormorant Garamond' — soft, romantic serif for a garden party. Body / label face: 'Jost' — light, wide-tracked for small caps labels.",
  },
  {
    href: "/mayet/design-2",
    name: "Garden Ticket",
    desc: "'Fraunces' — a bolder, more graphic serif than the main page's Cormorant, for a distinct editorial-ticket feel.",
  },
  {
    href: "/mayet/design-3",
    name: "Botanical Frame",
    desc: "'Playfair Display' italic — a softer, more romantic serif than the main page's Cormorant, paired with the same watermark warmth.",
  },
];

export default function MayetHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-denim-900 px-6 py-20 text-denim-50">
      <p className="font-oswald text-xs uppercase tracking-[0.3em] text-denim-200/60">Mayet's 65th</p>
      <h1 className="mt-3 text-center font-script text-5xl text-rhinestone">
        Mayet&rsquo;s 65th — Design Samples
      </h1>
      <div className="mt-12 grid w-full max-w-3xl gap-6 sm:grid-cols-3">
        {designs.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="focus-ring group rounded-lg border border-denim-300/25 bg-denim-800/40 p-6 transition hover:border-rhinestone/60"
          >
            <h2 className="font-oswald text-lg uppercase tracking-wide text-rhinestone">{d.name}</h2>
            <p className="mt-2 text-sm text-denim-100/70">{d.desc}</p>
            <span className="mt-4 inline-block text-xs uppercase tracking-wide text-denim-200/50 group-hover:text-rhinestone">
              View design →
            </span>
          </Link>
        ))}
      </div>
      <Link href="/" className="mt-12 text-sm text-denim-300 hover:text-rhinestone underline transition">
        ← Back to client selection
      </Link>
    </main>
  );
}
