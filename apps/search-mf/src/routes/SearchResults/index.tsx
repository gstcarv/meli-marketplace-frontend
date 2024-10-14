import { ProductItem } from '@marketplace/bff';
import { Breadcrumb, PageContainer, Skeleton, StatusFeedback, ViewState } from '@meli/ui';
import { useSearchParams } from 'react-router-dom';
import { ProductList } from '../../components/ProductList';
import ProductListSkeleton from '../../components/ProductListSkeleton';
import { useSearchProducts } from '../../hooks/useSearchProducts';
import { Helmet } from 'react-helmet';

export const SearchResults = () => {
    const [params] = useSearchParams('search');

    const products = useSearchProducts({ q: params.get('search') });

    return (
        <ViewState
            isLoading={products.isLoading}
            isEmpty={products?.data?.items.length === 0}
            isError={products.isError}
        >
            <Helmet title={`${params.get('search')} | Mercado Livre`} />

            <PageContainer>
                <PageContainer.Heading>
                    <ViewState.Loading>
                        <Skeleton width='30%' height={20} />
                    </ViewState.Loading>

                    <ViewState.Success>
                        <Breadcrumb>
                            {products.data?.categories.map((category) => (
                                <Breadcrumb.Item key={category}>{category}</Breadcrumb.Item>
                            ))}
                        </Breadcrumb>
                    </ViewState.Success>
                </PageContainer.Heading>

                <PageContainer.Content>
                    <ViewState.Success>
                        <ProductList products={(products.data?.items || []) as ProductItem[]} />
                    </ViewState.Success>

                    <ViewState.Empty>
                        <StatusFeedback.SearchEmpty />
                    </ViewState.Empty>

                    <ViewState.Error>
                        <StatusFeedback.Error />
                    </ViewState.Error>

                    <ViewState.Loading>
                        <ProductListSkeleton />
                    </ViewState.Loading>
                </PageContainer.Content>
            </PageContainer>
        </ViewState>
    );
};
