export function ContextWhatIsSection() {
  return (
    <section className="what-is-section">
      <div className="what-is-container">
        {/* Icons */}
        <div className="what-is-icons">
          <img src="/images/what-is-icon-bars.svg" alt="" className="what-is-icon-bars" />
          <img
            src="https://www.figma.com/api/mcp/asset/cf14cc0e-2039-442a-ba59-e54121494d97"
            alt=""
            className="what-is-icon-alien"
          />
        </div>

        {/* Heading */}
        <div className="what-is-heading">
          <h2 className="what-is-title">
            <span className="what-is-title-orange">Контекстная реклама —</span>
            <span className="what-is-title-black">
              это объявления, которые показываются в поиске на сайтах или в приложениях
            </span>
            <img
              src="https://www.figma.com/api/mcp/asset/cf14cc0e-2039-442a-ba59-e54121494d97"
              alt=""
              className="what-is-title-alien"
            />
          </h2>
        </div>

        {/* Description */}
        <p className="what-is-description">
          Это способ привлечь аудиторию, уже заинтересованную в вашем предложении. Таргетинг выставляются по ключевым словам, гео, демографии, интересам и поведению пользователей
        </p>

        {/* Decorative element */}
        <div className="what-is-decoration">
          <img
            src="https://www.figma.com/api/mcp/asset/23e2be64-24ed-48ce-9aaf-321484e887bb"
            alt=""
            className="what-is-decoration-img"
          />
        </div>
      </div>
    </section>
  );
}
