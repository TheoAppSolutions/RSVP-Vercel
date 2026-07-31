import { EVENT } from "@/lib/event";

// -----------------------------------------------------------------------
// Announcement — "Save the Date"
// A standalone poster page (not the RSVP form) matching the client's
// reference layout: crossed guide-lines, a tilted date card with a
// glowing bloom in place of a diamond, the wordmark and weekday tag set
// inside the card in a light tone for contrast, then "save the date."
// -----------------------------------------------------------------------

function LeafMark({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      <path
        d="M20 4C11 8 6 16 6 24c0 5 4 10 10 10 8 0 14-7 14-18 0-4-1-8-2-12-3 4-9 6-14 6 2-2 4-4 6-6z"
        fill={light ? "#C3D3A4" : "#5B7C3A"}
      />
      <path
        d="M12 34C12 22 18 12 28 6"
        stroke={light ? "#FBF3E7" : "#3F5726"}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function GlowBloom({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      {/* radiating sparkle lines */}
      <g stroke="#FFF6E5" strokeWidth="2" strokeLinecap="round" opacity="0.9">
        <line x1="60" y1="2" x2="60" y2="20" />
        <line x1="60" y1="100" x2="60" y2="118" />
        <line x1="2" y1="60" x2="20" y2="60" />
        <line x1="100" y1="60" x2="118" y2="60" />
        <line x1="20" y1="20" x2="32" y2="32" />
        <line x1="100" y1="20" x2="88" y2="32" />
      </g>
      {/* four-petal bloom */}
      <g transform="translate(60 60)">
        <path d="M0,-30c9,0 16,8 14,17-1,6-6,10-11,12 5,2 10,6 11,12 2,9-5,17-14,17s-16-8-14-17c1-6 6-10 11-12-5-2-10-6-11-12-2-9 5-17 14-17z" fill="#FFA82C" />
        <path
          d="M0,-30c9,0 16,8 14,17-1,6-6,10-11,12 5,2 10,6 11,12 2,9-5,17-14,17s-16-8-14-17c1-6 6-10 11-12-5-2-10-6-11-12-2-9 5-17 14-17z"
          fill="#F94063"
          transform="rotate(45)"
          opacity="0.85"
        />
        <circle r="9" fill="#FBF3E7" />
        <circle r="9" fill="none" stroke="#E15505" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export default function Announcement() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-garden-50">
      {/* Crossed guide-lines, like a torn calendar sheet */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full text-olive/30" preserveAspectRatio="none">
        <line x1="18%" y1="0" x2="18%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="82%" y1="0" x2="82%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="12%" x2="100%" y2="12%" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="88%" x2="100%" y2="88%" stroke="currentColor" strokeWidth="1" />
      </svg>

      <section className="relative mx-auto flex min-h-screen max-w-md flex-col items-center px-6 pb-16 pt-10 text-center">
        {/* Tilted date card */}
        <div className="relative mt-6 w-full max-w-xs rotate-[-2.5deg]">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-garden-500 via-garden-600 to-garden-800 px-6 pb-10 pt-6 shadow-[0_24px_60px_-16px_rgba(74,46,23,0.45)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <LeafMark className="h-6 w-6" light />
                <span className="font-fraunces text-xl italic text-garden-50">Mayet65</span>
              </div>
              <span className="font-jost text-xl font-semibold lowercase tracking-wide text-garden-50">thu</span>
            </div>
            <GlowBloom className="absolute -left-2 top-16 h-20 w-20" />
            <p className="mt-6 font-fraunces text-8xl font-semibold italic leading-none text-garden-50 sm:text-9xl">
              19
            </p>
            <p className="mt-2 font-fraunces text-4xl italic tracking-wide text-garden-50 sm:text-5xl">
              November
            </p>
            <p className="font-jost text-xl text-garden-100/80">2026</p>

            <p className="mt-10 font-fraunces text-3xl italic text-marigold">save the date</p>
          </div>
        </div>

        <div className="mt-12 space-y-1 font-jost text-xs uppercase tracking-[0.25em] text-garden-500">
          <p>{EVENT.time} · {EVENT.venue}</p>
          <p className="text-garden-400">Garden Colors</p>
        </div>
      </section>
    </main>
  );
}
