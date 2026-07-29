import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-denim-900 px-6 py-20 text-denim-50">
      <p className="font-oswald text-xs uppercase tracking-[0.3em] text-denim-200/60">Welcome</p>
      <h1 className="mt-3 text-center font-script text-5xl text-rhinestone sm:text-6xl">
        65th Birthday RSVP Suites
      </h1>
      <p className="mt-4 text-center text-sm max-w-md text-denim-100/70">
        Choose a client below to view their customized, responsive design samples.
      </p>

      <div className="mt-12 grid w-full max-w-2xl gap-8 sm:grid-cols-2">
        <Link
          href="/mayet"
          className="focus-ring group rounded-xl border border-denim-300/25 bg-denim-800/40 p-8 transition-all duration-300 hover:border-rhinestone/60 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
        >
          <div className="text-xs font-oswald uppercase tracking-widest text-denim-300/70 group-hover:text-rhinestone">
            Client Suite
          </div>
          <h2 className="mt-4 font-script text-4xl text-rhinestone">Mayet Sumagaysay</h2>
          <p className="mt-4 text-sm text-denim-100/80 leading-relaxed">
            Garden party themed designs with elegant, warm palettes and botanical details.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs font-oswald uppercase tracking-wider text-denim-200/50 group-hover:text-rhinestone">
            View 3 Designs <span>→</span>
          </div>
        </Link>

        <Link
          href="/glenna"
          className="focus-ring group rounded-xl border border-denim-300/25 bg-denim-800/40 p-8 transition-all duration-300 hover:border-rhinestone/60 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
        >
          <div className="text-xs font-oswald uppercase tracking-widest text-denim-300/70 group-hover:text-rhinestone">
            Client Suite
          </div>
          <h2 className="mt-4 font-script text-4xl text-rhinestone">Atty. Glenna</h2>
          <p className="mt-4 text-sm text-denim-100/80 leading-relaxed">
            Denim &amp; Diamonds themed designs featuring western-glam aesthetics, star badges, and torn borders.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs font-oswald uppercase tracking-wider text-denim-200/50 group-hover:text-rhinestone">
            View 3 Designs <span>→</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
