import Form from "../../components/form";
import { EVENT, STYLE_1 } from "../../../lib/constants";

// -----------------------------------------------------------------------
// Design 1 — "Garden Arch"
// Signature element: a hand-built vine arch, like walking under a
// garden trellis into the party. Two leaf-green stems curve up from the
// base and meet overhead, hung with small four-petal blooms in the four
// brand colors. The portrait sits framed under the peak of the arch.
// -----------------------------------------------------------------------

function Bloom({ x, y, color, size = 16 }: { x: number; y: number; color: string; size?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform={`scale(${size / 24})`}>
        <path
          d="M12 2c1.6 0 2.8 1.4 2.5 3-.2 1-1 1.8-1.9 2.2.9.4 1.7 1.2 1.9 2.2.3 1.6-.9 3-2.5 3s-2.8-1.4-2.5-3c.2-1 1-1.8 1.9-2.2-.9-.4-1.7-1.2-1.9-2.2C9.2 3.4 10.4 2 12 2z"
          fill={color}
          transform="translate(-12 -12) rotate(0 12 12)"
        />
        <path
          d="M12 2c1.6 0 2.8 1.4 2.5 3-.2 1-1 1.8-1.9 2.2.9.4 1.7 1.2 1.9 2.2.3 1.6-.9 3-2.5 3s-2.8-1.4-2.5-3c.2-1 1-1.8 1.9-2.2-.9-.4-1.7-1.2-1.9-2.2C9.2 3.4 10.4 2 12 2z"
          fill={color}
          transform="translate(-12 -12) rotate(90 12 12)"
        />
        <circle cx="0" cy="0" r="1.8" fill="#FBF3E7" />
      </g>
    </g>
  );
}

function LeafPair({ x, y, rotate = 0, size = 1 }: { x: number; y: number; rotate?: number; size?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${size})`}>
      <path d="M0,0 C-10,-6 -16,-2 -16,6 C-8,6 -2,4 0,0 Z" fill="#5B7C3A" />
      <path d="M0,0 C10,6 16,10 16,18 C8,18 2,12 0,0 Z" fill="#8FAE5D" />
    </g>
  );
}

const LEFT_STEM = "M20,260 C20,150 80,70 230,40";
const RIGHT_STEM = "M460,260 C460,150 400,70 250,40";
const GARLAND = ["#E15505", "#F94063", "#FFA82C", "#A39814"];
const LEFT_POINTS = [
  { x: 27, y: 198 },
  { x: 51, y: 144 },
  { x: 91, y: 99 },
  { x: 151, y: 64 },
];

export default function Design1() {
  return (
    <main className="relative min-h-screen bg-garden-50 text-garden-900">
      {/* Faint scattered-seed texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle, #5C2402 1px, transparent 1px)", backgroundSize: "26px 26px" }}
      />

      <section className="relative mx-auto flex max-w-xl flex-col items-center px-6 pb-24 pt-14 text-center">
        {/* The vine arch */}
        <svg viewBox="0 0 480 270" className="h-56 w-full max-w-md sm:h-64">
          <path d={LEFT_STEM} fill="none" stroke="#3F5726" strokeWidth="3" strokeLinecap="round" />
          <path d={RIGHT_STEM} fill="none" stroke="#3F5726" strokeWidth="3" strokeLinecap="round" />

          {LEFT_POINTS.map((p, i) => (
            <g key={`l-${i}`}>
              <LeafPair x={p.x - 6} y={p.y + 4} rotate={-40 + i * 10} size={0.85} />
              <Bloom x={p.x} y={p.y} color={GARLAND[i % 4]} size={20 - i * 1.5} />
            </g>
          ))}
          {LEFT_POINTS.map((p, i) => {
            const x = 480 - p.x;
            return (
              <g key={`r-${i}`}>
                <LeafPair x={x + 6} y={p.y + 4} rotate={220 - i * 10} size={0.85} />
                <Bloom x={x} y={p.y} color={GARLAND[(i + 2) % 4]} size={20 - i * 1.5} />
              </g>
            );
          })}
          {/* apex where the two stems meet */}
          <Bloom x={240} y={38} color="#FFA82C" size={22} />
        </svg>

        {/* Portrait photo, cropped to a circle, hung at the arch's peak */}
        <div className="relative -mt-6 h-36 w-36 overflow-hidden rounded-full border-[3px] border-white shadow-[0_8px_24px_-6px_rgba(74,46,23,0.35)] ring-1 ring-garden-300/60">
          <img
            src="/mayet.jpg"
            alt="Mayet"
            className="h-full w-full object-cover"
            style={{ objectPosition: "-55px -60px", height: "400px" }}
          />
        </div>

        <p className="mt-7 font-jost text-xs uppercase tracking-[0.35em] text-garden-500">Come bloom with us</p>
        <h1 className="mt-3 font-fraunces text-5xl italic text-garden-500 sm:text-6xl">
          Mayet&rsquo;s 65th
        </h1>
        <p className="mt-2 font-script text-3xl text-olive">Garden Colors</p>

        <div className="mt-10 grid w-full grid-cols-1 gap-3 border-y border-garden-300/60 py-8 font-jost text-sm uppercase tracking-wide text-garden-600 sm:grid-cols-3">
          <div>
            <p className="text-garden-400">Date</p>
            <p className="mt-1 text-base text-garden-900">{EVENT.date}</p>
          </div>
          <div>
            <p className="text-garden-400">Time</p>
            <p className="mt-1 text-base text-garden-900">{EVENT.time}</p>
          </div>
          <div>
            <p className="text-garden-400">Venue</p>
            <p className="mt-1 text-base text-garden-900">{EVENT.venue}</p>
          </div>
        </div>

        <p className="mt-6 font-jost text-xs uppercase tracking-[0.25em] text-garden-500">
          Dress code: {EVENT.dressCode}
        </p>

        <div className="mt-12 w-full rounded-2xl border border-garden-300/60 bg-white p-7 text-left shadow-[0_10px_40px_-16px_rgba(74,46,23,0.25)] sm:p-9">
          <h2 className="mb-6 text-center font-fraunces text-2xl italic text-garden-500">rsvp</h2>
          <Form theme={STYLE_1} />
        </div>
      </section>
    </main>
  );
}
