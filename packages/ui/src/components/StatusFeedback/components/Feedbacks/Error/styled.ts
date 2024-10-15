import styled from 'styled-components';

export const TryAgainButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.get('accent-500')};
    font-size: ${({ theme }) => theme.fontSize.get('caption')};
    font-weight: ${({ theme }) => theme.fontWeight.get('medium')};
    gap: ${({ theme }) => theme.spacing.get('xs1')};
`;
