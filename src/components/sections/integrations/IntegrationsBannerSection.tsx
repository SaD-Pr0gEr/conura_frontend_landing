'use client';

import { useState, useEffect, useCallback } from 'react';
import { useModal } from '@/context/ModalContext';

interface Slide {
  title: string;
  desktopImage: string;
  mobileImage: string;
}

const slides: Slide[] = [
  {
    title: 'Единая экосистема: соединяем сервисы, ускоряем работу',
    desktopImage: 'https://www.figma.com/api/mcp/asset/1c61a673-0c44-49fb-a5a1-10d619a7f032',
    mobileImage: 'https://www.figma.com/api/mcp/asset/4f3fbfe4-a89b-4604-9a98-ae69d419c796',
  },
  {
    title: 'Автоматизация бизнес-процессов: от заявки до результата',
    desktopImage: 'https://www.figma.com/api/mcp/asset/1c61a673-0c44-49fb-a5a1-10d619a7f032',
    mobileImage: 'https://www.figma.com/api/mcp/asset/4f3fbfe4-a89b-4604-9a98-ae69d419c796',
  },
];

export function IntegrationsBannerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openModal } = useModal();

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="integrations-banner-section">
      <div className="integrations-banner-slider" id="integrationsBannerSlider">
        <div className="integrations-banner-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`integrations-banner-slide ${index === currentSlide ? 'active' : ''}`}
              data-index={index}
            >
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                <img
                  src={slide.desktopImage}
                  alt="Интеграции"
                  className="integrations-banner-image"
                />
              </picture>
              <div className="integrations-banner-content">
                <h1 className="integrations-banner-title">{slide.title}</h1>
                <button className="integrations-banner-btn" onClick={openModal}>
                  Оставить заявку
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="integrations-banner-navigation">
        <div className="integrations-banner-pagination">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`integrations-banner-pagination-item ${index === currentSlide ? 'active' : ''}`}
              data-slide={index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="integrations-banner-arrows">
          <button
            className="integrations-banner-arrow integrations-banner-arrow-prev"
            aria-label="Предыдущий слайд"
            onClick={prevSlide}
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
            className="integrations-banner-arrow integrations-banner-arrow-next"
            aria-label="Следующий слайд"
            onClick={nextSlide}
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
    </section>
  );
}
