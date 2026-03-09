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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f5f0e8]"
    >
      {/* Background parallax texture */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
        aria-hidden
      >
        {/* Subtle geometric accent */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full border border-[#c9a96e]/20 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full border border-[#c9a96e]/15 translate-x-1/2 -translate-y-1/2" />
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
          className="text-[10px] tracking-[0.4em] uppercase text-[#6b6b6b] mb-10 font-sans"
        >
          Экосистема стиля и лидерства
        </motion.p>

        {/* Main headline */}
        <motion.h1
          variants={item}
          className="font-serif text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] font-semibold text-[#0a0a0a] tracking-tight mb-8"
        >
          FRAPPE
          <br />
          <span className="text-[#c9a96e]">STUDIO</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-16 bg-[#c9a96e]" />
          <div className="w-1 h-1 rounded-full bg-[#c9a96e]" />
          <div className="h-px w-16 bg-[#c9a96e]" />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="font-sans text-base md:text-lg text-[#6b6b6b] font-light max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Развитие личности через стиль, имидж и предпринимательство.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#join"
            className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#c9a96e] transition-all duration-500"
          >
            Начать путь
            <span className="ml-1">→</span>
          </a>
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase border border-[#0a0a0a]/30 px-8 py-4 text-[#0a0a0a] hover:border-[#0a0a0a] transition-all duration-300"
          >
            Изучить экосистему
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
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#6b6b6b]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#6b6b6b] to-transparent"
        />
      </motion.div>
    </section>
  );
}
