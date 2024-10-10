import { NavbarLogo } from '../NavbarLogo';
import { NavbarContainer, NavbarSearch } from './styled';

export const MeliNavbar = () => {
    return (
        <NavbarContainer>
            <NavbarLogo />

            <NavbarSearch />
        </NavbarContainer>
    );
};
