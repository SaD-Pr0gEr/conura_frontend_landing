import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RunningLineSection } from '@/components/sections/RunningLineSection';
import {
  BotsBannerSection,
  BotsStatisticSection,
  BotsWhatSection,
  BotsDirectionsSection,
} from '@/components/sections/bots';

// Dynamic imports for below-the-fold sections (lazy loaded)
const BotsWhySection = dynamic(
  () => import('@/components/sections/bots/BotsWhySection').then(mod => ({ default: mod.BotsWhySection })),
  { ssr: true }
);
const BotsTechSection = dynamic(
  () => import('@/components/sections/bots/BotsTechSection').then(mod => ({ default: mod.BotsTechSection })),
  { ssr: true }
);
const BotsSecuritySection = dynamic(
  () => import('@/components/sections/bots/BotsSecuritySection').then(mod => ({ default: mod.BotsSecuritySection })),
  { ssr: true }
);
const BotsIntegrationsSection = dynamic(
  () => import('@/components/sections/bots/BotsIntegrationsSection').then(mod => ({ default: mod.BotsIntegrationsSection })),
  { ssr: true }
);
const BotsHowWeWorkSection = dynamic(
  () => import('@/components/sections/bots/BotsHowWeWorkSection').then(mod => ({ default: mod.BotsHowWeWorkSection })),
  { ssr: true }
);
const CasesSection = dynamic(
  () => import('@/components/sections/CasesSection').then(mod => ({ default: mod.CasesSection })),
  { ssr: true }
);
const CTASection = dynamic(
  () => import('@/components/sections/CTASection').then(mod => ({ default: mod.CTASection })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: 'Telegram боты и чат-боты',
  description: 'Разработка Telegram ботов для автоматизации бизнеса. Чат-боты для продаж, поддержки клиентов и внутренних процессов. Резидент IT Park Узбекистан.',
  keywords: [
    'Telegram бот',
    'чат-бот',
    'автоматизация',
    'бот для бизнеса',
    'мессенджер бот',
    'разработка ботов',
    'Узбекистан',
  ],
  openGraph: {
    title: 'Telegram боты и чат-боты — Conura',
    description: 'Разработка Telegram ботов для автоматизации бизнеса. Чат-боты для продаж, поддержки клиентов и внутренних процессов.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Conura',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telegram боты и чат-боты — Conura',
    description: 'Разработка Telegram ботов для автоматизации бизнеса.',
  },
};

export default function BotsPage() {
  return (
    <>
      <Header />
      <main className="service-page">
        <BotsBannerSection />
        <BotsStatisticSection />
        <BotsWhatSection />
        <BotsDirectionsSection />
        <RunningLineSection />
        <BotsWhySection />
        <BotsTechSection />
        <BotsSecuritySection />
        <BotsIntegrationsSection />
        <BotsHowWeWorkSection />
        <CasesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
