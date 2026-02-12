import type {Metadata} from 'next';
import dynamic from 'next/dynamic';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {
    ContextBannerSection,
    ContextStatisticsSection,
    ContextWhatIsSection,
    ContextAdTypesSection,
} from '@/components/sections/context';

// Dynamic imports for below-the-fold sections (lazy loaded)
const ContextServiceCTASection = dynamic(
    () => import('@/components/sections/context/ContextServiceCTASection').then(mod => ({default: mod.ContextServiceCTASection})),
    {ssr: true}
);
const ContextStrategiesSection = dynamic(
    () => import('@/components/sections/context/ContextStrategiesSection').then(mod => ({default: mod.ContextStrategiesSection})),
    {ssr: true}
);
const ContextPlatformsSection = dynamic(
    () => import('@/components/sections/context/ContextPlatformsSection').then(mod => ({default: mod.ContextPlatformsSection})),
    {ssr: true}
);
const ContextHowWeWorkSection = dynamic(
    () => import('@/components/sections/context/ContextHowWeWorkSection').then(mod => ({default: mod.ContextHowWeWorkSection})),
    {ssr: true}
);
const ContextToolsSection = dynamic(
    () => import('@/components/sections/context/ContextToolsSection').then(mod => ({default: mod.ContextToolsSection})),
    {ssr: true}
);
const ContextCertificationSection = dynamic(
    () => import('@/components/sections/context/ContextCertificationSection').then(mod => ({default: mod.ContextCertificationSection})),
    {ssr: true}
);
const CasesSection = dynamic(
    () => import('@/components/sections/CasesSection').then(mod => ({default: mod.CasesSection})),
    {ssr: true}
);
const ContextCTAProjectSection = dynamic(
    () => import('@/components/sections/context/ContextCTAProjectSection').then(mod => ({default: mod.ContextCTAProjectSection})),
    {ssr: true}
);

export const metadata: Metadata = {
    title: 'Контекстная реклама',
    description: 'Настройка и ведение контекстной рекламы в Google Ads и Яндекс.Директ. Получайте больше заявок с оптимальным бюджетом. Резидент IT Park Узбекистан.',
    keywords: [
        'контекстная реклама',
        'Google Ads',
        'Яндекс.Директ',
        'PPC',
        'реклама в поиске',
        'настройка рекламы',
        'Узбекистан',
    ],
    openGraph: {
        title: 'Контекстная реклама — Conura',
        description: 'Настройка и ведение контекстной рекламы в Google Ads и Яндекс.Директ. Получайте больше заявок с оптимальным бюджетом.',
        type: 'website',
        locale: 'ru_RU',
        siteName: 'Conura',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Контекстная реклама — Conura',
        description: 'Настройка и ведение контекстной рекламы в Google Ads и Яндекс.Директ.',
    },
};

export default function ContextPage() {
    return (
        <>
            <Header/>
            <main className="service-page">
                <ContextBannerSection/>
                <ContextStatisticsSection/>
                <ContextWhatIsSection/>
                <ContextAdTypesSection/>
                <ContextServiceCTASection/>
                <ContextStrategiesSection/>
                <ContextPlatformsSection/>
                <ContextHowWeWorkSection/>
                <ContextToolsSection/>
                <ContextCertificationSection/>
                <CasesSection/>
                <ContextCTAProjectSection/>
            </main>
            <Footer/>
        </>
    );
}
