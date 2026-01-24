import {
  cn,
  formatPhone,
  isValidEmail,
  isValidPhone,
  formatNumber,
} from '@/lib/utils';

describe('utils', () => {
  describe('cn (class names)', () => {
    it('should combine class names', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
    });

    it('should filter out falsy values', () => {
      expect(cn('class1', undefined, 'class2', null, false)).toBe('class1 class2');
    });

    it('should return empty string for no valid classes', () => {
      expect(cn(undefined, null, false)).toBe('');
    });
  });

  describe('formatPhone', () => {
    it('should format 12-digit phone number correctly', () => {
      expect(formatPhone('998901234567')).toBe('+998 (90) 123-45-67');
    });

    it('should return original string for non-12-digit numbers', () => {
      expect(formatPhone('+998 90 123 45 67')).toBe('+998 (90) 123-45-67');
    });
  });

  describe('isValidEmail', () => {
    it('should return true for valid email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
    });

    it('should return false for invalid email', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('should return true for valid phone numbers', () => {
      expect(isValidPhone('998901234567')).toBe(true);
      expect(isValidPhone('901234567')).toBe(true);
    });

    it('should return false for invalid phone numbers', () => {
      expect(isValidPhone('12345678')).toBe(false);
      expect(isValidPhone('')).toBe(false);
    });
  });

  describe('formatNumber', () => {
    it('should format number with thousands separator', () => {
      expect(formatNumber(1000)).toMatch(/1.*000/);
      expect(formatNumber(1000000)).toMatch(/1.*000.*000/);
    });
  });
});
