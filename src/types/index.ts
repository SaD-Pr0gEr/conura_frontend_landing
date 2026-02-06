/**
 * Shared Types for Conura Frontend
 */

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
}

// Case Study Types
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  metric: string;
  metricValue: string;
  href: string;
}

// Blog Post Types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  href: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  contactMethod: string;
}

// How We Work Step Types
export interface WorkStep {
  number: string;
  title: string;
  items: string[];
}

// Banner Slide Types
export interface BannerSlide {
  id: string;
  title: string;
  image: string;
  mobileImage?: string;
}

// Statistic Types
export interface Statistic {
  value: string;
  label: string;
  suffix?: string;
}

// Accordion Item Types
export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

// Tab Types
export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

// Platform Types
export interface Platform {
  id: string;
  name: string;
  users: string;
  percentage: number;
  description: string;
  source: string;
  icon: React.ReactNode;
  gradientColors: string[];
}

// Technology Types
export interface Technology {
  id: string;
  name: string;
  icon: string;
  category: string;
}

// Integration System Types
export interface IntegrationSystem {
  id: string;
  name: string;
  icon: string;
  category: string;
}
