"use client";

import AnimateIn from "./AnimateIn";

const pillars = [
  {
    number: "01",
    title: "STYLE",
    subtitle: "Стиль и образ",
    description:
      "Одежда как язык. Визуальный образ, который говорит раньше слов. Создаём систему стиля, отражающую вашу личность и статус.",
    accent: "Визуальный образ",
  },
  {
    number: "02",
    title: "LEADER IMAGE",
    subtitle: "Имидж лидера",
    description:
      "Личный бренд, который открывает двери. Формируем цельный образ эксперта, вызывающий доверие и уважение в бизнес-среде.",
    accent: "Личный бренд",
  },
  {
    number: "03",
    title: "BUSINESS COMMUNITY",
    subtitle: "Бизнес-сообщество",
    description:
      "Среда, в которой растут предприниматели. Нетворкинг, партнёрства и совместное развитие в кругу единомышленников.",
    accent: "Предпринимательство",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-36 px-6 md:px-16 bg-white">
      {/* Section label */}
      <AnimateIn>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-16 font-sans text-center">
          Экосистема
        </p>
      </AnimateIn>

      {/* Headline */}
      <AnimateIn delay={0.1}>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-[#0a0a0a] text-center max-w-3xl mx-auto mb-24 font-medium">
          Три направления,<br />один путь
        </h2>
      </AnimateIn>

      {/* Pillars */}
      <div className="grid md:grid-cols-3 gap-0 border border-[#e8e3da]">
        {pillars.map((pillar, i) => (
          <AnimateIn key={pillar.number} delay={i * 0.12}>
            <div
              className={`p-10 md:p-14 group hover:bg-[#f5f0e8] transition-all duration-500 ${
                i < 2 ? "border-b md:border-b-0 md:border-r border-[#e8e3da]" : ""
              }`}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] font-sans mb-8 block">
                {pillar.number}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#0a0a0a] mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-xs tracking-widest uppercase text-[#6b6b6b] mb-8 font-sans">
                {pillar.subtitle}
              </p>
              <div className="h-px w-8 bg-[#c9a96e] mb-8 group-hover:w-16 transition-all duration-500" />
              <p className="text-sm text-[#6b6b6b] leading-relaxed font-sans font-light">
                {pillar.description}
              </p>
              <p className="mt-8 text-[10px] tracking-[0.3em] uppercase text-[#0a0a0a] font-sans">
                {pillar.accent} →
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
