import { memo, useRef } from 'react';
import { useHandleSearchSubmit } from '../../hooks/useHandleSearchSubmit';
import { NavbarLogo } from '../NavbarLogo';
import { NavbarContainer, NavbarSearch } from './styled';

const MeliNavbar = () => {
    const searchRef = useRef<HTMLInputElement>(null);

    const { searchText, onSubmit } = useHandleSearchSubmit();

    return (
        <NavbarContainer>
            <NavbarLogo />

            <form onSubmit={onSubmit(searchRef)} style={{ width: '40%' }}>
                <NavbarSearch placeholder='Nunca deixe de buscar' defaultValue={searchText} inputRef={searchRef} />
            </form>
        </NavbarContainer>
    );
};

export default memo(MeliNavbar);
