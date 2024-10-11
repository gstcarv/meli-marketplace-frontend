import { memo, useRef } from 'react';
import { useHandleSearchSubmit } from '../../hooks/useHandleSearchSubmit';
import { NavbarLogo } from '../NavbarLogo';
import { NavbarContainer, NavbarSearch, SearchForm } from './styled';

const MeliNavbar = () => {
    const searchRef = useRef<HTMLInputElement>(null);

    const { searchText, onSubmit } = useHandleSearchSubmit();

    return (
        <NavbarContainer>
            <NavbarLogo />

            <SearchForm onSubmit={onSubmit(searchRef)}>
                <NavbarSearch placeholder='Nunca deixe de buscar...' defaultValue={searchText} inputRef={searchRef} />
            </SearchForm>
        </NavbarContainer>
    );
};

export default memo(MeliNavbar);
