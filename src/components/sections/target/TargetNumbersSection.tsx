'use client';

import { useModal } from '@/context/ModalContext';

export function TargetNumbersSection() {
  const { openModal } = useModal();

  return (
    <section className="target-numbers-section" id="numbers">
      {/* Left Card - Instagram (Desktop only) */}
      <div className="target-numbers-card target-numbers-card-instagram target-numbers-card-left">
        <div className="target-numbers-badge target-numbers-badge-pink">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" fill="white"/>
            <path d="M10 11.25C6.54822 11.25 3.75 13.1375 3.75 15.625V17.5H16.25V15.625C16.25 13.1375 13.4518 11.25 10 11.25Z" fill="white"/>
          </svg>
          <span>14.1 млн</span>
        </div>
        <div className="target-numbers-chart-wrapper">
          <svg viewBox="0 0 180 180" className="target-numbers-chart-circle">
            <circle cx="90" cy="90" r="80" fill="none" stroke="rgba(238,240,242,0.6)" strokeWidth="6"/>
            <circle cx="90" cy="90" r="80" fill="none" stroke="url(#instagramGradient)" strokeWidth="6" strokeDasharray="185 318" strokeLinecap="round" transform="rotate(-90 90 90)"/>
            <defs>
              <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F58529"/>
                <stop offset="50%" stopColor="#DD2A7B"/>
                <stop offset="100%" stopColor="#8134AF"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="target-numbers-chart-center">
            <img src="https://www.figma.com/api/mcp/asset/b49f0be0-5f18-4e9d-b205-d18cc02e2c55" alt="Instagram" className="target-numbers-icon" />
            <span className="target-numbers-percent">36.8%</span>
            <span className="target-numbers-label">населения</span>
          </div>
        </div>
      </div>

      {/* Center Content */}
      <div className="target-numbers-center">
        <h2 className="target-numbers-title">
          Социальными сетями пользуется <span className="target-numbers-highlight">каждый третий </span>житель Узбекистана
        </h2>
        <p className="target-numbers-source">Источник dataportal.com</p>
        <button className="target-numbers-btn" onClick={openModal}>Запустить таргет</button>
      </div>

      {/* Right Card - Facebook (Desktop only) */}
      <div className="target-numbers-card target-numbers-card-facebook target-numbers-card-right">
        <div className="target-numbers-badge target-numbers-badge-blue">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" fill="white"/>
            <path d="M10 11.25C6.54822 11.25 3.75 13.1375 3.75 15.625V17.5H16.25V15.625C16.25 13.1375 13.4518 11.25 10 11.25Z" fill="white"/>
          </svg>
          <span>2.3 млн</span>
        </div>
        <div className="target-numbers-chart-wrapper">
          <svg viewBox="0 0 180 180" className="target-numbers-chart-circle">
            <circle cx="90" cy="90" r="80" fill="none" stroke="rgba(238,240,242,0.6)" strokeWidth="6"/>
            <circle cx="90" cy="90" r="80" fill="none" stroke="#3597E6" strokeWidth="6" strokeDasharray="30 318" strokeLinecap="round" transform="rotate(-90 90 90)"/>
          </svg>
          <div className="target-numbers-chart-center">
            <img src="https://www.figma.com/api/mcp/asset/eac7f9a4-76e8-4a46-ae77-f036c3165ffc" alt="Facebook" className="target-numbers-icon" />
            <span className="target-numbers-percent">6%</span>
            <span className="target-numbers-label">населения</span>
          </div>
        </div>
      </div>

      {/* Mobile button (positioned after cards) */}
      <button className="target-numbers-btn-mobile" onClick={openModal}>Запустить таргет</button>

      {/* Mobile Cards */}
      <div className="target-numbers-mobile-cards">
        {/* Instagram Card */}
        <div className="target-numbers-mobile-card">
          <div className="target-numbers-badge target-numbers-badge-pink">
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
              <path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" fill="white"/>
              <path d="M10 11.25C6.54822 11.25 3.75 13.1375 3.75 15.625V17.5H16.25V15.625C16.25 13.1375 13.4518 11.25 10 11.25Z" fill="white"/>
            </svg>
            <span>14.1 млн</span>
          </div>
          <div className="target-numbers-mobile-chart-wrapper">
            <svg viewBox="0 0 136 136" className="target-numbers-mobile-chart-circle">
              <circle cx="68" cy="68" r="60" fill="none" stroke="rgba(238,240,242,0.6)" strokeWidth="5"/>
              <circle cx="68" cy="68" r="60" fill="none" stroke="url(#instagramGradientMobile)" strokeWidth="5" strokeDasharray="139 240" strokeLinecap="round" transform="rotate(-90 68 68)"/>
              <defs>
                <linearGradient id="instagramGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F58529"/>
                  <stop offset="50%" stopColor="#DD2A7B"/>
                  <stop offset="100%" stopColor="#8134AF"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="target-numbers-mobile-chart-center">
              <img src="https://www.figma.com/api/mcp/asset/6759a381-07f1-477e-92c3-01cd9c9dfe52" alt="Instagram" className="target-numbers-mobile-icon" />
              <span className="target-numbers-mobile-percent">36.8%</span>
              <span className="target-numbers-mobile-label">населения</span>
            </div>
          </div>
        </div>
        {/* Facebook Card */}
        <div className="target-numbers-mobile-card">
          <div className="target-numbers-badge target-numbers-badge-blue">
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
              <path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" fill="white"/>
              <path d="M10 11.25C6.54822 11.25 3.75 13.1375 3.75 15.625V17.5H16.25V15.625C16.25 13.1375 13.4518 11.25 10 11.25Z" fill="white"/>
            </svg>
            <span>2.3 млн</span>
          </div>
          <div className="target-numbers-mobile-chart-wrapper">
            <svg viewBox="0 0 136 136" className="target-numbers-mobile-chart-circle">
              <circle cx="68" cy="68" r="60" fill="none" stroke="rgba(238,240,242,0.6)" strokeWidth="5"/>
              <circle cx="68" cy="68" r="60" fill="none" stroke="#3597E6" strokeWidth="5" strokeDasharray="23 240" strokeLinecap="round" transform="rotate(-90 68 68)"/>
            </svg>
            <div className="target-numbers-mobile-chart-center">
              <img src="https://www.figma.com/api/mcp/asset/3853943b-e204-4b32-ae96-fbcdc0d5e892" alt="Facebook" className="target-numbers-mobile-icon" />
              <span className="target-numbers-mobile-percent">6%</span>
              <span className="target-numbers-mobile-label">населения</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
