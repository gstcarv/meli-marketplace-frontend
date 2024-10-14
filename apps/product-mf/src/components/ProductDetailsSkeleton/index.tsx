import { Divider, Skeleton } from '@meli/ui';
import { Container, Start, End } from './styled';

export const ProductDetailsSkeleton = () => {
    return (
        <Container>
            <Start>
                <Skeleton height={500} />

                <Divider my='lg' />

                <Skeleton height={200} />
            </Start>
            <End>
                <Skeleton height={350} />
            </End>
        </Container>
    );
};
