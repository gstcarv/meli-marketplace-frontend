import { render } from '@testing-library/react';
import { ThemeProvider } from '../../theme';
import { Divider } from './Divider';

describe('<Divider />', () => {
    it('should render correctly', () => {
        const { container } = render(
            <ThemeProvider>
                <Divider />
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
});
