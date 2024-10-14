import { ComponentProps, PropsWithChildren } from 'react';

type BaseBreadcrumbItemProps = {
    isCurrent?: true;
};

export type BreadcrumbItemProps = PropsWithChildren<BaseBreadcrumbItemProps & ComponentProps<'div'>>;
