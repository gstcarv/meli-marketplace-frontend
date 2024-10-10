import { createTokens } from '../lib/create-tokens';

export const radii = createTokens({
    xs1: '0.125rem',
    xs: '0.25rem',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    xl2: '2rem'
} as const);
