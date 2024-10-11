import { ProductItem } from '@marketplace/bff';
import { Divider } from '@meli/ui';
import { Fragment } from 'react';
import { ProductCard } from '../ProductCard';
import { ProductListContainer } from './styled';

type Props = {
    products: ProductItem[];
};

export function ProductList({ products }: Props) {
    return (
        <ProductListContainer>
            {products?.map((item) => (
                <Fragment key={item.id}>
                    <li>
                        <ProductCard product={item} />
                    </li>

                    <Divider />
                </Fragment>
            ))}
        </ProductListContainer>
    );
}
