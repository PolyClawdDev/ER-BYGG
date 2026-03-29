"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { kontaktInfo } from "@/lib/site-data";

const meny = [
  { href: "/", label: "Forside" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/prosjekter", label: "Prosjekter" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      if (current <= 10) {
        setHidden(false);
      } else if (current > last + 6) {
        setHidden(true);
        setOpen(false);
      } else if (current < last - 6) {
        setHidden(false);
      }
      last = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 z-50 border-b border-white/10 bg-obsidian/80 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between px-5 py-4 lg:px-16 xl:px-24">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/logo2v2.png"
              alt="E&R BYGG AS"
              width={600}
              height={200}
              priority
              className="h-10 w-auto object-contain md:h-12"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {meny.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-white/80 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={kontaktInfo.telefonHref}
              className="rounded-full border border-brand/70 bg-brand/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-brand/40"
            >
              Ring nå
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/15 bg-white/5 md:hidden"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 rounded-full bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-5 rounded-full bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 rounded-full bg-white"
            />
          </button>
        </div>
      </motion.header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-obsidian md:hidden"
          >
            {/* Top bar inside overlay */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Link href="/" onClick={() => setOpen(false)}>
                <Image
                  src="/logo2v2.png"
                  alt="E&R BYGG AS"
                  width={600}
                  height={200}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-1 flex-col justify-center px-8">
              {meny.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/8 py-5 font-display text-3xl text-white transition active:text-brand"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col gap-3 px-8 pb-10"
            >
              <a
                href={kontaktInfo.telefonHref}
                className="flex items-center justify-center gap-2 rounded-2xl bg-brand py-4 text-base font-bold text-obsidian"
                onClick={() => setOpen(false)}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.24 1.01l-2.21 2.2z" />
                </svg>
                Ring oss nå — {kontaktInfo.telefon}
              </a>
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 py-4 text-base font-semibold text-white backdrop-blur"
              >
                Få gratis befaring
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
