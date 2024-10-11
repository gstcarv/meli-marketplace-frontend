import { ProductItem } from '@marketplace/bff';
import { ThemeProvider } from '@meli/ui';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProductList } from '.';

const productsStub: Partial<ProductItem>[] = [
    {
        id: 'mock-id-1',
        condition: 'used',
        title: 'Updated product title 1',
        price: {
            amount: 1234,
            currency: 'USD'
        },
        free_shipping: false,
        picture: 'http://mock/updated-picture1.png'
    },
    {
        id: 'mock-id-2',
        condition: 'new',
        title: 'Updated product title 2',
        price: {
            amount: 5678,
            currency: 'EUR'
        },
        free_shipping: true,
        picture: 'http://mock/updated-picture2.png'
    },
    {
        id: 'mock-id-3',
        condition: 'new',
        title: 'Updated product title 3',
        price: {
            amount: 91011,
            currency: 'GBP'
        },
        free_shipping: false,
        picture: 'http://mock/updated-picture3.png'
    }
];

describe('<ProductList />', () => {
    it('should render a list of products', () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <ProductList products={productsStub as ProductItem[]} />
                </MemoryRouter>
            </ThemeProvider>
        );

        expect(screen.queryAllByRole('link')).toHaveLength(3);
    });
});
