const testimonials = [
  {
    name: 'Sara Abdelrahman',
    title: 'VP Growth, Tajer',
    quote:
      'Moody understands the pulse of Egyptian shoppers and translates it into creative growth engines. Our KPIs are louder than ever.',
    quoteAr:
      'مودي يفهم نبض المستهلك المصري ويحوّله إلى محركات نمو مبتكرة. مؤشراتنا أصبحت أعلى من أي وقت مضى.'
  },
  {
    name: 'Karim Nassar',
    title: 'CEO, Mina Express',
    quote:
      'He choreographed a launch spectacle that sold out our inventory while amplifying our brand voice across the region.',
    quoteAr:
      'قاد إطلاقاً استعراضياً نفدت معه المنتجات وارتفع صدى العلامة التجارية في كل المنطقة.'
  },
  {
    name: 'Leila Hassan',
    title: 'Head of Brand, Tala',
    quote:
      'Bilingual storytelling with razor-sharp analytics. Moody keeps us relevant in both Arabic and English conversations.',
    quoteAr:
      'سرد ثنائي اللغة مدعوم بتحليلات دقيقة. مودي يحافظ على حضورنا في المحادثات العربية والإنجليزية.'
  }
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-brandPurple/80 via-brandInk to-brandInk/80 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col gap-3 text-center" dir="rtl">
          <p className="text-sm uppercase tracking-[0.35em] text-brandGold">آراء الشركاء</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">قصص نجاح تتكلم بلغتين</h2>
          <p className="mx-auto max-w-2xl text-base text-slate-200" dir="ltr">
            Partners across e-commerce and retail trust Moody to architect bold launches that resonate in Arabic
            and English audiences alike.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/10 p-6 text-right shadow-lg backdrop-blur"
            >
              <div className="space-y-4 text-sm leading-relaxed text-slate-100" dir="rtl">
                <p className="font-semibold text-brandGold">{testimonial.quoteAr}</p>
                <p className="text-slate-200" dir="ltr">
                  “{testimonial.quote}”
                </p>
              </div>
              <footer className="mt-6 text-xs uppercase tracking-[0.35em] text-slate-300" dir="ltr">
                {testimonial.name} — {testimonial.title}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
