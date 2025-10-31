import Head from 'next/head';
import Hero from '@/components/Hero';
import CampaignShowcase from '@/components/CampaignShowcase';
import Testimonials from '@/components/Testimonials';
import ContactBanner from '@/components/ContactBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Moody @ Tajer | Egyptian Marketing Firepower</title>
      </Head>
      <main className="min-h-screen bg-brandInk text-white">
        <div className="relative">
          <div className="absolute left-0 top-0 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brandPurple/40 blur-3xl" />
          <div className="absolute right-0 top-1/3 -z-10 h-64 w-64 translate-x-1/3 rounded-full bg-brandGold/30 blur-3xl" />
        </div>
        <Hero />
        <CampaignShowcase />
        <Testimonials />
        <ContactBanner />
      </main>
      <footer className="bg-brandInk/90 py-10 text-center text-xs text-slate-400" dir="ltr">
        Built with courage in Cairo · Moody @ Tajer · © {new Date().getFullYear()}
      </footer>
    </>
  );
}
