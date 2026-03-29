import Link from "next/link";
import Image from "next/image";
import { kontaktInfo } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="grid gap-8 px-6 pb-10 pt-12 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:px-16 lg:py-16 xl:px-24">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/">
            <Image
              src="/logo2v2.png"
              alt="E&R BYGG AS"
              width={600}
              height={200}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="mt-3 leading-relaxed">
            Profesjonelt byggefirma i Oslo med fokus på kvalitet, presisjon og pålitelig levering.
          </p>
          <a
            href={kontaktInfo.telefonHref}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand/15 px-4 py-2.5 text-sm font-semibold text-brand"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.24 1.01l-2.21 2.2z" />
            </svg>
            {kontaktInfo.telefon}
          </a>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Navigasjon</p>
          <div className="flex flex-col gap-2.5">
            <Link href="/" className="transition hover:text-white">Forside</Link>
            <Link href="/tjenester" className="transition hover:text-white">Tjenester</Link>
            <Link href="/prosjekter" className="transition hover:text-white">Prosjekter</Link>
            <Link href="/om-oss" className="transition hover:text-white">Om oss</Link>
            <Link href="/kontakt" className="transition hover:text-white">Kontakt</Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Kontakt</p>
          <div className="flex flex-col gap-2.5">
            <a href={kontaktInfo.telefonHref} className="transition hover:text-white">{kontaktInfo.telefon}</a>
            <a href={`mailto:${kontaktInfo.epost}`} className="transition hover:text-white">{kontaktInfo.epost}</a>
            <p>{kontaktInfo.adresse}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-5 text-center text-xs text-white/40 lg:px-16 xl:px-24">
        © {new Date().getFullYear()} E&R BYGG AS. Alle rettigheter forbeholdt.
      </div>
    </footer>
  );
}
