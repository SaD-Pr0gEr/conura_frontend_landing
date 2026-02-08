'use client';

import {useState} from 'react';

const steps = [
    {
        id: 0,
        title: 'Консультация',
        description: 'Обсуждаем задачу, определяем цели и возможные направления решения',
        icon: '/images/home/hww_1_section.png',
    },
    {
        id: 1,
        title: 'Заключение договора',
        description: 'Фиксируем объём работ, сроки и ответственность сторон',
        icon: '/images/home/hww_2_section.png',
    },
    {
        id: 2,
        title: 'Анализ и стратегия',
        description: 'Изучаем исходные данные, формируем план действий и подход к реализации',
        icon: '/images/home/hww_3_section.png',
    },
    {
        id: 3,
        title: 'Реализация проекта',
        description: 'От технической части до дизайна и контента',
        icon: '/images/home/hww_4_section.png',
    },
    {
        id: 4,
        title: 'Запуск и внедрение',
        description: 'Вводим решение в работу, обеспечиваем корректный старт и первые результаты',
        icon: '/images/home/hww_5_section.png',
    },
    {
        id: 5,
        title: 'Поддержка',
        description: 'Сопровождаем проект, контролируем эффективность и вносим улучшения.',
        icon: '/images/home/hww_6_section.png',
    },
];

export function HowWeWorkSection() {
    const [activeStep, setActiveStep] = useState(0);
    const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

    return (
        <section className="how-we-work-section" id="how-we-work">
            <h2 className="how-we-work-title">Как мы работаем</h2>

            <div className="how-we-work-content">
                {/* Steps List */}
                <div className="how-we-work-steps">
                    {/* Progress Line with Points */}
                    <div className="how-we-work-progress">
                        <div className="how-we-work-progress-line"></div>
                        <div
                            className="how-we-work-progress-fill"
                            style={{height: `${(activeStep / (steps.length - 1)) * 100}%`}}
                        ></div>
                    </div>

                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`how-we-work-step ${activeStep === step.id ? 'active' : ''}`}
                            data-step={step.id}
                            onClick={() => setActiveStep(step.id)}
                        >
                            <div className="how-we-work-step-point"></div>
                            <div className="how-we-work-step-content">
                                <h3 className="how-we-work-step-title">{step.title}</h3>
                                <p className="how-we-work-step-description">{step.description}</p>
                            </div>
                            <div className="how-we-work-step-icon">
                                <img src={step.icon} alt={step.title} loading="lazy"/>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: Large Icon Preview */}
                <div className="how-we-work-preview">
                    <img src={currentStep.icon} alt={currentStep.title} id="howWeWorkPreviewImg" loading="lazy"/>
                </div>
            </div>
        </section>
    );
}
