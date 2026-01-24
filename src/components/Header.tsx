'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModal } from '@/context/ModalContext';

export function Header() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="header-logo">
            <img 
              src="https://www.figma.com/api/mcp/asset/e83c9674-ab55-4117-8ba9-8dc5a91cb14a" 
              alt="Conura" 
              width={100} 
              height={65} 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="header-nav">
            <Link href="/" className={`header-nav-item ${isActive('/') ? 'active' : ''}`}>
              Главная
            </Link>
            <div className={`header-nav-dropdown ${isDropdownOpen ? 'open' : ''}`}>
              <button 
                className="header-nav-item has-dropdown" 
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Услуги</span>
                <svg className="header-nav-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="header-nav-dropdown-menu">
                <Link href="/context" className="header-nav-dropdown-item">Контекстная реклама</Link>
                <Link href="/target" className="header-nav-dropdown-item">Таргет</Link>
                <Link href="/sites" className="header-nav-dropdown-item">Сайты</Link>
                <Link href="/bots" className="header-nav-dropdown-item">Боты</Link>
                <Link href="/integrations" className="header-nav-dropdown-item">Интеграции</Link>
              </div>
            </div>
            <Link href="/blog" className={`header-nav-item ${isActive('/blog') ? 'active' : ''}`}>
              Блог
            </Link>
            <Link href="/cases" className={`header-nav-item ${isActive('/cases') ? 'active' : ''}`}>
              Кейсы
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="header-actions">
            {/* Language Selector */}
            <div className={`header-language ${isLanguageOpen ? 'open' : ''}`}>
              <button 
                className="header-language-btn" 
                aria-label="Выбор языка"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 14H26" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2C16.9388 5.21285 18.6297 9.50539 18.76 14C18.6297 18.4946 16.9388 22.7871 14 26C11.0612 22.7871 9.37033 18.4946 9.24 14C9.37033 9.50539 11.0612 5.21285 14 2Z" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {/* Language Dropdown */}
              <div className="header-language-dropdown">
                <button className="header-language-option active" data-lang="ru">RU</button>
                <button className="header-language-option" data-lang="uz">UZ</button>
                <button className="header-language-option" data-lang="en">EN</button>
              </div>
            </div>
            
            {/* CTA Button (Desktop only) */}
            <button onClick={openModal} className="btn btn-primary header-cta">Оставить заявку</button>
            
            {/* Burger Menu (Mobile only) */}
            <button 
              className="header-burger" 
              aria-label="Открыть меню"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M5.5 9.5H26.5M5.5 16H26.5M5.5 22.5H26.5" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <div className="mobile-menu-header">
          <Link href="/" className="header-logo">
            <img 
              src="https://www.figma.com/api/mcp/asset/e83c9674-ab55-4117-8ba9-8dc5a91cb14a" 
              alt="Conura" 
              width={100} 
              height={65} 
            />
          </Link>
          <button 
            className="mobile-menu-close" 
            aria-label="Закрыть меню"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <nav className="mobile-menu-nav">
          <Link href="/" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Главная</Link>
          <Link href="/context" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Услуги</Link>
          <Link href="/blog" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Блог</Link>
          <Link href="/cases" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Кейсы</Link>
        </nav>
        <div className="mobile-menu-footer">
          <button 
            onClick={() => { setIsMobileMenuOpen(false); openModal(); }} 
            className="btn btn-primary mobile-menu-cta"
          >
            Оставить заявку
          </button>
        </div>
      </div>
      
      {/* Overlay */}
      <div 
        className={`overlay ${isMobileMenuOpen ? 'active' : ''}`} 
        id="overlay"
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
