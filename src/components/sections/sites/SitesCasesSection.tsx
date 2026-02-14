'use client';

import Link from 'next/link';
import {useModal} from '@/context/ModalContext';

export function SitesCasesSection() {
    const {openModal} = useModal();

    return (
        <section className="cases-section" id="cases">
            <h2 className="cases-title">Кейсы</h2>
            <div className="cases-content">
                {/* Mobile: Vertical cards list */}
                {/* Desktop: Left side - large card + buttons */}
                <div className="cases-main">
                    {/* Main large card (desktop only visible as large) */}
                    <Link href="#" className="case-card case-card-main">
                        <div className="case-card-image">
                            <img
                                src="/images/sites/cases/1.jpg"
                                alt="Больные Ублюдки"
                                loading="lazy"
                            />
                        </div>
                        <div className="case-card-info">
                            <p className="case-card-title">Платформа "Душевное здоровье"</p>
                            <p className="case-card-subtitle">Разработка онлайн платформы для поддержки психического здоровья</p>
                        </div>
                    </Link>

                    {/* Buttons (desktop positioned below main card) */}
                    <div className="cases-buttons">
                        <button onClick={openModal} className="btn-round btn-round-filled">ОСТАВИТЬ ЗАЯВКУ</button>
                        <Link href="/cases" className="btn-round btn-round-outline">ВСЕ КЕЙСЫ</Link>
                    </div>
                </div>

                {/* Mobile: All cards vertical / Desktop: Right side - mini cards */}
                <div className="cases-side">
                    {/* Card 1 (Mobile only): Больные Ублюдки */}
                    <Link href="#" className="case-card case-card-mini case-card-mobile-only">
                        <div className="case-card-image">
                            <img
                                src="/images/sites/cases/1.jpg"
                                alt="Больные Ублюдки"
                                loading="lazy"
                            />
                        </div>
                        <div className="case-card-info">
                            <p className="case-card-title">Платформа "Душевное здоровье"</p>
                            <p className="case-card-subtitle">Разработка онлайн платформы для поддержки психического здоровья</p>
                        </div>
                    </Link>

                    {/* Card 2: Бутербродский (desktop) / Прикидус (mobile) */}
                    <Link href="#" className="case-card case-card-mini">
                        <div className="case-card-image">
                            <img
                                src="/images/sites/cases/2.jpg"
                                alt="Бутербродский"
                                loading="lazy"
                            />
                        </div>
                        <div className="case-card-info">
                            <p className="case-card-title">
                                Сайт клиники Incare
                            </p>
                            <p className="case-card-subtitle">Создали корпоративный сайт медицинской клиники с интеграцией с ЛИМС</p>
                        </div>
                    </Link>

                    {/* Card 3: Голый Король */}
                    <Link href="#" className="case-card case-card-mini">
                        <div className="case-card-image">
                            <img
                                src="/images/sites/cases/3.jpg"
                                alt="Голый Король"
                                loading="lazy"
                            />
                        </div>
                        <div className="case-card-info">
                            <p className="case-card-title">Платформа Game Store</p>
                            <p className="case-card-subtitle">Реализовали веб-платформу для цифровой дистрибуции игр</p>
                        </div>
                    </Link>

                    {/* Card 4: Эклеры с калом (desktop only) */}
                    <Link href="#" className="case-card case-card-mini case-card-desktop-only">
                        <div className="case-card-image">
                            <img
                                src="/images/sites/cases/4.jpg"
                                alt="Эклеры с калом"
                                loading="lazy"
                            />
                        </div>
                        <div className="case-card-info">
                            <p className="case-card-title">Сайт для отдела по борьбе с бабайками</p>
                            <p className="case-card-subtitle">Разработали сайт для самой секретной организации в мире</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Mobile: Buttons at bottom */}
            <div className="cases-buttons-mobile">
                <Link href="/cases" className="btn-round btn-round-outline">ВСЕ КЕЙСЫ</Link>
                <button onClick={openModal} className="btn-round btn-round-filled">ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
        </section>
    );
}
