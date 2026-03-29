import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Om oss | E&R BYGG AS",
  description: "E&R BYGG AS er et profesjonelt byggefirma med bred erfaring i Oslo-området.",
};

const styrker = ["Kvalitet", "Presisjon", "Pålitelighet", "Punktlighet", "Ryddighet"];

const verdier = [
  {
    tittel: "Kvalitet i alle ledd",
    tekst:
      "Vi setter aldri kvaliteten på spill. Fra materialer til utførelse holder vi en standard som gjør at resultatet ser like bra ut om ti år som første dag.",
  },
  {
    tittel: "Tydelig kommunikasjon",
    tekst:
      "Du vet alltid hva som skjer. Vi gir deg én ansvarlig kontaktperson, oppdaterer deg jevnlig og tar aldri avgjørelser uten å avklare med deg først.",
  },
  {
    tittel: "Ryddig og respektfull",
    tekst:
      "Vi jobber i ditt hjem og behandler det deretter. Arbeidsplassen ryddes daglig, og vi forlater aldri et oppdrag uten at alt er levert slik vi avtalte.",
  },
  {
    tittel: "Fastpris og forutsigbarhet",
    tekst:
      "Vi leverer klare pristilbud uten skjulte kostnader. Det vi lover, det holder vi — innenfor avtalt tid og budsjett.",
  },
];

export default function OmOssPage() {
  return (
    <div className="section-shell py-14 pb-28 md:py-28">

      {/* ── HERO TEXT ── */}
      <AnimatedSection>
        <p className="text-xs uppercase tracking-[0.12em] text-white/65 md:text-sm">Om E&R BYGG AS</p>
        <h1 className="section-title mt-2 max-w-4xl">
          Erfaring, struktur og håndverk i toppklasse
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
          E&R BYGG AS er et profesjonelt byggefirma med solid erfaring innen renovering, snekkerarbeid og
          byggeprosjekter i Oslo-regionen. Vi ble etablert med én klar ambisjon: å levere håndverkstjenester
          av ekte premiumkvalitet — til rett pris, til rett tid, og alltid med kunden i fokus.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
          I dag har vi over <strong className="text-white">272 fullførte oppdrag</strong> bak oss, alt fra
          enkle lettvegger og gulvlegging til komplette totalrenoveringer av boliger i Oslo og omegn. Vi tar
          både store og små oppdrag — og møter hvert enkelt med samme krav til detaljkontroll, orden og faglig
          stolthet.
        </p>
      </AnimatedSection>

      {/* ── STATS ── */}
      <AnimatedSection className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mt-14 md:gap-5" delay={0.08}>
        {[
          { label: "Fullførte oppdrag", value: "272+" },
          { label: "Kundetilfredshet", value: "4.9 ⭐" },
          { label: "År i bransjen", value: "10+" },
          { label: "Evalueringer", value: "202" },
        ].map((s) => (
          <div key={s.label} className="luxury-border rounded-xl glass-card p-5 text-center md:rounded-2xl md:p-7">
            <p className="text-2xl font-semibold text-white md:text-4xl">{s.value}</p>
            <p className="mt-1.5 text-xs text-white/60 md:text-sm">{s.label}</p>
          </div>
        ))}
      </AnimatedSection>

      {/* ── HVEM VI ER ── */}
      <AnimatedSection className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-2 lg:gap-10" delay={0.06}>
        <div className="luxury-border rounded-2xl bg-charcoal/70 p-7 md:rounded-3xl md:p-10">
          <h2 className="font-display text-2xl text-white md:text-3xl">Hvem vi er</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
            Bak E&R BYGG AS står et dedikert team av erfarne håndverkere og prosjektledere som brenner for faget.
            Vi er lokale, vi kjenner Oslo-markedet, og vi vet hva som kreves for å levere resultater som kundene
            er stolte av å vise frem.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
            Vi samarbeider tett med kundene gjennom hele prosessen — fra første befaring og planlegging, via
            utførelse, til endelig ferdigstillelse og overlevering. Ingenting overlates til tilfeldighetene.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
            Enten det dreier seg om å sette opp en lettvegg, legge nytt parkettgulv, totalrenovere en leilighet
            eller bygge en eksklusiv terrasse — vi stiller med riktig kompetanse, riktig utstyr og rett
            innstilling fra dag én.
          </p>
        </div>

        <div className="luxury-border rounded-2xl bg-charcoal/70 p-7 md:rounded-3xl md:p-10">
          <h2 className="font-display text-2xl text-white md:text-3xl">Vår arbeidsmetode</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
            Vi kombinerer tydelig prosjektstyring med håndverksmessig presisjon. Hvert oppdrag starter med en
            grundig befaring der vi kartlegger behov, ønsker og budsjett. Deretter utarbeider vi et klart og
            ærlig pristilbud — uten overraskelser underveis.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
            Under utførelsen er vi opptatt av å holde arbeidsplassen ryddig, komme presist til avtalt tid og
            løse eventuelle utfordringer raskt og profesjonelt. Vi tar tilleggsarbeid på strak arm dersom
            behovet oppstår, og informerer alltid om konsekvenser for pris og fremdrift.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {styrker.map((s) => (
              <li key={s} className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand/90 md:text-sm">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* ── VERDIER ── */}
      <AnimatedSection className="mt-14 md:mt-20" delay={0.06}>
        <h2 className="section-title">Hva vi står for</h2>
        <p className="section-subtitle mt-3">
          Disse verdiene styrer måten vi jobber på — i hvert eneste oppdrag, uansett størrelse.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 md:gap-5 xl:grid-cols-4">
          {verdier.map((v, i) => (
            <div key={v.tittel} className="luxury-border rounded-xl bg-charcoal/70 p-6 md:rounded-2xl md:p-7">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand/20 text-xs font-bold text-brand">
                {i + 1}
              </div>
              <h3 className="text-base font-semibold text-white md:text-lg">{v.tittel}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{v.tekst}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── HVORFOR VELGE OSS ── */}
      <AnimatedSection className="mt-14 md:mt-20" delay={0.06}>
        <div className="luxury-border rounded-2xl bg-gradient-to-br from-charcoal via-[#0e1f21] to-[#101418] p-8 md:rounded-3xl md:p-12 lg:p-16">
          <h2 className="font-display text-2xl text-white md:text-4xl">Hvorfor velge E&R BYGG AS?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            Med over 200 begeistrede kunder og en gjennomsnittlig rating på 4.9 av 5 er vi ett av de mest
            anbefalte byggefirmaene i Oslo. Vi tror på at tillit bygges gjennom handling — ikke bare ord.
            Derfor er vi alltid tilgjengelige for spørsmål, alltid ærlige om hva et oppdrag koster, og alltid
            fokusert på at du som kunde skal sitte igjen med et resultat du er stolt av.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            Vi tilbyr gratis befaring dag og kveld, rask levering av pristilbud, og en fast kontaktperson
            gjennom hele prosjektet. Ta kontakt i dag — vi hjelper deg gjerne uansett om det er stort eller lite.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Få gratis befaring i dag
            </Link>
            <Link
              href="/tjenester"
              className="rounded-full border border-white/25 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Se våre tjenester
            </Link>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
