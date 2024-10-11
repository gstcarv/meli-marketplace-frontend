import { Spacing } from '@meli/design-tokens';
import styled from 'styled-components';

type Props = {
    my?: Spacing;
};

export const Divider = styled.hr<Props>`
    border: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.get('gray-100')};
    width: 100%;
    margin: ${({ my, theme }) => (my ? theme.spacing.get(my) : 0)} 0;
`;
