import RSVPForm from "../RSVPForm";
import { EVENT, THEME_1 } from "../constants";

// -----------------------------------------------------------------------
// Design 1 — "Rhinestone Ranch"
// Western-glam: dark denim canvas, cursive script headline,
// sheriff-star badge, rhinestone gold accents.
// -----------------------------------------------------------------------

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 2 L61 37 L98 37 L68 59 L79 95 L50 73 L21 95 L32 59 L2 37 L39 37 Z" />
    </svg>
  );
}

export default function Design1() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-denim-900 text-denim-50">
      {/* Denim texture backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #fff 0px, #fff 1px, transparent 1px, transparent 5px)",
        }}
      />
      <div className="pointer-events-none absolute -left-16 top-24 h-40 w-40 text-denim-300/20"><Star className="h-full w-full" /></div>
      <div className="pointer-events-none absolute right-10 top-10 h-24 w-24 text-rhinestone/20 animate-sparkle"><Star className="h-full w-full" /></div>
      <div className="pointer-events-none absolute bottom-16 left-10 h-16 w-16 text-rhinestone/25 animate-sparkle [animation-delay:0.8s]"><Star className="h-full w-full" /></div>

      <section className="relative mx-auto flex max-w-xl flex-col items-center px-6 pb-24 pt-16 text-center">
        {/* Sheriff-style badge */}
        <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
          <Star className="absolute h-full w-full text-denim-200/90 drop-shadow-[0_0_18px_rgba(180,200,230,0.35)]" />
          <span className="relative font-oswald text-3xl font-semibold text-denim-900">65</span>
        </div>

        <p className="font-oswald text-xs uppercase tracking-[0.35em] text-denim-200/70">Pull on your boots + bring your bling</p>
        <h1 className="mt-4 font-script text-6xl leading-tight text-rhinestone sm:text-7xl">
          Glenna&rsquo;s 65th
        </h1>
        <p className="mt-2 font-script text-3xl text-denim-100/90">Denim &amp; Diamonds</p>

        <div className="mt-10 grid w-full grid-cols-1 gap-3 border-y border-denim-300/25 py-8 font-oswald text-sm uppercase tracking-wide text-denim-100/85 sm:grid-cols-3">
          <div>
            <p className="text-denim-300/70">Date</p>
            <p className="mt-1 text-base text-rhinestone">{EVENT.date}</p>
          </div>
          <div>
            <p className="text-denim-300/70">Time</p>
            <p className="mt-1 text-base text-rhinestone">{EVENT.time}</p>
          </div>
          <div>
            <p className="text-denim-300/70">Venue</p>
            <p className="mt-1 text-base text-rhinestone">{EVENT.venue}</p>
          </div>
        </div>

        <p className="mt-6 font-oswald text-xs uppercase tracking-[0.25em] text-denim-200/60">
          Dress code: {EVENT.dressCode}
        </p>

        <div className="mt-12 w-full rounded-lg border border-denim-300/25 bg-denim-800/40 p-7 text-left shadow-[0_0_40px_-10px_rgba(140,170,210,0.25)] backdrop-blur-sm sm:p-9">
          <h2 className="mb-6 text-center font-script text-3xl text-rhinestone">rsvp</h2>
          <RSVPForm theme={THEME_1} />
        </div>
      </section>
    </main>
  );
}
