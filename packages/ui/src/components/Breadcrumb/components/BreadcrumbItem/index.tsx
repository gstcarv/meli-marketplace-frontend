import { BreadcrumbItemContent } from './styled';
import { BreadcrumbItemProps } from './types';

export const BreadcrumbItem = ({ children, isCurrent, ...props }: BreadcrumbItemProps) => (
    <BreadcrumbItemContent aria-current={isCurrent ? 'page' : undefined} {...props}>
        {children}
    </BreadcrumbItemContent>
);
