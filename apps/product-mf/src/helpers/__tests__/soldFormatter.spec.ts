import { soldFormatter } from '../soldFormatter';

describe('soldFormatter', () => {
    it('should return full way if less than a thousand quantity', () => {
        const result = soldFormatter(10);

        expect(result).toBe('10 vendidos');
    });

    it('should return a short way if more than a thousand quantity', () => {
        const result = soldFormatter(3000);

        expect(result).toBe('+3mil vendidos');
    });

    it('should not insert any decimal fraction when more than a thousand quantity', () => {
        const result = soldFormatter(5432);

        expect(result).toBe('+5mil vendidos');
    });
});
