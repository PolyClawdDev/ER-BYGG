import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ProjectsFilterGrid } from "@/components/projects-filter-grid";

export const metadata: Metadata = {
  title: "Prosjekter | E&R BYGG AS",
  description: "Se et utvalg prosjekter innen gulv, renovering, snekkerarbeid og uteområder.",
};

export default function ProsjekterPage() {
  return (
    <div className="section-shell py-14 pb-28 md:py-28">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-[0.12em] text-white/65 md:text-sm">Prosjekter</p>
        <h1 className="section-title mt-2">Dokumentert kvalitet i praksis</h1>
        <p className="section-subtitle mt-3">
          Utforsk galleriet med filter for ulike fagområder. Hver leveranse er valgt for å vise standarden vi leverer.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-8 md:mt-12" delay={0.08}>
        <ProjectsFilterGrid />
      </AnimatedSection>
    </div>
  );
}
