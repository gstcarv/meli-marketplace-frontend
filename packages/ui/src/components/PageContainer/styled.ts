import { breakpoints } from '@meli/design-tokens';
import React, { ComponentProps } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    margin: ${({ theme }) => theme.spacing.get('xl')} 10%;

    @media screen and (max-width: ${breakpoints.get('sm')}) {
        margin: ${({ theme }) => theme.spacing.get('md')} 5%;
    }
`;

export const ContentContainer = styled.main`
    background-color: #ffffff;
    padding: ${({ theme }) => theme.spacing.get('md')};
    border-radius: ${({ theme }) => theme.radii.get('xs')};
`;

export const ContentHeader = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.get('md')};
`;
