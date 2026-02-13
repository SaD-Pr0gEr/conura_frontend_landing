'use client';

const cards = [
    {
        icon: '/images/bots/why_1.svg',
        title: '-30% ЗАТРАТ',
        description: 'Автоматизация поддержки через бота снижает расходы компании до 30%, разгружая операторов и снижая издержки',
        source: 'adamconnell.me',
    },
    {
        icon: '/images/bots/why_2.svg',
        title: '+18% БЫСТРЕЕ',
        description: 'Чат-боты обрабатывают запросы клиентов в среднем на 18% быстрее за счёт мгновенных ответов и параллельной работы',
        source: 'glassix.com',
    },
    {
        icon: '/images/bots/why_3.svg',
        title: '+20% К ПРОДАЖАМ',
        description: 'После запуска чат-бота чек интернет-магазина вырастает в среднем на 20% благодаря упрощенному пользовательскому пути',
        source: 'tidio.com',
    },
    {
        icon: '/images/bots/why_4.svg',
        title: '24/7 ДОСТУПНОСТЬ',
        description: '64% клиентов считают круглосуточную работу главным преимуществом: бот всегда на связи, повышая доверие и лояльность',
        source: 'adamconnell.me',
    },
];

export function BotsWhySection() {
    return (
        <section className="bots-why-section">
            <div className="bots-why-container">
                <h2 className="bots-why-title">Для чего?</h2>

                <div className="bots-why-cards">
                    {cards.map((card, index) => (
                        <div key={index} className="bots-why-card">
                            <div className="bots-why-card-icon">
                                <img src={card.icon} alt="" className="bots-why-icon-img"/>
                            </div>
                            <h3 className="bots-why-card-title">{card.title}</h3>
                            <div className="bots-why-card-content">
                                <p className="bots-why-card-description">{card.description}</p>
                                <p className="bots-why-card-source">Источник: {card.source}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
