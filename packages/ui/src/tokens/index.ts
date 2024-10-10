import { createTokens } from '../lib/create-tokens';

export const colors = createTokens({
    'primary-500': '#F7E64D',
    'accent-500': '#4A7FEC',
    'gray-100': '#EEEEEE',
    'gray-200': '#EDECEC',
    'gray-300': '#D6D5D4',
    'gray-500': '#9A9897',
    'gray-400': '#B2B1B0'
} as const);

export const spacing = createTokens({
    xs2: 2,
    xs1: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xl2: 44,
    xl3: 64
} as const);

export const fontSize = createTokens({
    h1: 34,
    h2: 30,
    h3: 26,
    h4: 22,
    h5: 20,
    h6: 18,
    body: 16,
    caption: 14
} as const);

export const radii = createTokens({
    xs1: 2,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
    xl2: 32
} as const);

export const fontWeight = createTokens({
    bold: 600,
    medium: 500,
    regular: 400
} as const);
