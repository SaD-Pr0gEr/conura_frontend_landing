'use client';

import {useState} from 'react';
import Link from 'next/link';
import {Cursor} from "@/components/icons/Cursor";
import {Target} from "@/components/icons/Target";
import {Sites} from "@/components/icons/Sites";
import {Bots} from "@/components/icons/Bots";
import {Integrations} from "@/components/icons/Integrations";

const services = [
    {
        id: 'context',
        name: 'Контекстная реклама',
        icon: Cursor,
        image: '/images/home/context_ads.jpg',
        description: 'Привлекаем клиентов через поисковые системы и площадки, показывая объявления именно тем, кто ищет ваш продукт',
        link: '/context',
    },
    {
        id: 'target',
        name: 'Таргет',
        icon: Target,
        image: '/images/home/target_service.jpg',
        description: 'Показ объявлений выбранной аудитории по заданным параметрам: интересы, возраст, география и поведение',
        link: '/target',
    },
    {
        id: 'sites',
        name: 'Сайты',
        icon: Sites,
        image: '/images/home/Websites_Service.jpg',
        description: 'Создаём удобные и понятные сайты, которые отражают суть бизнеса и упрощают взаимодействие с клиентами',
        link: '/sites',
    },
    {
        id: 'bots',
        name: 'Боты',
        icon: Bots,
        image: '/images/home/Bots_Service.jpg',
        description: 'Программные решения, которые автоматизируют задачи — от клиентских сервисов до внутренних бизнес-процессов',
        link: '/bots',
    },
    {
        id: 'integrations',
        name: 'Интеграции',
        icon: Integrations,
        image: '/images/home/Integrations_Service.jpg',
        description: 'Соединяют разные сервисы и программы в единую цепочку, чтобы данные передавались автоматически и без ошибок',
        link: '/integrations',
    },
];

export function ServicesSection() {
    const [activeService, setActiveService] = useState('context');
    const currentService = services.find((s) => s.id === activeService) || services[0];

    const toggleService = (id: string) => {
        setActiveService(id === activeService ? '' : id);
    };

    return (
        <section className="services-section" id="services">
            <h2 className="services-title">Услуги</h2>

            <div className="services-content">
                {/* Tabs (Left side on desktop) */}
                <div className="services-tabs">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className={`service-tab ${activeService === service.id ? 'active' : ''}`}
                                data-service={service.id}
                            >
                                <div className="service-tab-header" onClick={() => toggleService(service.id)}>
                                    <div className="service-tab-icon">
                                        <Icon focused={activeService === service.id} />
                                    </div>
                                    <span className="service-tab-name">{service.name}</span>
                                    <button className="service-tab-toggle"
                                            aria-label={activeService === service.id ? 'Закрыть' : 'Открыть'}>
                                        <svg className="icon-close" width="16" height="16" viewBox="0 0 16 16"
                                             fill="none">
                                            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2"
                                                  strokeLinecap="round"/>
                                        </svg>
                                        <svg className="icon-plus" width="16" height="16" viewBox="0 0 16 16"
                                             fill="none">
                                            <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2"
                                                  strokeLinecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="service-tab-content">
                                    <div className="service-tab-image">
                                        <img src={service.image} alt={service.name} loading="lazy"/>
                                    </div>
                                    <p className="service-tab-description">{service.description}</p>
                                    <Link href={service.link}
                                          className="btn btn-primary service-tab-btn">Подробнее</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Desktop: Image + Description */}
                <div className="services-preview">
                    <div className="services-preview-image">
                        <img src={currentService.image} alt={currentService.name} id="servicesPreviewImg"
                             loading="lazy"/>
                    </div>
                    <div className="services-preview-content">
                        <div className="services-preview-text">
                            <h3 className="services-preview-title" id="servicesPreviewTitle">{currentService.name}</h3>
                            <p className="services-preview-description"
                               id="servicesPreviewDescription">{currentService.description}</p>
                        </div>
                        <Link href={currentService.link} className="services-preview-btn" id="servicesPreviewBtn">
                            <span>Подробнее</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
