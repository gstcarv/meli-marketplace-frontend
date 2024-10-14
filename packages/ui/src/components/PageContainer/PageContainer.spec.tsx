import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../theme';
import { PageContainer } from './PageContainer';

describe('<PageContainer />', () => {
    it('should render correctly', () => {
        const { container } = render(
            <ThemeProvider>
                <PageContainer>
                    <PageContainer.Content>mock-page-content</PageContainer.Content>
                </PageContainer>
            </ThemeProvider>
        );

        expect(screen.getByText('mock-page-content')).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    it('should render with heading', () => {
        const { container } = render(
            <ThemeProvider>
                <PageContainer>
                    <PageContainer.Heading>mock-page-heading</PageContainer.Heading>

                    <PageContainer.Content>mock-page-content</PageContainer.Content>
                </PageContainer>
            </ThemeProvider>
        );

        expect(screen.getByText('mock-page-heading')).toBeInTheDocument();

        expect(screen.getByText('mock-page-content')).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
