import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('should render the company name', () => {
    render(<Footer />);
    expect(screen.getByText(/CODEREVIEW/i)).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Footer />);
    expect(screen.getByText('Контекстная реклама')).toBeInTheDocument();
    expect(screen.getByText('Таргет')).toBeInTheDocument();
    expect(screen.getByText('Сайты')).toBeInTheDocument();
    expect(screen.getByText('Боты')).toBeInTheDocument();
    expect(screen.getByText('Интеграции')).toBeInTheDocument();
  });

  it('should render contact information', () => {
    render(<Footer />);
    expect(screen.getByText('Telegram')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
  });

  it('should render privacy policy link', () => {
    render(<Footer />);
    expect(screen.getByText('Политика конфиденциальности')).toBeInTheDocument();
  });
});
