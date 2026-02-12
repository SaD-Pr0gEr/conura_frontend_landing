'use client';

import Link from 'next/link';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <footer className="footer" id="footer">
            {/* Top Section: Pages + Contacts */}
            <div className="footer-top">
                <nav className="footer-pages">
                    <Link href="/context" className="footer-page-link">Контекстная реклама</Link>
                    <Link href="/target" className="footer-page-link">Таргет</Link>
                    <Link href="/sites" className="footer-page-link">Сайты</Link>
                    <Link href="/bots" className="footer-page-link">Боты</Link>
                    <Link href="/integrations" className="footer-page-link">Интеграции</Link>
                </nav>

                <div className="footer-contacts">
                    <a href="tel:+998901234567" className="footer-contact-btn">+998 (90) 123-45-67</a>
                    <a href="https://t.me/conura" target="_blank" rel="noopener noreferrer"
                       className="footer-contact-btn">Telegram</a>
                    <a href="https://instagram.com/conura" target="_blank" rel="noopener noreferrer"
                       className="footer-contact-btn">Instagram</a>
                </div>
            </div>

            {/* Middle Section: Big Logo */}
            <div className="footer-logo-section">
                <div className="footer-logo-wrapper">
                    <span className="footer-logo-text">C</span>
                    <span className="footer-logo-o">
                    <span className="footer-logo-o-text">O</span>
                        <img
                            src="/images/ufoman_form_smile.png"
                            alt=""
                            className="footer-logo-alien"
                            loading="lazy"
                        />
                    </span>
                    <span className="footer-logo-text">NURA</span>
                </div>

                <div className="footer-copyright">
                    <p className="footer-copyright-text">© 2023 OOO &#34;CODEREVIEW&#34;</p>
                    <Link href="/privacy" className="footer-copyright-link">Политика конфиденциальности</Link>
                </div>
            </div>

            {/* Bottom Section: Wishes + Scroll to Top */}
            <div className="footer-bottom">
                <p className="footer-wishes">Если вы дошли до этого момента желаем вам крепкого здоровья, много денег и
                    успехов во всех начинаниях!</p>
                <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Наверх">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </footer>
    );
}
