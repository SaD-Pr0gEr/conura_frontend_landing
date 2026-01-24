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
              src="https://www.figma.com/api/mcp/asset/2245b8d2-5e55-456a-867d-fd7240dfed6a" 
              alt="" 
              className="sites-what-is-icon"
            />
            <span className="sites-what-is-title-accent">Сайт —</span>
          </div>
          {/* Title Row 2: Main text with alien */}
          <div className="sites-what-is-title-main">
            <span>выполняет роль виртуального офиса, где клиент получает информацию о компании, её услугах и продуктах</span>
            <img 
              src="https://www.figma.com/api/mcp/asset/2b61de74-fbca-4e11-9ef2-7d6eaec153e3" 
              alt="" 
              className="sites-what-is-alien"
            />
          </div>
        </div>
        
        {/* Description */}
        <p className="sites-what-is-description">
          Наличие сайта повышает уровень доверия, обеспечивает доступ к широкой аудитории и позволяет выстраивать прямую коммуникацию с потенциальными клиентами
        </p>
        
        {/* Globe Element */}
        <div className="sites-what-is-globe">
          <div className="sites-what-is-globe-overlay"></div>
          <img 
            src="https://www.figma.com/api/mcp/asset/30e1cb4f-f9cc-4073-a4f1-6b6cc589bb2d" 
            alt="" 
            className="sites-what-is-globe-img"
          />
        </div>
      </div>
    </section>
  );
}
