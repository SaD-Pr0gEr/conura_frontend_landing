'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';

const strategies = [
  {
    id: 1,
    title: 'Поиск по целевой аудитории',
    content:
      'Настройка поисковой рекламы с учётом портрета вашей аудитории. Мы можем показать объявления только определённым сегментам пользователей – например, по демографии (пол, возраст), по интересам или по аудиторным спискам. В Google Ads доступны инструменты, позволяющие повышать ставки для тех, кто соответствует вашему идеальному клиенту, и снижать для менее ценных сегментов. Такой подход бьёт точно в цель и повышает конверсию, ведь рекламу видят в основном "ваши" люди',
  },
  {
    id: 2,
    title: 'Ретаргетинг',
    content:
      'Возвращение пользователей, которые уже посещали ваш сайт. Мы настраиваем показ рекламы тем, кто проявил интерес к вашему продукту, но не совершил целевое действие. Это повышает конверсию и снижает стоимость привлечения клиента.',
  },
  {
    id: 3,
    title: 'Создание спроса',
    content:
      'Привлечение новой аудитории через медийную рекламу и кампании Demand Gen. Формируем интерес к вашему продукту у пользователей, которые ещё не искали ваши товары или услуги.',
  },
  {
    id: 4,
    title: 'Связка Power Pair: Поисковая кампания и Performance Max',
    content:
      'Комбинация поисковой кампании и Performance Max для максимального охвата. Поисковая кампания ловит горячий спрос, а Performance Max расширяет охват через все каналы Google.',
  },
  {
    id: 5,
    title: 'Бренд-защита',
    content:
      'Защита брендовых запросов от конкурентов. Настраиваем рекламу по вашим брендовым ключевым словам, чтобы конкуренты не перехватывали ваш трафик.',
  },
  {
    id: 6,
    title: '1P аудитории',
    content:
      'Использование ваших собственных данных о клиентах для таргетинга. Загружаем списки email-адресов и телефонов для точного попадания в вашу аудиторию.',
  },
  {
    id: 7,
    title: 'Alpha-Beta структура ключей',
    content:
      'Организация ключевых слов по структуре Alpha-Beta для максимальной эффективности. Alpha — точные совпадения с высокой конверсией, Beta — широкие запросы для поиска новых ключей.',
  },
];

export function ContextStrategiesSection() {
  const { openModal } = useModal();
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="strategies-section">
      <div className="strategies-container">
        {/* Left: Heading + Button */}
        <div className="strategies-left">
          <h2 className="strategies-title">Стратегии и механики</h2>
          <button className="strategies-btn" onClick={openModal}>
            <span>ОСТАВИТЬ<br />ЗАЯВКУ</span>
          </button>
        </div>

        {/* Right: Accordion */}
        <div className="strategies-accordion">
          {strategies.map((item, index) => (
            <div key={item.id} className={`strategies-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="strategies-item-header" onClick={() => toggleAccordion(index)}>
                <h3 className="strategies-item-title">{item.title}</h3>
                <button className="strategies-item-toggle">
                  <svg className="strategies-icon-close" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 1L15 15M15 1L1 15" stroke="#101010" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg className="strategies-icon-plus" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1V15M1 8H15" stroke="#101010" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="strategies-item-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile button at bottom */}
        <button className="strategies-btn-mobile" onClick={openModal}>
          Оставить заявку
        </button>
      </div>
    </section>
  );
}
