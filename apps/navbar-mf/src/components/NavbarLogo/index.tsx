import meliLogo from '../../assets/meli-logo.png';

export const NavbarLogo = () => {
    return (
        <a
            href='/'
            aria-label='Página Inicial'
            className='Navbar__logo'
            style={{ display: 'flex', alignItems: 'center' }}
        >
            <img src={meliLogo} alt='Logo do Mercado Livre' style={{ height: 40 }} />
        </a>
    );
};
