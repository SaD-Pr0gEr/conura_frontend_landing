export function CertificateSection() {
    return (
        <section className="certificate-section">
            {/* Desktop: Header with title and IT Park logo */}
            <div className="certificate-header">
                <div className="certificate-heading">
                    <p className="certificate-heading-accent">Conura —</p>
                    <p className="certificate-heading-text">официальный резидент<br/>IT-парка</p>
                </div>
                <img
                    src="/images/it-park-flat.svg"
                    alt="IT Park Logo"
                    className="certificate-logo-desktop scalable-img"
                    loading="lazy"
                />
            </div>

            {/* Scene Image */}
            <div className="certificate-scene">
                <img src="/images/cosmic-ads.svg" alt="cosmic-ads"/>
                <img src="/images/half-moon.svg" alt="half-moon"/>
            </div>

            {/* Mobile: Content below image */}
            <div className="certificate-content-mobile">
                <div className="certificate-text">
                    <h2 className="certificate-title"><span className="text-accent">Conura —</span> официальный резидент
                        IT-парка</h2>
                    <p className="certificate-description">Мы являемся официальным резидентом<br/>IT-Парка Узбекистана
                    </p>
                </div>
                <button className="btn btn-primary certificate-btn-mobile" id="certificateBtnMobile">
                    <img
                        src="/images/it-park-flat.svg"
                        alt="IT Park Logo"
                        className="certificate-btn-icon"
                        loading="lazy"
                    />
                    Посмотреть сертификат
                </button>
            </div>

            {/* Desktop: Round button overlaid on image */}
            <button className="certificate-btn-round scalable-img" id="certificateBtnDesktop">
                <span>Посмотреть<br/>сертификат</span>
            </button>
        </section>
    );
}
