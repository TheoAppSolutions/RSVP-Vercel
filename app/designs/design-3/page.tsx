import Form from "../../components/form";
import { EVENT, STYLE_3 } from "../../../lib/constants";

// -----------------------------------------------------------------------
// Design 3 — "Garden Mood Board"
// Bold editorial layout built around the literal four-color swatch card
// from the brief: burnt orange, coral pink, marigold, olive gold, shown
// as a real mood-board strip instead of a decorative gradient.
// -----------------------------------------------------------------------

const SWATCHES = [
  { name: "Burnt Orange", hex: "#E15505" },
  { name: "Coral Pink", hex: "#F94063" },
  { name: "Marigold", hex: "#FFA82C" },
  { name: "Olive Gold", hex: "#A39814" },
];

function ScallopEdge({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 20"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <circle key={i} cx={i * 40 + 20} cy="0" r="21" />
      ))}
    </svg>
  );
}

export default function Design3() {
  return (
    <main className="min-h-screen bg-garden-50 text-garden-900">
      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        {/* Masthead */}
        <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-jost text-xs uppercase tracking-[0.3em] text-garden-500">Save the date</p>
            <h1 className="mt-3 font-fraunces text-6xl italic leading-[0.95] text-garden-900 sm:text-7xl md:text-8xl">
              Mayet&rsquo;s<br />65th Birthday
            </h1>
            <p className="mt-4 max-w-md font-work text-garden-600">
              An afternoon in bloom — join us in garden colors as we celebrate.
            </p>
          </div>

          {/* Portrait, editorial square crop */}
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-sm border-2 border-garden-800 sm:h-48 sm:w-48">
            <img
              src="/mayet.jpg"
              alt="Mayet"
              className="h-full w-full object-cover"
              style={{ objectPosition: "0 0", height: "200px" }}
            />
          </div>
        </div>

        {/* The literal mood board */}
        <div className="relative mt-12 overflow-hidden rounded-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {SWATCHES.map((s) => (
              <div key={s.hex} className="flex h-28 flex-col justify-end p-4 sm:h-36" style={{ backgroundColor: s.hex }}>
                <p className="font-jost text-[11px] uppercase tracking-[0.15em] text-white/90">{s.name}</p>
                <p className="font-jost text-xs text-white/70">{s.hex}</p>
              </div>
            ))}
          </div>
          <ScallopEdge className="h-4 w-full text-garden-50" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-5">
          {/* Details column */}
          <div className="sm:col-span-2">
            <h2 className="font-fraunces text-3xl italic text-garden-800">Details</h2>
            <dl className="mt-6 space-y-5 font-work">
              <div className="border-l-2 border-garden-500 pl-4">
                <dt className="text-xs uppercase tracking-widest text-garden-500">Date</dt>
                <dd className="text-lg font-semibold">{EVENT.date}</dd>
              </div>
              <div className="border-l-2 border-garden-500 pl-4">
                <dt className="text-xs uppercase tracking-widest text-garden-500">Time</dt>
                <dd className="text-lg font-semibold">{EVENT.time}</dd>
              </div>
              <div className="border-l-2 border-garden-500 pl-4">
                <dt className="text-xs uppercase tracking-widest text-garden-500">Venue</dt>
                <dd className="text-lg font-semibold">{EVENT.venue}</dd>
              </div>
              <div className="border-l-2 border-garden-500 pl-4">
                <dt className="text-xs uppercase tracking-widest text-garden-500">Dress code</dt>
                <dd className="text-lg font-semibold">{EVENT.dressCode}</dd>
              </div>
            </dl>
          </div>

          {/* Form column */}
          <div className="sm:col-span-3">
            <div className="border-2 border-garden-800 bg-white p-7 sm:p-9">
              <h2 className="font-fraunces text-3xl italic text-garden-800">RSVP</h2>
              <p className="mb-6 mt-1 font-work text-sm text-garden-500">Kindly reply by {EVENT.rsvpBy}.</p>
              <Form theme={STYLE_3} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
