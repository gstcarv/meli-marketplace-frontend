import React from 'react';
import ReactSkeleton, { SkeletonProps as ReactSkeletonProps } from 'react-loading-skeleton';
import { useTheme } from '../../hooks/useTheme';
import { SkeletonProps } from './types';

const SkeletonComponent = ReactSkeleton as React.FC<ReactSkeletonProps>;

export const Skeleton = ({ height, radii = 'xs1', width, ...props }: SkeletonProps) => {
    const theme = useTheme();

    return (
        <SkeletonComponent
            baseColor={theme.colors.get('gray-200')}
            highlightColor={theme.colors.get('gray-300')}
            width={width}
            height={height}
            borderRadius={radii ? theme.spacing.get(radii) : undefined}
            containerTestId='skeleton-loading'
            {...props}
        />
    );
};
