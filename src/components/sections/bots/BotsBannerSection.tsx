'use client';

import { useState, useEffect, useCallback } from 'react';
import { useModal } from '@/context/ModalContext';

interface Slide {
  id: number;
  desktopImage: string;
  mobileImage: string;
  title: string;
  subtitle?: string;
  theme: 'light' | 'dark';
}

const slides: Slide[] = [
  {
    id: 1,
    desktopImage: 'https://www.figma.com/api/mcp/asset/2e9d56a2-bb23-42dc-a287-31964b175bce',
    mobileImage: 'https://www.figma.com/api/mcp/asset/8108d9dc-2afd-496d-a2f8-59895ea1148a',
    title: 'Автоматизация общения 24/7',
    theme: 'light',
  },
  {
    id: 2,
    desktopImage: 'https://www.figma.com/api/mcp/asset/50e1c45d-0e02-442c-9f72-2250da68261c',
    mobileImage: 'https://www.figma.com/api/mcp/asset/8356ac4f-916d-4407-8d33-16ca73bcaab9',
    title: 'Продажи и eCommerce',
    subtitle: 'Боты-каталоги принимают заказы и продвигают товары',
    theme: 'light',
  },
  {
    id: 3,
    desktopImage: 'https://www.figma.com/api/mcp/asset/1c7d1d4f-0292-4588-9d0b-dcfdd82bb60a',
    mobileImage: 'https://www.figma.com/api/mcp/asset/3ffec2d5-5420-4fe1-924f-dbbc5fb435a6',
    title: 'Интеграции и кастомизация',
    subtitle: 'Боты-каталоги принимают заказы и продвигают товары',
    theme: 'dark',
  },
];

export function BotsBannerSection() {
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
    <section className="banner-section bots-banner-section">
      <div className="bots-banner-slider" id="botsBannerSlider">
        <div className="bots-banner-slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`bots-banner-slide ${index === currentSlide ? 'active' : ''}`}
              data-index={index}
            >
              <div className={`bots-banner-bg bots-banner-bg-${index + 1}`}>
                <picture>
                  <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                  <img
                    src={slide.desktopImage}
                    alt={slide.title}
                    className="bots-banner-image"
                  />
                </picture>
              </div>
              <div className={`bots-banner-content ${slide.subtitle ? 'bots-banner-content-with-desc' : ''}`}>
                {slide.subtitle ? (
                  <div className="bots-banner-text">
                    <h1 className="bots-banner-title">{slide.title}</h1>
                    <p className="bots-banner-subtitle">{slide.subtitle}</p>
                  </div>
                ) : (
                  <h1 className="bots-banner-title">{slide.title}</h1>
                )}
                <button
                  onClick={openModal}
                  className={`btn ${slide.theme === 'dark' ? 'btn-white' : 'btn-primary'} bots-banner-btn`}
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Navigation */}
      <div className="bots-banner-navigation">
        <div className="bots-banner-pagination">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`bots-banner-pagination-item ${index === currentSlide ? 'active' : ''}`}
              data-slide={index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="bots-banner-arrows">
          <button
            className="bots-banner-arrow bots-banner-arrow-prev"
            aria-label="Предыдущий слайд"
            onClick={prevSlide}
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M8 2L2 8L8 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="bots-banner-arrow bots-banner-arrow-next"
            aria-label="Следующий слайд"
            onClick={nextSlide}
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M2 2L8 8L2 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
