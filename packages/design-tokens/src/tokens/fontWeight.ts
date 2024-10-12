import { createTokens } from '../lib/create-tokens';

export const fontWeight = createTokens({
    bold: 500,
    medium: 400,
    regular: 300,
    thin: 200
} as const);
