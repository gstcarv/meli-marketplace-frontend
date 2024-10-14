import { ProductItem } from '@marketplace/bff';
import { Breadcrumb, PageContainer } from '@meli/ui';
import { useSearchParams } from 'react-router-dom';
import { ProductList } from '../../components/ProductList';
import { useSearchProducts } from '../../hooks/useSearchProducts';

export const SearchResults = () => {
    const [params] = useSearchParams('search');

    const searchParam = params.get('search');

    const products = useSearchProducts({ q: searchParam });

    return (
        <PageContainer>
            {!!products.data?.categories.length && (
                <PageContainer.Heading>
                    <Breadcrumb>
                        {products.data.categories.map((category) => (
                            <Breadcrumb.Item key={category}>{category}</Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                </PageContainer.Heading>
            )}

            <PageContainer.Content>
                <ProductList products={(products.data?.items || []) as ProductItem[]} />
            </PageContainer.Content>
        </PageContainer>
    );
};
