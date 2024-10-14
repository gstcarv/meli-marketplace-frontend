import { Breadcrumb, PageContainer, Skeleton } from '@meli/ui';
import { useParams } from 'react-router-dom';
import ProductDetailsEndColumn from '../../components/ProductDetailsEndColumn';
import ProductDetailsStartColumn from '../../components/ProductDetailsStartColumn';
import { useGetProductById } from '../../hooks/useGetProductById';
import { Container } from './styled';
import { ProductDetailsSkeleton } from '../../components/ProductDetailsSkeleton';
import { useEffect } from 'react';

export const ProductDetails = () => {
    const params = useParams<{ slug: string }>();

    const { data: product, isLoading } = useGetProductById({ id: params?.slug || '' });

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <PageContainer>
            <PageContainer.Heading>
                {isLoading ? (
                    <Skeleton width='30%' height={20} />
                ) : !!product?.categories.length ? (
                    <Breadcrumb>
                        {product.categories.map((category) => (
                            <Breadcrumb.Item key={category}>{category}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                ) : null}
            </PageContainer.Heading>

            <PageContainer.Content>
                {isLoading ? (
                    <ProductDetailsSkeleton />
                ) : product ? (
                    <Container>
                        <ProductDetailsStartColumn product={product?.item} />

                        <ProductDetailsEndColumn product={product?.item} />
                    </Container>
                ) : null}
            </PageContainer.Content>
        </PageContainer>
    );
};
