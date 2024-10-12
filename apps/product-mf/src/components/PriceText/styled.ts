import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const MainPriceText = styled.span`
    color: #000000;
    font-size: ${({ theme }) => theme.fontSize.get('h1')};
    font-weight: ${({ theme }) => theme.fontWeight.get('regular')};
`;

export const CentsText = styled.span`
    color: #000000;
    font-size: ${({ theme }) => theme.fontSize.get('caption')};
    font-weight: ${({ theme }) => theme.fontWeight.get('regular')};
    margin-top: ${({ theme }) => theme.spacing.get('xs2')};
    margin-left: ${({ theme }) => theme.spacing.get('xs2')};
`;
