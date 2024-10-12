import styled from 'styled-components';

export const Container = styled.section`
    flex: 0.75;
    padding: ${({ theme }) => theme.spacing.get('lg')};
`;

export const DescriptionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.get('h4')};
    margin-bottom: ${({ theme }) => theme.spacing.get('lg')};
    font-weight: ${({ theme }) => theme.fontWeight.get('medium')};
`;

export const DescriptionText = styled.p`
    font-size: ${({ theme }) => theme.fontSize.get('h6')};
    font-weight: ${({ theme }) => theme.fontWeight.get('regular')};
    color: ${({ theme }) => theme.colors.get('gray-600')};
`;
