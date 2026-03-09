"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

const products = [
  {
    index: "01",
    title: "Имидж лидера",
    description: "Индивидуальная работа над визуальным образом и личным брендом для предпринимателей и топ-менеджеров.",
    tag: "Персональная программа",
    href: "#",
  },
  {
    index: "02",
    title: "Эксперты",
    description: "Формирование образа эксперта, который усиливает экспертность и привлекает правильную аудиторию.",
    tag: "Для специалистов",
    href: "#",
  },
  {
    index: "03",
    title: "Корпоративные курсы",
    description: "Программы развития стиля и имиджа для команд, направленные на укрепление корпоративной культуры.",
    tag: "B2B программы",
    href: "#",
  },
  {
    index: "04",
    title: "События",
    description: "Закрытые мероприятия, воркшопы и networking-встречи для участников экосистемы FRAPPE STUDIO.",
    tag: "Сообщество",
    href: "#",
  },
];

export default function Products() {
  return (
    <section id="продукты" className="py-36 px-6 md:px-16 bg-[#f5f0e8]">
      <AnimateIn>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-16 font-sans text-center">
          Продукты
        </p>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#0a0a0a] text-center max-w-2xl mx-auto mb-24 font-medium leading-tight">
          Инструменты<br />экосистемы
        </h2>
      </AnimateIn>

      <div className="grid md:grid-cols-2 gap-px bg-[#e8e3da]">
        {products.map((product, i) => (
          <AnimateIn key={product.index} delay={i * 0.1}>
            <motion.a
              href={product.href}
              whileHover={{ backgroundColor: "#0a0a0a" }}
              transition={{ duration: 0.4 }}
              className="group block bg-white p-10 md:p-14 relative overflow-hidden"
            >
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-[#c9a96e]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />

              <div className="flex items-start justify-between mb-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] font-sans group-hover:text-[#c9a96e]">
                  {product.index}
                </span>
                <span className="text-[9px] tracking-widest uppercase text-[#6b6b6b] border border-[#e8e3da] px-3 py-1.5 font-sans group-hover:text-white group-hover:border-white/20 transition-colors duration-400">
                  {product.tag}
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-[#0a0a0a] mb-5 font-medium group-hover:text-white transition-colors duration-400">
                {product.title}
              </h3>

              <p className="text-sm text-[#6b6b6b] leading-relaxed font-light font-sans group-hover:text-white/60 transition-colors duration-400">
                {product.description}
              </p>

              <p className="mt-10 text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] font-sans group-hover:text-white transition-colors duration-400">
                Узнать подробнее →
              </p>
            </motion.a>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
