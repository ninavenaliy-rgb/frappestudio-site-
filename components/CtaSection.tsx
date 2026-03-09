"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="join" className="py-40 px-6 md:px-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Gold accent circles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#c9a96e]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#c9a96e]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-[#c9a96e]/15" />
      </div>

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-12 font-sans"
        >
          Начало пути
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white font-medium leading-tight mb-10"
        >
          Присоединиться<br />к экосистеме
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base text-white/50 font-light font-sans mb-14 max-w-md mx-auto leading-relaxed"
        >
          Сделайте первый шаг к образу, который соответствует вашему уровню и открывает нужные двери.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#c9a96e] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-white transition-all duration-500 font-medium"
          >
            Оставить заявку
            <span>→</span>
          </a>
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300 px-6 py-4"
          >
            Узнать больше
          </a>
        </motion.div>
      </div>
    </section>
  );
}
