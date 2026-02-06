'use client';

import { useState } from 'react';

export function CTASection() {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedContact, setSelectedContact] = useState('');

  const services = [
    { value: 'context', label: 'Контекстная реклама' },
    { value: 'target', label: 'Таргет' },
    { value: 'sites', label: 'Сайты' },
    { value: 'bots', label: 'Боты' },
    { value: 'integrations', label: 'Интеграции' },
  ];

  const contacts = [
    { value: 'call', label: 'Звонок' },
    { value: 'telegram', label: 'Telegram' },
  ];

  return (
    <section className="cta-section" id="cta">
      {/* Desktop: Left Content */}
      <div className="cta-heading">
        <h2 className="cta-title">Нужна помощь с вашим проектом?</h2>
        <p className="cta-description">Получите консультацию от экспертов и найдите решение для вашего проекта</p>
      </div>
      
      {/* Desktop: Center Image */}
      <div className="cta-image">
        <img src="https://www.figma.com/api/mcp/asset/e6387e44-3cb6-4e4c-8d78-b10403ca61ff" alt="Alien" loading="lazy" />
      </div>
      
      {/* Form */}
      <form className="cta-form" id="ctaForm">
        <div className="cta-inputs">
          <div className="cta-input-group">
            <input type="text" className="cta-input" id="ctaFormName" placeholder="ФИО" required />
          </div>
          
          <div className="cta-input-group">
            <div className={`cta-dropdown ${serviceOpen ? 'open' : ''}`} id="ctaServiceDropdown">
              <button type="button" className="cta-dropdown-trigger" onClick={() => { setServiceOpen(!serviceOpen); setContactOpen(false); }}>
                <span className="cta-dropdown-value">
                  {selectedService ? services.find(s => s.value === selectedService)?.label : 'Услуга'}
                </span>
                <svg className="cta-dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <input type="hidden" name="service" id="ctaFormService" value={selectedService} />
              <div className="cta-dropdown-list">
                {services.map((s) => (
                  <div
                    key={s.value}
                    className="cta-dropdown-item"
                    data-value={s.value}
                    onClick={() => {
                      setSelectedService(s.value);
                      setServiceOpen(false);
                    }}
                  >
                    {s.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="cta-input-group">
            <input type="tel" className="cta-input" id="ctaFormPhone" placeholder="Номер телефона" inputMode="tel" required />
          </div>
          
          <div className="cta-input-group">
            <div className={`cta-dropdown ${contactOpen ? 'open' : ''}`} id="ctaContactDropdown">
              <button type="button" className="cta-dropdown-trigger" onClick={() => { setContactOpen(!contactOpen); setServiceOpen(false); }}>
                <span className="cta-dropdown-value">
                  {selectedContact ? contacts.find(c => c.value === selectedContact)?.label : 'Как с вами связаться?'}
                </span>
                <svg className="cta-dropdown-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <input type="hidden" name="contact" id="ctaFormContact" value={selectedContact} />
              <div className="cta-dropdown-list">
                {contacts.map((c) => (
                  <div
                    key={c.value}
                    className="cta-dropdown-item"
                    data-value={c.value}
                    onClick={() => {
                      setSelectedContact(c.value);
                      setContactOpen(false);
                    }}
                  >
                    {c.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="cta-form-footer">
          <button type="submit" className="cta-submit">Отправить</button>
          <p className="cta-agreement">Отправляя заявку вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
        </div>
      </form>
    </section>
  );
}
