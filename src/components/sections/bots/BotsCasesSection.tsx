'use client';

import Link from 'next/link';
import {useModal} from '@/context/ModalContext';

export function BotsCasesSection() {
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
                                src="/images/bots/cases/1.png"
                                alt="Больные Ублюдки"
                                loading="lazy"
                            />
                        </div>
                        <div className="case-card-info">
                            <p className="case-card-title">+30% заказов через мессенджер</p>
                            <p className="case-card-subtitle">Вафлежуй</p>
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
                                src="/images/bots/cases/1.png"
                                alt="Больные Ублюдки"
                                loading="lazy"
                            />
                        </div>
                        <div className="case-card-info">
                            <p className="case-card-title">+30% заказов через мессенджер</p>
                            <p className="case-card-subtitle">Вафлежуй</p>
                        </div>
                    </Link>

                    {/* Card 2: Бутербродский (desktop) / Прикидус (mobile) */}
                    <Link href="#" className="case-card case-card-mini">
                        <div className="case-card-image">
                            <img
                                src="/images/bots/cases/2.png"
                                alt="Бутербродский"
                                loading="lazy"
                            />
                        </div>
                        <div className="case-card-info">
                            <p className="case-card-title">-40% время обработки</p>
                            <p className="case-card-subtitle">Зачем сломал</p>
                        </div>
                    </Link>

                    {/* Card 3: Голый Король */}
                    <Link href="#" className="case-card case-card-mini">
                        <div className="case-card-image">
                            <img
                                src="/images/bots/cases/3.png"
                                alt="Голый Король"
                                loading="lazy"
                            />
                        </div>
                        <div className="case-card-info">
                            <p className="case-card-title">Один бот заменил 3 менеджеров</p>
                            <p className="case-card-subtitle">Съебался отсюда</p>
                        </div>
                    </Link>

                    {/* Card 4: Эклеры с калом (desktop only) */}
                    <Link href="#" className="case-card case-card-mini case-card-desktop-only">
                        <div className="case-card-image">
                            <img
                                src="/images/bots/cases/4.png"
                                alt="Эклеры с калом"
                                loading="lazy"
                            />
                        </div>
                        <div className="case-card-info">
                            <p className="case-card-title">ИИ консультант для продажи духов</p>
                            <p className="case-card-subtitle">Fuu vonya et</p>
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
