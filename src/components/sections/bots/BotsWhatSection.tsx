'use client';

export function BotsWhatSection() {
  return (
    <section className="bots-what-section" id="what-is-bot">
      <div className="bots-what-content">
        <div className="bots-what-heading">
          <div className="bots-what-icon-row">
            {/* Bot icon */}
            <svg className="bots-what-bot-icon" width="84" height="28" viewBox="0 0 84 28" fill="none">
              <rect x="0" y="0" width="24" height="28" rx="4" fill="#04A8BF"/>
              <circle cx="12" cy="14" r="4" fill="white"/>
              <rect x="30" y="0" width="24" height="28" rx="4" fill="#04A8BF"/>
              <circle cx="42" cy="14" r="4" fill="white"/>
              <rect x="60" y="0" width="24" height="28" rx="4" fill="#04A8BF"/>
              <circle cx="72" cy="14" r="4" fill="white"/>
            </svg>
            <span className="bots-what-title-accent">Бот —</span>
          </div>
          <div className="bots-what-title-row">
            <h2 className="bots-what-title">
              это система, которая по сценариям общается с пользователями и выполняет нужные действия
            </h2>
            {/* Alien icon */}
            <svg className="bots-what-alien-icon" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <circle cx="17" cy="17" r="15" stroke="#04A8BF" strokeWidth="2"/>
              <circle cx="12" cy="15" r="3" fill="#04A8BF"/>
              <circle cx="22" cy="15" r="3" fill="#04A8BF"/>
              <path d="M12 22c2.5 3 7.5 3 10 0" stroke="#04A8BF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <p className="bots-what-description">
          Действия которые выполняет бот: показывает товары, принимает заказы, отвечает на вопросы, записывает или уведомляет. В Узбекистане чаще всего боты работают в <span className="text-accent">Telegram</span> — как магазины, сервисы и другие инструменты для бизнеса
        </p>
      </div>

      {/* Robot image */}
      <div className="bots-what-robot">
        <img
          src="https://www.figma.com/api/mcp/asset/58025adf-7316-49be-b28c-9abb40e5aba5"
          alt="Bot"
          className="bots-what-robot-img"
        />
      </div>
    </section>
  );
}
