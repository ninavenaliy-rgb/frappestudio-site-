"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } } as any,
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background accent circles */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
        aria-hidden
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#5390d9]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#5390d9]/15" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#5390d9]/5 blur-3xl" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Pre-label */}
        <motion.p
          variants={item}
          className="text-[10px] tracking-[0.4em] uppercase text-[#5390d9] mb-10 font-sans"
        >
          Дизайнерская одежда · Екатеринбург · с 2018
        </motion.p>

        {/* Main headline */}
        <motion.h1
          variants={item}
          className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] font-black text-white tracking-tight mb-8"
        >
          FRAPPÉ
          <br />
          <span className="text-[#5390d9]">STUDIO</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-16 bg-[#5390d9]" />
          <div className="w-1 h-1 rounded-full bg-[#5390d9]" />
          <div className="h-px w-16 bg-[#5390d9]" />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="font-sans text-base md:text-lg text-white/50 font-light max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Уникальные изделия, которые не просто носят — в них живут.
          Авторский дизайн, собственное производство, от 1 до 15 000 единиц.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#продукты"
            className="inline-flex items-center gap-2 bg-[#5390d9] text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-[#0a0a0a] transition-all duration-500"
          >
            Смотреть коллекцию
            <span className="ml-1">→</span>
          </a>
          <a
            href="#join"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border border-white/20 px-8 py-4 text-white/60 hover:border-white hover:text-white transition-all duration-300"
          >
            Заказать производство
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#888]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#5390d9] to-transparent"
        />
      </motion.div>
    </section>
  );
}
