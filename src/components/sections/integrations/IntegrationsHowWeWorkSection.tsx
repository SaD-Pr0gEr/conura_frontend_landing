'use client';

import { useEffect, useRef, useState } from 'react';
import { useModal } from '@/context/ModalContext';

interface Step {
  title: string;
  items: string[];
}

const steps: Step[] = [
  {
    title: 'Анализ потребностей и планирование',
    items: [
      'Изучение текущей ИТ-инфраструктуры и используемых систем',
      'Сбор проблем, задач и бизнес-целей',
      'Аудит бизнес-процессов, подлежащих интеграции',
      'Оценка технических возможностей (API, форматы данных)',
      'Проработка архитектурного решения',
      'Формирование и согласование scope работ',
    ],
  },
  {
    title: 'Проектирование и разработка',
    items: [
      'Проектирование интеграционной архитектуры',
      'Разработка схемы обмена данными между системами',
      'Определение форматов сообщений и правил трансформации',
      'Настройка соединений (API, базы данных, FTP)',
      'Разработка кода, скриптов или middleware',
      'Настройка логирования и обработки ошибок',
    ],
  },
  {
    title: 'Тестирование и пилотный запуск',
    items: [
      'Тестирование в изолированном тестовом окружении',
      'Пилотный запуск на ограниченном объёме реальных данных',
      'Проверка всех сценариев обмена',
      'Тестирование устойчивости при недоступности систем',
      'Нагрузочное тестирование',
      'Доработка решения по результатам тестов',
    ],
  },
  {
    title: 'Внедрение в работу',
    items: [
      'Подготовка к промышленному запуску',
      'Согласование времени и порядка внедрения',
      'Запуск интеграции без остановки или с минимальным простоем',
      'Перевод решения в промышленную эксплуатацию',
      'Автоматизация процессов, ранее выполнявшихся вручную',
    ],
  },
  {
    title: 'Обучение и документация',
    items: [
      'Обучение пользователей (при изменениях в интерфейсах)',
      'Подготовка пользовательских инструкций',
      'Передача технической документации ИТ-команде',
      'Описание архитектуры, подключений и структур данных',
    ],
  },
  {
    title: 'Поддержка и развитие',
    items: [
      'Гарантийная поддержка интеграции',
      'Мониторинг стабильности работы',
      'Оперативное реагирование на инциденты',
      'Масштабирование и развитие решения',
      'Подключение новых систем и расширение функциональности',
    ],
  },
];

export function IntegrationsHowWeWorkSection() {
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress through section
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight * 0.5)));

      // Show steps based on progress
      const stepsToShow = Math.floor(progress * (steps.length + 1));
      const newVisibleSteps = [];
      for (let i = 0; i < stepsToShow && i < steps.length; i++) {
        newVisibleSteps.push(i);
      }
      setVisibleSteps(newVisibleSteps);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="integrations-how-we-work-section" id="how-we-work" ref={sectionRef}>
      <div className="integrations-how-we-work-container">
        {/* Heading */}
        <div className="integrations-how-we-work-header">
          {/* Mobile: Title + Alien row */}
          <div className="integrations-how-we-work-header-top integrations-how-we-work-header-mobile">
            <h2 className="integrations-how-we-work-title">как мы работаем</h2>
            <img
              src="https://www.figma.com/api/mcp/asset/18f2aa0c-2b00-40e9-bd4c-0842ef524840"
              alt=""
              className="integrations-how-we-work-alien"
            />
          </div>
          {/* Desktop: Alien left + Description right */}
          <div className="integrations-how-we-work-header-top integrations-how-we-work-header-desktop">
            <img
              src="https://www.figma.com/api/mcp/asset/ef39d520-f769-449f-a367-7a18b45e5fd7"
              alt=""
              className="integrations-how-we-work-alien integrations-how-we-work-alien-left"
            />
            <p className="integrations-how-we-work-description integrations-how-we-work-description-right">
              Мы выстроили эффективный процесс интеграции, позволяющий быстро связать системы, и
              получить измеримый результат
            </p>
          </div>
          {/* Desktop: Title */}
          <h2 className="integrations-how-we-work-title integrations-how-we-work-title-desktop">
            как мы работаем
          </h2>
          {/* Mobile: Description */}
          <p className="integrations-how-we-work-description integrations-how-we-work-description-mobile">
            Мы выстроили эффективный процесс интеграции, позволяющий быстро связать системы, и
            получить измеримый результат
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="integrations-how-we-work-mobile-slider">
          <div className="integrations-how-we-work-progress-mobile">
            <div className="integrations-how-we-work-progress-track"></div>
            <div className="integrations-how-we-work-progress-fill"></div>
          </div>
          <div className="integrations-how-we-work-slider-wrapper">
            <div className="integrations-how-we-work-slider-track">
              {steps.map((step, index) => (
                <div key={index} className="integrations-how-we-work-card">
                  <div className="integrations-how-we-work-card-content">
                    <h3 className="integrations-how-we-work-card-title">{step.title}</h3>
                    <ul className="integrations-how-we-work-card-list">
                      {step.items.slice(0, 3).map((item, itemIndex) => (
                        <li key={itemIndex} className="integrations-how-we-work-card-item">
                          <span className="integrations-how-we-work-star"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="integrations-how-we-work-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button className="integrations-how-we-work-btn-mobile" onClick={openModal}>
            Оставить заявку
          </button>
        </div>

        {/* Desktop Roadmap */}
        <div className="integrations-how-we-work-roadmap">
          {/* Progress Line */}
          <div className="integrations-how-we-work-progress">
            <div className="integrations-how-we-work-progress-line"></div>
            <div
              className="integrations-how-we-work-progress-fill-desktop"
              style={{ height: `${(visibleSteps.length / steps.length) * 100}%` }}
            ></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`integrations-how-we-work-step ${
                index % 2 === 0
                  ? 'integrations-how-we-work-step-left'
                  : 'integrations-how-we-work-step-right'
              } ${visibleSteps.includes(index) ? 'visible' : ''}`}
              data-step={index + 1}
            >
              <div className="integrations-how-we-work-step-card">
                <div className="integrations-how-we-work-step-content">
                  <h3 className="integrations-how-we-work-step-title">{step.title}</h3>
                  <ul className="integrations-how-we-work-step-list">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="integrations-how-we-work-step-item">
                        <span className="integrations-how-we-work-star"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="integrations-how-we-work-step-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <button className="integrations-how-we-work-btn" onClick={openModal}>
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>
    </section>
  );
}
