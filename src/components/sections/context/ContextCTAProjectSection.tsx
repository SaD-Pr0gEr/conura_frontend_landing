'use client';

import Link from 'next/link';

export function ContextCTAProjectSection() {
  return (
    <section className="cta-project-section">
      <div className="cta-project-container">
        {/* Left: Heading */}
        <div className="cta-project-heading">
          <h2 className="cta-project-title">Готовы обсудить проект?</h2>
          <p className="cta-project-description">Заполните бриф и мы свяжемся с вами</p>
        </div>

        {/* Center: Alien image */}
        <div className="cta-project-alien">
          <img
            src="https://www.figma.com/api/mcp/asset/e6387e44-3cb6-4e4c-8d78-b10403ca61ff"
            alt="Alien"
            className="cta-project-alien-img"
          />
        </div>

        {/* Right: Checklist card */}
        <div className="cta-project-card">
          <div className="cta-project-card-header">
            <h3 className="cta-project-card-title">8 вопросов и мы найдем решение</h3>
            <div className="cta-project-card-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="#00B4D8" strokeWidth="2" />
                <circle cx="16" cy="16" r="10" stroke="#00B4D8" strokeWidth="2" />
                <circle cx="16" cy="16" r="6" stroke="#00B4D8" strokeWidth="2" />
                <circle cx="16" cy="16" r="2" fill="#00B4D8" />
              </svg>
            </div>
          </div>

          <ul className="cta-project-checklist">
            {[...Array(8)].map((_, index) => (
              <li key={index} className="cta-project-checklist-item">
                <span className="cta-project-check"></span>
                <span className="cta-project-line"></span>
              </li>
            ))}
          </ul>

          <Link href="/brief" className="cta-project-btn">
            Заполнить бриф
          </Link>
        </div>

        {/* Decorative arc */}
        <div className="cta-project-arc"></div>
      </div>
    </section>
  );
}
