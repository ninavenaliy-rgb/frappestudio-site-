"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#e8e3da]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-serif text-sm tracking-[0.25em] uppercase text-[#0a0a0a] font-semibold"
      >
        FRAPPE STUDIO
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        {["Экосистема", "Продукты", "Сообщество", "Миссия"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs tracking-widest uppercase text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors duration-300 font-inter"
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#join"
        className="hidden md:inline-flex text-xs tracking-widest uppercase border border-[#0a0a0a] px-5 py-2.5 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300"
      >
        Начать путь
      </a>
    </motion.nav>
  );
}
