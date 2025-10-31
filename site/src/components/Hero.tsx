import Image from 'next/image';

const heroImages = [
  '/images/moody-hero-1.svg',
  '/images/moody-hero-2.svg',
  '/images/moody-hero-3.svg'
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,180,52,0.35),_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-12 px-6 py-20 md:flex-row md:items-center lg:px-12">
        <div className="flex-1 text-right md:text-left" dir="ltr">
          <p className="text-sm uppercase tracking-[0.4em] text-brandGold">Moody @ Tajer</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Bold Growth Marketing Crafted in Cairo
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200">
            I&apos;m Moody, the Egyptian marketer driving Tajer&apos;s loudest statements. From viral drops to
            data-fueled retention plays, I lead teams to launch experiences that shake markets in Arabic
            and English.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4" dir="rtl">
            <a
              className="rounded-full bg-brandGold px-8 py-3 text-base font-semibold text-brandInk shadow-lg shadow-brandGold/30 transition-transform hover:-translate-y-1"
              href="#connect"
            >
              تواصل معي الآن
            </a>
            <span className="text-sm text-slate-300">Marketing that speaks both Arabic & English.</span>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="grid h-[420px] w-full max-w-md grid-cols-3 gap-3">
            {heroImages.map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl ${
                  index % 3 === 0 ? 'col-span-2 row-span-2' : 'row-span-1'
                }`}
              >
                <Image
                  src={src}
                  alt={`Moody campaign moodboard ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
