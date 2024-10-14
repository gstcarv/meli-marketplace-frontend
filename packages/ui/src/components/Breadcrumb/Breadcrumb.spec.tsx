import { render } from '@testing-library/react';
import { ThemeProvider } from '../../theme';
import { Breadcrumb } from './Breadcrumb';

describe('<Breadcrumb />', () => {
    it('should render correctly', () => {
        const { container } = render(
            <ThemeProvider>
                <Breadcrumb>
                    <Breadcrumb.Item>item 1</Breadcrumb.Item>

                    <Breadcrumb.Item>item 2</Breadcrumb.Item>

                    <Breadcrumb.Item>item 3</Breadcrumb.Item>

                    <Breadcrumb.Item>item 4</Breadcrumb.Item>
                </Breadcrumb>
            </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
});
