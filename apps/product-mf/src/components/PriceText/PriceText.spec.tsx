import { ThemeProvider } from '@meli/ui';
import { render, screen } from '@testing-library/react';
import { PriceText } from '.';

describe('<PriceText />', () => {
    it('should render price correctly', () => {
        render(
            <ThemeProvider>
                <PriceText price={{ amount: 16599, currency: 'ARS' }} />
            </ThemeProvider>
        );

        expect(screen.getByText('$ 16.599')).toBeInTheDocument();
        expect(screen.getByText('00')).toBeInTheDocument();
    });

    it('should render price with cents correctly', () => {
        render(
            <ThemeProvider>
                <PriceText price={{ amount: 4599.49, currency: 'BRL' }} />
            </ThemeProvider>
        );

        expect(screen.getByText('R$ 4.599')).toBeInTheDocument();
        expect(screen.getByText('49')).toBeInTheDocument();
    });
});
