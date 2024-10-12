import styled from 'styled-components';

export const ButtonBase = styled.button`
    height: 48px;
    border: none;
    padding: 0 ${({ theme }) => theme.spacing.get('xl2')};
    gap: 0 ${({ theme }) => theme.spacing.get('sm')};
    border-radius: ${({ theme }) => theme.radii.get('md')};
    background-color: ${({ theme }) => theme.colors.get('accent-500')};
    transition: background-color 0.8s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.get('accent-600')};
    }
`;

export const ButtonText = styled.span`
    font-size: ${({ theme }) => theme.fontSize.get('body')};
    font-weight: ${({ theme }) => theme.fontWeight.get('bold')};
    color: #ffffff;
    letter-spacing: 0.3px;
`;
