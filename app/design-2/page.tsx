import Form from "../components/form";
import { EVENT, STYLE_2 } from "../constants";

// -----------------------------------------------------------------------
// Design 2 — "Pressed Petals"
// A symmetric botanical stationery card: a single pressed-flower sprig
// centered above the name, double hairline rules with a small bloom
// ornament between them, set on warm ivory card stock.
// -----------------------------------------------------------------------

function Sprig() {
  return (
    <svg viewBox="0 0 120 100" className="h-16 w-20 text-garden-700">
      <path d="M60,95 C60,70 60,45 60,20" fill="none" stroke="#3F5726" strokeWidth="2" strokeLinecap="round" />
      <path d="M60,70 C48,66 40,55 42,42" fill="none" stroke="#5B7C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M60,55 C72,50 78,38 76,26" fill="none" stroke="#5B7C3A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M60,40 C50,36 44,27 46,18" fill="none" stroke="#8FAE5D" strokeWidth="1.4" strokeLinecap="round" />
      {/* bloom cluster at the tip */}
      <circle cx="60" cy="16" r="5" fill="#F94063" />
      <circle cx="70" cy="12" r="4" fill="#FFA82C" />
      <circle cx="50" cy="12" r="4" fill="#E15505" />
      <circle cx="60" cy="6" r="3.5" fill="#A39814" />
    </svg>
  );
}

function OrnamentBloom() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5">
      <circle cx="10" cy="6" r="3" fill="#E15505" />
      <circle cx="14" cy="10" r="3" fill="#F94063" />
      <circle cx="10" cy="14" r="3" fill="#FFA82C" />
      <circle cx="6" cy="10" r="3" fill="#A39814" />
    </svg>
  );
}

export default function Design2() {
  return (
    <main className="min-h-screen bg-garden-100/60 px-6 py-16 text-garden-900">
      <section className="mx-auto flex max-w-md flex-col items-center rounded-sm border border-garden-300/50 bg-garden-50 px-8 py-14 text-center shadow-[0_20px_60px_-24px_rgba(74,46,23,0.35)] sm:px-14">
        <Sprig />

        <p className="mt-2 font-jost text-[11px] uppercase tracking-[0.4em] text-garden-500">
          A Celebration in Garden Colors
        </p>

        {/* Portrait, framed as a pressed keepsake */}
        <div className="relative mt-8 h-44 w-36 overflow-hidden rounded-t-full border border-garden-300 p-1">
          <div className="h-full w-full overflow-hidden rounded-t-full">
            <img
              src="/mayet.jpg"
              alt="Mayet"
              className="h-full w-full object-cover"
              style={{ objectPosition: "-50px -50px", height: "400px" }}
            />
          </div>
        </div>

        <h1 className="mt-6 font-garamond text-6xl italic text-garden-900">Mayet</h1>
        <p className="mt-1 font-jost text-lg tracking-[0.3em] text-garden-500">SIXTY&#8209;FIFTH BIRTHDAY</p>

        <div className="mt-10 flex w-full items-center justify-center gap-4">
          <span className="h-px flex-1 bg-garden-300" />
          <OrnamentBloom />
          <span className="h-px flex-1 bg-garden-300" />
        </div>

        <div className="mt-10 grid w-full grid-cols-3 gap-6 font-garamond text-lg text-garden-800">
          <div>
            <p className="font-jost text-[10px] uppercase tracking-[0.25em] text-garden-500">Date</p>
            <p className="mt-2">{EVENT.date}</p>
          </div>
          <div>
            <p className="font-jost text-[10px] uppercase tracking-[0.25em] text-garden-500">Time</p>
            <p className="mt-2">{EVENT.time}</p>
          </div>
          <div>
            <p className="font-jost text-[10px] uppercase tracking-[0.25em] text-garden-500">Venue</p>
            <p className="mt-2">{EVENT.venue}</p>
          </div>
        </div>

        <p className="mt-10 font-garamond text-xl italic text-garden-700">
          Attire: {EVENT.dressCode}
        </p>

        <div className="mt-14 w-full text-left">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px flex-1 bg-garden-300" />
            <h2 className="font-garamond text-2xl tracking-[0.15em] text-garden-900">R S V P</h2>
            <span className="h-px flex-1 bg-garden-300" />
          </div>
          <Form theme={STYLE_2} />
        </div>
      </section>
    </main>
  );
}
