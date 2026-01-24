'use client';

import { useState } from 'react';

interface SecurityItem {
  icon: string;
  title: string;
  content: string[];
}

const securityItems: SecurityItem[] = [
  {
    icon: 'https://www.figma.com/api/mcp/asset/d404c976-7584-4cd6-9c06-ef6c4ae79be8',
    title: 'Хранение данных',
    content: [
      '- Облако или локальный сервер клиента — в зависимости от политики безопасности',
      '- Настраиваем гибко под требования компании',
    ],
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/2aa4cf88-6667-46d5-a129-0367d2550ac3',
    title: 'Юридическая защита',
    content: [
      '- Полное соответствие законодательству о защите персональных данных',
      '- NDA и договоры с гарантией конфиденциальности',
    ],
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/814eb878-43b4-4b3c-8b46-d9228916d37b',
    title: 'Техническая защита',
    content: [
      '- Шифрование данных на всех уровнях (SSL/TLS, AES-256)',
      '- Регулярные аудиты безопасности и обновления',
    ],
  },
  {
    icon: 'https://www.figma.com/api/mcp/asset/843fd47d-cff1-4dc6-924e-07f723588bc8',
    title: 'Результат',
    content: [
      '- Безопасное хранение данных клиентов',
      '- Прозрачная работа и полный контроль',
    ],
  },
];

export function BotsSecuritySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bots-security-section">
      <div className="bots-security-container">
        <h2 className="bots-security-title">Безопасность и конфиденциальность</h2>

        <div className="bots-security-items">
          {securityItems.map((item, index) => (
            <div
              key={index}
              className={`bots-security-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="bots-security-item-header"
                aria-expanded={activeIndex === index}
                onClick={() => toggleItem(index)}
              >
                <div className="bots-security-item-left">
                  <div className="bots-security-icon">
                    <img src={item.icon} alt="" className="bots-security-icon-img" />
                  </div>
                  <span className="bots-security-item-title">{item.title}</span>
                </div>
                <div className="bots-security-toggle">
                  <svg className="bots-security-plus" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M17 7V27M7 17H27" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg className="bots-security-close" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M9 9L25 25M9 25L25 9" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <div className="bots-security-item-content">
                {item.content.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
