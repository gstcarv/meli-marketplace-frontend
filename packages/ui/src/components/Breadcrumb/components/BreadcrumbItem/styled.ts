import React, { ComponentProps } from 'react';
import styled from 'styled-components';

export const BreadcrumbItemContent = styled.li`
    list-style-type: none;
    font-weight: ${({ theme }) => theme.fontWeight.get('regular')};
    font-size: ${({ theme }) => theme.fontSize.get('caption')};
    color: ${({ theme }) => theme.colors.get('gray-600')};
` as React.FC<ComponentProps<'div'>>;
