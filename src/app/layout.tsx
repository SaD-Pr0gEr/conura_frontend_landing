import type { Metadata } from 'next';
import { ModalProvider } from '@/context/ModalContext';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Conura — Digital Agency',
    template: '%s | Conura',
  },
  description:
    'Conura — digital-агентство полного цикла. Контекстная реклама, таргет, разработка сайтов, ботов и интеграций. Резидент IT Park.',
  keywords: [
    'digital агентство',
    'контекстная реклама',
    'таргетированная реклама',
    'разработка сайтов',
    'telegram боты',
    'интеграции',
    'IT Park',
    'Узбекистан',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=Inter:wght@600&display=swap"
          rel="stylesheet"
        />
        {/* Preload critical images */}
        <link rel="preload" as="image" href="https://www.figma.com/api/mcp/asset/52c944e7-69b9-4545-9cec-e8d156db5a7b" />
        <link rel="preload" as="image" href="https://www.figma.com/api/mcp/asset/e83c9674-ab55-4117-8ba9-8dc5a91cb14a" />
      </head>
      <body>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
