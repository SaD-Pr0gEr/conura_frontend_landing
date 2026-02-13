'use client';

import {useState, useEffect, useCallback} from 'react';
import {useModal} from '@/context/ModalContext';

interface Slide {
    id: number;
    title: string;
    subtitle?: string;
    theme: 'light' | 'dark';
}

const slides: Slide[] = [
    {
        id: 1,
        title: 'Автоматизация общения 24/7',
        theme: 'light',
    },
    {
        id: 2,
        title: 'Продажи и eCommerce',
        subtitle: 'Боты-каталоги принимают заказы и продвигают товары',
        theme: 'light',
    },
    {
        id: 3,
        title: 'Интеграции и кастомизация',
        subtitle: 'Боты-каталоги принимают заказы и продвигают товары',
        theme: 'dark',
    },
];

export function BotsBannerSection() {
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
                        className={`banner-7 banner-slide ${slides[0].theme === 'dark' ? 'banner-slide-dark' : ''} ${0 === currentSlide ? 'active' : ''}`}
                    >
                        <div className="banner-img">
                            <img className="clouds" src="/images/home/clouds.svg" alt="clouds"/>
                            <img className="robot" src="/images/bots/robot.png" alt="robot"/>
                            <img className="signal" src="/images/bots/signal.svg" alt="signal"/>
                            <div className="chat-bot-message-container scalable-img">
                                <div className="chat-bot-message">
                                    <p className="message-head">Чат-бот</p>
                                    <p className="message">Здравствуйте!</p>
                                    <p className="message">Чем могу помочь?</p>
                                </div>
                            </div>
                            <div className="client-message-1 scalable-img">
                                <p className="message-head">Клиент</p>
                                <p className="message">Как быстро доставите?</p>
                            </div>
                            <div className="client-message-2 scalable-img">
                                <p className="message-head">Клиент</p>
                                <p className="message">Сколько стоит услуга?</p>
                            </div>
                            <div className="client-message-3 scalable-img">
                                <p className="message-head">Клиент</p>
                                <p className="message">Есть вопрос</p>
                                <p className="message">по вашему продукту</p>
                            </div>
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
                        className={`banner-8 banner-slide ${slides[1].theme === 'dark' ? 'banner-slide-dark' : ''} ${1 === currentSlide ? 'active' : ''}`}
                    >
                        <div className="banner-img">
                            <img src="/images/bots/qr-code.png" alt="qr code" className="qr-code"/>
                            <img src="/images/bots/shop_arrow.svg" alt="shop arrow" className="shop-arrow scalable-img"/>
                            <img src="/images/bots/robot-2.png" alt="robot 2" className="robot-2"/>
                            <img src="/images/bots/box.png" alt="box" className="box"/>
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
                        className={`banner-9 banner-slide ${slides[2].theme === 'dark' ? 'banner-slide-dark' : ''} ${2 === currentSlide ? 'active' : ''}`}
                        style={{backgroundImage: "url('/images/home/white-stars-bg.png')"}}
                    >
                        <div className="banner-img">
                            <img src="/images/bots/arrows_3.png" alt="arrows 3" className="arrows_3"/>
                            <img src="/images/bots/robot_cosmo_man.png" alt="robot cosmo man" className="robot_cosmo_man"/>
                            <img src="/images/bots/tg_3d_icon.svg" alt="tg 3d icon" className="tg-icon scalable-img"/>
                            <img src="/images/bots/whatsapp_3d_icon.svg" alt="whatsapp 3d icon"
                                 className="whatsapp_3d_icon scalable-img"/>
                            <img src="/images/bots/excel_3d_icon.svg" alt="excel 3d icon" className="excel-3d-icon scalable-img"/>
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
