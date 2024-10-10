import { ThemeProvider } from '@meli/ui';
import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import MeliNavbar from '.';
import * as handleSearchSubmit from '../../hooks/useHandleSearchSubmit';

jest.mock('../NavbarLogo', () => {
    return { __esModule: true, NavbarLogo: () => <img /> };
});

describe('<MeliNavbar />', () => {
    it('should call submit function when write text and search', () => {
        const onSubmitFn = jest.fn();

        jest.spyOn(handleSearchSubmit, 'useHandleSearchSubmit').mockReturnValue({
            searchText: 'mock-search-text',
            onSubmit: onSubmitFn
        });

        render(
            <ThemeProvider>
                <MeliNavbar />
            </ThemeProvider>
        );

        const searchInput = screen.getByPlaceholderText(/Nunca deixe de buscar/i);

        fireEvent.change(searchInput, { target: { value: 'mock-text' } });
        userEvent.type(searchInput, '{enter}');

        expect(onSubmitFn).toHaveBeenCalledTimes(1);
    });

    it('should have search bar with query param value as default value', () => {
        const onSubmitFn = jest.fn();

        jest.spyOn(handleSearchSubmit, 'useHandleSearchSubmit').mockReturnValue({
            searchText: 'mock-search-text',
            onSubmit: onSubmitFn
        });

        render(
            <ThemeProvider>
                <MeliNavbar />
            </ThemeProvider>
        );

        const searchInput = screen.getByDisplayValue(/mock-search-text/i);

        expect(searchInput).toBeInTheDocument();
    });
});
