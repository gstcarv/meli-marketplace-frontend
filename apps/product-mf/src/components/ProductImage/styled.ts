import { breakpoints } from '@meli/design-tokens';
import styled from 'styled-components';

export const ProductImageContainer = styled.div`
    width: 100%;
    height: 500px;
    border-radius: ${({ theme }) => theme.radii.get('xs')};
    display: flex;
    overflow: hidden;
    flex-shrink: 0;

    &:empty {
        background: ${({ theme }) => theme.colors.get('gray-100')};
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }

    @media screen and (max-width: ${breakpoints.get('lg')}) {
        height: 200px;
    }
`;
