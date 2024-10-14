import { Breadcrumb, PageContainer } from '@meli/ui';
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
            {!!product?.categories.length && (
                <PageContainer.Heading>
                    <Breadcrumb>
                        {product.categories.map((category) => (
                            <Breadcrumb.Item key={category}>{category}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                </PageContainer.Heading>
            )}

            <PageContainer.Content>
                <Container>
                    <ProductDetailsStartColumn product={product?.item} />

                    <ProductDetailsEndColumn product={product?.item} />
                </Container>
            </PageContainer.Content>
        </PageContainer>
    );
};
