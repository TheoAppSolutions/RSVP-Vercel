import Link from "next/link";

const designs = [
  {
    href: "/design-1",
    name: "Botanical Garland",
    desc: "Deep garden green with a floral garland medallion and marigold gold.",
  },
  {
    href: "/design-2",
    name: "Garden Soirée",
    desc: "Elegant evening garden party with petal dividers and firefly sparkle.",
  },
  {
    href: "/design-3",
    name: "Garden Edit",
    desc: "Bold editorial layout with a burnt-orange leaf-edge header panel.",
  },
];

export default function MayetHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-garden-900 px-6 py-20 text-garden-50">
      <p className="font-jost text-xs uppercase tracking-[0.3em] text-garden-200/60">Mayet's 65th</p>
      <h1 className="mt-3 text-center font-script text-5xl text-marigold">
        Mayet&rsquo;s 65th — Design Samples
      </h1>
      <div className="mt-12 grid w-full max-w-3xl gap-6 sm:grid-cols-3">
        {designs.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="focus-ring group rounded-lg border border-garden-300/25 bg-garden-800/40 p-6 transition hover:border-marigold/60"
          >
            <h2 className="font-jost text-lg uppercase tracking-wide text-marigold">{d.name}</h2>
            <p className="mt-2 text-sm text-garden-100/70">{d.desc}</p>
            <span className="mt-4 inline-block text-xs uppercase tracking-wide text-garden-200/50 group-hover:text-marigold">
              View design →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
