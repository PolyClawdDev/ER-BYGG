import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { AnmeldelserCarousel } from "@/components/anmeldelser-carousel";
import { kontaktInfo, prosjekter, tjenester, trustStats } from "@/lib/site-data";

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative isolate min-h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"
        >
          <source src="https://videos.pexels.com/video-files/3184287/3184287-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-hero-gradient" />

        <div className="section-shell relative flex min-h-screen items-center pb-32 pt-28 md:pb-20 md:pt-32">
          <div className="w-full">
            <span className="inline-flex items-center rounded-full border border-brand/40 bg-brand/15 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-brand md:px-4 md:text-xs">
              Topprangert byggefirma i Oslo
            </span>
            <h1 className="mt-5 font-display text-[2.6rem] leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              Kvalitet i hver detalj.<br className="hidden sm:block" /> Bygg som varer.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg md:text-xl lg:text-2xl">
              Over 270 fullførte prosjekter og 4.9 i kundetilfredshet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/kontakt"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-black transition hover:bg-white/85 md:px-8 md:py-3.5"
              >
                Få gratis befaring
              </Link>
              <a
                href={kontaktInfo.telefonHref}
                className="rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white/15 md:px-8 md:py-3.5"
              >
                Ring oss nå
              </a>
            </div>

            {/* Mobile trust pills */}
            <div className="mt-10 flex flex-wrap gap-2 md:hidden">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80">⭐ 4.9 av 5</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80">272+ oppdrag</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80">Gratis befaring</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <AnimatedSection className="section-shell -mt-10 relative z-10 pb-16 md:-mt-20 md:pb-20">
        <div className="luxury-border grid grid-cols-2 gap-3 rounded-2xl glass-card p-4 sm:grid-cols-4 md:rounded-3xl md:p-10 lg:p-12">
          <div className="col-span-2 mb-1 flex items-center gap-2 text-base text-white sm:col-span-4 md:text-lg">
            <span>⭐</span>
            <span className="font-medium">4.9 av 5 (202 evalueringer)</span>
          </div>
          {trustStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-black/25 p-4 md:rounded-2xl md:p-6 lg:p-7">
              <p className="text-xs text-white/60 md:text-sm">{stat.label}</p>
              <p className="mt-1.5 text-lg font-semibold text-white md:mt-2 md:text-2xl lg:text-3xl">{stat.value}</p>
              <p className="mt-0.5 text-xs text-white/60 md:mt-1 md:text-sm">{stat.detail}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── TJENESTER ── */}
      <AnimatedSection className="section-shell py-14 md:py-28">
        <h2 className="section-title">Tjenester som dekker hele prosjektet</h2>
        <p className="section-subtitle mt-3">
          Fra første befaring til siste finish — håndverk, prosjektstyring og designforståelse i én leveranse.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {tjenester.map((tjeneste, index) => (
            <div
              key={tjeneste.tittel}
              className="group luxury-border rounded-xl bg-charcoal/70 p-4 shadow-glass transition hover:-translate-y-1 hover:bg-charcoal md:rounded-2xl md:p-6 lg:p-7"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-brand/20 text-xs text-brand md:mb-4 md:h-9 md:w-9 md:text-sm">◆</div>
              <h3 className="text-sm font-medium text-white md:text-base lg:text-lg">{tjeneste.tittel}</h3>
              <p className="mt-2 hidden text-xs leading-relaxed text-white/65 sm:block md:text-sm">{tjeneste.beskrivelse}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── PROSJEKTER ── */}
      <AnimatedSection className="section-shell py-14 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="section-title">Utvalgte prosjekter</h2>
            <p className="section-subtitle mt-3">Høy materialkvalitet, presisjon og moderne uttrykk i hvert oppdrag.</p>
          </div>
          <Link href="/prosjekter" className="text-xs uppercase tracking-[0.1em] text-white/80 hover:text-white md:text-sm">
            Se alle →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-14 md:gap-4 lg:grid-cols-3">
          {prosjekter.slice(0, 6).map((prosjekt) => (
            <article
              key={prosjekt.tittel}
              className="group overflow-hidden rounded-xl border border-white/10 bg-charcoal/60 shadow-soft md:rounded-2xl"
            >
              <div className="relative h-52 overflow-hidden sm:h-64 md:h-72 lg:h-80 xl:h-96">
                <Image
                  src={prosjekt.bilde}
                  alt={prosjekt.tittel}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/20" />
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] text-white/80 backdrop-blur md:left-4 md:top-4 md:px-3 md:text-xs">
                  {prosjekt.kategori}
                </span>
                <div className="absolute bottom-0 p-4 md:p-6">
                  <h3 className="text-base font-medium text-white md:text-xl">{prosjekt.tittel}</h3>
                  <p className="mt-0.5 text-xs text-white/70 md:mt-1 md:text-sm">{prosjekt.sted}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      {/* ── ANMELDELSER ── */}
      <AnimatedSection className="bg-charcoal py-14 md:py-28">
        <div className="section-shell mb-8 md:mb-12">
          <h2 className="section-title">Anbefalinger fra kunder</h2>
          <p className="section-subtitle mt-3">
            Ekte tilbakemeldinger fra oppdrag i Oslo-området.
          </p>
        </div>
        <AnmeldelserCarousel />
      </AnimatedSection>

      {/* ── CTA ── */}
      <AnimatedSection className="section-shell py-14 pb-28 md:py-28 md:pb-28">
        <div className="luxury-border rounded-2xl bg-gradient-to-br from-charcoal via-[#0e1f21] to-[#101418] p-8 sm:rounded-3xl md:p-16 lg:p-20">
          <p className="text-xs uppercase tracking-[0.1em] text-white/70 md:text-sm">Klar for å starte ditt prosjekt?</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Be om tilbud fra E&R BYGG AS
          </h2>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Vi kontakter deg raskt med profesjonell rådgivning og et tydelig pristilbud.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Be om tilbud
            </Link>
            <a
              href={kontaktInfo.telefonHref}
              className="rounded-full border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ring oss direkte
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
