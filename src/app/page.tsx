import dynamic from 'next/dynamic';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {BannerSection} from '@/components/sections/BannerSection';
import {CertificateSection} from '@/components/sections/CertificateSection';
import {ServicesSection} from '@/components/sections/ServicesSection';

// Dynamic imports for below-the-fold sections (lazy loaded)
const HowWeWorkSection = dynamic(
    () => import('@/components/sections/HowWeWorkSection').then(mod => ({default: mod.HowWeWorkSection})),
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
const BlogSection = dynamic(
    () => import('@/components/sections/BlogSection').then(mod => ({default: mod.BlogSection})),
    {ssr: true}
);

export default function HomePage() {
    return (
        <>
            <Header/>
            <main>
                <BannerSection/>
                <CertificateSection/>
                <ServicesSection/>
                <HowWeWorkSection/>
                <CasesSection/>
                <CTASection/>
                <BlogSection/>
            </main>
            <Footer/>
        </>
    );
}
