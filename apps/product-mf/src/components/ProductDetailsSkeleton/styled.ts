import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing.get('lg')};
    gap: ${({ theme }) => theme.spacing.get('lg')};
`;

export const Start = styled.div`
    flex-shrink: 0;
    flex: 0.75;
`;

export const End = styled.div`
    flex: 0.25;
`;
