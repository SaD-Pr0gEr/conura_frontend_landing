'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 'context',
    name: 'Контекстная реклама',
    icon: 'https://www.figma.com/api/mcp/asset/4111b08a-005b-4e72-a599-212d2d25b1fc',
    image: 'https://www.figma.com/api/mcp/asset/c14d7683-6068-4511-8905-04627b5eb5b6',
    description: 'Привлекаем клиентов через поисковые системы и площадки, показывая объявления именно тем, кто ищет ваш продукт',
    link: '/context',
  },
  {
    id: 'target',
    name: 'Таргет',
    icon: 'https://www.figma.com/api/mcp/asset/95c265ff-d57e-47c7-a22c-6d378843a46e',
    image: 'https://www.figma.com/api/mcp/asset/b3be2fbf-54cf-4db8-8ef1-4faf9d7df899',
    description: 'Показ объявлений выбранной аудитории по заданным параметрам: интересы, возраст, география и поведение',
    link: '/target',
  },
  {
    id: 'sites',
    name: 'Сайты',
    icon: 'https://www.figma.com/api/mcp/asset/4caf23f3-033d-46e1-afa7-8d97cce01d12',
    image: 'https://www.figma.com/api/mcp/asset/7e82c842-d6c2-451f-a69e-7da671156f6b',
    description: 'Создаём удобные и понятные сайты, которые отражают суть бизнеса и упрощают взаимодействие с клиентами',
    link: '/sites',
  },
  {
    id: 'bots',
    name: 'Боты',
    icon: 'https://www.figma.com/api/mcp/asset/933e6f83-5729-486e-9e49-e90adf895e57',
    image: 'https://www.figma.com/api/mcp/asset/755fcf00-a913-43ca-be2e-ec73d82a8f50',
    description: 'Программные решения, которые автоматизируют задачи — от клиентских сервисов до внутренних бизнес-процессов',
    link: '/bots',
  },
  {
    id: 'integrations',
    name: 'Интеграции',
    icon: 'https://www.figma.com/api/mcp/asset/39491403-9c34-496e-81d7-6f7e7e22afc8',
    image: 'https://www.figma.com/api/mcp/asset/d13dd154-d965-424e-b1fe-ce519eff8cef',
    description: 'Соединяют разные сервисы и программы в единую цепочку, чтобы данные передавались автоматически и без ошибок',
    link: '/integrations',
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState('context');
  const currentService = services.find((s) => s.id === activeService) || services[0];

  const toggleService = (id: string) => {
    setActiveService(id === activeService ? '' : id);
  };

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Услуги</h2>
      
      <div className="services-content">
        {/* Tabs (Left side on desktop) */}
        <div className="services-tabs">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-tab ${activeService === service.id ? 'active' : ''}`}
              data-service={service.id}
            >
              <div className="service-tab-header" onClick={() => toggleService(service.id)}>
                <div className="service-tab-icon">
                  <img src={service.icon} alt={service.name} loading="lazy" />
                </div>
                <span className="service-tab-name">{service.name}</span>
                <button className="service-tab-toggle" aria-label={activeService === service.id ? 'Закрыть' : 'Открыть'}>
                  <svg className="icon-close" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <svg className="icon-plus" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="service-tab-content">
                <div className="service-tab-image">
                  <img src={service.image} alt={service.name} loading="lazy" />
                </div>
                <p className="service-tab-description">{service.description}</p>
                <Link href={service.link} className="btn btn-primary service-tab-btn">Подробнее</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Image + Description */}
        <div className="services-preview">
          <div className="services-preview-image">
            <img src={currentService.image} alt={currentService.name} id="servicesPreviewImg" loading="lazy" />
          </div>
          <div className="services-preview-content">
            <div className="services-preview-text">
              <h3 className="services-preview-title" id="servicesPreviewTitle">{currentService.name}</h3>
              <p className="services-preview-description" id="servicesPreviewDescription">{currentService.description}</p>
            </div>
            <Link href={currentService.link} className="services-preview-btn" id="servicesPreviewBtn">
              <span>Подробнее</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
