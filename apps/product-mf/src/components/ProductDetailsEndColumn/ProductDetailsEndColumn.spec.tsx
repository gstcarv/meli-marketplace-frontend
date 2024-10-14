import { ThemeProvider } from '@meli/ui';
import { render, screen } from '@testing-library/react';
import ProductDetailsEndColumn from '.';
import { ProductItem } from '@marketplace/bff';

const productStub: ProductItem = {
    id: 'mock-id',
    condition: 'new',
    title: 'Mocked product title',
    price: {
        amount: 4445,
        currency: 'ARS'
    },
    free_shipping: true,
    picture: 'http://mock/picture.png',
    description: 'mock-description',
    sold_quantity: 100
};

describe('<ProductDetailsEndColumn />', () => {
    it('should render correctly with condition and sold quantity', () => {
        const { container } = render(
            <ThemeProvider>
                <ProductDetailsEndColumn product={{ ...productStub, sold_quantity: 30000, condition: 'new' }} />
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });

    it('should render correctly when there is a big sold quantity', () => {
        render(
            <ThemeProvider>
                <ProductDetailsEndColumn product={{ ...productStub, condition: 'new', sold_quantity: 30000 }} />
            </ThemeProvider>
        );

        expect(screen.getByText('Novo | +30mil vendidos')).toBeInTheDocument();
    });

    it('should render correctly when there is a small sold quantity', () => {
        render(
            <ThemeProvider>
                <ProductDetailsEndColumn product={{ ...productStub, condition: 'used', sold_quantity: 16 }} />
            </ThemeProvider>
        );

        expect(screen.getByText(/Usado \| 16 vendidos/i)).toBeInTheDocument();
    });

    it('should render correctly when there is not condition either sold quantity provided', () => {
        render(
            <ThemeProvider>
                <ProductDetailsEndColumn
                    product={{
                        ...productStub,
                        sold_quantity: undefined,
                        condition: 'not_specified'
                    }}
                />
            </ThemeProvider>
        );

        expect(screen.queryByTestId('info-heading')).not.toBeInTheDocument();
    });
});
