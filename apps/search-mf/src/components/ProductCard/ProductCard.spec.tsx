import { ProductItem } from '@marketplace/bff';
import { ThemeProvider } from '@meli/ui';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { ProductCard } from '.';

const productStub: Partial<ProductItem> = {
    id: 'mock-id',
    condition: 'new',
    title: 'Mocked product title',
    price: {
        amount: 4445,
        currency: 'ARS'
    },
    free_shipping: true,
    picture: 'http://mock/picture.png'
};

describe('<ProductCard />', () => {
    it('should render card correcly', () => {
        const { container } = render(
            <ThemeProvider>
                <MemoryRouter>
                    <ProductCard product={productStub} />
                </MemoryRouter>
            </ThemeProvider>
        );

        expect(screen.getByText('$ 4.445')).toBeInTheDocument();
        expect(screen.getByText('Mocked product title')).toBeInTheDocument();
        expect(screen.getByText('Produto novo')).toBeInTheDocument();

        expect(screen.getByRole('generic', { name: 'Frete grátis' })).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('should hide shipping icon if is not free shipping', () => {
        const { container } = render(
            <ThemeProvider>
                <MemoryRouter>
                    <ProductCard product={{ ...productStub, free_shipping: false }} />
                </MemoryRouter>
            </ThemeProvider>
        );

        expect(screen.queryByRole('generic', { name: 'Frete grátis' })).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('should navigate to product page when click card', async () => {
        const LocationPath = () => {
            const location = useLocation();

            return <div data-testid='pathname'>{location.pathname}</div>;
        };

        render(
            <ThemeProvider>
                <MemoryRouter>
                    <ProductCard product={{ ...productStub, free_shipping: false }} />

                    <LocationPath />
                </MemoryRouter>
            </ThemeProvider>
        );

        const card = screen.getByRole('link', { name: /product title/ });

        fireEvent.click(card);

        await waitFor(() => {
            expect(screen.getByTestId('pathname')).toHaveTextContent('/mock-id');
        });
    });
});
