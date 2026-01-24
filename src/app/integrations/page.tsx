import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RunningLineSection } from '@/components/sections/RunningLineSection';
import {
  IntegrationsBannerSection,
  IntegrationsWhatSection,
  IntegrationsServicesSection,
  IntegrationsTypesSection,
} from '@/components/sections/integrations';

// Dynamic imports for below-the-fold sections (lazy loaded)
const IntegrationsScenariosSection = dynamic(
  () => import('@/components/sections/integrations/IntegrationsScenariosSection').then(mod => ({ default: mod.IntegrationsScenariosSection })),
  { ssr: true }
);
const IntegrationsDataflowSection = dynamic(
  () => import('@/components/sections/integrations/IntegrationsDataflowSection').then(mod => ({ default: mod.IntegrationsDataflowSection })),
  { ssr: true }
);
const IntegrationsTechSection = dynamic(
  () => import('@/components/sections/integrations/IntegrationsTechSection').then(mod => ({ default: mod.IntegrationsTechSection })),
  { ssr: true }
);
const IntegrationsSystemsSection = dynamic(
  () => import('@/components/sections/integrations/IntegrationsSystemsSection').then(mod => ({ default: mod.IntegrationsSystemsSection })),
  { ssr: true }
);
const IntegrationsHowWeWorkSection = dynamic(
  () => import('@/components/sections/integrations/IntegrationsHowWeWorkSection').then(mod => ({ default: mod.IntegrationsHowWeWorkSection })),
  { ssr: true }
);
const IntegrationsSecuritySection = dynamic(
  () => import('@/components/sections/integrations/IntegrationsSecuritySection').then(mod => ({ default: mod.IntegrationsSecuritySection })),
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
  title: 'Интеграции и API',
  description: 'Интеграция CRM, ERP и других систем. Разработка API, автоматизация бизнес-процессов, синхронизация данных между платформами. Резидент IT Park Узбекистан.',
  keywords: [
    'интеграции',
    'API разработка',
    'CRM интеграция',
    'автоматизация процессов',
    'синхронизация данных',
    '1C интеграция',
    'Узбекистан',
  ],
  openGraph: {
    title: 'Интеграции и API — Conura',
    description: 'Интеграция CRM, ERP и других систем. Разработка API, автоматизация бизнес-процессов.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Conura',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Интеграции и API — Conura',
    description: 'Интеграция CRM, ERP и других систем.',
  },
};

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main className="service-page">
        <IntegrationsBannerSection />
        <IntegrationsWhatSection />
        <IntegrationsServicesSection />
        <IntegrationsTypesSection />
        <IntegrationsScenariosSection />
        <IntegrationsDataflowSection />
        <RunningLineSection />
        <IntegrationsTechSection />
        <IntegrationsSystemsSection />
        <IntegrationsHowWeWorkSection />
        <IntegrationsSecuritySection />
        <CasesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
