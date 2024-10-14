import { Spacing } from '@meli/design-tokens';
import { ComponentProps } from 'react';

export type SkeletonProps = {
    /**
     * Skeleton width
     */
    width?: string | number;

    /**
     * Skeleton height
     */
    height?: string | number;

    /**
     * Border radius value
     */
    radii?: Spacing;
} & Pick<ComponentProps<'div'>, 'style' | 'className'>;
