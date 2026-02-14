'use client';

import {useEffect, useRef, useState} from 'react';

const steps = [
    {
        id: 1,
        title: 'Осведомлённость',
        text: 'Вы становитесь видимыми для тысяч пользователей, которые ежедневно ищут товары и услуги онлайн. Например, 93% всех пользовательских начинаний в интернете – это обращение к поисковым системам',
    },
    {
        id: 2,
        title: 'Интерес',
        text: 'После привлечения внимания, сайт удерживает и развивает интерес потенциального клиента. Продуманный контент, качественные изображения, демонстрация кейсов и отзывов – всё это формирует доверие. Хороший сайт повышает процент заинтересованных посетителей, превращая случайных гостей в тёплые лиды',
    },
    {
        id: 3,
        title: 'Желание (оценка и решение)',
        text: 'На этапе выбора сайт помогает склонить клиента в вашу пользу. Он предоставляет полную информацию для принятия решения: сравнение продуктов, ответы на вопросы, условия доставки и оплаты. Кроме того, через сайт вы можете воздействовать на эмоции – акционные баннеры, счётчики сроков (Urgency) и персональные рекомендации усиливают желание купить именно у вас',
    },
    {
        id: 4,
        title: 'Действие',
        text: 'Сайт упрощает совершение целевого действия до одного клика. Онлайн-форма заказа или кнопка «Купить» всегда под рукой, контактный номер телефона кликабелен, есть всплывающее окно чата для вопросов. Как результат, барьеры для конверсии минимальны. Возможность оформить покупку сразу на сайте позволяет собрать продажи даже глубокой ночью',
    },
];

export function SitesFunnelSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeStep, setActiveStep] = useState(0);
    const [funnelFillPercent, setFunnelFillPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionHeight = sectionRef.current.offsetHeight;
            const windowHeight = window.innerHeight;

            const scrollProgress = Math.max(0, Math.min(1,
                (windowHeight - rect.top) / (sectionHeight + windowHeight * 0.3)
            ));

            setFunnelFillPercent(scrollProgress * 100);

            const step = Math.min(Math.floor(scrollProgress * steps.length), steps.length - 1);
            setActiveStep(Math.max(0, step));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="sites-funnel-section" ref={sectionRef}>
            <div className="sites-funnel-container">
                {/* Left: Funnel Graphic (Desktop) */}
                <div className="sites-funnel-graphic">
                    <div className="sites-funnel-wrapper">
                        {/* Back wall (gray empty funnel) */}
                        <img className="sites-funnel-back"
                             src="/images/sites/funnel.png" alt=""/>
                        {/* Front wall (blue filled funnel with ellipse, clipped based on scroll) */}
                        <div className="sites-funnel-front-wrapper"
                             style={{clipPath: `inset(0 0 ${100 - funnelFillPercent}% 0)`}}>
                            <img className="sites-funnel-front"
                                 src="/images/sites/full_funnel.png" alt=""/>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="sites-funnel-content">
                    <h2 className="sites-funnel-title">Влияние сайта на воронку продаж</h2>

                    {/* Mobile Funnel */}
                    <div className="sites-funnel-mobile">
                        <div className="sites-funnel-mobile-wrapper">
                            <svg className="sites-funnel-mobile-img" viewBox="0 0 80 88" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="mobileFunnelGradient" x1="40" y1="0" x2="40" y2="88"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#8B9CFF"/>
                                        <stop offset="100%" stopColor="#5D6BFF"/>
                                    </linearGradient>
                                </defs>
                                <path d="M80 0C80 0 80 7.4 40 7.4C0 7.4 0 0 0 0V7.4L35.4 72.8V88H44.6V72.8L80 7.4V0Z"
                                      fill="url(#mobileFunnelGradient)"/>
                            </svg>
                        </div>
                    </div>

                    <div className="sites-funnel-steps">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`sites-funnel-step ${index <= activeStep ? 'active' : ''}`}
                                data-step={step.id}
                            >
                                <h3 className="sites-funnel-step-title">{step.title}</h3>
                                <p className="sites-funnel-step-text">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
