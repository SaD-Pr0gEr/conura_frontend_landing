'use client';

import { useEffect } from 'react';
import { useModal } from '@/context/ModalContext';

interface HowWeWorkStep {
  number: string;
  title: string;
  items: string[];
}

const steps: HowWeWorkStep[] = [
  {
    number: '01',
    title: 'Брифинг и цели',
    items: [
      'Собираем полную информацию о продукте/услуге',
      'Уточняем географию, целевую аудиторию',
      'Уточняем бюджет и ключевые KPI рекламной кампании',
    ],
  },
  {
    number: '02',
    title: 'Аудит текущей воронки',
    items: [
      'Анализируем сайт или лендинг, мессенджер-бот',
      'Изучаем профиль компании в соцсетях',
      'Анализируем точки касания с клиентом и результаты прошлых кампаний',
      'Определяем сильные и слабые звенья воронки продаж',
    ],
  },
  {
    number: '03',
    title: 'Разработка стратегии в Meta',
    items: [
      'На основе задачи выбираем тип кампании (Sales, Leads, Traffic, Engagement и др.)',
      'Формируем структуру (промокампании Advantage+, ремаркетинг, «прогрев» холодной аудитории)',
      'Определяем логические звенья воронки (Awareness → Consideration → Conversion)',
    ],
  },
  {
    number: '04',
    title: 'Настройка технической части',
    items: [
      'Устанавливаем Meta Pixel',
      'Настраиваем Conversions API для корректного сбора данных о конверсиях на сайте или в приложении',
      'При необходимости интегрируем CRM-систему для передачи «лидов» в рекламные кабинеты',
    ],
  },
  {
    number: '05',
    title: 'Запуск тестовых кампаний',
    items: [
      'Реализуем логику',
      'Подключаем API и при необходимости AI-модули',
    ],
  },
  {
    number: '06',
    title: 'Оптимизация и масштабирование',
    items: [
      'Анализируем первые результаты по ключевым метрикам (CPL, CPA, ROAS и др.)',
      'Отключаем неэффективные сегменты',
      'Усиливаем работающие связки',
      'Перераспределяем бюджеты в пользу лучших комбинаций',
      'Проводим A/B‑тесты креативов и аудитории',
    ],
  },
  {
    number: '07',
    title: 'Ремаркетинг и доработка воронки',
    items: [
      'На основе полученных данных подключаем таргетинг на пользователей, совершивших целевые действия (посетителей сайта, добавивших товар в корзину, видеопросмотрщиков, подписчиков)',
      'Тестируем дополнительные сценарии «догрева»: e‑mail/мессенджер‑рассылки, новые креативы для тёплой аудитории',
    ],
  },
  {
    number: '08',
    title: 'Отчетность и рекомендации',
    items: [
      'Готовим регулярные отчёты по эффективности кампаний',
      'Фиксируем выводы и даём рекомендации',
      'В отчётах указываем достигнутые показатели (CPL, CPA, число лидов/продаж)',
      'Даём советы по улучшению сайта/бота, посадочных страниц, креативов и дальнейших стратегических шагов',
    ],
  },
];

const StarIcon = () => (
  <svg className="target-how-we-work-star" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 0L7.35 4.65L12 6L7.35 7.35L6 12L4.65 7.35L0 6L4.65 4.65L6 0Z" fill="#3597E6"/>
  </svg>
);

export function TargetHowWeWorkSection() {
  const { openModal } = useModal();

  useEffect(() => {
    // Desktop scroll animation
    const observeSteps = () => {
      const stepsElements = document.querySelectorAll('.target-how-we-work-step');
      
      if (!stepsElements.length || window.innerWidth < 1024) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.3 });

      stepsElements.forEach(step => observer.observe(step));
      
      return () => {
        stepsElements.forEach(step => observer.unobserve(step));
      };
    };

    observeSteps();
  }, []);

  return (
    <section className="target-how-we-work-section" id="how-we-work">
      {/* Header */}
      <div className="target-how-we-work-header">
        <div className="target-how-we-work-heading">
          <h2 className="target-how-we-work-title">как мы работаем</h2>
          <img 
            src="https://www.figma.com/api/mcp/asset/2ab68a9d-a4e5-44bf-a351-bbecc95be720" 
            alt="" 
            className="target-how-we-work-alien"
          />
        </div>
        <p className="target-how-we-work-description">
          Мы выстроили эффективный процесс, позволяющий быстро запустить таргетинговую рекламу и привлечь клиентов
        </p>
      </div>

      {/* Mobile Progress Bar */}
      <div className="target-how-we-work-progress-mobile">
        <img 
          src="https://www.figma.com/api/mcp/asset/942482fb-7b0e-4c58-9678-1a56031e02b3" 
          alt="" 
          className="target-how-we-work-progress-img"
        />
      </div>

      {/* Mobile Slider */}
      <div className="target-how-we-work-slider">
        <div className="target-how-we-work-slider-track">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`target-how-we-work-card ${index === 0 ? 'active' : ''}`}
            >
              <div className="target-how-we-work-card-content">
                <h3 className="target-how-we-work-card-title">{step.title}</h3>
                <ul className="target-how-we-work-card-list">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <svg className="target-how-we-work-star" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 0L6.12 3.88L10 5L6.12 6.12L5 10L3.88 6.12L0 5L3.88 3.88L5 0Z" fill="#3597E6"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="target-how-we-work-card-number">{step.number}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Button */}
      <button className="target-how-we-work-btn-mobile" onClick={openModal}>
        Оставить заявку
      </button>

      {/* Desktop Roadmap */}
      <div className="target-how-we-work-roadmap">
        {/* Progress Line */}
        <div className="target-how-we-work-progress">
          <img 
            src="https://www.figma.com/api/mcp/asset/7b800abf-7bb7-4f2f-94cf-2c2dba5ac1b5" 
            alt="" 
            className="target-how-we-work-progress-line-img"
          />
        </div>

        {steps.map((step, index) => (
          <div 
            key={step.number}
            className={`target-how-we-work-step target-how-we-work-step-${index % 2 === 0 ? 'left' : 'right'}`}
            data-step={index + 1}
          >
            <div className="target-how-we-work-step-card">
              <div className="target-how-we-work-step-content">
                <h3 className="target-how-we-work-step-title">{step.title}</h3>
                <ul className="target-how-we-work-step-list">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <StarIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="target-how-we-work-step-number">{step.number}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Button */}
      <button className="target-how-we-work-btn" onClick={openModal}>
        ОСТАВИТЬ ЗАЯВКУ
      </button>
    </section>
  );
}
