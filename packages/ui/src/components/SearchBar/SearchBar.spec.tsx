import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../theme';
import { SearchBar } from './SearchBar';

describe('<SearchBar />', () => {
    it('should render correctly', () => {
        const { container } = render(
            <ThemeProvider>
                <SearchBar />
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });

    it('should call onChange when any change happens on input text', () => {
        const onChangeFn = jest.fn();

        render(
            <ThemeProvider>
                <SearchBar placeholder='mock-placeholder' onChange={onChangeFn} />
            </ThemeProvider>
        );

        const searchInput = screen.getByPlaceholderText('mock-placeholder');

        fireEvent.change(searchInput, { target: { value: 'mock writing' } });

        expect(onChangeFn).toHaveBeenCalledTimes(1);
    });

    it('should submit form when search button clicked', () => {
        const onSubmitFn = jest.fn((e) => e.preventDefault());

        render(
            <ThemeProvider>
                <form onSubmit={onSubmitFn}>
                    <SearchBar placeholder='mock-placeholder' onChange={onSubmitFn} />
                </form>
            </ThemeProvider>
        );

        const searchButton = screen.getByRole('button', { name: 'Pesquisar' });

        fireEvent.click(searchButton);

        expect(onSubmitFn).toHaveBeenCalledTimes(1);
    });
});
