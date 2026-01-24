'use client';

export function TargetPlatformsSection() {
  return (
    <section className="target-platforms-section" id="platforms">
      <h2 className="target-platforms-title">Площадки</h2>
      
      <div className="target-platforms-cards">
        {/* Instagram Card */}
        <div className="target-platforms-card">
          <div className="target-platforms-chart">
            {/* Circular chart with gradient */}
            <div className="target-platforms-chart-ring">
              <svg viewBox="0 0 250 250" className="target-platforms-chart-svg">
                {/* Background circle */}
                <circle cx="125" cy="125" r="118" fill="none" stroke="#EEF0F2" strokeWidth="14"/>
                {/* Progress arc - Instagram 36.8% */}
                <circle cx="125" cy="125" r="118" fill="none" stroke="url(#instagramGradientPlatform)" strokeWidth="14" strokeDasharray="274 468" strokeLinecap="round" transform="rotate(-90 125 125)"/>
                <defs>
                  <linearGradient id="instagramGradientPlatform" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF2050"/>
                    <stop offset="100%" stopColor="#FFB8C8"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* Center content */}
              <div className="target-platforms-chart-center">
                {/* Instagram icon */}
                <div className="target-platforms-chart-icon instagram">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <rect x="2" y="2" width="26" height="26" rx="8" stroke="url(#instaIconGradient)" strokeWidth="2.5"/>
                    <circle cx="15" cy="15" r="5.5" stroke="url(#instaIconGradient)" strokeWidth="2.5"/>
                    <circle cx="22.5" cy="7.5" r="2" fill="#E4405F"/>
                    <defs>
                      <linearGradient id="instaIconGradient" x1="0" y1="30" x2="30" y2="0">
                        <stop offset="0%" stopColor="#FD1D1D"/>
                        <stop offset="50%" stopColor="#E4405F"/>
                        <stop offset="100%" stopColor="#833AB4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="target-platforms-chart-percent">36.8%</span>
                <span className="target-platforms-chart-label">населения</span>
              </div>
            </div>
            {/* Meta badge */}
            <div className="target-platforms-meta-badge">
              <svg width="34" height="22" viewBox="0 0 34 22" fill="none">
                <path d="M14.5 11C14.5 7 12 3 8.5 3C5 3 2 7 2 11C2 15 5 19 8.5 19C12 19 14.5 15 14.5 11Z" stroke="#0866FF" strokeWidth="2.5" fill="none"/>
                <path d="M14.5 11C14.5 15 17 19 20.5 19C24 19 27 15 27 11" stroke="#0866FF" strokeWidth="2.5" fill="none"/>
                <path d="M27 11C27 7 24 3 20.5 3C17 3 14.5 7 14.5 11" stroke="#0866FF" strokeWidth="2.5" fill="none"/>
                <ellipse cx="30" cy="5" rx="2.5" ry="2.5" fill="#0866FF"/>
              </svg>
            </div>
          </div>
          <div className="target-platforms-content">
            <div className="target-platforms-heading">
              <h3 className="target-platforms-card-title">Instagram</h3>
              <p className="target-platforms-card-users">14,1 млн пользователей</p>
            </div>
            <p className="target-platforms-card-desc">Ведущая соцсеть в Узбекистане, с аудиторией свыше 14 млн пользователей. Среди преимуществ – высокая вовлечённость молодой аудитории (18–34 года), формат Stories и Reels для интерактивного контента, а также гибкие рекламные инструменты</p>
            <p className="target-platforms-card-source">Источник: datareportal.com</p>
          </div>
        </div>

        {/* Facebook Card */}
        <div className="target-platforms-card">
          <div className="target-platforms-chart">
            {/* Circular chart with gradient */}
            <div className="target-platforms-chart-ring">
              <svg viewBox="0 0 250 250" className="target-platforms-chart-svg">
                {/* Background circle */}
                <circle cx="125" cy="125" r="118" fill="none" stroke="#EEF0F2" strokeWidth="14"/>
                {/* Progress arc - Facebook 6% */}
                <circle cx="125" cy="125" r="118" fill="none" stroke="url(#facebookGradientPlatform)" strokeWidth="14" strokeDasharray="45 697" strokeLinecap="round" transform="rotate(-90 125 125)"/>
                <defs>
                  <linearGradient id="facebookGradientPlatform" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1877F2"/>
                    <stop offset="100%" stopColor="#A8D4FF"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* Center content */}
              <div className="target-platforms-chart-center">
                {/* Facebook icon */}
                <div className="target-platforms-chart-icon facebook">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M22 4H18C15.2386 4 13 6.23858 13 9V13H9V18H13V27H18V18H22L23 13H18V9C18 8.44772 18.4477 8 19 8H22V4Z" fill="#1877F2"/>
                  </svg>
                </div>
                <span className="target-platforms-chart-percent">6%</span>
                <span className="target-platforms-chart-label">населения</span>
              </div>
            </div>
            {/* Meta badge */}
            <div className="target-platforms-meta-badge">
              <svg width="34" height="22" viewBox="0 0 34 22" fill="none">
                <path d="M14.5 11C14.5 7 12 3 8.5 3C5 3 2 7 2 11C2 15 5 19 8.5 19C12 19 14.5 15 14.5 11Z" stroke="#0866FF" strokeWidth="2.5" fill="none"/>
                <path d="M14.5 11C14.5 15 17 19 20.5 19C24 19 27 15 27 11" stroke="#0866FF" strokeWidth="2.5" fill="none"/>
                <path d="M27 11C27 7 24 3 20.5 3C17 3 14.5 7 14.5 11" stroke="#0866FF" strokeWidth="2.5" fill="none"/>
                <ellipse cx="30" cy="5" rx="2.5" ry="2.5" fill="#0866FF"/>
              </svg>
            </div>
          </div>
          <div className="target-platforms-content">
            <div className="target-platforms-heading">
              <h3 className="target-platforms-card-title">Facebook</h3>
              <p className="target-platforms-card-users">2,3 млн пользователей</p>
            </div>
            <p className="target-platforms-card-desc">Популярная платформа среди более взрослой и платежеспособной аудитории. Охват Facebook в Узбекистане составляет около 2,3 млн</p>
            <p className="target-platforms-card-source">Источник: datareportal.com</p>
          </div>
        </div>

        {/* Telegram Card */}
        <div className="target-platforms-card">
          <div className="target-platforms-chart">
            {/* Circular chart with gradient */}
            <div className="target-platforms-chart-ring">
              <svg viewBox="0 0 250 250" className="target-platforms-chart-svg">
                {/* Background circle */}
                <circle cx="125" cy="125" r="118" fill="none" stroke="#EEF0F2" strokeWidth="14"/>
                {/* Progress arc - Telegram 70% */}
                <circle cx="125" cy="125" r="118" fill="none" stroke="url(#telegramGradientPlatform)" strokeWidth="14" strokeDasharray="520 222" strokeLinecap="round" transform="rotate(-90 125 125)"/>
                <defs>
                  <linearGradient id="telegramGradientPlatform" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0088CC"/>
                    <stop offset="100%" stopColor="#A8E6FF"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* Center content */}
              <div className="target-platforms-chart-center">
                {/* Telegram icon */}
                <div className="target-platforms-chart-icon telegram">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M27 4L3.5 13.5L10.5 16L13 24L17.5 19.5L23 24L27 4Z" fill="#0088CC"/>
                    <path d="M10.5 16L23 8" stroke="white" strokeWidth="1.5"/>
                    <path d="M13 24L14.5 19L10.5 16" fill="#0077B5"/>
                  </svg>
                </div>
                <span className="target-platforms-chart-percent">70%</span>
                <span className="target-platforms-chart-label">населения</span>
              </div>
            </div>
          </div>
          <div className="target-platforms-content">
            <div className="target-platforms-heading">
              <h3 className="target-platforms-card-title">Telegram</h3>
              <p className="target-platforms-card-users">25 млн пользователей</p>
            </div>
            <p className="target-platforms-card-desc">Самый распространённый мессенджер в Узбекистане. По отраслевым оценкам за 2024 год, аудитория Telegram в стране достигает порядка 25 млн активных пользователей в месяц (включая активных участников каналов и групп)</p>
            <p className="target-platforms-card-source">Источник: t.me/durov</p>
          </div>
        </div>
      </div>
    </section>
  );
}
