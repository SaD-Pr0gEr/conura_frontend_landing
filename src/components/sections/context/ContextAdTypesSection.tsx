'use client';

import {useState} from 'react';
import {useModal} from '@/context/ModalContext';

const adTypes = [
    {
        id: 1,
        tab: 'Поисковая реклама',
        title: 'Поисковая реклама',
        subtitle: 'Текстовые объявления, которые показываются в результатах поиска Google и Яндекса',
        advantages: [
            'Ловит "горячий" спрос пользователей, которые сами ищут ваш продукт, обеспечивая высокую конверсию',
            'Платите, только когда пользователь кликнул',
            'Цена клика зависит от конкуренции по ключевому слову',
        ],
        image: '/images/context/ad_1.png',
    },
    {
        id: 2,
        tab: 'Медийная реклама',
        title: 'Медийная реклама',
        subtitle: 'Графические баннеры и адаптивные объявления на сайтах-партнёрах',
        advantages: [
            'Широкий охват и визуальная привлекательность',
            'Отлично подходит для повышения узнаваемости бренда и ремаркетинга',
            'Средняя цена за клик обычно ниже, чем в поиске, благодаря большому объёму доступного трафика',
        ],
        image: '/images/context/ad_2.png',
    },
    {
        id: 3,
        tab: 'Реклама приложений',
        title: 'Реклама приложений',
        subtitle: 'Кампании для продвижения мобильных приложений',
        advantages: [
            'Aвтоматическая оптимизация под установки — система сама показывает объявления тем, кто с наибольшей вероятностью скачает приложение или выполнит целевое действие внутри приложения',
        ],
        image: '/images/context/ad_3.png',
    },
    {
        id: 4,
        tab: 'Видео-реклама',
        title: 'Видео-реклама',
        subtitle: 'Реклама в видеоформате',
        advantages: [
            'Сильное вовлечение – ролик может ярко презентовать продукт, вызвать эмоцию, рассказать историю. Это повышает узнаваемость бренда и интерес аудитории',
            'Модель оплаты за просмотр или за 1000 показов',
        ],
        image: '/images/context/ad_4.png',
    },
    {
        id: 5,
        tab: 'Товарные кампании',
        title: 'Товарные кампании',
        subtitle: 'Реклама, показывающая ваши товары с фото, ценой и названием',
        advantages: [
            'Пользователь видит конкретный товар и цену ещё до клика, что повышает качество трафика и конверсию в покупку',
            'Система автоматически выбирает, какие товары показывать, исходя из поискового запроса и цены',
        ],
        image: '/images/context/ad_5.png',
    },
    {
        id: 6,
        tab: 'Реклама на картах',
        title: 'Реклама на картах',
        subtitle: 'Объявления в сервисах карт и навигаторов, выделяющие ваш бизнес на онлайн-карте',
        advantages: [
            'Привлекает клиентов из близкого окружения – тех, кто прямо сейчас ищет на карте нужный товар или услугу поблизости (например, "кафе рядом")',
            'Отлично работает для локального бизнеса, увеличивая офлайн-трафик. Конкуренция зависит от популярности локации и категории бизнеса',
        ],
        image: '/images/context/ad_6.png',
    },
];

export function ContextAdTypesSection() {
    const {openModal} = useModal();
    const [activeTab, setActiveTab] = useState(1);

    const activeType = adTypes.find((t) => t.id === activeTab) || adTypes[0];

    return (
        <section className="ad-types-section">
            <h2 className="ad-types-title">Виды контекстной рекламы</h2>

            {/* Desktop Tabs */}
            <div className="ad-types-tabs">
                {adTypes.map((type) => (
                    <button
                        key={type.id}
                        className={`ad-types-tab ${activeTab === type.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(type.id)}
                        data-tab={type.id}
                    >
                        {type.tab}
                    </button>
                ))}
            </div>

            {/* Desktop Content (Tab Panels) */}
            <div className="ad-types-content">
                <div className="ad-types-panel active" data-panel={activeType.id}>
                    <div className="ad-types-panel-image">
                        <img src={activeType.image} alt={activeType.title}/>
                    </div>
                    <div className="ad-types-panel-info">
                        <div className="ad-types-panel-header">
                            <h3 className="ad-types-panel-title">{activeType.title}</h3>
                            <p className="ad-types-panel-subtitle">{activeType.subtitle}</p>
                        </div>
                        <ul className="ad-types-panel-advantages">
                            {activeType.advantages.map((adv, index) => (
                                <li key={index} className="ad-types-advantage-item">
                                    <span className="ad-types-advantage-icon">🔥</span>
                                    <span className="ad-types-advantage-text">{adv}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-dark ad-types-cta" onClick={openModal}>
                            Начать запуск
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Slider */}
            <div className="ad-types-slider">
                <div className="ad-types-slider-track">
                    {adTypes.map((type) => (
                        <div key={type.id} className="ad-types-card">
                            <div className="ad-types-card-image">
                                <img src={type.image} alt={type.title}/>
                            </div>
                            <div className="ad-types-card-info">
                                <div className="ad-types-card-header">
                                    <h3 className="ad-types-card-title">{type.title}</h3>
                                    <p className="ad-types-card-subtitle">{type.subtitle}</p>
                                </div>
                                <ul className="ad-types-card-advantages">
                                    {type.advantages.map((adv, idx) => (
                                        <li key={idx} className="ad-types-advantage-item">
                                            <span className="ad-types-advantage-icon">🔥</span>
                                            <span className="ad-types-advantage-text">{adv}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="btn btn-dark ad-types-cta" onClick={openModal}>
                                    Начать запуск
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
