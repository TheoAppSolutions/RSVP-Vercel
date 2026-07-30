import Form from "../components/form";
import { EVENT, STYLE_2 } from "../constants";

// -----------------------------------------------------------------------
// Design 2 — "Garden Soirée"
// Elegant evening garden party in deep moss green, with four-petal
// dividers and a drifting-firefly sparkle field in marigold.
// -----------------------------------------------------------------------

function Petal({ className }: { className?: string }) {
  return <span className={`inline-block petal-facet ${className ?? ""}`} />;
}

export default function Design2() {
  return (
    <main className="relative min-h-screen bg-moss-950 text-garden-50">
      {/* Ambient firefly field */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          [8, 12], [22, 30], [76, 8], [88, 22], [14, 68], [92, 62], [50, 4], [64, 78], [35, 88],
        ].map(([x, y], i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-marigold animate-sparkle"
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.35}s` }}
          />
        ))}
      </div>

      <section className="relative mx-auto flex max-w-lg flex-col items-center px-6 pb-28 pt-20 text-center">
        <div className="flex items-center gap-3 text-garden-200/50">
          <span className="h-px w-10 bg-garden-300/40" />
          <Petal className="h-3 w-3 bg-marigold" />
          <span className="h-px w-10 bg-garden-300/40" />
        </div>

        <p className="mt-6 font-inter text-[11px] uppercase tracking-[0.4em] text-garden-200/60">
          An Evening in Garden Colors
        </p>

        {/* Portrait photo, cropped into an elegant oval frame */}
        <div className="relative mt-8 h-48 w-40 overflow-hidden rounded-[50%] border border-marigold/60 shadow-[0_0_40px_-10px_rgba(255,168,44,0.35)]">
          <img
            src="/mayet.jpg"
            alt="Mayet"
            className="h-full w-full object-cover"
            style={{ objectPosition: "-50px -50px", height: "400px" }}
          />
        </div>

        <h1 className="mt-5 font-garamond text-6xl italic text-garden-50 sm:text-7xl">
          Mayet
        </h1>
        <p className="mt-1 font-garamond text-2xl tracking-[0.3em] text-garden-100/70">
          SIXTY&#8209;FIFTH BIRTHDAY
        </p>

        <div className="mt-12 flex w-full items-center justify-center gap-4">
          <Petal className="h-2.5 w-2.5 bg-garden-300/60" />
          <span className="h-px flex-1 bg-garden-300/25" />
          <Petal className="h-2.5 w-2.5 bg-garden-300/60" />
        </div>

        <div className="mt-10 grid w-full grid-cols-3 gap-6 font-garamond text-lg text-garden-100">
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-garden-200/50">Date</p>
            <p className="mt-2">{EVENT.date}</p>
          </div>
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-garden-200/50">Time</p>
            <p className="mt-2">{EVENT.time}</p>
          </div>
          <div>
            <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-garden-200/50">Venue</p>
            <p className="mt-2">{EVENT.venue}</p>
          </div>
        </div>

        <p className="mt-10 font-garamond text-xl italic text-garden-100/80">
          Attire: {EVENT.dressCode}
        </p>

        <div className="mt-14 w-full text-left">
          <div className="mb-8 flex items-center justify-center gap-3">
            <Petal className="h-3 w-3 bg-marigold" />
            <h2 className="font-garamond text-2xl tracking-[0.15em] text-garden-50">R S V P</h2>
            <Petal className="h-3 w-3 bg-marigold" />
          </div>
          <Form theme={STYLE_2} />
        </div>
      </section>
    </main>
  );
}
