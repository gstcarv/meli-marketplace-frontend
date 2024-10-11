import styled from 'styled-components';

export const Container = styled.main`
    background-color: #ffffff;
    margin: 0 10%;
    margin-top: ${({ theme }) => theme.spacing.get('xl')};
    padding: ${({ theme }) => theme.spacing.get('md')};
    border-radius: ${({ theme }) => theme.radii.get('xs')};
`;
