"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="миссия" className="py-40 px-6 md:px-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5390d9]/5 translate-x-1/3 -translate-y-1/3" aria-hidden />

      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.4em] uppercase text-[#5390d9] mb-16 font-sans"
        >
          Миссия
        </motion.p>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-[clamp(2.5rem,6vw,5.5rem)] text-white leading-tight font-medium mb-16"
        >
          Одежда, в которой
          <br />
          не просто живут —
          <br />
          <span className="text-[#5390d9]">в ней выражают.</span>
        </motion.h2>

        {/* Animated line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px bg-[#e8e3da]/20 mb-16"
        />

        {/* Description */}
        <div className="grid md:grid-cols-2 gap-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base text-white/60 font-light font-sans leading-relaxed"
          >
            Мы создаём одежду с характером. Каждое изделие — авторское, каждый крой — осознанный. Одежда FRAPPÉSTUDIO отражает личность, а не следует за трендом.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base text-white/60 font-light font-sans leading-relaxed"
          >
            С 2018 года — в Екатеринбурге. Собственное производство, сертифицированные материалы, полный цикл от эскиза до доставки. Для тех, кто знает, чего хочет.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
