import { breakpoints } from '@meli/design-tokens';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing.get('lg')};
    gap: ${({ theme }) => theme.spacing.get('lg')};

    @media screen and (max-width: ${breakpoints.get('lg')}) {
        padding: 0;
    }
`;

export const Start = styled.div`
    flex-shrink: 0;
    flex: 0.7;

    @media screen and (max-width: ${breakpoints.get('lg')}) {
        flex: 1;
    }
`;

export const End = styled.div`
    flex: 0.3;

    @media screen and (max-width: ${breakpoints.get('lg')}) {
        display: none;
    }
`;
