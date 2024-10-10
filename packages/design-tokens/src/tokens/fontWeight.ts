import { createTokens } from '../lib/create-tokens';

export const fontWeight = createTokens({
    bold: 600,
    medium: 500,
    regular: 400,
    thin: 300
} as const);
