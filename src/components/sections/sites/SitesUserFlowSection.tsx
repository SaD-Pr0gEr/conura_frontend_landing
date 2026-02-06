'use client';

import { useEffect, useRef, useState } from 'react';

export function SitesUserFlowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress based on section visibility
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (sectionHeight + windowHeight * 0.5)
      ));

      setProgress(scrollProgress * 100);
      
      // Determine active step (1-4)
      const step = Math.min(Math.ceil(scrollProgress * 4), 4);
      setActiveStep(Math.max(1, step));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBubbleText = () => {
    switch (activeStep) {
      case 1: return 'Что это у нас тут?';
      case 2: return 'Ну выглядит хорошо';
      case 3: return 'Хм, а это мне подходит...';
      case 4: return 'Я готов! Где тут купить!?';
      default: return 'Что это у нас тут?';
    }
  };

  return (
    <section className="sites-user-flow-section" ref={sectionRef}>
      <div className="sites-user-flow-container">
        {/* Title */}
        <h2 className="sites-user-flow-title">Путь пользователя: от интереса до конверсии</h2>
        
        {/* Avatar + Progress */}
        <div className="sites-user-flow-visual">
          {/* Avatar with bubble */}
          <div className="sites-user-flow-avatar" data-step={activeStep}>
            <div className="sites-user-flow-bubble">
              <span className="sites-user-flow-bubble-text">{getBubbleText()}</span>
              <span className="sites-user-flow-bubble-arrow"></span>
            </div>
            <img 
              src="https://www.figma.com/api/mcp/asset/a72f2023-556a-4674-b9f1-2622411cd26c" 
              alt="" 
              className="sites-user-flow-avatar-img"
            />
          </div>
          
          {/* Progress bar */}
          <div className="sites-user-flow-track">
            <div 
              className="sites-user-flow-progress" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>
        
        {/* Steps */}
        <div className="sites-user-flow-steps">
          {/* Step 1 */}
          <div className={`sites-user-flow-step ${activeStep >= 1 ? 'active' : ''}`} data-step="1">
            <h3 className="sites-user-flow-step-title">Осведомлённость</h3>
            <p className="sites-user-flow-step-text">
              Пользователь узнаёт о компании через поиск, рекламу или соцсети и переходит на сайт, 
              чтобы узнать больше. SEO-оптимизация помогает сайту быть заметным в Google и Яндекс
            </p>
          </div>
          {/* Step 2 */}
          <div className={`sites-user-flow-step ${activeStep >= 2 ? 'active' : ''}`} data-step="2">
            <h3 className="sites-user-flow-step-title">Ознакомление</h3>
            <p className="sites-user-flow-step-text">
              На сайте посетитель изучает товары, услуги, цены и отзывы. Здесь сайт удерживает интерес: 
              понятная навигация, привлекательный дизайн и полезный контент формируют доверие
            </p>
          </div>
          {/* Step 3 */}
          <div className={`sites-user-flow-step ${activeStep >= 3 ? 'active' : ''}`} data-step="3">
            <h3 className="sites-user-flow-step-title">Намерение</h3>
            <p className="sites-user-flow-step-text">
              В процессе ознакомления возникает желание воспользоваться предложением. Онлайн-заказ или 
              калькулятор цены упрощают выбор, а отзывы, сертификаты и ответы на вопросы снимают сомнения
            </p>
          </div>
          {/* Step 4 */}
          <div className={`sites-user-flow-step ${activeStep >= 4 ? 'active' : ''}`} data-step="4">
            <h3 className="sites-user-flow-step-title">Действие</h3>
            <p className="sites-user-flow-step-text">
              Финальный этап — целевое действие: покупка, заявка или звонок. Продуманный сайт делает 
              этот шаг простым и очевидным, превращая посетителя в лид или клиента
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
