import Form from "../components/form";
import { EVENT, STYLE_2 } from "../constants";

// -----------------------------------------------------------------------
// Design 2 — "Sapphire Soirée"
// Elegant midnight gala with diamond-facet dividers and sapphire tones.
// -----------------------------------------------------------------------

function Diamond({ className }: { className?: string }) {
  return <span className={`inline-block diamond-facet ${className ?? ""}`} />;
}

export default function Design2() {
  return (
    <main className="relative min-h-screen bg-sapphire-950 text-denim-50">
      {/* Ambient sparkle field */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          [8, 12], [22, 30], [76, 8], [88, 22], [14, 68], [92, 62], [50, 4], [64, 78], [35, 88],
        ].map(([x, y], i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-denim-100 animate-sparkle"
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.35}s` }}
          />
        ))}
      </div>

      <section className="relative mx-auto flex max-w-lg flex-col items-center px-6 pb-28 pt-20 text-center">
        <div className="flex items-center gap-3 text-denim-200/50">
          <span className="h-px w-10 bg-denim-300/40" />
          <Diamond className="h-3 w-3 bg-denim-100" />
          <span className="h-px w-10 bg-denim-300/40" />
        </div>

        <p className="mt-6 font-inter text-[11px] uppercase tracking-[0.4em] text-denim-200/60">
          An Evening of Denim &amp; Diamonds
        </p>

        <h1 className="mt-5 font-garamond text-6xl italic text-denim-50 sm:text-7xl">
          Glenna
        </h1>
        <p className="mt-1 font-garamond text-2xl tracking-[0.3em] text-denim-100/70">
          SIXTY&#8209;FIFTH BIRTHDAY
        </p>

        <div className="mt-12 flex w-full items-center justify-center gap-4">
          <Diamond className="h-2.5 w-2.5 bg-denim-300/60" />
          <span className="h-px flex-1 bg-denim-300/25" />
          <Diamond className="h-2.5 w-2.5 bg-denim-300/60" />
        </div>

        <div className="mt-10 grid w-full grid-cols-3 gap-6 font-garamond text-lg text-denim-100">
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-denim-200/50">Date</p>
            <p className="mt-2">{EVENT.date}</p>
          </div>
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-denim-200/50">Time</p>
            <p className="mt-2">{EVENT.time}</p>
          </div>
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-denim-200/50">Venue</p>
            <p className="mt-2">{EVENT.venue}</p>
          </div>
        </div>

        <p className="mt-10 font-garamond text-xl italic text-denim-100/80">
          Attire: {EVENT.dressCode}
        </p>

        <div className="mt-14 w-full text-left">
          <div className="mb-8 flex items-center justify-center gap-3">
            <Diamond className="h-3 w-3 bg-denim-100" />
            <h2 className="font-garamond text-2xl tracking-[0.15em] text-denim-50">R S V P</h2>
            <Diamond className="h-3 w-3 bg-denim-100" />
          </div>
          <Form theme={STYLE_2} />
        </div>
      </section>
    </main>
  );
}
