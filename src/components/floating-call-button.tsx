"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { kontaktInfo } from "@/lib/site-data";

export function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 md:hidden"
        >
          {/* Ring nå */}
          <motion.a
            href={kontaktInfo.telefonHref}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-bold tracking-wide text-obsidian shadow-[0_8px_30px_rgba(17,184,183,0.45)]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.24 1.01l-2.21 2.2z" />
            </svg>
            Ring nå
          </motion.a>

          {/* Få tilbud */}
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              href="/kontakt"
              className="flex items-center gap-2 rounded-full border border-white/25 bg-obsidian/90 px-5 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            >
              <svg className="h-4 w-4 text-brand" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Få tilbud
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
