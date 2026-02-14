import type {Metadata} from 'next';
import dynamic from 'next/dynamic';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {RunningLineSection} from '@/components/sections/RunningLineSection';
import {
    SitesBannerSection,
    SitesStatisticSection,
    SitesWhatIsSection,
    SitesUserFlowSection,
    SitesTypesSection,
} from '@/components/sections/sites';

// Dynamic imports for below-the-fold sections (lazy loaded)
const SitesServicesSection = dynamic(
    () => import('@/components/sections/sites/SitesServicesSection').then(mod => ({default: mod.SitesServicesSection})),
    {ssr: true}
);
const SitesTechSection = dynamic(
    () => import('@/components/sections/sites/SitesTechSection').then(mod => ({default: mod.SitesTechSection})),
    {ssr: true}
);
const SitesIntegrationsSection = dynamic(
    () => import('@/components/sections/sites/SitesIntegrationsSection').then(mod => ({default: mod.SitesIntegrationsSection})),
    {ssr: true}
);
const SitesHowWeWorkSection = dynamic(
    () => import('@/components/sections/sites/SitesHowWeWorkSection').then(mod => ({default: mod.SitesHowWeWorkSection})),
    {ssr: true}
);
const SitesEffectSection = dynamic(
    () => import('@/components/sections/sites/SitesEffectSection').then(mod => ({default: mod.SitesEffectSection})),
    {ssr: true}
);
const SitesFunnelSection = dynamic(
    () => import('@/components/sections/sites/SitesFunnelSection').then(mod => ({default: mod.SitesFunnelSection})),
    {ssr: true}
);
const SitesCasesSection = dynamic(
    () => import('@/components/sections/sites/SitesCasesSection').then(mod => ({default: mod.SitesCasesSection})),
    {ssr: true}
);
const CTASection = dynamic(
    () => import('@/components/sections/CTASection').then(mod => ({default: mod.CTASection})),
    {ssr: true}
);

export const metadata: Metadata = {
    title: 'Разработка сайтов',
    description: 'Создание современных сайтов и лендингов. Адаптивный дизайн, высокая скорость, SEO-оптимизация. От лендинга до корпоративного портала. Резидент IT Park Узбекистан.',
    keywords: [
        'разработка сайтов',
        'создание сайтов',
        'лендинг',
        'веб-разработка',
        'корпоративный сайт',
        'интернет-магазин',
        'Узбекистан',
    ],
    openGraph: {
        title: 'Разработка сайтов — Conura',
        description: 'Создание современных сайтов и лендингов. Адаптивный дизайн, высокая скорость, SEO-оптимизация.',
        type: 'website',
        locale: 'ru_RU',
        siteName: 'Conura',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Разработка сайтов — Conura',
        description: 'Создание современных сайтов и лендингов.',
    },
};

export default function SitesPage() {
    return (
        <>
            <Header/>
            <main className="service-page">
                <SitesBannerSection/>
                <SitesStatisticSection/>
                <SitesWhatIsSection/>
                <SitesUserFlowSection/>
                <SitesTypesSection/>
                <RunningLineSection/>
                <SitesServicesSection/>
                <SitesTechSection/>
                <SitesIntegrationsSection/>
                <SitesHowWeWorkSection/>
                <SitesEffectSection/>
                <SitesFunnelSection/>
                <SitesCasesSection/>
                <CTASection/>
            </main>
            <Footer/>
        </>
    );
}
