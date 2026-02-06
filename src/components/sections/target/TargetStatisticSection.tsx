'use client';

export function TargetStatisticSection() {
  return (
    <section className="target-statistic-section" id="statistic">
      <div className="target-statistic-container">
        <div className="target-statistic-heading">
          <div className="target-statistic-heading-left">
            <div className="target-statistic-title-row">
              <h2 className="target-statistic-title">Рост площадок Meta</h2>
              <img
                src="https://www.figma.com/api/mcp/asset/7659a855-5324-4c7e-bb67-bbca035a4671"
                alt="Meta"
                className="target-statistic-meta-logo target-statistic-meta-logo-desktop"
              />
            </div>
            <p className="target-statistic-subtitle">Исходя от данных по уплаченным налогам</p>
          </div>
          <img
            src="https://www.figma.com/api/mcp/asset/7659a855-5324-4c7e-bb67-bbca035a4671"
            alt="Meta"
            className="target-statistic-meta-logo target-statistic-meta-logo-mobile"
          />
        </div>

        <div className="target-statistic-chart">
          <p className="target-statistic-source">ист. пресс-служба Налогового комитета</p>
          <div className="target-statistic-columns">
            <div className="target-statistic-column target-statistic-column-2022">
              <span className="target-statistic-year">2022 г.</span>
              <span className="target-statistic-value">18,6 млрд сумов</span>
            </div>
            <div className="target-statistic-column target-statistic-column-2023">
              <span className="target-statistic-year">2023 г.</span>
              <div className="target-statistic-sum">
                <span className="target-statistic-percent">+41,9%</span>
                <span className="target-statistic-value">26,4 млрд сумов</span>
              </div>
            </div>
            <div className="target-statistic-column target-statistic-column-2024">
              <span className="target-statistic-year">2024 г.</span>
              <div className="target-statistic-sum">
                <span className="target-statistic-percent">+58%</span>
                <span className="target-statistic-value">41,7 млрд сумов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
