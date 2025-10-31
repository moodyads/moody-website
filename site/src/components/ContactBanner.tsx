export default function ContactBanner() {
  return (
    <section id="connect" className="py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-brandPurple via-brandGold to-brandPurple p-1">
        <div className="flex flex-col gap-8 bg-brandInk/95 px-10 py-12 text-center md:flex-row md:items-center md:justify-between md:text-right">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-white" dir="rtl">
              جاهز تخلق حملة أسطورية؟
            </h2>
            <p className="text-base text-slate-200" dir="ltr">
              Let&apos;s design omnichannel campaigns that turn Cairo&apos;s hustle into measurable growth. I respond in both
              Arabic and English within 24 hours.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <a
              href="mailto:hello@moody.tajer.eg"
              className="w-full rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-brandInk shadow-md transition hover:shadow-xl md:w-auto"
            >
              hello@moody.tajer.eg
            </a>
            <a
              href="https://cal.com/moody-tajer/30"
              className="text-sm text-white/80 underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Book a strategy jam →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
