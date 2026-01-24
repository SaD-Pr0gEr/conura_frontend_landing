'use client';

import { useState, useRef, useEffect } from 'react';

const directions = [
  {
    image: 'https://www.figma.com/api/mcp/asset/fb22b764-3bbc-4c5c-a59e-12e42512094a',
    alt: 'Продажи и eCommerce',
    text: 'Консультации покупателей, оформление заказов, продажа товаров и услуг через чат. Бот может показывать каталог, принимать оплату и организовывать доставку',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/3d7e878b-f026-477c-8a70-c7c8f9a13cbb',
    alt: 'Лидогенерация',
    text: 'Запись клиентов на встречи или услуги через диалог: выбор даты, времени, специалиста. Такие боты собирают лиды, предоставляют информацию о специалистах, отзывах, и интегрируются с CRM для управления записями',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/cc119fb3-c372-4f59-bece-813a4a49f133',
    alt: 'Поддержка и самообслуживание',
    text: 'Автоответы на частые вопросы, помощь в решении типовых проблем, приём заявок в техподдержку. Бот фильтрует обращения, даёт мгновенные ответы или подключает живого оператора при сложном вопросе',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/0a6b35b2-baef-4f81-a9a3-d94c0cdffcb6',
    alt: 'Внутренние процессы и HR',
    text: 'Внутри компаний боты помогают сотрудникам: принимают заявки на отпуск или пропуск, отвечают на вопросы по правилам компании, обучают новому персоналу (онбординг) и рассылают объявления',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/c106ebaa-4a7d-406b-a884-e2fb99186cb0',
    alt: 'Сервис и логистика',
    text: 'Отслеживание заказов и доставок, уведомления о статусе отправлений, бронирование столиков или номеров. Боты в сервисных отраслях (рестораны, такси, курьерские службы) ускоряют обслуживание клиентов',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/5e421805-46a4-4780-adbd-fada0a7af4bd',
    alt: 'Интеграционные и отраслевые решения',
    text: 'Индивидуальные решения для вашей отрасли: медицина, образование, HoReCa, недвижимость. Интеграция с 1C, amoCRM, Bitrix24 и другими системами',
  },
];

export function BotsDirectionsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(directions.length - 1, prev + 1));
  };

  useEffect(() => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.firstElementChild?.clientWidth || 0;
      const gap = 16;
      trackRef.current.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    }
  }, [currentIndex]);

  return (
    <section className="bots-directions-section" id="directions">
      <div className="bots-directions-header">
        <h2 className="bots-directions-title">Направления</h2>
        <div className="bots-directions-arrows bots-directions-arrows-desktop">
          <button className="bots-directions-arrow bots-directions-arrow-prev" aria-label="Предыдущий" onClick={prevSlide}>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M10 2L2 10L10 18" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="bots-directions-arrow bots-directions-arrow-next" aria-label="Следующий" onClick={nextSlide}>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M2 2L10 10L2 18" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="bots-directions-slider" id="botsDirectionsSlider">
        <div className="bots-directions-track" ref={trackRef}>
          {directions.map((direction, index) => (
            <div key={index} className={`bots-directions-card ${flippedCards.has(index) ? 'flipped' : ''}`} data-index={index}>
              <div className="bots-directions-card-inner">
                <div className="bots-directions-card-front">
                  <img src={direction.image} alt={direction.alt} className="bots-directions-card-img" />
                  <button
                    className="bots-directions-flip-btn bots-directions-flip-btn-front"
                    aria-label="Подробнее"
                    onClick={() => toggleFlip(index)}
                  >
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
                      <path d="M1 9h24M17 1l8 8-8 8" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="bots-directions-card-back">
                  <p className="bots-directions-card-text">{direction.text}</p>
                  <button
                    className="bots-directions-flip-btn bots-directions-flip-btn-back"
                    aria-label="Назад"
                    onClick={() => toggleFlip(index)}
                  >
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
                      <path d="M1 9h24M17 1l8 8-8 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile arrows */}
      <div className="bots-directions-arrows bots-directions-arrows-mobile">
        <button className="bots-directions-arrow bots-directions-arrow-prev" aria-label="Предыдущий" onClick={prevSlide}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M8 2L2 8L8 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="bots-directions-arrow bots-directions-arrow-next" aria-label="Следующий" onClick={nextSlide}>
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M2 2L8 8L2 14" stroke="#101010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
