'use client';

export function BotsWhatSection() {
    return (
        <section className="what-is-section" id="what-is-bot">
            <div className="what-is-container">
                {/* Icons */}
                <div className="what-is-icons">
                    <img src="/images/bots/what-is-icon-bars.svg" alt="" className="what-is-icon-bars"/>
                    <img
                        src="/images/alien_head.svg"
                        alt=""
                        className="what-is-icon-alien"
                    />
                </div>

                {/* Heading */}
                <div className="what-is-bot-heading">
                    <h2 className="what-is-title">
                        <div className="what-is-title-blue">Бот —</div>
                        <span className="what-is-title-black">
                          это система, которая по сценариям общается с пользователями и выполняет нужные действия
                            <img
                                src="/images/alien_head.svg"
                                alt=""
                                className="what-is-title-alien"
                            />
                        </span>
                    </h2>
                </div>

                {/* Description */}
                <p className="what-is-description">
                    Действия которые выполняет бот: показывает товары, принимает заказы, отвечает на вопросы, записывает
                    или уведомляет. В Узбекистане чаще всего боты работают в <span
                    className="text-accent">Telegram</span> — как магазины, сервисы и другие инструменты для бизнеса
                </p>
            </div>
            <img
                src="/images/bots/robot.png"
                alt=""
                className="what-is-bot-decoration-img"
            />
        </section>
    );
}
