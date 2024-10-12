/**
 * Formats a sold quantity valud
 *
 * @param soldQuantity - value sold
 * @example 5000 => +5mil vendidoss
 *
 * @returns formatted sold value
 */
export function soldFormatter(soldQuantity: number | undefined) {
    const suffix = 'vendidos';

    if (!soldQuantity) return null;

    if (soldQuantity < 1000) return `${soldQuantity} ${suffix}`;

    const longNumberFormatter = new Intl.NumberFormat('pt-BR', {
        notation: 'compact',
        compactDisplay: 'short',
        maximumFractionDigits: 0
    });

    const value = longNumberFormatter.format(soldQuantity).replace(/\s/g, '');

    return `+${value} ${suffix}`;
}
