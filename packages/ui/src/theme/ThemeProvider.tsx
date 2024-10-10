import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';

export const ThemeProvider = (props: PropsWithChildren) => (
    <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
);
