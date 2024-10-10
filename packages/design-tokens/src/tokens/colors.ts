import { createTokens } from '../lib/create-tokens';

export const colors = createTokens({
    'primary-500': '#FFE600',
    'accent-500': '#4A7FEC',
    'gray-100': '#EEEEEE',
    'gray-200': '#EDECEC',
    'gray-300': '#D6D5D4',
    'gray-400': '#B2B1B0',
    'gray-500': '#9A9897',
    'gray-600': '#727272'
} as const);
