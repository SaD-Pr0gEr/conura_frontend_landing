'use client';

import { useState, useEffect, useCallback } from 'react';
import { useModal } from '@/context/ModalContext';

const slides = [
  {
    id: 1,
    image: 'https://www.figma.com/api/mcp/asset/77ce5290-d3b1-47f2-b609-5b4badc442cb',
    title: 'Онлайн-магазины',
    subtitle: 'Разработка онлайн-магазинов с оплатой, каталогом и CRM-интеграцией',
  },
  {
    id: 2,
    image: 'https://www.figma.com/api/mcp/asset/77ce5290-d3b1-47f2-b609-5b4badc442cb',
    title: 'Лендинги',
    subtitle: 'Продающие одностраничники для вашего бизнеса',
  },
  {
    id: 3,
    image: 'https://www.figma.com/api/mcp/asset/77ce5290-d3b1-47f2-b609-5b4badc442cb',
    title: 'Корпоративные сайты',
    subtitle: 'Современные и представительные сайты для компаний',
  },
];

export function SitesBannerSection() {
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
    <section className="banner-section">
      <div className="banner-slider" id="bannerSlider">
        {/* Slides Container */}
        <div className="banner-slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`banner-slide banner-slide-dark ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.image} alt={slide.title} className="banner-slide-image" />
              <div className="banner-content">
                <h1 className="banner-title">{slide.title}</h1>
                <p className="banner-subtitle">{slide.subtitle}</p>
                <a href="#" className="btn btn-primary banner-cta" onClick={(e) => { e.preventDefault(); openModal(); }}>
                  Оставить заявку
                </a>
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
