import { PageContainer } from '@meli/ui';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
    const params = useParams<{ slug: string }>();

    return <PageContainer>{params.slug}</PageContainer>;
};
