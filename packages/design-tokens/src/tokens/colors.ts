import { createTokens, GetTokens } from '../lib/create-tokens';

export const colors = createTokens({
    'success-500': '#00a650',
    'primary-500': '#FFE600',
    'accent-500': '#3483fa',
    'accent-600': '#3a65ba',
    'accent-700': '#2f5290',
    'accent-800': '#1e3a6d',
    'gray-100': '#EEEEEE',
    'gray-200': '#EDECEC',
    'gray-300': '#D6D5D4',
    'gray-400': '#B2B1B0',
    'gray-500': '#9A9897',
    'gray-600': '#727272',
    'gray-700': '#585858',
    'gray-800': '#404040',
    'gray-900': '#2B2B2B'
} as const);

export type Colors = GetTokens<typeof colors>;
