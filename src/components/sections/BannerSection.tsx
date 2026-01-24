'use client';

import { useEffect, useState, useCallback } from 'react';
import { useModal } from '@/context/ModalContext';

const slides = [
  {
    id: 1,
    image: 'https://www.figma.com/api/mcp/asset/52c944e7-69b9-4545-9cec-e8d156db5a7b',
    title: 'Разработка IT-решений и контекстная реклама',
    theme: 'light',
    buttonClass: 'btn btn-primary banner-cta',
  },
  {
    id: 2,
    image: 'https://www.figma.com/api/mcp/asset/cea11992-57d1-4e28-a673-bbad49d308e6',
    title: 'IT решения: сайты, боты, интеграции',
    theme: 'dark',
    buttonClass: 'btn btn-white banner-cta',
  },
  {
    id: 3,
    image: 'https://www.figma.com/api/mcp/asset/f2f4bd9e-be30-4005-aada-6e9a468fce3f',
    title: 'Контекстная реклама: от А до Я',
    theme: 'dark',
    buttonClass: 'btn btn-primary banner-cta',
  },
];

export function BannerSection() {
  const { openModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
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
    <section className="banner-section">
      <div className="banner-slider" id="bannerSlider">
        {/* Slides Container */}
        <div className="banner-slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`banner-slide banner-slide-${slide.theme} ${index === currentSlide ? 'active' : ''}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="banner-slide-image"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding={index === 0 ? 'sync' : 'async'}
              />
              <div className="banner-content">
                <h1 className="banner-title">{slide.title}</h1>
                <button onClick={openModal} className={slide.buttonClass}>Оставить заявку</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation */}
      <div className="banner-navigation">
        {/* Pagination with progress */}
        <div className="banner-pagination">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`banner-pagination-item ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div className="banner-pagination-progress"></div>
            </div>
          ))}
        </div>
        
        {/* Arrows */}
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
