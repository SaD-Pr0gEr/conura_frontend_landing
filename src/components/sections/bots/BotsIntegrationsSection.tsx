'use client';

const integrations = {
  row1: [
    { src: 'https://www.figma.com/api/mcp/asset/ea5da185-5df8-420f-9dbe-8aa3baa874c2', alt: 'Telegram' },
    { src: 'https://www.figma.com/api/mcp/asset/9cb97a08-25ed-49f8-8a50-b48bf75b3296', alt: 'WhatsApp' },
    { src: 'https://www.figma.com/api/mcp/asset/e952dcb2-7e58-48c9-b0b4-6ec17be8684a', alt: 'Instagram' },
    { src: 'https://www.figma.com/api/mcp/asset/6d9a1c2f-dff2-410f-bcef-c1f45e73adb6', alt: 'Facebook' },
    { src: 'https://www.figma.com/api/mcp/asset/09cc0fdc-36e1-43b9-9627-6d2a58a0fea4', alt: 'Meta' },
  ],
  row2: [
    { src: 'https://www.figma.com/api/mcp/asset/46a13fff-1984-4b96-9d83-46856e417bf3', alt: 'ChatGPT' },
    { src: 'https://www.figma.com/api/mcp/asset/c6bc39f3-a98f-45ce-a92c-ab7091d42fdc', alt: 'amoCRM' },
    { src: 'https://www.figma.com/api/mcp/asset/1e54fa6f-e4b7-44dd-ac8d-3b70b242eb83', alt: 'Битрикс24' },
    { src: 'https://www.figma.com/api/mcp/asset/542c2604-b742-4300-98c8-6f4d08f1daef', alt: '1C' },
    { src: 'https://www.figma.com/api/mcp/asset/f663ce92-0b88-4234-83bd-42704b3d5a87', alt: 'Google Sheets' },
  ],
  row3: [
    { src: 'https://www.figma.com/api/mcp/asset/e9ec046d-8a16-4c76-9a66-4e0d03fc8f95', alt: 'Uzum' },
    { src: 'https://www.figma.com/api/mcp/asset/d9e6b7b3-6272-45ac-846f-4b238ff7e3cb', alt: 'Click' },
    { src: 'https://www.figma.com/api/mcp/asset/8f9a67e5-b982-45f3-9e2c-3105484a6b0f', alt: 'Paynet' },
    { src: 'https://www.figma.com/api/mcp/asset/1bfd7311-201a-42bb-82ec-8f34b9b0eb8d', alt: 'Payme' },
    { src: 'https://www.figma.com/api/mcp/asset/a42f2f59-4c96-470b-b526-ea3277a214ec', alt: 'Alif' },
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
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>

        {/* Mobile Carousel (auto-scroll) */}
        <div className="bots-integrations-carousel">
          <div className="bots-integrations-track">
            {carouselItems.map((item, index) => (
              <div key={index} className="bots-integrations-logo">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
