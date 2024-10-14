import { breakpoints } from '@meli/design-tokens';
import React, { ComponentProps } from 'react';
import styled from 'styled-components';

export const BreadcrumbContainer = styled.nav`` as React.FC<ComponentProps<'nav'>>;

export const BreadcrumList = styled.ol`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const BreadcrumItemSeparator = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.get('regular')};
    font-size: ${({ theme }) => theme.fontSize.get('caption')};
    color: ${({ theme }) => theme.colors.get('gray-600')};
    margin: 0 ${({ theme }) => theme.spacing.get('sm')};

    @media screen and (max-width: ${breakpoints.get('sm')}) {
        font-size: ${({ theme }) => theme.fontSize.get('caption2')};
    }
`;
