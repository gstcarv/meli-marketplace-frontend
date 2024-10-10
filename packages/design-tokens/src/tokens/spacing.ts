import { createTokens } from '../lib/create-tokens';

export const spacing = createTokens({
    xs2: '0.125rem',
    xs1: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xl2: '2.75rem',
    xl3: '4rem'
} as const);
