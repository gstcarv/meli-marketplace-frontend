import { HTMLAttributes } from 'react';

/**
 * workaroud function to due with styled-components incompatibilty
 */
export type HTMLProps<T> = Omit<HTMLAttributes<T>, 'contentEditable'>;
