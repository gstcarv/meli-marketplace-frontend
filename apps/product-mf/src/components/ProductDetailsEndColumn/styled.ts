import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    flex: 0.25;
    padding: ${({ theme }) => theme.spacing.get('lg')};
`;

export const InfoHeading = styled.div`
    display: flex;
`;

export const InfoHeadingText = styled.span`
    display: flex;
    color: ${({ theme }) => theme.colors.get('gray-500')};
    font-size: ${({ theme }) => theme.fontSize.get('caption')};
    font-weight: ${({ theme }) => theme.fontWeight.get('regular')};
`;

export const ProductTitle = styled.h1`
    color: #000000;
    font-size: ${({ theme }) => theme.fontSize.get('h4')};
    font-weight: ${({ theme }) => theme.fontWeight.get('bold')};
    margin-top: ${({ theme }) => theme.spacing.get('xs')};
    margin-bottom: 0;
`;

export const PriceContainer = styled.div`
    margin: ${({ theme }) => theme.spacing.get('md')} 0;
    margin-bottom: ${({ theme }) => theme.spacing.get('xl2')};
`;
