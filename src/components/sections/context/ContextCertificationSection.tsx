const certificates = [
    {
        id: 1,
        src: '/images/context/google_ads_search.png',
        alt: 'Google Ads Search Certified',
    },
    {
        id: 2,
        src: '/images/context/google_ads_display.png',
        alt: 'Google Ads Display Certified',
    },
    {
        id: 3,
        src: '/images/context/google_ads_video.png',
        alt: 'Google Ads Video Certified',
    },
    {
        id: 4,
        src: '/images/context/shopping_ads.png',
        alt: 'Shopping Ads Certified',
    },
    {
        id: 5,
        src: '/images/context/google_ads_apps.png',
        alt: 'Google Ads Apps Certified',
    },
    {
        id: 6,
        src: '/images/context/google_ads_measurement.png',
        alt: 'Google Ads Measurement Certified',
        bordered: true,
    },
    {
        id: 7,
        src: '/images/context/campaign_manager_360.png',
        alt: 'Campaign Manager Certified',
        bordered: true,
    },
];

export function ContextCertificationSection() {
    return (
        <section className="certification-section" id="certification">
            <div className="certification-container">
                <div className="certification-header">
                    <h2 className="certification-title">Сертификация</h2>
                    <p className="certification-description">
                        Вы доверяете свою рекламу профессионалам. В нашем агентстве более 10 сертификатов от Google по
                        основным
                        направлениям интернет-рекламы
                    </p>
                </div>

                <div className="certification-slider-wrapper">
                    <div className="certification-slider-track">
                        {certificates.map((cert) => (
                            <div key={cert.id}
                                 className={`certification-logo scalable-img ${cert.bordered ? 'certification-logo-bordered' : ''}`}>
                                <img src={cert.src} alt={cert.alt} className="certification-logo-img" loading="lazy"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
