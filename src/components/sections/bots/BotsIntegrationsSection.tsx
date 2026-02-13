'use client';

const integrations = {
    row1: [
        {src: '/images/bots/integrations/1.png', alt: 'Telegram'},
        {src: '/images/bots/integrations/2.png', alt: 'WhatsApp'},
        {src: '/images/bots/integrations/3.png', alt: 'Instagram'},
        {src: '/images/bots/integrations/4.png', alt: 'Facebook'},
        {src: '/images/bots/integrations/5.png', alt: 'Meta'},
    ],
    row2: [
        {src: '/images/bots/integrations/6.png', alt: 'ChatGPT'},
        {src: '/images/bots/integrations/7.png', alt: 'amoCRM'},
        {src: '/images/bots/integrations/8.png', alt: 'Битрикс24'},
        {src: '/images/bots/integrations/9.png', alt: '1C'},
        {src: '/images/bots/integrations/10.png', alt: 'Google Sheets'},
    ],
    row3: [
        {src: '/images/bots/integrations/11.png', alt: 'Uzum'},
        {src: '/images/bots/integrations/12.png', alt: 'Click'},
        {src: '/images/bots/integrations/13.png', alt: 'Paynet'},
        {src: '/images/bots/integrations/14.png', alt: 'Payme'},
        {src: '/images/bots/integrations/15.png', alt: 'Alif'},
    ],
};

const allIntegrations = [...integrations.row1, ...integrations.row2, ...integrations.row3];
const carouselItems = [...allIntegrations.slice(0, 6), ...allIntegrations.slice(0, 6)];

export function BotsIntegrationsSection() {
    return (
        <section className="bots-integrations-section">
            <div className="bots-integrations-container">
                <h2 className="bots-integrations-title">Интеграции</h2>

                {/* Desktop Grid */}
                <div className="bots-integrations-grid">
                    {allIntegrations.map((item, index) => (
                        <div key={index} className="bots-integrations-logo">
                            <img src={item.src} alt={item.alt}/>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel (auto-scroll) */}
                <div className="bots-integrations-carousel">
                    <div className="bots-integrations-track">
                        {carouselItems.map((item, index) => (
                            <div key={index} className="bots-integrations-logo">
                                <img src={item.src} alt={item.alt}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
