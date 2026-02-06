'use client';

import { useModal } from '@/context/ModalContext';

export function ContextServiceCTASection() {
  const { openModal } = useModal();

  return (
    <section className="service-cta-section">
      {/* Search bar icon (right top) */}
      <div className="service-cta-icon-right">
        <img
          src="https://www.figma.com/api/mcp/asset/1dab365c-916a-4c1f-826d-1ff4955ac271"
          alt=""
          className="service-cta-character-right"
        />
      </div>

      {/* Content */}
      <div className="service-cta-content">
        <h2 className="service-cta-title">
          <span className="service-cta-orange">60+ млн</span> поисковых запросов ежедневно по Узбекистану
        </h2>
        <button className="btn btn-dark" onClick={openModal}>
          Запустить рекламу
        </button>
      </div>

      {/* Cursor icon (left bottom) */}
      <div className="service-cta-icon-left">
        <img
          src="https://www.figma.com/api/mcp/asset/8fab406e-a235-4472-a476-92e3248dd750"
          alt=""
          className="service-cta-character-left"
        />
      </div>
    </section>
  );
}
