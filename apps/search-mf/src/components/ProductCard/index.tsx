import { ProductItem } from '@marketplace/bff';
import { formatCurrency } from '@meli/currency-utils';
import { useMemo } from 'react';
import { ProductCardBody, ProductCardContainer, ProductImageContainer, ProductPrice, ProductTitle } from './styled';

type Props = {
    product: Partial<ProductItem>;
};

export const ProductCard = ({ product }: Props) => {
    const price = useMemo(
        () => formatCurrency(product.price?.amount || 0, { code: product.price?.currency, hideCents: true }),
        [product.price]
    );

    return (
        <ProductCardContainer to={`/${product.id}`}>
            <ProductImageContainer>
                <img src={product.picture} loading='lazy' />
            </ProductImageContainer>

            <ProductCardBody>
                <ProductPrice>{price}</ProductPrice>
                <ProductTitle className='ProductCard__title'>{product.title}</ProductTitle>
            </ProductCardBody>
        </ProductCardContainer>
    );
};
