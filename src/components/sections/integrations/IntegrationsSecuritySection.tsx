'use client';

import { useModal } from '@/context/ModalContext';

interface SecurityItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const securityItems: SecurityItem[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#FF2050" strokeWidth="2" />
        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="#FF2050" strokeWidth="2" />
        <circle cx="12" cy="16" r="1" fill="#FF2050" />
        <path d="M12 16V19" stroke="#FF2050" strokeWidth="2" />
      </svg>
    ),
    title: 'Защищённые каналы связи',
    description: 'Шифрование данных при передаче между системами (SSL/TLS), VPN-туннели при необходимости',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 5V11C3 16.55 7.16 21.74 12 23C16.84 21.74 21 16.55 21 11V5L12 2Z" stroke="#FF2050" strokeWidth="2" />
        <path d="M9 12L11 14L15 10" stroke="#FF2050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Авторизация и аутентификация',
    description: 'OAuth, API-ключи, токены, двухфакторная аутентификация – ограничиваем доступ только для авторизованных систем и пользователей',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FF2050" strokeWidth="2" />
        <path d="M12 6V12L16 14" stroke="#FF2050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Логирование и мониторинг',
    description: 'Все события обмена данными фиксируются для аудита и анализа',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H20V20H4V4Z" stroke="#FF2050" strokeWidth="2" />
        <path d="M4 9H20M9 4V20" stroke="#FF2050" strokeWidth="2" />
      </svg>
    ),
    title: 'Валидация данных',
    description: 'Проверка формата и типа данных на всех этапах передачи, защита от SQL-инъекций и других атак',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF2050" strokeWidth="2" />
        <path d="M12 8V12M12 16H12.01" stroke="#FF2050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Резервирование и отказоустойчивость',
    description: 'Архитектура с учётом высокой доступности и резервного копирования критических данных',
  },
];

export function IntegrationsSecuritySection() {
  const { openModal } = useModal();

  return (
    <section className="integrations-security-section" id="security">
      <div className="integrations-security-container">
        {/* Left side - Title and Description */}
        <div className="integrations-security-left">
          <h2 className="integrations-security-title">Безопасность и надёжность интеграций</h2>
          <p className="integrations-security-description">
            Мы применяем лучшие практики обеспечения безопасности данных при интеграции систем
          </p>
          <button className="integrations-security-btn" onClick={openModal}>
            Оставить заявку
          </button>
        </div>

        {/* Right side - Security items */}
        <div className="integrations-security-right">
          {securityItems.map((item, index) => (
            <div key={index} className="integrations-security-item">
              <div className="integrations-security-item-icon">{item.icon}</div>
              <div className="integrations-security-item-content">
                <h3 className="integrations-security-item-title">{item.title}</h3>
                <p className="integrations-security-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
