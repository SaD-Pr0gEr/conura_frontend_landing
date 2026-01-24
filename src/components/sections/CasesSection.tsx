'use client';

import Link from 'next/link';
import { useModal } from '@/context/ModalContext';

export function CasesSection() {
  const { openModal } = useModal();

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
                src="https://www.figma.com/api/mcp/asset/cf86095b-a21a-4303-ba0d-6bcea119fea9" 
                alt="Больные Ублюдки"
                loading="lazy"
              />
            </div>
            <div className="case-card-info">
              <p className="case-card-title">1200+ посетителей</p>
              <p className="case-card-subtitle">Больные Ублюдки</p>
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
                src="https://www.figma.com/api/mcp/asset/cf86095b-a21a-4303-ba0d-6bcea119fea9" 
                alt="Больные Ублюдки"
                loading="lazy"
              />
            </div>
            <div className="case-card-info">
              <p className="case-card-title">1200+ посетителей</p>
              <p className="case-card-subtitle">Больные Ублюдки</p>
            </div>
          </Link>
          
          {/* Card 2: Бутербродский (desktop) / Прикидус (mobile) */}
          <Link href="#" className="case-card case-card-mini">
            <div className="case-card-image">
              <img 
                src="https://www.figma.com/api/mcp/asset/9c0216e7-18da-45aa-8da1-298a62b03403" 
                alt="Бутербродский"
                loading="lazy"
              />
            </div>
            <div className="case-card-info">
              <p className="case-card-title case-title-desktop">3500+ посетителей</p>
              <p className="case-card-title case-title-mobile">x2 увеличение продаж</p>
              <p className="case-card-subtitle case-subtitle-desktop">Бутербродский</p>
              <p className="case-card-subtitle case-subtitle-mobile">Прикидус</p>
            </div>
          </Link>
          
          {/* Card 3: Голый Король */}
          <Link href="#" className="case-card case-card-mini">
            <div className="case-card-image">
              <img 
                src="https://www.figma.com/api/mcp/asset/14df5143-7b36-4c3f-803f-e19660bacdd1" 
                alt="Голый Король"
                loading="lazy"
              />
            </div>
            <div className="case-card-info">
              <p className="case-card-title">x2 увеличение продаж</p>
              <p className="case-card-subtitle">Голый Король</p>
            </div>
          </Link>
          
          {/* Card 4: Эклеры с калом (desktop only) */}
          <Link href="#" className="case-card case-card-mini case-card-desktop-only">
            <div className="case-card-image">
              <img 
                src="https://www.figma.com/api/mcp/asset/efe22f98-ccd8-4961-9b54-8c8b920bea5b" 
                alt="Эклеры с калом"
                loading="lazy"
              />
            </div>
            <div className="case-card-info">
              <p className="case-card-title">6000+ конверсий</p>
              <p className="case-card-subtitle">Эклеры с калом</p>
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
