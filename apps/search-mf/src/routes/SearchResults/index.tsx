import { PageContainer } from '@meli/ui';
import { useSearchParams } from 'react-router-dom';
import { useSearchProducts } from '../../hooks/useSearchProducts';
import { ProductCard } from '../../components/ProductCard';
import { ProductList } from '../../components/ProductList';
import { ProductItem } from '@marketplace/bff';

export const SearchResults = () => {
    const [params] = useSearchParams('search');

    const searchParam = params.get('search');

    const products = useSearchProducts({ q: searchParam });

    return (
        <PageContainer>
            <ProductList products={(products.data?.items || []) as ProductItem[]} />
        </PageContainer>
    );
};
