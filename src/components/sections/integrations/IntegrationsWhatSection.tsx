export function IntegrationsWhatSection() {
  return (
    <section className="integrations-what-section" id="what-is-integration">
      <div className="integrations-what-container">
        {/* Mobile: Icons row */}
        <div className="integrations-what-icons-mobile">
          <img
            src="https://www.figma.com/api/mcp/asset/082b1608-338a-4776-a210-e4c11b527fac"
            alt=""
            className="integrations-what-icon-mobile"
          />
          <img
            src="https://www.figma.com/api/mcp/asset/ea3e1fd8-1f3b-4b91-a4ee-a936769f7118"
            alt=""
            className="integrations-what-alien-mobile"
          />
        </div>

        {/* Desktop: First line with icon + pink text */}
        <div className="integrations-what-line1">
          <img
            src="https://www.figma.com/api/mcp/asset/0be2cf58-d6a7-4f6b-818f-631b8a40dd99"
            alt=""
            className="integrations-what-icon"
          />
          <span className="integrations-what-accent">Интеграция —</span>
        </div>

        {/* Title with inline alien icon */}
        <div className="integrations-what-title-wrap">
          <h2 className="integrations-what-title">
            <span className="integrations-what-title-mobile-accent">Интеграция — </span>
            это процесс объединения разных{' '}
            <img
              src="https://www.figma.com/api/mcp/asset/bc9bb79a-c932-4a5b-9421-6896d98e82d3"
              alt=""
              className="integrations-what-alien-inline"
            />{' '}
            информационных систем в единое целое
          </h2>
        </div>

        {/* Description */}
        <p className="integrations-what-description">
          Данные свободно перетекают между ними, исключается ручной перенос и дублирование. Бизнес
          получает единую автоматизированную цепочку. Это повышает общую эффективность работы и
          прозрачность процессов
        </p>
      </div>

      {/* Puzzle image - protruding from section */}
      <div className="integrations-what-puzzle">
        <img
          src="https://www.figma.com/api/mcp/asset/8bab76e0-be00-4824-a95d-f641f5f9e1fb"
          alt=""
          className="integrations-what-puzzle-img"
        />
      </div>
    </section>
  );
}
