"use client";

import AnimateIn from "./AnimateIn";

const pillars = [
  {
    number: "01",
    title: "DESIGN",
    subtitle: "Авторский дизайн",
    description:
      "Каждое изделие — уникальное. Собственные паттерны, принты и силуэты, созданные в студии. Одежда, которая не повторяется.",
    accent: "Уникальные коллекции",
  },
  {
    number: "02",
    title: "QUALITY",
    subtitle: "Качество материалов",
    description:
      "Лён, вискоза, эко-кожа, натуральный хлопок. Все материалы сертифицированы. Детальный контроль на каждом этапе производства.",
    accent: "Сертифицированные ткани",
  },
  {
    number: "03",
    title: "PRODUCTION",
    subtitle: "Собственное производство",
    description:
      "Полный цикл от эскиза до готового изделия. Производство от 1 до 15 000 единиц. Мерч, форма, капсульные коллекции под заказ.",
    accent: "От 1 до 15 000 единиц",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-36 px-6 md:px-16 bg-[#111111]">
      <AnimateIn>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#5390d9] mb-16 font-sans text-center">
          О студии
        </p>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-white text-center max-w-3xl mx-auto mb-24 font-bold">
          Три принципа,<br />один стандарт
        </h2>
      </AnimateIn>

      <div className="grid md:grid-cols-3 gap-0 border border-[#222]">
        {pillars.map((pillar, i) => (
          <AnimateIn key={pillar.number} delay={i * 0.12}>
            <div
              className={`p-10 md:p-14 group hover:bg-[#181818] transition-all duration-500 ${
                i < 2 ? "border-b md:border-b-0 md:border-r border-[#222]" : ""
              }`}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#5390d9] font-sans mb-8 block">
                {pillar.number}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-xs tracking-widest uppercase text-[#888] mb-8 font-sans">
                {pillar.subtitle}
              </p>
              <div className="h-px w-8 bg-[#5390d9] mb-8 group-hover:w-16 transition-all duration-500" />
              <p className="text-sm text-white/50 leading-relaxed font-sans font-light">
                {pillar.description}
              </p>
              <p className="mt-8 text-[10px] tracking-[0.3em] uppercase text-[#5390d9] font-sans">
                {pillar.accent} →
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
