'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';

interface SiteType {
  id: number;
  tabLabel: string;
  title: string;
  description: string;
  image: string;
  imageClass: string;
}

const siteTypes: SiteType[] = [
  {
    id: 1,
    tabLabel: 'Лендинги',
    title: 'Лендинги для рекламы',
    description: 'Одностраничные сайты под конкретный продукт или акцию. Максимально заточены под конверсию трафика с рекламы – содержат оффер, преимущества, отзывы и форму заявки на одной странице. Идеально для быстрых маркетинговых кампаний',
    image: 'https://www.figma.com/api/mcp/asset/5a432874-57de-4ddb-b66f-02974ccc0ea4',
    imageClass: 'sites-types-card-image-purple',
  },
  {
    id: 2,
    tabLabel: 'Корпоративные сайты',
    title: 'Корпоративные сайты',
    description: 'Представительские сайты компаний с разделами о деятельности. Включают информацию о услугах, портфолио, новости, команду, контакты. Формируют имидж, повышают доверие и дают полную информацию партнёрам и клиентам',
    image: 'https://www.figma.com/api/mcp/asset/ab0f0e1f-1a24-4b7e-b234-c9a3f7bae8cd',
    imageClass: 'sites-types-card-image-dark',
  },
  {
    id: 3,
    tabLabel: 'Интернет-магазины',
    title: 'Интернет-магазины',
    description: 'Площадки для онлайн-торговли с каталогом товаров, поиском, корзиной и онлайн-оплатой. Позволяют продавать 24/7 без географических ограничений, автоматизируя приём заказов и оплат',
    image: 'https://www.figma.com/api/mcp/asset/e86c8f2a-3d77-49a2-95e7-b0e7d8e1c5a4',
    imageClass: 'sites-types-card-image-orange',
  },
  {
    id: 4,
    tabLabel: 'Порталы и сервисы',
    title: 'Порталы и сервисы',
    description: 'Крупные многофункциональные веб-платформы (новостные порталы, доски объявлений, онлайн-сервисы). Рассчитаны на большую аудиторию, включают персональные кабинеты, интеграции с внешними сервисами и сложную бизнес-логику',
    image: 'https://www.figma.com/api/mcp/asset/8f7c9d2e-5a1b-4c3d-9e6f-0a2b3c4d5e6f',
    imageClass: 'sites-types-card-image-dark',
  },
  {
    id: 5,
    tabLabel: 'SaaS-платформы',
    title: 'SaaS-платформы',
    description: 'Web-приложения, предоставляющие программные сервисы по подписке. Например, онлайн-бухгалтерия или система управления проектами. Требуют высокой надёжности, защиты данных и масштабируемости',
    image: 'https://www.figma.com/api/mcp/asset/a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    imageClass: 'sites-types-card-image-light',
  },
  {
    id: 6,
    tabLabel: 'Внутренние системы (CRM/ERP)',
    title: 'Внутренние системы (CRM/ERP)',
    description: 'Закрытые корпоративные сайты для внутренних нужд компании. Автоматизируют процессы управления – от учёта',
    image: 'https://www.figma.com/api/mcp/asset/b2c3d4e5-f6a7-8901-bcde-f23456789012',
    imageClass: 'sites-types-card-image-purple',
  },
];

export function SitesTypesSection() {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="sites-types-section">
      <div className="sites-types-container">
        {/* Title */}
        <h2 className="sites-types-title">Форматы веб-сайтов</h2>
        
        {/* Tabs (Desktop) */}
        <div className="sites-types-tabs">
          {siteTypes.map((type) => (
            <button
              key={type.id}
              className={`sites-types-tab ${activeTab === type.id ? 'active' : ''}`}
              data-tab={type.id}
              onClick={() => setActiveTab(type.id)}
            >
              {type.tabLabel}
            </button>
          ))}
        </div>
        
        {/* Cards Container (Desktop shows one, Mobile shows slider) */}
        <div className="sites-types-cards">
          {siteTypes.map((type) => (
            <div
              key={type.id}
              className={`sites-types-card ${activeTab === type.id ? 'active' : ''}`}
              data-card={type.id}
            >
              <div className={`sites-types-card-image ${type.imageClass}`}>
                <img src={type.image} alt={type.title} />
              </div>
              <div className="sites-types-card-info">
                <div className="sites-types-card-content">
                  <h3 className="sites-types-card-title">{type.title}</h3>
                  <p className="sites-types-card-text">{type.description}</p>
                </div>
                <button className="sites-types-card-btn" onClick={openModal}>
                  Отправить заявку
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
