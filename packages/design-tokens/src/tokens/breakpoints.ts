import { createTokens, GetTokens } from '../lib/create-tokens';

export const breakpoints = createTokens({
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xl2: '1400px'
} as const);

export type Breakpoints = GetTokens<typeof breakpoints>;
