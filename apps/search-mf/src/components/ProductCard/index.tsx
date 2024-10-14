import { ProductItem } from '@marketplace/bff';
import { formatCurrency } from '@meli/currency-utils';
import { TruckIcon } from '@meli/icons';
import { Badge } from '@meli/ui';
import { useMemo } from 'react';
import {
    ProductCardBody,
    ProductCardContainer,
    ProductCardEndWrapper,
    ProductCondition,
    ProductImageContainer,
    ProductPrice,
    ProductPriceWrapper,
    ProductTitle
} from './styled';

type Props = {
    product: Partial<ProductItem>;
};

export const ProductCard = ({ product }: Props) => {
    const price = useMemo(
        () => formatCurrency(product.price?.amount || 0, { code: product.price?.currency, hideCents: true }),
        [product.price]
    );

    const conditionLabel = useMemo(() => {
        if (product.condition === 'new') return 'Produto novo';

        if (product.condition === 'used') return 'Produto usado';

        return product.condition;
    }, [product.condition]);

    return (
        <ProductCardContainer to={`/${product.id}`}>
            <ProductImageContainer>
                <img src={product.picture} loading='lazy' alt='Foto do produto' />
            </ProductImageContainer>

            <ProductCardBody>
                <ProductPriceWrapper>
                    <ProductPrice>{price}</ProductPrice>

                    {product.free_shipping && (
                        <Badge color='success-500' label='Frete grátis com ícone de caminhão'>
                            <TruckIcon size={11} color='#ffffff' />
                        </Badge>
                    )}
                </ProductPriceWrapper>

                <ProductTitle className='ProductCard__title'>{product.title}</ProductTitle>
            </ProductCardBody>

            <ProductCardEndWrapper>
                <ProductCondition>{conditionLabel}</ProductCondition>
            </ProductCardEndWrapper>
        </ProductCardContainer>
    );
};
