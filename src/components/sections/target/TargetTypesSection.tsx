'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';

interface TypeCard {
  id: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const typeCards: TypeCard[] = [
  {
    id: 'awareness',
    title: 'Brand Awareness',
    description: 'Показы рекламы максимально широкой аудитории для запоминания. Стимулирует запоминание и узнаваемость бренда',
    image: 'https://www.figma.com/api/mcp/asset/73a3954f-ab84-4490-ab8a-712ff2db3987',
    bgColor: '#101010',
  },
  {
    id: 'reach',
    title: 'Reach',
    description: 'Максимальное число показов объявлений в целевой аудитории. Цель – достичь как можно больше пользователей без повторений',
    image: 'https://www.figma.com/api/mcp/asset/c5098d9a-0e91-447b-9bc6-c71438deec7d',
    bgColor: '#3597E6',
  },
  {
    id: 'traffic',
    title: 'Traffic',
    description: 'Привлечение посетителей на сайт, лендинг или в мобильное приложение. Оптимизируется под переходы по рекламе',
    image: 'https://www.figma.com/api/mcp/asset/0c58e600-d8a2-41cd-a9c4-3eb3df1f4591',
    bgColor: '#FF6A3D',
  },
  {
    id: 'engagement',
    title: 'Engagement',
    description: 'Увеличение активности аудитории (лайки, комментарии, репосты, просмотры видео). Подходит для повышения интереса и лояльности к бренду',
    image: 'https://www.figma.com/api/mcp/asset/175b0207-7f68-4414-83fe-9f7881434f10',
    bgColor: '#5D6BFF',
  },
  {
    id: 'leads',
    title: 'Leads',
    description: 'Сбор контактных данных или заявок через формы (например, заявки на консультацию, подписки, загрузки материалов). Помогает напрямую накапливать базу потенциальных клиентов',
    image: 'https://www.figma.com/api/mcp/asset/de65667c-b18c-4135-b6dd-3879cb14f755',
    bgColor: '#04A8BF',
  },
  {
    id: 'sales',
    title: 'Sales/Conversion',
    description: 'Оптимизация на реальные конверсии – покупки, заказы или регистрации. Алгоритм автоматически ищет тех пользователей, которые с большой вероятностью совершат целевое действие',
    image: 'https://www.figma.com/api/mcp/asset/cc632200-6d76-4f98-9bfe-ee6c5a4fd180',
    bgColor: '#19D88B',
  },
];

const mobileImages: { [key: string]: string } = {
  awareness: 'https://www.figma.com/api/mcp/asset/b162aace-78d1-4e95-96f5-a7a639b94726',
  reach: 'https://www.figma.com/api/mcp/asset/c5098d9a-0e91-447b-9bc6-c71438deec7d',
  traffic: 'https://www.figma.com/api/mcp/asset/0c58e600-d8a2-41cd-a9c4-3eb3df1f4591',
  engagement: 'https://www.figma.com/api/mcp/asset/175b0207-7f68-4414-83fe-9f7881434f10',
  leads: 'https://www.figma.com/api/mcp/asset/de65667c-b18c-4135-b6dd-3879cb14f755',
  sales: 'https://www.figma.com/api/mcp/asset/cc632200-6d76-4f98-9bfe-ee6c5a4fd180',
};

export function TargetTypesSection() {
  const [activeTab, setActiveTab] = useState('awareness');
  const { openModal } = useModal();

  const activeCard = typeCards.find((card) => card.id === activeTab) || typeCards[0];

  return (
    <section className="target-types-section" id="types">
      <div className="target-types-container">
        <h2 className="target-types-title">Виды таргетированной рекламы по целям</h2>

        {/* Tabs (Desktop only) */}
        <div className="target-types-tabs">
          {typeCards.map((card) => (
            <button
              key={card.id}
              className={`target-types-tab ${activeTab === card.id ? 'active' : ''}`}
              data-tab={card.id}
              onClick={() => setActiveTab(card.id)}
            >
              {card.title.split('/')[0]}
            </button>
          ))}
        </div>

        {/* Tab Content (Desktop only) */}
        <div className="target-types-content">
          {typeCards.map((card) => (
            <div
              key={card.id}
              className={`target-types-card ${activeTab === card.id ? 'active' : ''}`}
              data-content={card.id}
            >
              <div className="target-types-card-image" style={{ backgroundColor: card.bgColor }}>
                <img src={card.image} alt={card.title} />
              </div>
              <div className="target-types-card-info">
                <div className="target-types-card-heading">
                  <h3 className="target-types-card-title">{card.title}</h3>
                  <p className="target-types-card-desc">{card.description}</p>
                </div>
                <button className="target-types-btn" onClick={openModal}>
                  Отправить заявку
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="target-types-slider">
          <div className="target-types-slider-track">
            {typeCards.map((card) => (
              <div
                key={card.id}
                className="target-types-slider-card"
                style={{ backgroundColor: card.bgColor }}
              >
                <div className="target-types-slider-card-image">
                  <img src={mobileImages[card.id] || card.image} alt={card.title} />
                </div>
                <div className="target-types-slider-card-info">
                  <div className="target-types-slider-card-heading">
                    <h3 className="target-types-slider-card-title">{card.title}</h3>
                    <p className="target-types-slider-card-desc">{card.description}</p>
                  </div>
                  <button className="target-types-slider-btn" onClick={openModal}>
                    Отправить заявку
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
