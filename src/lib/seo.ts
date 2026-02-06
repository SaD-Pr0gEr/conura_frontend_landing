import {Metadata} from 'next';

/**
 * SEO Configuration for Conura Website
 */

export const siteConfig = {
    name: 'Conura',
    url: 'https://conura.uz',
    description: 'Conura — digital-агентство полного цикла. Контекстная реклама, таргет, разработка сайтов, ботов и интеграций.',
    locale: 'ru_RU',
    author: 'Conura Agency',
};

/**
 * Generate page metadata with defaults
 */
export function generatePageMetadata(options: {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    noIndex?: boolean;
}): Metadata {
    const {title, description, keywords = [], image, noIndex = false} = options;

    return {
        title,
        description,
        keywords: [
            ...keywords,
            'Conura',
            'digital агентство',
            'Узбекистан',
            'IT Park',
        ],
        openGraph: {
            title: `${title} | ${siteConfig.name}`,
            description,
            type: 'website',
            locale: siteConfig.locale,
            siteName: siteConfig.name,
            ...(image && {images: [{url: image}]}),
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | ${siteConfig.name}`,
            description,
            ...(image && {images: [image]}),
        },
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}

/**
 * Default SEO metadata for service pages
 */
export const servicePagesSEO = {
    context: {
        title: 'Контекстная реклама',
        description: 'Настройка и ведение контекстной рекламы в Google Ads и Яндекс.Директ. Получайте больше заявок с оптимальным бюджетом. Резидент IT Park Узбекистан.',
        keywords: ['контекстная реклама', 'Google Ads', 'Яндекс.Директ', 'PPC', 'реклама в поиске'],
    },
    target: {
        title: 'Таргетированная реклама',
        description: 'Таргетированная реклама в Instagram, Facebook и Telegram. Настройка Meta Ads, ремаркетинг, A/B тестирование. Привлекаем клиентов из соцсетей.',
        keywords: ['таргетированная реклама', 'таргет Instagram', 'реклама Facebook', 'Meta Ads', 'SMM'],
    },
    sites: {
        title: 'Разработка сайтов',
        description: 'Создание современных сайтов и лендингов. Адаптивный дизайн, высокая скорость, SEO-оптимизация. От лендинга до корпоративного портала.',
        keywords: ['разработка сайтов', 'создание сайтов', 'лендинг', 'веб-разработка', 'корпоративный сайт'],
    },
    bots: {
        title: 'Telegram боты и чат-боты',
        description: 'Разработка Telegram ботов для автоматизации бизнеса. Чат-боты для продаж, поддержки клиентов и внутренних процессов.',
        keywords: ['Telegram бот', 'чат-бот', 'автоматизация', 'бот для бизнеса', 'мессенджер бот'],
    },
    integrations: {
        title: 'Интеграции и API',
        description: 'Интеграция CRM, ERP и других систем. Разработка API, автоматизация бизнес-процессов, синхронизация данных между платформами.',
        keywords: ['интеграции', 'API разработка', 'CRM интеграция', 'автоматизация процессов', 'синхронизация данных'],
    },
};
