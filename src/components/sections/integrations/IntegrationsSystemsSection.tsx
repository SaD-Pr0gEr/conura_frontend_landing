'use client';

interface Logo {
  src: string;
  alt: string;
}

const desktopLogos: Logo[] = [
  { src: 'https://www.figma.com/api/mcp/asset/1f624a48-fb31-40b0-97f1-3248bea2bad1', alt: '1C' },
  { src: 'https://www.figma.com/api/mcp/asset/0117e00e-0434-4879-8399-5346f0f9be22', alt: 'Битрикс24' },
  { src: 'https://www.figma.com/api/mcp/asset/2e5658ed-9195-47b5-b1f7-67b68b1f249e', alt: 'amoCRM' },
  { src: 'https://www.figma.com/api/mcp/asset/93ff0975-091b-4e6a-a6d3-1b720bd33152', alt: 'Salesforce' },
  { src: 'https://www.figma.com/api/mcp/asset/0d447482-0486-4ca5-9be1-8c65beb2aecf', alt: 'SAP' },
  { src: 'https://www.figma.com/api/mcp/asset/5ca45b5b-c9e0-42b8-bbe6-2d9ae7cdc78f', alt: 'ORACLE' },
  { src: 'https://www.figma.com/api/mcp/asset/9bb6342b-3c4d-45cb-ac76-efcb816174fa', alt: 'Microsoft Dynamics 365' },
  { src: 'https://www.figma.com/api/mcp/asset/d22174d2-9937-4c97-bdc6-fe6ee6e4923e', alt: 'CDEK' },
  { src: 'https://www.figma.com/api/mcp/asset/c370227f-f4c0-40b1-8553-f3f27c3cdac9', alt: 'DHL' },
  { src: 'https://www.figma.com/api/mcp/asset/94cb32fa-4e53-4796-b582-a8d6c0909a31', alt: 'OZON' },
  { src: 'https://www.figma.com/api/mcp/asset/c74b7e21-5182-4e42-bb81-db5f8bb0596a', alt: 'WILDBERRIES' },
  { src: 'https://www.figma.com/api/mcp/asset/571e53b9-9070-4355-945a-31c3ef0bffac', alt: 'amazon' },
  { src: 'https://www.figma.com/api/mcp/asset/afd0f65e-43be-4c79-bd95-9b74ed957b7e', alt: 'Telegram' },
  { src: 'https://www.figma.com/api/mcp/asset/4b428452-3d4b-4b5f-aa4c-3e0a45822bc4', alt: 'Google Sheets' },
  { src: 'https://www.figma.com/api/mcp/asset/6f7f0ffe-3568-48ea-8c77-46e42e538799', alt: 'Didox+' },
];

const mobileRow1: Logo[] = [
  { src: 'https://www.figma.com/api/mcp/asset/6511ba58-0322-4556-9a54-d7995520bb41', alt: '1C' },
  { src: 'https://www.figma.com/api/mcp/asset/fbff641a-dec9-438f-92f3-8e4826002831', alt: 'Битрикс24' },
  { src: 'https://www.figma.com/api/mcp/asset/e263fcbf-b203-480b-a833-b4f8f35d65e1', alt: 'amoCRM' },
  { src: 'https://www.figma.com/api/mcp/asset/0accbe47-5254-402f-af76-48feddcf1f85', alt: 'Salesforce' },
  { src: 'https://www.figma.com/api/mcp/asset/6511ba58-0322-4556-9a54-d7995520bb41', alt: 'ORACLE' },
  { src: 'https://www.figma.com/api/mcp/asset/85cca656-5f8f-434e-9c2e-539a6078bd6d', alt: 'Microsoft Dynamics 365' },
  { src: 'https://www.figma.com/api/mcp/asset/b0ec6e30-1247-4c93-8ce9-40227d1aebe1', alt: 'CDEK' },
  { src: 'https://www.figma.com/api/mcp/asset/7544f055-8f2e-49fd-b599-68c9a7c6ea22', alt: 'DHL' },
];

const mobileRow2: Logo[] = [
  { src: 'https://www.figma.com/api/mcp/asset/b235428d-bebe-4086-bc7c-d33ba01e1fee', alt: 'Telegram' },
  { src: 'https://www.figma.com/api/mcp/asset/5f1dbb31-c5fb-4243-bd00-0211ba6cfbec', alt: 'Google Sheets' },
  { src: 'https://www.figma.com/api/mcp/asset/ad4baaa1-b7d4-4894-9f1d-5403c27a023d', alt: 'Didox+' },
  { src: 'https://www.figma.com/api/mcp/asset/083e2f8b-cc86-412a-aa9b-facb830685b4', alt: 'OZON' },
  { src: 'https://www.figma.com/api/mcp/asset/443bcf56-67e6-46e8-b8de-ee30b503eab2', alt: 'WILDBERRIES' },
  { src: 'https://www.figma.com/api/mcp/asset/8e5a99ae-2da6-4f45-934b-3e1b10ebd87b', alt: 'amazon' },
  { src: 'https://www.figma.com/api/mcp/asset/d5cd290b-bbc1-4c77-8e23-ced66ec8be3a', alt: 'SAP' },
];

export function IntegrationsSystemsSection() {
  return (
    <section className="integrations-systems-section" id="systems">
      <div className="integrations-systems-container">
        <h2 className="integrations-systems-title">Системы и сервисы</h2>

        {/* Desktop Grid (5 columns x 3 rows = 15 logos) */}
        <div className="integrations-systems-grid">
          {desktopLogos.map((logo, index) => (
            <div key={index} className="integrations-systems-logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>

        {/* Mobile Slider (2 rows with horizontal scroll) */}
        <div className="integrations-systems-mobile">
          {/* Row 1 */}
          <div className="integrations-systems-slider">
            <div className="integrations-systems-slider-track">
              {mobileRow1.map((logo, index) => (
                <div key={index} className="integrations-systems-logo-mobile">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
          {/* Row 2 */}
          <div className="integrations-systems-slider">
            <div className="integrations-systems-slider-track">
              {mobileRow2.map((logo, index) => (
                <div key={index} className="integrations-systems-logo-mobile">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
