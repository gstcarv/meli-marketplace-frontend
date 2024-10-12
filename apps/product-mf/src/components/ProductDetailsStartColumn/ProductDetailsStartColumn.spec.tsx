import { ProductItem } from '@marketplace/bff';
import { ThemeProvider } from '@meli/ui';
import { render, screen } from '@testing-library/react';
import ProductDetailsStartColumn from '.';

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
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum interdum sapien, vitae consectetur diam dictum condimentum. Nunc nec tellus nisl. Nulla ullamcorper, dui quis aliquet ultrices, magna velit condimentum elit, quis blandit mauris nunc sit amet justo. Donec at turpis magna. Suspendisse potenti ',
    sold_quantity: 100
};

describe('<ProductDetailsStartColumn />', () => {
    it('should render', () => {
        const { container } = render(
            <ThemeProvider>
                <ProductDetailsStartColumn product={{ ...productStub, sold_quantity: 30000, condition: 'new' }} />
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
});
