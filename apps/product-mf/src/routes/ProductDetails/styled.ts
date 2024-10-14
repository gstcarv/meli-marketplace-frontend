import { breakpoints } from '@meli/design-tokens';
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 1.5fr;

    .ProductDetails {
        &__picture {
            order: 0;
        }

        &__price {
            order: 1;
        }

        &__info {
            order: 2;
        }
    }

    @media screen and (max-width: ${breakpoints.get('lg')}) {
        grid-template-columns: 1fr;
    }
`;

export const BackLink = styled.a`
    color: ${({ theme }) => theme.colors.get('accent-500')};
`;
