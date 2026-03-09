"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const products = [
  {
    index: "01",
    title: "Верхняя одежда",
    description: "Парки MIDI и MAXI, тренчи UNISEX, бомберы с авторской вышивкой. Водонепроницаемые мембранные материалы. Лаконичный крой, актуальные силуэты.",
    tag: "от 9 450₽",
    href: "https://frappestudio.orgs.biz/",
  },
  {
    index: "02",
    title: "Трикотаж и худи",
    description: "Оверсайз-свитшоты, худи с объёмными принтами, кардиганы Zebra. 100% хлопок. Уникальные цвета: Dragon Heart, Ripe Fig, Santorini.",
    tag: "от 3 600₽",
    href: "https://frappestudio.orgs.biz/",
  },
  {
    index: "03",
    title: "Платья и костюмы",
    description: "Авторские платья-носки MINI и MIDI, платья-комбинации, вискозные костюмы. Eco-суэд, флис, жаккард. Силуэты, которые работают на вас.",
    tag: "от 3 000₽",
    href: "https://frappestudio.orgs.biz/",
  },
  {
    index: "04",
    title: "Создание бренда",
    description: "Производство мерча, корпоративной формы и капсульных коллекций. Полный цикл: от эскиза до упаковки. Выпуск от 1 единицы до 15 000.",
    tag: "Под ключ",
    href: "#join",
  },
];

export default function Products() {
  return (
    <section id="продукты" className="py-36 px-6 md:px-16 bg-[#0a0a0a]">
      <AnimateIn>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#5390d9] mb-16 font-sans text-center">
          Коллекция
        </p>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white text-center max-w-2xl mx-auto mb-24 font-bold leading-tight">
          Авторские<br />изделия
        </h2>
      </AnimateIn>

      <div className="grid md:grid-cols-2 gap-px bg-[#222]">
        {products.map((product, i) => (
          <AnimateIn key={product.index} delay={i * 0.1}>
            <motion.a
              href={product.href}
              target={product.href.startsWith("http") ? "_blank" : undefined}
              rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ backgroundColor: "#111111" }}
              transition={{ duration: 0.4 }}
              className="group block bg-[#0a0a0a] p-10 md:p-14 relative overflow-hidden"
            >
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-[#5390d9]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />

              <div className="flex items-start justify-between mb-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#5390d9] font-sans">
                  {product.index}
                </span>
                <span className="text-[9px] tracking-widest uppercase text-[#888] border border-[#333] px-3 py-1.5 font-sans group-hover:text-white group-hover:border-white/20 transition-colors duration-300">
                  {product.tag}
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-white mb-5 font-bold">
                {product.title}
              </h3>

              <p className="text-sm text-white/40 leading-relaxed font-light font-sans group-hover:text-white/60 transition-colors duration-300">
                {product.description}
              </p>

              <p className="mt-10 text-[10px] tracking-[0.3em] uppercase text-[#5390d9] font-sans">
                Смотреть →
              </p>
            </motion.a>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
