import { ProductItem } from '@marketplace/bff';
import { ProductImage } from '../ProductImage';
import { Container, DescriptionText, DescriptionTitle } from './styled';
import { Divider } from '@meli/ui';

type Props = {
    product: ProductItem;
};

const ProductDetailsStartColumn = ({ product }: Props) => {
    return (
        <Container>
            <ProductImage picture={product?.picture} />

            <Divider my='xl2' />

            <section>
                <DescriptionTitle>Descrição do Produto</DescriptionTitle>

                <DescriptionText
                    dangerouslySetInnerHTML={{
                        __html: product?.description || ''
                    }}
                />
            </section>
        </Container>
    );
};

export default ProductDetailsStartColumn;
