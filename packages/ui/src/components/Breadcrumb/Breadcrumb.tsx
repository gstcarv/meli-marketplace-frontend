import { Children, Fragment } from 'react';
import { BreadcrumbItem } from './components/BreadcrumbItem';
import { BreadcrumbContainer, BreadcrumItemSeparator, BreadcrumList } from './styled';
import { BreadcrumbProps } from './types';

export const Breadcrumb = ({ children, ...props }: BreadcrumbProps) => {
    const totalChildren = Children.count(children);

    return (
        <BreadcrumbContainer aria-label='breadcrumb' {...props}>
            <BreadcrumList className='Breadcrumb__list'>
                {Children.map(children, (child, index) => (
                    <Fragment key={index}>
                        {child}{' '}
                        {index !== totalChildren - 1 && (
                            <BreadcrumItemSeparator aria-hidden='true'>|</BreadcrumItemSeparator>
                        )}
                    </Fragment>
                ))}
            </BreadcrumList>
        </BreadcrumbContainer>
    );
};

Breadcrumb.Item = BreadcrumbItem;
