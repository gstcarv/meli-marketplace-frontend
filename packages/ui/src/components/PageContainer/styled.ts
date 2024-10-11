import styled from 'styled-components';

export const Container = styled.main`
    background-color: #ffffff;
    margin: ${({ theme }) => theme.spacing.get('xl')} 10%;
    padding: ${({ theme }) => theme.spacing.get('md')};
    border-radius: ${({ theme }) => theme.radii.get('xs')};
`;
