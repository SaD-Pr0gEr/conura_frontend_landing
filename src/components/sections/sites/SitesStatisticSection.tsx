'use client';

export function SitesStatisticSection() {
  return (
    <section className="sites-statistic-section">
      <div className="sites-statistic-container">
        {/* Heading */}
        <div className="sites-statistic-heading">
          <h2 className="sites-statistic-title">
            <span className="sites-statistic-title-desktop">31 млн пользователей</span>
            <span className="sites-statistic-title-mobile">26+ млн пользователей</span>
          </h2>
          <p className="sites-statistic-subtitle">Регулярно ищут информацию в интернете</p>
        </div>
        
        {/* Charts Row */}
        <div className="sites-statistic-charts">
          {/* Left: Circle Chart */}
          <div className="sites-statistic-chart-block">
            <div className="sites-statistic-chart">
              <img 
                src="https://www.figma.com/api/mcp/asset/831d755c-f2bb-4b2a-8c08-b31e6905fd09" 
                alt="" 
                className="sites-chart-bg"
              />
              <img 
                src="https://www.figma.com/api/mcp/asset/2b3a4bb4-f8f3-47bb-98ff-4dc6ea8e1ce9" 
                alt="" 
                className="sites-chart-progress"
              />
              <div className="sites-chart-center">
                <span className="sites-chart-value">81,5%</span>
                <span className="sites-chart-label">от всего населения</span>
              </div>
            </div>
          </div>
          
          {/* Right: Stats Block */}
          <div className="sites-statistic-right">
            {/* Main Stats Card */}
            <div className="sites-statistic-card">
              <div className="sites-statistic-card-content">
                <span className="sites-statistic-percent">33%</span>
                <h3 className="sites-statistic-card-title">430 000 активных предприятий имеют сайт</h3>
                <p className="sites-statistic-card-desc">от числа всех активных компаний</p>
                <div className="sites-statistic-icons">
                  <img 
                    src="https://www.figma.com/api/mcp/asset/49dd7d07-7adb-40da-b1fb-bd743db1d50f" 
                    alt="Google" 
                    className="sites-statistic-icon"
                  />
                  <img 
                    src="https://www.figma.com/api/mcp/asset/786a56cf-706d-4c5d-a0cb-b378e8ea8129" 
                    alt="Yandex" 
                    className="sites-statistic-icon"
                  />
                </div>
              </div>
              <div className="sites-statistic-bubbles">
                <img src="https://www.figma.com/api/mcp/asset/34346081-837e-4155-8002-233436f88034" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/34346081-837e-4155-8002-233436f88034" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/bde7b84a-dfa1-4961-91dd-00c9be3a611e" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/38896154-e267-464d-af5c-80ef4f256a91" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/868cf7ec-6060-49b2-9bca-04b20bd41844" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/a423c47b-fdd6-407c-b42c-2246650087f2" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/2fe59366-ba59-48b1-8526-002d9c22872f" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/cc105d16-be93-455d-8305-734bd50b88cf" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/21b05855-215a-4bf0-8fd3-0d186a9b1dd7" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/ed4ae77c-00f6-4fdb-929f-1c063e6d9689" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/0b8334d8-69bd-4278-8002-8046bc50a93c" alt="" className="sites-bubble-row" />
                <img src="https://www.figma.com/api/mcp/asset/34346081-837e-4155-8002-233436f88034" alt="" className="sites-bubble-row" />
              </div>
            </div>
            
            {/* Sources Block */}
            <div className="sites-statistic-sources">
              <span className="sites-statistic-sources-label">Источники</span>
              <div className="sites-statistic-sources-list">
                <span className="sites-statistic-source">Digital 2026</span>
                <span className="sites-statistic-source-divider"></span>
                <span className="sites-statistic-source">datareportal.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
