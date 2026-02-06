export function CertificateSection() {
  return (
    <section className="certificate-section">
      {/* Desktop: Header with title and IT Park logo */}
      <div className="certificate-header">
        <div className="certificate-heading">
          <span className="certificate-heading-accent">Conura —</span>
          <span className="certificate-heading-text">официальный резидент<br/>IT-парка</span>
        </div>
        <img 
          src="https://www.figma.com/api/mcp/asset/59ebbc24-100b-4aac-a7c8-855bd1b09f9a" 
          alt="IT Park Logo" 
          className="certificate-logo-desktop"
          loading="lazy"
        />
      </div>
      
      {/* Scene Image */}
      <div className="certificate-scene">
        <picture>
          <source media="(min-width: 1024px)" srcSet="https://www.figma.com/api/mcp/asset/90fb0fb7-965e-4aff-9b38-a8ace072252a" />
          <img 
            src="https://www.figma.com/api/mcp/asset/90fb0fb7-965e-4aff-9b38-a8ace072252a" 
            alt="IT Park Scene" 
            className="certificate-scene-img"
            loading="lazy"
          />
        </picture>
      </div>
      
      {/* Mobile: Content below image */}
      <div className="certificate-content-mobile">
        <div className="certificate-text">
          <h2 className="certificate-title"><span className="text-accent">Conura —</span> официальный резидент IT-парка</h2>
          <p className="certificate-description">Мы являемся официальным резидентом<br/>IT-Парка Узбекистана</p>
        </div>
        <button className="btn btn-primary certificate-btn-mobile" id="certificateBtnMobile" disabled>
          <img 
            src="https://www.figma.com/api/mcp/asset/59ebbc24-100b-4aac-a7c8-855bd1b09f9a" 
            alt="IT Park Logo" 
            className="certificate-btn-icon"
            loading="lazy"
          />
          Посмотреть сертификат
        </button>
      </div>
      
      {/* Desktop: Round button overlaid on image */}
      <button className="certificate-btn-round" id="certificateBtnDesktop" disabled>
        <span>Посмотреть<br/>сертификат</span>
      </button>
    </section>
  );
}
