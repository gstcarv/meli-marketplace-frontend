import { Divider, Skeleton } from '@meli/ui';
import { Fragment } from 'react/jsx-runtime';

const ProductListSkeleton = () => (
    <>
        {new Array(4).fill(null).map((_, index) => (
            <Fragment key={index}>
                <Skeleton height={260} key={index} />

                <Divider my='lg' />
            </Fragment>
        ))}
    </>
);

export default ProductListSkeleton;
