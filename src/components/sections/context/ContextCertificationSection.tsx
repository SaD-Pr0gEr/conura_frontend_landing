const certificates = [
  {
    id: 1,
    src: 'https://www.figma.com/api/mcp/asset/5e0d36d7-6a1b-43e0-b94f-556fbc37db8e',
    alt: 'Google Ads Search Certified',
  },
  {
    id: 2,
    src: 'https://www.figma.com/api/mcp/asset/7093722a-8aba-41cc-8780-ace1db75f9f4',
    alt: 'Google Ads Display Certified',
  },
  {
    id: 3,
    src: 'https://www.figma.com/api/mcp/asset/6d0a4208-0b4f-424e-ac3d-7a5e7e14c367',
    alt: 'Google Ads Video Certified',
  },
  {
    id: 4,
    src: 'https://www.figma.com/api/mcp/asset/18254a46-bd97-4ce0-b4c3-42429f2b25bb',
    alt: 'Shopping Ads Certified',
  },
  {
    id: 5,
    src: 'https://www.figma.com/api/mcp/asset/bcf32f96-c809-4542-bbcc-88c95530dd3d',
    alt: 'Google Ads Apps Certified',
  },
  {
    id: 6,
    src: 'https://www.figma.com/api/mcp/asset/546fd2f0-fa42-4d9c-95b6-a9f64b3006eb',
    alt: 'Google Ads Measurement Certified',
    bordered: true,
  },
  {
    id: 7,
    src: 'https://www.figma.com/api/mcp/asset/546fd2f0-fa42-4d9c-95b6-a9f64b3006eb',
    alt: 'Google Ads Measurement Certified',
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
            Вы доверяете свою рекламу профессионалам. В нашем агентстве более 10 сертификатов от Google по основным
            направлениям интернет-рекламы
          </p>
        </div>

        <div className="certification-slider-wrapper">
          <div className="certification-slider-track">
            {certificates.map((cert) => (
              <div key={cert.id} className={`certification-logo ${cert.bordered ? 'certification-logo-bordered' : ''}`}>
                <img src={cert.src} alt={cert.alt} className="certification-logo-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
