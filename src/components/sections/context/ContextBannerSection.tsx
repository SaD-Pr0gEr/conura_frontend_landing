'use client';

import { useState, useEffect, useCallback } from 'react';
import { useModal } from '@/context/ModalContext';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  theme: 'light' | 'dark';
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://www.figma.com/api/mcp/asset/f80a8ece-0cfd-4c53-beea-81dee3004261',
    title: 'Контекстная реклама',
    subtitle: 'Получайте больше заявок с оптимальным бюджетом',
    theme: 'light',
  },
  {
    id: 2,
    image: 'https://www.figma.com/api/mcp/asset/87c23ed2-2a25-4a7f-ba95-83e19e1bb777',
    title: 'Настройка отслеживания конверсий',
    theme: 'light',
  },
  {
    id: 3,
    image: 'https://www.figma.com/api/mcp/asset/87c23ed2-2a25-4a7f-ba95-83e19e1bb777',
    title: 'Дашборд отчеты',
    subtitle: 'В режиме реального времени',
    theme: 'dark',
  },
];

export function ContextBannerSection() {
  const { openModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="banner-section service-banner-section">
      <div className="banner-slider" id="bannerSlider">
        <div className="banner-slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`banner-slide ${slide.theme === 'dark' ? 'banner-slide-dark' : ''} ${index === currentSlide ? 'active' : ''}`}
            >
              <picture>
                <source media="(min-width: 1024px)" srcSet={slide.image} />
                <img src={slide.image} alt={slide.title} className="banner-slide-image" />
              </picture>
              <div className="banner-slide-content">
                <h1 className="banner-slide-title">{slide.title}</h1>
                {slide.subtitle && <p className="banner-slide-subtitle">{slide.subtitle}</p>}
                <button
                  onClick={openModal}
                  className={`btn ${slide.theme === 'dark' ? 'btn-white' : 'btn-primary'} banner-cta`}
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Navigation */}
      <div className="banner-navigation">
        <div className="banner-pagination">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`banner-pagination-item ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div className="banner-pagination-progress" />
            </div>
          ))}
        </div>

        <div className="banner-arrows">
          <button className="banner-arrow banner-arrow-prev" aria-label="Предыдущий слайд" onClick={prevSlide}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M8 2L2 8L8 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="banner-arrow banner-arrow-next" aria-label="Следующий слайд" onClick={nextSlide}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M2 2L8 8L2 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
