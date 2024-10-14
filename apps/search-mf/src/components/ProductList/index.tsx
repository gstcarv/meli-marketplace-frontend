import { ProductItem } from '@marketplace/bff';
import { Divider } from '@meli/ui';
import { ProductCard } from '../ProductCard';
import { ProductListContainer } from './styled';

type Props = {
    products: ProductItem[];
};

export function ProductList({ products }: Props) {
    return (
        <ProductListContainer>
            {products?.map((item) => (
                <li key={item.id}>
                    <ProductCard product={item} />

                    <Divider />
                </li>
            ))}
        </ProductListContainer>
    );
}
