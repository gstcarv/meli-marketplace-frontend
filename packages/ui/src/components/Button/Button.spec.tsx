import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../theme';
import { Button } from './Button';

describe('<Button />', () => {
    it('should render button correctly', () => {
        const { container } = render(
            <ThemeProvider>
                <Button>my button content</Button>
            </ThemeProvider>
        );

        expect(screen.getByText('my button content'));

        expect(container).toMatchSnapshot();
    });

    it('should call onClick on click button', () => {
        const onClickFn = jest.fn();

        render(
            <ThemeProvider>
                <Button onClick={onClickFn}>click me</Button>
            </ThemeProvider>
        );

        fireEvent.click(screen.getByRole('button', { name: 'click me' }));

        expect(onClickFn).toHaveBeenCalledTimes(1);
    });
});
