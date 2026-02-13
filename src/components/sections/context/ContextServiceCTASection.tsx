'use client';

import {useModal} from '@/context/ModalContext';

export function ContextServiceCTASection() {
    const {openModal} = useModal();

    return (
        <section className="service-cta-section">
            {/* Search bar icon (right top) */}
            <div className="service-cta-icon-right">
                <img
                    src="/images/context/arrow_big.svg"
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
                    src="/images/context/google_search.svg"
                    alt=""
                    className="service-cta-character-left"
                />
            </div>
        </section>
    );
}
