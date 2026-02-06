interface DataflowCard {
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
}

const dataflowCards: DataflowCard[] = [
  {
    title: 'Синхронные потоки',
    description: 'Когда требуется мгновенный отклик – системы обмениваются данными в реальном времени',
    desktopImage: 'https://www.figma.com/api/mcp/asset/e716459c-a834-434c-a094-d2b25d6ab57f',
    mobileImage: 'https://www.figma.com/api/mcp/asset/f066ac3b-ce27-440d-a3ab-5cea585e73c3',
  },
  {
    title: 'Асинхронные потоки',
    description: 'Если процесс может идти параллельно - отправка данных без ожидания ответа',
    desktopImage: 'https://www.figma.com/api/mcp/asset/9b7d937b-a876-49c8-a3cc-18f2c17308f9',
    mobileImage: 'https://www.figma.com/api/mcp/asset/b5fa95f3-49dc-45c9-a9f2-841cf12d3ea2',
  },
];

export function IntegrationsDataflowSection() {
  return (
    <section className="integrations-dataflow-section" id="dataflow">
      <div className="integrations-dataflow-container">
        <h2 className="integrations-dataflow-title">Сценарии потоков данных</h2>

        <div className="integrations-dataflow-cards">
          {dataflowCards.map((card, index) => (
            <div key={index} className="integrations-dataflow-card">
              <div className="integrations-dataflow-card-text">
                <h3 className="integrations-dataflow-card-title">{card.title}</h3>
                <p className="integrations-dataflow-card-desc">{card.description}</p>
              </div>
              <div className="integrations-dataflow-card-image">
                {/* Desktop image */}
                <img
                  className="integrations-dataflow-img-desktop"
                  src={card.desktopImage}
                  alt={card.title}
                  loading="lazy"
                />
                {/* Mobile image */}
                <img
                  className="integrations-dataflow-img-mobile"
                  src={card.mobileImage}
                  alt={card.title}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
