'use client';

import { useState, useRef } from 'react';

interface ScenarioCard {
  image: string;
  title: string;
  description: string;
}

const scenarioCards: ScenarioCard[] = [
  {
    image: 'https://www.figma.com/api/mcp/asset/1c2549fe-0887-4e1f-80ea-8ed76aeb5e47',
    title: 'E-commerce и склад',
    description:
      'Интернет-магазин принимает заказ → информация автоматически уходит в ERP/складскую систему → товар резервируется на складе → данные о наличии и статусе заказа возвращаются на сайт и в CRM. В результате клиент видит актуальный сток онлайн, менеджеры не тратят время на ручной ввод, а отгрузка проходит быстрее. Это пример сквозного процесса, где интеграция связала сайт, CRM и склад в единое целое',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/bb31cf56-b384-4389-a90b-c5bd37903389',
    title: 'CRM и маркетинг',
    description:
      'Форма захвата лида на сайте или в соцсети → заявка мгновенно передается в CRM → система CRM распределяет лид менеджеру и запускает автоматическое приветственное письмо из email-маркетинг сервиса. Далее CRM и сервис рассылок действуют синхронно: напоминания, специальные предложения – все отправляется вовремя и на основе актуальных данных из CRM. Такой сценарий демонстрирует, как интеграция объединяет отдел продаж и маркетинга',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/9d0ad9ba-587a-4310-a69f-54230d6a6a82',
    title: 'Производство и логистика',
    description:
      'Заказ клиента на крупную партию товара → система продаж передает данные в производственную систему (MES) → запускается производство или сборка продукта. По готовности ERP отправляет данные в логистическую систему → автоматически вызывается транспорт для доставки → клиент получает трек-номер из системы доставки',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/b28f5c8b-c745-44dd-86df-27e8ec1f4a87',
    title: 'Финансы и отчетность',
    description:
      'Траты сотрудника фиксируются в корпоративной системе расходов → автоматически синхронизируются с бухгалтерской программой 1С → в конце месяца система собирает сводный отчет о расходах и отправляет на утверждение руководству. При интеграции финансовых инструментов и бухгалтерии человеческий фактор сводится к минимуму',
  },
];

export function IntegrationsScenariosSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, scenarioCards.length - 1));
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / scenarioCards.length;
      sliderRef.current.scrollTo({
        left: (currentSlide + 1) * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / scenarioCards.length;
      sliderRef.current.scrollTo({
        left: (currentSlide - 1) * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="integrations-scenarios-section" id="scenarios">
      <div className="integrations-scenarios-container">
        {/* Header with title and arrows (desktop) */}
        <div className="integrations-scenarios-header">
          <h2 className="integrations-scenarios-title">Сценарии использования</h2>
          <div className="integrations-scenarios-arrows">
            <button
              className="integrations-scenarios-arrow integrations-scenarios-arrow-prev"
              aria-label="Предыдущий"
              onClick={prevSlide}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  d="M18 9L12 15L18 21"
                  stroke="#101010"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="integrations-scenarios-arrow integrations-scenarios-arrow-next"
              aria-label="Следующий"
              onClick={nextSlide}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  d="M12 9L18 15L12 21"
                  stroke="#101010"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          className="integrations-scenarios-slider"
          id="integrationsScenariosSlider"
          ref={sliderRef}
        >
          <div className="integrations-scenarios-track">
            {scenarioCards.map((card, index) => (
              <div key={index} className="integrations-scenarios-card">
                <div className="integrations-scenarios-card-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="integrations-scenarios-card-info">
                  <h3 className="integrations-scenarios-card-title">{card.title}</h3>
                  <p className="integrations-scenarios-card-desc">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
