import { formatCurrency } from '../formatCurrency';

describe('formatCurrency', () => {
    it('should format ARS correctly', () => {
        const result = formatCurrency(20000, { code: 'ARS' });
        expect(result).toBe('$ 20.000,00');
    });

    it('should format BRL correctly', () => {
        const result = formatCurrency(300, { code: 'BRL' });
        expect(result).toBe('R$ 300,00');
    });

    it('should format USD correctly', () => {
        const result = formatCurrency(140, { code: 'USD' });
        expect(result).toBe('$ 140.00');
    });

    it('should hide cents correctly', () => {
        const result = formatCurrency(20000, { code: 'ARS', hideCents: true });
        expect(result).toBe('$ 20.000');
    });
});
