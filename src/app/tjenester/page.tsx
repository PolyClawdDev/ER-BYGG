import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { tjenester } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Tjenester | E&R BYGG AS",
  description: "Totalrenovering, snekkerarbeid, gulv, tak, mur og mikrosement i Oslo.",
};

export default function TjenesterPage() {
  return (
    <div className="section-shell py-14 pb-28 md:py-28">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-[0.12em] text-white/65 md:text-sm">Våre tjenester</p>
        <h1 className="section-title mt-2">Byggetjenester i premiumklasse</h1>
        <p className="section-subtitle mt-3">
          Vi leverer alt fra delrenovering til komplette totalprosjekter, med tydelig fremdrift og høy finish i alle ledd.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:gap-5 lg:grid-cols-3 xl:grid-cols-4" delay={0.08}>
        {tjenester.map((tjeneste) => (
          <article key={tjeneste.tittel} className="luxury-border rounded-xl bg-charcoal/70 p-5 shadow-glass md:rounded-2xl md:p-7">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand/20 text-xs text-brand">◆</div>
            <h2 className="text-lg text-white md:text-2xl">{tjeneste.tittel}</h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">{tjeneste.beskrivelse}</p>
          </article>
        ))}
      </AnimatedSection>

      <AnimatedSection className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-charcoal to-[#0e1f21] p-7 md:mt-14 md:rounded-3xl md:p-14">
        <h2 className="font-display text-2xl text-white md:text-4xl">Usikker på hva du trenger?</h2>
        <p className="mt-3 text-sm text-white/70 md:text-base">
          Vi gir deg faglige anbefalinger basert på behov, budsjett og ønsket stil. Start med gratis befaring og konkret plan.
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
        >
          Få gratis befaring
        </Link>
      </AnimatedSection>
    </div>
  );
}
