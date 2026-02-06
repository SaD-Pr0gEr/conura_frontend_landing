'use client';

import { useRef, useEffect, useState } from 'react';
import { useModal } from '@/context/ModalContext';

interface WorkStep {
  number: string;
  title: string;
  items: string[];
}

const steps: WorkStep[] = [
  {
    number: '01',
    title: 'Брифинг и цели',
    items: ['Определяем задачи, аудиторию и ключевые метрики'],
  },
  {
    number: '02',
    title: 'Анализ и сценарии',
    items: ['Формируем требования', 'Разработка use cases', 'Разработка user stories'],
  },
  {
    number: '03',
    title: 'Дизайн диалогов',
    items: ['Разработка структуры и логики', 'Создаем прототипы и первичный функционал'],
  },
  {
    number: '04',
    title: 'Архитектура и интеграции',
    items: ['Выбираем платформу и настраиваем связь с CRM, ERP, платежами'],
  },
  {
    number: '05',
    title: 'Разработка',
    items: ['Реализуем логику', 'Подключаем API и при необходимости AI-модули'],
  },
  {
    number: '06',
    title: 'Тестирование',
    items: ['Проверяем сценарии', 'Исправляем ошибки', 'Проводим нагрузочные тесты'],
  },
  {
    number: '07',
    title: 'Деплой',
    items: ['Публикуем бота', 'Настраиваем окружение', 'Проводим финальные проверки'],
  },
  {
    number: '08',
    title: 'Поддержка',
    items: ['Обновляем и анализируем метрики', 'Улучшаем сценарии', 'Обучаем AI'],
  },
];

export function BotsHowWeWorkSection() {
  const { openModal } = useModal();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const scrollWidth = slider.scrollWidth - slider.clientWidth;
      const newProgress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setProgress(newProgress);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bots-how-we-work-section">
      <div className="bots-how-we-work-container">
        {/* Heading */}
        <div className="bots-how-we-work-header">
          {/* Mobile: Title + Alien row */}
          <div className="bots-how-we-work-header-top bots-how-we-work-header-mobile">
            <h2 className="bots-how-we-work-title">как мы работаем</h2>
            <img
              src="https://www.figma.com/api/mcp/asset/3115fd5e-4de6-442d-9db0-fb7af3baa7cf"
              alt=""
              className="bots-how-we-work-alien"
            />
          </div>
          {/* Desktop: Alien left + Description right */}
          <div className="bots-how-we-work-header-top bots-how-we-work-header-desktop">
            <img
              src="https://www.figma.com/api/mcp/asset/3115fd5e-4de6-442d-9db0-fb7af3baa7cf"
              alt=""
              className="bots-how-we-work-alien bots-how-we-work-alien-left"
            />
            <p className="bots-how-we-work-description bots-how-we-work-description-right">
              Мы выстроили прозрачный и эффективный процесс, позволяющий быстро запустить чат-бота и получать измеримый результат
            </p>
          </div>
          {/* Desktop: Title */}
          <h2 className="bots-how-we-work-title bots-how-we-work-title-desktop">как мы работаем</h2>
          {/* Mobile: Description */}
          <p className="bots-how-we-work-description bots-how-we-work-description-mobile">
            Мы выстроили прозрачный и эффективный процесс, позволяющий быстро запустить чат-бота и получать измеримый результат
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="bots-how-we-work-mobile-slider">
          <div className="bots-how-we-work-progress-mobile">
            <div className="bots-how-we-work-progress-track" />
            <div className="bots-how-we-work-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="bots-how-we-work-slider-wrapper" ref={sliderRef}>
            <div className="bots-how-we-work-slider-track">
              {steps.map((step, index) => (
                <div key={index} className="bots-how-we-work-card">
                  <div className="bots-how-we-work-card-content">
                    <h3 className="bots-how-we-work-card-title">{step.title}</h3>
                    <ul className="bots-how-we-work-card-list">
                      {step.items.map((item, i) => (
                        <li key={i} className="bots-how-we-work-card-item">
                          <span className="bots-how-we-work-star" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="bots-how-we-work-card-number">{step.number}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="bots-how-we-work-btn-mobile open-modal" onClick={openModal}>
            Оставить заявку
          </button>
        </div>

        {/* Desktop Roadmap */}
        <div className="bots-how-we-work-roadmap">
          {/* Progress Line */}
          <div className="bots-how-we-work-progress">
            <div className="bots-how-we-work-progress-line" />
            <div className="bots-how-we-work-progress-fill-desktop" />
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`bots-how-we-work-step ${index % 2 === 0 ? 'bots-how-we-work-step-left' : 'bots-how-we-work-step-right'}`}
              data-step={index + 1}
            >
              <div className="bots-how-we-work-step-card">
                <div className="bots-how-we-work-step-content">
                  <h3 className="bots-how-we-work-step-title">{step.title}</h3>
                  <ul className="bots-how-we-work-step-list">
                    {step.items.map((item, i) => (
                      <li key={i} className="bots-how-we-work-step-item">
                        <span className="bots-how-we-work-star" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="bots-how-we-work-step-number">{step.number}</span>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <button className="bots-how-we-work-btn open-modal" onClick={openModal}>
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>
    </section>
  );
}
