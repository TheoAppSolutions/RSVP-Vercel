import RSVPForm, { RSVPTheme } from "@/components/RSVPForm";
import { EVENT } from "@/lib/event";

const theme: RSVPTheme = {
  label: "block font-inter text-[11px] uppercase tracking-[0.18em] text-denim-100/60 mb-2",
  input:
    "w-full border-0 border-b border-denim-300/30 bg-transparent px-1 py-3 text-denim-50 placeholder:text-denim-200/30 outline-none focus:border-denim-100 transition-colors",
  fieldset: "space-y-3",
  radioWrap: "flex gap-3",
  radioActive:
    "flex-1 border border-denim-100 bg-denim-100/10 px-4 py-3 text-sm font-inter tracking-wide text-denim-50",
  radioInactive:
    "flex-1 border border-denim-300/25 px-4 py-3 text-sm font-inter tracking-wide text-denim-200/50 hover:border-denim-100/50",
  button:
    "border border-denim-100 py-3.5 font-inter text-xs uppercase tracking-[0.25em] text-denim-50 hover:bg-denim-100 hover:text-sapphire-950 transition-colors",
  helper: "text-center text-[11px] text-denim-200/40 font-inter tracking-wide",
  success: "border border-denim-300/30 p-8 text-denim-50",
  error: "text-sm text-rose-300",
};

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
            <p className="mt-2">Oct 10, 2026</p>
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
          <RSVPForm theme={theme} />
        </div>
      </section>
    </main>
  );
}
