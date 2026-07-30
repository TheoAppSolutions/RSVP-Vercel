import Form from "../components/form";
import { EVENT, STYLE_3 } from "../constants";

// -----------------------------------------------------------------------
// Design 3 — "Garden Edit"
// Bold editorial layout: burnt-orange header panel with a leaf-edge
// hem, high-contrast two-column section (details | RSVP form).
// -----------------------------------------------------------------------

export default function Design3() {
  return (
    <main className="min-h-screen bg-garden-50 text-garden-900">
      {/* Leaf-edge header panel */}
      <div className="relative bg-garden-500 pb-20 pt-14 text-white sm:pb-28">
        <div className="mx-auto flex max-w-4xl flex-col-reverse items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-work text-xs uppercase tracking-[0.3em] text-garden-100/80">Save the date</p>
            <h1 className="mt-3 font-bebas text-7xl leading-[0.9] tracking-wide sm:text-8xl md:text-9xl">
              MAYET&rsquo;S<br />65TH
            </h1>
            <p className="mt-4 max-w-md font-work text-garden-50/90">
              Join us for an afternoon in bloom — come dressed in garden colors and help us celebrate.
            </p>
          </div>

          {/* Portrait photo, cropped to a square editorial frame */}
          <div className="relative h-40 w-40 shrink-0 overflow-hidden border-2 border-white sm:h-48 sm:w-48">
            <img
              src="/mayet.jpg"
              alt="Mayet"
              className="h-full w-full object-cover"
              style={{ objectPosition: "-45px -50px", height: "400px" }}
            />
          </div>
        </div>
        {/* leaf-edge bottom hem */}
        <svg
          className="absolute -bottom-1 left-0 w-full text-garden-50"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,30 C30,10 60,10 90,26 C120,10 150,10 180,28 C210,10 240,10 270,24 C300,10 330,10 360,28 C390,10 420,10 450,26 C480,10 510,10 540,28 C570,10 600,10 630,24 C660,10 690,10 720,28 C750,10 780,10 810,26 C840,10 870,10 900,28 C930,10 960,10 990,24 C1020,10 1050,10 1080,28 C1110,10 1140,10 1170,26 C1185,18 1195,14 1200,12 L1200,40 L0,40 Z" />
        </svg>
      </div>

      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-5">
        {/* Details column */}
        <div className="sm:col-span-2">
          <h2 className="font-bebas text-3xl tracking-wide text-garden-800">Details</h2>
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

          <div className="mt-8 flex flex-wrap gap-2">
            {["Burnt Orange", "Coral Pink", "Marigold", "Olive Gold"].map((tag) => (
              <span key={tag} className="border border-garden-300 bg-white px-3 py-1 font-work text-xs uppercase tracking-wide text-garden-600">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Form column */}
        <div className="sm:col-span-3">
          <div className="border-2 border-garden-800 bg-white p-7 sm:p-9">
            <h2 className="font-bebas text-3xl tracking-wide text-garden-800">RSVP</h2>
            <p className="mb-6 mt-1 font-work text-sm text-garden-500">Kindly reply by {EVENT.rsvpBy}.</p>
            <Form theme={STYLE_3} />
          </div>
        </div>
      </section>
    </main>
  );
}
