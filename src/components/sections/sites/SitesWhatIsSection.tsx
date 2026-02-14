'use client';

export function SitesWhatIsSection() {
    return (
        <section className="sites-what-is-section">
            <div className="sites-what-is-container">
                {/* Heading */}
                <div className="sites-what-is-heading">
                    {/* Title Row 1: Icon + "Сайт —" */}
                    <div className="sites-what-is-title-row">
                        <img
                            src="/images/sites/what-is-icon.svg"
                            alt=""
                            className="sites-what-is-icon"
                        />
                        <span className="sites-what-is-title-accent">Сайт —</span>
                    </div>
                    {/* Title Row 2: Main text with alien */}
                    <div className="sites-what-is-title-main">
                        <span>выполняет роль виртуального офиса, где клиент получает информацию о компании, её услугах и продуктах</span>
                        <img
                            src="/images/alien_head.svg"
                            alt=""
                            className="sites-what-is-alien"
                        />
                    </div>
                </div>

                {/* Description */}
                <p className="sites-what-is-description">
                    Наличие сайта повышает уровень доверия, обеспечивает доступ к широкой аудитории и позволяет
                    выстраивать прямую коммуникацию с потенциальными клиентами
                </p>

                {/* Globe Element */}
                <div className="sites-what-is-globe">
                    <div className="sites-what-is-globe-overlay"></div>
                    <img
                        src="/images/sites/globus.png"
                        alt=""
                        className="sites-what-is-globe-img"
                    />
                </div>
            </div>
        </section>
    );
}
