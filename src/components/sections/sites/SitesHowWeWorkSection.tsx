'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';

const steps = [
  {
    id: 1,
    title: 'Аналитика и планирование',
    items: [
      'Сбор требований и задач проекта',
      'Анализ бизнеса, целевой аудитории и конкурентов',
      'Формирование целей сайта',
      'Определение функционала, структуры и контента',
      'Подготовка технического задания',
      'Создание прототипа (схемы страниц)',
    ],
  },
  {
    id: 2,
    title: 'Дизайн и UX-прототипирование',
    items: [
      'Разработка визуального стиля сайта',
      'Проектирование структуры страниц и пользовательских сценариев',
      'Создание UI-макетов с учётом фирменного стиля',
      'Адаптация под мобильные устройства',
      'Подготовка интерактивного прототипа',
      'Согласование и утверждение дизайна',
    ],
  },
  {
    id: 3,
    title: 'Разработка фронтенда и бэкенда',
    items: [
      'Верстка интерфейса (HTML / CSS)',
      'Реализация интерактива и логики на JavaScript',
      'Разработка серверной части',
      'Настройка базы данных',
      'Реализация бизнес-логики и API',
      'Интеграция внешних сервисов',
      'Сборка проекта в единую систему',
    ],
  },
  {
    id: 4,
    title: 'Тестирование и отладка',
    items: [
      'Проверка сайта во всех популярных браузерах',
      'Тестирование на разных устройствах',
      'Проверка форм и пользовательских сценариев',
      'Оптимизация скорости загрузки',
      'Проверка безопасности',
      'Исправление выявленных ошибок',
    ],
  },
  {
    id: 5,
    title: 'Запуск (Deploy)',
    items: [
      'Размещение сайта на боевом сервере',
      'Подключение домена',
      'Финальное тестирование в рабочем окружении',
      'Проверка индексации поисковыми системами',
      'Официальный запуск проекта',
    ],
  },
  {
    id: 6,
    title: 'Поддержка и развитие',
    items: [
      'Мониторинг работы сайта после запуска',
      'Анализ поведения пользователей',
      'Улучшение функционала и интерфейса',
      'Обновление контента',
      'Добавление новых разделов и сервисов',
      'Долгосрочное сопровождение проекта',
    ],
  },
];

export function SitesHowWeWorkSection() {
  const { openModal } = useModal();
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="sites-how-we-work-section">
      <div className="sites-how-we-work-container">
        {/* Header */}
        <div className="sites-how-we-work-header">
          {/* Mobile Header */}
          <div className="sites-how-we-work-header-mobile">
            <div className="sites-how-we-work-header-top">
              <h2 className="sites-how-we-work-title">Как мы<br/>работаем</h2>
              <div className="sites-how-we-work-alien">
                <img src="https://www.figma.com/api/mcp/asset/27bf6e76-ae6d-4246-9ddb-ab770428f49b" alt="Alien" />
              </div>
            </div>
            <p className="sites-how-we-work-description sites-how-we-work-description-mobile">
              Мы выстроили прозрачный и эффективный процесс, позволяющий быстро запустить сайт и получать измеримый результат
            </p>
          </div>
          
          {/* Desktop Header */}
          <div className="sites-how-we-work-header-desktop">
            <div className="sites-how-we-work-alien">
              <img src="https://www.figma.com/api/mcp/asset/27bf6e76-ae6d-4246-9ddb-ab770428f49b" alt="Alien" />
            </div>
            <p className="sites-how-we-work-description sites-how-we-work-description-right">
              Мы выстроили прозрачный и эффективный процесс, позволяющий быстро запустить сайт и получать измеримый результат
            </p>
          </div>
          <h2 className="sites-how-we-work-title sites-how-we-work-title-desktop">Как мы работаем</h2>
        </div>
        
        {/* Mobile Slider */}
        <div className="sites-how-we-work-mobile-slider">
          <div className="sites-how-we-work-progress-mobile">
            <div className="sites-how-we-work-progress-track"></div>
            <div className="sites-how-we-work-progress-fill" style={{ width: `${((activeCard + 1) / steps.length) * 100}%` }}></div>
          </div>
          
          <div className="sites-how-we-work-slider-wrapper">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`sites-how-we-work-card ${index === activeCard ? 'active' : ''}`}
                onClick={() => setActiveCard(index)}
              >
                <div className="sites-how-we-work-card-content">
                  <h3 className="sites-how-we-work-card-title">{step.title}</h3>
                  <ul className="sites-how-we-work-card-list">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="sites-how-we-work-card-item">
                        <span className="sites-how-we-work-star"></span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="sites-how-we-work-card-number">{String(step.id).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
          
          <button className="sites-how-we-work-btn-mobile" onClick={openModal}>Оставить заявку</button>
        </div>
        
        {/* Desktop Roadmap */}
        <div className="sites-how-we-work-roadmap">
          {/* Progress Line */}
          <div className="sites-how-we-work-progress">
            <div className="sites-how-we-work-progress-line"></div>
            <div className="sites-how-we-work-progress-fill-desktop"></div>
          </div>
          
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`sites-how-we-work-step ${index % 2 === 0 ? 'sites-how-we-work-step-left' : 'sites-how-we-work-step-right'}`}
            >
              <div className="sites-how-we-work-step-card">
                <div className="sites-how-we-work-step-content">
                  <h3 className="sites-how-we-work-step-title">{step.title}</h3>
                  <ul className="sites-how-we-work-step-list">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="sites-how-we-work-step-item">
                        <span className="sites-how-we-work-star"></span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="sites-how-we-work-step-number">{String(step.id).padStart(2, '0')}</span>
              </div>
            </div>
          ))}
          
          {/* CTA Button */}
          <button className="sites-how-we-work-btn" onClick={openModal}>Оставить заявку</button>
          
          {/* Footnote */}
          <p className="sites-how-we-work-footnote">*Каждый этап может быть заказан отдельно</p>
        </div>
      </div>
    </section>
  );
}
