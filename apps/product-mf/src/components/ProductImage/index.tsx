import { ProductItem } from '@marketplace/bff';
import { ProductImageContainer } from './styled';

type Props = {
    picture: ProductItem['picture'];
};

export const ProductImage = ({ picture }: Props) => {
    return (
        <ProductImageContainer>
            <img
                src={picture}
                // @ts-expect-error not supported by typescript
                fetchpriority='high'
                alt='Foto do produto'
            />
        </ProductImageContainer>
    );
};
