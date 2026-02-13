'use client';

import {useModal} from '@/context/ModalContext';

const techItems = [
    {
        title: 'Python',
        description: 'Универсален и быстр в разработке, идеально подходит для интеграций с ИИ',
    },
    {
        title: 'PHP',
        description: 'Оптимален для веб-интеграций и ботов, связанных с сайтами и CMS.',
    },
    {
        title: 'Java',
        description: 'Ваши баннеры показываются на новостных сайтах, форумах, блогах и тысячах других площадок – огромный охват для создания узнаваемости и ремаркетинга',
    },
    {
        title: 'JavaScript (Node.js)',
        description: 'Обеспечивает высокую производительность в реальном времени',
    },
];

export function BotsTechSection() {
    const {openModal} = useModal();

    return (
        <section className="bots-tech-section">
            <div className="bots-tech-container">
                <div className="bots-tech-left">
                    <h2 className="bots-tech-title">Стек<br/>технологий</h2>
                    <button className="bots-tech-cta" onClick={openModal}>
                        <span>ЗАКАЗАТЬ БОТА</span>
                    </button>
                </div>

                <div className="bots-tech-grid">
                    {techItems.map((item, index) => (
                        <div key={index} className="bots-tech-item">
                            <h3 className="bots-tech-item-title">{item.title}</h3>
                            <p className="bots-tech-item-desc">{item.description}</p>
                        </div>
                    ))}

                    {/* Center Plus Icon */}
                    <div className="bots-tech-plus">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Mobile CTA Button */}
            <button className="bots-tech-cta-mobile" onClick={openModal}>
                Заказать бота
            </button>
        </section>
    );
}
