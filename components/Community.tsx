"use client";

import AnimateIn from "./AnimateIn";

const stats = [
  { value: "500+", label: "Предпринимателей" },
  { value: "12", label: "Мероприятий в год" },
  { value: "40+", label: "Городов" },
  { value: "3", label: "Года на рынке" },
];

const values = [
  { icon: "◆", title: "Предприниматели", text: "Среда, где бизнесмены развиваются вместе, обмениваются опытом и строят партнёрства." },
  { icon: "◇", title: "Эксперты", text: "Пространство для экспертов, усиливающих свой образ и профессиональный авторитет." },
  { icon: "○", title: "Мероприятия", text: "Закрытые встречи, воркшопы по стилю и лидерству, стратегические сессии." },
  { icon: "□", title: "Нетворкинг", text: "Живые связи между людьми, которые ценят визуальный образ как часть бизнес-стратегии." },
];

export default function Community() {
  return (
    <section id="сообщество" className="py-36 px-6 md:px-16 bg-white">
      <AnimateIn>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-16 font-sans text-center">
          Сообщество
        </p>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#0a0a0a] text-center max-w-3xl mx-auto mb-10 font-medium leading-tight">
          Люди, которые строят<br />через образ
        </h2>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <p className="text-sm text-[#6b6b6b] text-center max-w-xl mx-auto mb-28 font-light font-sans leading-relaxed">
          FRAPPE STUDIO — это не просто бренд. Это живое сообщество предпринимателей, объединённых пониманием: образ — это часть стратегии.
        </p>
      </AnimateIn>

      {/* Stats */}
      <AnimateIn delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e8e3da] mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#f5f0e8] p-10 text-center">
              <p className="font-serif text-5xl text-[#0a0a0a] font-semibold mb-3">{stat.value}</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#6b6b6b] font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Values */}
      <div className="grid md:grid-cols-4 gap-10">
        {values.map((v, i) => (
          <AnimateIn key={v.title} delay={i * 0.1}>
            <div className="group">
              <div className="text-[#c9a96e] text-lg mb-6">{v.icon}</div>
              <h4 className="font-serif text-lg text-[#0a0a0a] font-medium mb-4">{v.title}</h4>
              <div className="h-px w-6 bg-[#c9a96e] mb-5 group-hover:w-12 transition-all duration-400" />
              <p className="text-sm text-[#6b6b6b] font-light font-sans leading-relaxed">{v.text}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
