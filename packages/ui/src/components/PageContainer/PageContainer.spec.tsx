import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../theme';
import { PageContainer } from './PageContainer';

describe('<PageContainer />', () => {
    it('should render correctly', () => {
        const { container } = render(
            <ThemeProvider>
                <PageContainer>mock-page-content</PageContainer>
            </ThemeProvider>
        );

        expect(screen.getByText('mock-page-content')).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
