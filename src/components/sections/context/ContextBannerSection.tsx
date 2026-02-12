'use client';

import {useState, useEffect, useCallback} from 'react';
import {useModal} from '@/context/ModalContext';

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
    const {openModal} = useModal();
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
                    <div
                        className={`banner-4 banner-slide ${slides[0].theme === 'dark' ? 'banner-slide-dark' : ''} ${0 === currentSlide ? 'active' : ''}`}
                    >
                        <div className="banner-img">
                            <img className="left-top-fragment" src="/images/context/top_left_banner4_fragment.svg"
                                 alt="left-top-fragment"/>
                            <img className="google_search" src="/images/context/google_search.svg" alt="google_search"/>
                            <img className="yellow_arrow_logo scalable-img" src="/images/yellow-arrow-logo.svg"
                                 alt="yellow_arrow_logo"/>
                            <img className="ufoman_megafon" src="/images/context/ufoman_megafon.png"
                                 alt="ufoman_megafon"/>
                            <img className="a_logo scalable-img" src="/images/a-logo.svg" alt="a_logo"/>
                            <img className="green_triangle scalable-img" src="/images/context/green_triangle.svg"
                                 alt="green_triangle"/>
                        </div>
                        <div className="banner-slide-content">
                            <h1 className="banner-slide-title">{slides[0].title}</h1>
                            {slides[0].subtitle && <p className="banner-slide-subtitle">{slides[0].subtitle}</p>}
                            <button
                                onClick={openModal}
                                className={`btn ${slides[0].theme === 'dark' ? 'btn-white' : 'btn-primary'} banner-cta`}
                            >
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                    <div
                        className={`banner-5 banner-slide ${slides[1].theme === 'dark' ? 'banner-slide-dark' : ''} ${1 === currentSlide ? 'active' : ''}`}
                    >
                        <div className="banner-img">
                            <img className="top_left_5_fragment" src="/images/context/top_left_5_fragment.svg"
                                 alt="top_left_5_fragment"/>
                            <img className="banner_5_square scalable-img" src="/images/home/square.svg"
                                 alt="banner_5_square"/>
                            <img className="cosmo-man" src="/images/cosmo_man.png" alt="cosmo-man"/>
                            <img className="banner_5_left_top" src="/images/home/banner_1_left_top.svg"
                                 alt="banner_5_left_top"/>
                            <img className="banner_5_screw scalable-img" src="/images/context/screw.svg"
                                 alt="banner_5_screw"/>
                        </div>
                        <div className="banner-slide-content">
                            <h1 className="banner-slide-title">{slides[1].title}</h1>
                            {slides[1].subtitle && <p className="banner-slide-subtitle">{slides[1].subtitle}</p>}
                            <button
                                onClick={openModal}
                                className={`btn ${slides[1].theme === 'dark' ? 'btn-white' : 'btn-primary'} banner-cta`}
                            >
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                    <div
                        className={`banner-6 banner-slide ${slides[2].theme === 'dark' ? 'banner-slide-dark' : ''} ${2 === currentSlide ? 'active' : ''}`}
                    >
                        <div className="banner-img">
                            <img src="/images/home/banner_3_left_top.svg" alt="banner_3_left_top"
                                 className="banner_3_left_top"/>
                            <img src="/images/context/dots_9.svg" alt="dots_9" className="dots_9 scalable-img"/>
                            <img src="/images/context/eight_logo.svg" alt="eight_logo" className="eight_logo scalable-img"/>
                            <img src="/images/context/ufoman_cosmo_man_pc.png" alt="ufoman_cosmo_man_pc"
                                 className="ufoman_cosmo_man_pc"/>
                        </div>
                        <div className="banner-slide-content">
                            <h1 className="banner-slide-title">{slides[2].title}</h1>
                            {slides[2].subtitle && <p className="banner-slide-subtitle">{slides[2].subtitle}</p>}
                            <button
                                onClick={openModal}
                                className={`btn ${slides[2].theme === 'dark' ? 'btn-white' : 'btn-primary'} banner-cta`}
                            >
                                Оставить заявку
                            </button>
                        </div>
                    </div>
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
                            <div className="banner-pagination-progress"/>
                        </div>
                    ))}
                </div>

                <div className="banner-arrows">
                    <button className="banner-arrow banner-arrow-prev" aria-label="Предыдущий слайд"
                            onClick={prevSlide}>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                            <path d="M8 2L2 8L8 14" stroke="#101010" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button className="banner-arrow banner-arrow-next" aria-label="Следующий слайд" onClick={nextSlide}>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                            <path d="M2 2L8 8L2 14" stroke="#101010" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
