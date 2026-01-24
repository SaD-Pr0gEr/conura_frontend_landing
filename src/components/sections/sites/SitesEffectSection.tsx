'use client';

import { useState, useCallback } from 'react';

const cards = [
  {
    id: 1,
    image: 'https://www.figma.com/api/mcp/asset/3288b878-35ef-4f4e-afd2-8a6ddc374c52',
    alt: '+30% рост продаж',
    text: 'Компании с собственным сайтом растут значительно быстрее тех, кто присутствует только офлайн. Благодаря расширению охвата и автоматизации, вы увеличиваете выручку и клиентскую базу',
    colorClass: 'sites-effect-card-light',
  },
  {
    id: 2,
    image: 'https://www.figma.com/api/mcp/asset/ea976c0f-7174-4427-82c6-bf88ee5f1aca',
    alt: 'До +80% к конверсии',
    text: 'Грамотно спроектированный сайт с понятным интерфейсом и удобной навигацией удерживает посетителей и направляет их к целевому действию',
    colorClass: 'sites-effect-card-purple',
  },
  {
    id: 3,
    image: 'https://www.figma.com/api/mcp/asset/0b5f917f-668a-4e5a-9a12-5e31d566db3b',
    alt: '70% клиентов ищут вас в интернете',
    text: 'Большинство потенциальных клиентов начинают знакомство с компанией через интернет. Без сайта вы теряете значительную часть аудитории',
    colorClass: 'sites-effect-card-dark',
  },
  {
    id: 4,
    image: 'https://www.figma.com/api/mcp/asset/556dd623-78b7-481a-a03f-7f149367e8bc',
    alt: 'Увеличение эффективности рекламы',
    text: 'Качественный сайт повышает отдачу от рекламных кампаний. Посетители с большей вероятностью станут клиентами, если попадут на профессиональный ресурс',
    colorClass: 'sites-effect-card-light',
  },
];

export function SitesEffectSection() {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleFlip = useCallback((id: number) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <section className="sites-effect-section">
      <div className="sites-effect-container">
        {/* Header */}
        <div className="sites-effect-header">
          <h2 className="sites-effect-title">Эффект от сайта</h2>
          <div className="sites-effect-arrows sites-effect-arrows-desktop">
            <button className="sites-effect-arrow sites-effect-arrow-prev" aria-label="Предыдущий" onClick={prevSlide}>
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path d="M8 2L2 8L8 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="sites-effect-arrow sites-effect-arrow-next" aria-label="Следующий" onClick={nextSlide}>
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path d="M2 2L8 8L2 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Cards Container */}
        <div className="sites-effect-cards">
          {cards.map((card) => (
            <div key={card.id} className={`sites-effect-card ${flippedCards[card.id] ? 'flipped' : ''}`} data-card={card.id}>
              <div className="sites-effect-card-inner">
                {/* Front (Image) */}
                <div className={`sites-effect-card-front ${card.colorClass}`}>
                  <div className="sites-effect-card-icon">
                    <img src={card.image} alt={card.alt} />
                  </div>
                  <button className="sites-effect-flip-btn" aria-label="Перевернуть карточку" onClick={() => toggleFlip(card.id)}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M6 12C6 12 7.5 7 12 7H18M18 7L15 4M18 7L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M24 18C24 18 22.5 23 18 23H12M12 23L15 26M12 23L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                {/* Back (Text) */}
                <div className="sites-effect-card-back">
                  <p className="sites-effect-card-text">{card.text}</p>
                  <button className="sites-effect-flip-btn sites-effect-flip-btn-back" aria-label="Перевернуть карточку" onClick={() => toggleFlip(card.id)}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M6 12C6 12 7.5 7 12 7H18M18 7L15 4M18 7L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M24 18C24 18 22.5 23 18 23H12M12 23L15 26M12 23L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Arrows */}
        <div className="sites-effect-arrows sites-effect-arrows-mobile">
          <button className="sites-effect-arrow sites-effect-arrow-prev" aria-label="Предыдущий" onClick={prevSlide}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M8 2L2 8L8 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="sites-effect-arrow sites-effect-arrow-next" aria-label="Следующий" onClick={nextSlide}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M2 2L8 8L2 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
