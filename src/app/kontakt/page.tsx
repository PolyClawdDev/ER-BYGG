import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { kontaktInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontakt | E&R BYGG AS",
  description: "Be om tilbud og få gratis befaring i dag. E&R BYGG AS - Oslo.",
};

export default function KontaktPage() {
  return (
    <div className="section-shell py-14 pb-28 md:py-28">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-[0.12em] text-white/65 md:text-sm">Kontakt</p>
        <h1 className="section-title mt-2">Få gratis befaring i dag</h1>
        <p className="section-subtitle mt-3">
          Fortell oss kort om prosjektet ditt, så kontakter vi deg med veiledning og et raskt, tydelig pristilbud.
        </p>
      </AnimatedSection>

      {/* Quick contact bar on mobile */}
      <AnimatedSection className="mt-6 flex gap-3 md:hidden" delay={0.05}>
        <a
          href={kontaktInfo.telefonHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand py-4 text-sm font-bold text-obsidian"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.24 1.01l-2.21 2.2z" />
          </svg>
          Ring nå
        </a>
        <a
          href={`mailto:${kontaktInfo.epost}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 py-4 text-sm font-semibold text-white"
        >
          E-post
        </a>
      </AnimatedSection>

      <AnimatedSection className="mt-8 grid gap-6 md:mt-12 md:gap-8 lg:grid-cols-2" delay={0.08}>
        <form className="luxury-border rounded-2xl glass-card p-6 shadow-soft md:rounded-3xl md:p-10">
          <h2 className="mb-5 font-display text-2xl text-white md:text-3xl">Send forespørsel</h2>
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm text-white/80">
              Navn
              <input
                type="text"
                name="navn"
                placeholder="Ditt navn"
                className="rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-white outline-none transition focus:border-brand"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/80">
              Telefon
              <input
                type="tel"
                name="telefon"
                placeholder="+47 ..."
                className="rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-white outline-none transition focus:border-brand"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/80">
              E-post
              <input
                type="email"
                name="epost"
                placeholder="deg@epost.no"
                className="rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-white outline-none transition focus:border-brand"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/80">
              Beskriv prosjektet
              <textarea
                name="beskrivelse"
                rows={4}
                placeholder="Hva trenger du hjelp med?"
                className="rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-white outline-none transition focus:border-brand"
              />
            </label>
            <button
              type="submit"
              className="mt-1 rounded-full bg-white py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-black transition hover:bg-white/90"
            >
              Send forespørsel
            </button>
          </div>
        </form>

        <div className="space-y-4 md:space-y-6">
          <div className="luxury-border rounded-2xl bg-charcoal/75 p-6 md:rounded-3xl md:p-8">
            <h2 className="font-display text-2xl text-white md:text-3xl">Kontaktinformasjon</h2>
            <div className="mt-5 space-y-3 text-sm text-white/80 md:text-base">
              <a href={kontaktInfo.telefonHref} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white">
                <svg className="h-5 w-5 flex-shrink-0 text-brand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.24 1.01l-2.21 2.2z" />
                </svg>
                {kontaktInfo.telefon}
              </a>
              <a href={`mailto:${kontaktInfo.epost}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white">
                <svg className="h-5 w-5 flex-shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {kontaktInfo.epost}
              </a>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white">{kontaktInfo.adresse}</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-soft md:rounded-3xl">
            <iframe
              title="Kart over E&R BYGG AS"
              src="https://www.google.com/maps?q=Selma%20Ellefsens%20vei%206,%200581%20Oslo&output=embed"
              className="h-56 w-full border-0 md:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
