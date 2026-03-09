"use client";

import AnimateIn from "./AnimateIn";

const stats = [
  { value: "2018", label: "Год основания" },
  { value: "3", label: "Города" },
  { value: "500+", label: "Клиентов" },
  { value: "15к", label: "Единиц в тираже" },
];

const values = [
  { icon: "◆", title: "Екатеринбург", text: "Основной шоурум и производство: ул. Цвилинга, 7а. Пн–Сб 12:00–21:00." },
  { icon: "◇", title: "Москва", text: "Партнёрская точка в Trend Island — одном из крупнейших дизайнерских маркетов столицы." },
  { icon: "○", title: "Санкт-Петербург", text: "Представлены в Центральной галерее дизайнеров в историческом центре города." },
  { icon: "□", title: "Онлайн", text: "Доставка по всей России. Каталог, размерная сетка и заказ на сайте frappestudio.ru." },
];

export default function Community() {
  return (
    <section id="сообщество" className="py-36 px-6 md:px-16 bg-[#111111]">
      <AnimateIn>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#5390d9] mb-16 font-sans text-center">
          Присутствие
        </p>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white text-center max-w-3xl mx-auto mb-10 font-medium leading-tight">
          Где нас<br />найти
        </h2>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <p className="text-sm text-white/40 text-center max-w-xl mx-auto mb-28 font-light font-sans leading-relaxed">
          FRAPPÉSTUDIO — дизайнерская марка с производством в Екатеринбурге и партнёрскими точками в Москве и Санкт-Петербурге.
        </p>
      </AnimateIn>

      {/* Stats */}
      <AnimateIn delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#222] mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#111111] p-10 text-center">
              <p className="font-display text-5xl text-white font-semibold mb-3">{stat.value}</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </AnimateIn>

      {/* Values */}
      <div className="grid md:grid-cols-4 gap-10">
        {values.map((v, i) => (
          <AnimateIn key={v.title} delay={i * 0.1}>
            <div className="group">
              <div className="text-[#5390d9] text-lg mb-6">{v.icon}</div>
              <h4 className="font-display text-lg text-white font-medium mb-4">{v.title}</h4>
              <div className="h-px w-6 bg-[#5390d9] mb-5 group-hover:w-12 transition-all duration-400" />
              <p className="text-sm text-white/40 font-light font-sans leading-relaxed">{v.text}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
