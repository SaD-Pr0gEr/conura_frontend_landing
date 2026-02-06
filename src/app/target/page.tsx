import type {Metadata} from 'next';
import dynamic from 'next/dynamic';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {
    TargetBannerSection,
    TargetStatisticSection,
    TargetWhatSection,
    TargetTypesSection,
} from '@/components/sections/target';

// Dynamic imports for below-the-fold sections (lazy loaded)
const TargetNumbersSection = dynamic(
    () => import('@/components/sections/target/TargetNumbersSection').then(mod => ({default: mod.TargetNumbersSection})),
    {ssr: true}
);
const TargetStrategySection = dynamic(
    () => import('@/components/sections/target/TargetStrategySection').then(mod => ({default: mod.TargetStrategySection})),
    {ssr: true}
);
const TargetPlatformsSection = dynamic(
    () => import('@/components/sections/target/TargetPlatformsSection').then(mod => ({default: mod.TargetPlatformsSection})),
    {ssr: true}
);
const TargetHowWeWorkSection = dynamic(
    () => import('@/components/sections/target/TargetHowWeWorkSection').then(mod => ({default: mod.TargetHowWeWorkSection})),
    {ssr: true}
);
const CasesSection = dynamic(
    () => import('@/components/sections/CasesSection').then(mod => ({default: mod.CasesSection})),
    {ssr: true}
);
const CTASection = dynamic(
    () => import('@/components/sections/CTASection').then(mod => ({default: mod.CTASection})),
    {ssr: true}
);

export const metadata: Metadata = {
    title: 'Таргетированная реклама',
    description: 'Таргетированная реклама в Instagram, Facebook и Telegram. Настройка Meta Ads, ремаркетинг, A/B тестирование. Привлекаем клиентов из соцсетей. Резидент IT Park Узбекистан.',
    keywords: [
        'таргетированная реклама',
        'таргет Instagram',
        'реклама Facebook',
        'Meta Ads',
        'SMM продвижение',
        'реклама в соцсетях',
        'Telegram реклама',
        'ремаркетинг',
        'Узбекистан',
    ],
    openGraph: {
        title: 'Таргетированная реклама — Conura',
        description: 'Таргетированная реклама в Instagram, Facebook и Telegram. Настройка Meta Ads, ремаркетинг, A/B тестирование. Привлекаем клиентов из соцсетей.',
        type: 'website',
        locale: 'ru_RU',
        siteName: 'Conura',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Таргетированная реклама — Conura',
        description: 'Таргетированная реклама в Instagram, Facebook и Telegram. Настройка Meta Ads, ремаркетинг, A/B тестирование.',
    },
};

export default function TargetPage() {
    return (
        <>
            <Header/>
            <main className="service-page">
                <TargetBannerSection/>
                <TargetStatisticSection/>
                <TargetWhatSection/>
                <TargetTypesSection/>
                <TargetNumbersSection/>
                <TargetStrategySection/>
                <TargetPlatformsSection/>
                <TargetHowWeWorkSection/>
                <CasesSection/>
                <CTASection/>
            </main>
            <Footer/>
        </>
    );
}
