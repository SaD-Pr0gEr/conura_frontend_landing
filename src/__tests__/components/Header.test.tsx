import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';
import { ModalProvider } from '@/context/ModalContext';

// Mock usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <ModalProvider>
      {component}
    </ModalProvider>
  );
};

describe('Header', () => {
  it('should render the logo', () => {
    renderWithProvider(<Header />);
    // Multiple logos may exist (desktop + mobile menu)
    const logos = screen.getAllByAltText('Conura');
    expect(logos.length).toBeGreaterThan(0);
  });

  it('should render navigation links', () => {
    renderWithProvider(<Header />);
    // Multiple instances may exist (desktop + mobile menu)
    expect(screen.getAllByText('Главная').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Услуги').length).toBeGreaterThan(0);
  });

  it('should render the CTA button', () => {
    renderWithProvider(<Header />);
    const ctaButtons = screen.getAllByText('Оставить заявку');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });
});
