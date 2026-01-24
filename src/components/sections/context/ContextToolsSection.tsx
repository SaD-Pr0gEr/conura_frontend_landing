'use client';

import { useRef, useState } from 'react';

const tools = [
  {
    id: 1,
    icon: 'https://www.figma.com/api/mcp/asset/285fbd7b-358f-4010-838a-f519d32b0143',
    title: 'Google Ads',
    description: 'Основная платформа для запуска и управления всеми типами рекламы в экосистеме Google',
  },
  {
    id: 2,
    icon: 'https://www.figma.com/api/mcp/asset/ed81564c-e72c-4679-8cac-56797fb5d872',
    title: 'Google Tag Manager',
    description: 'Инструмент для быстрого подключения и управления тегами конверсий без вмешательства разработчиков',
  },
  {
    id: 3,
    icon: 'https://www.figma.com/api/mcp/asset/7aa89061-66f0-4590-a6ea-e0fe2e40096f',
    title: 'Google Merchant Center',
    description:
      'Хранилище товарного фида интернет-магазина для показа актуальных товаров с фото и ценой в рекламе Google',
  },
  {
    id: 4,
    icon: 'https://www.figma.com/api/mcp/asset/57f1bb9f-991d-4980-abad-4fbc109fea78',
    title: 'Яндекс.Директ',
    description:
      'Система для размещения рекламы в поиске и на сайтах экосистемы Яндекса, включая РСЯ и Яндекс.Карты',
  },
  {
    id: 5,
    icon: 'https://www.figma.com/api/mcp/asset/849c5e85-3b46-4ff0-a87e-d1af0e807ff0',
    title: 'Яндекс.Метрика',
    description:
      'Аналитика, которая показывает поведение пользователей, конверсии и эффективность рекламы в Яндексе и на сайте',
  },
];

export function ContextToolsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [, setScrollPosition] = useState(0);

  const scrollSlider = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const cardWidth = slider.querySelector('.tools-card')?.clientWidth || 300;
    const gap = 24;
    const scrollAmount = direction === 'next' ? cardWidth + gap : -(cardWidth + gap);
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setScrollPosition(slider.scrollLeft + scrollAmount);
  };

  return (
    <section className="tools-section" id="tools">
      <div className="tools-container">
        <div className="tools-header">
          <h2 className="tools-title">Инструменты</h2>
          <div className="tools-arrows">
            <button
              className="tools-arrow tools-arrow-prev"
              aria-label="Предыдущий слайд"
              onClick={() => scrollSlider('prev')}
            >
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path
                  d="M8 2L2 8L8 14"
                  stroke="#101010"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="tools-arrow tools-arrow-next"
              aria-label="Следующий слайд"
              onClick={() => scrollSlider('next')}
            >
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path
                  d="M2 2L8 8L2 14"
                  stroke="#101010"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="tools-slider-wrapper" ref={sliderRef}>
          <div className="tools-slider-track">
            {tools.map((tool) => (
              <div key={tool.id} className="tools-card">
                <img src={tool.icon} alt={tool.title} className="tools-card-icon" />
                <div className="tools-card-content">
                  <h3 className="tools-card-title">{tool.title}</h3>
                  <p className="tools-card-description">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="tools-arrows-mobile">
          <button
            className="tools-arrow tools-arrow-prev"
            aria-label="Предыдущий слайд"
            onClick={() => scrollSlider('prev')}
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M8 2L2 8L8 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="tools-arrow tools-arrow-next"
            aria-label="Следующий слайд"
            onClick={() => scrollSlider('next')}
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M2 2L8 8L2 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
