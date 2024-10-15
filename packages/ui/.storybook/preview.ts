import { withThemeProvider } from 'storybook-addon-theme-provider';
import { ThemeProvider } from '../src/theme/ThemeProvider'

import type { Preview } from '@storybook/react';

const preview: Preview = {
    decorators:[
        withThemeProvider(ThemeProvider),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export default preview;
