import { Breadcrumb, PageContainer, Skeleton, StatusFeedback, ViewState } from '@meli/ui';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailsEndColumn from '../../components/ProductDetailsEndColumn';
import { ProductDetailsSkeleton } from '../../components/ProductDetailsSkeleton';
import ProductDetailsStartColumn from '../../components/ProductDetailsStartColumn';
import { useGetProductById } from '../../hooks/useGetProductById';
import { BackLink, Container } from './styled';
import { Helmet } from 'react-helmet';

const ProductDetails = () => {
    const params = useParams<{ slug: string }>();

    const navigate = useNavigate();

    const { data: product, isLoading, isError, refetch } = useGetProductById({ id: params?.slug || '' });

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <ViewState isError={isError} isLoading={isLoading}>
            {product && <Helmet title={`${product.item?.title} | Mercado Livre`} />}

            <PageContainer>
                <PageContainer.Heading>
                    <ViewState.Loading>
                        <Skeleton width='30%' height={20} />
                    </ViewState.Loading>

                    <ViewState.Success>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <BackLink href='#' onClick={() => navigate(-1)}>
                                    Voltar
                                </BackLink>
                            </Breadcrumb.Item>

                            {product?.categories.map((category) => (
                                <Breadcrumb.Item key={category}>{category}</Breadcrumb.Item>
                            ))}
                        </Breadcrumb>
                    </ViewState.Success>
                </PageContainer.Heading>

                <PageContainer.Content>
                    <ViewState.Loading>
                        <ProductDetailsSkeleton />
                    </ViewState.Loading>

                    <ViewState.Error>
                        <StatusFeedback.Error onActionClick={refetch} />
                    </ViewState.Error>

                    <ViewState.Success>
                        {product?.item && (
                            <Container>
                                <ProductDetailsStartColumn product={product?.item} />

                                <ProductDetailsEndColumn product={product?.item} />
                            </Container>
                        )}
                    </ViewState.Success>
                </PageContainer.Content>
            </PageContainer>
        </ViewState>
    );
};

export default ProductDetails;
