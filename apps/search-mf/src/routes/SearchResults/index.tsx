import { ProductItem } from '@marketplace/bff';
import { Breadcrumb, PageContainer, Skeleton } from '@meli/ui';
import { useSearchParams } from 'react-router-dom';
import { ProductList } from '../../components/ProductList';
import { useSearchProducts } from '../../hooks/useSearchProducts';
import ProductListSkeleton from '../../components/ProductListSkeleton';

export const SearchResults = () => {
    const [params] = useSearchParams('search');

    const searchParam = params.get('search');

    const products = useSearchProducts({ q: searchParam });

    return (
        <PageContainer>
            <PageContainer.Heading>
                {products.isLoading ? (
                    <Skeleton width='30%' height={20} />
                ) : !!products.data?.categories.length ? (
                    <Breadcrumb>
                        {products.data.categories.map((category) => (
                            <Breadcrumb.Item key={category}>{category}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                ) : null}
            </PageContainer.Heading>

            <PageContainer.Content>
                {products.isLoading ? (
                    <ProductListSkeleton />
                ) : (
                    <ProductList products={(products.data?.items || []) as ProductItem[]} />
                )}
            </PageContainer.Content>
        </PageContainer>
    );
};
