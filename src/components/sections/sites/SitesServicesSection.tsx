'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';

const services = [
  {
    id: 1,
    title: 'Деплой и настройка домена',
    description: 'Развёртывание готового сайта на хостинге (сервере) и привязка к вашему доменному имени. Настраиваем серверное окружение, SSL-сертификат и необходимые сервисы, чтобы сайт стабильно работал',
  },
  {
    id: 2,
    title: 'Индексация в Google и Yandex',
    description: 'Добавляем сайт в поисковые системы Google и Яндекс, настраиваем Search Console и Яндекс.Вебмастер. Отправляем карту сайта и следим за корректной индексацией всех страниц',
  },
  {
    id: 3,
    title: 'Установка веб-аналитики',
    description: 'Подключаем Google Analytics, Яндекс.Метрику и другие инструменты для отслеживания посещаемости, поведения пользователей и конверсий. Настраиваем цели и события для точного анализа',
  },
  {
    id: 4,
    title: 'Техническое сопровождение',
    description: 'Обеспечиваем бесперебойную работу сайта: мониторинг доступности, резервное копирование, обновление систем безопасности и оперативное устранение неполадок',
  },
  {
    id: 5,
    title: 'SEO-оптимизация',
    description: 'Оптимизируем сайт для поисковых систем: техническая SEO, мета-теги, структурированные данные, скорость загрузки и адаптация под мобильные устройства',
  },
  {
    id: 6,
    title: 'Контекстная реклама',
    description: 'Настраиваем рекламные кампании в Google Ads и Яндекс.Директ для привлечения целевого трафика на ваш сайт. Подбор ключевых слов, создание объявлений и оптимизация бюджета',
  },
];

export function SitesServicesSection() {
  const { openModal } = useModal();
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="sites-services-section">
      <div className="sites-services-container">
        {/* Left: Heading + CTA (Desktop) */}
        <div className="sites-services-left">
          <h2 className="sites-services-title">Что входит в наши услуги</h2>
          <button className="sites-services-cta" onClick={openModal}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
        
        {/* Right: Accordion Items */}
        <div className="sites-services-items">
          {services.map((service, index) => (
            <div key={service.id} className={`sites-services-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="sites-services-item-header" onClick={() => toggleItem(index)}>
                <span className="sites-services-item-title">{service.title}</span>
                <button 
                  className="sites-services-item-toggle" 
                  aria-expanded={activeIndex === index} 
                  aria-label="Toggle"
                >
                  <svg className="sites-services-icon-plus" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <svg className="sites-services-icon-close" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="sites-services-item-content">
                <p className="sites-services-item-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
