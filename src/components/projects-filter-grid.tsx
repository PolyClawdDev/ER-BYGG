"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { prosjektKategorier, prosjekter } from "@/lib/site-data";

export function ProjectsFilterGrid() {
  const [aktiv, setAktiv] = useState<(typeof prosjektKategorier)[number]>("Alle");

  const filtrert = useMemo(
    () => (aktiv === "Alle" ? prosjekter : prosjekter.filter((item) => item.kategori === aktiv)),
    [aktiv],
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center gap-3">
        {prosjektKategorier.map((kategori) => (
          <button
            key={kategori}
            onClick={() => setAktiv(kategori)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              aktiv === kategori
                ? "border-brand bg-brand/20 text-white"
                : "border-white/20 text-white/70 hover:border-white/40 hover:text-white"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtrert.map((prosjekt, index) => (
          <motion.article
            key={prosjekt.tittel}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: index * 0.04, duration: 0.5 }}
            className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-charcoal/65 shadow-soft"
          >
            <div className="relative overflow-hidden">
              <Image
                src={prosjekt.bilde}
                alt={prosjekt.tittel}
                width={1400}
                height={900}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/20 opacity-90" />
              <div className="absolute bottom-0 p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-white/70">{prosjekt.kategori}</p>
                <h3 className="mt-1 text-lg text-white">{prosjekt.tittel}</h3>
                <p className="mt-1 text-sm text-white/70">{prosjekt.sted}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
