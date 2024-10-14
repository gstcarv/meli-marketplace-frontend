import { ProductItem } from '@marketplace/bff';
import { ProductImage } from '../ProductImage';
import { Container, DescriptionText, DescriptionTitle, PictureDivider } from './styled';
import { Divider } from '@meli/ui';

type Props = {
    product: ProductItem;
};

const ProductDetailsStartColumn = ({ product }: Props) => {
    return (
        <>
            <Container className='ProductDetails__picture'>
                <ProductImage picture={product?.picture} />

                <PictureDivider />
            </Container>

            <Container className='ProductDetails__info'>
                <section>
                    <DescriptionTitle>Descrição do Produto</DescriptionTitle>

                    <DescriptionText
                        dangerouslySetInnerHTML={{
                            __html: product?.description || ''
                        }}
                    />
                </section>
            </Container>
        </>
    );
};

export default ProductDetailsStartColumn;
