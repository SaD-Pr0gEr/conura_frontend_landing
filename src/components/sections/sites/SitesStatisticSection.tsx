'use client';

export function SitesStatisticSection() {
    return (
        <section className="sites-statistic-section">
            <div className="sites-statistic-container">
                {/* Heading */}
                <div className="sites-statistic-heading">
                    <h2 className="sites-statistic-title">
                        <span className="sites-statistic-title-desktop">31 млн пользователей</span>
                        <span className="sites-statistic-title-mobile">26+ млн пользователей</span>
                    </h2>
                    <p className="sites-statistic-subtitle">Регулярно ищут информацию в интернете</p>
                </div>

                {/* Charts Row */}
                <div className="sites-statistic-charts">
                    {/* Left: Circle Chart */}
                    <div className="sites-statistic-chart-block">
                        <div className="sites-statistic-chart">
                            <svg viewBox="0 0 400 400" className="bots-semicircle-svg" width="100%" height="100%">
                                <circle
                                    cx="200"
                                    cy="200"
                                    r="180"
                                    fill="none"
                                    stroke="#EEF0F2"
                                    strokeWidth="16"
                                />

                                <circle
                                    cx="200"
                                    cy="200"
                                    r="180"
                                    fill="none"
                                    stroke="#5d6bff"
                                    strokeWidth="16"
                                    strokeDasharray="1220"
                                    strokeDashoffset="280"
                                    strokeLinecap="round"
                                    transform="rotate(-90 200 200)"
                                />
                            </svg>
                            <div className="sites-chart-center">
                                <span className="sites-chart-value">81,5%</span>
                                <span className="sites-chart-label">от всего населения</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats Block */}
                    <div className="sites-statistic-right">
                        {/* Main Stats Card */}
                        <div className="sites-statistic-card">
                            <div className="sites-statistic-card-content">
                                <span className="sites-statistic-percent">33%</span>
                                <h3 className="sites-statistic-card-title">430 000 активных предприятий имеют сайт</h3>
                                <p className="sites-statistic-card-desc">от числа всех активных компаний</p>
                                <div className="sites-statistic-icons">
                                    <img
                                        src="/images/google-icon.svg"
                                        alt="Google"
                                        className="sites-statistic-icon"
                                    />
                                    <img
                                        src="/images/yandex-icon.svg"
                                        alt="Yandex"
                                        className="sites-statistic-icon"
                                    />
                                </div>
                            </div>
                            <div className="sites-statistic-bubbles">
                                <img src="/images/sites/bubbles.png" alt="" className="sites-bubble-row"/>
                            </div>
                        </div>

                        {/* Sources Block */}
                        <div className="sites-statistic-sources">
                            <span className="sites-statistic-sources-label">Источники</span>
                            <div className="sites-statistic-sources-list">
                                <span className="sites-statistic-source">Digital 2026</span>
                                <span className="sites-statistic-source-divider"></span>
                                <span className="sites-statistic-source">datareportal.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
