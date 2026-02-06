'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';

interface AccordionItem {
  title: string;
  content: string;
}

const accordionItems: AccordionItem[] = [
  {
    title: 'Разрозненные данные',
    content:
      'В разных отделах используются отдельные программы, не связанные друг с другом. Из-за этого данные рассредоточены, их сложно собрать воедино для отчетов и анализа. Часто информация приходится вручную сводить из разных источников',
  },
  {
    title: 'Дублирование и ошибки',
    content:
      'Одни и те же данные вводятся вручную в несколько систем, что ведёт к расхождениям, ошибкам и потере времени. Интеграция устраняет дублирование и гарантирует единую версию данных',
  },
  {
    title: 'Ручные рутинные операции',
    content:
      'Сотрудники тратят время на копирование данных между системами, формирование отчётов вручную. Интеграция автоматизирует рутину и освобождает время для важных задач',
  },
  {
    title: 'Отсутствие целостной картины',
    content:
      'Руководству сложно получить полную картину бизнеса, когда данные разбросаны по разным системам. Интеграция создаёт единое информационное пространство',
  },
  {
    title: 'Рост бизнеса',
    content:
      'С ростом компании количество систем увеличивается. Интеграция позволяет масштабироваться без потери эффективности и контроля',
  },
];

export function IntegrationsServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openModal } = useModal();

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="integrations-services-section" id="when-need">
      <div className="integrations-services-container">
        {/* Left column: Title + Round button (desktop) */}
        <div className="integrations-services-left">
          <h2 className="integrations-services-title">Когда бизнесу нужна интеграция</h2>
          <button className="integrations-services-btn" onClick={openModal}>
            <span>
              МНЕ ЭТО
              <br />
              ЗНАКОМО
            </span>
          </button>
        </div>

        {/* Right column: Accordion */}
        <div className="integrations-services-accordion">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`integrations-services-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="integrations-services-item-header"
                aria-expanded={activeIndex === index}
                onClick={() => toggleItem(index)}
              >
                <span className="integrations-services-item-title">{item.title}</span>
                <div className="integrations-services-toggle">
                  <svg
                    className="integrations-services-plus"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M17 7V27M7 17H27"
                      stroke="#101010"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className="integrations-services-close"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      d="M9 9L25 25M9 25L25 9"
                      stroke="#101010"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <div className="integrations-services-item-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile button */}
        <button className="integrations-services-btn-mobile" onClick={openModal}>
          Оставить заявку
        </button>
      </div>
    </section>
  );
}
