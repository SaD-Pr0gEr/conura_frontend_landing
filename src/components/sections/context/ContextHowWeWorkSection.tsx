'use client';

import {useState, useRef, useEffect} from 'react';
import {useModal} from '@/context/ModalContext';

const workSteps = [
    {
        id: 1,
        title: 'Анализ и планирование',
        items: [
            'Изучаем ваш бизнес, продукт и целевую аудиторию',
            'Проводим аудит сайта, прошлых кампаний и конкурентов',
            'На основе данных формируем стратегию и план действий с учётом особенностей вашей ниши',
            'Определяем ключевые точки контакта с клиентом и каналы, где реклама принесёт максимальный эффект',
        ],
    },
    {
        id: 2,
        title: 'Настройка конверсий',
        items: [
            'Совместно определяем цели рекламы: охват, заявки, продажи, звонки или трафик',
            'Устанавливаем измеримые KPI (CPA, ROI, ROAS) и настраиваем корректный трекинг всех конверсий через Google Tag Manager и другие системы',
        ],
    },
    {
        id: 3,
        title: 'Семантика',
        items: [
            'Формируем семантическое ядро из релевантных запросов',
            'Проводим кластеризацию, добавляем минус-слова и выстраиваем логичную структуру кампаний',
        ],
    },
    {
        id: 4,
        title: 'Настройка и запуск',
        items: [
            'Создаём и тестируем рекламные объявления на основе собранной семантики и УТП вашего бизнеса',
            'Готовим несколько вариантов заголовков и описаний',
            'Проводим техническую настройку кампаний: таргетинг, расписание показов, подключение аналитики',
            'После проверки и модерации запускаем рекламу, контролируем корректность трекинга и первые результаты',
        ],
    },
    {
        id: 5,
        title: 'Отчётность',
        items: [
            'Все результаты доступны через кастомные дашборды, где вы можете видеть ключевые метрики и эффективности рекламы в виде диаграмм и графиков',
            'Предоставляем ежемесячные отчёты и рекомендации по улучшению',
        ],
    },
    {
        id: 6,
        title: 'Оптимизация',
        items: [
            'Анализируем данные, перераспределяем бюджеты, отключаем неэффективные связки, тестируем новые креативы и стратегии ставок',
            'Постоянно работаем над снижением стоимости заявки и ростом количества конверсий',
            'Следим за атрибуцией, чтобы вы точно понимали вклад каждого канала в общий результат',
        ],
    },
];

export function ContextHowWeWorkSection() {
    const {openModal} = useModal();
    const sliderRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleScroll = () => {
            const scrollLeft = slider.scrollLeft;
            const scrollWidth = slider.scrollWidth - slider.clientWidth;
            const newProgress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
            setProgress(newProgress);
        };

        slider.addEventListener('scroll', handleScroll);
        return () => slider.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="context-how-we-work-section">
            <div className="context-how-we-work-container">
                {/* Heading */}
                <div className="context-how-we-work-header">
                    {/* Mobile: Title + Alien row */}
                    <div className="context-how-we-work-header-top context-how-we-work-header-mobile">
                        <h2 className="context-how-we-work-title">как мы работаем</h2>
                        <img
                            src="/images/alien_head_white.svg"
                            alt=""
                            className="context-how-we-work-alien"
                        />
                    </div>
                    {/* Desktop: Alien left + Description right */}
                    <div className="context-how-we-work-header-top context-how-we-work-header-desktop">
                        <img
                            src="/images/alien_head_white.svg"
                            alt=""
                            className="context-how-we-work-alien context-how-we-work-alien-left"
                        />
                        <p className="context-how-we-work-description context-how-we-work-description-right">
                            Мы выстроили прозрачный и эффективный процесс, позволяющий быстро запустить рекламу и
                            получать измеримый
                            результат
                        </p>
                    </div>
                    {/* Desktop: Title */}
                    <h2 className="context-how-we-work-title context-how-we-work-title-desktop">как мы работаем</h2>
                    {/* Mobile: Description */}
                    <p className="context-how-we-work-description context-how-we-work-description-mobile">
                        Мы выстроили прозрачный и эффективный процесс, позволяющий быстро запустить рекламу и получать
                        измеримый
                        результат
                    </p>
                </div>

                {/* Mobile Slider */}
                <div className="context-how-we-work-mobile-slider">
                    <div className="context-how-we-work-progress-mobile">
                        <div className="context-how-we-work-progress-track"></div>
                        <div className="context-how-we-work-progress-fill" style={{width: `${progress}%`}}></div>
                    </div>
                    <div className="context-how-we-work-slider-wrapper" ref={sliderRef}>
                        <div className="context-how-we-work-slider-track">
                            {workSteps.map((step) => (
                                <div key={step.id} className="context-how-we-work-card">
                                    <div className="context-how-we-work-card-content">
                                        <h3 className="context-how-we-work-card-title">{step.title}</h3>
                                        <ul className="context-how-we-work-card-list">
                                            {step.items.map((item, idx) => (
                                                <li key={idx} className="context-how-we-work-card-item">
                                                    <span className="context-how-we-work-star"></span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <span className="context-how-we-work-card-number">0{step.id}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="context-how-we-work-btn-mobile" onClick={openModal}>
                        Оставить заявку
                    </button>
                </div>

                {/* Desktop Roadmap */}
                <div className="context-how-we-work-roadmap">
                    {/* Progress Line */}
                    <div className="context-how-we-work-progress">
                        <div className="context-how-we-work-progress-line"></div>
                        <div className="context-how-we-work-progress-fill-desktop"></div>
                    </div>

                    {workSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`context-how-we-work-step context-how-we-work-step-${index % 2 === 0 ? 'left' : 'right'}`}
                            data-step={step.id}
                        >
                            <div className="context-how-we-work-step-card">
                                <div className="context-how-we-work-step-content">
                                    <h3 className="context-how-we-work-step-title">{step.title}</h3>
                                    <ul className="context-how-we-work-step-list">
                                        {step.items.map((item, idx) => (
                                            <li key={idx} className="context-how-we-work-step-item">
                                                <span className="context-how-we-work-star"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <span className="context-how-we-work-step-number">0{step.id}</span>
                            </div>
                        </div>
                    ))}

                    {/* CTA Button */}
                    <button className="context-how-we-work-btn-desktop" onClick={openModal}>
                        <span>ОСТАВИТЬ</span>
                        <span>ЗАЯВКУ</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
