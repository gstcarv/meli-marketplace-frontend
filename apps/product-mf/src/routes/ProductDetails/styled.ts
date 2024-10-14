import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const BackLink = styled.a`
    color: ${({ theme }) => theme.colors.get('accent-500')};
`;
