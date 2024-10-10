import { createTokens } from '../lib/create-tokens';

export const fontSize = createTokens({
    h1: '2.125rem',
    h2: '1.875rem',
    h3: '1.625rem',
    h4: '1.375rem',
    h5: '1.25rem',
    h6: '1.125rem',
    body: '1rem',
    caption: '0.875rem'
} as const);
