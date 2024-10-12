import { PageContainer } from '@meli/ui';
import { useParams } from 'react-router-dom';
import ProductDetailsEndColumn from '../../components/ProductDetailsEndColumn';
import ProductDetailsStartColumn from '../../components/ProductDetailsStartColumn';
import { useGetProductById } from '../../hooks/useGetProductById';
import { Container } from './styled';

export const ProductDetails = () => {
    const params = useParams<{ slug: string }>();

    const { data: product } = useGetProductById({ id: params?.slug || '' });

    if (!product) return null;

    return (
        <PageContainer>
            <Container>
                <ProductDetailsStartColumn product={product?.item as any} />

                <ProductDetailsEndColumn product={product?.item as any} />
            </Container>
        </PageContainer>
    );
};
