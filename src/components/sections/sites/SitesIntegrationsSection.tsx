'use client';

const integrations = [
    {src: '/images/bots/integrations/11.png', alt: 'Uzum'},
    {src: '/images/bots/integrations/12.png', alt: 'Click'},
    {src: '/images/bots/integrations/14.png', alt: 'Payme'},
    {src: '/images/bots/integrations/13.png', alt: 'Paynet'},
    {src: '/images/bots/integrations/9.png', alt: '1C'},
    {src: '/images/bots/integrations/7.png', alt: 'amoCRM'},
    {src: '/images/bots/integrations/8.png', alt: 'Битрикс24'},
    {src: '/images/bots/integrations/1.png', alt: 'Telegram'},
    {src: '/images/sites/integrations/1.png', alt: 'DIKIDI Business'},
    {src: '/images/sites/integrations/2.png', alt: 'Altegio'},
];

const mobileIntegrations = [
    {src: '/images/bots/integrations/11.png', alt: 'Uzum'},
    {src: '/images/bots/integrations/12.png', alt: 'Click'},
    {src: '/images/bots/integrations/14.png', alt: 'Payme'},
    {src: '/images/bots/integrations/1.png', alt: 'Telegram'},
    {src: '/images/sites/integrations/1.png', alt: 'DIKIDI Business'},
    {src: '/images/sites/integrations/2.png', alt: 'Altegio'},
];

export function SitesIntegrationsSection() {
    return (
        <section className="sites-integrations-section">
            <div className="sites-integrations-container">
                <h2 className="sites-integrations-title">Интеграции</h2>

                {/* Desktop Grid */}
                <div className="sites-integrations-grid">
                    {integrations.map((item, index) => (
                        <div key={index} className="sites-integrations-logo">
                            <img src={item.src} alt={item.alt}/>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel (auto-scroll) */}
                <div className="sites-integrations-carousel">
                    <div className="sites-integrations-track">
                        {/* First set */}
                        {mobileIntegrations.map((item, index) => (
                            <div key={`first-${index}`} className="sites-integrations-logo">
                                <img src={item.src} alt={item.alt}/>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {mobileIntegrations.map((item, index) => (
                            <div key={`second-${index}`} className="sites-integrations-logo">
                                <img src={item.src} alt={item.alt}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
