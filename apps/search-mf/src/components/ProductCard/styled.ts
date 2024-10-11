import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductCardContainer = styled(Link)`
    display: flex;
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing.get('xl2')} 0;

    &:hover .ProductCard__title {
        color: ${({ theme }) => theme.colors.get('accent-500')};
    }
`;

export const ProductImageContainer = styled.div`
    width: 160px;
    height: 160px;

    border-radius: ${({ theme }) => theme.radii.get('xs')};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-shrink: 0;

    &:empty {
        background: ${({ theme }) => theme.colors.get('gray-100')};
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const ProductCardBody = styled.div`
    padding: ${({ theme }) => theme.radii.get('xl')};
    width: 50%;
`;

export const ProductPrice = styled.p`
    font-size: ${({ theme }) => theme.fontSize.get('h4')};
    margin-bottom: ${({ theme }) => theme.radii.get('xl')};
`;

export const ProductTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.get('h6')};
    font-weight: ${({ theme }) => theme.fontWeight.get('thin')};
`;
