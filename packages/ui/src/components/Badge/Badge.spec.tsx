import { render } from '@testing-library/react';
import { ThemeProvider } from '../../theme';
import { Badge } from './Badge';

describe('<Badge />', () => {
    it('should render correctly', () => {
        const { container } = render(
            <ThemeProvider>
                <Badge label='mock-badge'>2</Badge>
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
});
