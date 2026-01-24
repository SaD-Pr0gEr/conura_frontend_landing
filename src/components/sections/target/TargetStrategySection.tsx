'use client';

import { useState } from 'react';
import { useModal } from '@/context/ModalContext';

interface StrategyItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}

const strategyItems: StrategyItem[] = [
  {
    id: 'asc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#3597E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="21" r="1" stroke="#3597E6" strokeWidth="2"/>
        <circle cx="20" cy="21" r="1" stroke="#3597E6" strokeWidth="2"/>
      </svg>
    ),
    title: 'Advantage+ Shopping Campaigns (ASC) для продаж',
    content: 'Полностью автоматизированные кампании с целью Sales, в которых алгоритм Meta сам подбирает аудиторию, плейсменты и комбинации креативов. Благодаря машинному обучению ASC позволяет масштабировать e-commerce и D2C‑бизнес за счёт упрощения структуры кампании и автоматической оптимизации конверсий',
  },
  {
    id: 'pixel',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#3597E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="#3597E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#3597E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Широкий таргетинг + собственные сигналы (Pixel + CAPI)',
    content: 'Использование Meta Pixel и Conversions API для сбора данных о поведении пользователей на сайте. Широкий таргетинг позволяет алгоритму Meta находить наиболее конверсионную аудиторию, а сигналы с сайта помогают оптимизировать показы',
  },
  {
    id: 'sales',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#3597E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Sales вместо Traffic/Engagement',
    content: 'Фокус на реальных конверсиях вместо промежуточных метрик. Алгоритм Meta оптимизирует показы под пользователей, которые с наибольшей вероятностью совершат покупку',
  },
  {
    id: 'remarketing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M23 4V10H17M1 20V14H7" stroke="#3597E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.51 9C4.01717 7.56678 4.87913 6.2854 6.01547 5.27542C7.1518 4.26543 8.52547 3.55976 10.0083 3.22426C11.4911 2.88875 13.0348 2.93434 14.4952 3.35677C15.9556 3.77921 17.2853 4.56471 18.36 5.64L23 10M1 14L5.64 18.36C6.71475 19.4353 8.04437 20.2208 9.50481 20.6432C10.9652 21.0657 12.5089 21.1113 13.9917 20.7757C15.4745 20.4402 16.8482 19.7346 17.9845 18.7246C19.1209 17.7146 19.9828 16.4332 20.49 15" stroke="#3597E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Ремаркетинг по событиям сайта и вовлеченности',
    content: 'Показ рекламы пользователям, которые уже взаимодействовали с вашим сайтом или контентом. Позволяет вернуть потенциальных клиентов и довести их до покупки',
  },
  {
    id: 'consolidated',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" fill="#3597E6"/>
        <rect x="14" y="3" width="7" height="7" rx="1" fill="#3597E6"/>
        <rect x="3" y="14" width="7" height="7" rx="1" fill="#3597E6"/>
        <rect x="14" y="14" width="7" height="7" rx="1" fill="#3597E6"/>
      </svg>
    ),
    title: 'Консолидированная структура кампаний',
    content: 'Объединение кампаний для лучшего обучения алгоритмов и эффективного распределения бюджета. Меньше кампаний — больше данных для оптимизации',
  },
  {
    id: 'placements',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3597E6" strokeWidth="2"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="#3597E6"/>
        <path d="M21 15L16 10L5 21" stroke="#3597E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Advantage+ Placements + креативное разнообразие',
    content: 'Автоматический выбор плейсментов и разнообразие креативов для максимального охвата. Meta сама определяет лучшие места для показа рекламы',
  },
];

export function TargetStrategySection() {
  const [activeItem, setActiveItem] = useState('asc');
  const { openModal } = useModal();

  const handleToggle = (id: string) => {
    setActiveItem(activeItem === id ? '' : id);
  };

  return (
    <section className="target-strategy-section" id="strategy">
      <div className="target-strategy-container">
        <div className="target-strategy-left">
          <h2 className="target-strategy-title">Стратегии и механики</h2>
          <button className="target-strategy-btn" onClick={openModal}>
            <span>ОСТАВИТЬ<br/>ЗАЯВКУ</span>
          </button>
        </div>
        
        <div className="target-strategy-accordion">
          {strategyItems.map((item) => (
            <div 
              key={item.id} 
              className={`target-strategy-item ${activeItem === item.id ? 'active' : ''}`}
            >
              <div 
                className="target-strategy-item-header"
                onClick={() => handleToggle(item.id)}
              >
                <div className="target-strategy-item-icon">
                  {item.icon}
                </div>
                <h3 className="target-strategy-item-title">{item.title}</h3>
                <button className="target-strategy-toggle">
                  <svg className="target-strategy-icon-close" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M9 9L25 25M9 25L25 9" stroke="#101010" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <svg className="target-strategy-icon-plus" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path d="M17 9V25M9 17H25" stroke="#101010" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="target-strategy-item-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary target-strategy-btn-mobile" onClick={openModal}>
          Оставить заявку
        </button>
      </div>
    </section>
  );
}
