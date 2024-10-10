import { ComponentProps, RefObject } from 'react';

export type SearchBarProps = ComponentProps<'input'> & {
    inputRef?: RefObject<HTMLInputElement>;
};
