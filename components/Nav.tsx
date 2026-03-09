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
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-display text-base tracking-[0.2em] uppercase text-white font-black"
      >
        FRAPPÉ<span className="text-[#5390d9]">STUDIO</span>
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        {[
          { label: "Коллекция", href: "#продукты" },
          { label: "О нас", href: "#ecosystem" },
          { label: "Производство", href: "#сообщество" },
          { label: "Миссия", href: "#миссия" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-xs tracking-widest uppercase text-[#888] hover:text-white transition-colors duration-300 font-sans"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#join"
        className="hidden md:inline-flex text-xs tracking-widest uppercase border border-[#5390d9] text-[#5390d9] px-5 py-2.5 hover:bg-[#5390d9] hover:text-white transition-all duration-300"
      >
        Заказать
      </a>
    </motion.nav>
  );
}
