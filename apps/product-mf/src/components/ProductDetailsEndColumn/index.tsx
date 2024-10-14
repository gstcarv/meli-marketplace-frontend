import { ProductItem } from '@marketplace/bff';
import { Button } from '@meli/ui';
import { useMemo } from 'react';
import { soldFormatter } from '../../helpers/soldFormatter';
import { PriceText } from '../PriceText';
import { Container, InfoHeading, InfoHeadingText, PriceContainer, ProductTitle } from './styled';

type Props = {
    product: ProductItem;
};

const ProductDetailsEndColumn = ({ product }: Props) => {
    const conditionLabel = useMemo(() => {
        if (product.condition === 'new') {
            return 'Novo';
        } else if (product.condition === 'used') {
            return 'Usado';
        }
    }, [product.condition]);

    const soldLabel = useMemo(() => soldFormatter(product.sold_quantity), [product.sold_quantity]);

    const headingLabel = useMemo(
        () => [conditionLabel, soldLabel].filter((item) => !!item).join(' | '),
        [conditionLabel, soldLabel]
    );

    return (
        <Container className='ProductDetails__price'>
            {headingLabel && (
                <InfoHeading data-testid='info-heading'>
                    <InfoHeadingText>{headingLabel}</InfoHeadingText>
                </InfoHeading>
            )}

            <ProductTitle>{product.title}</ProductTitle>

            <PriceContainer>
                <PriceText price={product.price} />
            </PriceContainer>

            <Button style={{ width: '100%' }}>Comprar</Button>
        </Container>
    );
};

export default ProductDetailsEndColumn;
