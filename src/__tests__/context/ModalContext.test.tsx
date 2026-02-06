import { render, screen, fireEvent } from '@testing-library/react';
import { ModalProvider, useModal } from '@/context/ModalContext';

// Test component that uses the modal context
function TestComponent() {
  const { openModal } = useModal();
  return (
    <button onClick={openModal}>Open Modal</button>
  );
}

describe('ModalContext', () => {
  it('should provide openModal and closeModal functions', () => {
    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>
    );

    expect(screen.getByText('Open Modal')).toBeInTheDocument();
  });

  it('should open modal when openModal is called', () => {
    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>
    );

    const button = screen.getByText('Open Modal');
    fireEvent.click(button);

    // Modal should be rendered (checking for form input)
    expect(screen.getByPlaceholderText(/Имя|ФИО/i)).toBeInTheDocument();
  });

  it('should throw error when useModal is used outside ModalProvider', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useModal must be used within a ModalProvider');

    consoleSpy.mockRestore();
  });
});
