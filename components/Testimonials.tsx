"use client";

import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    quote:
      "Заказала пальто и два костюма — всё пришло идеально. Качество на уровне брендов, которые я покупала в Европе. Теперь одеваюсь только здесь.",
    name: "Анна Р.",
    role: "Предприниматель, Москва",
    result: "Постоянный клиент с 2021",
  },
  {
    quote:
      "Делали корпоративный мерч для команды 40 человек. FRAPPÉSTUDIO взяли всё под ключ — от эскиза до упаковки. Срок выдержали, качество превзошло ожидания.",
    name: "Илья М.",
    role: "CEO, IT-компания",
    result: "Производство 40 единиц за 3 недели",
  },
  {
    quote:
      "Худи-оверсайз с объёмным принтом — это лучшее, что я покупала в этом году. Носится как вторая кожа. Уже взяла второй цвет.",
    name: "Дарья К.",
    role: "Стилист, Екатеринбург",
    result: "Рекомендует всем клиентам",
  },
];

export default function Testimonials() {
  return (
    <section className="py-36 px-6 md:px-16 bg-[#181818]">
      <AnimateIn>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#5390d9] mb-16 font-sans text-center">
          Истории
        </p>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white text-center max-w-2xl mx-auto mb-24 font-medium leading-tight">
          Что говорят<br />участники
        </h2>
      </AnimateIn>

      <div className="grid md:grid-cols-3 gap-px bg-[#222]">
        {testimonials.map((t, i) => (
          <AnimateIn key={i} delay={i * 0.12}>
            <div className="bg-[#111111] p-10 md:p-12 h-full flex flex-col">
              {/* Quote mark */}
              <div className="font-display text-6xl text-[#5390d9] leading-none mb-6 font-light">"</div>

              <p className="text-base text-white font-light font-sans leading-relaxed flex-1 mb-10 italic">
                {t.quote}
              </p>

              <div className="h-px bg-[#222] mb-8" />

              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-base font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/40 font-sans mt-1">{t.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] tracking-widest uppercase text-[#5390d9] font-sans">{t.result}</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
