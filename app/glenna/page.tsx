import Link from "next/link";

const designs = [
  {
    href: "/glenna/design-1",
    name: "Rhinestone Ranch",
    desc: "Western-glam: dark denim, cursive script, star badge.",
  },
  {
    href: "/glenna/design-2",
    name: "Sapphire Soirée",
    desc: "Elegant midnight gala with diamond-facet dividers.",
  },
  {
    href: "/glenna/design-3",
    name: "Denim Edit",
    desc: "Bold editorial layout with a torn-denim panel.",
  },
];

export default function GlennaHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-denim-900 px-6 py-20 text-denim-50">
      <p className="font-oswald text-xs uppercase tracking-[0.3em] text-denim-200/60">Glenna's 65th</p>
      <h1 className="mt-3 text-center font-script text-5xl text-rhinestone">
        Glenna&rsquo;s 65th — Design Samples
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
