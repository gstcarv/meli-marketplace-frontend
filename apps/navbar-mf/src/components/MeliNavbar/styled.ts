import { SearchBar, SearchBarProps } from '@meli/ui';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    height: 70px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.get('primary-500')};
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
`;

export const SearchForm = styled.form`
    flex: 1;
`;

export const NavbarSearch: React.FC<SearchBarProps> = styled(SearchBar)`
    margin-left: ${({ theme }) => theme.spacing.get('md')};
    width: auto;
`;
