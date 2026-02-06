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
    title: 'Таргетированная реклама в соц. сетях',
    desktopImage: 'https://www.figma.com/api/mcp/asset/0fac8edf-9b10-4ec6-9f74-fafc43715de8',
    mobileImage: 'https://www.figma.com/api/mcp/asset/e5c94ca3-4658-4235-a522-9ce0bc389c92',
  },
  {
    title: 'Продвижение в соцсетях',
    desktopImage: 'https://www.figma.com/api/mcp/asset/0fac8edf-9b10-4ec6-9f74-fafc43715de8',
    mobileImage: 'https://www.figma.com/api/mcp/asset/e5c94ca3-4658-4235-a522-9ce0bc389c92',
  },
];

export function TargetBannerSection() {
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
    <section className="banner-section target-banner-section">
      <div className="target-banner-slider" id="targetBannerSlider">
        <div className="target-banner-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`target-banner-slide ${index === currentSlide ? 'active' : ''}`}
              data-index={index}
            >
              <picture className="target-banner-picture">
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                <img
                  src={slide.desktopImage}
                  alt="Таргетированная реклама"
                  className="target-banner-image"
                />
              </picture>
              <div className="target-banner-content">
                <h1 className="target-banner-title">{slide.title}</h1>
                <button className="target-banner-btn" onClick={openModal}>
                  Оставить заявку
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="target-banner-navigation">
        <div className="target-banner-pagination">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`target-banner-pagination-item ${index === currentSlide ? 'active' : ''}`}
              data-slide={index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="target-banner-arrows">
          <button
            className="target-banner-arrow target-banner-arrow-prev"
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
            className="target-banner-arrow target-banner-arrow-next"
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
