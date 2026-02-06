'use client';

import {useEffect, useState, useCallback} from 'react';
import {useModal} from '@/context/ModalContext';

const slides = [
    {
        id: 1,
        title: 'Разработка IT-решений и контекстная реклама',
        theme: 'light',
        buttonClass: 'btn btn-primary banner-cta',
    },
    // {
    //     id: 2,
    //     title: 'IT решения: сайты, боты, интеграции',
    //     theme: 'dark',
    //     buttonClass: 'btn btn-white banner-cta',
    // },
    // {
    //     id: 3,
    //     title: 'Контекстная реклама: от А до Я',
    //     theme: 'dark',
    //     buttonClass: 'btn btn-primary banner-cta',
    // },
];

export function BannerSection() {
    const {openModal} = useModal();
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
                    <div
                        className={`banner-1 banner-slide banner-slide-${slides[0].theme} ${0 === currentSlide ? 'active' : ''}`}
                    >
                        <div className="banner-img">
                            <img className="left-top-fragment" src="/images/home/banner_1_left_top.svg" alt="left top fragment"/>
                            <img className="lightning-fragment" src="/images/home/lighting.svg" alt="light top fragment"/>
                            <img className="a-logo-fragment" src="/images/a-logo.svg" alt="a logo fragment"/>
                            <img className="it-logo-fragment" src="/images/it-park-logo.svg" alt="it park logo"/>
                            <img className="human-ufo-fragment" src="/images/human-and-ufo.png" alt="human and ufo fragment"/>
                        </div>
                        <div className="banner-content">
                            <h1 className="banner-title">{slides[0].title}</h1>
                            <button onClick={openModal} className={slides[0].buttonClass}>Оставить заявку</button>
                        </div>
                    </div>
                    {/*<div*/}
                    {/*    className={`banner-slide banner-slide-${slides[1].theme} ${1 === currentSlide ? 'active' : ''}`}*/}
                    {/*>*/}
                    {/*    <img*/}
                    {/*        alt={slides[1].title}*/}
                    {/*        className="banner-slide-image"*/}
                    {/*        loading='lazy'*/}
                    {/*        decoding='async'*/}
                    {/*    />*/}
                    {/*    <div className="banner-content">*/}
                    {/*        <h1 className="banner-title">{slides[1].title}</h1>*/}
                    {/*        <button onClick={openModal} className={slides[1].buttonClass}>Оставить заявку</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    className={`banner-slide banner-slide-${slides[2].theme} ${2 === currentSlide ? 'active' : ''}`}*/}
                    {/*>*/}
                    {/*    <img*/}
                    {/*        alt={slides[2].title}*/}
                    {/*        className="banner-slide-image"*/}
                    {/*        loading='lazy'*/}
                    {/*        decoding='async'*/}
                    {/*    />*/}
                    {/*    <div className="banner-content">*/}
                    {/*        <h1 className="banner-title">{slides[2].title}</h1>*/}
                    {/*        <button onClick={openModal} className={slides[2].buttonClass}>Оставить заявку</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
