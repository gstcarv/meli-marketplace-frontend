import { ComponentProps } from 'react';

export type IconProps = Pick<ComponentProps<'input'>, 'className' | 'alt' | 'color'> & { size?: number };
