'use client';

export function ContextPlatformsSection() {
  return (
    <section className="platforms-section">
      <div className="platforms-container">
        {/* Heading Row */}
        <div className="platforms-header">
          <h2 className="platforms-title">Площадки</h2>
          <div className="platforms-tags">
            <div className="platforms-tag platforms-tag-google">
              <img
                src="https://www.figma.com/api/mcp/asset/6a620bdf-2546-41ee-b236-e5e2403cdf42"
                alt="Google"
                className="platforms-tag-icon"
              />
              <span>Google</span>
            </div>
            <div className="platforms-tag platforms-tag-yandex">
              <img
                src="https://www.figma.com/api/mcp/asset/0a5f5c35-fdf8-4e2b-9a61-2dc5cab40a2a"
                alt="Яндекс"
                className="platforms-tag-icon"
              />
              <span>Яндекс</span>
            </div>
            <div className="platforms-tag platforms-tag-telegram">
              <img
                src="https://www.figma.com/api/mcp/asset/ddc22066-070f-4154-a4a5-9063aab32edb"
                alt="Telegram"
                className="platforms-tag-icon"
              />
              <span>Telegram</span>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="platforms-table">
          {/* Left Column: Поисковые сети */}
          <div className="platforms-column">
            <div className="platforms-column-heading">
              <svg className="platforms-column-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                  stroke="#101010"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 17.5L13.875 13.875"
                  stroke="#101010"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Поисковые сети</span>
            </div>
            <div className="platforms-block platforms-block-bordered">
              <h3 className="platforms-block-title">Google Поиск</h3>
              <p className="platforms-block-text">
                Практически каждый интернет-пользователь страны пользуется Google для поиска. В сегменте поисковой
                рекламы он удерживает порядка 77% рынка
              </p>
            </div>
            <div className="platforms-block">
              <h3 className="platforms-block-title">Яндекс Поиск</h3>
              <p className="platforms-block-text">
                Яндекс популярен среди части аудитории, преимущественно русскоязычных пользователей. По оценкам, около
                20% узбекистанцев предпочитают искать информацию через Яндекс
              </p>
            </div>
          </div>

          {/* Center: Divider with Plus */}
          <div className="platforms-divider">
            <div className="platforms-divider-line"></div>
            <div className="platforms-divider-plus">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Right Column: Баннерные сети */}
          <div className="platforms-column">
            <div className="platforms-column-heading">
              <svg className="platforms-column-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2.5" y="2.5" width="15" height="15" rx="2" stroke="#101010" strokeWidth="1.5" />
                <path d="M2.5 7.5H17.5" stroke="#101010" strokeWidth="1.5" />
                <circle cx="5" cy="5" r="0.75" fill="#101010" />
                <circle cx="7.5" cy="5" r="0.75" fill="#101010" />
              </svg>
              <span>Баннерные сети</span>
            </div>
            <div className="platforms-block platforms-block-bordered">
              <h3 className="platforms-block-title">Google Display Network (GDN)</h3>
              <p className="platforms-block-text">
                Ваши баннеры показываются на новостных сайтах, форумах, блогах и тысячах других площадок – огромный
                охват для создания узнаваемости и ремаркетинга
              </p>
            </div>
            <div className="platforms-block">
              <h3 className="platforms-block-title">Рекламная сеть Яндекса (РСЯ)</h3>
              <p className="platforms-block-text">
                Баннерная сеть Яндекса стремительно растёт. Реклама через РСЯ покажет ваши объявления на сайтах-
                партнёрах, включая Telegram Ads и другие популярные локальные ресурсы
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
