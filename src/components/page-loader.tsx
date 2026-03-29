"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(false), 2800);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-obsidian"
        >
          {/* Background glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.22, scale: 2 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute h-96 w-96 rounded-full bg-brand blur-[100px]"
          />

          {/* Logo zoom-in */}
          <motion.div
            initial={{ scale: 0.55, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center gap-5"
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/logo.png"
                alt="E&R BYGG AS"
                width={600}
                height={200}
                priority
                className="h-auto w-[min(280px,80vw)] object-contain drop-shadow-[0_0_40px_rgba(17,184,183,0.5)] sm:w-[420px] md:w-[520px]"
              />
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-2 h-[2px] w-48 overflow-hidden rounded-full bg-white/10 sm:w-64"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2.2, delay: 0.3, ease: "easeInOut" }}
                className="h-full w-full rounded-full bg-brand"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
