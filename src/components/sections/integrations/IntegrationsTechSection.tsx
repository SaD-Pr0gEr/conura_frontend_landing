interface TechBlock {
  title: string;
  tags: string[];
}

const leftColumnBlocks: TechBlock[] = [
  {
    title: 'Протоколы и форматы',
    tags: ['REST API', 'SOAP', 'Webhooks', 'XML', 'JSON', 'SQL'],
  },
  {
    title: 'Промежуточное ПО',
    tags: ['RabbitMQ', 'Kafka', 'MuleSoft', 'IBM Integration Bus', 'iPaaS'],
  },
];

const rightColumnBlocks: TechBlock[] = [
  {
    title: 'Инструменты ETL и базы данных',
    tags: [
      'Python',
      'Java',
      'C#',
      'JavaScript',
      'Node.js',
      'PHP',
      'FastAPI',
      'Requests',
      'SOAP SDK',
      'REST SDK',
      'Express',
      'Axios',
    ],
  },
  {
    title: 'Языки и фреймворки разработки',
    tags: ['Docker', 'CI/CD', 'AWS', 'DigitalOcean', 'Heroku', 'Nginx', 'Apache'],
  },
];

export function IntegrationsTechSection() {
  return (
    <section className="integrations-tech-section" id="tech">
      <div className="integrations-tech-container">
        <h2 className="integrations-tech-title">Инструменты и стек технологий</h2>

        <div className="integrations-tech-table">
          {/* Left Column */}
          <div className="integrations-tech-column">
            {leftColumnBlocks.map((block, index) => (
              <div key={index} className="integrations-tech-block">
                <h3 className="integrations-tech-block-title">{block.title}</h3>
                <div className="integrations-tech-tags">
                  {block.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="integrations-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider with Plus */}
          <div className="integrations-tech-divider">
            <div className="integrations-tech-divider-line"></div>
            <div className="integrations-tech-divider-plus">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Column */}
          <div className="integrations-tech-column">
            {rightColumnBlocks.map((block, index) => (
              <div key={index} className="integrations-tech-block">
                <h3 className="integrations-tech-block-title">{block.title}</h3>
                <div className="integrations-tech-tags">
                  {block.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="integrations-tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
