const campaigns = [
  {
    id: 'pharaoh-drops',
    title: 'Pharaoh Drops',
    titleAr: 'إطلاق الفراعنة',
    result: '3.2x ROAS in 6 weeks',
    description:
      'Immersive AR filters paired with street murals that drove 68% social share-of-voice uplift across Cairo.',
    metrics: ['68% SoV uplift', '120K leads', 'TikTok #1 branded trend']
  },
  {
    id: 'night-shift',
    title: 'Night Shift Megasale',
    titleAr: 'تخفيضات منتصف الليل',
    result: '+47% retention',
    description:
      'Realtime cohort triggers fired localized push-notifications in Arabic/English, reactivating dormant users.',
    metrics: ['47% retention lift', '19% CAC drop', '91% CSAT']
  },
  {
    id: 'mina-express',
    title: 'Mina Express Launch',
    titleAr: 'إطلاق مينا إكسبريس',
    result: 'Sold out in 48h',
    description:
      'Pop-up commerce tunnels merged live commerce & rapid fulfillment to sell out an entire capsule in two days.',
    metrics: ['48h sell out', '12M reach', '220% KPI attainment']
  }
];

export default function CampaignShowcase() {
  return (
    <section className="bg-brandInk/80 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="flex flex-col gap-3 text-center" dir="rtl">
          <p className="text-sm uppercase tracking-[0.35em] text-brandGold">الحملات</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">انفجارات تسويقية تهز المنطقة</h2>
          <p className="mx-auto max-w-3xl text-base text-slate-300" dir="ltr">
            Moody orchestrates hybrid experiences that marry culture-first storytelling with relentless growth
            metrics. Explore a trio of headline campaigns redefining Tajer&apos;s edge.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {campaigns.map((campaign) => (
            <article
              key={campaign.id}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-right shadow-[0_25px_50px_-12px_rgba(106,0,244,0.35)] transition-transform hover:-translate-y-2"
            >
              <header>
                <p className="text-xs uppercase tracking-[0.35em] text-brandGold" dir="ltr">
                  {campaign.result}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white" dir="rtl">
                  {campaign.titleAr}
                </h3>
                <h4 className="text-lg text-slate-300" dir="ltr">
                  {campaign.title}
                </h4>
              </header>
              <p className="mt-4 text-sm leading-relaxed text-slate-200" dir="ltr">
                {campaign.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" dir="ltr">
                {campaign.metrics.map((metric) => (
                  <li
                    key={metric}
                    className="rounded-full border border-white/20 bg-brandPurple/40 px-4 py-1 text-xs uppercase tracking-widest text-white"
                  >
                    {metric}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
