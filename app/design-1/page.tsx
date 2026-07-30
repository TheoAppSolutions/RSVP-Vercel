import Form from "../components/form";
import { EVENT, STYLE_1 } from "../constants";

// -----------------------------------------------------------------------
// Design 1 — "Botanical Garland"
// Deep garden-green canvas, elegant script headline, a ring of small
// four-petal blooms (in the four brand colors) around the "65" medallion,
// marigold-gold accents.
// -----------------------------------------------------------------------

function Bloom({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color}>
      <path d="M12 2c1.6 0 2.8 1.4 2.5 3-.2 1-1 1.8-1.9 2.2.9.4 1.7 1.2 1.9 2.2.3 1.6-.9 3-2.5 3s-2.8-1.4-2.5-3c.2-1 1-1.8 1.9-2.2-.9-.4-1.7-1.2-1.9-2.2C9.2 3.4 10.4 2 12 2z" />
      <circle cx="12" cy="12" r="1.6" fill="#FBF3E7" />
    </svg>
  );
}

function Sprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M30 55V15" strokeLinecap="round" />
      <path d="M30 40c-6-2-10-7-10-13" strokeLinecap="round" />
      <path d="M30 30c6-2 10-7 10-13" strokeLinecap="round" />
      <path d="M30 48c-5-1-8-5-8-10" strokeLinecap="round" />
    </svg>
  );
}

const GARLAND = ["#E15505", "#F94063", "#FFA82C", "#A39814"];

export default function Design1() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-garden-900 text-garden-50">
      {/* Soft botanical texture backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute -left-6 top-20 h-36 w-36 text-garden-300/25"><Sprig className="h-full w-full" /></div>
      <div className="pointer-events-none absolute -right-4 bottom-24 h-40 w-40 rotate-[160deg] text-garden-300/20"><Sprig className="h-full w-full" /></div>

      <section className="relative mx-auto flex max-w-xl flex-col items-center px-6 pb-24 pt-16 text-center">
        {/* Portrait photo, cropped to a circle */}
        <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-marigold shadow-[0_0_30px_-6px_rgba(255,168,44,0.55)]">
          <img
            src="/mayet.jpg"
            alt="Mayet"
            className="h-full w-full object-cover"
            style={{ objectPosition: "-55px -60px", height: "400px" }}
          />
        </div>

        {/* Floral garland medallion */}
        <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
          <svg viewBox="0 0 100 100" className="absolute h-full w-full">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#F5E4C8" strokeOpacity="0.9" strokeWidth="1.5" />
          </svg>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
            const r = 42;
            const x = 50 + r * Math.cos(angle);
            const y = 50 + r * Math.sin(angle);
            const color = GARLAND[i % GARLAND.length];
            return (
              <div
                key={i}
                className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <Bloom color={color} className="h-full w-full" />
              </div>
            );
          })}
          <span className="relative font-garamond text-4xl italic font-semibold text-garden-50">65</span>
        </div>

        <p className="font-jost text-xs uppercase tracking-[0.35em] text-garden-200/70">Come bloom with us</p>
        <h1 className="mt-4 font-script text-6xl leading-tight text-marigold sm:text-7xl">
          Mayet&rsquo;s 65th
        </h1>
        <p className="mt-2 font-script text-3xl text-garden-100/90">Garden Colors</p>

        <div className="mt-10 grid w-full grid-cols-1 gap-3 border-y border-garden-300/25 py-8 font-jost text-sm uppercase tracking-wide text-garden-100/85 sm:grid-cols-3">
          <div>
            <p className="text-garden-300/70">Date</p>
            <p className="mt-1 text-base text-marigold">{EVENT.date}</p>
          </div>
          <div>
            <p className="text-garden-300/70">Time</p>
            <p className="mt-1 text-base text-marigold">{EVENT.time}</p>
          </div>
          <div>
            <p className="text-garden-300/70">Venue</p>
            <p className="mt-1 text-base text-marigold">{EVENT.venue}</p>
          </div>
        </div>

        <p className="mt-6 font-jost text-xs uppercase tracking-[0.25em] text-garden-200/60">
          Dress code: {EVENT.dressCode}
        </p>

        <div className="mt-12 w-full rounded-lg border border-garden-300/25 bg-garden-800/40 p-7 text-left shadow-[0_0_40px_-10px_rgba(255,168,44,0.2)] backdrop-blur-sm sm:p-9">
          <h2 className="mb-6 text-center font-script text-3xl text-marigold">rsvp</h2>
          <Form theme={STYLE_1} />
        </div>
      </section>
    </main>
  );
}
