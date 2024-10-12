import { ComponentProps } from 'react';
import { ButtonBase, ButtonText } from './styled';
import { ButtonProps } from './types';

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <ButtonBase {...(props as ComponentProps<typeof ButtonBase>)}>
            <ButtonText>{children}</ButtonText>
        </ButtonBase>
    );
};
