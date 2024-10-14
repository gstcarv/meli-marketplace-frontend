import 'react-loading-skeleton/dist/skeleton.css';
import { PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from '../globalStyles';
import { theme } from './theme';

export const ThemeProvider = (props: PropsWithChildren) => (
    <StyledThemeProvider theme={theme}>
        <>
            {props.children}

            <GlobalStyle />
        </>
    </StyledThemeProvider>
);
