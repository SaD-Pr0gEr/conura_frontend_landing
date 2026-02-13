'use client';

export function ContextStatisticsSection() {
    return (
        <section className="statistics-section">
            {/* Heading */}
            <div className="statistics-heading">
                <h2 className="statistics-heading-title">32.7 млн пользователей</h2>
                <p className="statistics-heading-subtitle">Объем интернет аудитории в Узбекистане</p>
            </div>

            <div className="statistics-content">
                {/* Left: Circle Chart */}
                <div className="statistics-chart-block">
                    <div className="statistics-chart">
                        <svg className="statistics-pie" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="85" fill="none" stroke="#E5E7EA" strokeWidth="6"
                                    strokeDasharray="5 3" transform="rotate(-90 100 100)"/>
                            <circle cx="100" cy="100" r="85" fill="none" stroke="#FF6A3D" strokeWidth="6"
                                    strokeDasharray="5 3" strokeLinecap="round" transform="rotate(-90 100 100)"
                                    style={{strokeDasharray: '481 534'}}/>
                        </svg>
                        <div className="statistics-chart-inner">
                            <span className="statistics-chart-value">90%</span>
                            <span className="statistics-chart-label">от всего<br/>населения</span>
                        </div>
                    </div>
                </div>

                {/* Right: Blocks */}
                <div className="statistics-blocks">
                    {/* Search Engines Block */}
                    <div className="statistics-block statistics-search">
                        <div className="statistics-block-header">
                            <svg className="statistics-block-icon" width="20" height="20" viewBox="0 0 20 20"
                                 fill="none">
                                <path
                                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                                    stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M19 19L14.65 14.65" stroke="#101010" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                            <span className="statistics-block-title">Поисковые системы</span>
                        </div>

                        <div className="statistics-combined-bar">
                            <div className="statistics-bar-google"/>
                            <div className="statistics-bar-yandex"/>
                            <div className="statistics-bar-other"/>
                        </div>

                        <div className="statistics-markers">
                            <div className="statistics-marker">
                                <div className="statistics-marker-left">
                                    <svg className="statistics-marker-icon" width="15" height="15" viewBox="0 0 15 15"
                                         fill="none">
                                        <path
                                            d="M14.82 7.67c0-.55-.05-1.08-.14-1.58H7.5v3h4.11c-.18.95-.72 1.76-1.53 2.3v1.91h2.48c1.45-1.34 2.26-3.31 2.26-5.63z"
                                            fill="#4285F4"/>
                                        <path
                                            d="M7.5 15c2.07 0 3.8-.69 5.07-1.86l-2.48-1.91c-.69.46-1.57.74-2.59.74-1.99 0-3.68-1.35-4.28-3.16H.65v1.97C1.91 13.34 4.49 15 7.5 15z"
                                            fill="#34A853"/>
                                        <path
                                            d="M3.22 8.81c-.16-.46-.24-.95-.24-1.46s.09-1 .24-1.46V3.92H.65A7.47 7.47 0 000 7.35c0 1.21.29 2.36.65 3.43l2.57-1.97z"
                                            fill="#FBBC05"/>
                                        <path
                                            d="M7.5 2.93c1.12 0 2.13.39 2.92 1.14l2.19-2.19C11.3.71 9.57 0 7.5 0 4.49 0 1.91 1.66.65 4.22l2.57 1.97c.6-1.81 2.29-3.26 4.28-3.26z"
                                            fill="#EA4335"/>
                                    </svg>
                                    <span className="statistics-marker-name">Google</span>
                                </div>
                                <span className="statistics-marker-line"/>
                                <span className="statistics-marker-value">77.6%</span>
                            </div>
                            <div className="statistics-marker">
                                <div className="statistics-marker-left">
                                    <svg className="statistics-marker-icon" width="15" height="15" viewBox="0 0 15 15"
                                         fill="none">
                                        <rect width="15" height="15" rx="3" fill="#FC3F1D"/>
                                        <path
                                            d="M8.5 12.5h-1.25V5.42c-.97 0-1.75.78-1.75 1.75v5.33H4.25V7.17c0-1.66 1.34-3 3-3H8.5v8.33z"
                                            fill="white"/>
                                    </svg>
                                    <span className="statistics-marker-name">Яндекс</span>
                                </div>
                                <span className="statistics-marker-line"/>
                                <span className="statistics-marker-value">20.8%</span>
                            </div>
                            <div className="statistics-marker">
                                <div className="statistics-marker-left">
                                    <span className="statistics-marker-icon-other"/>
                                    <span className="statistics-marker-name">Остальные</span>
                                </div>
                                <span className="statistics-marker-line"/>
                                <span className="statistics-marker-value">1.6%</span>
                            </div>
                        </div>
                    </div>

                    {/* Telegram Block */}
                    <div className="statistics-block statistics-telegram">
                        <div className="statistics-telegram-header">
                            <svg className="statistics-telegram-icon" width="15" height="15" viewBox="0 0 15 15"
                                 fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="url(#tg-gradient)"/>
                                <path
                                    d="M3.5 7.4l6.8-2.8c.3-.1.6.1.5.4l-1.1 5.2c-.1.3-.4.4-.6.3l-1.7-1.3-1 1c-.1.1-.3.1-.4 0l.2-1.5 2.8-2.5c.1-.1 0-.2-.1-.1l-3.5 2.2-1.5-.5c-.3-.1-.3-.4 0-.4z"
                                    fill="white"/>
                                <defs>
                                    <linearGradient id="tg-gradient" x1="7.5" y1="0" x2="7.5" y2="15"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2AABEE"/>
                                        <stop offset="1" stopColor="#229ED9"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="statistics-telegram-label">Telegram</span>
                        </div>
                        <p className="statistics-telegram-title">26+ млн пользователей</p>

                        <div className="statistics-telegram-bar">
                            <div className="statistics-telegram-bar-fill"/>
                            <div className="statistics-telegram-bar-empty"/>
                        </div>
                        <p className="statistics-telegram-percent">70% от населения</p>
                    </div>

                    {/* Sources Block */}
                    <div className="statistics-block statistics-sources">
                        <span className="statistics-sources-label">Источники</span>
                        <div className="statistics-sources-links">
                            <a href="https://stat.uz" target="_blank" rel="noopener noreferrer"
                               className="statistics-source-link">stat.uz</a>
                            <span className="statistics-sources-divider"/>
                            <a href="https://datareportal.com" target="_blank" rel="noopener noreferrer"
                               className="statistics-source-link">datareportal.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
