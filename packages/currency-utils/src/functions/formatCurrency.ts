import currencies from '../assets/currencies.json';

type FormatCurrencyOptions = {
    code?: string;
    hideCents?: boolean;
};

export function formatCurrency(value: number, options?: FormatCurrencyOptions) {
    const code = options?.code || 'ARS';

    const currencyInformation = currencies.find((c) => c.code === code);

    const formatter = Intl.NumberFormat(currencyInformation?.locale, {
        style: 'currency',
        currency: code,
        maximumFractionDigits: options?.hideCents ? 0 : 2,
        minimumFractionDigits: options?.hideCents ? 0 : 2
    });

    return formatter.format(value);
}
