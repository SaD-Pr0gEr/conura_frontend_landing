export function TargetWhatSection() {
  return (
    <section className="target-what-section" id="what-is">
      <div className="target-what-container">
        <div className="target-what-content">
          <div className="target-what-heading">
            {/* Row 1: Icon + Blue text */}
            <div className="target-what-row-1">
              <img
                src="https://www.figma.com/api/mcp/asset/87e4afc1-bb6e-4e73-8dbe-1025d577d6cc"
                alt=""
                className="target-what-icon"
              />
              <span className="target-what-title-accent">Таргетированная реклама —</span>
            </div>
            {/* Row 2: Black text + Alien */}
            <div className="target-what-row-2">
              <h2 className="target-what-main-title">
                способ продвижения товаров/услуг в соцсетях с показом объявлений выбранной аудитории
              </h2>
              <img
                src="https://www.figma.com/api/mcp/asset/38835b5c-9e37-4d24-a6ba-969dbf55930b"
                alt=""
                className="target-what-alien"
              />
            </div>
          </div>
          <p className="target-what-description">
            Рекламодатель самостоятельно выбирает параметры аудитории, а рекламная система на их
            основе автоматически подбирает тех пользователей, которые с наибольшей вероятностью
            заинтересуются предложением
          </p>
        </div>
        {/* Target Image */}
        <div className="target-what-image">
          <img
            src="https://www.figma.com/api/mcp/asset/a9552b6b-f443-496a-8e81-c682e0008392"
            alt="Target"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
