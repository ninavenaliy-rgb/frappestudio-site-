"use client";

import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    quote:
      "После работы с FRAPPE STUDIO мои переговоры изменились. Когда образ соответствует уровню — люди это чувствуют ещё до того, как ты открываешь рот.",
    name: "Александр М.",
    role: "Основатель IT-компании",
    result: "+40% к конверсии на встречах",
  },
  {
    quote:
      "Я не ожидал, что стиль может так влиять на восприятие меня как эксперта. Теперь мои клиенты приходят с другим уровнем готовности к сотрудничеству.",
    name: "Дмитрий К.",
    role: "Бизнес-консультант",
    result: "Аудитория выросла в 3 раза",
  },
  {
    quote:
      "FRAPPE STUDIO — это не про одежду. Это про то, как ты хочешь, чтобы тебя воспринимал мир. После программы я стала совсем иначе заходить в комнату.",
    name: "Елена В.",
    role: "Предприниматель, сфера EdTech",
    result: "Медийность x5 за 6 месяцев",
  },
];

export default function Testimonials() {
  return (
    <section className="py-36 px-6 md:px-16 bg-[#f5f0e8]">
      <AnimateIn>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-16 font-sans text-center">
          Истории
        </p>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#0a0a0a] text-center max-w-2xl mx-auto mb-24 font-medium leading-tight">
          Что говорят<br />участники
        </h2>
      </AnimateIn>

      <div className="grid md:grid-cols-3 gap-px bg-[#e8e3da]">
        {testimonials.map((t, i) => (
          <AnimateIn key={i} delay={i * 0.12}>
            <div className="bg-white p-10 md:p-12 h-full flex flex-col">
              {/* Quote mark */}
              <div className="font-serif text-6xl text-[#c9a96e] leading-none mb-6 font-light">"</div>

              <p className="text-base text-[#0a0a0a] font-light font-sans leading-relaxed flex-1 mb-10 italic">
                {t.quote}
              </p>

              <div className="h-px bg-[#e8e3da] mb-8" />

              <div className="flex items-end justify-between">
                <div>
                  <p className="font-serif text-base font-medium text-[#0a0a0a]">{t.name}</p>
                  <p className="text-xs text-[#6b6b6b] font-sans mt-1">{t.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] tracking-widest uppercase text-[#c9a96e] font-sans">{t.result}</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
