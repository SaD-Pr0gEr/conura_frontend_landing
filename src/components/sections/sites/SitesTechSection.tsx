'use client';

export function SitesTechSection() {
  return (
    <section className="sites-tech-section">
      <div className="sites-tech-container">
        <h2 className="sites-tech-title">Технологии и стек разработки</h2>
        
        <div className="sites-tech-table">
          {/* Left Column */}
          <div className="sites-tech-column">
            {/* Front-end Block */}
            <div className="sites-tech-block sites-tech-block-bordered">
              <h3 className="sites-tech-block-title">Front-end</h3>
              <div className="sites-tech-tags">
                <span className="sites-tech-tag">HTML5</span>
                <span className="sites-tech-tag">CSS3</span>
                <span className="sites-tech-tag">JavaScript</span>
                <span className="sites-tech-tag">React</span>
                <span className="sites-tech-tag">Vue</span>
                <span className="sites-tech-tag">Angular</span>
                <span className="sites-tech-tag">Bootstrap</span>
                <span className="sites-tech-tag">Tailwind</span>
              </div>
            </div>
            
            {/* Databases Block */}
            <div className="sites-tech-block">
              <h3 className="sites-tech-block-title">Базы данных</h3>
              <div className="sites-tech-tags">
                <span className="sites-tech-tag">MySQL</span>
                <span className="sites-tech-tag">PostgreSQL</span>
                <span className="sites-tech-tag">MongoDB</span>
                <span className="sites-tech-tag">Redis</span>
              </div>
            </div>
          </div>
          
          {/* Center Divider (Desktop only) */}
          <div className="sites-tech-divider">
            <div className="sites-tech-divider-line"></div>
            <div className="sites-tech-divider-plus">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="sites-tech-column">
            {/* Back-end Block */}
            <div className="sites-tech-block sites-tech-block-bordered">
              <h3 className="sites-tech-block-title">Back-end</h3>
              <div className="sites-tech-tags">
                <span className="sites-tech-tag">Node.js</span>
                <span className="sites-tech-tag">Express</span>
                <span className="sites-tech-tag">NestJS</span>
                <span className="sites-tech-tag">PHP</span>
                <span className="sites-tech-tag">Laravel</span>
                <span className="sites-tech-tag">Python</span>
                <span className="sites-tech-tag">Django</span>
                <span className="sites-tech-tag">Flask</span>
                <span className="sites-tech-tag">C#</span>
                <span className="sites-tech-tag">.NET</span>
              </div>
            </div>
            
            {/* Deploy/Infrastructure Block */}
            <div className="sites-tech-block">
              <h3 className="sites-tech-block-title">Deploy / Инфраструктура</h3>
              <div className="sites-tech-tags">
                <span className="sites-tech-tag">Docker</span>
                <span className="sites-tech-tag">CI/CD</span>
                <span className="sites-tech-tag">AWS</span>
                <span className="sites-tech-tag">DigitalOcean</span>
                <span className="sites-tech-tag">Heroku</span>
                <span className="sites-tech-tag">Nginx</span>
                <span className="sites-tech-tag">Apache</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
