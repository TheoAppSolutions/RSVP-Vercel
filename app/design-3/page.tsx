import Form from "../components/form";
import { EVENT, STYLE_3 } from "../constants";

// -----------------------------------------------------------------------
// Design 3 — "Denim Edit"
// Bold editorial layout: torn denim header panel, high-contrast
// two-column section (details | RSVP form).
// -----------------------------------------------------------------------

export default function Design3() {
  return (
    <main className="min-h-screen bg-denim-50 text-denim-900">
      {/* Torn header panel */}
      <div className="relative bg-denim-800 pb-20 pt-14 text-white sm:pb-28">
        <div className="mx-auto flex max-w-4xl flex-col-reverse items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-work text-xs uppercase tracking-[0.3em] text-denim-200/70">Save the date</p>
            <h1 className="mt-3 font-bebas text-7xl leading-[0.9] tracking-wide sm:text-8xl md:text-9xl">
              GLENNA&rsquo;S<br />65TH
            </h1>
            <p className="mt-4 max-w-md font-work text-denim-100/85">
              Join us for an evening of Denim &amp; Diamonds — pull on your boots, bring your bling.
            </p>
          </div>

          {/* Portrait photo, cropped to a square editorial frame */}
          <div className="relative h-40 w-40 shrink-0 overflow-hidden border-2 border-white sm:h-48 sm:w-48">
            <img
              src="/glenna.jpg"
              alt="Glenna"
              className="h-full w-full object-cover"
              style={{ objectPosition: "-45px -50px", height: "400px" }}
            />
          </div>
        </div>
        {/* torn bottom edge */}
        <svg
          className="absolute -bottom-1 left-0 w-full text-denim-50"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,20 L40,8 L85,26 L130,4 L175,22 L220,10 L265,30 L310,6 L355,24 L400,12 L445,28 L490,8 L535,22 L580,4 L625,26 L670,10 L715,30 L760,6 L805,24 L850,14 L895,28 L940,8 L985,22 L1030,4 L1075,26 L1120,10 L1165,30 L1200,16 L1200,40 L0,40 Z" />
        </svg>
      </div>

      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-5">
        {/* Details column */}
        <div className="sm:col-span-2">
          <h2 className="font-bebas text-3xl tracking-wide text-denim-800">Details</h2>
          <dl className="mt-6 space-y-5 font-work">
            <div className="border-l-2 border-denim-800 pl-4">
              <dt className="text-xs uppercase tracking-widest text-denim-500">Date</dt>
              <dd className="text-lg font-semibold">{EVENT.date}</dd>
            </div>
            <div className="border-l-2 border-denim-800 pl-4">
              <dt className="text-xs uppercase tracking-widest text-denim-500">Time</dt>
              <dd className="text-lg font-semibold">{EVENT.time}</dd>
            </div>
            <div className="border-l-2 border-denim-800 pl-4">
              <dt className="text-xs uppercase tracking-widest text-denim-500">Venue</dt>
              <dd className="text-lg font-semibold">{EVENT.venue}</dd>
            </div>
            <div className="border-l-2 border-denim-800 pl-4">
              <dt className="text-xs uppercase tracking-widest text-denim-500">Dress code</dt>
              <dd className="text-lg font-semibold">{EVENT.dressCode}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Denim", "Rhinestones", "Cowboy boots", "Sparkle"].map((tag) => (
              <span key={tag} className="border border-denim-300 bg-white px-3 py-1 font-work text-xs uppercase tracking-wide text-denim-600">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Form column */}
        <div className="sm:col-span-3">
          <div className="border-2 border-denim-800 bg-white p-7 sm:p-9">
            <h2 className="font-bebas text-3xl tracking-wide text-denim-800">RSVP</h2>
            <p className="mb-6 mt-1 font-work text-sm text-denim-500">Kindly reply by {EVENT.rsvpBy}.</p>
            <Form theme={STYLE_3} />
          </div>
        </div>
      </section>
    </main>
  );
}
