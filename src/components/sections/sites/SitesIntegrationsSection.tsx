'use client';

const integrations = [
  { src: 'https://www.figma.com/api/mcp/asset/02de74e2-4fad-420c-b06e-d4b431fe6119', alt: 'Uzum' },
  { src: 'https://www.figma.com/api/mcp/asset/29fc59cd-4a7b-427b-87cf-2406642a1418', alt: 'Click' },
  { src: 'https://www.figma.com/api/mcp/asset/8e37a863-ecca-42e9-af64-818aa506daf0', alt: 'Payme' },
  { src: 'https://www.figma.com/api/mcp/asset/c288aad8-02ba-4c8d-b3c9-8c07c822d182', alt: 'Paynet' },
  { src: 'https://www.figma.com/api/mcp/asset/c77337ea-ce91-4caa-90d1-e0255be04fbd', alt: '1C' },
  { src: 'https://www.figma.com/api/mcp/asset/bfe16733-5f44-4568-9fd8-fb8aa0888644', alt: 'amoCRM' },
  { src: 'https://www.figma.com/api/mcp/asset/cfb6f38d-8832-4248-b06f-2b3d81f2a30d', alt: 'Битрикс24' },
  { src: 'https://www.figma.com/api/mcp/asset/356daa5f-7f22-4650-8d6c-03dd66128b95', alt: 'Telegram' },
  { src: 'https://www.figma.com/api/mcp/asset/32c35b33-e632-4caf-bcb5-7f88cc831f1f', alt: 'DIKIDI Business' },
  { src: 'https://www.figma.com/api/mcp/asset/3b050bcd-df13-4701-911a-5a2ef667ecb9', alt: 'Altegio' },
];

const mobileIntegrations = [
  { src: 'https://www.figma.com/api/mcp/asset/02de74e2-4fad-420c-b06e-d4b431fe6119', alt: 'Uzum' },
  { src: 'https://www.figma.com/api/mcp/asset/29fc59cd-4a7b-427b-87cf-2406642a1418', alt: 'Click' },
  { src: 'https://www.figma.com/api/mcp/asset/8e37a863-ecca-42e9-af64-818aa506daf0', alt: 'Payme' },
  { src: 'https://www.figma.com/api/mcp/asset/356daa5f-7f22-4650-8d6c-03dd66128b95', alt: 'Telegram' },
  { src: 'https://www.figma.com/api/mcp/asset/32c35b33-e632-4caf-bcb5-7f88cc831f1f', alt: 'DIKIDI Business' },
  { src: 'https://www.figma.com/api/mcp/asset/3b050bcd-df13-4701-911a-5a2ef667ecb9', alt: 'Altegio' },
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
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel (auto-scroll) */}
        <div className="sites-integrations-carousel">
          <div className="sites-integrations-track">
            {/* First set */}
            {mobileIntegrations.map((item, index) => (
              <div key={`first-${index}`} className="sites-integrations-logo">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {mobileIntegrations.map((item, index) => (
              <div key={`second-${index}`} className="sites-integrations-logo">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
