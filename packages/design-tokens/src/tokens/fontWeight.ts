import { createTokens } from '../lib/create-tokens';

export const fontWeight = createTokens({
    bold: 500,
    medium: 400,
    regular: 300
} as const);
