import { renderHook, act } from '@testing-library/react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

describe('useMediaQuery', () => {
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    // Mock matchMedia
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('should return false initially for non-matching query', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(result.current).toBe(false);
  });

  it('should return true for matching query', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));
    expect(result.current).toBe(true);
  });
});
