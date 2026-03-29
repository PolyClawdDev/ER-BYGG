"use client";

import { anmeldelser, type Anmeldelse } from "@/lib/site-data";

function ReviewCard({ review }: { review: Anmeldelse }) {
  return (
    <article className="w-[320px] flex-shrink-0 rounded-2xl border border-white/10 bg-charcoal/80 p-6 backdrop-blur-sm md:w-[380px]">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-0.5 text-brand">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-sm leading-none">★</span>
          ))}
        </div>
        <span className="text-xs text-white/40">{review.dato}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/80">&ldquo;{review.tekst}&rdquo;</p>
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-sm font-semibold text-white">{review.navn}</p>
        <p className="mt-0.5 text-xs text-brand/80">{review.oppdrag}</p>
      </div>
    </article>
  );
}

const rad1 = anmeldelser.slice(0, 10);
const rad2 = anmeldelser.slice(10);

export function AnmeldelserCarousel() {
  return (
    <div className="marquee-pause overflow-hidden">
      {/* Rad 1 — glir til venstre */}
      <div className="flex gap-4 py-2">
        <div className="animate-marquee-left flex gap-4">
          {[...rad1, ...rad1].map((r, i) => (
            <ReviewCard key={`r1-${i}`} review={r} />
          ))}
        </div>
      </div>

      {/* Rad 2 — glir til høyre */}
      <div className="mt-4 flex gap-4 py-2">
        <div className="animate-marquee-right flex gap-4">
          {[...rad2, ...rad2].map((r, i) => (
            <ReviewCard key={`r2-${i}`} review={r} />
          ))}
        </div>
      </div>
    </div>
  );
}
