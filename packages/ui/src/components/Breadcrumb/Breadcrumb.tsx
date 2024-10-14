import { Children, Fragment, PropsWithChildren } from 'react';
import { BreadcrumbItem } from './components/BreadcrumbItem';
import { BreadcrumbContainer, BreadcrumList, BreadcrumItemSeparator } from './styled';

export const Breadcrumb = ({ children, ...props }: PropsWithChildren) => {
    const totalChildren = Children.count(children);

    return (
        <BreadcrumbContainer aria-label='breadcrumb' {...props}>
            <BreadcrumList className='Breadcrumb__list'>
                {Children.map(children, (child, index) => (
                    <Fragment key={index}>
                        {child} {index !== totalChildren - 1 && <BreadcrumItemSeparator>|</BreadcrumItemSeparator>}
                    </Fragment>
                ))}
            </BreadcrumList>
        </BreadcrumbContainer>
    );
};

Breadcrumb.Item = BreadcrumbItem;
