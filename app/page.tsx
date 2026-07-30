import Link from "next/link";

const designs = [
  {
    href: "/design-1",
    name: "Garden Arch",
    desc: "A vine arch of small blooms in the four brand colors, ivory background.",
  },
  {
    href: "/design-2",
    name: "Pressed Petals",
    desc: "Symmetric botanical stationery card with a pressed-flower sprig.",
  },
  {
    href: "/design-3",
    name: "Garden Mood Board",
    desc: "Bold editorial layout with the literal four-color swatch strip.",
  },
];

export default function MayetHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-garden-50 px-6 py-20 text-garden-900">
      <p className="font-jost text-xs uppercase tracking-[0.3em] text-garden-500">Mayet's 65th</p>
      <h1 className="mt-3 text-center font-fraunces text-5xl italic text-garden-500">
        Mayet&rsquo;s 65th — Design Samples
      </h1>
      <div className="mt-12 grid w-full max-w-3xl gap-6 sm:grid-cols-3">
        {designs.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="focus-ring group rounded-lg border border-garden-300/60 bg-white p-6 shadow-sm transition hover:border-garden-500"
          >
            <h2 className="font-jost text-lg uppercase tracking-wide text-garden-500">{d.name}</h2>
            <p className="mt-2 text-sm text-garden-600">{d.desc}</p>
            <span className="mt-4 inline-block text-xs uppercase tracking-wide text-garden-400 group-hover:text-garden-600">
              View design →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
