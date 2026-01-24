'use client';

export function BotsStatisticSection() {
  return (
    <section className="bots-statistic-section" id="statistic">
      <div className="bots-statistic-header">
        <h2 className="bots-statistic-title">26+ млн пользователей</h2>
        <p className="bots-statistic-subtitle">Telegram в Узбекистане</p>
      </div>

      <div className="bots-statistic-charts">
        {/* Chart 1: Круговая диаграмма 70% */}
        <div className="bots-statistic-chart bots-statistic-chart-main">
          <div className="bots-chart-ring">
            {/* Background dashed ring (засечки) */}
            <img
              src="https://www.figma.com/api/mcp/asset/b372b839-1f6a-4ebf-9bf5-2a8c84f257ef"
              alt=""
              className="bots-chart-bg-img"
            />
            {/* Progress ring (70%) */}
            <img
              src="https://www.figma.com/api/mcp/asset/421a96f2-78b9-4d49-88e3-2a2961b18762"
              alt=""
              className="bots-chart-progress-img"
            />
            <div className="bots-chart-center">
              <span className="bots-chart-value">70%</span>
              <span className="bots-chart-label">от всего населения</span>
            </div>
          </div>
        </div>

        {/* Right column: Chart 2 + Source */}
        <div className="bots-statistic-right-column">
          {/* Chart 2: Внедрение бот-технологий */}
          <div className="bots-statistic-chart bots-statistic-chart-secondary">
            <div className="bots-chart-header">
              <h3 className="bots-chart-title">Внедрение бот-техногологий бизнесом</h3>
              <p className="bots-chart-description bots-chart-description-desktop">
                Доля компаний, использующих чат-боты
              </p>
            </div>

            <div className="bots-chart-double">
              {/* Mobile: Concentric circles with SVG */}
              <div className="bots-chart-concentric">
                <svg viewBox="0 0 296 296" className="bots-chart-concentric-svg">
                  {/* Outer ring background */}
                  <circle cx="148" cy="148" r="140" fill="none" stroke="#EEF0F2" strokeWidth="8" />
                  {/* Outer ring progress (60%) */}
                  <circle
                    cx="148"
                    cy="148"
                    r="140"
                    fill="none"
                    stroke="#04A8BF"
                    strokeWidth="8"
                    strokeDasharray="880"
                    strokeDashoffset="352"
                    strokeLinecap="round"
                    transform="rotate(-90 148 148)"
                  />
                  {/* Inner ring background */}
                  <circle cx="148" cy="148" r="115" fill="none" stroke="#EEF0F2" strokeWidth="8" />
                  {/* Inner ring progress (42%) */}
                  <circle
                    cx="148"
                    cy="148"
                    r="115"
                    fill="none"
                    stroke="#FF6A3D"
                    strokeWidth="8"
                    strokeDasharray="723"
                    strokeDashoffset="419"
                    strokeLinecap="round"
                    transform="rotate(-90 148 148)"
                  />
                </svg>
                {/* Center text */}
                <div className="bots-chart-concentric-center">
                  <div className="bots-chart-concentric-item bots-chart-concentric-item-b2b">
                    <span className="bots-chart-concentric-value" style={{ color: '#04A8BF' }}>60%</span>
                    <span className="bots-chart-concentric-label">B2B компании</span>
                  </div>
                  <div className="bots-chart-concentric-item bots-chart-concentric-item-b2c">
                    <span className="bots-chart-concentric-value" style={{ color: '#FF6A3D' }}>42%</span>
                    <span className="bots-chart-concentric-label">B2C компании</span>
                  </div>
                </div>
              </div>

              {/* Desktop: Separate charts (larger) */}
              <div className="bots-chart-item bots-chart-item-desktop">
                <svg viewBox="0 0 296 296" className="bots-semicircle-svg">
                  <circle cx="148" cy="148" r="140" fill="none" stroke="#EEF0F2" strokeWidth="8" />
                  <circle
                    cx="148"
                    cy="148"
                    r="140"
                    fill="none"
                    stroke="#04A8BF"
                    strokeWidth="8"
                    strokeDasharray="880"
                    strokeDashoffset="352"
                    strokeLinecap="round"
                    transform="rotate(-90 148 148)"
                  />
                </svg>
                <div className="bots-chart-item-center">
                  <svg className="bots-chart-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M26.667 21.333V10.667a2.667 2.667 0 00-1.334-2.309L16 2.667 6.667 8.358a2.667 2.667 0 00-1.334 2.309v10.666a2.667 2.667 0 001.334 2.309L16 29.333l9.333-5.691a2.667 2.667 0 001.334-2.309z"
                      stroke="#04A8BF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 16v13.333M16 16L5.333 9.333M16 16l10.667-6.667"
                      stroke="#04A8BF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="bots-chart-item-value" style={{ color: '#04A8BF' }}>60%</span>
                  <span className="bots-chart-item-label">B2B компании</span>
                </div>
              </div>

              <div className="bots-chart-item bots-chart-item-desktop">
                <svg viewBox="0 0 296 296" className="bots-semicircle-svg">
                  <circle cx="148" cy="148" r="140" fill="none" stroke="#EEF0F2" strokeWidth="8" />
                  <circle
                    cx="148"
                    cy="148"
                    r="140"
                    fill="none"
                    stroke="#FF6A3D"
                    strokeWidth="8"
                    strokeDasharray="880"
                    strokeDashoffset="510"
                    strokeLinecap="round"
                    transform="rotate(-90 148 148)"
                  />
                </svg>
                <div className="bots-chart-item-center">
                  <svg className="bots-chart-icon" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="10" cy="8" r="3" stroke="#FF6A3D" strokeWidth="2" />
                    <circle cx="18" cy="8" r="3" stroke="#FF6A3D" strokeWidth="2" />
                    <path
                      d="M4 22c0-4 3-6 6-6s6 2 6 6M12 22c0-4 3-6 6-6s6 2 6 6"
                      stroke="#FF6A3D"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="bots-chart-item-value" style={{ color: '#FF6A3D' }}>42%</span>
                  <span className="bots-chart-item-label">B2C компании</span>
                </div>
              </div>
            </div>
          </div>

          {/* Source (inside right column for desktop) */}
          <div className="bots-statistic-source">
            <span className="bots-statistic-source-label">Источник</span>
            <span className="bots-statistic-source-value">tidio.com</span>
          </div>
        </div>
      </div>

      {/* Source for mobile only */}
      <div className="bots-statistic-source bots-statistic-source-mobile">
        <span className="bots-statistic-source-label">Источники</span>
        <span className="bots-statistic-source-value">tidio.com</span>
      </div>
    </section>
  );
}
