'use client';

import { useModal } from '@/context/ModalContext';

interface TypeCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const typeCards: TypeCard[] = [
  {
    icon: (
      <svg width="94" height="55" viewBox="0 0 94 55" fill="none">
        <circle cx="24" cy="27.5" r="22" stroke="#FF2050" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="70" cy="27.5" r="22" fill="#101010" />
      </svg>
    ),
    title: 'Интеграция данных',
    description: 'Низкоуровневое объединение на уровне баз данных и файлов',
  },
  {
    icon: (
      <svg width="95" height="55" viewBox="0 0 95 55" fill="none">
        <rect x="2" y="5" width="40" height="45" rx="8" fill="#FF2050" />
        <rect x="53" y="5" width="40" height="45" rx="8" fill="#101010" />
        <line
          x1="22"
          y1="20"
          x2="22"
          y2="35"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        <line
          x1="73"
          y1="20"
          x2="73"
          y2="35"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
      </svg>
    ),
    title: 'Интеграция приложений (API)',
    description:
      'Разные приложения (CRM, сайт, ERP и т.д.) связаны через API-интерфейсы. События в одной системе сразу вызывают обмен сообщениями с другой',
  },
  {
    icon: (
      <svg width="97" height="55" viewBox="0 0 97 55" fill="none">
        <path d="M10 15L30 27.5L10 40V15Z" fill="#101010" />
        <circle cx="60" cy="18" r="12" stroke="#FF2050" strokeWidth="2" />
        <circle cx="60" cy="18" r="5" fill="#FF2050" />
        <circle cx="80" cy="37" r="12" stroke="#FF2050" strokeWidth="2" />
        <circle cx="80" cy="37" r="5" fill="#FF2050" />
      </svg>
    ),
    title: 'Интеграция через интерфейс (RPA)',
    description: 'Низкоуровневое объединение на уровне баз данных и файлов',
  },
  {
    icon: (
      <svg width="97" height="55" viewBox="0 0 97 55" fill="none">
        <circle cx="22" cy="27.5" r="18" stroke="#101010" strokeWidth="2" />
        <circle cx="22" cy="27.5" r="6" fill="#101010" />
        <rect x="16" y="6" width="12" height="6" rx="1" fill="#101010" />
        <rect x="16" y="43" width="12" height="6" rx="1" fill="#101010" />
        <circle cx="75" cy="27.5" r="18" stroke="#FF2050" strokeWidth="2" />
        <circle cx="75" cy="27.5" r="6" fill="#FF2050" />
        <rect x="69" y="6" width="12" height="6" rx="1" fill="#FF2050" />
        <rect x="69" y="43" width="12" height="6" rx="1" fill="#FF2050" />
        <path d="M42 22L52 27.5L42 33" stroke="#101010" strokeWidth="2" />
        <path d="M55 33L45 27.5L55 22" stroke="#FF2050" strokeWidth="2" />
      </svg>
    ),
    title: 'Интеграция бизнес-процессов',
    description:
      'Высший уровень интеграции, когда мы объединяем не только данные, но и логические цепочки действий между разными системами',
  },
];

export function IntegrationsTypesSection() {
  const { openModal } = useModal();

  return (
    <section className="integrations-types-section" id="types">
      <div className="integrations-types-container">
        <h2 className="integrations-types-title">Типы интеграций</h2>

        {/* Mobile: Horizontal slider */}
        <div className="integrations-types-slider" id="integrationsTypesSlider">
          <div className="integrations-types-slider-track">
            {typeCards.map((card, index) => (
              <div key={index} className="integrations-types-card">
                <div className="integrations-types-card-icon">{card.icon}</div>
                <div className="integrations-types-card-content">
                  <h3 className="integrations-types-card-title">{card.title}</h3>
                  <p className="integrations-types-card-desc">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 2x2 Grid */}
        <div className="integrations-types-grid">
          {typeCards.map((card, index) => (
            <div key={index} className="integrations-types-card">
              <div className="integrations-types-card-icon">{card.icon}</div>
              <div className="integrations-types-card-content">
                <h3 className="integrations-types-card-title">{card.title}</h3>
                <p className="integrations-types-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom card */}
        <div className="integrations-types-bottom-card">
          <div className="integrations-types-bottom-content">
            <h3 className="integrations-types-bottom-title">
              Прямая vs. централизованная интеграция
            </h3>
            <p className="integrations-types-bottom-desc">
              При большом числе взаимодействующих компонентов эффективно использовать
              централизованный подход – через единый интеграционный шлюз или шину данных
            </p>
          </div>
          <button className="integrations-types-btn" onClick={openModal}>
            Отправить заявку
          </button>
        </div>
      </div>
    </section>
  );
}
